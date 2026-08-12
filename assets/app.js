/* Moving to Singapore — A Family Guide
   Renders the whole page from CONTENT (assets/content.js). No dependencies. */

(function () {
  "use strict";

  var LANG_KEY = "sgguide:lang";
  var CHECK_KEY = "sgguide:checklist";

  /* ---------- state ---------- */

  function detectLang() {
    try {
      var saved = localStorage.getItem(LANG_KEY);
      if (saved === "en" || saved === "ko") return saved;
    } catch (e) {}
    var nav = (navigator.language || "").toLowerCase();
    return nav.indexOf("ko") === 0 ? "ko" : "en";
  }

  var lang = detectLang();

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

  // t() accepts a {en,ko} leaf or a plain string (proper nouns identical in both languages)
  function t(leaf) {
    if (leaf == null) return "";
    if (typeof leaf === "string") return leaf;
    return leaf[lang] != null ? leaf[lang] : (leaf.en || "");
  }
  function other(leaf) { return typeof leaf === "string" ? leaf : leaf[lang === "en" ? "ko" : "en"]; }

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

  function renderHeader() {
    var header = document.getElementById("site-header");
    header.innerHTML = "";

    var toggle = h("button", {
      class: "lang-toggle",
      type: "button",
      lang: lang === "en" ? "ko" : "en",
      "aria-label": t(CONTENT.ui.langToggleAria),
      text: t(CONTENT.ui.langToggle),
      onclick: function () { setLang(lang === "en" ? "ko" : "en"); }
    });

    var nav = h("nav", { class: "site-nav", "aria-label": lang === "ko" ? "섹션 이동" : "Sections" });
    nav.appendChild(h("a", { href: "#home", dataset: { navId: "home" }, text: t(CONTENT.ui.homeLabel) }));
    CONTENT.nav.forEach(function (item) {
      nav.appendChild(h("a", { href: "#" + item.id, dataset: { navId: item.id }, text: t(item.label) }));
    });

    header.appendChild(h("div", { class: "header-row" },
      h("a", { class: "site-title", href: "#top", text: t(CONTENT.ui.siteTitle) }),
      toggle
    ));
    header.appendChild(nav);
  }

  function renderHero(main) {
    main.appendChild(h("section", { class: "hero", id: "top" },
      h("p", { class: "hero-kicker", text: t(CONTENT.hero.subtitle) }),
      h("h1", { text: t(CONTENT.hero.title) }),
      h("p", { class: "hero-tagline", text: t(CONTENT.hero.tagline) }),
      h("p", { class: "hero-profile", text: t(CONTENT.hero.profile) })
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

  function renderEducation(main) {
    var ed = CONTENT.education;
    var section = h("section", { id: "education", class: "section", "aria-labelledby": "education-title" },
      sectionHeader("education", ed.title, "✎"));

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
          h("td", { text: r.fees }),
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
    var d = h("details", { class: "subsection", dataset: { key: key } },
      h("summary", {}, h("h3", { text: t(titleLeaf) })),
      h("div", { class: "sub-body" }, bodyEl)
    );
    if (openState.hasOwnProperty(key) ? openState[key] : wideScreen()) d.setAttribute("open", "");
    return d;
  }

  function wideScreen() { return window.matchMedia("(min-width: 768px)").matches; }

  /* ---------- where to live ---------- */

  var MAP_GEO = {
    island: "M62,238 C66,190 118,142 178,120 C240,97 310,86 385,84 C455,82 525,94 585,114 C645,134 703,158 716,184 C728,206 702,236 660,256 C612,280 558,300 498,308 C438,316 378,318 318,312 C258,306 188,298 138,284 C96,272 58,270 62,238 Z",
    lines: [
      { id: "nsl", color: "#d42e12", d: "M298,108 C320,142 382,150 406,186 C426,216 436,252 442,290" },
      { id: "ewl", color: "#009645", d: "M700,190 C640,236 560,262 460,272 C370,282 258,274 118,220" },
      { id: "ccl", color: "#fa9e0d", d: "M442,288 C360,300 268,268 268,204 C268,164 330,140 396,152" },
      { id: "dtl", color: "#005ec4", d: "M224,134 C270,170 302,186 342,216 C392,250 430,264 470,272 C512,280 546,256 572,236" },
      { id: "tel", color: "#9d5b25", d: "M374,114 C390,164 410,214 438,262 C458,294 520,292 586,262" }
    ],
    areas: {
      "bukit-timah":     { cx: 298, cy: 182, rx: 62, ry: 40, lx: 298, ly: 178 },
      "clementi":        { cx: 205, cy: 268, rx: 66, ry: 33, lx: 205, ly: 264 },
      "holland-village": { cx: 338, cy: 247, rx: 45, ry: 27, lx: 338, ly: 243 },
      "newton":          { cx: 413, cy: 203, rx: 42, ry: 26, lx: 413, ly: 199 },
      "east-coast":      { cx: 566, cy: 271, rx: 64, ry: 29, lx: 566, ly: 267 }
    },
    landmarks: [
      { key: "skis",   x: 283, y: 152, lx: 283, ly: 138, anchor: "middle" },
      { key: "ktown",  x: 430, y: 302, lx: 430, ly: 322, anchor: "middle" },
      { key: "cbd",    x: 462, y: 286, lx: 476, ly: 282, anchor: "start" },
      { key: "changi", x: 686, y: 186, lx: 686, ly: 172, anchor: "middle" }
    ]
  };

  var SVG_NS = "http://www.w3.org/2000/svg";
  function s(tag, attrs) {
    var el = document.createElementNS(SVG_NS, tag);
    if (attrs) for (var k in attrs) el.setAttribute(k, attrs[k]);
    for (var i = 2; i < arguments.length; i++) {
      var c = arguments[i];
      if (c == null) continue;
      el.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    }
    return el;
  }

  function activateArea(id, scroll) {
    document.querySelectorAll(".map-area").forEach(function (g) {
      g.classList.toggle("active", g.getAttribute("data-area") === id);
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

  function buildMap() {
    var svg = s("svg", {
      viewBox: "0 0 800 430", class: "sg-map", role: "group",
      "aria-label": t(CONTENT.ui.mapAriaLabel)
    });

    svg.appendChild(s("path", { d: MAP_GEO.island, class: "island" }));

    MAP_GEO.lines.forEach(function (l) {
      svg.appendChild(s("path", { d: l.d, class: "mrt-line", stroke: l.color }));
    });

    CONTENT.living.areas.forEach(function (area) {
      var g = MAP_GEO.areas[area.id];
      if (!g) return;
      var group = s("g", {
        class: "map-area", "data-area": area.id, tabindex: "0", role: "button",
        "aria-label": t(area.name)
      },
        s("ellipse", { cx: g.cx, cy: g.cy, rx: g.rx, ry: g.ry }),
        s("text", { x: g.lx, y: g.ly, "text-anchor": "middle", class: "area-label" }, t(area.short)),
        s("text", { x: g.lx, y: g.ly + 15, "text-anchor": "middle", class: "area-vibe" }, t(area.vibe))
      );
      group.appendChild(s("title", {}, t(area.name)));
      function go() { activateArea(area.id, true); }
      group.addEventListener("click", go);
      group.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); }
      });
      svg.appendChild(group);
    });

    MAP_GEO.landmarks.forEach(function (lm) {
      var label = t(CONTENT.living.map.landmarks[lm.key]);
      var isSkis = lm.key === "skis";
      var mark = isSkis
        ? s("path", { class: "landmark-star", d: starPath(lm.x, lm.y, 7) })
        : s("circle", { class: "landmark-dot", cx: lm.x, cy: lm.y, r: 4 });
      svg.appendChild(s("g", { class: "landmark" },
        mark,
        s("text", { x: lm.lx, y: lm.ly, "text-anchor": lm.anchor, class: "landmark-label" }, label)
      ));
    });

    return svg;
  }

  function starPath(cx, cy, r) {
    var pts = [];
    for (var i = 0; i < 10; i++) {
      var rad = (i % 2 === 0) ? r : r * 0.45;
      var a = -Math.PI / 2 + i * Math.PI / 5;
      pts.push((cx + rad * Math.cos(a)).toFixed(1) + "," + (cy + rad * Math.sin(a)).toFixed(1));
    }
    return "M" + pts.join("L") + "Z";
  }

  function renderLiving(main) {
    var lv = CONTENT.living;
    var section = h("section", { id: "living", class: "section", "aria-labelledby": "living-title" },
      sectionHeader("living", lv.title, "⌂"));

    /* market context */
    var mk = h("div", {}, h("h3", { text: t(lv.market.title) }));
    lv.market.paras.forEach(function (p) { mk.appendChild(h("p", { text: t(p) })); });
    mk.appendChild(h("p", {}, srcLink(lv.market.srcUrl), " ", srcLink(lv.market.hdbUrl, { en: "HDB quota tool ↗", ko: "HDB 쿼터 조회 ↗" })));
    section.appendChild(mk);

    /* criteria */
    var cr = h("aside", { class: "info-box criteria-box" },
      h("h3", { text: t(lv.criteria.title) }),
      h("ul", { class: "criteria-list" }, lv.criteria.items.map(function (c) {
        return h("li", { class: "w-" + c.weight },
          h("span", { text: t(c.label) }),
          h("span", { class: "weight-tag", text: t(lv.criteria.weightLabels[c.weight]) })
        );
      })),
      h("p", { class: "todo-note", text: t(lv.criteria.commuteTodo) })
    );
    section.appendChild(cr);

    /* comparison table */
    section.appendChild(h("h3", { text: t(lv.comparison.title) }));
    section.appendChild(h("p", { class: "table-note", text: t(lv.comparison.note) }));
    var cols = lv.comparison.cols;
    section.appendChild(h("div", { class: "table-wrap" }, h("table", { class: "data-table cmp-table" },
      h("thead", {}, h("tr", {},
        h("th", { text: t(cols.area) }), h("th", { text: t(cols.mrt) }), h("th", { text: t(cols.community) }),
        h("th", { text: t(cols.kids) }), h("th", { text: t(cols.rent) }), h("th", { text: t(cols.vibe) })
      )),
      h("tbody", {}, lv.areas.map(function (a) {
        return h("tr", {},
          h("th", { scope: "row" }, h("a", { href: "#area-" + a.id, text: t(a.short) })),
          h("td", { text: t(a.cmp.mrt) }),
          h("td", { text: t(a.cmp.community) }),
          h("td", { text: t(a.cmp.kids) }),
          h("td", { text: t(a.cmp.rent) }),
          h("td", { text: t(a.vibe) })
        );
      }))
    )));

    /* map */
    var mapWrap = h("figure", { class: "map-figure", id: "sg-map" },
      h("h3", { text: t(lv.map.title) }),
      buildMap(),
      h("figcaption", {},
        h("p", { class: "map-hint", text: t(CONTENT.ui.mapHint) }),
        h("p", { class: "legend-title", text: t(CONTENT.ui.mrtLegend) }),
        h("ul", { class: "mrt-legend" }, MAP_GEO.lines.map(function (l) {
          return h("li", {},
            h("span", { class: "legend-swatch", style: "background:" + l.color }),
            h("span", { text: t(lv.map.lines[l.id]) })
          );
        }))
      )
    );
    section.appendChild(mapWrap);

    /* area cards */
    lv.areas.forEach(function (a) {
      var gmaps = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(a.gmapsQuery);
      var parts = [
        { title: { en: "The pitch", ko: "한 줄 요약" }, body: a.pitch },
        { title: { en: "Walkability check", ko: "도보 생활권 점검" }, body: a.walk },
        { title: { en: "Kids", ko: "아이 키우기" }, body: a.kids, verify: a.kidsVerify },
        { title: { en: "Community makeup", ko: "커뮤니티 구성" }, body: a.community },
        { title: { en: "Property & prices", ko: "매물과 가격" }, body: a.property, verify: a.verify }
      ];
      var body = h("div", { class: "sub-body" });
      parts.forEach(function (p) {
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
    section.appendChild(h("div", { class: "table-wrap" }, h("table", { class: "data-table costs-table" },
      h("thead", {}, h("tr", {},
        h("th", { text: t(c.cols.item) }), h("th", { text: t(c.cols.low) }),
        h("th", { text: t(c.cols.high) }), h("th", { text: t(c.cols.note) })
      )),
      h("tbody", {},
        c.rows.map(function (r) {
          return h("tr", {},
            h("th", { scope: "row", text: t(r.item) }),
            h("td", { text: r.low }), h("td", { text: r.high }),
            h("td", { class: "note-cell", text: t(r.note) })
          );
        }),
        h("tr", { class: "total-row" },
          h("th", { scope: "row", text: t(c.total.item) }),
          h("td", { text: c.total.low }), h("td", { text: c.total.high }),
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
    document.title = t(CONTENT.hero.title) + " — " + t(CONTENT.hero.subtitle);
    var skip = document.querySelector(".skip-link");
    if (skip) skip.textContent = t(CONTENT.ui.skipToContent);

    renderHeader();
    var main = document.getElementById("main");
    main.innerHTML = "";
    renderHero(main);
    renderHome(main);
    renderChecklist(main);
    renderEducation(main);
    renderLiving(main);
    renderCommunity(main);
    renderChurch(main);
    renderHelper(main);
    renderCar(main);
    renderApps(main);
    renderCosts(main);
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
    if (targetEl) {
      if (targetEl.tagName === "DETAILS") targetEl.setAttribute("open", "");
      requestAnimationFrame(function () { targetEl.scrollIntoView({ block: "start" }); });
    } else if (!noScroll) {
      window.scrollTo(0, 0);
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
