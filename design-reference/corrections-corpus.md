---
title: CastWorks Website — Design & Copy Corrections Corpus
date_generated: 2026-05-08
source_memory_files:
  - project_company_website.md
  - aesthetics_brand_identity.md
  - user_castworks_positioning.md
  - feedback_visual_iteration.md
  - writing_style_egg_voice.md
  - working_relationship.md
  - feedback_planning_phase.md
  - inbox/2026-05-07.md
transcript_mining: "Deferred — permission blocked on mcp__ccd_session_mgmt__search_session_transcripts. Memory-file extraction only. Augmentation pass possible later."
entry_counts_by_category:
  TYPOGRAPHY: 6
  COLOR: 4
  LAYOUT: 8
  COPY_VOICE: 11
  CTA_TREATMENT: 4
  IMAGERY_VISUALS: 7
  BRAND_ASSETS: 9
  INFORMATION_HIERARCHY: 5
  INTERACTION_UX: 7
  OTHER: 4
  TOTAL: 65
entry_counts_by_tag:
  LIKELY_UNIVERSAL: 32
  LIKELY_PERSONAL: 20
  UNCERTAIN: 13
tagging_note: "Tags reflect judgment about generalizability. LIKELY UNIVERSAL = appears in canonical design literature or established brand books, or names a known principle. LIKELY PERSONAL = Egg-specific preference or strongly tied to CastWorks positioning. UNCERTAIN = could apply widely but evidence is thin or context-dependent. Tags are load-bearing: without them, personal preference gets codified as canon."
---

# CastWorks Website — Design & Copy Corrections Corpus

This document captures design and copy corrections made across 15+ development sessions on the CastWorks company website. Egg's corrections are treated as ONE data input — useful signal, not authoritative standard. Each entry is tagged to distinguish likely-universal principles from personal or brand-specific preferences.

---

## TYPOGRAPHY

---

### T-01 — Instrument Serif + Inter over any single-typeface system

**Tag:** [LIKELY UNIVERSAL]

**Rule:** Use a heritage serif (display) paired with a modernist sans-serif (body). Live implementation: Instrument Serif (display) + Inter (body, weights 400/500/600).

**Original:** EB Garamond was specified as the brand serif in the 2026-04-26 design lock. Never adopted in production.

**Why:** The "typographic dialectic" carries the brand's dual nature — "boutique creative agency with tech leverage" — without resorting to literal illustration. Peer pattern across Stripe, Anthropic, Mercury, Monocle: heritage serif signals editorial human curation; modernist sans signals structural technology. A single typeface can only carry half the positioning.

**How to apply:** For any editorial B2B service brand positioning itself as "methodical + human," default to a serif/sans pairing. The serif should carry editorial weight (not a rounded tech-serif); the sans should be clean and legible at body sizes.

**Source:** `aesthetics_brand_identity.md` — Core Principles §3, Locked Decisions 2026-05-07

---

### T-02 — Extreme size contrast between hero and body

**Rule:** Hero/display text at 72–96px. Body at 18px. Large gap, no intermediate headline weights competing for attention.

**Original:** Unstated — implied correction from "no eyebrow badges, no gradient text on headlines" direction.

**Why:** Editorial premium brands (Chronicle, Mercury, Anthropic, Wynter) use extreme size contrast to establish hierarchy immediately. Intermediate headline sizes (24–48px competing with hero) fragment the hierarchy.

**How to apply:** In any page where a display headline anchors the section, jump from display to body size with minimal intermediate sizes. Reserve intermediate sizes for functional labels (step numbers, category names), not competitive headlines.

**Source:** `project_company_website.md` — Design direction (locked)

---

### T-03 — Inter weights 300 and 700 removed as unused

**Tag:** [LIKELY UNIVERSAL]

**Rule:** Remove font weights that are not verifiably used in the codebase. Inter 300 and 700 were loaded but unused; removed after grep confirmed absence.

**Original:** Inter with a wider weight range (300–700) was the initial spec.

**Why:** Unused font weights add page weight and complicate the type system without adding visual range. Fewer weights = more consistent hierarchy and faster load.

**How to apply:** Before shipping a font integration, grep for every weight loaded. Remove any not present in a Tailwind class, CSS rule, or inline style. This is a performance and system-hygiene rule.

**Source:** `project_company_website.md` — Type system (2026-05-07 status)

---

### T-04 — No eyebrow badges or gradient text on headlines

**Tag:** [LIKELY UNIVERSAL]

**Rule:** Headlines are plain, high-contrast text. No badge/pill labels above the headline ("eyebrow copy"). No gradient fills on headline text.

**Original:** Implied correction from design direction lock — the original dark-navy SaaS treatment used these conventions.

**Why:** Eyebrow badges and gradient headlines are SaaS-product conventions. They signal "look at this feature," not editorial permanence. Trust in B2B is built through structural integrity and consistency, not through visual decoration.

**How to apply:** Whenever a headline design includes a colored badge, category label, or gradient treatment, evaluate whether it is doing functional work (navigational signpost, step label) or purely decorative work. Purely decorative eyebrows should be removed.

**Source:** `project_company_website.md` — Design direction (locked); `aesthetics_brand_identity.md` — Common Pitfalls P2

---

### T-05 — No rounded tech-serifs in brand-facing typography

**Tag:** [LIKELY PERSONAL]

**Rule:** Reject rounded tech-serifs (e.g., Recoleta, Fraunces when used in their more casual styles) for the brand type system. Stark geometry, high contrast, monochrome-friendly.

**Why:** Rounded tech-serifs signal B2C playfulness and "startup energy." For a B2B service brand in the editorial positioning zone, they erode the trust signal. The brand should look identical in print foil stamping and dark-mode UI.

**How to apply:** When evaluating typeface candidates for an editorial B2B brand, score against: Does it look serious in print? Does it survive monochrome? Does it read as contemporary without reading as trendy? Rounded or soft serifs fail the first two.

**Source:** `aesthetics_brand_identity.md` — Core Principles §5

---

### T-06 — Tear-sheet mocks use Instrument Serif on off-white card surface

**Tag:** [LIKELY PERSONAL]

**Rule:** When rendering document-shaped mocks (deliverable previews, tear-sheets, sample briefs), use the brand's display serif (Instrument Serif) on an off-white card surface. Not sans-serif on white — that reads as product UI.

**Original:** Not stated — implied by the "service-not-SaaS rule applied to mocks" direction.

**Why:** The deliverable is a polished document, not a dashboard tile. Using the same typography and surface as the brand's editorial register reinforces that CastWorks is a service producing documents, not software producing reports.

**How to apply:** Whenever a mock represents a physical or semi-physical deliverable (brief, tear-sheet, report), use the brand's serif type on a warm/off-white surface. Use sans-serif on white only for product UI contexts, which this brand avoids.

**Source:** `user_castworks_positioning.md` — Copy and visual rules (2026-04-27)

---

## COLOR

---

### C-01 — Deep forest teal #1F3A34 over flat black for high-contrast modules

**Tag:** [LIKELY PERSONAL]

**Rule:** For dark high-contrast modules, use deep forest teal `#1F3A34` instead of black or near-black neutral. Cream `#F4F0E8` as the warm-light counterpart.

**Original:** Earlier design used a flat navy-blue SaaS treatment (`#335CFF` saturated blue cited as explicitly out).

