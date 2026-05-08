---
name: CastWorks Website Taste Rubric (Keystone)
description: >
  Pre-flight QA rubric for design and copy decisions on the CastWorks website.
  Synthesized from canon, brand books, failure modes, and tagged corrections.
  Universal standards anchor; CastWorks-specific preferences in Section 4 annex.
date: 2026-05-08
version: 1.0
sources:
  - design-reference/corrections-corpus.md
  - design-reference/brand-books-rubric.md
  - design-reference/design-canon-rubric.md
  - design-reference/failure-modes.md
counts:
  tier_1_hard_rules: 38
  tier_2_strong_defaults: 47
  tier_3_contextual: 19
  trip_wires: 18
  castworks_specific: 21
---

# CastWorks Website Taste Rubric (Keystone)

---

## How to use this rubric

**When to consult:** Before producing or revising any design or copy element on the CastWorks site — before showing Egg. Run Section 1 first (60-second pre-flight). Then run the relevant by-task subsection from Section 2. If a specific failure mode is suspected, scan Section 3.

**How to read the tiers:**
- **T1 — HARD RULE:** Backed by 3+ independent sources (canon, brand books, or both), plus in some cases confirmed by corrections-corpus [LIKELY UNIVERSAL] tags. If failed, stop and rework before showing Egg. No exceptions without written justification that overrides the named source.
- **T2 — STRONG DEFAULT:** Single canonical source or 2-source agreement. Deviation requires a named justification recorded in the session or commit message.
- **T3 — CONTEXTUAL:** The rule is conditional. The specific condition is stated in the rule. Evaluate the context before applying.

**When to deviate:** Deviations from T1 rules are rare and must cite a specific permission case from `design-canon-rubric.md` Section F. Deviations from T2 need a sentence of rationale. T3 rules carry their own deviation logic.

**Section 4 is not portable.** CastWorks-specific and Egg-specific preferences live there. The rest of this rubric applies to any editorial B2B service brand.

---

## Section 1 — Pre-flight checklist

Run this before showing Egg any design or copy output. Should take 60 seconds.

| # | Question | Pass criterion | Source |
|---|----------|---------------|--------|
| 1 | Does the page have one H1, and do heading levels descend consecutively (H1 → H2 → H3, no skips)? | One H1. No skipped levels. | brand-books S1, canon A2.4 |
| 2 | Does all body text (below 24px) achieve 4.5:1 contrast against its background? | Passes WebAIM contrast checker at 4.5:1 minimum. | brand-books S2, WCAG C2.1 |
| 3 | Does every use of color to convey meaning have a second indicator (icon, label, or shape)? | No state is communicated by color alone. | brand-books S3, canon C2.5 |
| 4 | Does body text line length stay at or below 75–80 characters per line? | Measure rendered at 1280px viewport. Fail if average exceeds 80 chars. | brand-books S5, canon A4.1 |
| 5 | Is body copy in active voice, with no passive constructions where an active subject is available? | Flag "was [verb]ed by" / "is [verb]ed" patterns. | brand-books S6 |
| 6 | Is the page free of generic link text ("click here," "learn more," "read more")? | Every `<a>` describes its destination or action. | brand-books S9 |
| 7 | Does every CTA / button label begin with a verb? | First word of every button/CTA is a verb. | brand-books S27 |
| 8 | Is there exactly one visually dominant CTA per section — no two equal-weight primary actions? | Only one filled/solid CTA button style per section. | failure-modes LT-4 |
| 9 | Does the hero headline pass the "so what?" test — is the buyer benefit inside the headline, not implied? | Read it aloud. Say "so what?" The answer should already be in the headline. | failure-modes CPT-2 |
| 10 | Is every visual element passing the removal test — does each carry meaning that copy alone cannot? | Cannot remove any element without information loss. | canon E1.3, corrections IV-01 |
| 11 | Does the page use no more than two typeface families? | Font-family audit: two families maximum. | canon A1.1 |
| 12 | Are there no vague transformation words in hero or above-fold copy? | Search: empower, transform, seamless, end-to-end, innovative, best-in-class, cutting-edge, holistic. Replace each with a specific outcome claim. | failure-modes CPT-1 |
| 13 | Does all animation and motion respect `prefers-reduced-motion: reduce`? | Enable OS setting; verify animations pause or reduce. | brand-books S29 |
| 14 | Can the entire page be navigated and converted using only a keyboard? | Tab through every interactive element; all reachable, all activatable by Enter/Space. | brand-books S17, failure-modes AT-5 |
| 15 | Does the copy read in a consistent register from hero through CTA — no register shift between sections? | Read every text block aloud in sequence. Note any register change. | failure-modes TT-5 |
| 16 | Is the primary CTA visible on mobile without opening the hamburger menu? | At 375px viewport, primary CTA must be in the persistent header bar. | failure-modes INT-2 |
| 17 | Does the page avoid the 2010s SaaS template pattern (hero illustration + gradient + three-feature row + CTA)? | Screenshot the hero. If 2+ of these four elements appear together, flag it. | failure-modes LT-2 |
| 18 | Are images of people absent, or if present, verified as not widely distributed stock? | Reverse image search any person-featuring image. Fail if it appears on other sites. | failure-modes IT-1, corrections IV-02 |

---

## Section 2 — By-task rubrics

---

### 2A. Typography

**T1 — HARD RULES**

**TYP-T1-01 — Maximum two typeface families per composition.**
- Pass: Font-family audit returns exactly 2 families (Instrument Serif + Inter for CastWorks). Fail: Any third family present.
- If failed: Remove the third family; achieve its role through weight or size differentiation within the existing two.
- Sources: canon A1.1 [VC, SP, BR — cross-source agreement], brand-books S15.

**TYP-T1-02 — Heading levels consecutive; one H1 per page; no bold+size substituting for heading markup.**
- Pass: DOM audit — one H1, no skipped heading levels, no element using `font-weight: bold` + increased `font-size` as a visual heading without a heading element.
- If failed: Correct heading markup. Restyle existing heading elements; never skip levels to achieve visual size.
- Sources: brand-books S1, S16 [6 of 7 systems], canon [implied throughout].

**TYP-T1-03 — Body text at or above 15px; no font weight below 400 in UI body copy.**
- Pass: All paragraph-level type renders at 15px+. All body weights are 400+.
- If failed: Increase size or weight. Weights 100–300 fail contrast at body sizes regardless of hex values — see failure-modes AT-1 and TT-1.
- Sources: canon A2.2, A2.6; failure-modes TT-1.

