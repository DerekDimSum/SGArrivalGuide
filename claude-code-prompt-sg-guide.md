# Claude Code Prompt — Singapore Relocation Guide (bilingual EN/KO)

Copy everything below the line into Claude Code from an empty project folder.

---

Build a static, bilingual (English/Korean) web guide called **"Moving to Singapore — A Family Guide"** for a Korean family relocating to Singapore (couple + twin children aged 2–4, husband on Employment Pass, wife and kids on Dependant's Passes, wife has limited English). It will be deployed to Vercel as a plain static site.

## Tech constraints

- **No framework, no build step.** Plain HTML/CSS/vanilla JS. Structure: `index.html`, `assets/styles.css`, `assets/app.js`, `assets/content.js`. It must work by opening `index.html` directly and deploy to Vercel with zero config.
- No external dependencies except (optionally) one Google Font pairing that supports both Latin and Hangul well (e.g., a Latin font + Noto Sans KR fallback). Everything else self-contained.
- Mobile-first responsive design — the primary reading device is a phone.
- Add `<meta name="robots" content="noindex">` (personal-use site) and no analytics.

## Bilingual system (core requirement)

- Every piece of visible text exists in both English and Korean. All strings live in `assets/content.js` as a structured object where each leaf is `{ en: "...", ko: "..." }` — content is never hardcoded in the HTML.
- A single EN / 한국어 toggle in a sticky header. Switching is instant (no reload), applies to every string including SVG map labels, and persists via localStorage. On first visit, default to the browser language (ko → Korean, else English).
- Set `lang="en"` / `lang="ko"` correctly on rendered text for screen readers and font rendering.
- Korean copy should be natural, polite written Korean (해요체/합쇼체 as appropriate for a guide), not machine-translation literal. Keep proper nouns (school names, MRT stations) in English with Korean gloss where helpful, e.g., "Bukit Timah (부킷 티마)".

## Page structure (in order)

1. **Hero + header** — title, one-line intro, language toggle, sticky section nav (scrollspy).
2. **First 30 days checklist** — interactive checklist (tappable items, state persisted in localStorage) covering: SG Arrival Card, EP/DP card appointments, SIM card, bank account, SingPass registration, PayNow setup, transport card (SimplyGo), rental search and lease signing, preschool visits, embassy 재외국민등록. Each item: short explanation + official link.
3. **Education** — three subsections:
   - *Preschool now (ages 2–4):* explain N1/N2/K1 level naming vs age; anchor operators vs mid-tier private (EtonHouse, Odyssey, Pat's Schoolhouse, MindChamps, etc.) vs international preschools; note foreigners pay unsubsidised fees so the price gap narrows; monthly fee ranges; twins = double fees, note sibling discounts; documents needed to enrol DP children.
   - *Primary school paths (planning ahead):* honest framing that there are no official "tiers"; three routes — local schools (with the clear caveat that non-PR international students are placed last in P1 registration and popular schools have effectively zero foreign intake), international schools (render the informal Tier 1 / 1.5 / 2 / 3 framework from the content pack as a comparison table with fee bands, waitlist reality, and EAL support), and Singapore Korean International School (Upper Bukit Timah) as the affordable Korean-identity option. Include the content pack's decision framework (length of stay, calendar system, English support).
   - *Enrichment:* what's common at ages 2–4 (swimming, phonics, music, right-brain programmes), typical costs, note that Korean-style education intensity maps naturally onto Singapore's enrichment scene.
4. **Where to live** — the biggest section:
   - *Comparison table:* one row per shortlisted area; columns: MRT walkability, community makeup (one phrase), preschool/enrichment density, typical 3BR condo rent range, vibe (one word).
   - *Interactive SVG map* (see spec below).
   - *Area cards*, one per area, identical template: **The pitch** (2 sentences, who it suits) → **Walkability check** (MRT line/station, supermarkets, food incl. Korean options) → **Kids** (notable preschools/enrichment nearby, primary-school angle) → **Community makeup** (local vs expat balance, which expat groups are present, family density, Korean presence as one line within that) → **Property & prices** (dominant stock, what the budget gets in a 3BR + helper room, 1–2 named example condos, whether HDB is a sensible option here). Each card has an "open in Google Maps" link.
   - *"How renting works here" box:* 2-year lease norm, deposit conventions, agent fees and who pays, diplomatic clause, viewing-to-signing speed, documents needed (IPA/EP), aircon servicing clause, minimum 3-month rule.
   - Housing criteria weighting to reflect: walking distance to MRT/supermarket/restaurants (highest), proximity to schools & enrichment, families with young kids nearby, condo amenities, space for a live-in helper (3BR + utility/helper room), proximity to work (lower priority).
5. **Korean community** — Korean Association Singapore (한인회), main online communities (Naver cafe/Kakao groups), K-town Tanjong Pagar, Korean supermarkets (Sol Mart, Shine Korea, etc.) and delivery options, Korean weekend school. Frame as the network layer that works from any neighbourhood.
6. **Church** — Korean congregations in Singapore (Protestant churches and Korean Catholic community), noting church is also the fastest way to meet other Korean parents.
7. **Hiring a helper** — why families with twin toddlers commonly hire live-in help; agency vs transfer helper; realistic all-in monthly cost (salary + levy + insurance + food/lodging); process and timeline; MOM rules in brief.
8. **The car question** — honest reality check: COE explained in one paragraph, real all-in cost of a family car in 2026, why most MRT-adjacent families skip it; alternatives (Grab, occasional rental, taxis with child seats note).
9. **Apps to install** — Grab, WhatsApp (note: local life runs on WhatsApp, not KakaoTalk), PayNow/banking app, SimplyGo, FairPrice, PropertyGuru/99.co, ActiveSG, Google Maps. One line each on why.
10. **Monthly cost snapshot** — a summary table assembling a realistic family-of-four monthly budget (rent by area choice, preschool ×2, helper, food, transport, utilities/phone, insurance) with low/high scenarios.
11. **Footer** — "figures last updated <date>", sources list (official links: MOM, MOE, ECDA, ICA, LTA), disclaimer that figures are estimates.

## SVG map spec

- Stylized inline SVG of Singapore: island outline, simplified MRT lines (correct line colours), and the shortlisted areas as labelled clickable regions; also mark landmarks: Singapore Korean International School, K-town (Tanjong Pagar), CBD, Changi Airport.
- Clicking an area highlights it and smooth-scrolls to its card; each area card links back to the map. Hover/tap shows the area name (bilingual per current language).
- Keyboard accessible (tabbable regions, Enter activates). Labels switch with the language toggle.
- Keep it schematic and clean — it's a visual table of contents, not cartography. Street-level detail is delegated to the Google Maps links.

## Design

- Clean, warm, editorial feel; generous whitespace; readable at 16px+ base; subtle section icons ok, no stock photos. Light and dark mode via `prefers-color-scheme`. A tasteful print stylesheet is a nice-to-have.
- Collapsible area cards / subsections on mobile so the page doesn't feel endless.

## Content

Use the content pack provided in `CONTENT.md` [or: appended below] as the source of truth for all figures, names, and links. Where a figure is missing, insert a clearly marked `TODO` token and list all TODOs at the end of your run — do not invent numbers.

Shortlisted areas (adjust only if the content pack says otherwise): Bukit Timah / Upper Bukit Timah, Buona Vista–Clementi–West Coast, East Coast / Katong, Holland Village / Farrer, Newton / Novena.

## Deployment

- Init a git repo with a sensible `.gitignore`. Confirm the site works as a plain static deploy on Vercel (no `vercel.json` needed). Provide a one-paragraph README with deploy steps (`vercel` CLI or GitHub import).

## Definition of done

- Language toggle flips every visible string including the map; choice persists.
- Checklist state persists across reloads.
- Map ↔ card navigation works both directions, with keyboard.
- Lighthouse: no console errors, responsive at 360px width, accessible names on all interactive elements.
- All figures traceable to the content pack; TODOs listed, none silently invented.