**Why:** Deep forest teal reads as premium and editorial; flat black reads as generic; saturated blue reads as SaaS. The teal-cream pairing survives scalability and dark-mode tests while carrying the brand's boutique positioning.

**How to apply:** When a brand needs a single dark accent color, test against: Does it read as editorial? Does it survive monochrome print? Is it ownable in the category? Saturated tech blues and neutral blacks fail the first two.

**Source:** `user_castworks_positioning.md` — Visual rules (2026-04-21); `aesthetics_brand_identity.md` — Locked Decisions 2026-04-26

---

### C-02 — Restrained accent palette — one color, not a palette

**Tag:** [LIKELY UNIVERSAL]

**Rule:** One accent color across the page. Not a multi-color system. The teal status indicator on tear-sheet mocks is the only accent-color element alongside the dark module.

**Original:** Previous `#335CFF` saturated blue was the accent. Retired in favor of the teal system.

**Why:** Editorial brands gain distinctiveness from extreme restraint, not from palette variety. Multiple accent colors fragment attention and dilute the single-color association.

**How to apply:** For pre-revenue brands with no established color equity, a single accent applied consistently across all accent contexts (CTAs, indicators, active states, the dark module) builds faster recognition than a multi-accent system.

**Source:** `project_company_website.md` — Design direction (locked)

---

### C-03 — Light background as the base case; dark only for contrast modules

**Tag:** [LIKELY UNIVERSAL]

**Rule:** Warm off-white or pure white as the page base. Dark (teal `#1F3A34`) used only for isolated high-contrast modules — not as a section background pattern.

**Original:** Original dark-navy SaaS treatment used dark backgrounds throughout.

**Why:** Editorial premium brands (Mercury, Stripe Press, Anthropic) use light bases because the reading experience demands it. Dark as a base creates visual weight that fights with text-heavy editorial content. Selective use of dark for contrast modules makes those modules visually impactful.

**How to apply:** Default all sections to a light base. Use a full dark module only when it needs to stand out as a distinct beat — data display, key claim, visual pause. More than one dark module per page removes the impact of each.

**Source:** `project_company_website.md` — Design direction (locked)

---

### C-04 — Nav background: always-on warm card fill, not transparent

**Tag:** [UNCERTAIN]

**Rule:** The navigation ribbon has an always-on warm background fill (rgb 242 238 229) and hairline rule border so it reads as a distinct band — not transparent or ghost-style.

**Original:** Some versions used a ghost/transparent nav that gained background only on scroll.

**Why:** Always-on background ensures the nav reads as a distinct surface from the first pixel of page load. For a single-scroll page whose hero is an animated canvas, a ghost nav can become unreadable against light or dynamic content.

**How to apply:** For pages with animated, full-bleed, or light-colored hero content, an always-on nav background is safer than a scroll-triggered one. The scroll-triggered translucent pattern is appropriate when the hero is a distinct dark section and the nav content is light.

**Source:** `project_company_website.md` — Nav (2026-05-07 status)

---

## LAYOUT

---

### L-01 — No cold empty margins — diagnose before filling

**Tag:** [LIKELY UNIVERSAL]

**Rule:** When a section has heading + body on the left and empty space on the right, diagnose whether it is a layout problem or a content problem before filling the space. Default answer is "restructure the grid" — not "add decorative imagery."

**Original:** Implied correction — filling empty right-column space with decorative imagery was the rejected default.

**Why:** The page rule is that every visual earns its keep by carrying meaning. Decorative imagery placed to fill empty space violates this without solving the underlying layout problem.

**How to apply:** When a grid has an empty column, ask in order: (1) Should this section be single-column? (2) Should the grid rebalance (e.g., 3fr/2fr with a pull-quote)? (3) Is there functional content (diagram, data module, pull-quote) that is actually load-bearing here? Only propose imagery if an informational visual is genuinely needed.

**Source:** `user_castworks_positioning.md` — Visual rules (2026-04-21)

---

### L-02 — Page kept short; editorial brevity reads as confidence

**Tag:** [LIKELY UNIVERSAL]

**Rule:** Shorter pages read as more confident for B2B service brands in the editorial register. Length that argues hard inverts the positioning. Cut sections when the argument they make is already made elsewhere.

**Original:** 7-section long-scroll with Risk Reversal, Authority, Agitation sections. These were cut.

**Why:** Editorial premium references (Mercury, Stripe Press, A24, Anthropic) read confident because they're brief. Length signals insecurity when the audience doesn't need convincing — confirm-page audiences (warm leads from outbound) have already been pitched.

**How to apply:** For any landing page serving warm leads from outbound, the audience is already directionally convinced. The page's job is to confirm and reassure, not to argue. Cut sections that re-stage the pitch.

**Source:** `project_company_website.md` — Site function (locked 2026-04-27)

---

### L-03 — Sticky nav by making existing nav sticky, not adding a separate sticky CTA

**Tag:** [LIKELY UNIVERSAL]

**Rule:** When a sticky CTA is requested and the existing nav already contains the same CTA button, make the nav itself sticky. Do not add a second sticky CTA element.

**Original:** A standalone sticky CTA bar was the initial plan.

**Why:** Duplicate CTAs waste visual real estate and create competing affordances. The nav was already the user's primary action surface; making it sticky achieves the same goal without redundancy.

**How to apply:** Before adding any new persistent UI element, ask whether an existing element could be promoted to that role. Sticky navs are generally more appropriate than dedicated sticky CTA bars when the nav already carries the primary action.

**Source:** `project_company_website.md` — UI design rules (2026-04-26/27)

---

### L-04 — Two-layer editorial gateway over single long-scroll for a confirm-page

**Tag:** [UNCERTAIN]

**Rule:** The site restructured from a single long-scroll into a splash gateway (wordmark + headline + CTA, full-bleed animation) with sub-pages for methodology, intake, about, sample. The splash is a brand impression; detail lives on sub-pages.

**Original:** Single long-scroll landing page was the initial architecture (locked 2026-04-20, superseded 2026-05-07).

**Why:** Authority.inc was the structural inspiration. The splash gateway establishes presence and brand quality before the reader commits to reading. Warm leads who already know the offer need credibility confirmation, not a pitch scroll.

**How to apply:** This architecture is appropriate when: (a) the audience arrives with context (outbound, referral, or warm leads), (b) the brand impression needs to land before the methodology detail, (c) the site functions as a credibility check, not a cold pitch. Single-scroll linear narrative is better for cold traffic or conversion-optimized landing pages.

**Source:** `project_company_website.md` — Status (2026-05-07)

---

### L-05 — No "Built in [city]" in footer for a pre-revenue, pre-entity company

**Tag:** [LIKELY PERSONAL]

**Rule:** Removed "Built in Berlin" from footer. No geographical markers in brand-facing assets for a pre-revenue company without a physical presence claim to defend.

**Original:** Footer included "Built in Berlin" as a founder-identity signal.

**Why:** Egg's call. Pre-revenue, a city signal can raise more questions than it answers (entity jurisdiction, team location, support timezone). The signal's value is uncertain; the noise is not.

**How to apply:** For pre-revenue B2B service brands, city/country signals in public copy are worth examining — they carry cultural associations that may or may not align with the target buyer's geography. Defer until the entity and physical presence are locked.

**Source:** `project_company_website.md` — Pre-launch review checklist (2026-04-21)

