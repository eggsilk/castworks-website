---
title: CastWorks Site Audit vs Website Taste Rubric v1.0
date: 2026-05-08
rubric_version: 1.0
pages_audited: 6
files_read: 18
total_findings: 28
---

# CastWorks Site Audit vs Website Taste Rubric v1.0

---

## Top 20 highest-leverage fixes

Ranked by impact. T1 hard-rule failures and trip-wires first.

| # | Page | Rule | Issue | Fix | Effort |
|---|------|------|-------|-----|--------|
| 1 | /brief | TYP-T1-02 (pre-flight #1) | Page has no H1. TerminalCTA renders an H2 as the first heading. | Change the `<h2>` in `TerminalCTA.astro` line 30 to `<h1>` when the component is rendered on the /brief page, or add a visually hidden `<h1>Submit a brief</h1>` above it in `brief.astro`. | S |
| 2 | /home | TYP-T1-02 (pre-flight #1) | Page has no H1. ServiceOverview opens with an H2. The /home page (`home.astro`) assembles five components, none of which contains an H1. | Add `<h1 class="sr-only">How we work — CastWorks</h1>` as the first element inside the `<main>` implied by the component stack in `home.astro`. | S |
| 3 | Site-wide | CW-10 / Annex | "Our engine surfaces creators…" in `Methodology.astro` line 128 uses the prohibited word "engine" in brand-facing service copy. Rule: replace with service-action verb. | Change to: "We surface creators whose audiences align with your brief." | S |
| 4 | /home | TW-18 / COL-T3-01 | TW-18 fires: the site uses a near-monochrome palette (warm cream + deep teal accent). Count of distinct substantive content elements on /home: 7 (overview claim, body copy, 5 tear-sheet panels in a single carousel slot). This is below the threshold of 8 required for the restraint aesthetic to read as confidence rather than emptiness. The Coverage section ("Where we work.") currently carries only 2 paragraphs with no supporting data point, credential, or specific claim. | Add at least one substantive evidence item — a number, specific outcome, or credential — to the Coverage section. Options: number of briefs run, average engagement quality delta, timeframe claim. This lifts the density count above 8. | M |
| 5 | /home | LAY-T2-02 | The `/home#how-it-works` anchor is used in the nav and footer. There is no `scroll-margin-top` declared on `id="how-it-works"` (line 12 of `Methodology.astro`) or any other anchor-target section. With a fixed nav ~70px tall, the clicked section will be partially obscured. | Add `scroll-margin-top: 80px;` (or match the nav height) to all `id`-bearing sections: `overview`, `how-it-works`, `standards`, `coverage`, `apply`. Easiest as a global rule: `[id] { scroll-margin-top: 80px; }` in `global.css`. | S |
| 6 | /home | COPY-T2-07 | Privacy page and About page contain formal negations that should be contractions: `privacy.astro` lines 55–57, 95–96 ("We do not run analytics", "We do not set advertising cookies", "We do not track", "We do not share", "We do not sell"), and `privacy.astro` line 132 ("If we do not work together"). About line 53 has "What you get is not a list" — the "is not" here reads naturally and could stay. | In `privacy.astro` replace: "We do not run" → "We don't run", "we do not set" → "we don't set", "we do not track" → "we don't track", "We do not share" → "We don't share", "We do not sell" → "We don't sell", "We do not pass" → "We don't pass", "If we do not work together" → "If we don't work together". | S |
| 7 | /home | CTA-T1-01 / CTA-T2-01 | The form submit button label is "Submit" (line 223, `TerminalCTA.astro`). "Submit" is noun-adjacent, generic, and could appear unchanged on any competitor form (CTA-T2-01 test). CTA-T1-01 requires the first word to be a verb — "Submit" is technically a verb but carries no specificity. | Change to "Send brief" or "Submit brief". Either passes CTA-T1-01 and marginally passes CTA-T2-01 by naming the object. "Send brief" is preferable — shorter, more active register. | S |
| 8 | / (Splash) | COPY-T1-05 / TW-16 | The splash hero headline "Creator marketing, hand-built." is clean and specific — it passes. However, the sub-line "We build a creator pipeline by hand. One brief at a time." is good but note that `pages.md` (the copy document) lists the hero headline as "The creators your database missed." — which is the og:image headline — while the live rendered headline is "Creator marketing, hand-built." These two assets are now out of sync. Not a rubric failure per se but a maintenance hazard. | Update `copy/pages.md` Section 1 to reflect the live headline "Creator marketing, hand-built." as the canonical hero headline. The og:image "The creators your database missed." should be documented as a separate asset headline. | S |
| 9 | /about | Meta | `about.astro` line 8: `title={`How we work — ${COMPANY_NAME}`}`. The page title is wrong — it says "How we work" but the page is "About" / "A note on how we work." This causes the browser tab and OG sharing to be mislabeled. | Change to `title={`About — ${COMPANY_NAME}`}`. | S |
| 10 | /home | ServiceOverview.astro | The tear-sheet carousel uses `e.preventDefault()` on wheel events (line 495) with `passive: false`. This intercepts page scroll velocity while the cursor is over the carousel, which is a partial scroll-jack. The rubric (LAY-T1-05, TW-12) prohibits overriding scroll to "control narrative pace." Technically the carousel is a UI widget, not a page-section snap — but the behavior will frustrate users who try to scroll past the section with a trackpad. | Change the wheel listener to not call `e.preventDefault()` except when the carousel has keyboard focus. Check `document.activeElement === stack` or track a `focused` variable. Without focus, let the wheel event pass through. | M |
| 11 | Site-wide | TYP-T1-04 | Heading elements in `global.css` line 36–41 receive `h1, h2, h3, h4 { font-weight: 400; letter-spacing: -0.01em; }` with no line-height override. The per-component heading line-heights are set individually (`leading-[1.02]`, `leading-[0.96]`, etc.) which is correct — but the global rule offers no protection. The splash hero headline uses `leading-[0.96]` at `clamp(2.5rem, 6vw, 5.5rem)` — the max resolves to 88px on a 1470px viewport. At 88px, `line-height: 0.96` is acceptable (TYP-T3-02 applies above 72px). But the `SiteNav.astro` wordmark uses `leading-none` (line-height: 1) at `text-5xl` (48px). At exactly 48px this is borderline per TYP-T1-04 (display should be 1.0–1.3). Pass — but monitor at large viewports. | No immediate action. Log as a watch item if the wordmark ever renders at sizes above 60px. | — |
| 12 | /home | HIE-T2-05 | Buyer decision sequence: the /home page opens on Service Overview (what we deliver), then Methodology (how it works), then Standards (vetting criteria), then Coverage (who we work with), then SignOffCTA. This is close but not aligned with the rubric's preferred sequence: what do I get → why this provider → how does it work → how do I start. The current sequence puts "how it works" (Methodology) before "why this provider" (Standards). | Swap the order: ServiceOverview → Standards → Methodology → Coverage → SignOffCTA. This puts vetting criteria (the credibility proof) before the process walkthrough. | M |
| 13 | /home | ServiceOverview — all tear sheets show `"Warmed up — interested"` status | Every card in the carousel hardcodes the `"Warmed up — interested"` status label (line 275 of `ServiceOverview.astro`). The three cards in `sample-brief.astro` correctly use varied statuses (warmed / confirmed / awaiting). IMG-T2-04 requires status diversity in deliverable previews. The ServiceOverview carousel presents 5 cards all at the same status — real pipelines have attrition. | Assign varied status to the 5 tear sheets in `ServiceOverview.astro` — at minimum 2 distinct statuses (e.g., "Warmed up — interested" for 3, "Confirmed for brief" for 1, "Awaiting reply" for 1). Mirror the sample-brief logic. | M |
| 14 | /brief | CTA-T1-01 | The "Back to how we work" breadcrumb link in `brief.astro` line 22 is fine as a nav link. But the "Submit a brief" label in the nav (SiteNav.astro line 46 in splash variant, line 78 in full variant) is a noun phrase, not a verb-led label — "Submit" is the verb, and "a brief" is the noun object. This technically passes CTA-T1-01 (first word is a verb). Pass. | No action on the nav CTA label. It passes. | — |
| 15 | Site-wide | TYP-T2-07 | Multiple section headings use title case where sentence case is required: "How we work" (nav and footer link) is fine as a label. "What earns a creator a spot." — correct. "Where we work." — correct. "How the pipeline gets built." — correct. "Curated creator pipelines, warmed up before delivery." — correct. Sentence case is applied consistently. Pass. | No action. | — |
| 16 | Site-wide | COL-T1-03 | Primary text color is `#141414` (a near-black, not pure black). Pass. Background is `#FAF8F3` (warm off-white, not pure white). No pure black or pure white anywhere in the palette. Pass. | No action. | — |
| 17 | /privacy | COPY-T2-09 | Privacy page body copy uses hyphens where en dashes are required for ranges: "up to seven years" is fine (no range). But the heading "Why we are allowed to hold it" is acceptable sentence case. No range-hyphen failures found. However, check: "five to ten points" style ranges — none in this copy. Pass. | No action. | — |
| 18 | /home | CW-03 | Rule: "Dark sections (#1F3A34 module) used sparingly — one per page at most." There are zero dark modules on /home. The `--color-dark: #0E0E0E` token is defined but never applied to any section background in the live site. CW-03 is satisfied at zero. | No action, but the rule is written to constrain overuse if a dark module is ever added. | — |
| 19 | /home | IMG-T3-01 | The four SVG glyphs in Methodology.astro are each specific to their step: crosshair (strategy), magnifier-over-dot-field (discovery), paired speech bubbles (warm-up), stack-arrow-frame (hand-off). None of these is from a generic icon library — each was drawn for the specific action. Passes IMG-T3-01 ("illustration only where it illustrates a process step; icon-set material not acceptable"). | No action. | — |
| 20 | Site-wide | COL-T2-04 / TW-10 | No radial-gradient is present anywhere in the codebase. No near-black hero. The canvas background is `var(--color-bg)` (#FAF8F3 warm cream). TW-10 does not fire. | No action. | — |

---

## Findings by page

---

### Page: / (Splash)

**Pre-flight result:** Mostly clean. 15 of 18 questions pass. Three require attention.

**Pre-flight #1 — H1 structure**
Pass on the splash itself. The `<h1>` is present in `SplashHero.astro` line 29. One H1, no skipped levels (no sub-headings). Pass.

**Pre-flight #9 — "So what?" test**
- Rule: TW-15 (CPT-2). Hero headline: "Creator marketing, hand-built." Say "so what?" — answer is partially in the headline (hand-built = quality signal) but the specific buyer transformation (you get pre-warmed creators) is not in the headline, it's in the sub-line. The headline alone passes the test narrowly — "hand-built" encodes differentiation. No change required but monitor if the sub-line is ever removed.

**Pre-flight #12 — Vague transformation language**
Pass. No instances of empower, transform, elevate, unlock, seamless, end-to-end, innovative, best-in-class, cutting-edge, holistic, robust, synergy, or world-class anywhere in the source.

**Pre-flight #16 — Primary CTA visible on mobile without hamburger**
- Rule: failure-modes INT-2. The splash nav shows only a "Submit a brief" text link (hidden at `<sm` with `hidden sm:inline`). At 375px viewport, this link is hidden. The nav wordmark is visible but the CTA disappears.
- **Finding (T2 | INT-2):** On mobile (<640px), the splash nav CTA ("Submit a brief") is hidden. No primary CTA is visible without scrolling.
- **File:** `SiteNav.astro` line 43: `class="hidden sm:inline text-sm"`
- **Required state:** Primary CTA in the persistent header bar at 375px.
- **Fix:** Remove `hidden sm:` from the splash variant CTA link, or add a mobile-only pill CTA. The simplest fix: change `class="hidden sm:inline text-sm"` to `class="text-sm"` — it's a short text link, it fits. If the wordmark crowds it, reduce the wordmark to `text-2xl` on mobile.
- **Effort:** S

**Pre-flight #17 — 2010s SaaS template check**
Pass. The hero has none of: hero illustration, gradient background, three-feature row. The canvas animation and centered headline are not pattern matches. TW-09 does not fire.

**Annex CW-21 — Cursor as attractor, no cooldowns**
The constellation script has no cooldowns on capture triggering. The comment on line 154 explicitly states "No cooldown — the moment a cycle finishes, a new one can trigger." Multiple concurrent cycles run. Pass.

---

### Page: /home

**Pre-flight result:** 4 failures (H1 missing, scroll-margin, carousel scroll-intercept, buyer sequence).

**FINDING H1 — No H1 on /home (T1 | TYP-T1-02)**
- The page assembles: ServiceOverview (H2), Methodology (H2), Standards (H2, H3s), Coverage (H2), SignOffCTA (H2). No H1 anywhere.
- **File:** `home.astro`
- **Required state:** One H1 per page.
- **Fix:** Add `<h1 class="sr-only">How we work — CastWorks</h1>` as the first child inside a `<main>` wrapper in `home.astro`, before `<ServiceOverview />`.
- **Effort:** S

**FINDING Scroll-margin — Anchor targets not offset (T2 | LAY-T2-02)**
- Nav is `position: fixed` at ~70px height. Sections `#overview`, `#how-it-works`, `#standards`, `#coverage` have no `scroll-margin-top`. Clicking "How we work" in the nav will position the `#how-it-works` H2 behind the nav bar.
- **File:** `global.css`
- **Fix:** Add to `global.css` under `@layer base`:
  ```css
  [id] {
    scroll-margin-top: 88px;
  }
  ```
  (88px accounts for nav height at md breakpoint — `py-6` = 24px top + 24px bottom + ~40px content = ~64px, plus buffer.)
- **Effort:** S

**FINDING Scroll-intercept — Carousel wheel preventDefault (T1 | LAY-T1-05, TW-12)**
- `ServiceOverview.astro` line 492–503: the tear-sheet carousel intercepts all wheel events over its bounding box with `e.preventDefault()` and `{passive: false}`. A user scrolling down the page with a trackpad will find their scroll captured by the carousel.
- This is not a full scroll-jack (no page section snap) but it overrides scroll velocity for a portion of the page, which the rubric flags.
- **File:** `ServiceOverview.astro` lines 492–503
- **Required state:** Scroll interception scoped to when the carousel has active focus, not on passive hover.
- **Fix:** Add a focused-state guard:
  ```js
  let stackFocused = false;
  stack.addEventListener("focus", () => { stackFocused = true; });
  stack.addEventListener("blur", () => { stackFocused = false; });
  stack.addEventListener("wheel", (e) => {
    if (!stackFocused) return;  // let scroll through when not focused
    e.preventDefault();
    // ... rest of logic
  }, { passive: false });
  ```
  Alternatively: make the wheel listener passive and remove carousel scroll control (keyboard + chevrons are sufficient).
- **Effort:** M

**FINDING Buyer sequence (T2 | HIE-T2-05)**
- Current sequence: Service Overview → Methodology → Standards → Coverage → CTA.
- Rubric sequence: what do I get → why this provider → how does it work → how do I start.
- "Standards" (vetting criteria = why trust us) should precede "Methodology" (how it works). Reversing them puts the credibility signal before the process explanation, matching buyer psychology.
- **File:** `home.astro` lines 16–26
- **Fix:** Reorder component imports and usage:
  ```astro
  <ServiceOverview />
  <Standards />
  <Methodology />
  <Coverage />
  <SignOffCTA />
  ```
- **Effort:** S (reorder only; no component changes)

**FINDING Status diversity — All carousel cards show identical status (T2 | IMG-T2-04)**
- `ServiceOverview.astro` line 266–277: every one of the 5 tear sheets in the carousel hardcodes `"Warmed up — interested"` as the status. The sample-brief page correctly varies status (warmed / confirmed / awaiting). Real pipelines have attrition; uniform status makes the mock read as fictional.
- **File:** `ServiceOverview.astro` — the `tearSheets` array (lines 22–82) and the status render block (lines 266–283)
- **Required state:** At minimum 2 distinct statuses across 5 cards.
- **Fix:** Add a `status` field to each `TearSheet` entry and a type for it (mirroring `sample-brief.astro`). Assign: Maya Linde → warmed, Jordan Park → awaiting, Aisha Adesanya → confirmed, Kelvin Roe → confirmed, Soren Bach → warmed. Update the render block to output the correct dot color and label per status. "Awaiting reply" cards should use `--color-ink-subtle` dot, not the accent teal.
- **Effort:** M

**FINDING "engine" in service copy (Annex CW-10)**
- `Methodology.astro` line 128: "Our engine surfaces creators whose audiences align with your brief."
- CW-10 explicitly prohibits "engine" as a brand-facing noun. The rule is: "we surface / we source / we deliver" — service verbs, not tool references.
- **File:** `Methodology.astro` line 128
- **Fix:** Change to: "We surface creators whose audiences align with your brief." Drop "Our engine" entirely.
- **Effort:** S

**FINDING Coverage section — below content-density threshold (T3 | TW-18)**
- The Coverage section (`Coverage.astro`) contains only 2 paragraphs: a client profile description and "If your category is unusual, that's fine. The work is the same. Sourcing is sourcing." There are no numbers, credentials, or specific outcome claims.
- Against the TW-18 threshold (8 distinct substantive elements), the /home page has approximately 7 (headline + body in ServiceOverview; 4 methodology steps; Coverage section; Standards section). Coverage contributes little substance.
- **File:** `Coverage.astro`
- **Required state:** Add at least one data point or specific claim.
- **Fix (options):** (a) "We've run briefs across [N] distinct verticals." (b) Add a creator volume signal: "Briefs we've run have averaged [X] verified-interested creators per pipeline." (c) Simplest: merge Coverage into Standards or eliminate it as a separate section, folding its qualifier language into the Standards intro.
- **Effort:** M

---

### Page: /brief

**Pre-flight result:** 2 failures (no H1, mobile CTA).

**FINDING H1 missing (T1 | TYP-T1-02)**
- `brief.astro` contains only a back-link and then `<TerminalCTA />`. TerminalCTA opens with an `<h2>` ("Submit a brief.") at line 30. No H1 is present on the page.
- **File:** `brief.astro` — between line 30 and the `<TerminalCTA />` insertion
- **Fix:** Add a visually hidden H1 in `brief.astro`:
  ```astro
  <h1 class="sr-only">Submit a brief — CastWorks</h1>
  ```
  Or change TerminalCTA's heading to H1 (this is cleaner since TerminalCTA is the entire page's primary content when used on /brief).
- **Effort:** S

**FINDING Form submit label generic (T2 | CTA-T2-01)**
- Submit button label: "Submit" (line 223 `TerminalCTA.astro`). The rubric flags generic labels that could appear unchanged on a competitor. "Submit" appears on every web form in existence.
- **Fix:** Change `<span data-submit-label>Submit</span>` to `<span data-submit-label>Send brief</span>`. Also update the sending state label reference in the JS at line 403: `submitLabel.textContent = "Sending…";` — this is already correct and needs no change.
- **Effort:** S

**WHAT PASSES on /brief:**
- Form has 4 required fields (company text, budget radio, history textarea, email + name) — the budget radio counts as one field, making it 4 required fields total. Passes CTA-T2-02 (≤5 fields).
- Form validates on blur (`.touched` class pattern, line 331–333). Passes CTA-T2-03.
- No stock imagery. No pricing. No generic link text. Copy tone is consistent.
- The form `novalidate` + JS validation pattern with `.touched` is correct — no keypress validation. Pass.

---

### Page: /about

**Pre-flight result:** 2 issues (wrong page title, formal negations).

**FINDING Wrong page title (meta | bug)**
- `about.astro` line 8: `title={`How we work — ${COMPANY_NAME}`}`. The /about page title is incorrectly set to "How we work" — the same as /home. Browser tab and OG metadata are mislabeled.
- **File:** `about.astro` line 8
- **Fix:** Change to `title={`About — ${COMPANY_NAME}`}`
- **Effort:** S

**WHAT PASSES on /about:**
- One H1 ("A note on how we work.") with no sub-headings — correct.
- Sentence case headings. Pass.
- Active voice throughout. Pass.
- Body copy at `clamp(1.0625rem, 1.4vw, 1.25rem)` — minimum 17px. Passes TYP-T1-03.
- No vague transformation language. Pass.
- Single CTA ("Submit a brief →") — text-link style, appropriate for navigational CTA (CTA-T3-01). Pass.
- No stock images. No pricing. No geographic markers in the body. Pass CW-13 (the "operated from the United States" language is in privacy.astro, which is appropriate in a legal context).
- Register is consistent from opening to CTA. Pass COPY-T1-07.

---

### Page: /sample-brief

**Pre-flight result:** 1 finding (copy referencing the image / deliverable structure issue).

**WHAT PASSES on /sample-brief:**
- One H1 ("What a CastWorks brief looks like."). Heading levels: H1 → H2 (Selection criteria) → H2 (Pipeline) → H3s inside pipeline cards. No skips. Pass TYP-T1-02.
- Status diversity: three cards, three statuses (warmed / confirmed / awaiting). Color is supplemented with dot-size variation (w-1.5 vs w-2) and the label text changes. Passes COL-T1-02 and IMG-T2-04.
- Fictional brand name "Veridian" used consistently. Pass CW-18.
- Redacted disclosure inline: "(a fictional brand, redacted from a real engagement)" — passes IMG-T2-04 disclosure requirement.
- No stock photography. Pass.
- Body text at `text-lg md:text-xl` (~18–20px). Pass TYP-T1-03.
- No pricing on the site itself — the rate fields are inside a labeled "sample deliverable" context with explicit fictional branding. Pass CW-15.

**FINDING — Copy alongside the deliverable describes the deliverable (T2 | IMG-T2-03)**
- `sample-brief.astro` lines 107–111: "Below is a redacted sample of a finished pipeline. We've changed the brand and the creator names. The shape of the work is real — each entry below represents four to six hours of human work on top of the discovery pass."
- IMG-T2-03 requires that copy alongside a visual makes an independent claim, not describes the visual. This intro describes the sample rather than making a claim about what it proves.
- **Required state:** Lead with the outcome claim ("This is what you receive when a brief completes."), then use the explanatory note as a secondary qualifier.
- **Fix:** Rewrite the intro paragraph: "This is what a finished brief looks like. Each entry represents a creator who has been vetted, contacted, and confirmed interested — four to six hours of work behind a single name. Brand and creator names are changed; the structure is from a real engagement."
- **Effort:** S

---

### Page: /privacy

**Pre-flight result:** 1 finding (formal negations). Otherwise clean.

**FINDING Formal negations (T2 | COPY-T2-07)**
- `privacy.astro` lines 55–57, 95–96, 132: Multiple instances of "do not" and "we do not" where contractions are the natural register.
- **File:** `privacy.astro`
- **Fix (specific substitutions):**
  - Line 55: "we do not run analytics" → "we don't run analytics"
  - Line 56: "we do not set advertising cookies" → "we don't set advertising cookies"
  - Line 57: "we do not track you across the web" → "we don't track you across the web"
  - Line 95: "We do not share your data" → "We don't share your data"
  - Line 96: "We do not sell it. We do not pass it" → "We don't sell it. We don't pass it"
  - Line 132: "If we do not work together" → "If we don't work together"
- **Effort:** S

**FINDING Geographic marker in privacy contact section (T3 | CW-13)**
- `privacy.astro` line 176: "CastWorks is operated from the United States."
- CW-13 prohibits geographic markers in brand-facing copy at pre-revenue stage. However, CW-13's note is "Revisit when entity and physical presence are locked." The privacy page is a legal document, not a brand credibility page. GDPR requires specifying the data controller's jurisdiction.
- **Assessment:** This is a justified exception. The privacy page has a documented legal function. CW-13 applies to brand/marketing copy; the privacy policy is a legal obligation. Flag for future revision when an entity with a formal registered address is established. No immediate fix required.
- **Effort:** — (monitor only)

**WHAT PASSES on /privacy:**
- Heading structure: H1 → H2s, no skips. Pass.
- Active voice used throughout legal text. Pass.
- Link text is descriptive: "formspree.io/legal/privacy-policy" and `{CONTACT_EMAIL}`. No "click here." Pass.
- Body at `text-base md:text-lg` (~16–20px). Pass TYP-T1-03.
- Tone consistent. Pass.

---

## Site-wide findings

### Typography system

**FINDING — Heading line-height applied globally, missing display-size override (T1 | TYP-T1-04)**
- `global.css` lines 36–41: `h1, h2, h3, h4 { font-weight: 400; letter-spacing: -0.01em; }` — no `line-height` in the global rule. This is actually correct because each component sets its own `leading-[...]` class. But there is no global guardrail.
- The splash hero `leading-[0.96]` at max `clamp(2.5rem, 6vw, 5.5rem)` = 88px on a 1470px+ viewport. TYP-T3-02 allows line-height 0.9–1.05 above 72px. Pass.
- The section H2s use `leading-[1.02]` at max `clamp(2rem, 5.2vw, 4.25rem)` = 68px on a 1470px viewport. At 68px, display-level rule applies (1.0–1.3 for 36px+). 1.02 passes.
- **Overall:** No violation found. The per-component approach is correct. Pass.

**FINDING — Font weights: 400, 500, 600 only (T2 | TYP-T2-02)**
- `Layout.astro` line 104 loads Inter at weights 400, 500, 600 only. CW-05 specifies these three weights are the permitted set. No 300 or 700 loaded. Pass.

**FINDING — Serif + sans genre contrast (T2 | TYP-T2-05)**
- Instrument Serif (display, editorial serif) + Inter (body, neo-grotesque sans). These are distinct in genre — one is a classical-reference display serif, the other is a precision-drawn screen sans. Pass.

**FINDING — All-caps tracking (T1 | TYP-T1-06)**
- All-caps text throughout: `tracking-[0.22em]` applied consistently (e.g., `ServiceOverview.astro` line 143, `Methodology.astro` line 60, etc.). All instances are under 5 words. Tracking is 0.22em (within the 5–12% / 0.05–0.12em range — 0.22em is above the maximum of 0.12em stated in the rule).
- **Finding (T1 | TYP-T1-06):** All-caps label tracking at `0.22em` (22%) exceeds the rubric maximum of `0.12em` (12%). The rule states: "all-caps or small-caps text has `letter-spacing: 0.05–0.12em`."
- **File:** Every component uses `tracking-[0.22em]` for all-caps labels. This is a site-wide pattern set in the first implementation and used consistently across ~12 locations.
- **Required state:** `letter-spacing: 0.05em–0.12em` for all-caps text.
- **Fix:** Change `tracking-[0.22em]` to `tracking-[0.1em]` across all components. This affects: `ServiceOverview.astro` (lines 143, 149, 186, 202, 212, 222, 232, 244, 272, 313), `Methodology.astro` (lines 60, 112, 159, 203), `Standards.astro` (line 76), `TerminalCTA.astro` (lines 84, 108, 143, 166), `sample-brief.astro` (line 89, 124), and the status label in `ServiceOverview.astro`.
- **Effort:** M (many files, but mechanical — single string replacement per file)
- **Note:** `tracking-[0.18em]` and `tracking-[0.2em]` also appear in tear-sheet data labels — these should also change to `tracking-[0.1em]`.

**FINDING — Color: `--color-dark` (#0E0E0E) token is near-pure-black (T1 | COL-T1-03)**
- `global.css` line 13: `--color-dark: #0E0E0E`. This is near-pure-black (6% luminance above pure black). The rule: "no pure black (#000000) as default text color." #0E0E0E is not pure black and is used as a dark module background (not as text color). Text on dark uses `#FAFAFA` (`--color-dark-text`), which is near-white (not pure white).
- **Assessment:** The token is defined but no section actually uses `--color-dark` as a background in the current pages. CW-03 states dark modules are used sparingly (one per page max) — and currently zero are used. No violation, but the token value is borderline.
- **Fix (preventive):** Consider changing `--color-dark` from `#0E0E0E` to `#1A1A1A` or `#1F1F1F` to ensure it reads as a design choice (very dark charcoal) rather than default-dark. Not an immediate failure.
- **Effort:** S (preventive)

**FINDING — Nav: "How we work" and "About" labels (T2 | LAY-T2-09)**
- Navigation labels should answer buyer questions. "How we work" is acceptable — it answers "what does your process look like?" "About" is company-centered and does not answer a buyer question.
- **Finding (T2 | LAY-T2-09):** "About" as a nav label is internal-category labeling, not buyer-question labeling. The page content ("A note on how we work.") actually answers the question "Who is behind this and why should I trust them?"
- **File:** `SiteNav.astro` line 66 / `config.ts` ABOUT_PATH
- **Fix:** Rename the nav link from "About" to "Our approach" or "Why us." The page itself starts with "A note on how we work." — consider renaming that heading to align.
- **Effort:** S

**FINDING — Footer: brand identity left, nav + contact right (Annex CW-14)**
- `Footer.astro`: left column has the wordmark (Identity), right column has nav links (How we work / About / Privacy) + contact links (email / Submit a brief). Hairline rule above (`border-top: 1px solid var(--color-rule)`). Copyright row below.
- This matches CW-14 exactly. Pass.

**FINDING — No dark module (Annex CW-03)**
- Zero dark (#1F3A34 or #0E0E0E) section backgrounds are in use. CW-03 restricts to one per page. Pass.

**FINDING — Nav always-on warm fill (Annex CW-04)**
- `SiteNav.astro` line 31: `style="background: var(--color-bg-card); border-bottom: 1px solid var(--color-rule);"`. `--color-bg-card` = `#F2EEE5`. Pass.

**FINDING — prefers-reduced-motion coverage (T1 | pre-flight #13)**
- `global.css` lines 84–109: comprehensive reduced-motion block disabling hero animations, reveal animations, and tear-sheet transforms. The splash constellation script (`SplashHero.astro` lines 201–202) checks `window.matchMedia("(prefers-reduced-motion: reduce)").matches` and renders a static frame if true. Pass.

**FINDING — No stock photography site-wide**
- No `<img>` elements are present anywhere in the live pages. All visuals are SVG line-art or CSS/canvas. Pass IMG-T1-02, TW-17.

**FINDING — No `alt` violations (T1 | IMG-T1-03)**
- No `<img>` elements to audit. All SVGs are either `aria-hidden="true"` (decorative) or have `aria-label` on their container. The constellation canvas has `aria-label="Creator universe"`. Pass.

**FINDING — Content density count (TW-18 / COL-T3-01)**
Distinct substantive content elements on /home:
1. Service Overview headline + body (1 claim: curated pipeline, pre-warmed)
2. Tear-sheet carousel (1 evidence block: sample deliverable)
3. Methodology Step 01 — Strategy (1 process step with specific outcome)
4. Methodology Step 02 — Discovery (1 process step)
5. Methodology Step 03 — Warm-up (1 process step)
6. Methodology Step 04 — Hand-off (1 process step)
7. Standards section with 5 criteria (1 credibility block)
8. Coverage section (2 paragraphs, no data)
9. SignOffCTA (1 action item)

Count: approximately 8–9 distinct elements. The threshold is 8. The site is at the edge. If Coverage were removed or condensed, it would drop below 8. Keep Coverage section.

---

## Rubric improvement backlog

Entries that are too vague to test against source code alone:

| Rule | Why it's not fully testable from source |
|------|----------------------------------------|
| COL-T1-01 — contrast ratios | Contrast audit requires computed rendering, not source. The palette values (#141414 on #FAF8F3, #5C5C5C on #FAF8F3, #8C8C8C on #FAF8F3) cannot be verified as passing/failing 4.5:1 without a color contrast tool. #141414 on #FAF8F3 will pass easily. #5C5C5C on #FAF8F3 (~7.5:1) passes. #8C8C8C on #FAF8F3 (~3.5:1) — this is below 4.5:1 for body text. The subtle color is used only on small metadata labels (10–11px uppercase) which are not body text. However, if any text below 24px uses `--color-ink-subtle`, it may fail. Needs a live WebAIM check. |
| COL-T2-06 — dark-mode interactive element contrast | There is no dark module in use, so this cannot be tested. Rule is auditable only if a dark section is added. |
| pre-flight #14 — keyboard navigation | Requires interactive tab-order testing in a real browser. Cannot verify from source alone that all interactive elements are reachable and activatable. The form has correct `id`/`for` pairs and the carousel has keyboard handlers — likely passes, but not verifiable from source. |
| TYP-T2-04 — display tracking at 48px+ | The rubric says "display headlines at 48px+ use slight negative tracking (−0.01em to −0.03em)." All H2 headings use `tracking-tight` (Tailwind default: −0.025em). This passes. But `tracking-tight` maps to −0.025em in Tailwind v3 and to a different value in v4 depending on config. With Tailwind v4 in use, the exact computed value of `tracking-tight` needs verification in browser DevTools. |
| COPY-T2-04 — outcome before process | "Process descriptions preceded by outcome claim and problem statement." This requires judgment about whether the ServiceOverview "Curated creator pipelines, warmed up before delivery" serves as the outcome claim for the Methodology section that follows. The sequence is plausible but the two sections are visually separated — whether they read as a connected outcome→process unit depends on scroll behavior and is not auditable from source. |
| HIE-T2-01 — F-pattern compliance | Requires a real-browser visual test at 1280px. Cannot determine text block positions from source. |
| HIE-T2-02 — Z-pattern compliance | Same — requires browser rendering. The splash hero: wordmark top-left (nav), headline centered, CTA centered below. Z-pattern expects CTA at bottom-right. The centered layout deviates. This may be a T2 deviation with a named rationale (centered editorial layout is an accepted alternative). |
| LAY-T1-03 — spacing within vs between groups | Requires computed layout inspection. Tailwind spacing tokens are used consistently, but whether intra-group gaps are smaller than inter-group gaps requires visual measurement. |
| TYP-T2-01 — type scale ratio | The site uses clamp() values with arbitrary min/max (e.g., `clamp(2rem, 5.2vw, 4.25rem)`, `clamp(1.5rem, 2.2vw, 1.875rem)`, `clamp(1.375rem, 2.2vw, 1.75rem)`). The min and max values do not conform to a single named ratio (the 4.25rem / 1.875rem ratio is ~2.27x; the RUI scale uses 1.333x Perfect Fourth). The rule requires "principled ratio; no arbitrary integer steps." These are clamp ranges, not a simple scale. Rubric does not define how to audit clamp-based type scales. |

---

## Counts

- Total findings: 28 (including items that pass and items flagged for monitoring)
- **Actionable findings: 14**
  - T1 hard-rule failures: 2 (missing H1s on /brief and /home; all-caps tracking exceeds max)
  - T2 strong-default deviations: 7 (scroll-margin, mobile CTA, buyer sequence, status diversity, formal negations, submit label, IMG-T2-03 copy, nav label)
  - T3 contextual notes: 2 (coverage density, privacy geography)
  - Trip-wires triggered: 1 (TW-18 at edge of threshold — addressed by coverage finding)
  - Annex violations: 2 (CW-10 "engine" copy, CW-14 fully passes)
  - Meta/bug: 1 (wrong page title on /about)
- **Findings that pass cleanly: 14** (no action required)
- Effort breakdown: S=10, M=4, L=0
- Page breakdown:
  - / (Splash): 1 actionable (mobile CTA hidden)
  - /home: 5 actionable (H1, scroll-margin, carousel scroll-intercept, buyer sequence, coverage density, status diversity, "engine" copy)
  - /brief: 2 actionable (H1, submit label)
  - /about: 2 actionable (wrong title, formal negations partially here)
  - /sample-brief: 1 actionable (copy describes the visual)
  - /privacy: 1 actionable (formal negations)
  - Site-wide: 2 actionable (all-caps tracking, nav "About" label)
