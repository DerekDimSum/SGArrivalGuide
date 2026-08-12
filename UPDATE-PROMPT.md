# Claude Code Prompt — Update the SG Family Guide (content generation 2)

Run this from the `sg-family-guide` project root. This is an **update to the existing build**, not a rebuild — keep the current architecture exactly as it is (index.html shell, `assets/content.js` data object with `{en, ko}` leaves, `assets/app.js` renderers, vendored Leaflet, schematic SVG injected from `CONTENT.living.map.svg`).

`CONTENT.md` in this folder has been replaced with the latest researched content pack (August 2026). It is the single source of truth — do not invent figures. `map.svg` has also been replaced with an updated schematic. Your job is to sync the site to them.

## 1. Where-to-live section — the big one (CONTENT.md §3, now renumbered 3.0–3.8)

Render order becomes: district decoder → housing-types decoder → market context → office anchor → comparison table → area cards with sub-areas → helper's-room callout → decision block → renting box.

- **Add §3.0 District decoder** (`living.districts`): short intro (D1–D28 postal districts, CCR/RCR/OCR bands), the family-relevant districts table from CONTENT.md, and the two practical notes (agent search brief phrasing; D10 label premium vs D21/D23 value — "the Hillview arbitrage").
- **Add §3.1 Housing-types decoder** (`living.housingTypes`): compact cards for HDB / condo / EC / walk-up / landed ladder (terrace → semi-D → bungalow → GCB) / cluster house / shophouse / serviced apartment, with the rent implications given in CONTENT.md.
- **Update §3.2 market context**: add the family-unit-scarcity paragraph (new 3BRs shrank, helper rooms cut, pre-2012 stock holds price).
- **Add §3.3 office anchor** (`living.office`): Marina One West Tower, its four MRT stations (Shenton Way Exit 5 → basement link is the headline), and the **Circle Line Stage 6 opened 12 July 2026** note.
- **Rework the comparison table** (§3.4): rows are now the seven entries in CONTENT.md (Bukit Timah split into Beauty World/KAP–Sixth Ave/Hillview rows) with columns: 3BR, 4BR, MRT commute to Marina One (door-to-door EST), drive to SKIS, HDB proxy, vibe. **Delete `living.criteria.commuteTodo` — the office is confirmed.** Keep the criteria block itself.
- **Rework area cards** (§3.5): `living.areas` entries gain optional `subAreas: [...]` — Bukit Timah becomes one corridor card with three sub-area profiles (Beauty World/Upper BT, KAP/Sixth Avenue, Hillview), East Coast gains its Katong / Amber–Meyer / Marine Parade split line. Every card gets the new 3BR **and 4BR** ranges with named condos + sqft, stock-mix line, and landed rents where present. Render `localTake` fields (marked "Local take" in CONTENT.md) as visually distinct insider-tip callouts — italic card with a small badge, clearly opinion vs data.
- **Add §3.6 helper's-room rule** and **§3.7 "Which sub-area?" decision block** as their own rendered blocks (decision block = guidance list, not a verdict).
- Keep the renting box (§3.8) as is.

## 2. Maps — MINIMAL, STYLE-PRESERVING edits only

⚠️ The maps have already been hand-tuned for readability (label pills, dashed polygons, dark tile styling, current label placement). Do NOT restyle, reposition existing labels, change colors, or rework either map. Make only these additions, each in the exact style of existing elements, and skip any addition that would visibly clutter:

- **Leaflet real map**: the only required change is the office. Since a "CBD" pin+pill already exists at Marina Bay, **repurpose it**: move the pin to Marina One `[1.2764, 103.8540]` and relabel the pill "Marina One (office)" / "마리나 원 (회사)" — same pill component, same styling, no new element. Do NOT extend the bukit-timah polygon and do NOT add sub-area markers to this map — it is tuned as-is.
- **Schematic (`CONTENT.living.map.svg`)**: apply two small diffs only, keeping everything else byte-identical: (1) the CBD dot/label becomes a small gold square labeled "Marina One (office)" / "마리나 원 (회사)" (add a `.office` class in `styles.css`, gold fill matching `.star`); (2) widen the Bukit Timah ellipse to cover the Beauty World–KAP–Hillview corridor: `cx=400 cy=312 rx=90 ry=52 rotate(-35 400 312)`, with its name label at y≈288 and vibe label at y≈303. The updated `map.svg` in the project root shows the target result — use it as the reference diff, not a wholesale replacement, and preserve the existing click-wiring and `lang-en`/`lang-ko` conventions.
- After the change, screenshot or eyeball both maps against the current build: if any label now overlaps, revert that addition and note it instead.

## 3. Education — replace the static level table with a birthday → level calculator

`age-calculator-prototype.html` in the project root is a **working, tested reference implementation** — port its logic and content verbatim into the site (content strings into `content.js` as `{en, ko}` leaves under `education.calculator`, logic into `app.js`, styling adapted to existing tokens). The cut-off rules and sources are in CONTENT.md §2b-ii.

- UI: date input (default a sensible 2023 date) → headline result ("Right now in the local system: **N1**") → per-system table: SG local, British (Tanglin/Dulwich), UWCSEA, American (SAS/Stamford), Korean SKIS — each row shows the cut-off rule badge, the level this school year, and when formal school starts (P1 Jan YYYY / Year 1 Aug YYYY / Grade 1 Aug YYYY / 초1 Mar YYYY).
- Keep the existing static "Level names vs age" table but demote it to a collapsible "reference table" below the calculator (it's still useful offline/printed).
- Port the placement disclaimer callout exactly (Tanglin strict, CIS +1 year, SKIS ⚠️ confirm with admission@skis.kr).
- Edge cases the prototype already handles — preserve them: SG local born-on-1-Jan → previous cohort; Sept-1 systems flip academic year on 1 Aug; SKIS 유치부 band = school year − birth year − 1, minimum 만3, March year-start; children too young/old get graceful messages.
- The calculator must work fully offline (no libraries) and both languages must flip every string including computed level names.

## 4. Smaller syncs

- **Costs section**: update the rent row per CONTENT.md §9 (3BR low end now ~S$4,000 — Hillview from ~S$3,900; note the sub-area spread).
- **Footer/TODO surface**: office TODO is resolved; keep visible ⚠️VERIFY items (SKIS school-bus shuttle claim — Newton MRT + Clementi MRT, confirm with admission@skis.kr; SKIS fees; Shichida fees; anchor-operator foreigner tiers).
- Checklist/community/church/helper/car/apps sections: no content changes this round — leave untouched. (Education changes are exactly the calculator in §3 — nothing else in that section.)

## 5. Korean copy

All new strings need natural written Korean (해요체, consistent with the existing copy — mirror its tone). Keep proper nouns in English with Korean gloss where the existing copy does. Do not machine-translate literally; match register.

## 6. Definition of done

- No visible "TODO" text remains for the office/commute anywhere, in either language.
- Language toggle flips every new string (district table, housing cards, sub-area cards, local takes, office block, map labels).
- Comparison table fits mobile (360px) — horizontal scroll or stacked cards, consistent with current approach.
- Both maps show the office marker; schematic ellipse covers Hillview; clicking areas still scrolls to cards.
- Every new figure traces to CONTENT.md; list any figure you could not place.
- `git commit` the update and deploy (`npx vercel --prod`).