---

### L-06 — Footer: identity left, nav links + email right, copyright row below

**Tag:** [LIKELY UNIVERSAL]

**Rule:** Footer editorial layout: brand identity on the left, navigation links + contact email on the right, copyright row across the bottom. Warm background, hairline rules.

**Original:** Footer was absent or differently arranged in earlier versions.

**Why:** This is a canonical editorial footer pattern (Anthropic, Mercury, Stripe Press use close variants). The identity-left / navigation-right split separates "who we are" from "where to go" cleanly. The copyright row anchors the bottom.

**How to apply:** For editorial B2B sites, this footer structure is a safe default. Avoid centering everything, which reduces scannability.

**Source:** `project_company_website.md` — Phase 3 Done (2026-04-26)

---

### L-07 — Multi-page for SEO is a post-revenue pattern

**Tag:** [UNCERTAIN]

**Rule:** Multi-page architecture with distinct SEO-targeted sections (case studies, blog, category pages) is a post-revenue decision. Pre-revenue, a linear narrative structure maintains better control over what the audience sees.

**Original:** Multi-page / "made serviceable" direction was the initial plan (overridden by deep research 2026-04-20).

**Why:** Pre-revenue service businesses without case studies have nothing to cluster around SEO pages. Spreading the narrative across pages reduces coherence without gaining search traffic. The splash/subpage architecture CastWorks uses is not a multi-page-for-SEO pattern — it's a gateway with a focused linear flow on each sub-page.

**How to apply:** The decision between single-scroll and multi-page should be governed by: (a) does SEO content exist to justify multiple pages? (b) does the audience arrive cold (multi-page can help) or warm (linear control is better)? Default to linear for pre-revenue confirm-page sites.

**Source:** `project_company_website.md` — Design direction (locked); Site function (locked 2026-04-27)

---

### L-08 — Generous whitespace, disciplined grid, scroll-triggered fade-ins

**Tag:** [LIKELY UNIVERSAL]

**Rule:** Whitespace is generous throughout. Grid is disciplined (no ad-hoc column splits between sections). Reveal animations are scroll-triggered fades, not persistent motion or hover effects.

**Original:** Implied by the design direction lock; earlier SaaS treatment was tighter and less whitespace-generous.

**Why:** Editorial brands signal quality through negative space. Disciplined grids create visual regularity that reads as methodical (matching the CastWorks positioning). Scroll-triggered fades add life without maintaining persistent motion overhead.

**How to apply:** Default to more whitespace than feels necessary before seeing the design in a browser. Disciplined grids mean all sections share the same column structure — avoid unique grid splits per section unless the content genuinely demands it.

**Source:** `project_company_website.md` — Design direction (locked)

---

## COPY VOICE

---

### CV-01 — Confirm-tone, not convince-tone

**Tag:** [LIKELY UNIVERSAL]

**Rule:** Copy voice is declarative and calm. It confirms what the reader already believes, rather than arguing toward a new belief. Less argument, less manifesto energy.

**Original:** "Book a discovery call" direction and agitation-first copy structure were the original approach.

**Why:** Warm leads from outbound already have the pitch. Convince-tone copy signals that the page doesn't trust its own positioning. Confirm-tone copy signals confidence.

**How to apply:** For any site serving warm or pre-qualified audiences, audit copy for argument structure. "You've probably experienced..." / "Most companies fail to..." are convince-patterns. Replace with declarative statements of what the service does and how.

**Source:** `project_company_website.md` — Site function (locked 2026-04-27)

---

### CV-02 — No agitation re-staging for warm leads

**Tag:** [LIKELY UNIVERSAL]

**Rule:** Remove all "you've already tried this and it didn't work" / "you've already tried databases / agencies" framings for a confirm-page audience.

**Original:** Original Agitation section opened by re-staging the problem (databases, agency pricing). Cut 2026-04-27.

**Why:** Agitation re-staging implies the sales call wasn't sufficient. For warm leads, the page's job is to confirm sophistication and reassure, not to revive pain the buyer has already processed.

**How to apply:** When writing for warm/pre-qualified audiences, skip problem-agitation. Start from the solution and its rationale. If a problem section exists, evaluate whether the audience already holds the belief — if yes, cut it.

**Source:** `project_company_website.md` — Narrative sequence cut rationale (2026-04-27); `user_castworks_positioning.md` — Copy and visual rules

---

### CV-03 — Drop "AI" from explicit copy

**Tag:** [LIKELY PERSONAL]

**Rule:** Never use "AI" in brand-facing copy. Use capability/work-replacement language instead: "the work that used to take a sourcing analyst per creator now runs through our own tooling."

**Original:** No specific rejected instance recorded, but the rule is explicitly stated.

**Why:** AI is buzzword-saturated in 2026. Saying it puts the brand in the same bucket as every SaaS pitch and flattens rather than elevates. Editorial brands (Mercury, Stripe Press, A24, Anthropic) describe what they do, not the technology underneath.

**How to apply:** Any copy that would say "our AI" or "powered by AI" should be rewritten as: what does the technology do for the client? What work does it replace? The claim is the output, not the mechanism.

**Source:** `user_castworks_positioning.md` — Copy and visual rules (2026-04-27); `project_company_website.md` — UI design rules

---

### CV-04 — "We operate / we curate / we deliver" — not "our platform does X"

**Tag:** [LIKELY PERSONAL]

**Rule:** Copy uses first-person service voice ("we build," "we source," "we deliver"). Not platform/product voice ("our platform does X," "our engine handles Y").

**Original:** Earlier copy used product-voice language that would imply SaaS self-serve.

**Why:** CastWorks is a service, not a SaaS product. Product-voice copy repositions the brand as software. Machinery is implicit — the deliverable is the service outcome, not the tool.

**How to apply:** In any copy pass, ctrl-find "platform" and "engine" and "tool" in brand-facing text. Rewrite as a service action: who is doing what for whom.

**Source:** `user_castworks_positioning.md` — How to apply

---

### CV-05 — No selectivity-gate language ("see if you qualify" is a framing, not a gate)

**Tag:** [LIKELY PERSONAL]

**Rule:** "See if you qualify" is used as CTA, but without selectivity-gate energy. The framing is an invitation, not a filter. "Submit a brief" is the preferred replacement once the commission-model rationale was retired.

**Original:** "See if you qualify" was the original CTA, grounded in commission-model selectivity. Replaced by "Submit a brief" page-wide.

**Why:** Selectivity-gate language ("see if you qualify," "not for everyone") was relevant when the commission model justified it. When the model shifted, the CTA shifted too. Gate language that isn't grounded in a real screen can read as false exclusivity.

**How to apply:** Selectivity framing in CTAs is earned by a real downstream selection step, not by positioning aspiration. If there is no actual gate, the CTA should be direct ("submit," "apply," "start").

**Source:** `project_company_website.md` — Site function (locked 2026-04-27)

---

### CV-06 — "Serviceable" tested as clever-over-clear

**Tag:** [LIKELY UNIVERSAL]

**Rule:** Avoid taglines or copy phrases that prioritize cleverness over clarity for a B2B SMB conversion audience. "Serviceable" failed in testing because it was clever-over-clear.

**Original:** "Serviceable" was considered as a tagline or brand concept.

