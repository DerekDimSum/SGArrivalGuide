/* Moving to Singapore — A Family Guide
   Renders the whole page from CONTENT (assets/content.js). No dependencies. */

(function () {
  "use strict";

  var LANG_KEY = "sgguide:lang";
  var CUR_KEY = "sgguide:currency";
  var CHECK_KEY = "sgguide:checklist";

  /* ---------- state ---------- */

  function langCodes() { return CONTENT.languages.map(function (l) { return l.code; }); }

  function detectLang() {
    try {
      var saved = localStorage.getItem(LANG_KEY);
      if (langCodes().indexOf(saved) !== -1) return saved;
    } catch (e) {}
    var nav = (navigator.language || "").toLowerCase();
    var match = langCodes().filter(function (c) { return c !== "en" && nav.indexOf(c) === 0; })[0];
    return match || "en";
  }

  function detectCurrency() {
    try {
      var saved = localStorage.getItem(CUR_KEY);
      if (CONTENT.currencies.list.some(function (c) { return c.code === saved; })) return saved;
    } catch (e) {}
    return CONTENT.currencies.base;
  }

  var lang = detectLang();
  var currency = detectCurrency();

  function loadChecks() {
    try { return JSON.parse(localStorage.getItem(CHECK_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveChecks(obj) {
    try { localStorage.setItem(CHECK_KEY, JSON.stringify(obj)); } catch (e) {}
  }
  var checks = loadChecks();

  // view routing: "home" or one of the nav section ids
  var currentView = "home";

  /* ---------- helpers ---------- */

  /* ---------- money conversion ----------
     Base amounts in content are written as S$. When a non-base currency is selected,
     every S$ amount (single, range, k-shorthand, decimal) is rewritten at render time. */

  function activeCurrency() {
    return CONTENT.currencies.list.filter(function (c) { return c.code === currency; })[0]
      || CONTENT.currencies.list[0];
  }

  function niceRound(v, code) {
    if (code === "KRW") {
      if (v < 10000) return Math.round(v / 10) * 10;
      if (v < 1000000) return Math.round(v / 1000) * 1000;
      if (v < 10000000) return Math.round(v / 10000) * 10000;
      return Math.round(v / 100000) * 100000;
    }
    // USD
    if (v < 10) return Math.round(v * 10) / 10;
    if (v < 100) return Math.round(v);
    if (v < 1000) return Math.round(v / 5) * 5;
    if (v < 10000) return Math.round(v / 50) * 50;
    return Math.round(v / 500) * 500;
  }

  function fmtAmount(sgd, cur, asK) {
    var v = sgd * cur.rate;
    if (asK && cur.code === "USD") return Math.round(v / 1000) + "k";
    var r = niceRound(v, cur.code);
    return r.toLocaleString("en-US", { maximumFractionDigits: r < 10 ? 1 : 0 });
  }

  var MONEY_RE = /S\$\s?([\d,]+(?:\.\d+)?)(k)?(?:\s?(–|-)\s?([\d,]+(?:\.\d+)?)(k)?)?(\+)?/g;

  function convertMoney(str) {
    var cur = activeCurrency();
    if (cur.code === CONTENT.currencies.base || !str || str.indexOf("S$") === -1) return str;
    return str.replace(MONEY_RE, function (m, n1, k1, dash, n2, k2, plus) {
      var a = parseFloat(n1.replace(/,/g, ""));
      var b = n2 != null ? parseFloat(n2.replace(/,/g, "")) : null;
      // "S$15–28k" means 15k–28k: a k on the upper bound implies it on the lower
      if (k2 && !k1) k1 = "k";
      if (k1) a *= 1000;
      if (k2) b *= 1000;
      var asK = !!(k1 || k2);
      var out = cur.label + fmtAmount(a, cur, asK);
      if (b != null) out += (dash || "–") + fmtAmount(b, cur, asK);
      return out + (plus || "");
    });
  }

  // t() accepts a {en,ko,...} leaf or a plain string (proper nouns identical in every language);
  // missing languages fall back to English. All money passes through convertMoney.
  function t(leaf) {
    if (leaf == null) return "";
    var s = typeof leaf === "string" ? leaf : (leaf[lang] != null ? leaf[lang] : (leaf.en || ""));
    return convertMoney(s);
  }

  function h(tag, attrs) {
    var el = document.createElement(tag);
    if (attrs) {
      for (var k in attrs) {
        if (!Object.prototype.hasOwnProperty.call(attrs, k)) continue;
        var v = attrs[k];
        if (v == null || v === false) continue;
        if (k === "text") el.textContent = v;
        else if (k === "html") el.innerHTML = v;
        else if (k === "dataset") {
          for (var d in v) el.setAttribute("data-" + d.replace(/[A-Z]/g, function (m) { return "-" + m.toLowerCase(); }), v[d]);
        }
        else if (k.indexOf("on") === 0 && typeof v === "function") el.addEventListener(k.slice(2), v);
        else el.setAttribute(k, v === true ? "" : v);
      }
    }
    for (var i = 2; i < arguments.length; i++) {
      var c = arguments[i];
      if (c == null) continue;
      if (Array.isArray(c)) c.forEach(function (n) { if (n != null) el.appendChild(typeof n === "string" ? document.createTextNode(n) : n); });
      else el.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    }
    return el;
  }

  function srcLink(url, label) {
    return h("a", { class: "src-link", href: url, target: "_blank", rel: "noopener", text: t(label || CONTENT.ui.source) });
  }

  function verifyBadge() {
    return h("span", { class: "verify-badge", text: t(CONTENT.ui.verify) });
  }

  function sectionHeader(id, titleLeaf, icon) {
    return h("div", { class: "section-head" },
      h("span", { class: "section-icon", "aria-hidden": "true", text: icon || "" }),
      h("h2", { id: id + "-title", text: t(titleLeaf) })
    );
  }

  /* ---------- header + hero ---------- */

  function segControl(groupLabel, options, isActive, onSelect) {
    return h("div", { class: "seg", role: "group", "aria-label": groupLabel },
      options.map(function (o) {
        return h("button", {
          type: "button",
          class: isActive(o) ? "active" : null,
          "aria-pressed": isActive(o) ? "true" : "false",
          lang: o.code && langCodes().indexOf(o.code) !== -1 ? o.code : null,
          text: o.label,
          onclick: function () { onSelect(o); }
        });
      })
    );
  }

  function renderHeader() {
    var header = document.getElementById("site-header");
    header.innerHTML = "";

    var langSeg = segControl(t(CONTENT.ui.langGroup), CONTENT.languages,
      function (o) { return o.code === lang; },
      function (o) { if (o.code !== lang) setLang(o.code); });

    var curSeg = segControl(t(CONTENT.ui.curGroup), CONTENT.currencies.list,
      function (o) { return o.code === currency; },
      function (o) { if (o.code !== currency) setCurrency(o.code); });
    curSeg.setAttribute("title", t(CONTENT.currencies.note));

    var nav = h("nav", { class: "site-nav", "aria-label": lang === "ko" ? "섹션 이동" : "Sections" });
    nav.appendChild(h("a", { href: "#home", dataset: { navId: "home" }, text: t(CONTENT.ui.homeLabel) }));
    CONTENT.nav.forEach(function (item) {
      nav.appendChild(h("a", { href: "#" + item.id, dataset: { navId: item.id }, text: t(item.label) }));
    });

    header.appendChild(h("div", { class: "header-row" },
      h("a", { class: "site-title", href: "#top", text: t(CONTENT.ui.siteTitle) }),
      h("div", { class: "header-controls" }, langSeg, curSeg)
    ));
    header.appendChild(nav);
    header.appendChild(h("div", { class: "sub-nav", id: "sub-nav", hidden: true }));
  }

  /* the header's second row: subsection anchors for the current view */
  var subSpy = null;
  function updateSubNav(viewId) {
    var row = document.getElementById("sub-nav");
    if (!row) return;
    var item = null;
    CONTENT.nav.forEach(function (n) { if (n.id === viewId) item = n; });
    var subs = item && item.subs;
    row.innerHTML = "";
    row.hidden = !subs;
    document.documentElement.classList.toggle("has-subnav", !!subs);
    if (subSpy) { subSpy.disconnect(); subSpy = null; }
    if (!subs) return;
    var links = {};
    subs.forEach(function (s) {
      links[s.id] = row.appendChild(h("a", { href: "#" + s.id, dataset: { subId: s.id }, text: t(s.label) }));
    });
    subSpy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        for (var k in links) links[k].classList.remove("active");
        var l = links[e.target.id];
        if (l) l.classList.add("active");
      });
    }, { rootMargin: "-25% 0px -65% 0px" });
    subs.forEach(function (s) {
      var el = document.getElementById(s.id);
      if (el) subSpy.observe(el);
    });
  }

  function renderHero(main) {
    main.appendChild(h("section", { class: "hero", id: "top" },
      h("p", { class: "hero-kicker", text: t(CONTENT.hero.subtitle) }),
      h("h1", { text: t(CONTENT.hero.title) }),
      h("p", { class: "hero-tagline", text: t(CONTENT.hero.tagline) })
    ));
  }

  function renderHome(main) {
    main.appendChild(h("section", { id: "home", class: "home-view", "aria-label": t(CONTENT.ui.homeLabel) },
      h("div", { class: "section-cards" }, CONTENT.nav.map(function (n) {
        return h("a", { class: "section-card", href: "#" + n.id },
          h("span", { class: "card-title", text: t(n.label) }),
          h("span", { class: "card-desc", text: t(n.desc) }),
          h("span", { class: "card-arrow", "aria-hidden": "true", text: "→" })
        );
      }))
    ));
  }

  /* ---------- checklist ---------- */

  function renderChecklist(main) {
    var c = CONTENT.checklist;
    var done = c.items.filter(function (i) { return checks[i.id]; }).length;

    var progress = h("p", { class: "check-progress", role: "status" },
      h("strong", { text: done + " / " + c.items.length }), " " + t(CONTENT.ui.checklistProgress));

    var list = h("ol", { class: "checklist" });
    c.items.forEach(function (item) {
      var input = h("input", {
        type: "checkbox", id: "chk-" + item.id, checked: !!checks[item.id],
        onchange: function (e) {
          checks[item.id] = e.target.checked;
          if (!e.target.checked) delete checks[item.id];
          saveChecks(checks);
          li.classList.toggle("done", e.target.checked);
          var n = c.items.filter(function (i) { return checks[i.id]; }).length;
          progress.firstChild.textContent = n + " / " + c.items.length;
        }
      });
      var links = h("p", { class: "check-links" });
      if (item.url) links.appendChild(srcLink(item.url, CONTENT.ui.officialLink));
      if (item.anchor) links.appendChild(h("a", { class: "src-link", href: "#" + item.anchor, text: t(item.anchorLabel || { en: "Jump to section ↓", ko: "해당 섹션으로 ↓" }) }));

      var li = h("li", { class: "check-item" + (checks[item.id] ? " done" : "") },
        h("div", { class: "check-row" },
          input,
          h("label", { for: "chk-" + item.id },
            h("span", { class: "check-title", text: t(item.title) }),
            item.verify ? verifyBadge() : null
          )
        ),
        h("p", { class: "check-body", text: t(item.body) }),
        links
      );
      list.appendChild(li);
    });

    var reset = h("button", {
      class: "reset-btn", type: "button", text: t(CONTENT.ui.resetChecklist),
      onclick: function () {
        checks = {}; saveChecks(checks);
        list.querySelectorAll("input[type=checkbox]").forEach(function (i) { i.checked = false; });
        list.querySelectorAll(".check-item").forEach(function (li) { li.classList.remove("done"); });
        progress.firstChild.textContent = "0 / " + c.items.length;
      }
    });

    var dp = CONTENT.checklist.dpFacts;
    var dpBox = h("aside", { class: "info-box" },
      h("h3", { text: t(dp.title) }),
      h("ul", {}, dp.items.map(function (f) {
        return h("li", {},
          h("span", { text: t(f.body) + " " }),
          f.url ? srcLink(f.url) : null);
      }))
    );

    main.appendChild(h("section", { id: "checklist", class: "section", "aria-labelledby": "checklist-title" },
      sectionHeader("checklist", c.title, "☑"),
      h("p", { class: "section-intro", text: t(c.intro) }),
      progress, list, reset, dpBox
    ));
  }

  /* ---------- education ---------- */

  function feeCell(leaf, verify, url) {
    var td = h("td", {}, h("span", { text: t(leaf) + " " }));
    if (verify) td.appendChild(verifyBadge());
    if (url) td.appendChild(srcLink(url));
    return td;
  }

  /* ---------- age calculator ---------- */

  var DOB_KEY = "sgguide:childdob";

  function levelLocal(a) {
    if (a <= 1) return { en: "infant care", ko: "영유아 보육" };
    if (a === 2) return "Playgroup";
    if (a === 3) return "N1";
    if (a === 4) return "N2";
    if (a === 5) return "K1";
    if (a === 6) return "K2";
    if (a <= 12) return "P" + (a - 6);
    return { en: "Secondary", ko: "중등 과정" };
  }
  function levelBritish(a) {
    if (a < 2) return { en: "too young", ko: "아직 어려요" };
    if (a === 2) return "Pre-Nursery";
    if (a === 3) return "Nursery";
    if (a === 4) return "Reception";
    return "Year " + (a - 4);
  }
  function levelAmerican(a) {
    if (a < 2) return { en: "too young", ko: "아직 어려요" };
    if (a === 2) return { en: "Early years", ko: "Early years (영유아반)" };
    if (a === 3) return "Preschool";
    if (a === 4) return "Pre-K";
    if (a === 5) return "Kindergarten";
    return "Grade " + (a - 5);
  }
  // Korean system (SKIS): birth-year cohorts, March–February school year.
  // Class = the age the cohort turns during the AY-start calendar year.
  function levelKorean(a) {
    if (a < 4) return { en: "too young (유치부 from 만3)", ko: "아직 어려요 (유치부는 만 3세부터)" };
    if (a === 4) return { en: "유치부 만3세반", ko: "유치부 만3세반" };
    if (a === 5) return { en: "유치부 만4세반", ko: "유치부 만4세반" };
    if (a === 6) return { en: "유치부 만5세반", ko: "유치부 만5세반" };
    if (a <= 12) return { en: "초등 " + (a - 6) + " (Elementary " + (a - 6) + ")", ko: "초등 " + (a - 6) + "학년" };
    return { en: "중등 이상 (secondary)", ko: "중등 과정 이상" };
  }

  function calcLevels(m, y) {
    var now = new Date();
    var cy = now.getFullYear();
    // local system: the age the child turns this calendar year
    var aLocal = cy - y;
    // Sep-cutoff systems: current academic year started last September if we're before it
    var ayStart = (now.getMonth() + 1 >= 9) ? cy : cy - 1;
    var aSep = (ayStart - y) - (m >= 9 ? 1 : 0);
    // Korean system: March school year, birth-year cohorts
    var ayKo = (now.getMonth() + 1 >= 3) ? cy : cy - 1;
    var aKo = ayKo - y;
    function ayLabel(s) { return s + "/" + String(s + 1).slice(2); }
    return [
      { sys: "local", now: levelLocal(aLocal), next: levelLocal(aLocal + 1), nowAy: String(cy), nextAy: String(cy + 1) },
      { sys: "british", now: levelBritish(aSep), next: levelBritish(aSep + 1), nowAy: ayLabel(ayStart), nextAy: ayLabel(ayStart + 1) },
      { sys: "american", now: levelAmerican(aSep), next: levelAmerican(aSep + 1), nowAy: ayLabel(ayStart), nextAy: ayLabel(ayStart + 1) },
      { sys: "korean", now: levelKorean(aKo), next: levelKorean(aKo + 1), nowAy: ayKo + " (Mar–)", nextAy: (ayKo + 1) + " (Mar–)" }
    ];
  }

  function renderCalculator() {
    var cal = CONTENT.education.calculator;
    var saved = {};
    try { saved = JSON.parse(localStorage.getItem(DOB_KEY)) || {}; } catch (e) {}

    var monthSel = h("select", { "aria-label": t(cal.monthLabel) });
    for (var m = 1; m <= 12; m++) {
      monthSel.appendChild(h("option", { value: m, selected: saved.m === m, text: lang === "ko" ? m + "월" : new Date(2000, m - 1, 1).toLocaleString("en", { month: "short" }) }));
    }
    var yearSel = h("select", { "aria-label": t(cal.yearLabel) });
    var cy = new Date().getFullYear();
    yearSel.appendChild(h("option", { value: "", text: lang === "ko" ? "연도" : "year", disabled: true, selected: saved.y == null }));
    for (var yv = cy; yv >= cy - 17; yv--) {
      yearSel.appendChild(h("option", { value: yv, selected: saved.y === yv, text: String(yv) }));
    }

    var results = h("div", { class: "calc-results" });

    function update() {
      var mv = parseInt(monthSel.value, 10);
      var yv2 = parseInt(yearSel.value, 10);
      results.innerHTML = "";
      if (!yv2) return;
      try { localStorage.setItem(DOB_KEY, JSON.stringify({ m: mv, y: yv2 })); } catch (e) {}
      var rows = calcLevels(mv, yv2);
      results.appendChild(h("div", { class: "table-wrap" }, h("table", { class: "data-table calc-table" },
        h("thead", {}, h("tr", {},
          h("th", { text: t(cal.cols.system) }),
          h("th", { text: t(cal.cols.cutoff) }),
          h("th", { text: t(cal.cols.now) }),
          h("th", { text: t(cal.cols.next) })
        )),
        h("tbody", {}, rows.map(function (r) {
          var s = cal.systems[r.sys];
          return h("tr", {},
            h("th", { scope: "row", text: t(s.name) }),
            h("td", { text: t(s.cutoff) }),
            h("td", {}, h("strong", { text: t(r.now) }), h("span", { class: "ay-label", text: " · " + r.nowAy })),
            h("td", {}, h("span", { text: t(r.next) }), h("span", { class: "ay-label", text: " · " + r.nextAy }))
          );
        }))
      )));
    }
    monthSel.addEventListener("change", update);
    yearSel.addEventListener("change", update);

    var box = h("div", { id: "edu-calculator", class: "calc-box" },
      h("h3", { text: t(cal.title) }),
      h("p", { class: "section-intro", text: t(cal.intro) }),
      h("div", { class: "calc-inputs" },
        h("label", {}, h("span", { text: t(cal.yearLabel) }), yearSel),
        h("label", {}, h("span", { text: t(cal.monthLabel) }), monthSel)
      ),
      results,
      h("p", { class: "table-note" }, h("span", { text: t(cal.note) + " " }), verifyBadge())
    );
    if (saved.y) update();
    return box;
  }

  /* ---------- school directory (filterable) ---------- */

  var schoolFilters = { stage: "all", type: "all", system: "all" };

  function renderSchools() {
    var sc = CONTENT.education.schools;

    var tbody = h("tbody");
    var count = h("p", { class: "table-note", role: "status" });

    function rebuild() {
      tbody.innerHTML = "";
      var shown = 0;
      sc.rows.forEach(function (r) {
        if (schoolFilters.stage !== "all" && r.stage !== schoolFilters.stage) return;
        if (schoolFilters.type !== "all" && r.type !== schoolFilters.type) return;
        if (schoolFilters.system !== "all" && r.system !== schoolFilters.system) return;
        shown++;
        tbody.appendChild(h("tr", {},
          h("th", { scope: "row", text: t(r.name) }),
          h("td", { text: t(sc.stages[r.stage]) }),
          h("td", { text: t(sc.types[r.type]) }),
          h("td", {}, h("span", { text: t(sc.systemNames[r.system]) + " " }), r.systemVerify ? verifyBadge() : null),
          h("td", {}, h("span", { text: t(r.fees) + " " }), r.verify ? verifyBadge() : null),
          h("td", { text: t(r.waitlist) }),
          h("td", { text: t(r.location) })
        ));
      });
      count.textContent = shown + " / " + sc.rows.length + " " + t(sc.countLabel);
    }

    function filterRow(groupKey, options) {
      var row = h("div", { class: "filter-row" },
        h("span", { class: "filter-label", text: t(sc.filterGroups[groupKey]) }));
      var group = h("div", { class: "chips filter-chips" });
      var opts = [{ id: "all", label: sc.all }].concat(options);
      opts.forEach(function (o) {
        var chip = h("button", {
          type: "button",
          class: "chip filter-chip" + (schoolFilters[groupKey] === o.id ? " nice" : ""),
          "aria-pressed": schoolFilters[groupKey] === o.id ? "true" : "false",
          text: t(o.label),
          onclick: function () {
            schoolFilters[groupKey] = o.id;
            group.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("nice"); c.setAttribute("aria-pressed", "false"); });
            chip.classList.add("nice");
            chip.setAttribute("aria-pressed", "true");
            rebuild();
          }
        });
        group.appendChild(chip);
      });
      row.appendChild(group);
      return row;
    }

    function toOptions(obj) {
      return Object.keys(obj).map(function (k) { return { id: k, label: obj[k] }; });
    }

    rebuild();
    var body = h("div", {},
      h("p", { class: "section-intro", text: t(sc.intro) }),
      filterRow("stage", toOptions(sc.stages)),
      filterRow("type", toOptions(sc.types)),
      filterRow("system", toOptions(sc.systemNames)),
      count,
      h("div", { class: "table-wrap" }, h("table", { class: "data-table schools-table" },
        h("thead", {}, h("tr", {},
          h("th", { text: t(sc.cols.name) }), h("th", { text: t(sc.cols.stage) }),
          h("th", { text: t(sc.cols.type) }), h("th", { text: t(sc.cols.system) }),
          h("th", { text: t(sc.cols.fees) }), h("th", { text: t(sc.cols.waitlist) }),
          h("th", { text: t(sc.cols.location) })
        )),
        tbody
      ))
    );
    return sub("edu-schools", sc.title, body);
  }

  function renderEducation(main) {
    var ed = CONTENT.education;
    var section = h("section", { id: "education", class: "section", "aria-labelledby": "education-title" },
      sectionHeader("education", ed.title, "✎"));

    section.appendChild(renderCalculator());
    section.appendChild(renderSchools());

    /* preschool */
    var ps = ed.preschool;
    var psBody = h("div", {},
      h("p", { text: t(ps.intro) }),
      h("h4", { text: t(ps.levels.title) }),
      h("div", { class: "table-wrap" }, h("table", { class: "mini-table" },
        h("tbody", {}, ps.levels.rows.map(function (r) {
          return h("tr", {}, h("th", { scope: "row", text: r.level }), h("td", { text: t(r.age) }));
        }))
      )),
      h("p", {}, h("span", { text: t(ps.dpNote) + " " }), srcLink(ps.dpNoteUrl)),
      h("h4", { text: t(ps.fees.title) }),
      h("div", { class: "table-wrap" }, h("table", { class: "data-table" },
        h("thead", {}, h("tr", {},
          h("th", { text: t(ps.fees.cols.tier) }),
          h("th", { text: t(ps.fees.cols.example) }),
          h("th", { text: t(ps.fees.cols.fee) })
        )),
        h("tbody", {}, ps.fees.rows.map(function (r) {
          return h("tr", {},
            h("td", { class: "tier-cell", text: t(r.tier) }),
            h("td", { text: t(r.example) }),
            feeCell(r.fee, r.verify, r.url)
          );
        }))
      )),
      h("h4", { text: t(ps.twins.title) }),
      h("p", { text: t(ps.twins.body) }),
      h("h4", { text: t(ps.waitlist.title) }),
      h("p", {}, h("span", { text: t(ps.waitlist.body) + " " }), srcLink(ps.waitlist.srcUrl)),
      h("h4", { text: t(ps.docs.title) }),
      h("ul", {}, ps.docs.items.map(function (d) { return h("li", { text: t(d) }); })),
      h("p", {}, srcLink(ps.docs.srcUrl, CONTENT.ui.officialLink))
    );
    section.appendChild(sub("edu-preschool", ps.title, psBody));

    /* primary */
    var pr = ed.primary;
    var intlTable = h("div", { class: "table-wrap" }, h("table", { class: "data-table" },
      h("thead", {}, h("tr", {},
        h("th", { text: t(pr.intl.cols.tier) }),
        h("th", { text: t(pr.intl.cols.schools) }),
        h("th", { text: t(pr.intl.cols.fees) }),
        h("th", { text: t(pr.intl.cols.waitlist) }),
        h("th", { text: t(pr.intl.cols.eal) })
      )),
      h("tbody", {}, pr.intl.rows.map(function (r) {
        return h("tr", {},
          h("td", { class: "tier-cell", text: r.tier }),
          h("td", { text: t(r.schools) }),
          h("td", { text: t(r.fees) }),
          h("td", { text: t(r.waitlist) }),
          h("td", { text: t(r.eal) })
        );
      }))
    ));

    var prBody = h("div", {},
      h("p", { text: t(pr.framing) }),
      h("h4", { text: t(pr.local.title) }),
      h("ul", {}, pr.local.items.map(function (i) {
        return h("li", {}, h("span", { text: t(i) + " " }), i.verify ? verifyBadge() : null);
      })),
      h("p", {}, srcLink(pr.local.srcUrl, CONTENT.ui.officialLink)),
      h("h4", { text: t(pr.intl.title) }),
      h("p", { text: t(pr.intl.intro) }),
      intlTable,
      h("p", {}, h("span", { text: t(pr.intl.extras) + " " }), srcLink(pr.intl.extrasUrl)),
      h("div", { class: "info-box" },
        h("h4", { text: t(pr.intl.decision.title) }),
        h("ul", {}, pr.intl.decision.items.map(function (i) { return h("li", { text: t(i) }); }))
      ),
      h("h4", { text: t(pr.skis.title) }),
      h("p", {}, h("span", { text: t(pr.skis.body) + " " }), pr.skis.verify ? verifyBadge() : null, " ", srcLink(pr.skis.url, CONTENT.ui.officialLink))
    );
    section.appendChild(sub("edu-primary", pr.title, prBody));

    /* enrichment */
    var en = ed.enrichment;
    var enBody = h("div", {},
      h("p", { text: t(en.intro) }),
      h("ul", { class: "enrich-list" }, en.items.map(function (i) {
        return h("li", {},
          h("strong", { text: t(i.name) + ": " }),
          h("span", { text: t(i.detail) + " " }),
          i.verify ? verifyBadge() : null, " ",
          srcLink(i.url)
        );
      })),
      h("p", {}, h("span", { text: t(en.budget) + " " }), en.budgetVerify ? verifyBadge() : null)
    );
    section.appendChild(sub("edu-enrichment", en.title, enBody));

    main.appendChild(section);
  }

  // collapsible subsection (<details>) — open by default on wide screens
  function sub(key, titleLeaf, bodyEl) {
    var d = h("details", { class: "subsection", id: key, dataset: { key: key } },
      h("summary", {}, h("h3", { text: t(titleLeaf) })),
      h("div", { class: "sub-body" }, bodyEl)
    );
    if (openState.hasOwnProperty(key) ? openState[key] : wideScreen()) d.setAttribute("open", "");
    return d;
  }

  function wideScreen() { return window.matchMedia("(min-width: 768px)").matches; }

  /* ---------- where to live ---------- */

  function activateArea(id, scroll) {
    document.querySelectorAll(".map-figure .area").forEach(function (g) {
      g.classList.toggle("active", g.getAttribute("data-target") === id);
    });
    if (scroll) {
      var card = document.getElementById("area-" + id);
      if (card) {
        card.setAttribute("open", "");
        card.scrollIntoView({ behavior: "smooth", block: "start" });
        card.classList.remove("flash");
        void card.offsetWidth; // restart animation
        card.classList.add("flash");
      }
    }
  }

  // inject the hand-drawn schematic (content.js living.map.svg) and wire its clickable areas
  function injectMap(host) {
    host.innerHTML = CONTENT.living.map.svg;
    host.querySelectorAll(".area").forEach(function (a) {
      function go() { activateArea(a.getAttribute("data-target"), true); }
      a.addEventListener("click", go);
      a.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); }
      });
    });
  }

  /* ---------- real map (Leaflet, self-hosted; OSM/CARTO raster tiles) ---------- */

  var leafletMap = null;
  var tileLayer = null;

  function darkTiles() { return window.matchMedia("(prefers-color-scheme: dark)").matches; }

  function tileUrl() {
    return darkTiles()
      ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      : "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png";
  }

  function biLabel(leaf, cls) {
    return "<span class='" + (cls || "") + " lang-en'>" + leaf.en + "</span>" +
           "<span class='" + (cls || "") + " lang-ko'>" + leaf.ko + "</span>";
  }

  function initRealMap() {
    var host = document.getElementById("real-map");
    if (!host || typeof L === "undefined") return;
    if (leafletMap) { leafletMap.invalidateSize(); return; }

    var geo = CONTENT.living.map.geo;
    var accent = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#b4552d";

    leafletMap = L.map(host, { scrollWheelZoom: false, attributionControl: true });
    leafletMap.attributionControl.setPrefix(false);
    tileLayer = L.tileLayer(tileUrl(), {
      maxZoom: 19,
      attribution: "&copy; <a href='https://www.openstreetmap.org/copyright' target='_blank' rel='noopener'>OpenStreetMap</a> contributors &copy; <a href='https://carto.com/attributions' target='_blank' rel='noopener'>CARTO</a>"
    }).addTo(leafletMap);
    leafletMap.fitBounds(geo.bounds);

    CONTENT.living.areas.forEach(function (area) {
      var pts = geo.areas[area.id];
      if (!pts) return;
      var poly = L.polygon(pts, {
        color: accent, weight: 2, dashArray: "6 5",
        fillColor: accent, fillOpacity: 0.12
      }).addTo(leafletMap);
      // spread the two western labels apart so their pills don't collide at island zoom
      var labelDir = { "holland-village": "top", "clementi": "bottom" }[area.id] || "center";
      poly.bindTooltip(biLabel(area.short), {
        permanent: true, direction: labelDir, className: "map-real-label"
      });
      poly.on("click", function () { activateArea(area.id, true); });
      poly.on("mouseover", function () { poly.setStyle({ fillOpacity: 0.25, dashArray: null }); });
      poly.on("mouseout", function () { poly.setStyle({ fillOpacity: 0.12, dashArray: "6 5" }); });
      var el = poly.getElement();
      if (el) {
        el.setAttribute("tabindex", "0");
        el.setAttribute("role", "link");
        el.setAttribute("aria-label", t(area.name));
        el.addEventListener("keydown", function (e) {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); activateArea(area.id, true); }
        });
      }
    });

    geo.landmarks.forEach(function (lm) {
      L.circleMarker([lm.lat, lm.lng], {
        radius: lm.star ? 7 : 5,
        color: accent, weight: 2,
        fillColor: lm.star ? accent : "#ffffff", fillOpacity: 1
      }).addTo(leafletMap)
        .bindTooltip(biLabel(lm.label), {
          permanent: true, direction: lm.dir || "top",
          offset: lm.dir === "left" ? [-8, 0] : lm.dir === "right" ? [8, 0] : [0, -8],
          className: "map-real-lm"
        });
    });
  }

  // swap tile style when the OS theme flips
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
    if (tileLayer) tileLayer.setUrl(tileUrl());
  });

  function selectMapTab(which) {
    var isReal = which === "real";
    var realPanel = document.getElementById("map-real-panel");
    var schPanel = document.getElementById("map-schematic-panel");
    if (!realPanel || !schPanel) return;
    realPanel.hidden = !isReal;
    schPanel.hidden = isReal;
    document.querySelectorAll(".map-tab").forEach(function (b) {
      var sel = b.getAttribute("data-tab") === which;
      b.classList.toggle("active", sel);
      b.setAttribute("aria-selected", sel ? "true" : "false");
    });
    if (isReal) { initRealMap(); }
  }

  /* ---------- priorities picker ---------- */

  var PICKS_KEY = "sgguide:picks";

  function loadPicks() {
    try { return JSON.parse(localStorage.getItem(PICKS_KEY)) || {}; } catch (e) { return {}; }
  }

  function renderPicker() {
    var pk = CONTENT.living.picker;
    var entries = CONTENT.living.atlas.entries;
    var picks = loadPicks();

    var results = h("div", { class: "picker-results" });

    function critLabel(id) {
      var found = null;
      pk.criteria.forEach(function (c) { if (c.id === id) found = c; });
      return found ? t(found.label) : id;
    }

    function renderResults() {
      results.innerHTML = "";
      var musts = [], nices = [];
      for (var k in picks) (picks[k] === "must" ? musts : nices).push(k);
      var selected = musts.concat(nices);
      if (!selected.length) {
        results.appendChild(h("p", { class: "table-note", text: t(pk.empty) }));
        return;
      }
      var matches = entries.filter(function (e) {
        return musts.every(function (m) { return e.tags.indexOf(m) !== -1; });
      }).map(function (e) {
        var hit = selected.filter(function (s) { return e.tags.indexOf(s) !== -1; });
        return { e: e, hit: hit, score: hit.length };
      }).filter(function (r) { return r.score > 0; });
      matches.sort(function (a, b) {
        return (b.score - a.score) || ((b.e.researched ? 1 : 0) - (a.e.researched ? 1 : 0));
      });
      if (!matches.length) {
        results.appendChild(h("p", { class: "table-note", text: t(pk.noMatch) }));
        return;
      }
      results.appendChild(h("h4", { text: t(pk.resultsTitle) }));
      matches.forEach(function (r) {
        var e = r.e;
        var href = e.cardId ? "#area-" + e.cardId : "#atlas-" + e.id;
        results.appendChild(h("a", { class: "match-card", href: href },
          h("span", { class: "match-head" },
            h("strong", { text: t(e.name) }),
            h("span", { class: "match-dist", text: e.dist }),
            h("span", { class: "vibe-tag", text: t(e.vibe) })
          ),
          h("span", { class: "match-tags", text: t(pk.matchedLabel) + " " + r.hit.map(critLabel).join(" · ") })
        ));
      });
    }

    var chips = h("div", { class: "chips" });
    pk.criteria.forEach(function (c) {
      var stateEl = h("span", { class: "chip-state" });
      var chip = h("button", { type: "button", class: "chip" }, h("span", { text: t(c.label) }), stateEl);
      function paint() {
        var s = picks[c.id];
        chip.classList.toggle("nice", s === "nice");
        chip.classList.toggle("must", s === "must");
        chip.setAttribute("aria-pressed", s ? "true" : "false");
        stateEl.textContent = s === "must" ? t(pk.stateMust) : s === "nice" ? t(pk.stateNice) : "";
      }
      chip.addEventListener("click", function () {
        picks[c.id] = picks[c.id] === "nice" ? "must" : picks[c.id] === "must" ? undefined : "nice";
        if (!picks[c.id]) delete picks[c.id];
        try { localStorage.setItem(PICKS_KEY, JSON.stringify(picks)); } catch (e) {}
        paint(); renderResults();
      });
      paint();
      chips.appendChild(chip);
    });

    var reset = h("button", {
      class: "reset-btn", type: "button", text: t(pk.reset),
      onclick: function () {
        picks = {};
        try { localStorage.setItem(PICKS_KEY, "{}"); } catch (e) {}
        chips.querySelectorAll(".chip").forEach(function (ch) {
          ch.classList.remove("nice", "must");
          ch.setAttribute("aria-pressed", "false");
          ch.querySelector(".chip-state").textContent = "";
        });
        renderResults();
      }
    });

    renderResults();
    return h("div", { id: "living-picker", class: "picker" },
      h("h3", { text: t(pk.title) }),
      h("p", { class: "section-intro", text: t(pk.intro) }),
      chips, reset, results
    );
  }

  /* ---------- neighbourhood atlas ---------- */

  function renderAtlas() {
    var at = CONTENT.living.atlas;
    var wrap = h("div", { id: "living-atlas" },
      h("h3", { text: t(at.title) }),
      h("p", { class: "section-intro", text: t(at.intro) })
    );
    var grid = h("div", { class: "atlas-grid" });
    at.entries.forEach(function (e) {
      grid.appendChild(h("article", { class: "atlas-card" + (e.researched ? " researched" : ""), id: "atlas-" + e.id },
        h("div", { class: "match-head" },
          h("strong", { text: t(e.name) }),
          h("span", { class: "match-dist", text: e.dist }),
          h("span", { class: "vibe-tag", text: t(e.vibe) })
        ),
        h("p", { text: t(e.body) }),
        e.researched
          ? h("a", { class: "atlas-badge researched", href: "#area-" + e.cardId, text: t(at.researchedBadge) + " ↓" })
          : h("span", { class: "atlas-badge", text: t(at.sketchBadge) })
      ));
    });
    wrap.appendChild(grid);
    return wrap;
  }

  function renderLiving(main) {
    var lv = CONTENT.living;
    var section = h("section", { id: "living", class: "section", "aria-labelledby": "living-title" },
      sectionHeader("living", lv.title, "⌂"));

    /* overview: island intro + district decoder + housing types + market + office */
    var ov = h("div", { id: "living-overview" },
      h("h3", { text: t(lv.overviewTitle) }),
      h("p", { text: t(lv.overviewIntro) })
    );

    /* §3.0 district decoder */
    var dd = h("div", {},
      h("h3", { text: t(lv.districts.title) }),
      h("p", { text: t(lv.districts.intro) }),
      h("div", { class: "table-wrap" }, h("table", { class: "data-table" },
        h("thead", {}, h("tr", {},
          h("th", { text: t(lv.districts.cols.d) }), h("th", { text: t(lv.districts.cols.name) }),
          h("th", { text: t(lv.districts.cols.sub) }), h("th", { text: t(lv.districts.cols.rel) })
        )),
        h("tbody", {}, lv.districts.rows.map(function (r) {
          return h("tr", {},
            h("th", { scope: "row", text: r.d }),
            h("td", { text: t(r.name) }),
            h("td", { text: t(r.sub) }),
            h("td", { text: t(r.rel) })
          );
        }))
      ))
    );
    lv.districts.notes.forEach(function (n) { dd.appendChild(h("p", { text: t(n) })); });
    ov.appendChild(dd);

    /* §3.1 housing types */
    ov.appendChild(h("h3", { text: t(lv.housingTypes.title) }));
    ov.appendChild(h("ul", { class: "apps-list htype-list" }, lv.housingTypes.items.map(function (i) {
      return h("li", {},
        h("strong", { text: t(i.name) }),
        h("span", { text: " — " + t(i.body) + " " }),
        i.url ? srcLink(i.url) : null
      );
    })));

    /* §3.2 market context */
    var mk = h("div", {}, h("h3", { text: t(lv.market.title) }));
    lv.market.paras.forEach(function (p) { mk.appendChild(h("p", { text: t(p) })); });
    mk.appendChild(h("p", {}, srcLink(lv.market.srcUrl), " ", srcLink(lv.market.scarcityUrl), " ", srcLink(lv.market.hdbUrl, { en: "HDB quota tool ↗", ko: "HDB 쿼터 조회 ↗" })));
    ov.appendChild(mk);

    /* §3.3 office anchor */
    var office = h("aside", { class: "info-box office-box" }, h("h3", { text: t(lv.office.title) }));
    lv.office.paras.forEach(function (p) { office.appendChild(h("p", { text: t(p) })); });
    office.appendChild(h("p", {}, srcLink(lv.office.srcUrl), " ", srcLink(lv.office.cclUrl, { en: "CCL Stage 6 (LTA) ↗", ko: "서클선 6단계 (LTA) ↗" })));
    ov.appendChild(office);
    section.appendChild(ov);

    /* priorities picker */
    section.appendChild(renderPicker());

    /* §3.4 comparison table */
    section.appendChild(h("h3", { id: "living-compare", text: t(lv.comparison.title) }));
    section.appendChild(h("p", { class: "table-note", text: t(lv.comparison.note) }));
    var cols = lv.comparison.cols;
    section.appendChild(h("div", { class: "table-wrap" }, h("table", { class: "data-table cmp-table" },
      h("thead", {}, h("tr", {},
        h("th", { text: t(cols.area) }), h("th", { text: t(cols.br3) }), h("th", { text: t(cols.br4) }),
        h("th", { text: t(cols.commute) }), h("th", { text: t(cols.skis) }),
        h("th", { text: t(cols.hdb) }), h("th", { text: t(cols.vibe) })
      )),
      h("tbody", {}, lv.comparison.rows.map(function (r) {
        return h("tr", {},
          h("th", { scope: "row" }, h("a", { href: "#area-" + r.target, text: t(r.area) })),
          h("td", { text: t(r.br3) }),
          h("td", { text: t(r.br4) }),
          h("td", { text: t(r.commute) }),
          h("td", { text: t(r.skis) }),
          h("td", { text: t(r.hdb) }),
          h("td", { text: t(r.vibe) })
        );
      }))
    )));
    lv.comparison.footNotes.forEach(function (n, i) {
      section.appendChild(h("p", { class: "table-note" },
        h("span", { text: t(n) + " " }),
        n.verify ? verifyBadge() : null, " ",
        srcLink(i === 0 ? lv.comparison.erpUrl : lv.comparison.skisBusUrl)
      ));
    });

    /* map */
    var mapHost = h("div", { class: "map-host" });
    var tabs = h("div", { class: "map-tabs", role: "tablist" },
      h("button", {
        class: "map-tab active", type: "button", role: "tab", dataset: { tab: "real" },
        "aria-selected": "true", "aria-controls": "map-real-panel",
        text: t(CONTENT.ui.mapTabReal),
        onclick: function () { selectMapTab("real"); }
      }),
      h("button", {
        class: "map-tab", type: "button", role: "tab", dataset: { tab: "schematic" },
        "aria-selected": "false", "aria-controls": "map-schematic-panel",
        text: t(CONTENT.ui.mapTabSchematic),
        onclick: function () { selectMapTab("schematic"); }
      })
    );
    var realPanel = h("div", { id: "map-real-panel", class: "map-panel", role: "tabpanel" },
      h("div", { id: "real-map", class: "real-map" }),
      h("p", { class: "map-hint", text: t(CONTENT.ui.realMapHint) })
    );
    var schPanel = h("div", { id: "map-schematic-panel", class: "map-panel", role: "tabpanel", hidden: true },
      mapHost,
      h("p", { class: "map-hint", text: t(CONTENT.ui.mapHint) }),
      h("p", { class: "legend-title", text: t(CONTENT.ui.mrtLegend) }),
      h("ul", { class: "mrt-legend" }, Object.keys(lv.map.lines).map(function (key) {
        return h("li", {},
          h("span", { class: "legend-swatch key-" + key }),
          h("span", { text: t(lv.map.lines[key]) })
        );
      }))
    );
    var mapWrap = h("figure", { class: "map-figure", id: "sg-map" },
      h("h3", { text: t(lv.map.title) }),
      tabs, realPanel, schPanel
    );
    injectMap(mapHost);
    section.appendChild(mapWrap);

    /* neighbourhood atlas */
    section.appendChild(renderAtlas());

    /* area cards */
    lv.areas.forEach(function (a) {
      var gmaps = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(a.gmapsQuery);
      var parts = [
        { title: { en: "The pitch", ko: "한 줄 요약" }, body: a.pitch },
        { subAreas: true },
        { title: { en: "Walkability check", ko: "도보 생활권 점검" }, body: a.walk },
        { title: { en: "Kids", ko: "아이 키우기" }, body: a.kids, verify: a.kidsVerify },
        { title: { en: "Community makeup", ko: "커뮤니티 구성" }, body: a.community },
        { title: { en: "Property & prices", ko: "매물과 가격" }, body: a.property, verify: a.verify }
      ];
      var body = h("div", { class: "sub-body" });
      parts.forEach(function (p) {
        if (p.subAreas) {
          (a.subAreas || []).forEach(function (sa) {
            body.appendChild(h("div", { class: "subarea" },
              h("h4", { class: "subarea-name", text: t(sa.name) }),
              h("p", {}, h("span", { text: t(sa.body) + " " }), sa.verify ? verifyBadge() : null),
              sa.take ? h("div", { class: "local-take" },
                h("span", { class: "take-badge", text: t(CONTENT.ui.localTake) }),
                h("span", { text: t(sa.take) })
              ) : null
            ));
          });
          return;
        }
        if (!p.body) return;
        body.appendChild(h("h4", { text: t(p.title) }));
        body.appendChild(h("p", {}, h("span", { text: t(p.body) + " " }), p.verify ? verifyBadge() : null));
      });
      body.appendChild(h("p", { class: "card-links" },
        h("a", { class: "btn-link", href: gmaps, target: "_blank", rel: "noopener", text: t(CONTENT.ui.openInMaps) }),
        h("a", {
          class: "btn-link", href: "#sg-map", text: t(CONTENT.ui.showOnMap),
          onclick: function () { activateArea(a.id, false); }
        }),
        srcLink(a.srcUrl)
      ));

      var card = h("details", { class: "subsection area-card", id: "area-" + a.id, dataset: { key: "area-" + a.id } },
        h("summary", {},
          h("h3", {},
            h("span", { text: t(a.name) }),
            h("span", { class: "vibe-tag", text: t(a.vibe) })
          )
        ),
        body
      );
      if (openState.hasOwnProperty("area-" + a.id) ? openState["area-" + a.id] : wideScreen()) card.setAttribute("open", "");
      section.appendChild(card);
    });

    /* §3.6 helper's-room rule */
    section.appendChild(h("aside", { class: "info-box" },
      h("h3", { text: t(lv.helperRoom.title) }),
      h("p", {}, h("span", { text: t(lv.helperRoom.body) + " " }), srcLink(lv.helperRoom.srcUrl))
    ));

    /* §3.7 decision block */
    var dec = h("div", { class: "decision-block" },
      h("h3", { text: t(lv.decision.title) }),
      h("p", { class: "table-note", text: t(lv.decision.intro) }),
      h("ul", { class: "decision-list" }, lv.decision.items.map(function (d) {
        return h("li", {},
          h("strong", { text: t(d.priority) + " → " }),
          h("span", { text: t(d.pick) })
        );
      }))
    );
    section.appendChild(dec);

    /* renting box */
    var rb = h("aside", { class: "info-box renting-box", id: "renting-box" },
      h("h3", { text: t(lv.renting.title) }),
      h("ul", {}, lv.renting.items.map(function (i) {
        return h("li", { html: t(i) });
      })),
      h("p", {}, srcLink(lv.renting.srcUrl))
    );
    section.appendChild(rb);

    main.appendChild(section);
  }

  /* ---------- simple list sections ---------- */

  function renderCommunity(main) {
    var c = CONTENT.community;
    var section = h("section", { id: "community", class: "section", "aria-labelledby": "community-title" },
      sectionHeader("community", c.title, "◎"),
      h("p", { class: "section-intro", text: t(c.intro) }));
    c.items.forEach(function (i) {
      section.appendChild(h("div", { class: "entry" },
        h("h3", {}, h("span", { text: t(i.title) + " " }), i.verify ? verifyBadge() : null),
        h("p", {}, h("span", { text: t(i.body) + " " }), srcLink(i.url))
      ));
    });
    main.appendChild(section);
  }

  function renderChurch(main) {
    var c = CONTENT.church;
    var section = h("section", { id: "church", class: "section", "aria-labelledby": "church-title" },
      sectionHeader("church", c.title, "✝"),
      h("p", { class: "section-intro" }, h("span", { text: t(c.intro) + " " }), srcLink(c.introUrl)));
    c.items.forEach(function (i) {
      section.appendChild(h("div", { class: "entry" },
        h("h3", {}, h("span", { text: t(i.name) + " " }), i.verify ? verifyBadge() : null),
        h("p", {}, h("span", { text: t(i.body) + " " }), srcLink(i.url))
      ));
    });
    main.appendChild(section);
  }

  function renderHelper(main) {
    var hp = CONTENT.helper;
    var section = h("section", { id: "helper", class: "section", "aria-labelledby": "helper-title" },
      sectionHeader("helper", hp.title, "❋"),
      h("p", { class: "section-intro", text: t(hp.intro) }));
    hp.items.forEach(function (i) {
      section.appendChild(h("div", { class: "entry" },
        h("h3", { text: t(i.title) }),
        h("p", {}, h("span", { text: t(i.body) + " " }), i.url ? srcLink(i.url) : null)
      ));
    });
    main.appendChild(section);
  }

  function renderCar(main) {
    var car = CONTENT.car;
    var section = h("section", { id: "car", class: "section", "aria-labelledby": "car-title" },
      sectionHeader("car", car.title, "⛍"),
      h("h3", { text: t(car.coe.title) }),
      h("p", {}, h("span", { text: t(car.coe.body) + " " }), srcLink(car.coe.url, { en: "Live COE tracker ↗", ko: "COE 실시간 확인 ↗" })),
      h("h3", { text: t(car.reality.title) }),
      h("ul", {}, car.reality.items.map(function (i) { return h("li", { text: t(i) }); })),
      h("p", {}, srcLink(car.reality.srcUrl)),
      h("div", { class: "info-box" },
        h("h3", { text: t(car.childSeats.title) }),
        h("p", {}, h("span", { text: t(car.childSeats.body) + " " }), srcLink(car.childSeats.url))
      )
    );
    main.appendChild(section);
  }

  function renderApps(main) {
    var a = CONTENT.apps;
    var section = h("section", { id: "apps", class: "section", "aria-labelledby": "apps-title" },
      sectionHeader("apps", a.title, "▤"),
      h("p", { class: "section-intro", text: t(a.intro) }),
      h("ul", { class: "apps-list" }, a.items.map(function (i) {
        return h("li", {},
          h("strong", { text: t(i.name) }),
          h("span", { text: " — " + t(i.why) })
        );
      })),
      h("p", {}, srcLink(a.srcUrl))
    );
    main.appendChild(section);
  }

  function renderCosts(main) {
    var c = CONTENT.costs;
    var section = h("section", { id: "costs", class: "section", "aria-labelledby": "costs-title" },
      sectionHeader("costs", c.title, "◫"),
      h("p", { class: "section-intro", text: t(c.intro) }));
    if (currency !== CONTENT.currencies.base) {
      section.appendChild(h("p", { class: "table-note", text: t(CONTENT.currencies.note) }));
    }
    section.appendChild(h("div", { class: "table-wrap" }, h("table", { class: "data-table costs-table" },
      h("thead", {}, h("tr", {},
        h("th", { text: t(c.cols.item) }), h("th", { text: t(c.cols.low) }),
        h("th", { text: t(c.cols.high) }), h("th", { text: t(c.cols.note) })
      )),
      h("tbody", {},
        c.rows.map(function (r) {
          return h("tr", {},
            h("th", { scope: "row", text: t(r.item) }),
            h("td", { text: t(r.low) }), h("td", { text: t(r.high) }),
            h("td", { class: "note-cell", text: t(r.note) })
          );
        }),
        h("tr", { class: "total-row" },
          h("th", { scope: "row", text: t(c.total.item) }),
          h("td", { text: t(c.total.low) }), h("td", { text: t(c.total.high) }),
          h("td", { class: "note-cell", text: t(c.total.note) })
        )
      )
    )));
    section.appendChild(h("p", {}, srcLink(c.insuranceUrl, { en: "Insurance cost source ↗", ko: "보험 비용 출처 ↗" })));
    main.appendChild(section);
  }

  function renderFooter() {
    var f = CONTENT.footer;
    var footer = document.getElementById("site-footer");
    footer.innerHTML = "";
    footer.appendChild(h("p", { class: "footer-updated", text: t(f.updated) }));
    if (currency !== CONTENT.currencies.base) {
      footer.appendChild(h("p", { class: "footer-fx-note", text: t(CONTENT.currencies.note) }));
    }
    footer.appendChild(h("p", { text: t(f.disclaimer) }));
    footer.appendChild(h("h3", { text: t(f.sourcesTitle) }));
    footer.appendChild(h("ul", { class: "sources-list" }, f.sources.map(function (sVal) {
      return h("li", {}, h("a", { href: sVal.url, target: "_blank", rel: "noopener", text: t(sVal.label) }));
    })));
    footer.appendChild(h("h3", { text: t(f.openTitle) }));
    footer.appendChild(h("ul", {}, f.openItems.map(function (i) { return h("li", { text: t(i) }); })));
  }

  /* ---------- render orchestration ---------- */

  var openState = {};

  function captureOpenState() {
    openState = {};
    document.querySelectorAll("details[data-key]").forEach(function (d) {
      openState[d.getAttribute("data-key")] = d.hasAttribute("open");
    });
  }

  function renderAll(noScroll) {
    document.documentElement.lang = lang;
    // the map SVG carries paired lang-en/lang-ko text nodes toggled purely by this class
    document.documentElement.classList.toggle("ko", lang === "ko");
    // re-render clears the DOM, so any Leaflet instance dies with it
    if (leafletMap) { leafletMap.remove(); leafletMap = null; tileLayer = null; }
    document.title = t(CONTENT.hero.title) + " — " + t(CONTENT.hero.subtitle);
    var skip = document.querySelector(".skip-link");
    if (skip) skip.textContent = t(CONTENT.ui.skipToContent);

    renderHeader();
    var main = document.getElementById("main");
    main.innerHTML = "";
    renderHero(main);
    renderHome(main);
    renderEducation(main);
    renderLiving(main);
    renderCommunity(main);
    renderChurch(main);
    renderHelper(main);
    renderCar(main);
    renderApps(main);
    renderCosts(main);
    renderChecklist(main);
    addPagers();
    renderFooter();
    renderBackToTop();
    applyView(currentView, null, noScroll);
  }

  function setLang(next) {
    var y = window.scrollY;
    captureOpenState();
    lang = next;
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
    renderAll(true);
    window.scrollTo(0, y);
  }

  function setCurrency(next) {
    var y = window.scrollY;
    captureOpenState();
    currency = next;
    try { localStorage.setItem(CUR_KEY, currency); } catch (e) {}
    renderAll(true);
    window.scrollTo(0, y);
  }

  /* ---------- view routing ---------- */

  function viewIds() { return ["home"].concat(CONTENT.nav.map(function (n) { return n.id; })); }

  function applyView(id, targetEl, noScroll) {
    currentView = id;
    var hero = document.querySelector(".hero");
    if (hero) hero.hidden = id !== "home";
    var home = document.getElementById("home");
    if (home) home.hidden = id !== "home";
    document.querySelectorAll("main section.section").forEach(function (sec) {
      sec.hidden = sec.id !== id;
    });
    document.querySelectorAll(".site-nav a[data-nav-id]").forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("data-nav-id") === id);
    });
    var active = document.querySelector(".site-nav a.active");
    if (active) {
      var navEl = active.parentElement;
      navEl.scrollTo({ left: Math.max(0, active.offsetLeft - (navEl.clientWidth - active.offsetWidth) / 2) });
    }
    updateSubNav(id);
    if (targetEl) {
      if (targetEl.tagName === "DETAILS") targetEl.setAttribute("open", "");
      requestAnimationFrame(function () { targetEl.scrollIntoView({ block: "start" }); });
    } else if (!noScroll) {
      window.scrollTo(0, 0);
    }
    // Leaflet can only size itself once its container is actually visible
    if (id === "living") {
      var realPanel = document.getElementById("map-real-panel");
      if (realPanel && !realPanel.hidden) setTimeout(initRealMap, 50);
    }
  }

  function route() {
    var hash = decodeURIComponent(location.hash.replace(/^#\/?/, ""));
    if (!hash || hash === "home" || hash === "top") { applyView("home"); return; }
    if (viewIds().indexOf(hash) !== -1) { applyView(hash); return; }
    var el = document.getElementById(hash);
    if (el) {
      var sec = el.closest("main section.section");
      if (sec && viewIds().indexOf(sec.id) !== -1) { applyView(sec.id, el); return; }
    }
    applyView("home");
  }

  window.addEventListener("hashchange", route);

  // same-view anchor clicks (e.g. comparison table -> area card): make sure a <details> target opens
  document.addEventListener("click", function (e) {
    var a = e.target.closest ? e.target.closest("a[href^='#']") : null;
    if (!a) return;
    var el = document.getElementById(a.getAttribute("href").slice(1));
    if (el && el.tagName === "DETAILS") el.setAttribute("open", "");
  });

  /* ---------- pagers + back-to-top ---------- */

  function pagerLink(item, dir) {
    return h("a", { class: "pager-link pager-" + dir, href: "#" + item.id },
      h("span", { class: "pager-kicker", text: t(dir === "prev" ? CONTENT.ui.prevLabel : CONTENT.ui.nextLabel) }),
      h("span", { class: "pager-title", text: (dir === "prev" ? "← " : "") + t(item.label) + (dir === "next" ? " →" : "") })
    );
  }

  function addPagers() {
    var items = CONTENT.nav;
    items.forEach(function (n, i) {
      var sec = document.getElementById(n.id);
      if (!sec) return;
      var pager = h("nav", { class: "section-pager", "aria-label": lang === "ko" ? "이전·다음 섹션" : "Section pager" });
      pager.appendChild(i > 0 ? pagerLink(items[i - 1], "prev")
        : pagerLink({ id: "home", label: CONTENT.ui.homeLabel }, "prev"));
      if (i < items.length - 1) pager.appendChild(pagerLink(items[i + 1], "next"));
      sec.appendChild(pager);
    });
  }

  function renderBackToTop() {
    var old = document.querySelector(".back-to-top");
    if (old) old.remove();
    document.body.appendChild(h("button", {
      class: "back-to-top", type: "button", text: "↑",
      "aria-label": t(CONTENT.ui.backToTop),
      onclick: function () { window.scrollTo({ top: 0, behavior: "smooth" }); }
    }));
  }

  window.addEventListener("scroll", function () {
    var b = document.querySelector(".back-to-top");
    if (b) b.classList.toggle("visible", window.scrollY > 600);
  }, { passive: true });

  /* ---------- print: open all collapsibles ---------- */

  var printSnapshot = null;
  window.addEventListener("beforeprint", function () {
    printSnapshot = [];
    document.querySelectorAll("details").forEach(function (d) {
      printSnapshot.push([d, d.hasAttribute("open")]);
      d.setAttribute("open", "");
    });
  });
  window.addEventListener("afterprint", function () {
    if (!printSnapshot) return;
    printSnapshot.forEach(function (pair) { if (!pair[1]) pair[0].removeAttribute("open"); });
    printSnapshot = null;
  });

  /* ---------- go ---------- */

  renderAll(true);
  route();
})();
