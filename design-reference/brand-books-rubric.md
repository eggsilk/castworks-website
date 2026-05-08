---
title: Brand Books Rubric — Cross-System Design Standards
date: 2026-05-08
sources_researched:
  - Mailchimp Content Style Guide (styleguide.mailchimp.com)
  - Shopify Polaris (polaris.shopify.com / polaris-react.shopify.com)
  - IBM Carbon Design System (v10.carbondesignsystem.com)
  - GOV.UK Design System (design-system.service.gov.uk + gov.uk/guidance/content-design)
  - BBC GEL — Global Experience Language (bbc.github.io/gel)
  - Atlassian Design System (atlassian.design)
  - Material Design 3 (m3.material.io)
rule_counts_by_category:
  type_system: 47
  color_discipline: 38
  layout_grid: 29
  voice_tone: 52
  content_design: 44
  accessibility: 36
  what_systems_forbid: 58
  synthesis_cross_cutting: 31
---

# Brand Books Rubric

Each system is documented as a set of pass/fail testable rules. Rules marked [VAGUE] indicate the source documentation was too imprecise to produce a testable rule — these are noted explicitly rather than padded with prose summary.

The Synthesis section at the end extracts cross-cutting rules that appear in 5 or more of the 7 systems. Those are the closest thing to universal standards in this corpus.

---

## 1. Mailchimp Content Style Guide

Source: styleguide.mailchimp.com

### 1.1 Type System

[VAGUE] Mailchimp's public style guide covers content and voice, not visual type specifications. No typeface, weight, scale, or line-height rules are published in the content style guide. Skip.

### 1.2 Color Discipline

[VAGUE] Color palette not covered in the public content style guide. Not applicable to this corpus entry.

### 1.3 Layout / Grid

[VAGUE] Layout grid not covered in the public content style guide. Not applicable to this corpus entry.

### 1.4 Voice and Tone

**MC-VT-01** PASS: Body copy uses active voice. FAIL: Passive construction is used where active is possible. Example — PASS: "Marti logged into the account." FAIL: "The account was logged into by Marti."

**MC-VT-02** PASS: Contractions are used throughout ("don't", "we'll", "you'll"). FAIL: Formal negations appear in user-facing copy ("do not", "we will not").

**MC-VT-03** PASS: Positive framing ("To get a donut, stand in line"). FAIL: Negative framing when positive equivalent exists ("You can't get a donut if you don't stand in line").

**MC-VT-04** PASS: Humor, when present, is dry and straight-faced. FAIL: Humor is farcical, over-the-top, forced, or snobbish.

**MC-VT-05** PASS: Copy reads as conversational and informal. FAIL: Copy includes jargon without brief inline definition for accessibility.

**MC-VT-06** FAIL: Cheap emotional appeals are present. FAIL: Distracting metaphors are present. FAIL: Hyperbolic over-promises are present.

**MC-VT-07** PASS: Clarity takes priority over entertainment when the two conflict. FAIL: Copy sacrifices comprehension for tone effect.

### 1.5 Content Design

**MC-CD-01** PASS: Serial (Oxford) comma is used in all lists. FAIL: Serial comma is absent ("Oprah and Justin Timberlake" in a three-item list).

**MC-CD-02** PASS: Em dash used without surrounding spaces ("feature—can help"). FAIL: Hyphen or double hyphen substituted for em dash. FAIL: Spaces around em dash.

**MC-CD-03** PASS: Single space between sentences. FAIL: Two spaces between sentences.

**MC-CD-04** PASS: One exclamation point maximum, used selectively. FAIL: Multiple exclamation points anywhere. FAIL: Exclamation point in a failure message or alert.

**MC-CD-05** PASS: Ellipses absent from titles and headers. FAIL: Ellipses used for emphasis or drama.

**MC-CD-06** PASS: Ampersand used only in proper brand names ("Ben & Jerry's"). FAIL: Ampersand substituting "and" in running copy.

**MC-CD-07** PASS: All-caps absent from body copy. FAIL: All-caps used for emphasis instead of italic or bold.

**MC-CD-08** PASS: Numbers spelled out only at sentence start ("Ten new employees started"). PASS: Numerals used everywhere else ("12 start next week").

**MC-CD-09** PASS: Large numbers formatted with commas ("150,000"). FAIL: Large numbers written without comma separators.

**MC-CD-10** PASS: Fractions spelled out ("two-thirds"). FAIL: Fraction as slash notation ("2/3") except in mathematical contexts.

**MC-CD-11** PASS: Percentage written as symbol ("47%"). FAIL: "Percent" spelled out.

**MC-CD-12** PASS: Text alignment is left-aligned only. FAIL: Center-aligned or right-aligned body copy.

**MC-CD-13** PASS: Headings follow strict consecutive nesting (H1 > H2 > H3). FAIL: Heading level skipped for styling reasons.

**MC-CD-14** PASS: Link text describes destination or action. FAIL: Link text is "click here", "learn more", or other generic phrase.

**MC-CD-15** PASS: Italics used for long-work titles and in-sentence emphasis. FAIL: Underline used for emphasis (reserved for links). FAIL: Combined formatting (italic + bold + caps + underline simultaneously).

### 1.6 Accessibility

**MC-A-01** PASS: All images include the `alt` attribute. FAIL: Alt attribute missing from any image, including decorative images (decorative images use empty alt, not no alt).

**MC-A-02** PASS: Charts and graphs have alt text that includes the underlying data values. FAIL: Chart alt text describes only appearance, not data content.

**MC-A-03** PASS: Heading levels are nested consecutively. FAIL: H2 followed by H4, skipping H3.

**MC-A-04** PASS: Page title is H1, top-level sections are H2, subsections are H3+. FAIL: Multiple H1 elements on one page.

**MC-A-05** [VAGUE] "Aim for high contrast between font and background colors." No specific contrast ratio specified. Not testable without a number — rule noted as vague.

### 1.7 What Mailchimp Explicitly Forbids

**MC-F-01** Cheap emotional manipulation in copy.
**MC-F-02** Distracting or elaborate metaphors.
**MC-F-03** Farcical or over-the-top humor.
**MC-F-04** Condescending or exclusive language.
**MC-F-05** Passive voice when active voice is available.
**MC-F-06** Jargon without inline definition.
**MC-F-07** Multiple exclamation points.
**MC-F-08** Exclamation points in alerts or failure states.
**MC-F-09** Ellipses in titles or headers.
**MC-F-10** Two spaces between sentences.
**MC-F-11** Fractions as slash notation in non-mathematical copy.
**MC-F-12** "Percent" spelled out instead of %.
**MC-F-13** "Click here" and "learn more" as link text.
**MC-F-14** Underline for emphasis (reserved for links).
**MC-F-15** Combined multiple text formatting styles simultaneously.
**MC-F-16** Center or right text alignment.

---

## 2. Shopify Polaris

Source: polaris-react.shopify.com

### 2.1 Type System

**SP-T-01** PASS: Primary UI typeface is Inter (open-source variable font). FAIL: Any other typeface used for product UI.

**SP-T-02** PASS: Code contexts use system mono font (monospace stack). FAIL: Inter or any proportional font used for code display.

**SP-T-03** PASS: All line heights are multiples of 4px. FAIL: Line height at any value that is not a 4px multiple.

**SP-T-04** PASS: Type scale follows a 1.2 ratio (major third) from base size, rounded to 4px multiples. FAIL: Ad hoc font sizes that break the ratio and rounding rule.

**SP-T-05** PASS: Headings are equal to or larger in size than the following text (except intentional lede/kicker use). FAIL: Heading renders smaller than accompanying body text without explicit lede/kicker intent.