**Why:** B2B SMB conversion audiences parse literally. Clever wordplay that requires a second reading is friction. For a confirm-page audience, clarity is the premium signal — not wordplay.

**How to apply:** When evaluating tagline or headline candidates, test against: Does a first-time reader understand the service within 3 seconds? Would a marketing lead at a small company pause to work out the meaning? If yes, the headline is too clever.

**Source:** `project_company_website.md` — Research report

---

### CV-07 — Lock decisions one at a time when iterating copy

**Tag:** [LIKELY UNIVERSAL]

**Rule:** When iterating on copy, lock each section or paragraph before moving to the next. No sweeping rewrites that touch many sections at once.

**Original:** Sweeping changes were the initial instinct when copy felt off.

**Why:** Sweeping changes obscure which decision did what. Paragraph-by-paragraph locking keeps the iteration legible and lets the author redirect mid-stream.

**How to apply:** In any copy iteration session, identify the smallest unit of change. Lock it. Then move. If a sweeping rewrite is genuinely needed, name it explicitly before executing.

**Source:** `working_relationship.md` — Lock decisions one at a time (2026-04-27)

---

### CV-08 — Verify four commercial locks before drafting any public copy

**Tag:** [LIKELY PERSONAL]

**Rule:** Before writing any brand-facing or founder-facing copy, verify: (1) Tagline, (2) Vertical lock, (3) Deliverable lock, (4) Pricing lock. If any has shifted, the draft will read out of date.

**Original:** `copy/linkedin-founder.md` was drafted against stale locks (retired creator tier, wrong vertical).

**Why:** Copy that mismatches commercial reality is worse than no copy. It anchors outbound and prospect expectations to retired positions.

**How to apply:** This rule is specific to a startup in active commercial iteration. For any brand where positioning is still being locked, a similar four-lock check before any public copy draft prevents the accumulating stale-draft problem.

**Source:** `working_relationship.md` — Verify currency of commercial locks (2026-04-27)

---

### CV-09 — Check dated copy against the current date before shipping

**Tag:** [LIKELY UNIVERSAL]

**Rule:** Before shipping any copy with a date-dependent fact or future-tense claim, verify it is still accurate at the time of shipping. Future-tense copy written at plan-time becomes wrong silently.

**Original:** "By 2025, it will clear $37B globally" was future-tense when drafted; needed review before launch.

**Why:** Statistics and market size claims written at plan-time have a short shelf life. A claim that reads as forward-looking at draft time may be present or past-tense by launch.

**How to apply:** Pre-launch copy checklist should include a date-dependency audit: every stat, every future-tense claim, every "as of" reference. Treat these as perishables.

**Source:** `project_company_website.md` — Pre-launch review checklist (2026-04-21)

---

### CV-10 — Nucleus-first, no wrap-up sentences in editorial copy

**Tag:** [UNCERTAIN]

**Rule:** Editorial copy on the site follows the nucleus-first principle: state the point, omit the support structure, stop when the point is made. No closing summary sentence.

**Original:** Implied correction from Egg's writing style profile being applied to site copy.

**Why:** Closing summary sentences ("In short...," "Ultimately...") are a convention of persuasive copy that the editorial restraint pattern rejects. They signal that the reader can't be trusted to hold the premise.

**How to apply:** After writing any paragraph of editorial copy, check if the last sentence is a summary or wrap-up. If yes, cut it. The point should arrive in the middle or end of the substantive content, not via a paraphrasing closer.

**Source:** `writing_style_egg_voice.md` — Negative constraints; `project_company_website.md` — copy tone

---

### CV-11 — No "Not X, but Y" contrast structure in headlines or body

**Tag:** [UNCERTAIN]

**Rule:** Avoid the "Not databases, but curated pipelines" or "Not agencies, but [us]" contrast structure in copy.

**Original:** This structure appeared in earlier draft copy (the Agitation section used it implicitly).

**Why:** The contrast structure requires the reader to hold the rejected alternative in mind, which re-activates the competitive landscape. For a confirm-page audience that has already processed the alternatives, it's noise. For an editorial brand, it reads as argumentative rather than confident.

**How to apply:** Write the affirmative claim directly without the "not X" scaffolding. If the contrast is necessary for clarity, it belongs in a longer explanatory sentence, not in a headline.

**Source:** `writing_style_egg_voice.md` — Negative constraints; implied by `project_company_website.md` — confirm-tone rule

---

## CTA TREATMENT

---

### CTA-01 — Editorial underlined links as the default CTA style

**Tag:** [LIKELY PERSONAL]

**Rule:** Across the site, CTAs are editorial underlined links — not button pills, not outlined boxes. Exceptions: (a) the form Submit button on `/brief` (terminal action, deserves weight), (b) the "Submit a brief" button in the full nav variant.

**Original:** Implied correction from the SaaS treatment that used pill buttons throughout.

**Why:** Underlined links signal editorial restraint. They feel like editorial calls to action (magazine, press site) rather than conversion-optimized SaaS CTAs. For a brand positioning itself in the editorial register, the underline form carries more trust signal than the pill form.

**How to apply:** Reserve button pills for terminal actions where the user is about to commit to something irreversible (form submission, purchase). Use underlined text links for navigational CTAs and inline prompts. The exception-not-rule status of buttons makes the terminal actions feel more decisive.

**Source:** `project_company_website.md` — CTAs (2026-05-07 status)

---

### CTA-02 — "Submit a brief" over "Book a discovery call"

**Tag:** [LIKELY UNIVERSAL]

**Rule:** Intake CTA is "Submit a brief" — asynchronous, buyer-controlled. "Book a discovery call" is maximum friction for the seller.

**Original:** "Book a discovery call" was the original CTA direction.

**Why:** Deep research finding: "Book a discovery call" is seller-centric. It asks the buyer to synchronize schedules before they have enough information to know the call is worth their time. Async intake (submit a brief) allows the buyer to engage on their own schedule.

**How to apply:** For B2B service businesses without established brand trust, async intake is lower-friction than calendar CTAs. Calendar CTAs make sense once the brand has established enough trust that the buyer actively wants the call.

**Source:** `project_company_website.md` — Research report; Hero CTA direction (2026-04-20)

---

### CTA-03 — CTA nav variant: quiet underlined link (splash) vs pill (full nav)

**Tag:** [UNCERTAIN]

**Rule:** Splash page nav has a quiet "Submit a brief" underlined link. Full site nav has a "Submit a brief" button pill. Different weights signal different contexts.

**Original:** Not stated — implied by the two-variant nav design.

**Why:** On the splash page, the CTA competes with the full-bleed animation for attention. A quiet underlined link maintains the editorial tone without fighting the visual. On the full site pages, the pill button's weight is appropriate because the context is methodological detail, not visual impression.

**How to apply:** When the CTA appears on a visual-first, brand-impression page, reduce its weight to match the editorial restraint of the context. When it appears alongside content pages, full weight is appropriate.

**Source:** `project_company_website.md` — Nav (2026-05-07 status)

---

### CTA-04 — No pricing on the page

**Tag:** [LIKELY PERSONAL]

**Rule:** Pricing is not disclosed on the public website. Pricing stays off the page.

**Original:** Earlier versions considered pricing transparency as a differentiator.

**Why:** Egg's call based on the commercial model's ongoing negotiation. Pricing disclosure on the site removes negotiation flexibility and anchors prospects before they've understood the value proposition.

