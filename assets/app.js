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

  function fmtAmount(sgd, cur, suffix) {
    var v = sgd * cur.rate;
    if (cur.code === "USD") {
      if (v >= 1e6) return (Math.round(v / 1e5) / 10) + "M";
      if (suffix === "k") return Math.round(v / 1000) + "k";
    }
    if (cur.code === "KRW" && v >= 1e8) {
      // Korean readers think in 억 at this magnitude
      return Math.round(v / 1e8).toLocaleString("en-US") + "억";
    }
    var r = niceRound(v, cur.code);
    return r.toLocaleString("en-US", { maximumFractionDigits: r < 10 ? 1 : 0 });
  }

  var MONEY_RE = /S\$\s?([\d,]+(?:\.\d+)?)([kM])?(?:\s?(–|-)\s?([\d,]+(?:\.\d+)?)([kM])?)?(\+)?/g;
  var MONEY_MULT = { k: 1e3, M: 1e6 };

  function convertMoney(str) {
    var cur = activeCurrency();
    if (cur.code === CONTENT.currencies.base || !str || str.indexOf("S$") === -1) return str;
    return str.replace(MONEY_RE, function (m, n1, s1, dash, n2, s2, plus) {
      var a = parseFloat(n1.replace(/,/g, ""));
      var b = n2 != null ? parseFloat(n2.replace(/,/g, "")) : null;
      // "S$15–28k" / "S$25–120M" — a suffix on the upper bound implies it on the lower
      if (s2 && !s1) s1 = s2;
      if (s1) a *= MONEY_MULT[s1];
      if (s2) b *= MONEY_MULT[s2];
      var out = cur.label + fmtAmount(a, cur, s1);
      if (b != null) out += (dash || "–") + fmtAmount(b, cur, s2 || s1);
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
    function navEntry(id, label, subs, target) {
      var link = h("a", { href: "#" + (target || id), dataset: { navId: id }, text: label });
      if (!subs || !subs.length) return link;
      var wrap = h("div", { class: "nav-item" }, link);
      var menu = h("div", { class: "nav-menu", role: "menu" });
      subs.forEach(function (s) {
        menu.appendChild(h("a", { href: "#" + s.id, role: "menuitem", text: t(s.label) }));
      });
      wrap.appendChild(menu);
      return wrap;
    }
    nav.appendChild(navEntry("home", t(CONTENT.ui.homeLabel), null));
    CONTENT.nav.forEach(function (item) {
      nav.appendChild(navEntry(item.id, t(item.label), item.subs, item.target));
    });

    var searchBtn = h("button", {
      type: "button", class: "search-btn",
      "aria-label": t(CONTENT.ui.searchLabel), title: t(CONTENT.ui.searchLabel),
      text: "⌕",
      onclick: function () { openSearch(); }
    });

    header.appendChild(h("div", { class: "header-row" },
      h("a", { class: "site-title", href: "#top", text: t(CONTENT.ui.siteTitle) }),
      h("div", { class: "header-controls" }, searchBtn, langSeg, curSeg)
    ));
    header.appendChild(nav);
    header.appendChild(h("div", { class: "sub-nav", id: "sub-nav", hidden: true }));
  }

  /* the header's second row: subsection anchors for the current view */
  var subSpy = null;
  function updateSubNav(navId, viewId) {
    var row = document.getElementById("sub-nav");
    if (!row) return;
    var item = null;
    CONTENT.nav.forEach(function (n) { if (n.id === navId) item = n; });
    var subs = item && item.subs;
    row.innerHTML = "";
    row.hidden = !subs;
    document.documentElement.classList.toggle("has-subnav", !!subs);
    if (subSpy) { subSpy.disconnect(); subSpy = null; }
    if (!subs) return;
    var links = {};
    subs.forEach(function (s) {
      links[s.id] = row.appendChild(h("a", {
        href: "#" + s.id, dataset: { subId: s.id },
        class: s.id === viewId ? "active" : null,
        text: t(s.label)
      }));
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
        return h("a", { class: "section-card", href: "#" + (n.target || n.id) },
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

    var list = h("div", { class: "checklist-phases" });
    var phaseLists = {};
    Object.keys(c.phases).forEach(function (ph) {
      list.appendChild(h("h3", { class: "phase-head", text: t(c.phases[ph]) }));
      phaseLists[ph] = list.appendChild(h("ol", { class: "checklist" }));
    });
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
      (phaseLists[item.phase] || phaseLists.month1).appendChild(li);
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

  function levelLocalPre(a) {
    if (a <= 1) return { en: "infant care", ko: "영유아 보육" };
    if (a === 2) return "Playgroup";
    if (a === 3) return "N1";
    if (a === 4) return "N2";
    if (a === 5) return "K1";
    if (a === 6) return "K2";
    return { en: "school age — see the MOE row", ko: "학령기 — MOE 행 참고" };
  }
  function levelLocalMoe(a) {
    if (a < 7) return { en: "preschool age", ko: "미취학" };
    if (a <= 12) return "P" + (a - 6);
    if (a <= 16) return { en: "Secondary " + (a - 12), ko: "중등 " + (a - 12) + "년차" };
    return { en: "post-secondary", ko: "고등 과정 이후" };
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
      { sys: "localPre", now: levelLocalPre(aLocal), next: levelLocalPre(aLocal + 1), nowAy: String(cy), nextAy: String(cy + 1) },
      { sys: "localMoe", now: levelLocalMoe(aLocal), next: levelLocalMoe(aLocal + 1), nowAy: String(cy), nextAy: String(cy + 1) },
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
          h("th", { text: t(cal.cols.now) }),
          h("th", { text: t(cal.cols.next) }),
          h("th", { text: t(cal.cols.apply) })
        )),
        h("tbody", {}, rows.map(function (r) {
          var s = cal.systems[r.sys];
          return h("tr", {},
            h("th", { scope: "row" },
              h("span", { text: t(s.name) }),
              h("span", { class: "sys-sub", text: t(s.sub) })
            ),
            h("td", {}, h("strong", { text: t(r.now) }), h("span", { class: "ay-label", text: " · " + r.nowAy })),
            h("td", {}, h("span", { text: t(r.next) }), h("span", { class: "ay-label", text: " · " + r.nextAy })),
            h("td", { class: "apply-cell", text: t(s.apply) })
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

  /* ---------- header-menu table kit ----------
     Excel-style column menus: sort actions + multi-select filter checkboxes.
     Panels are position:fixed (anchored to the header button) so they escape
     the table's overflow container — works across Safari/Firefox/Chrome. */

  var openThMenu = null;

  function closeThMenu() {
    if (!openThMenu) return;
    openThMenu.panel.remove();
    openThMenu.btn.setAttribute("aria-expanded", "false");
    openThMenu = null;
  }
  document.addEventListener("click", function (e) {
    if (openThMenu && !openThMenu.panel.contains(e.target) && !openThMenu.btn.contains(e.target)) closeThMenu();
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeThMenu(); });
  document.addEventListener("scroll", function (e) {
    if (openThMenu && (!e.target || !openThMenu.panel.contains(e.target))) closeThMenu();
  }, true);
  window.addEventListener("resize", closeThMenu);

  /* cfg: {
       label: leaf, key: string,
       sort: null | { state: {key,dir}, type: 'num'|'alpha' },
       filter: null | { options: [{id, label}], selected: {} },
       onChange: fn
     } */
  function thMenuCell(cfg) {
    var indicator = h("span", { class: "th-ind" });

    function paintIndicator() {
      var bits = "";
      if (cfg.sort && cfg.sort.state.key === cfg.key) bits += cfg.sort.state.dir === 1 ? "↑" : "↓";
      if (cfg.filter && Object.keys(cfg.filter.selected).length) bits += "●";
      indicator.textContent = bits ? " " + bits : "";
    }
    paintIndicator();

    var btn = h("button", {
      type: "button", class: "th-btn",
      "aria-haspopup": "true", "aria-expanded": "false"
    }, h("span", { text: t(cfg.label) }), indicator, h("span", { class: "th-caret", "aria-hidden": "true", text: " ▾" }));

    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      if (openThMenu && openThMenu.btn === btn) { closeThMenu(); return; }
      closeThMenu();
      var panel = h("div", { class: "th-menu", role: "menu" });

      if (cfg.sort) {
        var asc = cfg.sort.type === "alpha" ? CONTENT.ui.sortAZ : CONTENT.ui.sortAsc;
        var desc = cfg.sort.type === "alpha" ? CONTENT.ui.sortZA : CONTENT.ui.sortDesc;
        [[asc, 1], [desc, -1]].forEach(function (pair) {
          var active = cfg.sort.state.key === cfg.key && cfg.sort.state.dir === pair[1];
          panel.appendChild(h("button", {
            type: "button", class: "th-menu-item" + (active ? " active" : ""),
            text: t(pair[0]),
            onclick: function () {
              if (active) { cfg.sort.state.key = null; }
              else { cfg.sort.state.key = cfg.key; cfg.sort.state.dir = pair[1]; }
              closeThMenu(); paintIndicator(); cfg.onChange();
            }
          }));
        });
      }

      if (cfg.filter) {
        if (cfg.sort) panel.appendChild(h("div", { class: "th-menu-sep" }));
        cfg.filter.options.forEach(function (o) {
          var box = h("input", { type: "checkbox", checked: !!cfg.filter.selected[o.id] });
          var item = h("label", { class: "th-menu-check" }, box, h("span", { text: t(o.label) }));
          box.addEventListener("change", function () {
            if (box.checked) cfg.filter.selected[o.id] = true;
            else delete cfg.filter.selected[o.id];
            paintIndicator(); cfg.onChange();
          });
          panel.appendChild(item);
        });
        panel.appendChild(h("button", {
          type: "button", class: "th-menu-item th-menu-clear", text: t(CONTENT.ui.clearFilter),
          onclick: function () {
            Object.keys(cfg.filter.selected).forEach(function (k) { delete cfg.filter.selected[k]; });
            closeThMenu(); paintIndicator(); cfg.onChange();
          }
        }));
      }

      document.body.appendChild(panel);
      var r = btn.getBoundingClientRect();
      var w = Math.min(260, window.innerWidth - 16);
      panel.style.width = w + "px";
      panel.style.top = Math.min(r.bottom + 4, window.innerHeight - 60) + "px";
      panel.style.left = Math.max(8, Math.min(r.left, window.innerWidth - w - 8)) + "px";
      btn.setAttribute("aria-expanded", "true");
      openThMenu = { btn: btn, panel: panel };
    });

    return h("th", { class: "th-interactive" }, btn);
  }

  function bandOf(value, bands) {
    if (value == null) return "none";
    var keys = Object.keys(bands);
    for (var i = 0; i < keys.length; i++) {
      var b = bands[keys[i]];
      if (b.max != null && value <= b.max) return keys[i];
    }
    return keys[keys.length - 1];
  }

  function optionsFrom(labelsObj) {
    return Object.keys(labelsObj).map(function (k) {
      return { id: k, label: labelsObj[k].label || labelsObj[k] };
    });
  }

  function passes(selected, val) {
    return !Object.keys(selected).length || !!selected[val];
  }

  /* ---------- school directory (own page, multi-pick filters) ---------- */

  var schoolState = {
    sort: { key: null, dir: 1 },
    filters: { stage: {}, kind: {}, tier: {}, fee: {} }
  };

  function renderSchools(main) {
    var sc = CONTENT.education.schools;

    var tbody = h("tbody");
    var count = h("span", { role: "status" });

    function sortVal(r, key) {
      if (key === "name") return t(r.name).toLowerCase();
      if (key === "fees") return r.feeYr;
      return 0;
    }

    function rebuild() {
      tbody.innerHTML = "";
      var f = schoolState.filters;
      var rows = sc.rows.filter(function (r) {
        return passes(f.stage, r.stage) && passes(f.kind, r.kind) &&
          passes(f.tier, r.tier || "none") && passes(f.fee, bandOf(r.feeYr, sc.feeBands));
      });
      if (schoolState.sort.key) {
        var k = schoolState.sort.key, d = schoolState.sort.dir;
        rows = rows.slice().sort(function (a, b) {
          var av = sortVal(a, k), bv = sortVal(b, k);
          return (av < bv ? -1 : av > bv ? 1 : 0) * d;
        });
      }
      rows.forEach(function (r) {
        tbody.appendChild(h("tr", {},
          h("th", { scope: "row" },
            r.site ? h("a", { href: r.site, target: "_blank", rel: "noopener", text: t(r.name) })
                   : h("span", { text: t(r.name) })),
          h("td", { text: t(sc.stages[r.stage]) }),
          h("td", {}, h("span", { text: t(sc.kinds[r.kind]) + " " }), r.kindVerify ? verifyBadge() : null),
          h("td", { text: r.tier ? t(sc.tiers[r.tier]) : "—" }),
          h("td", {}, h("span", { text: t(r.fees) + " " }), r.verify ? verifyBadge() : null),
          h("td", { text: t(r.waitlist) }),
          h("td", { text: t(r.location) })
        ));
      });
      count.textContent = rows.length + " / " + sc.rows.length + " " + t(sc.countLabel);
    }

    var tierOptions = optionsFrom(sc.tiers).concat([{ id: "none", label: "—" }]);

    var thead = h("thead", {}, h("tr", {},
      thMenuCell({ label: sc.cols.name, key: "name", sort: { state: schoolState.sort, type: "alpha" }, filter: null, onChange: rebuild }),
      thMenuCell({ label: sc.cols.stage, key: "stage", sort: null, filter: { options: optionsFrom(sc.stages), selected: schoolState.filters.stage }, onChange: rebuild }),
      thMenuCell({ label: sc.cols.kind, key: "kind", sort: null, filter: { options: optionsFrom(sc.kinds), selected: schoolState.filters.kind }, onChange: rebuild }),
      thMenuCell({ label: sc.cols.tier, key: "tier", sort: null, filter: { options: tierOptions, selected: schoolState.filters.tier }, onChange: rebuild }),
      thMenuCell({ label: sc.cols.fees, key: "fees", sort: { state: schoolState.sort, type: "num" }, filter: { options: optionsFrom(sc.feeBands), selected: schoolState.filters.fee }, onChange: rebuild }),
      h("th", { text: t(sc.cols.waitlist) }),
      h("th", { text: t(sc.cols.location) })
    ));

    var reset = h("button", {
      type: "button", class: "reset-btn", text: t(CONTENT.ui.clearAll),
      onclick: function () {
        schoolState = { sort: { key: null, dir: 1 }, filters: { stage: {}, kind: {}, tier: {}, fee: {} } };
        renderAll(true);
      }
    });

    rebuild();
    main.appendChild(h("section", { id: "schools", class: "section", "aria-labelledby": "schools-title" },
      sectionHeader("schools", sc.title, "⚑"),
      h("div", { class: "table-toolbar" }, count, reset),
      h("div", { class: "table-wrap schools-scroll" }, h("table", { class: "data-table schools-table" },
        thead, tbody
      )),
      h("p", { class: "table-note", text: t(sc.tierNote) })
    ));
  }

  function renderEducation(main) {
    var ed = CONTENT.education;
    var section = h("section", { id: "education", class: "section", "aria-labelledby": "education-title" },
      sectionHeader("education", ed.title, "✎"));

    section.appendChild(renderCalculator());
    section.appendChild(h("p", {}, h("a", { class: "btn-link", href: "#schools", text: t(ed.directoryLink) })));

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
      h("h4", { text: t(ps.siblings.title) }),
      h("p", { text: t(ps.siblings.body) }),
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
          h("td", { class: "tier-cell", text: t(r.tier) }),
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
      h("p", {}, h("span", { text: t(pr.intl.prepNote) + " " }), verifyBadge()),
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

  // one canonical card per neighbourhood: everything targets the atlas entry
  function atlasEntryFor(idOrCardId) {
    var hit = null;
    CONTENT.living.atlas.entries.forEach(function (e) {
      if (e.id === idOrCardId) hit = hit || e;
    });
    if (!hit) {
      CONTENT.living.atlas.entries.forEach(function (e) {
        if (e.cardId === idOrCardId) hit = hit || e;
      });
    }
    return hit;
  }

  function goToAtlas(idOrCardId) {
    var e = atlasEntryFor(idOrCardId);
    if (!e) return;
    var card = document.getElementById("atlas-" + e.id);
    if (!card) return;
    if (location.hash !== "#living") applyView("living", card);
    else card.scrollIntoView({ behavior: "smooth", block: "center" });
    card.classList.remove("flash");
    void card.offsetWidth;
    card.classList.add("flash");
  }

  // tag filter shared by the map and the atlas grid
  var atlasTags = {};
  var mapLayers = null;

  function entryMatchesTags(e) {
    var picked = Object.keys(atlasTags);
    if (!picked.length) return true;
    return picked.every(function (tg) { return (e.tags || []).indexOf(tg) !== -1; });
  }

  // does any atlas entry belonging to this researched corridor match the tags?
  function entryMatchesAnyFor(cardId) {
    return CONTENT.living.atlas.entries.some(function (e) {
      return (e.id === cardId || e.cardId === cardId) && entryMatchesTags(e);
    });
  }

  function applyMapTagFilter() {
    if (!mapLayers) return;
    mapLayers.polys.forEach(function (rec) {
      var on = entryMatchesAnyFor(rec.cardId);
      rec.poly.setStyle({ opacity: on ? 1 : 0.25, fillOpacity: on ? 0.12 : 0.04 });
      var el = rec.label.getElement();
      if (el) el.classList.toggle("map-dimmed", !on);
    });
    mapLayers.spots.forEach(function (rec) {
      var e = atlasEntryFor(rec.id);
      var on = e ? entryMatchesTags(e) : true;
      rec.marker.setStyle({ opacity: on ? 1 : 0.2, fillOpacity: on ? (rec.sub ? 0.7 : 0.9) : 0.15 });
      var tip = rec.marker.getTooltip() && rec.marker.getTooltip().getElement();
      if (tip) tip.classList.toggle("map-dimmed", !on);
    });
  }

  function applyAtlasTagFilter() {
    var wrap = document.getElementById("living-atlas");
    if (wrap) {
      wrap.querySelectorAll(".atlas-card").forEach(function (card) {
        var e = atlasEntryFor(card.id.replace("atlas-", ""));
        card.hidden = e ? !entryMatchesTags(e) : false;
      });
      // hide zones whose every card is hidden
      wrap.querySelectorAll(".zone-head").forEach(function (zh) {
        var grid = zh.nextElementSibling;
        var any = grid && Array.prototype.some.call(grid.querySelectorAll(".atlas-card"), function (c) { return !c.hidden; });
        zh.hidden = !any;
        if (grid) grid.hidden = !any;
      });
    }
    applyMapTagFilter();
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

  // Leaflet (147KB) loads only when a map is actually shown
  var leafletLoading = null;
  function ensureLeaflet() {
    if (typeof L !== "undefined") return Promise.resolve();
    if (leafletLoading) return leafletLoading;
    leafletLoading = new Promise(function (resolve, reject) {
      document.head.appendChild(h("link", { rel: "stylesheet", href: "assets/leaflet/leaflet.css" }));
      var s = document.createElement("script");
      s.src = "assets/leaflet/leaflet.js";
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
    return leafletLoading;
  }

  function initRealMap() {
    var host = document.getElementById("real-map");
    if (!host) return;
    if (typeof L === "undefined") {
      ensureLeaflet().then(function () { initRealMap(); }).catch(function () {});
      return;
    }
    if (leafletMap) { leafletMap.invalidateSize(); return; }

    var geo = CONTENT.living.map.geo;
    var accent = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#b4552d";

    leafletMap = L.map(host, {
      scrollWheelZoom: false, attributionControl: true, zoomSnap: 0.5,
      minZoom: 10.5,
      maxBounds: [[1.13, 103.55], [1.52, 104.15]], maxBoundsViscosity: 0.8
    });
    leafletMap.attributionControl.setPrefix(false);
    tileLayer = L.tileLayer(tileUrl(), {
      maxZoom: 19,
      attribution: "&copy; <a href='https://www.openstreetmap.org/copyright' target='_blank' rel='noopener'>OpenStreetMap</a> contributors &copy; <a href='https://carto.com/attributions' target='_blank' rel='noopener'>CARTO</a>"
    }).addTo(leafletMap);
    leafletMap.fitBounds(geo.bounds, { maxZoom: 12 });

    // declutter: minor neighbourhood pills only appear once you zoom in
    function syncZoomClass() {
      host.classList.toggle("map-zoomed-out", leafletMap.getZoom() < 11.5);
    }
    leafletMap.on("zoomend", syncZoomClass);
    syncZoomClass();

    mapLayers = { polys: [], spots: [] };
    CONTENT.living.areas.forEach(function (area) {
      var pts = geo.areas[area.id];
      if (!pts) return;
      var poly = L.polygon(pts, {
        color: accent, weight: 2, dashArray: "6 5",
        fillColor: accent, fillOpacity: 0.12
      }).addTo(leafletMap);
      // label at the geographic centroid via a standalone tooltip — polygon-bound
      // permanent tooltips anchor from the projected shape at bind time, which
      // strands them at the map edge when the container is still sizing
      var centroid = pts.reduce(function (acc, p) {
        return [acc[0] + p[0] / pts.length, acc[1] + p[1] / pts.length];
      }, [0, 0]);
      // spread the two western labels apart so their pills don't collide at island zoom
      var labelDir = { "holland-village": "top", "clementi": "bottom" }[area.id] || "center";
      var label = L.tooltip({ permanent: true, direction: labelDir, className: "map-real-label", interactive: true })
        .setLatLng(centroid)
        .setContent(biLabel(area.short))
        .addTo(leafletMap)
        .on("click", function () { goToAtlas(area.id); });
      poly.on("click", function () { goToAtlas(area.id); });
      poly.on("mouseover", function () { poly.setStyle({ fillOpacity: 0.25, dashArray: null }); });
      poly.on("mouseout", function () { poly.setStyle({ fillOpacity: entryMatchesAnyFor(area.id) ? 0.12 : 0.04, dashArray: "6 5" }); });
      var el = poly.getElement();
      if (el) {
        el.setAttribute("tabindex", "0");
        el.setAttribute("role", "link");
        el.setAttribute("aria-label", t(area.name));
        el.addEventListener("keydown", function (e) {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); goToAtlas(area.id); }
        });
      }
      mapLayers.polys.push({ cardId: area.id, poly: poly, label: label });
    });

    geo.landmarks.forEach(function (lm) {
      var marker;
      if (lm.star) {
        // SKIS gets the schematic's star
        marker = L.marker([lm.lat, lm.lng], {
          icon: L.divIcon({
            className: "map-divicon",
            html: "<svg width='24' height='24' viewBox='-12 -12 24 24'><path d='M0,-10 L2.7,-3.1 10,-3.1 4.1,1.4 6.2,8.6 0,4.2 -6.2,8.6 -4.1,1.4 -10,-3.1 -2.7,-3.1 Z' fill='" + accent + "' stroke='rgba(0,0,0,0.35)' stroke-width='1'/></svg>",
            iconSize: [24, 24], iconAnchor: [12, 12]
          })
        });
      } else if (lm.id === "office") {
        // the office gets the schematic's square
        marker = L.marker([lm.lat, lm.lng], {
          icon: L.divIcon({
            className: "map-divicon",
            html: "<svg width='16' height='16'><rect x='2' y='2' width='12' height='12' rx='2.5' fill='" + accent + "' stroke='rgba(0,0,0,0.35)' stroke-width='1'/></svg>",
            iconSize: [16, 16], iconAnchor: [8, 8]
          })
        });
      } else {
        marker = L.circleMarker([lm.lat, lm.lng], {
          radius: 5, color: accent, weight: 2, fillColor: "#ffffff", fillOpacity: 1
        });
      }
      // the star/square symbols speak for themselves (legend in the caption);
      // their names appear on hover only — K-town and Changi keep pills
      var iconic = lm.star || lm.id === "office";
      marker.addTo(leafletMap)
        .bindTooltip(biLabel(lm.label), {
          permanent: !iconic, direction: lm.dir || "top",
          offset: lm.dir === "left" ? [-10, 0] : lm.dir === "right" ? [10, 0] : [0, -10],
          className: "map-real-lm map-real-anchor"
        });
    });

    initUserPins(accent);
    // atlas spots — the rest of the neighbourhood atlas as smaller pins
    (geo.spots || []).forEach(function (sp) {
      var entry = (CONTENT.living.atlas.entries || []).find(function (e) { return e.id === sp.id; });
      if (!entry) return;
      var m = L.circleMarker([sp.lat, sp.lng], {
        radius: sp.sub ? 4 : 5.5, color: accent, weight: 1.5,
        fillColor: "#ffffff", fillOpacity: sp.sub ? 0.7 : 0.9
      }).addTo(leafletMap);
      m.bindTooltip(biLabel(entry.name), {
        permanent: !sp.sub, direction: sp.dir || "top",
        offset: sp.dir === "left" ? [-8, 0] : sp.dir === "right" ? [8, 0] : sp.dir === "bottom" ? [0, 8] : [0, -8],
        className: "map-real-lm map-real-lm-minor"
      });
      m.on("click", function () { goToAtlas(sp.id); });
      mapLayers.spots.push({ id: sp.id, marker: m, sub: !!sp.sub });
    });
    applyMapTagFilter();
  }

  /* ---------- user pins (own labels on the real map) ---------- */

  var PINS_KEY = "sgguide:pins";

  function loadPins() {
    try { return JSON.parse(localStorage.getItem(PINS_KEY)) || []; } catch (e) { return []; }
  }
  function savePins(pins) {
    try { localStorage.setItem(PINS_KEY, JSON.stringify(pins)); } catch (e) {}
  }

  function initUserPins(accent) {
    var pins = loadPins();

    function pinIcon() {
      return L.divIcon({
        className: "map-divicon",
        html: "<svg width='26' height='30' viewBox='0 0 26 30'><path d='M13 1 C6.5 1 2 6 2 12 c0 8 11 17 11 17 s11-9 11-17 C24 6 19.5 1 13 1 Z' fill='" + accent + "' stroke='rgba(0,0,0,0.35)'/><circle cx='13' cy='11.5' r='4' fill='#fff'/></svg>",
        iconSize: [26, 30], iconAnchor: [13, 29], popupAnchor: [0, -26]
      });
    }

    function addPinMarker(pin) {
      var marker = L.marker([pin.lat, pin.lng], { icon: pinIcon() }).addTo(leafletMap);

      function refreshLabel() {
        marker.unbindTooltip();
        if (pin.label) {
          marker.bindTooltip(pin.label, {
            permanent: true, direction: "top", offset: [0, -26],
            className: "map-real-lm map-user-pin-label"
          });
        }
      }

      function openEditor() {
        var input = h("input", { type: "text", value: pin.label || "", placeholder: t(CONTENT.ui.pinPlaceholder) });
        var save = h("button", {
          type: "button", class: "reset-btn", text: t(CONTENT.ui.pinSave),
          onclick: function () {
            pin.label = input.value.trim();
            savePins(pins);
            refreshLabel();
            marker.closePopup();
          }
        });
        var remove = h("button", {
          type: "button", class: "reset-btn pin-remove", text: t(CONTENT.ui.pinRemove),
          onclick: function () {
            pins.splice(pins.indexOf(pin), 1);
            savePins(pins);
            leafletMap.removeLayer(marker);
          }
        });
        var form = h("div", { class: "pin-form" }, input, h("div", { class: "pin-form-btns" }, save, remove));
        input.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); save.click(); } });
        marker.bindPopup(form, { closeButton: false, minWidth: 200 }).openPopup();
        setTimeout(function () { input.focus(); }, 60);
      }

      marker.on("click", openEditor);
      refreshLabel();
      return { marker: marker, openEditor: openEditor };
    }

    pins.forEach(addPinMarker);

    // "+ Add your pin" control: arm, then one tap places the pin
    var AddPinControl = L.Control.extend({
      options: { position: "topright" },
      onAdd: function () {
        var btn = L.DomUtil.create("button", "map-add-pin");
        btn.type = "button";
        btn.textContent = t(CONTENT.ui.addPin);
        L.DomEvent.disableClickPropagation(btn);
        L.DomEvent.on(btn, "click", function () {
          var host = leafletMap.getContainer();
          var armed = host.classList.toggle("pin-mode");
          btn.textContent = armed ? t(CONTENT.ui.addPinArmed) : t(CONTENT.ui.addPin);
          if (armed) {
            leafletMap.once("click", function (e) {
              host.classList.remove("pin-mode");
              btn.textContent = t(CONTENT.ui.addPin);
              var pin = { lat: e.latlng.lat, lng: e.latlng.lng, label: "" };
              pins.push(pin);
              savePins(pins);
              addPinMarker(pin).openEditor();
            });
          }
        });
        return btn;
      }
    });
    leafletMap.addControl(new AddPinControl());
  }

  // swap tile style when the OS theme flips
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
    if (tileLayer) tileLayer.setUrl(tileUrl());
  });


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
        var href = "#atlas-" + e.id;
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

  /* ---------- all-areas table (work/school anchors + commute estimates) ---------- */

  var ANCHORS_KEY = "sgguide:anchors";
  var areaState = {
    sort: { key: null, dir: 1 },
    filters: { district: {}, br3: {}, br4: {}, work: {}, school: {}, walk: {}, condo: {}, hdb: {}, landed: {} }
  };

  function areaRowName(row) {
    if (row.name) return t(row.name);
    var e = atlasById(row.id);
    return e ? t(e.name) : row.id;
  }
  function areaRowHref(row) {
    // rows without their own atlas card fall back to the corridor's card
    var e = atlasEntryFor(row.id) || (row.cardId && atlasEntryFor(row.cardId));
    return "#atlas-" + (e ? e.id : row.id);
  }

  function haversineKm(a, b) {
    var R = 6371, d2r = Math.PI / 180;
    var dLat = (b.lat - a.lat) * d2r, dLng = (b.lng - a.lng) * d2r;
    var s = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(a.lat * d2r) * Math.cos(b.lat * d2r) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
    return 2 * R * Math.asin(Math.sqrt(s));
  }
  // heuristics calibrated against the researched door-to-door figures (§3.4)
  function mrtMinutes(km) { return Math.max(10, Math.round((8 + 2.6 * km) / 5) * 5); }
  function driveMinutes(km) { return Math.max(5, Math.round((4 + 1.8 * km) / 5) * 5); }

  function defaultAnchors() {
    var at = CONTENT.living.areaTable;
    return {
      work: { name: t(at.workDefaultName), lat: 1.2764, lng: 103.8540, isDefault: true },
      school: { name: t(at.schoolDefaultName), lat: 1.3446, lng: 103.7780, isDefault: true }
    };
  }

  function loadAnchors() {
    var d = defaultAnchors();
    try {
      var saved = JSON.parse(localStorage.getItem(ANCHORS_KEY)) || {};
      if (saved.work && !saved.work.isDefault) d.work = saved.work;
      if (saved.school && !saved.school.isDefault) d.school = saved.school;
    } catch (e) {}
    return d;
  }
  function saveAnchors(anchors) {
    try { localStorage.setItem(ANCHORS_KEY, JSON.stringify(anchors)); } catch (e) {}
  }

  function geocodeSG(query) {
    var url = "https://www.onemap.gov.sg/api/common/elastic/search?searchVal=" +
      encodeURIComponent(query) + "&returnGeom=Y&getAddrDetails=Y&pageNum=1";
    return fetch(url).then(function (res) { return res.json(); }).then(function (data) {
      var hit = data && data.results && data.results[0];
      if (!hit) return null;
      return { name: hit.SEARCHVAL || query, lat: parseFloat(hit.LATITUDE), lng: parseFloat(hit.LONGITUDE) };
    });
  }

  function atlasById(id) {
    var found = null;
    CONTENT.living.atlas.entries.forEach(function (e) { if (e.id === id) found = e; });
    return found;
  }

  function renderAreas(main) {
    var at = CONTENT.living.areaTable;
    var anchors = loadAnchors();

    var tbody = h("tbody");
    var count = h("span", { role: "status" });

    function dots(n) { return n ? "●●●".slice(0, n) : "—"; }
    function price(row, key) {
      var v = row[key];
      if (v == null) return { en: "thin supply", ko: "매물 적음" };
      return (row.rough ? "~" : "") + "S$" + v.toLocaleString("en-US");
    }

    function rebuild() {
      tbody.innerHTML = "";
      var f = areaState.filters;
      var rows = at.rows.map(function (row) {
        return {
          row: row,
          work: mrtMinutes(haversineKm(row, anchors.work)),
          school: driveMinutes(haversineKm(row, anchors.school))
        };
      }).filter(function (r) {
        return passes(f.district, r.row.district) &&
          passes(f.br3, bandOf(r.row.br3, at.br3Bands)) &&
          passes(f.br4, bandOf(r.row.br4, at.br4Bands)) &&
          passes(f.work, bandOf(r.work, at.commuteBands)) &&
          passes(f.school, bandOf(r.school, at.commuteBands)) &&
          passes(f.walk, "l" + r.row.walk) &&
          passes(f.condo, "l" + r.row.condo) &&
          passes(f.hdb, "l" + r.row.hdb) &&
          passes(f.landed, "l" + r.row.landed);
      });
      if (areaState.sort.key) {
        var k = areaState.sort.key, d = areaState.sort.dir;
        rows = rows.slice().sort(function (a, b) {
          function val(x) {
            if (k === "area") return areaRowName(x.row).toLowerCase();
            if (k === "work" || k === "school") return x[k];
            var v = x.row[k];
            return v == null ? (d === 1 ? Infinity : -Infinity) : v;
          }
          var av = val(a), bv = val(b);
          return (av < bv ? -1 : av > bv ? 1 : 0) * d;
        });
      }
      rows.forEach(function (r) {
        tbody.appendChild(h("tr", { class: r.row.rough ? "row-rough" : null },
          h("td", { text: r.row.district }),
          h("th", { scope: "row" }, h("a", { href: areaRowHref(r.row), text: areaRowName(r.row) })),
          h("td", { text: t(price(r.row, "br3")) }),
          h("td", { text: t(price(r.row, "br4")) }),
          h("td", { text: "~" + r.work + (lang === "ko" ? "분" : " min") }),
          h("td", { text: "~" + r.school + (lang === "ko" ? "분" : " min") }),
          h("td", { class: "stock-cell", text: dots(r.row.walk) }),
          h("td", { class: "malls-cell", text: r.row.malls }),
          h("td", { class: "stock-cell", text: dots(r.row.condo) }),
          h("td", { class: "stock-cell", text: dots(r.row.hdb) }),
          h("td", { class: "stock-cell", text: dots(r.row.landed) })
        ));
      });
      count.textContent = rows.length + " / " + at.rows.length;
    }

    function anchorField(key, labelLeaf) {
      var input = h("input", { type: "text", placeholder: lang === "ko" ? "예: 018936" : "e.g. 018936" });
      var status = h("span", { class: "anchor-status", text: anchors[key].name });
      function resolve() {
        var q = input.value.trim();
        if (!q) return;
        status.textContent = "…";
        geocodeSG(q).then(function (pt) {
          if (!pt || isNaN(pt.lat)) { status.textContent = t(at.resolveError); return; }
          anchors[key] = pt;
          saveAnchors(anchors);
          status.textContent = pt.name;
          rebuild();
        }).catch(function () { status.textContent = t(at.lookupOffline); });
      }
      input.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); resolve(); } });
      return h("div", { class: "anchor-field" },
        h("label", {}, h("span", { text: t(labelLeaf) }), input),
        h("button", { type: "button", class: "reset-btn", text: t(at.setLabel), onclick: resolve }),
        status
      );
    }

    var districtLabels = {};
    at.rows.forEach(function (r) { districtLabels[r.district] = r.district; });

    var stockFilter = function (key) {
      return { options: optionsFrom(at.stockLevels), selected: areaState.filters[key] };
    };

    var thead = h("thead", {}, h("tr", {},
      thMenuCell({ label: at.cols.district, key: "district", sort: null, filter: { options: optionsFrom(districtLabels), selected: areaState.filters.district }, onChange: rebuild }),
      thMenuCell({ label: at.cols.area, key: "area", sort: { state: areaState.sort, type: "alpha" }, filter: null, onChange: rebuild }),
      thMenuCell({ label: at.cols.br3, key: "br3", sort: { state: areaState.sort, type: "num" }, filter: { options: optionsFrom(at.br3Bands), selected: areaState.filters.br3 }, onChange: rebuild }),
      thMenuCell({ label: at.cols.br4, key: "br4", sort: { state: areaState.sort, type: "num" }, filter: { options: optionsFrom(at.br4Bands), selected: areaState.filters.br4 }, onChange: rebuild }),
      thMenuCell({ label: at.cols.work, key: "work", sort: { state: areaState.sort, type: "num" }, filter: { options: optionsFrom(at.commuteBands), selected: areaState.filters.work }, onChange: rebuild }),
      thMenuCell({ label: at.cols.school, key: "school", sort: { state: areaState.sort, type: "num" }, filter: { options: optionsFrom(at.commuteBands), selected: areaState.filters.school }, onChange: rebuild }),
      thMenuCell({ label: at.cols.walk, key: "walk", sort: null, filter: stockFilter("walk"), onChange: rebuild }),
      h("th", { text: t(at.cols.malls) }),
      thMenuCell({ label: at.cols.condo, key: "condo", sort: null, filter: stockFilter("condo"), onChange: rebuild }),
      thMenuCell({ label: at.cols.hdb, key: "hdb", sort: null, filter: stockFilter("hdb"), onChange: rebuild }),
      thMenuCell({ label: at.cols.landed, key: "landed", sort: null, filter: stockFilter("landed"), onChange: rebuild })
    ));

    var resetBtn = h("button", {
      type: "button", class: "reset-btn", text: t(CONTENT.ui.clearAll),
      onclick: function () {
        areaState = { sort: { key: null, dir: 1 }, filters: { district: {}, br3: {}, br4: {}, work: {}, school: {}, walk: {}, condo: {}, hdb: {}, landed: {} } };
        anchors = defaultAnchors();
        saveAnchors(anchors);
        renderAll(true);
      }
    });

    var decision = h("div", { class: "decision-block" },
      h("h3", { text: t(CONTENT.living.decision.title) }),
      h("p", { class: "table-note", text: t(CONTENT.living.decision.intro) }),
      h("ul", { class: "decision-list" }, CONTENT.living.decision.items.map(function (d) {
        return h("li", {},
          h("strong", { text: t(d.priority) + " → " }),
          h("span", { text: t(d.pick) })
        );
      }))
    );

    rebuild();
    main.appendChild(h("section", { id: "areas", class: "section", "aria-labelledby": "areas-title" },
      sectionHeader("areas", at.title, "▦"),
      renderPicker(),
      decision,
      h("p", { class: "section-intro", text: t(at.intro) }),
      h("div", { class: "anchor-fields" },
        anchorField("work", at.workLabel),
        anchorField("school", at.schoolLabel)
      ),
      h("div", { class: "table-toolbar" }, count, resetBtn),
      h("div", { class: "table-wrap schools-scroll" }, h("table", { class: "data-table area-table" },
        thead, tbody
      )),
      h("p", { class: "table-note", text: t(at.stockNote) }),
      h("p", { class: "table-note", text: t(at.districtNote) }),
      h("p", { class: "table-note", text: t(at.estNote) })
    ));
  }

  /* ---------- neighbourhood atlas ---------- */

  // full deep-dive body for a researched corridor (embedded inside its atlas card)
  function buildAreaResearch(a) {
    var gmaps = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(a.gmapsQuery);
    // prose renders as a paragraph; an array renders as scannable fact bullets
    function richBody(value, verify) {
      if (Array.isArray(value)) {
        var ul = h("ul", { class: "card-facts" }, value.map(function (f) {
          return h("li", { text: t(f) });
        }));
        if (!verify) return [ul];
        return [ul, h("p", {}, verifyBadge())];
      }
      return [h("p", {}, h("span", { text: t(value) + " " }), verify ? verifyBadge() : null)];
    }
    var parts = [
      { title: { en: "The pitch", ko: "한 줄 요약" }, body: a.pitch, wide: true },
      { subAreas: true },
      { title: { en: "Walkability check", ko: "도보 생활권 점검" }, body: a.walk },
      { title: { en: "Kids", ko: "아이 키우기" }, body: a.kids, verify: a.kidsVerify },
      { title: { en: "Community makeup", ko: "커뮤니티 구성" }, body: a.community },
      { title: { en: "Property & prices", ko: "매물과 가격" }, body: a.property, verify: a.verify }
    ];
    var body = h("div", { class: "sub-body card-grid" });
    parts.forEach(function (p) {
      if (p.subAreas) {
        (a.subAreas || []).forEach(function (sa) {
          var block = h("div", { class: "subarea card-part wide" },
            h("h4", { class: "subarea-name", text: t(sa.name) }));
          richBody(sa.facts || sa.body, sa.verify).forEach(function (el) { block.appendChild(el); });
          if (sa.take) block.appendChild(h("div", { class: "local-take" },
            h("span", { class: "take-badge", text: t(CONTENT.ui.localTake) }),
            h("span", { text: t(sa.take) })
          ));
          body.appendChild(block);
        });
        return;
      }
      if (!p.body) return;
      var part = h("div", { class: "card-part" + (p.wide ? " wide" : "") },
        h("h4", { text: t(p.title) }));
      richBody(p.body, p.verify).forEach(function (el) { part.appendChild(el); });
      body.appendChild(part);
    });
    body.appendChild(h("p", { class: "card-links" },
      h("a", { class: "btn-link", href: gmaps, target: "_blank", rel: "noopener", text: t(CONTENT.ui.openInMaps) }),
      srcLink(a.srcUrl)
    ));
    return body;
  }

  function renderAtlas() {
    var at = CONTENT.living.atlas;
    var wrap = h("div", { id: "living-atlas" },
      h("h3", { text: t(at.title) }),
      h("p", { class: "section-intro", text: t(at.intro) })
    );
    var tagLabels = {};
    CONTENT.living.picker.criteria.forEach(function (c) { tagLabels[c.id] = c.label; });
    function rowsFor(e) {
      return (CONTENT.living.areaTable.rows || []).filter(function (r) {
        return r.id === e.id || (e.cardId && r.cardId === e.cardId && r.id !== e.id);
      }).filter(function (r, i, arr) {
        // prefer the entry's own row when it exists
        return arr.some(function (x) { return x.id === e.id; }) ? r.id === e.id : true;
      });
    }
    function fmtPriceRange(rows, key) {
      var vals = rows.map(function (r) { return r[key]; }).filter(function (v) { return v != null; });
      if (!vals.length) return t({ en: "thin supply", ko: "매물 적음" });
      var lo = Math.min.apply(null, vals), hi = Math.max.apply(null, vals);
      var rough = rows.some(function (r) { return r.rough; }) ? "~" : "";
      var s = lo === hi
        ? rough + "S$" + lo.toLocaleString("en-US")
        : rough + "S$" + lo.toLocaleString("en-US") + "–" + hi.toLocaleString("en-US");
      return t(s);
    }
    function entryCard(e) {
      var rows = rowsFor(e);
      var card = h("article", { class: "atlas-card" + (e.researched ? " researched" : ""), id: "atlas-" + e.id },
        h("div", { class: "match-head" },
          h("strong", { text: t(e.name) }),
          h("span", { class: "match-dist", text: e.dist }),
          h("span", { class: "vibe-tag", text: t(e.vibe) })
        ),
        h("p", { text: t(e.body) })
      );
      if (rows.length) {
        var walk = Math.max.apply(null, rows.map(function (r) { return r.walk || 0; }));
        card.appendChild(h("p", { class: "atlas-stats" },
          h("span", {}, h("b", { text: "3BR " }), h("span", { text: fmtPriceRange(rows, "br3") })),
          h("span", {}, h("b", { text: "4BR " }), h("span", { text: fmtPriceRange(rows, "br4") })),
          h("span", {}, h("b", { text: t(CONTENT.ui.statWalk) + " " }), h("span", { class: "stock-cell", text: walk ? "●●●".slice(0, walk) : "—" }))
        ));
        var malls = rows.map(function (r) { return r.malls; }).filter(Boolean)[0];
        if (malls) card.appendChild(h("p", { class: "atlas-malls", text: malls }));
      }
      if (e.tags && e.tags.length) {
        card.appendChild(h("p", { class: "atlas-tags" }, e.tags.map(function (tg) {
          return tagLabels[tg] ? h("span", { class: "mini-tag", text: t(tagLabels[tg]) }) : null;
        })));
      }
      var area = null;
      if (e.researched && e.cardId) {
        CONTENT.living.areas.forEach(function (a) { if (a.id === e.cardId) area = a; });
      }
      if (area) {
        card.appendChild(h("details", { class: "atlas-research" },
          h("summary", {},
            h("span", { class: "atlas-badge researched", text: t(at.researchedBadge) }),
            h("span", { class: "atlas-research-label", text: t(CONTENT.ui.fullResearch) })
          ),
          buildAreaResearch(area)
        ));
      } else {
        card.appendChild(h("span", { class: "atlas-badge", text: t(at.sketchBadge) }));
      }
      return card;
    }
    at.zones.forEach(function (z) {
      var entries = at.entries.filter(function (e) { return e.zone === z.id; });
      if (!entries.length) return;
      wrap.appendChild(h("div", { class: "zone-head" },
        h("h4", {}, h("span", { text: t(z.title) }), h("span", { class: "zone-d", text: " " + z.d })),
        h("p", { class: "zone-intro", text: t(z.intro) })
      ));
      var grid = h("div", { class: "atlas-grid" });
      entries.forEach(function (e) { grid.appendChild(entryCard(e)); });
      wrap.appendChild(grid);
    });
    // safety net: anything without a zone still renders
    var orphans = at.entries.filter(function (e) { return !e.zone; });
    if (orphans.length) {
      var og = h("div", { class: "atlas-grid" });
      orphans.forEach(function (e) { og.appendChild(entryCard(e)); });
      wrap.appendChild(og);
    }
    return wrap;
  }

  /* ---------- housing typologies page ---------- */

  function renderHousing(main) {
    var hp = CONTENT.housingPage;
    var section = h("section", { id: "housing", class: "section", "aria-labelledby": "housing-title" },
      sectionHeader("housing", hp.title, "☖"),
      h("p", { class: "section-intro", text: t(hp.intro) }),
      h("h3", { text: t(hp.ladderTitle) }),
      h("div", { class: "housing-ladder" }, hp.ladder.map(function (step, i) {
        return h("div", { class: "ladder-step", style: "--step:" + i },
          h("strong", { text: t(step.name) }),
          h("span", { class: "ladder-note", text: t(step.note) })
        );
      })),
      h("div", { class: "table-wrap" }, h("table", { class: "data-table housing-table" },
        h("thead", {}, h("tr", {},
          h("th", { text: t(hp.cols.type) }),
          h("th", { text: t(hp.cols.feat) }),
          h("th", { text: t(hp.cols.buy) }),
          h("th", { text: t(hp.cols.rent) }),
          h("th", { text: t(hp.cols.who) })
        )),
        h("tbody", {}, hp.rows.map(function (r) {
          return h("tr", {},
            h("th", { scope: "row", text: t(r.type) }),
            h("td", { class: "feat-cell", text: t(r.feat) }),
            h("td", { text: t(r.buy) }),
            h("td", { text: t(r.rent) }),
            h("td", { class: "feat-cell", text: t(r.who) })
          );
        }))
      )),
      h("p", { class: "table-note", text: t(hp.note) })
    );
    main.appendChild(section);
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
    var pv = lv.districts.postalVisual;
    var dd = h("div", {},
      h("h3", { text: t(lv.districts.title) }),
      h("p", { text: t(lv.districts.intro) }),
      h("h4", { text: t(lv.districts.postalTitle) }),
      h("div", { class: "postal-visual", "aria-hidden": "true" },
        h("div", { class: "pv-group" },
          h("div", { class: "pv-digits", text: pv.sectorDigits }),
          h("div", { class: "pv-label", text: t(pv.sector) }),
          h("div", { class: "pv-sub", text: t(pv.sectorSub) })
        ),
        h("div", { class: "pv-group" },
          h("div", { class: "pv-digits", text: pv.deliveryDigits }),
          h("div", { class: "pv-label", text: t(pv.delivery) }),
          h("div", { class: "pv-sub", text: t(pv.deliverySub) })
        )
      ),
      h("div", {}, lv.districts.postalParas.map(function (p) { return h("p", { text: t(p) }); })),
      h("div", { class: "table-wrap" }, h("table", { class: "data-table" },
        h("thead", {}, h("tr", {},
          h("th", { text: t(lv.districts.cols.d) }), h("th", { text: t(lv.districts.cols.sectors) }),
          h("th", { text: t(lv.districts.cols.name) }),
          h("th", { text: t(lv.districts.cols.sub) }), h("th", { text: t(lv.districts.cols.rel) })
        )),
        h("tbody", {}, lv.districts.rows.map(function (r) {
          return h("tr", {},
            h("th", { scope: "row", text: r.d }),
            h("td", { class: "sector-cell", text: r.sectors || "—" }),
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
    ov.appendChild(h("p", {}, h("a", { class: "btn-link", href: "#housing", text: t(CONTENT.housingPage.title) + " →" })));

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

    section.appendChild(h("p", {}, h("a", { class: "btn-link", href: "#areas", text: t(lv.tableLink) })));

    /* map — the single interactive map; the tag bar filters both it and the atlas */
    var tagBar = h("div", { class: "tag-bar", role: "group", "aria-label": t(CONTENT.ui.tagFilter) },
      h("span", { class: "tag-bar-label", text: t(CONTENT.ui.tagFilter) }),
      CONTENT.living.picker.criteria.map(function (c) {
        return h("button", {
          class: "tag-chip" + (atlasTags[c.id] ? " on" : ""), type: "button",
          "aria-pressed": atlasTags[c.id] ? "true" : "false",
          text: t(c.label),
          onclick: function () {
            if (atlasTags[c.id]) delete atlasTags[c.id]; else atlasTags[c.id] = true;
            this.classList.toggle("on", !!atlasTags[c.id]);
            this.setAttribute("aria-pressed", atlasTags[c.id] ? "true" : "false");
            applyAtlasTagFilter();
          }
        });
      })
    );
    var mapWrap = h("figure", { class: "map-figure", id: "sg-map" },
      h("h3", { text: t(lv.map.title) }),
      tagBar,
      h("div", { id: "real-map", class: "real-map" }),
      h("p", { class: "map-hint", text: t(CONTENT.ui.realMapHint) })
    );
    section.appendChild(mapWrap);

    /* neighbourhood atlas — one canonical card per area */
    section.appendChild(renderAtlas());

    /* §3.6 helper's-room rule */
    section.appendChild(h("aside", { class: "info-box" },
      h("h3", { text: t(lv.helperRoom.title) }),
      h("p", {}, h("span", { text: t(lv.helperRoom.body) + " " }), srcLink(lv.helperRoom.srcUrl))
    ));

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

  function renderHealth(main) {
    var hl = CONTENT.health;
    var section = h("section", { id: "health", class: "section", "aria-labelledby": "health-title" },
      sectionHeader("health", hl.title, "✚"),
      h("p", { class: "section-intro", text: t(hl.intro) }));
    hl.items.forEach(function (i) {
      section.appendChild(h("div", { class: "entry" },
        h("h3", {}, h("span", { text: t(i.title) + " " }), i.verify ? verifyBadge() : null),
        h("p", {}, h("span", { text: t(i.body) + " " }), i.url ? srcLink(i.url) : null)
      ));
    });
    section.appendChild(h("aside", { class: "info-box" },
      h("h3", { text: t(hl.numbersTitle) }),
      h("ul", { class: "emergency-list" }, hl.numbers.map(function (n) {
        return h("li", {},
          h("strong", { text: n.num }),
          h("span", { text: " — " + t(n.desc) + " " }),
          n.verify ? verifyBadge() : null
        );
      }))
    ));
    section.appendChild(h("p", { class: "table-note", text: t(hl.feeNote) }));
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
      h("div", { id: "car-alternatives" },
        h("h3", { text: t(car.altTitle) }),
        h("div", {}, car.alternatives.map(function (a) {
          return h("div", { class: "entry" },
            h("h4", {}, h("span", { text: t(a.title) + " " }), a.verify ? verifyBadge() : null),
            h("p", { text: t(a.body) })
          );
        })),
        h("div", { class: "info-box" },
          h("h4", { text: t(car.childSeats.title) }),
          h("p", {}, h("span", { text: t(car.childSeats.body) + " " }), srcLink(car.childSeats.url))
        )
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

  /* ---------- budget builder ---------- */

  var BUDGET_KEY = "sgguide:budget";

  function renderBudget() {
    var b = CONTENT.costs.builder;
    var picks = { housing: "condoValue", kids: "k2", preschool: "anchor", helper: "yes", insurance: "employer", lifestyle: "mid", enrich: "none" };
    try {
      var saved = JSON.parse(localStorage.getItem(BUDGET_KEY));
      if (saved) Object.keys(picks).forEach(function (k) { if (saved[k]) picks[k] = saved[k]; });
    } catch (e) {}

    function opt(group, id) {
      var found = b.groups[group].options[0];
      b.groups[group].options.forEach(function (o) { if (o.id === id) found = o; });
      return found;
    }

    var breakdown = h("ul", { class: "budget-breakdown" });
    var totalEl = h("div", { class: "budget-total" });

    function money(v) { return t("S$" + Math.round(v).toLocaleString("en-US")); }

    function recompute() {
      var kids = opt("kids", picks.kids).v;
      var lines = [
        { label: b.groups.housing.label, v: opt("housing", picks.housing).v },
        { label: b.groups.preschool.label, v: opt("preschool", picks.preschool).v * kids, per: opt("preschool", picks.preschool).v, n: kids },
        { label: b.groups.helper.label, v: opt("helper", picks.helper).v },
        { label: b.groups.insurance.label, v: opt("insurance", picks.insurance).v },
        { label: b.groups.lifestyle.label, v: opt("lifestyle", picks.lifestyle).v },
        { label: b.groups.enrich.label, v: opt("enrich", picks.enrich).v * kids, per: opt("enrich", picks.enrich).v, n: kids }
      ];
      breakdown.innerHTML = "";
      var total = 0;
      lines.forEach(function (l) {
        total += l.v;
        if (!l.v) return;
        breakdown.appendChild(h("li", {},
          h("span", { text: t(l.label) + (l.n > 1 && l.per ? " (" + money(l.per) + " × " + l.n + ")" : "") }),
          h("strong", { text: money(l.v) })
        ));
      });
      totalEl.innerHTML = "";
      totalEl.appendChild(h("span", { text: t(b.totalLabel) }));
      totalEl.appendChild(h("strong", { text: money(total) + (lang === "ko" ? " / 월" : " / mo") }));
    }

    var controls = h("div", { class: "budget-controls" });
    Object.keys(b.groups).forEach(function (gk) {
      var group = b.groups[gk];
      var chips = h("div", { class: "chips filter-chips" });
      group.options.forEach(function (o) {
        var chip = h("button", {
          type: "button",
          class: "chip filter-chip" + (picks[gk] === o.id ? " nice" : ""),
          "aria-pressed": picks[gk] === o.id ? "true" : "false",
          text: t(o.label),
          onclick: function () {
            picks[gk] = o.id;
            try { localStorage.setItem(BUDGET_KEY, JSON.stringify(picks)); } catch (e) {}
            chips.querySelectorAll(".chip").forEach(function (ch) { ch.classList.remove("nice"); ch.setAttribute("aria-pressed", "false"); });
            chip.classList.add("nice");
            chip.setAttribute("aria-pressed", "true");
            recompute();
          }
        });
        chips.appendChild(chip);
      });
      controls.appendChild(h("div", { class: "filter-row" },
        h("span", { class: "filter-label", text: t(group.label) }), chips));
    });

    recompute();
    return h("div", { id: "budget-builder", class: "calc-box" },
      h("h3", { text: t(b.title) }),
      h("p", { class: "section-intro", text: t(b.intro) }),
      controls, breakdown, totalEl
    );
  }

  function renderCosts(main) {
    var c = CONTENT.costs;
    var section = h("section", { id: "costs", class: "section", "aria-labelledby": "costs-title" },
      sectionHeader("costs", c.title, "◫"),
      h("p", { class: "section-intro", text: t(c.intro) }));
    if (currency !== CONTENT.currencies.base) {
      section.appendChild(h("p", { class: "table-note", text: t(CONTENT.currencies.note) }));
    }

    /* interactive budget builder */
    section.appendChild(renderBudget());

    /* rent, by housing type — outside the snapshot */
    section.appendChild(h("h3", { text: t(c.rent.title) }));
    section.appendChild(h("p", { class: "section-intro", text: t(c.rent.intro) }));
    section.appendChild(h("div", { class: "table-wrap" }, h("table", { class: "data-table" },
      h("thead", {}, h("tr", {},
        h("th", { text: t(c.rent.cols.type) }),
        h("th", { text: t(c.rent.cols.range) }),
        h("th", { text: t(c.rent.cols.note) })
      )),
      h("tbody", {}, c.rent.rows.map(function (r) {
        return h("tr", { class: r.rough ? "row-rough" : null },
          h("th", { scope: "row", text: t(r.type) }),
          h("td", { text: t(r.range) }),
          h("td", { class: "note-cell", text: t(r.note) })
        );
      }))
    )));
    section.appendChild(h("p", { class: "table-note", text: t(c.rent.note) }));

    section.appendChild(h("h3", { text: t(c.snapshotTitle) }));
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

    /* money between Korea and Singapore */
    section.appendChild(h("aside", { class: "info-box" },
      h("h3", { text: t(c.moneyBox.title) }),
      h("ul", {}, c.moneyBox.items.map(function (i) { return h("li", { text: t(i) }); })),
      h("p", { class: "table-note", text: t(c.moneyBox.note) })
    ));
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
    footer.appendChild(h("details", { class: "footer-glossary" },
      h("summary", { text: t(CONTENT.ui.glossaryTitle) }),
      h("dl", {}, CONTENT.glossary.map(function (g) {
        return h("div", { class: "gloss-row" },
          h("dt", { text: g.k }),
          h("dd", { text: t(g.d) })
        );
      }))
    ));
    footer.appendChild(h("p", { class: "footer-emergency" },
      h("strong", { text: t(CONTENT.health.numbersTitle) + ": " }),
      h("span", {
        text: CONTENT.health.numbers.slice(0, 4).map(function (n) {
          return n.num + " " + t(n.desc).split(" — ")[0].split(" (")[0];
        }).join(" · ") + " · "
      }),
      h("a", { href: "#health", text: lang === "ko" ? "의료 섹션 →" : "Healthcare section →" })
    ));
  }

  /* ---------- glossary tooltips ----------
     Wrap the first occurrence of each acronym per section in a tooltip <abbr>.
     Runs once per render; only inside <p>/<li> so tables and headers stay clean. */

  var glossRegex = null;
  var glossMap = null;

  function glossify() {
    if (!CONTENT.glossary) return;
    if (!glossRegex) {
      glossMap = {};
      var keys = CONTENT.glossary.map(function (g) { glossMap[g.k] = g.d; return g.k; });
      keys.sort(function (a, b) { return b.length - a.length; });
      glossRegex = new RegExp("\\b(" + keys.join("|") + ")\\b");
    }
    document.querySelectorAll("main section.section").forEach(function (sec) {
      var used = {};
      var walker = document.createTreeWalker(sec, NodeFilter.SHOW_TEXT, {
        acceptNode: function (node) {
          var p = node.parentElement;
          if (!p) return NodeFilter.FILTER_REJECT;
          var tag = p.tagName;
          if (tag !== "P" && tag !== "LI" && tag !== "SPAN") return NodeFilter.FILTER_REJECT;
          if (p.closest(".gloss, a, button, .th-btn, .chips, h1, h2, h3, h4, summary")) return NodeFilter.FILTER_REJECT;
          return NodeFilter.FILTER_ACCEPT;
        }
      });
      var nodes = [];
      while (walker.nextNode()) nodes.push(walker.currentNode);
      nodes.forEach(function (node) {
        var text = node.nodeValue;
        var m = text.match(glossRegex);
        if (!m || used[m[1]]) return;
        var term = m[1];
        used[term] = true;
        var abbr = h("abbr", { class: "gloss", tabindex: "0", "data-tip": t(glossMap[term]), text: term });
        var after = document.createTextNode(text.slice(m.index + term.length));
        node.nodeValue = text.slice(0, m.index);
        node.parentNode.insertBefore(abbr, node.nextSibling);
        node.parentNode.insertBefore(after, abbr.nextSibling);
      });
    });
  }

  /* ---------- quick search ---------- */

  var searchOverlay = null;

  function closeSearch() {
    if (searchOverlay) { searchOverlay.remove(); searchOverlay = null; }
  }

  function openSearch() {
    if (searchOverlay) { searchOverlay.querySelector("input").focus(); return; }

    // index the current-language DOM: heading + body items with their nearest anchors
    var index = [];
    document.querySelectorAll("main section.section").forEach(function (sec) {
      var secTitle = sec.querySelector("h2") ? sec.querySelector("h2").textContent : sec.id;
      sec.querySelectorAll("h3, h4, p, li").forEach(function (el) {
        var text = (el.innerText || "").replace(/\s+/g, " ").trim();
        if (text.length < 12) return;
        var anchorEl = el.closest("[id]");
        index.push({
          section: sec.id, secTitle: secTitle,
          anchor: anchorEl && anchorEl.id !== sec.id ? anchorEl.id : sec.id,
          heading: /^H[34]$/.test(el.tagName),
          text: text, lower: text.toLowerCase()
        });
      });
    });

    var input = h("input", {
      type: "search",
      placeholder: t(CONTENT.ui.searchPlaceholder),
      "aria-label": t(CONTENT.ui.searchLabel)
    });
    var results = h("div", { class: "search-results" });

    function run() {
      var q = input.value.trim().toLowerCase();
      results.innerHTML = "";
      if (q.length < 2) return;
      var tokens = q.split(/\s+/);
      var hits = index.filter(function (it) {
        return tokens.every(function (tk) { return it.lower.indexOf(tk) !== -1; });
      });
      hits.sort(function (a, b) { return (b.heading ? 1 : 0) - (a.heading ? 1 : 0); });
      if (!hits.length) {
        results.appendChild(h("p", { class: "table-note", text: t(CONTENT.ui.searchEmpty) }));
        return;
      }
      hits.slice(0, 12).forEach(function (hit) {
        results.appendChild(h("a", {
          class: "search-hit", href: "#" + hit.anchor,
          onclick: function () { closeSearch(); }
        },
          h("span", { class: "search-sec", text: hit.secTitle }),
          h("span", { class: "search-text", text: hit.text.slice(0, 140) + (hit.text.length > 140 ? "…" : "") })
        ));
      });
    }
    input.addEventListener("input", run);
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        var first = results.querySelector("a");
        if (first) { e.preventDefault(); first.click(); }
      }
    });

    searchOverlay = h("div", {
      class: "search-overlay",
      onclick: function (e) { if (e.target === searchOverlay) closeSearch(); }
    }, h("div", { class: "search-panel", role: "dialog", "aria-label": t(CONTENT.ui.searchLabel) }, input, results));
    document.body.appendChild(searchOverlay);
    input.focus();
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeSearch();
    if ((e.metaKey || e.ctrlKey) && e.key === "k") { e.preventDefault(); openSearch(); }
    if (e.key === "/" && !/^(INPUT|TEXTAREA|SELECT)$/.test((document.activeElement || {}).tagName || "")) {
      e.preventDefault(); openSearch();
    }
  });

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
    renderSchools(main);
    renderLiving(main);
    renderHousing(main);
    renderAreas(main);
    renderCommunity(main);
    renderChurch(main);
    renderHelper(main);
    renderHealth(main);
    renderCar(main);
    renderCosts(main);
    renderApps(main);
    renderChecklist(main);
    addPagers();
    renderFooter();
    renderBackToTop();
    glossify();
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

  // every section view, in page order (nav items may be groups pointing at these)
  var SECTION_VIEWS = ["home", "education", "schools", "living", "housing", "areas",
    "community", "church", "helper", "health", "car", "costs", "apps", "checklist"];
  function viewIds() { return SECTION_VIEWS; }

  // which top-level nav item owns a view (self, or the group whose subs include it)
  function navOwnerOf(viewId) {
    var owner = viewId;
    CONTENT.nav.forEach(function (n) {
      if (n.id === viewId) owner = n.id;
      (n.subs || []).forEach(function (s) { if (s.id === viewId) owner = n.id; });
    });
    return owner;
  }

  function applyView(id, targetEl, noScroll) {
    currentView = id;
    var hero = document.querySelector(".hero");
    if (hero) hero.hidden = id !== "home";
    var home = document.getElementById("home");
    if (home) home.hidden = id !== "home";
    document.querySelectorAll("main section.section").forEach(function (sec) {
      sec.hidden = sec.id !== id;
    });
    var owner = navOwnerOf(id);
    document.querySelectorAll(".site-nav a[data-nav-id]").forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("data-nav-id") === owner);
    });
    var active = document.querySelector(".site-nav a.active");
    if (active) {
      var navEl = active.parentElement;
      navEl.scrollTo({ left: Math.max(0, active.offsetLeft - (navEl.clientWidth - active.offsetWidth) / 2) });
    }
    updateSubNav(owner, id);
    if (targetEl) {
      if (targetEl.tagName === "DETAILS") targetEl.setAttribute("open", "");
      requestAnimationFrame(function () { targetEl.scrollIntoView({ block: "start" }); });
    } else if (!noScroll) {
      window.scrollTo(0, 0);
    }
    // Leaflet can only size itself once its container is actually visible
    if (id === "living") setTimeout(initRealMap, 50);
  }

  function route() {
    var hash = decodeURIComponent(location.hash.replace(/^#\/?/, ""));
    if (!hash || hash === "home" || hash === "top") { applyView("home"); return; }
    // group nav ids (Social, Transport, Arrival…) route to their first member view
    var group = null;
    CONTENT.nav.forEach(function (n) { if (n.id === hash && n.target) group = n; });
    if (group) { applyView(group.target); return; }
    if (viewIds().indexOf(hash) !== -1) { applyView(hash); return; }
    // legacy deep-dive anchors (#area-<cardId>) → their canonical atlas card
    if (hash.indexOf("area-") === 0) {
      var legacy = atlasEntryFor(hash.slice(5));
      if (legacy) hash = "atlas-" + legacy.id;
    }
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
    function navLabel(id) {
      var found = null;
      CONTENT.nav.forEach(function (n) { if (n.id === id) found = n.label; });
      return found;
    }
    // pager sequence = section views in page order, whatever nav grouping looks like
    var items = [
      { id: "education", label: navLabel("education") },
      { id: "schools", label: CONTENT.education.schools.title },
      { id: "living", label: navLabel("living") },
      { id: "housing", label: CONTENT.housingPage.title },
      { id: "areas", label: CONTENT.living.areaTable.title },
      { id: "community", label: CONTENT.community.title },
      { id: "church", label: CONTENT.church.title },
      { id: "helper", label: CONTENT.helper.title },
      { id: "health", label: CONTENT.health.title },
      { id: "car", label: CONTENT.car.title },
      { id: "costs", label: CONTENT.costs.title },
      { id: "apps", label: CONTENT.apps.title },
      { id: "checklist", label: CONTENT.checklist.title }
    ];
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


  /* ---------- user-resizable table columns ---------- */

  function makeResizableTables() {
    document.querySelectorAll(".table-wrap table").forEach(function (table) {
      table.querySelectorAll("thead th").forEach(function (th) {
        if (th.querySelector(".col-grip")) return; // idempotent across re-renders
        var grip = document.createElement("span");
        grip.className = "col-grip";
        grip.setAttribute("aria-hidden", "true");
        th.appendChild(grip);
        grip.addEventListener("pointerdown", function (e) {
          e.preventDefault(); e.stopPropagation();
          grip.classList.add("active");
          if (!table.dataset.frozen) { // freeze current widths once, then fixed layout
            table.querySelectorAll("thead th").forEach(function (hh) { hh.style.width = hh.offsetWidth + "px"; });
            table.style.tableLayout = "fixed"; table.dataset.frozen = "1";
          }
          var startX = e.clientX, startW = th.offsetWidth;
          function move(ev) { th.style.width = Math.max(64, startW + ev.clientX - startX) + "px"; }
          function up() {
            grip.classList.remove("active");
            document.removeEventListener("pointermove", move);
            document.removeEventListener("pointerup", up);
          }
          document.addEventListener("pointermove", move);
          document.addEventListener("pointerup", up);
        });
      });
    });
  }
  function tableToCSV(table) {
    var out = [];
    table.querySelectorAll("tr").forEach(function (tr) {
      var cells = Array.prototype.slice.call(tr.querySelectorAll("th, td")).map(function (c) {
        var txt = (c.innerText || "").replace(/\s+/g, " ").replace(/[\s▾▴↑↓●]+$/, "").trim();
        return '"' + txt.replace(/"/g, '""') + '"';
      });
      if (cells.length) out.push(cells.join(","));
    });
    return "\uFEFF" + out.join("\n"); // BOM so Excel opens Korean text correctly
  }

  function addExportButtons() {
    document.querySelectorAll(".table-wrap.schools-scroll").forEach(function (wrap) {
      var sec = wrap.parentElement;
      if (!sec) return;
      var bar = sec.querySelector(".table-toolbar");
      if (!bar || bar.querySelector(".csv-btn")) return;
      var btn = h("button", {
        type: "button", class: "reset-btn csv-btn",
        text: lang === "ko" ? "CSV 내보내기 ↓" : "Export CSV ↓",
        onclick: function () {
          var table = wrap.querySelector("table");
          if (!table) return;
          var blob = new Blob([tableToCSV(table)], { type: "text/csv;charset=utf-8" });
          var aEl = document.createElement("a");
          aEl.href = URL.createObjectURL(blob);
          aEl.download = (sec.id || "table") + ".csv";
          document.body.appendChild(aEl); aEl.click();
          setTimeout(function () { URL.revokeObjectURL(aEl.href); aEl.remove(); }, 500);
        }
      });
      bar.appendChild(btn);
    });
  }

  function syncDataViewChrome() {
    addExportButtons();
    // expose the sticky header's height so table headers can stick right below it
    var hd = document.getElementById("site-header");
    if (hd) document.documentElement.style.setProperty("--header-h", hd.offsetHeight + "px");
    // scrollbar-safe viewport width for the full-bleed tables (100vw includes the
    // scrollbar on Windows/Linux, which forced ~8px of horizontal page scroll)
    document.documentElement.style.setProperty("--page-w", document.documentElement.clientWidth + "px");
    // let each data table's toolbar/filter bar span the same full-bleed width as its table
    document.querySelectorAll(".table-wrap.schools-scroll").forEach(function (wrap) {
      var sec = wrap.parentElement;
      if (!sec) return;
      ["filter-bar", "table-toolbar"].forEach(function (cls) {
        var el = sec.querySelector("." + cls);
        if (el) el.classList.add("data-view-bleed");
      });
      // the ≥1024 app-view drops the inner scroll box so headers can stick to the
      // page — but if the table is wider than the bleed, that overflows the page.
      // Restore the scroll box for exactly that case (falls back to in-box sticky).
      var tbl = wrap.querySelector("table");
      if (tbl) wrap.classList.toggle("needs-scroll", tbl.scrollWidth > wrap.clientWidth + 1);
    });
  }
  window.addEventListener("resize", syncDataViewChrome);
  syncDataViewChrome();
  new MutationObserver(function () { makeResizableTables(); syncDataViewChrome(); })
    .observe(document.getElementById("main"), { childList: true, subtree: true });
  makeResizableTables();

  /* ---------- go ---------- */

  renderAll(true);
  route();
})();