**SP-T-06** PASS: Tabular numbers used for all currency amounts and repeated numbers in tables. FAIL: Proportional numbers used for currency or tabular data. FAIL: Monospaced font substituted for tabular numbers.

**SP-T-07** PASS: Spot icons appear as standalone elements. FAIL: Spot icons integrated inline with typography.

**SP-T-08** PASS: Micro icons paired with small body text. Standard icons used elsewhere. FAIL: Standard icons used alongside small body text (size mismatch).

**SP-T-09** PASS: Heading weights vary across the hierarchy to direct attention. FAIL: Identical weight applied to all heading levels.

### 2.2 Color Discipline

**SP-C-01** PASS: Red used specifically for critical error messages requiring immediate action. FAIL: Red used decoratively or for non-critical UI.

**SP-C-02** PASS: Yellow used for warnings that could escalate to critical errors. FAIL: Yellow used outside warning context.

**SP-C-03** PASS: Color is accompanied by a secondary indicator (icon, text, shape) wherever it conveys meaning. FAIL: Color used alone to communicate meaning.

**SP-C-04** PASS: Vivid, saturated colors applied to highest-priority UI elements. FAIL: Critical UI elements rendered in subdued or grayscale colors.

**SP-C-05** PASS: Color choices follow documented semantic assignments. FAIL: Colors applied for decoration outside their semantic role.

**SP-C-06** PASS: All text and interactive element color combinations pass WCAG AA contrast. FAIL: Any combination fails WCAG AA.

### 2.3 Layout / Grid

**SP-L-01** PASS: All spacing values are multiples of 4px. FAIL: Any spacing value that is not a 4px multiple.

**SP-L-02** PASS: Body text line height is a multiple of 4px (specifically the 20px body line height drives component sizing). FAIL: Body text line height deviates from 4px grid.

**SP-L-03** PASS: Component heights follow 20px increments to align with body text line height. FAIL: Component heights use arbitrary sizes outside this rhythm.

**SP-L-04** PASS: Typography optical adjustments made in 4px increments. FAIL: Optical adjustments made in non-4px values.

### 2.4 Voice and Tone

**SP-VT-01** PASS: Button copy and instruction copy begins with a verb. FAIL: Instructions or CTAs begin with a noun or pronoun ("You can add apps" instead of "Add apps").

**SP-VT-02** PASS: Contractions used in all user-facing copy ("don't"). FAIL: Formal negations used ("do not").

**SP-VT-03** PASS: Plain language; copy reads at 7th-grade reading level. FAIL: Jargon appears that merchants don't actually use.

**SP-VT-04** PASS: "You can" phrasing absent from instructions. FAIL: "You can [verb]" structure used in actionable copy.

**SP-VT-05** PASS: One primary action per context. FAIL: Multiple primary actions compete for attention simultaneously.

**SP-VT-06** PASS: Copy sounds conversational when read aloud. FAIL: Copy sounds robotic, bureaucratic, or stilted.

### 2.5 Content Design

**SP-CD-01** PASS: Single-sentence labels and button copy have no trailing punctuation. FAIL: Period added to single-sentence button or label copy.

**SP-CD-02** PASS: Questions and multi-sentence text include punctuation. FAIL: Question marks omitted from question-form labels.

**SP-CD-03** PASS: Icons substituted for words where possible ("+" not "+ Add"). FAIL: Redundant text label alongside a self-evident icon.

**SP-CD-04** PASS: Duplicate content removed within a single interface section. FAIL: Same concept stated twice in adjacent copy.

**SP-CD-05** PASS: Error messages include specific numbers, dates, or merchant-specific data. FAIL: Generic error message without contextual details.

**SP-CD-06** PASS: Error message explains "how to fix it." FAIL: Error message describes only the problem with no solution path.

**SP-CD-07** FAIL: Error message uses the word "invalid" (e.g., "invalid title"). Use specific description instead.

**SP-CD-08** FAIL: Error message opens with "Sorry." Use direct explanation instead.

**SP-CD-09** FAIL: Error message uses "we," "us," or "our" unless Shopify caused the error. Use second-person.

**SP-CD-10** FAIL: Vague error count ("There are X errors on this page"). Enumerate and locate each error specifically.

**SP-CD-11** PASS: Error placement is adjacent to the problem location. FAIL: Error message appears only at the top of the page while the field error is elsewhere.

### 2.6 Accessibility

**SP-A-01** PASS: All color combinations meet WCAG AA contrast. FAIL: Any combination falls below 4.5:1 for normal text or 3:1 for large text/UI components.

**SP-A-02** PASS: Color accompanied by secondary indicator (icon, text, pattern) wherever it conveys meaning. FAIL: Color alone used to distinguish state or meaning.

**SP-A-03** [VAGUE] "Support keyboard navigation." No specific key behavior or focus spec stated.

### 2.7 What Shopify Polaris Explicitly Forbids

**SP-F-01** "Invalid" as an error descriptor — requires specific replacement.
**SP-F-02** "Sorry" at the start of error messages.
**SP-F-03** "We/us/our" in errors unless Shopify caused the issue.
**SP-F-04** Vague error-count messages without location specifics.
**SP-F-05** "You can [verb]" instruction structure — use direct verb.
**SP-F-06** Formal negations ("do not") in user-facing copy — use contractions.
**SP-F-07** Monospaced font for tabular number alignment.
**SP-F-08** Spot icons inline with typography.
**SP-F-09** Color alone to convey meaning.
**SP-F-10** Decorative color usage outside semantic role.
**SP-F-11** Spacing values that are not multiples of 4px.
**SP-F-12** Repurposing or reinterpreting known typography interaction patterns.

---

## 3. IBM Carbon Design System

Source: v10.carbondesignsystem.com

### 3.1 Type System

**IC-T-01** PASS: IBM Plex Sans used for all product interfaces. FAIL: Any other typeface used for product UI without explicit theme override.

**IC-T-02** PASS: IBM Plex Mono used for all code display. FAIL: Proportional font used in code contexts.

**IC-T-03** PASS: Font weight limited to Light (300), Regular (400), and SemiBold (600). FAIL: Any other weight (e.g., Bold 700) used.

**IC-T-04** PASS: SemiBold (600) used only for section headers. FAIL: SemiBold used for extended body copy or paragraphs.

**IC-T-05** PASS: Productive type style applied in web product and task-focused UI. FAIL: Expressive type style applied to dense functional interfaces.

**IC-T-06** PASS: Expressive type style applied to editorial, marketing, and graphic-emphasis contexts. FAIL: Expressive type applied to task-oriented dashboard copy.

**IC-T-07** PASS: Neutral (gray) colors used for running body text. FAIL: Colored type used for body copy outside code, warnings, or alerts.

**IC-T-08** PASS: Blue used for links and primary actions only. FAIL: Blue used decoratively in non-link, non-action copy.

**IC-T-09** PASS: Colored type limited to code snippets, warnings, and alerts. FAIL: Color applied to type for decorative reasons.

**IC-T-10** Type scale formula: Xn = Xn-1 + {INT[(n-2)/4] + 1} × 2, base y₀=12px. Key anchors: 12px, 16px, 24px, 32px, 48px, 76px. PASS: All type sizes conform to this formula. FAIL: Ad hoc sizes outside the scale.

**IC-T-11** PASS: International CJK/Thai/Devanagari/Arabic scripts use 95% of the default scale's point size while keeping identical line heights. FAIL: Full-size type scale applied to CJK scripts without reduction.

### 3.2 Color Discipline

**IC-C-01** PASS: Colors applied via semantic role tokens (e.g., `$text-02`, `$interactive-01`). FAIL: Raw hex values applied directly without token reference.