**How to apply:** For service businesses with variable or project-based pricing, keeping pricing off the website preserves the conversation. This is most appropriate when (a) pricing is highly context-dependent, (b) the client relationship involves negotiation, or (c) the pricing model itself is still being refined.

**Source:** `project_company_website.md` — Site function implications; Design direction

---

## IMAGERY / VISUALS

---

### IV-01 — Every image or data module must carry meaning

**Tag:** [LIKELY UNIVERSAL]

**Rule:** No purely ornamental visuals on the page. Every image, diagram, or data module must earn its place by carrying meaning relevant to the service claim.

**Original:** Decorative imagery (stock photography, abstract floating elements) was implicit in earlier section designs.

**Why:** The page's visual language signals precision and methodology. Decorative imagery signals filler. For an audience evaluating a service provider's standards, visual discipline is itself a quality signal.

**How to apply:** Before adding any visual element, answer: what does this carry that the copy doesn't? If the answer is "it fills space" or "it adds visual interest," it doesn't belong. Acceptable answers: "it illustrates a process step," "it displays a data claim," "it embodies a methodology shape."

**Source:** `user_castworks_positioning.md` — Visual rules (2026-04-21)

---

### IV-02 — Line-art illustrative imagery only — no stock photography, no abstract orbs

**Tag:** [LIKELY PERSONAL]

**Rule:** Illustrative imagery on the site is line-art only. No stock photography. No abstract floating orbs or gradient mesh backgrounds for the main sections (the splash animation is a distinct canvas element with its own rules).

**Original:** "Abstract floating orbs" was explicitly named as rejected. Stock photography was never under active consideration but is named in the design lock.

**Why:** Line-art maps to methodology steps directly. It reads as specific and considered, not generic. Stock photography introduces real people, scenarios, and cultural contexts that create false specificity or brand-misalignment.

**How to apply:** For methodology-focused editorial brands, line-art is appropriate for illustrating process steps or abstract concepts. The constraint — no stock, no orbs — is a sharpness-of-brand rule: every visual should be unambiguously "ours."

**Source:** `project_company_website.md` — Design direction (locked); Visual language lock (2026-04-20)

---

### IV-03 — No product UI mockups or dashboard screenshots in any brand-facing asset

**Tag:** [LIKELY PERSONAL]

**Rule:** No dashboard mockups, no product-UI screenshots, no "see the engine" visuals anywhere in brand-facing assets. The matching engine is internal leverage; the deliverable is what's shown.

**Original:** Implied correction from the broader service-not-SaaS positioning.

**Why:** Showing the engine UI would reposition CastWorks as self-serve software — which is not the offer and not the business model. A SaaS company shows product UI to prove it works. A service company shows outcomes, human judgment, and sophistication without depicting the tool.

**How to apply:** For any service business with internal technology, the key question in visual design is: what is the deliverable the client receives? Show that. Not the system that produces it.

**Source:** `user_castworks_positioning.md` — How to apply

---

### IV-04 — Copy alongside visuals must stand on its own

**Tag:** [LIKELY UNIVERSAL]

**Rule:** When writing body copy alongside a visual, focus on the core service offering — do not describe the image. The image is supporting evidence; the copy must stand alone.

**Original:** Copy described the visual ("the tear-sheets show...") rather than making an independent claim.

**Why:** Copy that describes the image fails when the image isn't loading or isn't visible. More fundamentally, copy-that-describes-the-visual inverts the hierarchy: the copy becomes a caption, not a claim.

**How to apply:** When copy and a visual appear in the same section, write the copy first without the visual in mind. Then add the visual as evidence that supports the independently-valid claim.

**Source:** `user_castworks_positioning.md` — Copy and visual rules (2026-04-27); `project_company_website.md` — UI design rules

---

### IV-05 — Pre-revenue mocks: status diversity + disclosure markers + date variation

**Tag:** [LIKELY UNIVERSAL]

**Rule:** When designing mocks or sample deliverables that imply work-done, include: (a) status diversity (not all "confirmed"), (b) inline disclosure markers ("fictional brand," "redacted from a real engagement"), (c) variation in dates/copy that cannot be parsed as portfolio activity.

**Original:** A uniform "all confirmed / all delivered" mock presentation was the risk being guarded against.

**Why:** Pre-revenue, a uniform "all warmed up — interested" presentation would be a false implied-work claim. A careful reader must not be able to infer real activity from a mock.

**How to apply:** Whenever a deliverable preview, sample brief, or case study uses brand-shaped data for a pre-revenue service, apply this three-part rule. The mock communicates the deliverable shape; the variation and disclosure prevent it from reading as a portfolio claim.

**Source:** `feedback_visual_iteration.md` — Pre-revenue honesty (2026-05-07)

---

### IV-06 — Fictional brand names for mocks — Veridian, Hark, Loam Co. etc.

**Tag:** [LIKELY UNIVERSAL]

**Rule:** Use fictional brand names in deliverable mocks to avoid real-brand confusion and keep the mock feeling editorial rather than client-leaked.

**Original:** Not stated — implied by the tear-sheet mock design choice.

**Why:** Real brand names in mocks create multiple risks: the brand may object, the reader may interpret the mock as a real engagement, and the mock becomes out-of-date if the real brand's relationship changes.

**How to apply:** Establish a set of fictional brand names per project. Use consistently across all mocks and sample deliverables. Choose names that feel like real brands (not "ACME Corp") to preserve the editorial quality of the mock.

**Source:** `user_castworks_positioning.md` — Copy and visual rules (2026-04-27)

---

### IV-07 — Cursor-as-attractor for curation/discovery product animations

**Tag:** [LIKELY PERSONAL]

**Rule:** For creator-economy, sourcing, discovery, or curation product visuals, treat the cursor as a positive selection tool — not a hazard. Cursor-as-pusher reads as defensive and breaks the "we capture from chaos" thesis.

**Original:** Cursor-as-repeller (dots scatter away from cursor) was Round 1 of the splash animation. Rejected as "defensive."

**Why:** The brand's function is selection and curation. The cursor's behavior should encode that: the user's attention selects from a field; selected items lock, brighten, connect, hold, then release. Repulsion is the wrong metaphor for a brand that captures value.

**How to apply:** When designing interactive animations for brands whose core function is positive selection/capture (curation, discovery, sourcing, matchmaking), ensure interactive elements attract or select rather than deflect.

**Source:** `feedback_visual_iteration.md` — Cursor-as-attention-attractor (2026-05-07)

---

## BRAND ASSETS

---

### BA-01 — Wordmark-led for early-stage B2B service brands

**Tag:** [LIKELY UNIVERSAL]

**Rule:** Wordmark IS the logo for early-stage B2B brands with zero equity and an accelerated commercial timeline. Standalone symbols are functionally obsolete as primary identifiers. Combination marks are acceptable but the symbol must always be anchored to the wordmark.

**Original:** Submark exploration started too early before the wordmark had built any recognition.

**Why:** Building automatic association between an abstract symbol and a brand name requires sustained market presence and capital. Until the wordmark accumulates recognition, a standalone symbol burns cognitive impressions on association-building rather than on the service.

**How to apply:** For any pre-Series-A B2B brand, start with the wordmark. Deploy a symbol only where the wordmark cannot fit (favicon, app icon, social avatar) — and even then, the symbol should be a typographic reduction of the wordmark. Symbol-first identities at this stage are premature.