**TYP-T1-04 — Body text line height 1.2–1.45 (unitless); display text line height 1.0–1.25 for sizes 36px+.**
- Pass: Computed line-height of body elements is between 1.2 and 1.45. Headings at 36px+ are between 1.0 and 1.3.
- If failed: Adjust. Applying a global line-height to all size levels is a fail.
- Sources: canon A3.1 [PT, BR — cross-source agreement], brand-books BB-T-04.

**TYP-T1-05 — Font sizes in relative units (rem/em), not fixed px. No `user-scalable=no` in viewport meta.**
- Pass: All `font-size` declarations use rem or em. Viewport meta does not include `user-scalable=no`.
- If failed: Convert px to rem. Remove `user-scalable=no`.
- Sources: brand-books S4 [5 of 7 systems], BB-A-01.

**TYP-T1-06 — All-caps used only for text under one line. All-caps text is letter-spaced 5–12%.**
- Pass: No all-caps applied to paragraphs or multi-line blocks. All-caps or small-caps text has `letter-spacing: 0.05–0.12em`.
- If failed: Remove all-caps from body passages. Add tracking to any remaining all-caps short labels.
- Sources: canon A5.1 [BR, PT — cross-source agreement], A7.1; brand-books S19.

**TYP-T1-07 — Never add positive letter-spacing (tracking) to lowercase body text.**
- Pass: `letter-spacing` on body text (lowercase) is 0 or negative.
- If failed: Remove tracking from body copy. Tracking on lowercase body text is a citation-backed fail (canon A5.2 [BR, SP]).
- Sources: canon A5.2 [CROSS-SOURCE AGREEMENT]; failure-modes TT-6.

**TYP-T1-08 — Justified text is forbidden unless hyphenation is explicitly enabled and verified.**
- Pass: No `text-align: justify` on web body copy without confirmed hyphenation quality.
- If failed: Switch to left-aligned (`text-align: left`).
- Sources: canon A6.1 [BR, PT — cross-source agreement], A6.4; brand-books S20.

**T2 — STRONG DEFAULTS**

**TYP-T2-01 — Type scale uses a principled ratio; no arbitrary integer steps.**
- Pass: All font sizes conform to a named ratio (Minor Third 1.2, Major Third 1.25, Perfect Fourth 1.333, or the RUI reference scale: 12/14/16/18/20/24/30/36). Fail: Ad hoc sizes like 17px or 22px without ratio derivation.
- Sources: canon A2.1 [BR, PT].

**TYP-T2-02 — No more than 3 distinct font weights in use across the site.**
- Pass: Weight inventory returns ≤3 values (e.g., 400/500/600).
- Sources: brand-books S23, canon A2.4.

**TYP-T2-03 — Heading-to-body weight contrast exists; hierarchy cannot survive on size alone.**
- Pass: Each heading level has at least one independent hierarchy cue beyond size — weight or color shift.
- Sources: canon A2.5 [RUI, SP].

**TYP-T2-04 — Display headlines at 48px+ use slight negative tracking (−0.01em to −0.03em).**
- Pass: Display text at 48px+ has `letter-spacing` at 0 or negative.
- Sources: canon A5.3 [SP, RUI].

**TYP-T2-05 — Pair serif and sans on contrast, not similarity. The two faces must have distinct genre.**
- Pass: Verify Instrument Serif (display, serif) and Inter (body, sans) are doing distinct register work. Fail: Both faces are from the same genre (both grotesques, both rounded serifs).
- Sources: canon A1.2 [SP, BR]; corrections T-01; failure-modes TT-2.

**TYP-T2-06 — No typographic dimension effects (bevel, emboss, inner shadow, text-shadow for decoration).**
- Pass: Audit CSS for `text-shadow`, `filter: drop-shadow` on text, outline/stroke at character level. Each instance must have a documented rationale beyond "depth."
- Sources: failure-modes TT-4.

**TYP-T2-07 — Sentence case for web headings (capitalize first word only); title case reserved for formal documents.**
- Pass: Heading elements use sentence case.
- Sources: canon D4.1 [PT, web editorial standard].

**TYP-T2-08 — First paragraph after a heading is flush left — no indent.**
- Pass: No text-indent on the first paragraph following any heading.
- Sources: canon A9.2 [BR].

**TYP-T2-09 — Either paragraph indent or vertical spacing — not both simultaneously.**
- Pass: If `margin-bottom` separates paragraphs, `text-indent` is 0. If indent is used, margin-bottom is 0 between paragraphs.
- Sources: canon A9.1 [PT, BR — cross-source agreement].

**T3 — CONTEXTUAL**

**TYP-T3-01 — Sans-serif body text requires ~10% more leading than a serif face at the same size.**
- Context: Inter is a sans-serif. At the same line-height setting it will feel tighter than a serif face. Evaluate whether leading needs to increase by ~0.1 unitless when the face changes.
- Sources: canon A3.2 [BR, SP].

**TYP-T3-02 — Tighter line-height than 1.2 is acceptable for display text above 72px.**
- Context: At extreme display scales, 1.2 creates isolated lines. Line-height 0.9–1.05 may be correct above 72px. Do not apply this below 60px.
- Sources: canon F9 [PT, typographic convention].

**CONFLICT NOTE — Formal vs. web punctuation:**
Canon (Bringhurst) specifies typographic punctuation (em dashes without spaces, en dashes for ranges). Brand books (Mailchimp) codify the same. These are in agreement. No conflict.

---

### 2B. Color

**T1 — HARD RULES**

**COL-T1-01 — All text below 24px: minimum 4.5:1 contrast against background. Text 24px+: minimum 3:1.**
- Pass: WebAIM contrast checker passes for every text/background combination. Also run visual check at 100% zoom on non-retina display for any weight below 400.
- If failed: Adjust text color or background. Do not rely only on hex-value check — see failure-modes AT-1.
- Sources: brand-books S2 [6 of 7 systems], WCAG C2.1; failure-modes CT-2.

**COL-T1-02 — Color never used alone to convey state, error, success, or distinction.**
- Pass: Grayscale render test — every state distinction survives without color. Secondary indicator present (icon, label, border change, or shape change).
- If failed: Add a secondary indicator before shipping.
- Sources: brand-books S3 [6 of 7 systems], canon C2.5.