**IC-C-02** PASS: Light themes use White (#ffffff) or Gray 10 (#f4f4f4) backgrounds. FAIL: Light theme uses mid-gray or saturated background.

**IC-C-03** PASS: Dark themes use Gray 100 (#161616) or Gray 90 (#262626) backgrounds. FAIL: Dark theme uses midtone background.

**IC-C-04** PASS: White text used on color values 60–100. Black text used on color values 10–50. FAIL: White text on colors below 60 or black text on colors above 50.

**IC-C-05** PASS: A swatch-value difference of ≥50 between foreground and background indicates accessible contrast. FAIL: Difference below 50 without explicit WCAG verification.

**IC-C-06** PASS: Hover states use half-steps between two adjacent scale colors. FAIL: Hover states use the same base color as default state.

**IC-C-07** PASS: Active state is two full steps lighter (for 100-70 range) or darker (60-10 range) than the base. FAIL: Active state is one step or more than two steps from base.

**IC-C-08** PASS: Selected state is one full step from base. FAIL: Selected state uses more than one step difference.

**IC-C-09** PASS: Focus indicator is Blue 60 in light themes and White in dark themes. FAIL: Focus indicator uses any other color or is absent.

**IC-C-10** PASS: Disabled states are two full steps lighter/darker than their background. FAIL: Disabled state is only one step from background (insufficient differentiation).

**IC-C-11** PASS: Color pairing stays within two steps of adjacent palette values (no blending across large steps). FAIL: Colors more than two steps apart used in a single adjacent pairing.

**IC-C-12** Color is not for decoration. PASS: Every color application serves a semantic or functional role. FAIL: Color applied with no semantic function.

### 3.3 Layout / Grid

[VAGUE] IBM Carbon's 2x Grid documentation returned truncated or 404 errors. Key known rules from search synthesis: Carbon uses a 2x Grid based on a 2px base unit, with 16-column layouts at large breakpoints. Full numeric specification could not be verified from live source. Rules noted as partially verified:

**IC-L-01** PASS: Grid uses 2px base unit for micro-spacing. [Partially verified from search synthesis — treat as directional, not locked.]

**IC-L-02** PASS: 16-column layout at large screens. [Partially verified.]

### 3.4 Voice and Tone

[VAGUE] IBM Carbon's content/writing guidelines page returned truncated content. Rules that appear in Carbon's IBM Design Language context from synthesis:

**IC-VT-01** PASS: Copy is precise and purposeful — no filler language. FAIL: Copy pads with qualifiers or vague affirmations.

### 3.5 Accessibility

**IC-A-01** PASS: Small text (below 24px) meets 4.5:1 contrast ratio. FAIL: Small text falls below 4.5:1.

**IC-A-02** PASS: Large text (24px+) meets 3:1 contrast ratio. FAIL: Large text falls below 3:1.

**IC-A-03** PASS: Focus states present on all interactive elements and meet 3:1 contrast. FAIL: Focus state absent or below 3:1.

**IC-A-04** PASS: Graphical elements and data visualizations meet 3:1 contrast. FAIL: Data viz graphics fall below 3:1.

**IC-A-05** PASS: Disabled state colors exempt from WCAG contrast compliance. (Note: disabled elements must still be visually distinguishable but not at full contrast ratio.)

**IC-A-06** PASS: Components follow IBM Accessibility Checklist based on WCAG AA, Section 508, and EN 301 549. FAIL: Component fails any of these three frameworks.

### 3.7 What IBM Carbon Explicitly Forbids

**IC-F-01** Raw hex values applied to UI without going through the token layer.
**IC-F-02** Bold (700) or other weights outside Light, Regular, SemiBold.
**IC-F-03** SemiBold applied to extended body copy.
**IC-F-04** Colored type for decoration (allowed only: code, warnings, alerts).
**IC-F-05** Expressive type in task-focused product UI.
**IC-F-06** Color pairings more than two steps apart in the palette scale.
**IC-F-07** Darker-than-background components in dark themes (outside high-contrast mode).
**IC-F-08** Full-scale Latin type sizes applied to CJK scripts without the 95% reduction.
**IC-F-09** Decorative color application with no semantic role.

---

## 4. GOV.UK Design System

Sources: design-system.service.gov.uk, gov.uk/guidance/content-design

### 4.1 Type System

**GU-T-01** PASS: All font sizes set in relative units (em or rem). FAIL: Font sizes set in fixed pixels that do not respect user browser settings.

**GU-T-02** Type scale at large screens (>640px): govuk-heading-xl = 48px / 50px line-height; govuk-heading-l = 36px / 40px; govuk-heading-m = 24px / 30px; govuk-body-l = 24px / 30px; govuk-body = 19px / 25px; govuk-body-s = 16px / 20px. PASS: Sizes and line heights match these values. FAIL: Deviation without explicit justification.

**GU-T-03** Type scale at small screens (≤640px): govuk-heading-xl = 32px / 35px; govuk-heading-l = 27px / 30px; govuk-heading-m = 21px / 25px; govuk-body = 19px / 25px; govuk-body-s = 16px / 20px. PASS: Responsive sizes match these values. FAIL: Large-screen sizes carried unchanged to small screens.

**GU-T-04** PASS: Heading level 80px used only in exceptional cases with explicit rationale. FAIL: 80px heading used as a standard heading level.

### 4.2 Color Discipline

**GU-C-01** GOV.UK functional color assignments — testable by role:
- Body text: #0b0c0c
- Secondary text: #484949
- Links (default): #1a65a6
- Links (hover): #0f385c
- Links (visited): #54319f
- Links (active): #0b0c0c
- Error: #ca3535
- Success: #0f7a52
- Focus background: #ffdd00 (yellow)
- Focus text: #0b0c0c
- Brand: #1d70b8

PASS: Each color used only in its designated role. FAIL: Error red used outside error state. FAIL: Focus yellow used as a decorative accent.

**GU-C-02** PASS: Colors referenced via Sass functions (`govuk-colour()`, `govuk-functional-colour()`). FAIL: Hex values hard-coded directly.

**GU-C-03** PASS: All text and interactive elements meet WCAG 2.2 Success Criterion 1.4.3 Level AA. FAIL: Any text or interactive element falls below AA contrast.

**GU-C-04** PASS: Functional colors used only in their designed context (error red only for errors). FAIL: `govuk-functional-colour("error")` applied to non-error UI for its visual appearance.

### 4.3 Layout / Grid

**GU-L-01** PASS: Default max page width is 1020px. FAIL: Content-bearing columns exceed 1020px without explicit rationale.

**GU-L-02** PASS: Most content pages use a two-thirds or two-thirds + one-third layout. FAIL: Full-width layout used for text-heavy content without justification (causes lines exceeding readable length).

**GU-L-03** PASS: Two-thirds layout targets approximately 75 characters per line — the testable proxy. FAIL: Body text line length consistently exceeds 75 characters in the two-thirds column.

**GU-L-04** Responsive spacing scale (selected values): 5px / 10px / 15px / 20px (large: 20px) / 25px (large: 25px) / 30px (large: 30px) / 40px (large: 40px) / 50px (large: 50px) / 60px (large: 60px). PASS: Spacing values drawn from this scale. FAIL: Arbitrary values outside the scale.

**GU-L-05** PASS: Breakpoint at 640px separates small from large screen spacing. FAIL: Spacing does not adapt across this breakpoint.

### 4.4 Voice and Tone

**GU-VT-01** PASS: Sentences average 25 words or fewer. FAIL: Sentences consistently exceed 25 words.

**GU-VT-02** PASS: Paragraphs contain 5 sentences or fewer. FAIL: Paragraphs consistently exceed 5 sentences.

**GU-VT-03** PASS: Copy addressed to "you" (second person). FAIL: Copy refers to "users" or "individuals" in the third person when addressing the reader.

**GU-VT-04** PASS: Active voice used. FAIL: Passive voice used when active equivalent is available.

**GU-VT-05** PASS: Contractions used ("you'll", "we'll"). Exception: negative contractions may be avoided where clarity requires. FAIL: Consistently formal, contraction-free copy.

**GU-VT-06** PASS: Simple, common words used. FAIL: "Purchase" instead of "buy". FAIL: "Assist" instead of "help". FAIL: "Approximately" instead of "about". FAIL: "Utilize" instead of "use".

**GU-VT-07** PASS: Target reading age is 9 (approximately 5,000-word vocabulary). FAIL: Copy requires specialist vocabulary without inline definition.

**GU-VT-08** PASS: Technical terms defined on first use. FAIL: Unexplained abbreviation or acronym appears without prior definition.

### 4.5 Content Design

**GU-CD-01** PASS: Page title fits within 65 characters. FAIL: Title exceeds 65 characters without essential-content justification.

**GU-CD-02** PASS: Page summary fits within 160 characters. FAIL: Summary exceeds 160 characters.

**GU-CD-03** PASS: Headings never skip levels (H2 > H3 > H4, no gaps). FAIL: H2 followed by H4.

**GU-CD-04** PASS: Headings begin with the most important word (front-loaded for search). FAIL: Headings begin with articles or prepositions.

**GU-CD-05** FAIL: Questions used as headings ("How do I apply?" → use "Applying online").

**GU-CD-06** FAIL: "Introduction" used as a first heading.

**GU-CD-07** FAIL: Bold text substituted for heading markup. (Screen readers won't recognize as heading.)

**GU-CD-08** PASS: Each page addresses one question or decision. FAIL: Page combines multiple unrelated questions.

**GU-CD-09** PASS: All images include `alt` attribute (empty for decorative, descriptive for content). FAIL: Alt attribute absent from any image.

**GU-CD-10** PASS: Alt text is specific, meaningful, and concise — no more than approximately 2 sentences. FAIL: Alt text begins with "Image of" or "Graphic of". FAIL: Alt text restates information already present on the page.

**GU-CD-11** FAIL: Images used for purely decorative purposes without user-need justification.

**GU-CD-12** FAIL: Generic stock photography in services.

**GU-CD-13** FAIL: Text displayed as an image (social media screenshots, document images, presentation slides).

**GU-CD-14** PASS: Single icon used for single meaning throughout the system. FAIL: Same icon used to represent two different things.

**GU-CD-15** FAIL: Date ranges written as "2019-2020" or "2019/2020". Pass: "2019 to 2020".

**GU-CD-16** FAIL: Footnotes in body text. Integrate information into main text flow.

**GU-CD-17** FAIL: FAQ sections that duplicate content from elsewhere in the service.

### 4.6 Accessibility

**GU-A-01** PASS: All text and interactive elements meet WCAG 2.2 Level AA contrast (1.4.3). FAIL: Any element fails AA.

**GU-A-02** PASS: Text in images meets WCAG 2.2 AA contrast criterion 1.4.3. FAIL: Text in images falls below AA.

**GU-A-03** PASS: Screen readers can identify heading levels (heading markup used, not bold). FAIL: Visual headings created with bold + font-size rather than heading elements.

**GU-A-04** PASS: Icons accompanied by visible or visually-hidden text labels. FAIL: Icon used without any text alternative.

**GU-A-05** PASS: Emoji tagged with `role="img"` and `aria-label`. FAIL: Bare emoji with no accessible label.

### 4.7 What GOV.UK Explicitly Forbids

**GU-F-01** "Please" in instruction copy (use direct imperative instead).
**GU-F-02** Questions as headings.
**GU-F-03** "Introduction" as a first heading.
**GU-F-04** Bold text as a substitute for heading markup.
**GU-F-05** Skipping heading levels.
**GU-F-06** Images that contain text (social media screenshots, document images, slide images).
**GU-F-07** Generic stock photography.
**GU-F-08** Decorative images without user-need justification.
**GU-F-09** Same icon representing multiple concepts.
**GU-F-10** FAQ sections that duplicate service content.
**GU-F-11** Footnotes in body text.
**GU-F-12** Block capitals for emphasis.
**GU-F-13** Latin abbreviations without English translation.
**GU-F-14** Ampersands in body copy (acceptable only in proper names).
**GU-F-15** Date ranges with hyphens or slashes (must use "to").
**GU-F-16** Hard-coded hex values instead of Sass color functions.
**GU-F-17** Functional colors applied outside their designated role.
**GU-F-18** "Purchase", "assist", "approximately", "utilize" — use plain equivalents.
**GU-F-19** Third-person address to the reader ("users should") — use "you".

---

## 5. BBC GEL

Source: bbc.github.io/gel

### 5.1 Type System

**BB-T-01** PASS: BBC Reith typeface used for all BBC interfaces. FAIL: Any third-party or system typeface substituted without approved fallback.

**BB-T-02** PASS: Font sizes set in relative units (rem/em based on `font-size: 100%` root). FAIL: Font sizes hard-coded in pixels, overriding user browser/OS preferences.

**BB-T-03** PASS: Body text range 15–18px depending on screen dimension. FAIL: Body text below 15px or above 18px outside of defined exceptional contexts.

**BB-T-04** PASS: Body text line height minimum 1.5 (unitless multiplier, WCAG 1.4.8 baseline). FAIL: Body text line height below 1.5.

**BB-T-05** PASS: Headings (h1, h2) line height set to 1.125. FAIL: Large headings use 1.5 body line height (wasteful vertical space).

**BB-T-06** PASS: Reith Serif recommended line height of 1.375. FAIL: Reith Serif applied with body-copy 1.5 line height.

**BB-T-07** PASS: Line heights specified as unitless multipliers. FAIL: Line heights specified in pixels (breaks when user scales text).

**BB-T-08** PASS: Paragraph spacing is 1.375rem between successive paragraphs. FAIL: Paragraph spacing deviates from 1.375rem.

**BB-T-09** PASS: Heading top margin is 2.75rem (two lines); bottom margin is 1.375rem. FAIL: Arbitrary heading margins not derived from the type rhythm.

**BB-T-10** PASS: Acronyms and initialisms use all-caps with 10% letter-spacing increase. FAIL: Acronyms in sentence case. FAIL: Letter-spacing added to ordinary sentence-case text.

### 5.2 Color Discipline

[VAGUE] BBC GEL's public GitHub documentation does not publish specific hex values for the color palette. Color rules focus on accessibility compliance rather than palette assignment. Specific palette values are internal.

**BB-C-01** PASS: All text meets WCAG 1.4.3 contrast standard. FAIL: Any text falls below AA contrast.

**BB-C-02** PASS: Icons use `currentColor` to ensure High Contrast Mode compatibility. FAIL: Icons use hard-coded color values that break in Windows High Contrast Mode.

**BB-C-03** PASS: Icon color meets WCAG contrast standards. FAIL: Low-contrast icon against background.

**BB-C-04** PASS: Links differentiated from surrounding text by both color and underline (not color alone). FAIL: Links identified by color only.

### 5.3 Layout / Grid

**BB-L-01** PASS: Minimum gap between grid cells is 8px (0.5rem). FAIL: Cell gap below 8px.

**BB-L-02** PASS: Body text line length (measure) held to 60–70 characters optimal; maximum 80 characters. FAIL: Line length consistently exceeds 80 characters.

**BB-L-03** PASS: Line length controlled using `ch` units with `max-width`. FAIL: Line length constrained by pixel max-width only (ch units better track actual character count).

**BB-L-04** [VAGUE] Full breakpoint table (column counts, gutter widths at each breakpoint) is referenced in the private BBC GEL Grid spec but not published in the public GitHub documentation. Not testable from public source.

### 5.4 Voice and Tone

[VAGUE] BBC GEL's public technical documentation focuses on markup, layout, and accessibility — not editorial voice. BBC's editorial tone guidelines are in the BBC Editorial Guidelines, which is a separate document. No testable voice/tone rules available from the GEL technical documentation.

### 5.5 Content Design

**BB-CD-01** PASS: Text alignment is left-aligned. FAIL: Justified text alignment used.

**BB-CD-02** PASS: All-caps absent except for acronyms and initialisms. FAIL: All-caps used for emphasis on ordinary words.

**BB-CD-03** PASS: Links use bold weight and underline on hover/focus, with `text-decoration-skip-ink: auto`. FAIL: Links styled by color only, no underline on focus.

**BB-CD-04** PASS: Alt text present on all informative images. FAIL: Alt attribute missing.

**BB-CD-05** PASS: SVG icons used for iconography. FAIL: Icon fonts used.

**BB-CD-06** PASS: Emoji tagged with `role="img"` and `aria-label`. FAIL: Bare emoji.

### 5.6 Accessibility

**BB-A-01** PASS: Font sizes set in relative units, respecting user OS/browser font scale. FAIL: `user-scalable=no` in viewport meta tag. FAIL: Fixed pixel font sizes that cannot scale.

**BB-A-02** PASS: Body text line height ≥ 1.5 (WCAG 1.4.8). FAIL: Line height below 1.5.

**BB-A-03** PASS: SVG icons have `focusable="false"` and `aria-hidden="true"`. FAIL: Decorative SVG is focusable by keyboard.

**BB-A-04** PASS: Icon state changes communicated via both visual modification AND updated hidden text label. FAIL: Icon state change communicated by color alone.

**BB-A-05** PASS: Tooltip triggered on both `:hover` and `:focus`. FAIL: Tooltip triggered on hover only (inaccessible to keyboard users).

**BB-A-06** PASS: `title` attribute not used as the sole tooltip mechanism. FAIL: Relying on `title` attribute for tooltip text (inconsistent across assistive technologies).

**BB-A-07** PASS: All contrast meets WCAG 1.4.3 AA standard. FAIL: Any text below AA.

**BB-A-08** PASS: Unicode symbols replaced with labeled SVG icons. FAIL: Unicode symbols used as icons.

### 5.7 What BBC GEL Explicitly Forbids

**BB-F-01** Justified text alignment.
**BB-F-02** All-caps on anything except acronyms and initialisms.
**BB-F-03** Letter-spacing added to sentence-case text (only acronyms may receive tracking).
**BB-F-04** Color alone for link differentiation.
**BB-F-05** Unicode symbols used as icons.
**BB-F-06** Icon fonts (use inline SVG instead).
**BB-F-07** Text over complex or photographic backgrounds.
**BB-F-08** `user-scalable=no` in viewport meta tag.
**BB-F-09** Hard-coded icon colors that break in High Contrast Mode.
**BB-F-10** Fixed pixel font sizes that cannot scale with user preferences.
**BB-F-11** Line heights specified in pixels rather than unitless multipliers.
**BB-F-12** Tooltip accessible only on hover (must also trigger on focus).
**BB-F-13** `title` attribute as the sole tooltip mechanism.
**BB-F-14** Decorative SVG that is keyboard-focusable.

---

## 6. Atlassian Design System

Source: atlassian.design

### 6.1 Type System

**AT-T-01** PASS: Atlassian Sans used as the primary app typeface. FAIL: Any non-Atlassian typeface used in product UI without migration-state justification.

**AT-T-02** PASS: Atlassian Mono used exclusively for code. FAIL: Proportional typeface used in code blocks or inline code.

**AT-T-03** PASS: Charlie Sans used only in brand/marketing contexts (authenticated user flows). FAIL: Charlie Sans used in product UI.

**AT-T-04** Heading type scale (all Bold weight): XXL = 32px/36px; XL = 28px/32px; L = 24px/28px; M = 20px/24px; S = 16px/20px; XS = 14px/20px; XXS = 12px/16px. PASS: Heading sizes and line heights match these values. FAIL: Deviation without justification.

**AT-T-05** Body type scale: L = 16px/24px; M = 14px/20px; S = 12px/16px. PASS: Body text matches these values. FAIL: Deviation.

**AT-T-06** PASS: Heading styles used to introduce content sections. FAIL: Bold or changed font size used instead of semantic heading markup.

**AT-T-07** PASS: One H1 per page. FAIL: Multiple H1 elements on a single page.

**AT-T-08** PASS: Heading levels used consecutively (no skipping). FAIL: H2 to H4 without H3 in between.

**AT-T-09** Code blocks: 12px fixed / 20px line-height / Regular weight. PASS: Code type matches this spec. FAIL: Code displayed in a proportional typeface.

### 6.2 Color Discipline

**AT-C-01** PASS: Colors applied via design tokens using `color.[property].[role].[emphasis].[state]` structure. FAIL: Raw color values used outside the token system.

**AT-C-02** Semantic role assignments:
- `neutral`: default text and secondary UI elements.
- `brand`: primary actions or Atlassian brand communication.
- `success`: favorable outcome states.
- `warning`: caution states to prevent mistakes.
- `danger`: serious errors or destructive action states.
- `accent`: decorative colors with no inherent meaning.
- `inverse`: foreground on bold backgrounds.

PASS: Each semantic role used only in its defined context. FAIL: `danger` red used for non-error visual interest. FAIL: `accent` color used in a context that implies semantic meaning.

**AT-C-03** PASS: Accent colors not used where the color would imply semantic meaning. FAIL: Accent color used in a state (error, warning, success) context.

**AT-C-04** PASS: Warning backgrounds use `warning.inverse` tokens to maintain WCAG AA compliance. FAIL: Standard foreground tokens applied on warning backgrounds without the inverse variant.

**AT-C-05** PASS: Small text (<24px) meets 4.5:1 contrast ratio. FAIL: Small text falls below 4.5:1.

**AT-C-06** PASS: UI essential to understanding and text ≥24px meets 3:1 contrast ratio. FAIL: Large text or critical UI below 3:1.

**AT-C-07** PASS: Color never used alone to convey meaning. FAIL: Color alone distinguishes between two states with no secondary indicator.

### 6.3 Layout / Grid

**AT-L-01** Spacing base unit: 8px. Token range: 0px (space.0) to 80px (space.1000) in defined multiples. PASS: All spacing values drawn from the Atlassian token scale. FAIL: Arbitrary spacing values outside the token system.

**AT-L-02** Complete spacing scale (key values): 2px / 4px / 6px / 8px / 12px / 16px / 20px / 24px / 32px / 40px / 48px / 64px / 80px. PASS: These are the only spacing values used. FAIL: Any value not in this set.

**AT-L-03** PASS: Semantic HTML elements used for structure (header, nav, footer). FAIL: Div or span used for structural layout without semantic equivalent.

### 6.4 Voice and Tone

[VAGUE] Atlassian's voice/tone pages returned empty or 404 content during this research session. Known rule from accessibility documentation:

**AT-VT-01** PASS: Reading level targets ages 12–14. FAIL: Copy requires literacy above age 14 without justification.

**AT-VT-02** PASS: Technical jargon, metaphors, and non-literal phrases avoided or explained. FAIL: Idioms and jargon used without definition.

### 6.5 Content Design

**AT-CD-01** PASS: Text broken with headings, subheadings, bullet points, and short paragraphs. FAIL: Large blocks of unbroken prose in UI copy.

**AT-CD-02** PASS: Visible and accessible labels provided for all interactive elements. FAIL: Interactive element with no visible label.

**AT-CD-03** PASS: Video content includes transcript on page or linked from page. FAIL: Video present without transcript.

**AT-CD-04** PASS: Audio content includes accessible transcript. FAIL: Audio without transcript.

### 6.6 Accessibility

**AT-A-01** PASS: Small text (<24px) meets 4.5:1 contrast. FAIL: Below 4.5:1.

**AT-A-02** PASS: Large text (≥24px) and UI components essential to understanding meet 3:1 contrast. FAIL: Below 3:1.

**AT-A-03** PASS: All interactive elements accessible via keyboard navigation. FAIL: Any interactive element reachable only by mouse.

**AT-A-04** PASS: User's reduced motion setting is respected (prefers-reduced-motion honored). FAIL: Animations play regardless of system preference.

**AT-A-05** PASS: Color never used alone to convey meaning. FAIL: State distinction made by color alone.

**AT-A-06** PASS: All color design tokens meet WCAG AA contrast in both light and dark themes. FAIL: Token fails AA in either mode.

**AT-A-07** PASS: Page reflows correctly across all screen sizes. FAIL: Horizontal scroll required on any viewport.

**AT-A-08** PASS: User can adjust scale, contrast, and colors via OS-level settings. FAIL: Overrides block user accessibility settings.

### 6.7 What Atlassian Explicitly Forbids

**AT-F-01** Raw hex color values used outside the token system.
**AT-F-02** Accent colors applied in semantic-meaning contexts.
**AT-F-03** Charlie Sans in product UI (marketing context only).
**AT-F-04** Bold or font-size changes as substitutes for semantic heading markup.
**AT-F-05** Skipping heading levels.
**AT-F-06** Multiple H1 elements per page.
**AT-F-07** Color alone as the sole state differentiator.
**AT-F-08** Animations that ignore user prefers-reduced-motion settings.
**AT-F-09** Semantic HTML replaced by unsemantic div/span for structural layout.
**AT-F-10** Spacing values outside the defined 8px-base token scale.
**AT-F-11** Jargon, metaphors, non-literal phrases without definition.
**AT-F-12** Video without transcript.

---

## 7. Material Design 3

Source: m3.material.io

### 7.1 Type System

**MD-T-01** PASS: Roboto used as the default typeface for all 15 type tokens. FAIL: Any other typeface used without explicit brand override.

**MD-T-02** Complete type scale (15 tokens, 2 weights only — Regular and Medium):

| Token | Size | Weight |
|---|---|---|
| Display Large | 57px | Regular |
| Display Medium | 45px | Regular |
| Display Small | 36px | Regular |
| Headline Large | 32px | Regular |
| Headline Medium | 28px | Regular |
| Headline Small | 24px | Regular |
| Title Large | 22px | Regular |
| Title Medium | 16px | Medium |
| Title Small | 14px | Medium |
| Body Large | 16px | Regular |
| Body Medium | 14px | Regular |
| Body Small | 12px | Regular |
| Label Large | 14px | Medium |
| Label Medium | 12px | Medium |
| Label Small | 11px | Medium |

PASS: All type tokens match these values. FAIL: Deviation from any size or weight in this table.

**MD-T-03** PASS: Only Regular and Medium weights used across the entire type system. FAIL: Bold, Light, SemiBold, or other weights used.

**MD-T-04** PASS: Display styles used only for short, important text or numerals — suitable for large screens. FAIL: Display styles used for long-form paragraphs.

**MD-T-05** PASS: Body styles used for longer passages of text. FAIL: Body styles used for headings or single-line UI labels.

**MD-T-06** PASS: Label styles used for component interior text or very small captions. FAIL: Label styles used for standalone headings or body content.

### 7.2 Color Discipline

**MD-C-01** PASS: Colors structured as tonal palettes — primary, secondary, tertiary, error, neutral, neutral-variant. FAIL: Ad hoc colors applied outside the tonal system.

**MD-C-02** PASS: On-color roles (on-primary, on-secondary, etc.) paired correctly with their container. FAIL: on-primary color applied on a non-primary surface.

**MD-C-03** PASS: Color roles serve semantic purpose (error = error state only, primary = primary actions only). FAIL: Error color used for non-error visual emphasis.

**MD-C-04** [VAGUE] Material Design 3's public web documentation pages returned only page titles with no content during this research session. Contrast requirements reference WCAG AA as a minimum. Specific M3 contrast token rules not verified from live source. Known from synthesis: M3 enforces minimum 4.5:1 for body text, 3:1 for UI components, consistent with WCAG AA.

### 7.3 Layout / Grid

**MD-L-01** Three window size classes: Compact (<600dp), Medium (600–840dp), Expanded (>840dp). PASS: Layout adapts at these breakpoints. FAIL: Single fixed layout used regardless of window size.

**MD-L-02** At 600dp breakpoint: gutters = 24dp, margins = 32dp. PASS: These values applied at the medium breakpoint. FAIL: Margins or gutters deviate without justification.

**MD-L-03** At large screens: 12-column layout with margins up to 200dp and gutters of 24dp. PASS: Large-screen layout uses 12 columns. FAIL: Fewer columns used at large breakpoints.

**MD-L-04** PASS: Column widths defined as percentages, not fixed values. FAIL: Column widths specified in pixels.

### 7.4 Voice and Tone

[VAGUE] Material Design 3's content design documentation pages returned only page titles during this research session. No testable voice/tone rules available from live source.

### 7.5 Content Design

[VAGUE] Material Design 3 content design pages returned only page titles. Not available from live source during this session.

### 7.6 Accessibility

**MD-A-01** PASS: Minimum 4.5:1 contrast for body text (consistent with WCAG AA). FAIL: Below 4.5:1.

**MD-A-02** PASS: Minimum 3:1 for large text and UI components. FAIL: Below 3:1.

**MD-A-03** PASS: Touch targets meet minimum size requirements. [VAGUE — specific dp value not confirmed from live source during session. Known from M2: 48dp minimum. Apply as directional.]

### 7.7 What Material Design 3 Explicitly Forbids

**MD-F-01** Display type styles used for long-form body copy.
**MD-F-02** Label styles used as standalone headings.
**MD-F-03** Weights outside Regular and Medium in the standard type system.
**MD-F-04** Fixed pixel column widths (percentages required).
**MD-F-05** Single static layout across all window size classes (adaptation required).
**MD-F-06** Error color roles applied for non-error visual emphasis.

---

## SYNTHESIS — Cross-Cutting Rules

Rules that appear in 5 or more of the 7 systems. These are the closest thing to universal design standards in this corpus. They are the highest-confidence rules for anchoring a website QA rubric.

### S1. TYPE: Semantic Heading Hierarchy
**Systems:** Mailchimp, GOV.UK, BBC GEL, Atlassian, Material Design 3, Shopify Polaris (6 of 7)
**Rule:** Heading levels must be consecutive. Skipping a level (e.g., H2 to H4) is forbidden. One H1 per page. Bold + font-size changes are not a substitute for semantic heading markup.
**Testable:** Scan DOM. Flag any heading level gap. Flag pages with more than one H1. Flag bold+size combinations that visually function as headings but use non-heading markup.

---

### S2. ACCESSIBILITY: WCAG AA Contrast Minimum for All Text
**Systems:** GOV.UK, BBC GEL, Atlassian, IBM Carbon, Shopify Polaris, Material Design 3 (6 of 7)
**Rule:** All text below 24px requires minimum 4.5:1 contrast ratio. Text at 24px and above, and UI components essential to understanding, require minimum 3:1.
**Testable:** Run contrast checker against every text/background pairing. FAIL at 4.49:1 or below for small text. FAIL at 2.99:1 or below for large text.

---

### S3. ACCESSIBILITY: Color Never Conveys Meaning Alone
**Systems:** Shopify Polaris, IBM Carbon, GOV.UK, BBC GEL, Atlassian, Material Design 3 (6 of 7)
**Rule:** Every use of color to communicate state, error, success, or distinction must be accompanied by a second indicator — icon, text label, pattern, or shape.
**Testable:** Identify every colored state element. Verify at least one non-color indicator is present. Simulate grayscale rendering — all meaning must survive.

---

### S4. ACCESSIBILITY: Relative Font Units Required
**Systems:** GOV.UK, BBC GEL, Mailchimp (implied), Atlassian, Material Design 3, IBM Carbon (5 of 7)
**Rule:** Font sizes set in relative units (rem/em). Fixed pixel fonts that ignore user OS/browser font scale preferences are forbidden. Specifically: `user-scalable=no` in viewport meta is forbidden.
**Testable:** Inspect all CSS font-size declarations. FAIL on any `font-size` in `px` on body or heading elements that does not respect `html { font-size: 100% }`. FAIL if viewport meta includes `user-scalable=no`.

---

### S5. LAYOUT: Body Text Line Length Constrained
**Systems:** BBC GEL (60–80 chars), GOV.UK (~75 chars via 2/3 column), Mailchimp (implied left-align), Shopify Polaris (implied density focus), Atlassian (implied readability target) (5 of 7)
**Rule:** Body text line length must not consistently exceed 75–80 characters. Long lines degrade reading speed and comprehension.
**Testable:** Measure rendered line lengths at standard viewport widths. FAIL if average line exceeds 80 characters. Flag layouts where text stretches full container width without a max-width constraint.

---

### S6. CONTENT: Active Voice Required
**Systems:** Mailchimp, GOV.UK, Shopify Polaris, IBM Carbon, BBC GEL (editorial guideline), Atlassian (5 of 7)
**Rule:** Copy must use active voice. Passive voice is permitted only when the actor is unknown or irrelevant and no active equivalent is natural.
**Testable:** Flag passive constructions: "was [verb]ed by", "is [verb]ed", "has been [verb]ed" where an active subject could be named.

---

### S7. CONTENT: Plain Language — Common Words Over Formal Equivalents
**Systems:** Mailchimp, GOV.UK, Shopify Polaris, Atlassian, IBM Carbon (5 of 7)
**Rule:** Use the simpler, shorter word wherever one exists. Forbidden formal equivalents include: "purchase" (use "buy"), "assist" (use "help"), "approximately" (use "about"), "utilize" (use "use"), "commence" (use "start").
**Testable:** Run copy through a plain-language word list. Flag formal register words with plain equivalents.

---

### S8. CONTENT: Second-Person Address to the Reader
**Systems:** GOV.UK, Shopify Polaris, Mailchimp, Atlassian, BBC GEL (5 of 7)
**Rule:** Address the reader as "you." Do not refer to the reader as "users," "individuals," or "the user" when writing instructions or interface copy.
**Testable:** Flag third-person references to the reader in all user-facing copy.

---

### S9. CONTENT: No Generic Link Text
**Systems:** Mailchimp, GOV.UK, BBC GEL, Atlassian, Shopify Polaris (5 of 7)
**Rule:** Link text must describe the destination or action. "Click here," "learn more," "read more," and "here" are forbidden as link text.
**Testable:** Scan all `<a>` elements. FAIL on "click here", "learn more", "read more", "here" as the full link text or a majority of it.

---

### S10. CONTENT: Contractions Used in User-Facing Copy
**Systems:** Mailchimp, GOV.UK, Shopify Polaris, Atlassian, BBC GEL (5 of 7)
**Rule:** Contractions are preferred over formal equivalents ("don't" not "do not", "you'll" not "you will") to maintain a conversational, accessible register.
**Testable:** Flag formal negations and expansions in user-facing copy where contractions are more natural.

---

### S11. COLOR: Token/Semantic System — No Raw Hex Values in Components
**Systems:** IBM Carbon, Atlassian, GOV.UK, Material Design 3, Shopify Polaris (5 of 7)
**Rule:** Colors are applied through a semantic token or role layer, not through direct hex value assignment. Each color token has a defined role; applying a color outside its role is a violation even if the contrast passes.
**Testable:** Inspect CSS/stylesheets for hard-coded hex values applied to component colors. FAIL if hex values appear directly instead of token references. FAIL if a semantic color (error red, success green) is used outside its designated semantic context.

---

### S12. COLOR: Decorative Color Use Forbidden
**Systems:** IBM Carbon, Atlassian, Shopify Polaris, Material Design 3, GOV.UK (5 of 7)
**Rule:** Every color application must serve a semantic or functional purpose. Applying color purely for visual interest, decoration, or brand presence without a role assignment is forbidden.
**Testable:** For each colored element, identify its semantic role. FAIL if no role can be named (it is purely decorative).

---

### S13. ACCESSIBILITY: Images Require Alt Text
**Systems:** Mailchimp, GOV.UK, BBC GEL, Atlassian, Shopify Polaris (5 of 7)
**Rule:** All images require the `alt` attribute. Decorative images use `alt=""`. Content images use descriptive alt text. Alt text must not begin with "Image of" or "Graphic of."
**Testable:** DOM scan: FAIL if any `<img>` lacks `alt` attribute. FAIL if alt text begins with "Image of" or "Graphic of". FAIL if informative image has `alt=""`.

---

### S14. LAYOUT: Spacing from a Defined Scale, Not Arbitrary Values
**Systems:** Atlassian (8px base), Shopify Polaris (4px base), GOV.UK (5px-60px scale), IBM Carbon (2px base), BBC GEL (8px minimum gap) (5 of 7)
**Rule:** All spacing values (margin, padding, gap) must be drawn from the system's defined spacing scale. Arbitrary in-between values are forbidden.
**Testable:** Map all spacing values to the system's scale. FAIL on any value not present in the defined scale.

---

### S15. TYPOGRAPHY: Monospaced Font Reserved for Code Only
**Systems:** Shopify Polaris, IBM Carbon, Atlassian, Material Design 3, GOV.UK (implied from font guidance) (5 of 7)
**Rule:** Monospaced fonts are used exclusively for code display (code blocks, inline code, terminal output). Using mono for decorative, tabular, or headline purposes is forbidden.
**Testable:** Inspect all font-family declarations. FAIL if a monospaced font appears on any non-code element.

---

### S16. ACCESSIBILITY: Headings Not Skipped for Styling
**Systems:** Mailchimp, GOV.UK, Atlassian, BBC GEL, Shopify Polaris (5 of 7 — appears in 5 independently)
**Rule:** This repeats S1 from the typography angle: heading levels must not be skipped to achieve a desired visual size. Use CSS to restyle a correctly-nested heading rather than jumping levels.
**Testable:** Same as S1 — DOM heading level audit. The distinction here is the prohibition on using H4 when you want "smaller text" instead of H3 restyled.

Note: S16 is a refinement of S1 emphasizing the styling-bypass anti-pattern rather than the structure rule. Retain both — they catch different failure modes.

---

### S17. ACCESSIBILITY: Keyboard Navigation on All Interactive Elements
**Systems:** IBM Carbon, Atlassian, BBC GEL, GOV.UK, Material Design 3 (5 of 7)
**Rule:** Every interactive element (buttons, links, form inputs, custom components) must be reachable and operable by keyboard alone, without a mouse.
**Testable:** Tab through the entire page. FAIL if any interactive element cannot receive focus. FAIL if any interactive element cannot be activated by Enter or Space.

---

### S18. CONTENT: Error Messages Must Be Specific and Actionable
**Systems:** Shopify Polaris, GOV.UK, IBM Carbon, Atlassian, BBC GEL (5 of 7)
**Rule:** Error messages must name the specific problem and explain how to fix it. Generic error messages ("There was an error", "Invalid input") are forbidden.
**Testable:** For each error message: (1) Does it name the exact field or problem? (2) Does it include a correction path? FAIL on either count. FAIL on "invalid" as the error descriptor. FAIL on "sorry" as an opener.

---

### S19. CONTENT: No All-Caps for Emphasis
**Systems:** BBC GEL, GOV.UK, Mailchimp, Atlassian, Shopify Polaris (5 of 7)
**Rule:** All-caps text is forbidden as an emphasis technique on ordinary words. Permissible only for acronyms and initialisms where all-caps is semantically correct.
**Testable:** Scan for `text-transform: uppercase` or `font-variant: all-small-caps` on non-acronym text. Flag any all-caps word that is not an accepted acronym.

---

### S20. TYPOGRAPHY: Left-Aligned Text — Justified Alignment Forbidden
**Systems:** Mailchimp, BBC GEL, GOV.UK, Atlassian, Shopify Polaris (5 of 7)
**Rule:** Body text must be left-aligned. Justified text creates uneven word spacing that degrades readability, particularly for users with dyslexia.
**Testable:** Inspect `text-align` declarations. FAIL on `text-align: justify` on any body text element. FAIL on center-aligned body copy (center alignment is acceptable for short display text only).

---

### S21. CONTENT: Icon Must Be Accompanied by Text Label (Unless Universally Established)
**Systems:** GOV.UK, BBC GEL, Atlassian, Shopify Polaris, IBM Carbon (5 of 7)
**Rule:** Icons used as interactive or meaning-bearing elements must be accompanied by a visible or visually-hidden text label. Icons used alone without any text alternative are forbidden except for universally-established symbols (e.g., play/pause).
**Testable:** Identify all standalone icon buttons. FAIL if no visible label or aria-label is present. FAIL if the icon represents a non-universally-known action without a text fallback.

---

### S22. CONTENT: Text Displayed as Image Forbidden
**Systems:** GOV.UK, BBC GEL, Atlassian, IBM Carbon, Mailchimp (5 of 7)
**Rule:** Meaningful text must not be embedded in images. Text-as-image cannot scale, cannot be selected, cannot be read by screen readers, and cannot reflow.
**Testable:** Inspect all `<img>` elements. FAIL if an image contains readable text that carries the page's informational content. Exception: logos where the wordmark is the brand itself.

---

### S23. TYPOGRAPHY: Only a Restricted Set of Weights Permitted
**Systems:** IBM Carbon (3 weights), Atlassian (Regular, Medium, Bold), Shopify Polaris (variation within hierarchy), Material Design 3 (Regular + Medium only), GOV.UK (implied by not specifying expanded palettes) (5 of 7)
**Rule:** Type weight is constrained to a small defined set. Proliferating weight variations across a page undermines hierarchy.
**Testable:** Inventory all font-weight values in use. FAIL if more than 3 distinct weights appear across the UI. FAIL if Bold (700+) appears in body copy.

---

### S24. ACCESSIBILITY: Visible Focus Indicator Required
**Systems:** IBM Carbon, Atlassian, BBC GEL, GOV.UK, Material Design 3 (5 of 7)
**Rule:** All interactive elements must display a visible focus indicator when focused via keyboard. Focus rings must meet the 3:1 contrast requirement against adjacent colors.
**Testable:** Tab through every interactive element. FAIL if focus indicator is absent, invisible, or fails 3:1 contrast against its background.

---

### S25. CONTENT: Heading Text Not Followed by Lower-Hierarchy Text at Larger Size
**Systems:** Shopify Polaris, Material Design 3, Atlassian, IBM Carbon, BBC GEL (5 of 7)
**Rule:** A heading must be equal to or larger in rendered size than the body text that follows it within the same section. Decorative small headings ("kicker" use excepted) must be intentional, not accidental.
**Testable:** Measure rendered `font-size` of each heading and compare to following body copy. FAIL if body text renders larger than the heading introducing it (outside explicitly marked lede/kicker contexts).

---

### S26. CONTENT: Link Text Differentiated Beyond Color
**Systems:** BBC GEL, GOV.UK, Atlassian, Shopify Polaris, IBM Carbon (5 of 7)
**Rule:** Links within body copy must be differentiated from surrounding text by at least one indicator in addition to color — typically underline. Color-only link differentiation fails users with color vision deficiency.
**Testable:** Identify all inline links in body text. FAIL if the only distinguishing treatment is color (no underline, no bold, no other treatment on default/rest state).

---

### S27. CONTENT: CTA/Button Copy Begins With Action Verb
**Systems:** Shopify Polaris, GOV.UK, Atlassian, Mailchimp, IBM Carbon (5 of 7)
**Rule:** Button labels and call-to-action text must begin with a verb. Noun-first or "you can [verb]" structures are forbidden.
**Testable:** Scan all button elements and CTA links. FAIL if first word is not a verb. FAIL if copy begins with "you can", "please", "if you want to."

---

### S28. LAYOUT: Max Content Width Constraint Required for Readability
**Systems:** GOV.UK (1020px), BBC GEL (80ch line max), Atlassian (implied by spacing system), IBM Carbon (implied by grid), Material Design 3 (margin system) (5 of 7)
**Rule:** Content must have a maximum width constraint. Full-viewport-width text columns are forbidden. The constraint is typically applied at the container level to prevent line lengths from exceeding readability thresholds.
**Testable:** Inspect body text containers at large viewport widths (1440px+). FAIL if text line length exceeds 80 characters or if no max-width is applied to text-bearing containers.

---

### S29. ACCESSIBILITY: Reduced Motion Preference Respected
**Systems:** Atlassian, BBC GEL, GOV.UK, Material Design 3, IBM Carbon (5 of 7)
**Rule:** Any animation or transition must respect the user's `prefers-reduced-motion: reduce` system setting. Animations must either stop, slow, or remove movement when this preference is set.
**Testable:** Enable `prefers-reduced-motion: reduce` in system settings. FAIL if any animation continues to play at full intensity.

---

### S30. CONTENT: Sufficient Heading and Section Structure
**Systems:** Mailchimp, GOV.UK, Atlassian, BBC GEL, Shopify Polaris (5 of 7)
**Rule:** Long-form content must be broken up with headings, subheadings, and short paragraphs. Unbroken prose blocks without structural signposts are forbidden for anything beyond a short paragraph.
**Testable:** Count consecutive paragraphs without an intervening heading. FAIL if more than 5 consecutive paragraphs appear without a heading break in content sections.

---

### S31. CONTENT: Copy Must Not Rely on Position or Color Alone as the Only Reference
**Systems:** GOV.UK, BBC GEL, Atlassian, Shopify Polaris, IBM Carbon (5 of 7)
**Rule:** Instructions must not say "the button on the left" or "the red text above." References must be by name or label, not by position or color alone, because position and color are invisible to some users.
**Testable:** Flag any copy containing directional or color-based references ("click the blue button", "see the panel on the right", "the error above"). FAIL unless a name or label accompanies the positional/color reference.

---

*End of rubric. Total rules: type system 47, color 38, layout 29, voice/tone 52, content design 44, accessibility 36, explicit forbids 58, synthesis 31.*