**Source:** `aesthetics_brand_identity.md` — Core Principles §1

---

### BA-02 — Symbol exploration is Mercury-stage work

**Tag:** [LIKELY UNIVERSAL]

**Rule:** Primary standalone mark exploration is deferred until the wordmark has built equity. Mercury used wordmark-only for years before adding a puzzle-box mark derived from the caduceus. Symbol work is years-in, not launch-stage.

**Original:** Primary mark exploration was placed in the build plan at launch stage.

**Why:** Mercury's timeline is the explicit reference: "symbols come AFTER the wordmark builds equity, and must carry historical/methodological weight." Premature symbol exploration produces marks that are arbitrary because there's nothing to encode yet.

**How to apply:** If a client asks for a symbol at brand launch, redirect: the symbol is a future decision, once the brand has something to encode. At launch, invest the design effort in a better wordmark.

**Source:** `aesthetics_brand_identity.md` — Peer reference catalogue; Locked Decisions 2026-04-26

---

### BA-03 — Abstract marks must encode a defensible verbal claim

**Tag:** [LIKELY UNIVERSAL]

**Rule:** A mark earns its place when its form encodes a claim the brand can defend in one sentence. "Concept rationale that applies to any brand" is the anti-pattern. Before locking any abstract mark, write the one-sentence verbal claim it encodes.

**Original:** Logo Rounds 1 and 2 produced marks without defensible claims specific to CastWorks.

**Why:** If the rationale would fit a logistics startup or a fintech equally well, the mark isn't doing brand work — it's decorative geometry. The claim is what the mark defends.

**How to apply:** When evaluating an abstract mark candidate, test: write the one-sentence claim in 30 seconds without looking at the mark. If you can't, or if the claim sounds generic, the mark isn't done yet. The canonical test: would this claim fit a competitor in the same category? If yes, keep iterating.

**Source:** `aesthetics_brand_identity.md` — Core Principles §6

---

### BA-04 — Abstraction over semantic load in mark evaluation

**Tag:** [LIKELY PERSONAL]

**Rule:** Evaluation weighting for marks (highest to lowest): Abstraction > Scalability > Longevity > Distinctiveness > Ownability > Semantic Load. Reject marks that literally illustrate the service (casting, matching, curation, creators, networks, brackets, megaphones, handshakes).

**Original:** Literal depictions of the service function were early mark directions.

**Why:** CastWorks must outlast the first vertical. Any literal mark drawn from the current service or vertical locks the brand to that context. Literal marks read as low-tier in premium markets.

**How to apply:** For any brand that expects to expand beyond its initial category, literal marks are a liability. Evaluate marks on the abstraction-first hierarchy: can this mark survive a pivot? Can it survive being printed in black on a white business card? Can it be foil-stamped?

**Source:** `aesthetics_brand_identity.md` — Core Principles §4

---

### BA-05 — Submark = typographic reduction of wordmark for favicon contexts

**Tag:** [LIKELY UNIVERSAL]