**COL-T1-03 — No pure black (#000000) as default text color; no pure white (#FFFFFF) as a dark mode background.**
- Pass: Primary text color is a near-black (e.g., `#111827` or CastWorks teal `#1F3A34` on light backgrounds). Dark sections avoid pure #000000 background.
- If failed: Substitute a near-black with slight saturation.
- Sources: canon C1.3, C1.4 [RUI].

**COL-T1-04 — Non-text UI components and graphical elements: minimum 3:1 contrast against adjacent colors.**
- Pass: Form input borders, icon fills, chart elements pass 3:1 against their background.
- If failed: Increase border or fill contrast.
- Sources: brand-books S2, canon C2.4 [WCAG 1.4.11].

**T2 — STRONG DEFAULTS**

**COL-T2-01 — Maximum 1–2 accent colors per page.**
- Pass: At most two distinct hues are doing "attention" or "action" work.
- Sources: canon C3.1 [VC, RUI]; corrections C-02.

**COL-T2-02 — Every color application must have a named semantic role. Decorative color without a role is forbidden.**
- Pass: For each colored element, name its role (primary action, error state, informational accent, dark module). Fail: "it looks nice" or "brand color used here."
- Sources: brand-books S12 [5 of 7 systems], IC-C-12.

**COL-T2-03 — Links in body text differentiated by both color and underline — not color alone.**
- Pass: All inline links have visible underline (or bold + underline on hover/focus) in addition to color.
- Sources: brand-books S26 [5 of 7 systems], BB-C-04.

**COL-T2-04 — Do not use radial-gradient "orb" effects on near-black backgrounds (#0a0a0a–#1a1a1a).**
- Pass: No radial-gradient combined with near-black hero backgrounds.
- Sources: failure-modes CT-3.

**COL-T2-05 — Do not use purple, violet, or indigo as a primary palette unless a specific strategic brief is documented.**
- Pass: If purple-family color is present, a one-sentence strategic rationale exists for why it is the right choice for this brand in this category.
- Sources: failure-modes CT-1.

**COL-T2-06 — Dark mode interactive element boundaries: 3:1 contrast against dark background.**
- Pass: On dark teal (#1F3A34) module sections, all buttons and form field borders meet 3:1.
- Sources: failure-modes AT-3, brand-books SP-A-01.

**T3 — CONTEXTUAL**

**COL-T3-01 — Quiet luxury / near-monochrome palette works only with sufficient content density to fill the space it creates.**
- Context: If CastWorks homepage has fewer than 8 distinct substantive elements (specific claims, credentials, process descriptions, evidence), extreme white space + restrained palette reads as emptiness. If content is dense, restraint reads as confidence.
- Sources: failure-modes CT-6, LT-6; corrections C-03.

---

### 2C. Layout

**T1 — HARD RULES**

**LAY-T1-01 — Every layout element traces back to an explicit alignment system. No elements placed by eye.**
- Pass: All text blocks, images, and components align to shared column or baseline coordinates.
- If failed: Establish a grid; anchor floating elements.
- Sources: canon B1.1 [MBr, VC — cross-source agreement].

**LAY-T1-02 — Body text containers have a max-width constraint; lines do not exceed 80 characters at wide viewports.**
- Pass: At 1440px viewport, body text column does not extend full container width. Max-width cap exists (20–35em or equivalent px).
- If failed: Add `max-width` to body text containers.
- Sources: brand-books S5, S28; canon A4.1, A4.3.

**LAY-T1-03 — Spacing within related groups is smaller than spacing between unrelated groups.**
- Pass: Label-to-field gap < field group-to-field group gap. Heading-to-body gap < body-to-next-heading gap.
- If failed: Reduce intra-group spacing or increase inter-group spacing.
- Sources: canon B2.3 [RUI — cross-source agreement, Gestalt proximity].

**LAY-T1-04 — All spacing values are drawn from a defined scale — no arbitrary in-between values.**
- Pass: Spacing scale audit (Tailwind spacing tokens or equivalent). No values outside the defined scale.
- If failed: Map offending values to the nearest scale step.
- Sources: brand-books S14 [5 of 7 systems], canon B2.1.

**LAY-T1-05 — No scroll-jacking (intercepting scroll events to control narrative pace).**
- Pass: No `preventDefault()` on scroll events. No fullPage.js, ScrollMagic section-snap, or equivalent.
- If failed: Remove. Replace with scroll-triggered reveal animations that do not override scroll velocity.
- Sources: failure-modes LT-3.

**T2 — STRONG DEFAULTS**

**LAY-T2-01 — Sticky navigation: mobile height must not exceed 15% of the viewport height (100px at 667px).**
- Pass: At 375px × 667px (iPhone SE), nav height ≤ 100px.
- Sources: failure-modes LT-5.

**LAY-T2-02 — Anchor links: `scroll-margin-top` equal to nav height set on all anchor targets.**
- Pass: Click every in-page anchor link with nav in final scroll state. Target heading is fully visible below nav.
- Sources: failure-modes AT-2.

**LAY-T2-03 — Avoid more than 3 distinct border-radius values in a single layout.**
- Pass: Border-radius inventory returns ≤3 values.
- Sources: canon D3.3 [RUI].

**LAY-T2-04 — Minimize border usage. Use spacing and background contrast to define structure first.**
- Pass: For each visible border, write its structural rationale. If background contrast or spacing achieves the same separation, remove the border.
- Sources: canon E1.6 [RUI].

**LAY-T2-05 — No competing primary focal points. Only one element on the page holds maximum visual weight.**
- Pass: Cover test — cover any candidate for primary element; if hierarchy still reads the same, the first element was not primary.
- Sources: canon D1.1, D3.1 [MBr, VC — cross-source agreement].

**LAY-T2-06 — Full-bleed images at the same vertical position as primary headlines: reduce image dominance.**
- Pass: If a full-width image coexists with a primary headline at the same viewport position, image is desaturated, reduced in opacity, or positioned to yield visual priority.
- Sources: canon D3.2 [MBr].

**LAY-T2-07 — Use CSS Grid for 2D layouts; Flexbox for 1D linear arrangements.**
- Pass: Nav bars, button rows, and single-axis components use Flexbox. Multi-column editorial grids use CSS Grid.
- Sources: canon B1.5 [JRS].

**LAY-T2-08 — Images do not use pixel-fixed widths in responsive contexts; use percentage or fr units.**
- Pass: No `width: [px]` on image or illustration elements inside responsive columns.
- Sources: canon B6.2 [JRS, Rachel Andrew].

**LAY-T2-09 — Navigation labels answer buyer questions, not internal company categories.**
- Pass: For each nav label, write the buyer question it answers. If the question cannot be written, rename the label.
- Sources: failure-modes LT-1, LT-8.

**LAY-T2-10 — Visual and DOM reading order match. No `order`, `flex-direction: row-reverse`, or `grid-auto-flow: dense` for logical content reordering.**
- Pass: DOM order matches visual order for all primary content.
- Sources: canon B6.4 [Rachel Andrew].

**T3 — CONTEXTUAL**

**LAY-T3-01 — White space is a design element; reflexive filling of empty columns is a fail. But: below a content-density threshold, white space reads as emptiness rather than confidence.**
- Context: Verify how many substantive content elements are on the page (see COL-T3-01 threshold of 8). If above threshold, protect white space. If below threshold, either add content or reduce white space to avoid the "editorial-but-empty" read.
- Sources: canon B3.2 [VC, MBr]; failure-modes LT-6; corrections L-01.

**LAY-T3-02 — Asymmetric grids appropriate when columns carry primary and secondary content. Symmetric grid for equal-weight columns.**
- Context: Use asymmetric (2/3 + 1/3 split) when one column is primary content and the other is metadata, captions, or supplementary. Use symmetric only for explicitly parallel content.
- Sources: canon B4.2 [MBr, VC].

---

### 2D. Copy

**T1 — HARD RULES**

**COPY-T1-01 — Active voice. Passive constructions where an active subject is available are forbidden.**
- Pass: Flag "was [verb]ed," "is [verb]ed by," "has been [verb]ed" where a subject could be named. Rewrite.
- Sources: brand-books S6 [5 of 7 systems].

**COPY-T1-02 — Plain language. No formal register words with shorter equivalents.**
- Pass: Search copy for: purchase (→ buy), assist (→ help), approximately (→ about), utilize (→ use), commence (→ start), leverage (when used as a verb), facilitate.
- Sources: brand-books S7 [5 of 7 systems].

**COPY-T1-03 — Second-person address. No third-person references to the reader.**
- Pass: No "users should," "visitors will," "clients are encouraged." All reader address is "you."
- Sources: brand-books S8 [5 of 7 systems].

**COPY-T1-04 — No generic link text. Link text must describe destination or action.**
- Pass: Scan all `<a>` elements. Fail on "click here," "learn more," "read more," "here" as full link text.
- Sources: brand-books S9 [5 of 7 systems].

**COPY-T1-05 — Vague transformation language forbidden in hero and above-fold copy.**
- Pass: No instance of: empower, transform, elevate, unlock, seamless, end-to-end, innovative, best-in-class, cutting-edge, holistic, robust, synergy, world-class.
- If failed: Replace each with a specific outcome: what does the client receive, in what timeframe, under what conditions?
- Sources: failure-modes CPT-1.

**COPY-T1-06 — No all-caps in body passages. All-caps capped at 5 words maximum per instance.**
- Pass: `text-transform: uppercase` audit. Any all-caps text over 5 words flagged for revision.
- Sources: brand-books S19 [5 of 7 systems], canon A7.1; failure-modes TT-7.

**COPY-T1-07 — Copy tone is consistent across sections — no register shift from hero to feature descriptions to CTA.**
- Pass: Read all copy aloud in sequence. Note any point where the spoken voice shifts register (editorial → boilerplate, or casual → formal). Resolve.
- Sources: failure-modes TT-5.

**T2 — STRONG DEFAULTS**

**COPY-T2-01 — Every paragraph opens with its substantive claim — no throat-clearing openers.**
- Pass: First 2 words of each paragraph carry the key information. No openers like "It is important to note that," "One thing to consider is," "Ultimately."
- Sources: canon D2.3 [NNGroup research].

**COPY-T2-02 — No closing summary sentence in editorial copy (nucleus-first, stop when the point is made).**
- Pass: Last sentence of each paragraph is not a paraphrase or summary of the paragraph. Cut it if it is.
- Sources: corrections CV-10; writing_style_egg_voice.md.

**COPY-T2-03 — Confirm-tone for warm-lead audiences. No agitation re-staging, no "you've already tried X" structure.**
- Pass: Copy does not open by re-staging the problem the buyer has already processed. No "Not X, but Y" contrast structures in headlines.
- Sources: corrections CV-01, CV-02, CV-11.

**COPY-T2-04 — Process descriptions preceded by outcome claim and problem statement.**
- Pass: Before any "how it works" or methodology section, the reader has been given an outcome claim and a reason to care about the process. Sequence: outcome → problem → process.
- Sources: failure-modes CPT-5.

**COPY-T2-05 — Specific outcome claims adjacent to their evidence — no more than one scroll away.**
- Pass: For every number, percentage, or timeframe claim, its supporting evidence appears within the same viewport or one scroll.
- Sources: failure-modes CPT-4.

**COPY-T2-06 — Date-dependent facts verified against the current date before shipping.**
- Pass: Every stat with a year, every future-tense market claim, every "as of" reference is checked for accuracy at ship time.
- Sources: corrections CV-09.

**COPY-T2-07 — Contractions used in user-facing copy. Formal negations ("do not," "will not") replaced with contractions.**
- Pass: Scan for "do not," "will not," "should not," "is not" where "don't," "won't," "shouldn't," "isn't" is more natural.
- Sources: brand-books S10 [5 of 7 systems].

**COPY-T2-08 — Oxford (serial) comma used in all lists.**
- Pass: Three-item lists use the comma before "and."
- Sources: brand-books MC-CD-01.

**COPY-T2-09 — En dash (–) for ranges, not hyphen (-). Em dash (—) without surrounding spaces, not double-hyphen.**
- Pass: "5–10 points" not "5-10." "Feature—it helps" not "feature--it helps."
- Sources: brand-books MC-CD-02; canon A8.5.

**T3 — CONTEXTUAL**

**COPY-T3-01 — Selectivity-gate CTAs ("see if you qualify," "not for everyone") require a real downstream selection step to be defensible.**
- Context: If a genuine qualification filter exists (brief submission is reviewed before engagement), gate language is accurate. If no real filter exists, gate language reads as false exclusivity.
- Sources: corrections CV-05.

**COPY-T3-02 — Tagline candidates must pass the 3-second clarity test for a B2B SMB audience.**
- Context: Test: would a marketing lead at a small company pause to work out the meaning? If yes, the headline is too clever for a confirm-page context.
- Sources: corrections CV-06.

---

### 2E. CTA

**T1 — HARD RULES**

**CTA-T1-01 — CTA button labels begin with a verb. No noun-first, "you can," or "please" openers.**
- Pass: All CTA copy: first word is a verb.
- Sources: brand-books S27 [5 of 7 systems], SP-VT-01.

**CTA-T1-02 — Single primary CTA per section. No two CTAs with equal visual weight.**
- Pass: Only one filled/solid button style per section. Secondary CTAs use outline, text-link, or underline style.
- Sources: failure-modes LT-4; canon D1.1.

**T2 — STRONG DEFAULTS**

**CTA-T2-01 — Avoid "Get Started," "Learn More," "Explore" as standalone CTA labels.**
- Pass: CTA label names a specific action, commitment level, or outcome. Test: could this label appear unchanged on a competitor's site? If yes, it is generic.
- Sources: failure-modes CPT-3.

**CTA-T2-02 — Contact and inquiry forms: 5 fields maximum. Audit each field for deferability.**
- Pass: Required field count ≤ 5. Each field audited for whether it is needed before the first conversation.
- Sources: failure-modes LT-7.

**CTA-T2-03 — Forms validate on blur or submit — not on keypress.**
- Pass: Type a partial value in a format-sensitive field (email, phone). No error state appears while typing. Error appears after leaving the field.
- Sources: failure-modes INT-4.

**T3 — CONTEXTUAL**

**CTA-T3-01 — Button pill is appropriate for terminal actions (form submit). Underlined text link is appropriate for navigational CTAs.**
- Context: Reserve pill/filled buttons for irreversible commitments (form submission). Use text links for navigational or exploratory CTAs. The weight difference makes terminal actions feel decisive.
- Sources: corrections CTA-01.

---

### 2F. Imagery / Visuals

**T1 — HARD RULES**

**IMG-T1-01 — Every image and data module carries meaning. Purely decorative visuals forbidden.**
- Pass: For each visual element, name the buyer question it answers. Fail if the answer is "it fills space" or "it adds visual interest."
- Sources: canon E1.3, E1.4 [TUF, MBr, VC]; corrections IV-01.

**IMG-T1-02 — No stock photography of people on any brand-credibility-bearing page.**
- Pass: Reverse image search every person-featuring image. Fail if it appears on other unrelated sites.
- Sources: failure-modes IT-1; corrections IV-02 (line-art-only rule in annex, but no-stock-people is universal).

**IMG-T1-03 — Images must have `alt` attributes. Decorative images use `alt=""`. Content images use descriptive alt text not beginning with "Image of" or "Graphic of."**
- Pass: DOM scan — no `<img>` without `alt`. No alt text starting with "Image of."
- Sources: brand-books S13 [5 of 7 systems].

**IMG-T1-04 — No autoplay video or looping animation without a visible pause control AND a `prefers-reduced-motion` implementation.**
- Pass: (a) Any autoplay video has a visible pause button in the first viewport. (b) OS `prefers-reduced-motion: reduce` is set; all animations pause or reduce.
- Sources: brand-books S29; failure-modes AT-4, IT-4; WCAG 2.2.2.

**T2 — STRONG DEFAULTS**

**IMG-T2-01 — Illustration sizes constrained to 2–3 discrete sizes per layout.**
- Pass: Image/illustration size vocabulary audit. Fail if more than 3 distinct sizes appear for the same content type.
- Sources: canon E2.2 [MBr].

**IMG-T2-02 — No text embedded in images (text must be selectable and scalable).**
- Pass: Inspect all `<img>` elements. No readable text embedded in image pixels.
- Sources: brand-books S22 [5 of 7 systems].

**IMG-T2-03 — Copy alongside a visual must stand independently — it does not describe the image.**
- Pass: Cover the image. Read the copy. Does it make a complete claim? If the copy describes the image ("the tear-sheet shows..."), rewrite it to make the claim the image is supporting.
- Sources: corrections IV-04.

**IMG-T2-04 — Pre-revenue mocks include: status diversity, inline disclosure markers, and date variation.**
- Pass: Deliverable previews show at least two distinct status states. At least one disclosure marker present ("fictional brand" or "redacted"). Dates vary across mock items.
- Sources: corrections IV-05, IV-06.

**T3 — CONTEXTUAL**

**IMG-T3-01 — Illustration is appropriate only where it illustrates a process step or abstract concept; generic icon-set material is not acceptable.**
- Context: Line-art step glyphs earn their place only if each glyph is specific to the step's action. If an icon from a general icon library would work equally well, it does not meet the specificity standard.
- Sources: corrections IH-03; canon E1.4.

---

### 2G. Information hierarchy / scanning

**T1 — HARD RULES**

**HIE-T1-01 — Every composition has exactly one primary focal point.**
- Pass: Show the layout briefly to a fresh eye (3 seconds). Identify what they name as most important. It should match the intended primary element.
- Sources: canon D1.1 [MBr, VC — cross-source agreement].

**HIE-T1-02 — Hierarchy built through size first, weight second, color third.**
- Pass: If color were removed, hierarchy still reads through size and weight alone.
- Sources: canon D1.2 [RUI, SP].

**T2 — STRONG DEFAULTS**

**HIE-T2-01 — F-pattern compliance: critical information in the top horizontal band and left vertical spine of text-heavy pages.**
- Pass: Any critical supporting claim, key differentiator, or secondary CTA that currently sits at right-center or bottom-center of a text-heavy layout is moved.
- Sources: canon D2.1.

**HIE-T2-02 — Z-pattern compliance: on landing/hero sections, primary CTA at bottom-right of the Z-path.**
- Pass: Hero section: brand mark at top-left, key claim at top-right, primary CTA at bottom-right (or center, which is acceptable on the Z-diagonal).
- Sources: canon D2.2.

**HIE-T2-03 — Lists do not exceed 7 items without grouping. Maximum one formatting interruption per line.**
- Pass: No unbroken bullet list of 8+ items. No more than one inline weight change, color change, or link per line of body copy.
- Sources: canon D4.3, D4.4 [SP, editorial convention].

**HIE-T2-04 — Unbroken prose sections do not exceed 5 consecutive paragraphs without an intervening heading.**
- Pass: Count consecutive paragraphs without a heading break in content sections.
- Sources: brand-books S30 [5 of 7 systems].

**HIE-T2-05 — Page and section architecture follows buyer decision sequence, not company internal logic.**
- Pass: Confirm the site covers buyer questions in order: what do I get → why this provider → how does it work → how do I start. Each question answered before the next is asked.
- Sources: failure-modes LT-8; corrections IH-01.

**HIE-T2-06 — Secondary content de-emphasized relative to primary, not just primary content emphasized.**
- Pass: Supporting text and labels run at lower contrast, smaller size, or lighter weight than primary content. Hierarchy achieved by de-emphasis as well as emphasis.
- Sources: canon D1.3 [RUI].

---

## Section 3 — Trip-wire detectors

Run this when a specific pattern is suspected. Each entry traces to a named case and includes a CastWorks-specific detection instruction.

---

**TW-01 — The Tropicana 2009 trap: simplification that destroys recognition**
- Named case: Tropicana 2009 rebrand removed the orange-with-straw mark; sales dropped 20% in 2 months; $50M total cost; reversed in 6 weeks.
- Trip-wire: Any design that removes a CastWorks element that has been used consistently across at least 3 touchpoints.
- Detection: Before removing a repeated element (mark shape, wordmark structure, teal color combination), name the recognition function it serves and name its replacement. If the replacement is "nothing — we're going cleaner," that is the Tropicana move.
- Source: failure-modes BET-2.

**TW-02 — The Gap 2010 trap: visual rebrand without a positioning shift**
- Named case: Gap replaced 20-year-old blue box with plain wordmark + gradient square; no positioning rationale; reversed in 6 days after 14,000 parody redesigns and estimated $100M market cap loss.
- Trip-wire: Any significant visual change to a recognized CastWorks element (compass mark, wordmark, teal palette) without a written paragraph explaining the positioning shift that makes the visual change necessary.
- Detection: Write the positioning-shift paragraph before opening design software. If you cannot write it, the change is aesthetic, not strategic.
- Source: failure-modes BET-1.

**TW-03 — The Jaguar 2024 trap: repositioning to a non-existent audience before the existing audience is replaced**
- Named case: Jaguar retired heritage/performance positioning and leaping-jaguar mark in November 2024; European sales fell 97.5% in April 2025 (49 vs. 1,961 vehicles); rebrand designer dismissed.
- Trip-wire: Any copy or visual direction change that abandons the current CastWorks positioning (boutique editorial service for music production brands) to court an audience that has not yet been identified or sized.
- Detection: If a new positioning direction is proposed, answer: "How large is the audience we are moving toward, and when will they sustain the business if the current audience declines?"
- Source: failure-modes BET-4.

**TW-04 — The Pepsi/Arnell 2008 trap: post-hoc rationalization for aesthetic choices**
- Named case: Arnell Group's 27-page document connected a minimal Pepsi logo adjustment to the Mona Lisa, Golden Ratio, and the theory of relativity. Leaked; became an industry artifact. Arnell later described the work as "bullshit."
- Trip-wire: A brand rationale where the same narrative would fit any alternative design equally well.
- Detection: Write the one-sentence verbal claim the mark or color choice encodes. Test: "Would this claim fit a competitor in the same category?" If yes, the rationale is not specific enough.
- Source: failure-modes BET-7; corrections BA-03.

**TW-05 — The Twitter/X 2023 trap: destroying verbal brand equity overnight**
- Named case: Twitter → X eliminated 17 years of accumulated equity ($5.7B brand value in Jan 2022 → $673M by 2024). The name "X (formerly Twitter)" permanently requires the old name to explain itself.
- Trip-wire: Retiring the name "CastWorks" or any accumulated verbal shorthand before the new name achieves equal recognition.
- Detection: Inventory all verbal equity before any naming change. The inventory is the minimum ante for the decision.
- Source: failure-modes BET-3.

**TW-06 — The Yahoo 2013 trap: technical execution failure on a high-publicity mark**
- Named case: Yahoo's "30 logos in 30 days" process campaign raised expectations; final Optima wordmark had bad kerning and dated bevels; process investment exceeded output quality.
- Trip-wire: CastWorks wordmark released without manual kerning verification at primary usage sizes.
- Detection: Print wordmark at business-card size, website header size (32px equivalent), and presentation heading size. Zoom in. Check: W-o, W-a, s-t, r-k pairs. Uneven air between pairs = requires correction.
- Source: failure-modes TT-3; corrections BA-03.

**TW-07 — The Neumorphism / Glassmorphism trap: interactive states indistinguishable in grayscale**
- Named case: Neumorphism trend 2020–2021 — entire design language built on shadow-depth state changes falling below WCAG 1.4.11 3:1 non-text contrast minimum. Failed mainstream adoption for accessibility reasons.
- Trip-wire: Any interactive state (hover, active, disabled, focus) differentiated only by shadow depth, transparency, or slight color shift.
- Detection: Convert every interactive state to grayscale. If two states (e.g., enabled vs. disabled button) are indistinguishable without color, add a secondary differentiator.
- Source: failure-modes CT-5, INT-3.

**TW-08 — The Burberry / ultra-thin font trap: weight 100–200 that passes hex contrast but fails rendered legibility**
- Named case: Documented by W3C and Penn State: thin-stroke fonts at body sizes produce rasterization that reduces effective contrast below 4.5:1 even when hex values pass.
- Trip-wire: Any font weight below 400 at sizes below 24px.
- Detection: View rendered text at 100% zoom on a non-retina display. If legibility requires knowing what the text says, the weight is too thin.
- Source: failure-modes TT-1, AT-1.

**TW-09 — The 2010s SaaS template trap: hero illustration + gradient + three-feature row + CTA**
- Named case: Intercom, HubSpot, Mailchimp hero pattern 2014–2020; became a category signal rather than a brand signal. Signals "SaaS with a free tier" — wrong mental model for a service brand.
- Trip-wire: CastWorks hero with 2+ of: (a) hero illustration, (b) gradient background, (c) three-feature row, (d) single above-fold CTA in a pill button.
- Detection: Screenshot the hero. Count the pattern elements. Two or more = the combination signals the 2015 template regardless of individual execution quality.
- Source: failure-modes LT-2.

**TW-10 — The orb-gradient hero trap: dark background + radial gradient orbs as "innovation" signal**
- Named case: Linear, Vercel aesthetic 2021–2022; absorbed into shadcn/ui and Aceternity templates by 2023; now encodes "built fast from a template" rather than "thought carefully."
- Trip-wire: Any near-black hero (#0a0a0a–#1a1a1a) with radial-gradient elements in cyan, teal, violet, or green.
- Detection: Search CSS for radial-gradient combined with backgrounds darker than #1a1a1a. If found, replace.
- Source: failure-modes CT-3.

**TW-11 — The AI purple default trap: category-median color palette**
- Named case: Tailwind's `bg-indigo-500` default flooded tutorial codebases from 2019; LLMs now reproduce purple gradients as the median of "modern tech design." Purple no longer differentiates.
- Trip-wire: Purple, indigo, or violet as CastWorks primary or secondary web palette without documented strategic rationale.
- Detection: Screenshot 20 B2B service competitors. Count purple-family primary palettes. If above 5, document the specific strategic rationale for the choice or change the color.
- Source: failure-modes CT-1.

**TW-12 — The scroll-jacking trap: native scroll control overridden**
- Named case: Agency portfolio sites 2013–2018; NN/g documented increased bounce rates and "disorientation and frustration"; Get Started International: "Scrolljacking Is Evil."
- Trip-wire: Any `preventDefault()` on scroll/wheel events; fullPage.js or ScrollMagic section-snap behavior.
- Detection: Check JavaScript event listeners for wheel, touchmove, or pointer events with `preventDefault()`. Flag any full-page section-snap library.
- Source: failure-modes LT-3.

**TW-13 — The competing CTAs trap: Hick's Law applied to a decision that should be obvious**
- Named case: CXL research — reducing CTA choice raises primary conversion. Multiple equal-weight CTAs imply the site operator is uncertain about what the visitor should do.
- Trip-wire: Two or more CTAs with identical visual weight (same fill, size, and color) in the same hero or section.
- Detection: Identify every CTA. Assign a priority rank. If any two CTAs share the same visual treatment, demote the lower-priority one to outline or text-link style.
- Source: failure-modes LT-4.

**TW-14 — The long form trap: forms with 6+ required fields filtering for patience, not fit**
- Named case: Baymard-adjacent research — each additional field reduces conversion by ~4.1%. Forms with 5+ fields in B2B record a 30% conversion decrease. A VP with a decision to make in 30 days will not fill out a 10-field form if a competitor has 3 fields.
- Trip-wire: Contact or inquiry form with more than 5 required fields.
- Detection: Count required fields. Audit each for deferability to the intake call.
- Source: failure-modes LT-7.

**TW-15 — The company-centered hero trap: capability claim instead of buyer transformation**
- Named case: Colony Spark research — 19% lift in qualified demo requests from switching hero copy to buyer-narrative-centered language. "So what?" test.
- Trip-wire: Hero headline that opens with the company's identity, credentials, or capability rather than the buyer's current problem or desired state.
- Detection: Read the hero headline. Say "so what?" aloud. If the answer to "so what?" is not already in the headline, rewrite.
- Source: failure-modes CPT-2.

**TW-16 — The vague transformation language trap: hero copy that could describe any B2B service**
- Named case: Colony Spark cites 28% lift in lead-to-opportunity conversion from specific outcome language vs. vague transformation claims. NN/g documents the 5–8 second departure window.
- Trip-wire: Any of: empower, transform, elevate, unlock, seamless, end-to-end, innovative, best-in-class in above-fold copy.
- Detection: Search for each word. Rewrite each instance as a specific outcome. If the rewrite reveals nothing specific, the sentence has no content.
- Source: failure-modes CPT-1.

**TW-17 — The stock-image credibility collapse: recognized images undermine adjacent copy**
- Named case: WebsiteDesigners.com research — recognized stock images undermine adjacent copy. "75% of users judge credibility based on website design." Stock images of people are widely distributed and recognizable.
- Trip-wire: Any person-featuring photography that is not original.
- Detection: Reverse image search every person-featuring image. Fail if found on other sites.
- Source: failure-modes IT-1.

**TW-18 — The editorial-but-empty trap: quiet luxury palette without content density to fill it**
- Named case: Industry documentation 2024–2025 — Stripe Press and Anthropic use extreme white space because they have extreme content density. An unproven brand using the same palette reads as "not much to say."
- Trip-wire: Near-monochrome CastWorks palette combined with fewer than 8 distinct substantive content elements on the homepage.
- Detection: Count unique claims, specific outcomes, credentials, evidence items. If below 8, reduce margins or add content. Do not deploy the restraint aesthetic against an empty page.
- Source: failure-modes LT-6, CT-6; corrections L-02.

---

## Section 4 — CastWorks-specific annex

This section contains preferences and rules tagged [LIKELY PERSONAL] or [LIKELY PERSONAL / UNCERTAIN] in the corrections corpus. These are not portable design standards. They are specific to CastWorks's positioning, Egg's taste, or the current stage of the business. Future projects should not inherit this section without deliberate review.

**Each entry notes whether it is Egg-specific (aesthetic preference) or CastWorks-positioning-specific (follows from the service-not-SaaS positioning or the editorial register).**

---

### Brand Palette

**CW-01 — Primary dark: deep forest teal #1F3A34. Primary light: cream #F4F0E8.**
- Type: CastWorks-positioning-specific (editorial premium register, ownable in the category, survives monochrome).
- Source: corrections C-01.

**CW-02 — The SaaS blue #335CFF is explicitly retired. Do not use saturated blue as an accent.**
- Type: CastWorks-positioning-specific.
- Source: corrections C-01.

**CW-03 — Dark sections (#1F3A34 module) used sparingly — one per page at most. Light base for all other sections.**
- Type: CastWorks-positioning-specific. Dark-module impact requires scarcity.
- Source: corrections C-03.

**CW-04 — Nav background: always-on warm fill rgb(242 238 229), not transparent. Hairline rule border.**
- Type: CastWorks-specific (single-scroll page with animated hero makes transparent nav unreadable). This rule may not apply on sites without a full-bleed animated hero.
- Source: corrections C-04.

---

### Typography

**CW-05 — Instrument Serif (display) + Inter (body, weights 400/500/600 only). Inter 300 and 700 removed.**
- Type: CastWorks-positioning-specific. This specific pairing is locked.
- Source: corrections T-01, T-03.

**CW-06 — Hero/display text: 72–96px. Body text: 18px. Large gap, minimal intermediate competing sizes.**
- Type: Egg-specific / CastWorks editorial register. Intermediate headline sizes (24–48px) competing with the hero are explicitly rejected.
- Source: corrections T-02.

**CW-07 — No rounded tech-serifs (Recoleta, Fraunces in casual styles) for brand-facing typography.**
- Type: Egg-specific aesthetic. The test: "serious in print, survives monochrome."
- Source: corrections T-05.

**CW-08 — Tear-sheet mocks use Instrument Serif on off-white card surface — not sans-serif on white.**
- Type: CastWorks-positioning-specific (deliverable = document, not dashboard).
- Source: corrections T-06.

---

### Copy voice

**CW-09 — Drop "AI" from all brand-facing copy. Use capability/work-replacement language instead.**
- Type: CastWorks-positioning-specific. "Our AI" = SaaS signal. "The work that used to take a sourcing analyst per creator now runs through our own tooling" = service signal.
- Source: corrections CV-03.

**CW-10 — Service voice: "we operate / we source / we deliver" — not "our platform / our engine / our tool."**
- Type: CastWorks-positioning-specific. Ctrl-find "platform," "engine," "tool" in brand-facing text. Rewrite as service action.
- Source: corrections CV-04.

**CW-11 — Verify four locks before drafting public copy: tagline, vertical, deliverable, pricing model.**
- Type: CastWorks-specific (startup in active commercial iteration with a history of copy written against stale locks).
- Source: corrections CV-08.

---

### Layout and structure

**CW-12 — Site architecture: splash gateway (full-bleed animation, wordmark, headline, CTA) + sub-pages (methodology, intake, about, sample). Not single long-scroll.**
- Type: CastWorks-specific. This architecture suits warm-lead audiences with prior context. Single-scroll is better for cold traffic.
- Source: corrections L-04.

**CW-13 — No "Built in [city]" or geographic markers in brand-facing copy or footer at pre-revenue stage.**
- Type: Egg-specific / stage-specific. Revisit when entity and physical presence are locked.
- Source: corrections L-05.

**CW-14 — Footer: brand identity left, nav links + contact email right, copyright row below. Warm background, hairline rules.**
- Type: CastWorks-specific canonical editorial footer layout.
- Source: corrections L-06.

**CW-15 — No pricing on the public website.**
- Type: CastWorks-specific (variable project-based pricing, negotiation flexibility required).
- Source: corrections CTA-04.

---

### Imagery and visual style

**CW-16 — Imagery: line-art illustrative only. No stock photography. No abstract floating orbs or gradient mesh backgrounds.**
- Type: CastWorks-positioning-specific. "Every visual should be unambiguously ours."
- Source: corrections IV-02.

**CW-17 — No product UI mockups, dashboard screenshots, or "see the engine" visuals in brand-facing assets.**
- Type: CastWorks-positioning-specific (service brand does not show the tool; it shows the deliverable).
- Source: corrections IV-03.

**CW-18 — Fictional brand names for mocks: Veridian, Hark, Loam Co. Use consistently across all deliverable previews.**
- Type: CastWorks-specific. These names are established; do not introduce new ones without documenting them.
- Source: corrections IV-06.

---

### Brand assets

**CW-19 — Wordmark-led identity. Standalone symbol work deferred until the wordmark has built equity.**
- Type: CastWorks-positioning-specific. This is also a general principle for pre-Series-A B2B brands (corrections BA-01, BA-02), but the specific deferral decision is CastWorks-stage-specific.
- Source: corrections BA-01, BA-02.

**CW-20 — Compass mark verbal claim: "method that surveys outward and converges to a point." This is the anti-generic test for any future mark iteration.**
- Type: CastWorks-specific. The compass mark (cardinal-hierarchy radial, 4 long cardinal rays + 4 short ordinal rays + center dot, deep teal) is locked. Stroke weight 35 + dot r=38 for favicon contexts.
- Source: corrections BA-06, BA-05.

**CW-21 — Interaction / animation: cursor as attractor, not repeller. No cooldowns for continuous behaviors. Multiple concurrent cycles before adding new motion primitives.**
- Type: Egg-specific / CastWorks-specific. Relevant to the splash canvas animation.
- Source: corrections IV-07, UX-02, UX-03.

---

## Section 5 — Sources index

| Source | What it is | When to consult directly |
|--------|-----------|--------------------------|
| `corrections-corpus.md` | 65 session-derived corrections across 10 categories, tagged LIKELY UNIVERSAL / LIKELY PERSONAL / UNCERTAIN. | When a rule in this rubric feels too broad or too narrow for a specific CastWorks situation. Look up the original entry for fuller context and the "how to apply" guidance. |
| `brand-books-rubric.md` | ~340 rules from 7 design systems (Mailchimp, Polaris, Carbon, GOV.UK, BBC GEL, Atlassian, Material 3). Synthesis section extracts 31 cross-cutting rules. | When an accessibility, semantic markup, or voice-and-tone rule needs chapter-and-verse backing. The Synthesis section (S1–S31) is the primary reference; individual system sections supply the full specifics. |
| `design-canon-rubric.md` | 118 rules from 8 canonical texts (Bringhurst, Müller-Brockmann, Refactoring UI, Butterick, Vignelli, Tufte, Spiekermann, Simmons/Andrew + WCAG). 19 cross-source agreements. | When a typography, grid, or visual restraint rule needs the deepest technical grounding. Section F (When Rules Break) is the reference for documenting permitted deviations from canon rules. |
| `failure-modes.md` | 49 named failure cases with quantified outcomes, organized as pre-flight trip-wires. | When designing or evaluating a major structural or positioning decision (brand mark change, hero layout, copy direction). Read the full entry for the named case before making the call. |

---

*End of rubric. Version 1.0 — 2026-05-08.*
*Update trigger: append a versioned entry at the top of this file when a new correction, failure mode, or cross-project learning warrants rubric revision. Do not edit rules in place without noting the revision.*