**Rule:** The favicon/submark uses the compass mark at stroke-width 35 + dot r=38 (adjusted from the brand SVG's stroke=21) for legibility at 16–32px. The brand SVG masters keep the thinner stroke.

**Original:** `Cw` monogram submark was rejected as "boring, two small letters competing for space."

**Why:** At 16px, strokes thinner than ~2px become imperceptible on most displays. The favicon needs to be a legible, distinct shape — not a miniature of the full mark. Different stroke weights for different size contexts is a standard practice.

**How to apply:** When creating favicons from a brand mark, never simply scale down the production SVG. Evaluate stroke weights and detail at the target size. At 16px, simplify and increase stroke weight.

**Source:** `aesthetics_brand_identity.md` — Locked Decisions 2026-05-07; `project_company_website.md` — Brand assets

---

### BA-06 — Compass mark verbal claim: "method that surveys outward and converges to a point"

**Tag:** [LIKELY PERSONAL]

**Rule:** The CastWorks submark is a cardinal-hierarchy radial: 4 long cardinal rays (N/E/S/W) + 4 short ordinal rays (NE/SE/SW/NW) + center dot, in deep teal. The verbal claim it encodes: "method that surveys outward and converges to a point" — the literal CastWorks pipeline shape.

**Original:** Cw monogram was the prior submark. Rejected.

**Why:** Round 3 succeeded immediately because each direction was grounded in a real-world model (Beats, Champion, Crouwel, Smythson, Anthropic). The compass mark encodes the pipeline shape — survey widely, converge to a shortlist — which no competitor in the category can plausibly claim.

**How to apply:** This is CastWorks-specific. The generalizable lesson is BA-03 above: any mark that's been selected should have its verbal claim written out and verified against the anti-pattern test.

**Source:** `aesthetics_brand_identity.md` — Locked Decisions 2026-05-07

---

### BA-07 — SVG file path backwards compatibility over filename accuracy

**Tag:** [UNCERTAIN]

**Rule:** When replacing a brand asset's content (new mark replacing old), preserve the filename for backwards compatibility. Rename only when all downstream URL dependencies (email signatures, live CDN paths) can be updated in the same operation.

**Original:** Cw submark files were replaced with the compass mark but kept their `cw-*` filenames.

**Why:** Renaming deployed asset paths breaks external references (email signature image URL, shared links) without a coordinated redirect. The content update is the priority; the naming cleanup can be deferred.

**How to apply:** When replacing any asset that has been deployed and linked externally, treat it as a two-step operation: (1) replace content at existing path, (2) rename + redirect as a separate coordinated deploy. Doing both in one shot is only safe if all external references are under your control and can be updated atomically.

**Source:** `aesthetics_brand_identity.md` — Locked Decisions 2026-05-07 (SVG backwards compat note)

---

### BA-08 — LinkedIn company page: credibility surface, not sales surface

**Tag:** [LIKELY UNIVERSAL]

**Rule:** LinkedIn company page follows the editorial restraint pattern (Anthropic, Stripe Press, A24). No public claims, no figures, no exposed deliverables, no exposed strategy. Specifics belong in DM, call, and proposal channels.

**Original:** Sales-stacking pattern (Mercury, Outloud Group) was considered.

**Why:** LinkedIn company pages are public and indexed. Pre-revenue claims, exposed strategy, and over-specific service descriptions create anchoring risk and invite premature scrutiny. The page's job is credibility signal and discoverability, not conversion.

**How to apply:** For any pre-revenue or early-stage B2B service, LinkedIn (and any indexed public page) should be minimal and credibility-focused, not conversion-focused. Conversion happens in the DM and on the call.

**Source:** `aesthetics_brand_identity.md` — Locked Decisions 2026-04-27 (LinkedIn)

---

### BA-09 — Ground each logo iteration direction in a real-world exemplar

**Tag:** [LIKELY UNIVERSAL]

**Rule:** Before generating any round of logo or mark directions, dispatch parallel research to surface 8–12 real exemplars per direction. Each direction must cite a real-world model with a diagnosis of what makes it work. Abstract design without exemplar grounding produces shallow output.

**Original:** Logo Rounds 1 and 2 were generated without exemplar grounding. Both rejected. Round 3, grounded in real models (Beats, Champion, Crouwel, Smythson, Anthropic), succeeded immediately.

**Why:** Abstract design without references has no quality floor. Referencing real exemplars sets a quality ceiling and discipline constraint: the output must explain which specific move is borrowed from which specific model.

**How to apply:** This is the structural unlock for visual iteration when stuck. Not more variants — more research. One research agent per direction category, returning structured exemplar analysis. Then re-iterate citing borrowed moves inline.

**Source:** `feedback_visual_iteration.md` — Ground iterations in real-world exemplars (2026-05-07)

---

## INFORMATION HIERARCHY

---

### IH-01 — Narrative sequence: hook → service → differentiation → methodology → intake

**Tag:** [UNCERTAIN]

**Rule:** For this confirm-page site, the narrative sequence is: splash (wordmark + hook) → service overview (what they receive) → differentiation (why this versus alternatives) → methodology (how it works) → terminal CTA (intake form).

**Original:** The original 7-section sequence included Risk Reversal, Authority, and Agitation between the hook and methodology. These were cut.

**Why:** Warm leads need: (1) confirmation this is the right place, (2) clarity on the deliverable, (3) confidence in the process. They don't need risk reversal (they've already decided to look), authority claims (they'll evaluate the methodology instead), or agitation re-staging (they processed that on the call).

**How to apply:** The right sequence depends entirely on the audience's prior knowledge and trust state. For warm leads: hook → service clarity → method. For cold traffic: problem → stakes → solution → method → social proof → intake.

**Source:** `project_company_website.md` — Narrative sequence (2026-04-27)

---

### IH-02 — Risk Reversal and Authority sections are pre-revenue overclaims

**Tag:** [LIKELY PERSONAL]

**Rule:** For a pre-revenue confirm-page, Risk Reversal and Authority sections are overclaims. Cut them.

**Original:** Risk Reversal and Authority were included in the 7-section structure and cut in the 2026-04-27 restructure.

**Why:** Risk Reversal relies on commission-model logic that broke under the new pricing model. Authority relied on a $37B figure that needed source verification. For a confirm-page audience, both read as overselling.

**How to apply:** Before including a risk reversal section, verify: is the risk you're reversing real to this audience, and is the reversal mechanism credible? Before including an authority section, verify: are the data claims verified and does the audience respond to this type of social proof?

**Source:** `project_company_website.md` — Narrative sequence cut rationale (2026-04-27)

---

### IH-03 — Methodology step labels use symbolic glyphs, not just numbers

**Tag:** [LIKELY PERSONAL]

**Rule:** Methodology steps use paired glyphs (Step 03/04: paired speech bubbles + stack→arrow→open-frame) alongside step numbers. Glyphs are line-art and specific to the step's action.

**Original:** Step labels with numbers only were the initial design.

**Why:** Line-art glyphs make the methodology section visually distinct and add meaning beyond the text. They also function as the "informational visual" that earns the section's visual weight.

**How to apply:** For methodology sections in editorial brand sites, line-art step glyphs add specificity and visual interest without adding decoration. Each glyph must illustrate the step's action (not be generic icon-set material).

**Source:** `project_company_website.md` — Status (2026-04-27 late session) — ServiceOverview + Methodology description

---

### IH-04 — Sample brief page: mini tear-sheets with varied statuses, not a uniform deck

**Tag:** [LIKELY UNIVERSAL]

**Rule:** The `/sample-brief` page shows 3 mini tear-sheets with varied statuses (Warmed up / Confirmed for May / Awaiting reply). Not a uniform "all delivered" presentation.

**Original:** See IV-05 — uniform delivery mock is the anti-pattern.

**Why:** Varied statuses communicate the full range of the pipeline's stages — the service isn't just a list of confirmed creators, it's an active in-progress workflow. The variation is informationally richer than a uniform outcome set.

**How to apply:** When designing any deliverable preview that shows a list or set of items, consider whether showing items at different pipeline stages communicates more about the service than showing all items at the same stage.

**Source:** `feedback_visual_iteration.md` — Pre-revenue honesty (2026-05-07)

---

### IH-05 — Pricing stays off the page; methodology replaces social proof

**Tag:** [LIKELY PERSONAL]

**Rule:** For a pre-revenue service business without case studies, methodology transparency replaces social proof as the trust-building mechanism. Pricing stays off the page. Methodology depth earns the credibility that testimonials and case studies would provide if they existed.

**Original:** No explicit pricing section or testimonials section was planned, but the research confirmed why.

**Why:** Pre-revenue service businesses should lead with methodology transparency + manifesto + pricing model framing (even without specific numbers) as substitutes for case studies.

**How to apply:** For any pre-revenue B2B service, identify what trust signals you can offer: deep methodology walk-through, sample deliverables (anonymized), founder transparency, clear model explanation. Social proof comes later; substitute structural credibility in the interim.

**Source:** `project_company_website.md` — Research report

---

## INTERACTION / UX

---

### UX-01 — Visual cues over instructional text for interaction affordances

**Tag:** [LIKELY UNIVERSAL]

**Rule:** Replace hint text ("click or scroll to flip," "use arrow keys to navigate") with visual affordances (chevron buttons that double as visual hints + functional controls). Hint text describing interactions is itself a UX failure.

**Original:** Instructional text was present alongside the tear-sheet carousel.

**Why:** Good affordances communicate their function without text. If text is needed to explain a control, the control's design has failed. The text's presence signals the affordance needs redesign.

**How to apply:** In any UI with interactive elements, audit for instructional hint text. Every piece of hint text is a flag that an affordance needs to be redesigned or the interaction needs to be simplified.

**Source:** `user_castworks_positioning.md` — Copy and visual rules (2026-04-27); `project_company_website.md` — UI design rules

---

### UX-02 — No cooldowns for interactive visuals intended to feel continuous

**Tag:** [LIKELY UNIVERSAL]

**Rule:** When an interactive visual element should feel alive and continuous (cursor-driven captures, hover effects, ambient motion), use no cooldown between events. Cooldowns make the visual feel turn-based.

**Original:** Initial splash animation had a cooldown between capture cycles. Felt stilted.

**Why:** Cooldowns create rhythm discontinuity in what should feel like ambient continuous behavior. The visual's job is to feel alive; a cooldown is a pause that breaks the illusion.

**How to apply:** Default to no cooldown for ambient, continuous, or cursor-reactive visual behaviors. Add cooldowns back only if performance forces it or if the absence of cooldown creates visual chaos.

**Source:** `feedback_visual_iteration.md` — No cooldowns when continuous behavior is desired (2026-05-07)

---

### UX-03 — Multiple simultaneous animation cycles over single sequential cycles for visual richness

**Tag:** [LIKELY UNIVERSAL]

**Rule:** When "make it richer" feedback comes on an animation with one core cycle, multiply the concurrent instances of that cycle before adding new motion primitives. Multiple simultaneous short cycles create life; adding new motion types creates noise.

**Original:** Single-cycle constellation capture felt "thin."

**Why:** Vocabulary coherence is more important than vocabulary richness. Running 3 concurrent instances of one cycle creates richness within a consistent language. Adding a second, different kind of motion creates two competing visual ideas.

**How to apply:** When an animation needs to feel richer, first ask: can I multiply the instances? If the single cycle is well-designed, more of it is better than something new alongside it.

**Source:** `feedback_visual_iteration.md` — Multiple simultaneous things beat single sequential ones (2026-05-07)

---

### UX-04 — First canvas frame must render synchronously on init

**Tag:** [LIKELY UNIVERSAL]

**Rule:** Any canvas or SVG-driven animation must render its first frame synchronously on script load — not via the first `requestAnimationFrame` tick — so the initial state is visible immediately.

**Original:** Splash animation appeared blank in the preview harness due to rAF throttling deferring the first frame.

**Why:** Both headless preview environments and slow network contexts can throttle or delay the first rAF tick, leaving the canvas blank. Synchronous first-frame render costs nothing in production and prevents a visible blank flash in any environment.

**How to apply:** Canvas and SVG animation scripts should call their first paint synchronously on init. Then enter the rAF loop for subsequent frames.

**Source:** `feedback_visual_iteration.md` — Synchronous initial render (2026-05-07)

---

### UX-05 — Verify deployed assets with curl, not just browser

**Tag:** [LIKELY UNIVERSAL]

**Rule:** After any asset deployment, verify with `curl -I` (with a cache-buster query string) before assuming "not live" or redoing the deployment. Browsers cache favicons aggressively.

**Original:** Compass mark deploy was live; Egg was hitting browser favicon cache and reported it as not live.

**Why:** Browser caching, especially for favicons, is aggressive and can make a successful deployment appear to have failed. A curl check with `?v=<timestamp>` bypasses the browser cache and shows what the server is actually serving.

**How to apply:** Pre-deployment verification checklist: after a push, run `curl -I https://domain.com/asset.svg?v=<timestamp>`. If the response is correct, the deployment is fine. Point the user to an incognito window or a version-bumped URL to confirm visually.

**Source:** `feedback_visual_iteration.md` — Browser cache verification (2026-05-07)

---

### UX-06 — Hash redirects in Layout head, not as a separate middleware layer

**Tag:** [UNCERTAIN]

**Rule:** Legacy hash redirects (`/#apply` → `/brief`, `/#how-it-works` → `/home#how-it-works`) ship as inline script in Layout's `<head>`, gated by a Layout prop. Not as server middleware.

**Original:** The redirects weren't planned; they emerged when the single-scroll structure was replaced by subpages.

**Why:** Inline script in `<head>` fires before the page renders, preventing a flash-of-splash-before-redirect. Client-side middleware would fire after the render cycle starts.

**How to apply:** When adding redirects for legacy hash URLs on a static site, in-head inline script is the appropriate mechanism — not middleware (no server to intercept), not a component (fires too late in the render cycle).

**Source:** `project_company_website.md` — Hash redirects (2026-05-07 status)

---

### UX-07 — Carousel navigation: click, scroll, arrow keys, and chevron buttons all supported

**Tag:** [LIKELY UNIVERSAL]

**Rule:** The tear-sheet stack carousel supports all four navigation methods: click, scroll, arrow keys, and chevron buttons. No single navigation method is the only path.

**Original:** Implied by the implementation spec — single-method carousels are fragile to accessibility and device type.

**Why:** Different users navigate differently. Keyboard users use arrow keys; mouse users click or scroll; touch users swipe. Chevron buttons serve as visual hints as well as controls. Supporting all four removes dependency on any single interaction pattern.

**How to apply:** When implementing any sequential content component (carousel, slider, tab sequence), support at minimum: click/tap, keyboard navigation, and a visible control affordance. Scroll support is a bonus where appropriate.

**Source:** `project_company_website.md` — ServiceOverview description (2026-04-27 late session)

---

## OTHER

---

### O-01 — Verbal identity precedes visual for editorial B2B brands

**Tag:** [LIKELY UNIVERSAL]

**Rule:** Logo, color, and type cannot be properly chosen without first formalizing: positioning statement, tone of voice with examples, brand narrative, and naming conventions for proprietary services. Reversed sequencing creates polished-but-hollow identities misaligned with the actual offer.

**Original:** Visual work proceeded before the verbal identity was fully locked.

**Why:** Visual designers without verbal foundation default to industry trends or founder preferences. Editorial brands especially require verbal-first sequencing because their value proposition is articulated taste — the visual should be the crystallization of the verbal, not a parallel track.

**How to apply:** For any new brand engagement, complete at minimum: positioning statement (one sentence), tone-of-voice rules with 3 examples, and one naming convention decision, before opening a design tool. The visual work is constrained by the verbal work.

**Source:** `aesthetics_brand_identity.md` — Core Principles §2

---

### O-02 — Editorial restraint over loud distinctiveness in B2B trust contexts

**Tag:** [LIKELY UNIVERSAL]

**Rule:** No gradients, no illustrative complexity, no neon palettes, no app-tile glyphs. Stark geometry, high contrast, monochrome-friendly. The brand should look identical in print foil stamping and dark-mode UI.

**Original:** Implied correction from the original dark-navy SaaS treatment.

**Why:** Sophisticated B2B buyers reading SaaS-style branding lose confidence. Trust requires perceived permanence. Distinctiveness in premium B2B comes from extreme craft and negative space — not visual disruption.

**How to apply:** Before adding any new visual element, ask: would this look right in a printed pitch deck? Would it survive being photocopied in black and white? If no, it's disruption that erodes trust.

**Source:** `aesthetics_brand_identity.md` — Core Principles §5; `user_castworks_positioning.md` — Editorial restraint over SaaS polish

---

### O-03 — Consumer-tech mimicry is specifically harmful for B2B service brands

**Tag:** [LIKELY UNIVERSAL]

**Rule:** Copying B2C aesthetic (loud, playful, disruptive, emojis, gradients, rounded everything) actively erodes trust in B2B contexts. It signals that the brand is optimizing for consumer acquisition, not enterprise credibility.

**Original:** The original SaaS treatment was the rejected example.

**Why:** B2C brands optimize for immediate emotional connection with a broad consumer audience. B2B buyers are evaluating a long-term working relationship with a business. The signals are different. B2C aesthetics misalign the signal.

**How to apply:** For any B2B service brand, evaluate candidate design directions against: "Does this look like a brand a CFO would trust to invoice them $50K?" If no, it's consumer-coded and needs revision.

**Source:** `aesthetics_brand_identity.md` — Common Pitfalls P5

---

### O-04 — "When a round is unanimously weak, the issue is the framing not the parameters"

**Tag:** [LIKELY UNIVERSAL]

**Rule:** When all options in a design round receive flat negative feedback ("all weak," "all bad again"), the issue is the framing or direction, not the parameters. More variants of the same approach won't unblock it. The underlying model must be inverted or replaced.

**Original:** Splash animation Round 1 (three cursor-repeller variants) and logo Rounds 1 and 2 both received flat rejections. Both were unblocked by model inversion, not parameter tweaking.

**Why:** "All weak" feedback means the direction is wrong, not the execution. Three better-executed versions of a wrong direction are still wrong. The diagnostic question is: what model are all these options anchored on, and what would inverting that model produce?

**How to apply:** When a round is unanimously rejected, stop generating variants. Ask: what is the single underlying model all these options share? Write it down. Then ask: what is its inversion or an orthogonal alternative? Run the next round from that new model.

**Source:** `feedback_visual_iteration.md` — Don't anchor on rejected rounds (2026-05-07); `working_relationship.md` — "All weak" diagnostic (2026-05-07)

---

*End of corpus. 65 entries across 10 categories. Transcript mining deferred — augmentation pass recommended once session transcript access is available.*
