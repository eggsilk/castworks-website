---
title: Design Canon Rubric — Universal Standards Reference
date: 2026-05-08
sources:
  - Robert Bringhurst, "The Elements of Typographic Style" (v4.0) — cited via webtypography.net adaptation §2.x / §3.x
  - Josef Müller-Brockmann, "Grid Systems in Graphic Design" (1968)
  - Adam Wathan + Steve Schoger, "Refactoring UI" (2018)
  - Matthew Butterick, "Practical Typography" — practicaltypography.com
  - Massimo Vignelli, "The Vignelli Canon" (2009) — RIT Vignelli Center PDF
  - Edward Tufte, "The Visual Display of Quantitative Information" (1983) + related works
  - Erik Spiekermann, "Stop Stealing Sheep & Find Out How Type Works" (4th ed., 2023)
  - Jen Simmons + Rachel Andrew — intrinsic web layout, CSS Grid era
  - WCAG 2.1 — color contrast standards (AA / AAA)
rule_counts:
  A_typography: 38
  B_grid_layout: 22
  C_color: 18
  D_hierarchy_scanning: 16
  E_restraint: 14
  F_when_rules_break: 10
  total: 118
cross_source_agreements: 19
purpose: >
  Pass/fail rubric for consulting during B2B service-brand website design work.
  Each rule is testable against a real artifact. Vague principles are excluded.
  Cross-source agreements are flagged — those carry the strongest authority.
---

# Design Canon Rubric

## How to use this document

Each rule is written as a testable check. Apply it to a real design artifact:
does the design pass or fail the stated criterion? Vague principles that cannot
be checked against an artifact are not included. Where multiple canonical
sources agree, the rule is marked **[CROSS-SOURCE AGREEMENT]** — treat those
as the firmest universal standards. Source abbreviations: **BR** = Bringhurst,
**MBr** = Müller-Brockmann, **RUI** = Refactoring UI, **PT** = Butterick
Practical Typography, **VC** = Vignelli Canon, **TUF** = Tufte, **SP** =
Spiekermann, **JRS** = Simmons/Andrew intrinsic web, **WCAG** = WCAG 2.1.

---

## A. TYPOGRAPHY

### A1. Type Pairing

**A1.1 — Maximum two typeface families per composition.**
Fail if three or more distinct type families appear in a single layout. A
family and its variants (roman, italic, bold) count as one. [VC, SP, BR]
**[CROSS-SOURCE AGREEMENT]**

**A1.2 — Pair on contrast, not similarity.**
Two typefaces that are merely similar (e.g., two neutral grotesques) produce
neither harmony nor productive tension — they produce confusion. Pair a serif
with a sans, or a display face with a text face, not two faces from the same
genre. Fail if the pairing produces ambiguity about which face is primary.
[SP, BR]

**A1.3 — When in doubt, stay within one superfamily.**
A superfamily that includes both serif and sans-serif cuts (e.g., Lucida,
Rotis, FF Scala + FF Scala Sans) provides built-in pairing without risk.
Fail if a pairing is justified only by vague aesthetic preference with no
structural contrast rationale. [BR §6, SP]

**A1.4 — One typeface for a single-purpose document is sufficient.**
If a design uses scale and weight to establish hierarchy within one family,
a second face is redundant. Fail if a second family is added without
providing a function the first family cannot. [VC, BR]

**A1.5 — Avoid pairing two typefaces of identical weight and identical x-height.**
If two faces share both weight and x-height, they will conflict at any size
where they appear together. One must read lighter or have a noticeably
different x-height. [SP]

---

### A2. Hierarchy — Size Ratios, Weight Policy, Modular Scale

**A2.1 — Establish a modular type scale; do not use arbitrary size steps.**
Choose a base size and a ratio. Acceptable ratios: Minor Second (1.067),
Major Second (1.125), Minor Third (1.2), Major Third (1.25), Perfect Fourth
(1.333), Perfect Fifth (1.5), Golden Ratio (1.618). Fail if size steps are
arbitrary integers with no ratio relationship. [BR §3.1, PT]
**[CROSS-SOURCE AGREEMENT]**

**A2.2 — Body text: 10–12pt in print; 15–25px on screen.**
Fail if body copy renders below 15px on screen or below 10pt in print. [PT]

**A2.3 — Refactoring UI reference type scale for digital interfaces.**
xs 12px / sm 14px / base 16px / lg 18px / xl 20px / 2xl 24px / 3xl 30px /
4xl 36px. Fail if custom scale departs from these steps without a principled
ratio replacing them. [RUI]

**A2.4 — Use no more than three distinct hierarchy levels in body copy.**
Heading / subheading / body is the canonical minimum. A fourth level (e.g.,
caption) may be added only if the content type genuinely requires it. Fail
if four or more levels exist without distinct content roles. [VC, SP]

**A2.5 — Weight must make hierarchy; size alone is insufficient.**
Fail if two levels of text hierarchy differ only in size with no weight
or color distinction. The eye requires at least two independent cues to
register a hierarchy shift reliably. [RUI, SP]

**A2.6 — Do not use type weights below 400 in UI body copy.**
Weights 100–300 reduce legibility at text sizes on screen. Reserve light
weights for display use at large sizes only. Fail if UI body text uses a
weight below 400. [RUI]

**A2.7 — Heading line-height: 1.0–1.25. Body line-height: see A3.**
Fail if a heading with a font-size above 36px uses a line-height above 1.3
(it will produce excessive vertical gaps between lines in short headings).
[RUI, PT]

---

### A3. Line-Height / Leading

**A3.1 — Body text leading: 120%–145% of point size (1.2–1.45 unitless).**
Fail if body copy line-height is below 1.2 or above 1.5. The sweet spot for
most text faces is 1.3–1.45. [PT, BR §2.2]
**[CROSS-SOURCE AGREEMENT]**

**A3.2 — Sans-serif faces require more leading than serif faces.**
Sans-serif type lacks the horizontal anchoring serifs provide, making the
eye work harder to track to the next line. Add approximately 10% additional
leading compared to an equivalent serif face. Fail if a sans-serif body
face uses the same leading as a serif body face in the same composition.
[BR, SP]

**A3.3 — Typefaces with large x-heights require more leading.**
A large x-height (relative to cap height) increases apparent text density.
For a high-x-height face, leading below 1.4 will feel cramped at text sizes.
[BR]

**A3.4 — Line-height scales inversely with font size.**
Display text (36px+) may use line-height 1.0–1.1. Body text (15–21px) uses
1.3–1.5. Captions and small labels (11–13px) may use 1.4–1.6 to preserve
legibility. Fail if the same unitless line-height is applied globally across
all size levels. [RUI, PT]

---

### A4. Line Length / Measure

**A4.1 — Single-column body text: 45–75 characters per line.**
Count characters including spaces. 66 characters is the cited ideal. Fail
if average line length falls below 45 or exceeds 75 for sustained reading
copy. [BR §2.1.2, PT]
**[CROSS-SOURCE AGREEMENT]**

**A4.2 — Multiple-column layouts: 40–50 characters per line.**
Narrower columns require narrower measures. Fail if columns in a multi-column
layout average more than 55 characters. [BR §2.1.2]

**A4.3 — Em-unit implementation: 20–35em paragraph width.**
In CSS, set max-width on body text containers to 20–35em to enforce the
character count without pixel recalculation. Fail if a body text container
has no max-width constraint. [PT, RUI]

**A4.4 — Do not center-align text blocks longer than 2–3 lines.**
Center alignment destroys the ragged left edge that readers use to find the
start of the next line. Fail if a text block of four or more lines is
centered. [PT, RUI]
**[CROSS-SOURCE AGREEMENT]**

---

### A5. Tracking / Letter-Spacing

**A5.1 — Letterspace all-caps and small-caps text: 5–12% (0.05–0.12em).**
Capital letter forms were designed without the inherent spacing lowercase
receives. Untracked all-caps text reads as a texture block, not as words.
Fail if all-caps or small-caps text is set at default tracking (0). [BR §2.1.6, PT]
**[CROSS-SOURCE AGREEMENT]**

**A5.2 — Never add tracking to lowercase body text.**
Letterspacing lowercase reduces legibility. The maxim attributed to Frederic
Goudy and cited by Bringhurst: "A man who would letterspace lower case would
steal sheep." Fail if body copy lowercase is tracked out. [BR §2.1.7, SP]
**[CROSS-SOURCE AGREEMENT]**

**A5.3 — Large display headlines (above 48px) may benefit from negative tracking.**
Type designers space fonts for text sizes. At display scales the inter-letter
gaps become visually exaggerated. Slight negative tracking (−0.01em to
−0.03em) may tighten a large headline without harm. Fail if a display
headline above 48px has default or positive tracking and appears loose.
[SP, RUI]

**A5.4 — Tracking and kerning must both be active on all-caps settings.**
Kerning corrects specific pair anomalies; tracking adjusts the overall
rhythm. They are not substitutes. Fail if only one is applied to all-caps
text. [PT]

---

### A6. Hyphenation, Justification, Alignment

**A6.1 — Justified text requires hyphenation. No exceptions.**
Without hyphenation, the browser or layout engine can only break at word
spaces, producing rivers of white space. Fail if justified text is used
without hyphenation enabled. [BR, PT]
**[CROSS-SOURCE AGREEMENT]**

**A6.2 — Hyphenation: leave at least 2 characters behind, carry at least 3 forward.**
"Fi-nally" passes; "final-ly" fails (only 2 forward). This is Bringhurst's
exact criterion. Fail if a hyphenation break leaves fewer than 2 characters
on the first line or fewer than 3 on the second. [BR §2.4.1]

**A6.3 — Do not allow more than 3 consecutive hyphenated line-endings.**
Three or more stacked hyphens in a column destroys reading rhythm. Fail if
a layout includes 3+ consecutive hyphenated line endings. [BR §2.4.3]

**A6.4 — Prefer left-aligned (ragged right) text for web body copy.**
Web justification is crude without fine-grained hyphenation control. Left-
aligned text avoids rivers and requires no hyphenation to be legible. Fail
if justified text is used on the web without confirming hyphenation quality
in all browsers. [BR, PT]

**A6.5 — Do not hyphenate headings.**
Hyphenation in short text blocks causes more visual problems than it solves.
Fail if heading-level text has automatic hyphenation active. [PT]

---

### A7. Case Usage

**A7.1 — All-caps is acceptable only for text under one line in length.**
Acceptable contexts: headings, labels, captions, header/footer elements,
letterhead, button labels. Fail if all-caps is applied to a full paragraph
or to body copy. [PT, VC]

**A7.2 — Never use bold all-caps for body emphasis.**
Bold compounds the legibility damage of all-caps. Fail if bold all-caps
appears in body copy. [PT]

**A7.3 — Small caps must use optically designed small caps, not scaled capitals.**
Fake small caps (produced by scaling regular caps to ~70%) have incorrect
stroke weight and appear anaemic. Fail if `font-variant: small-caps` renders
scaled fake small caps because the font has no real small cap glyphs.
Verify that the font file includes a `smcp` OpenType feature. [PT]

**A7.4 — Apply all-caps conventions to small caps: add letterspacing, enable kerning.**
Small caps set at default tracking look cramped. The same 5–12% letter-
spacing rule that applies to full caps applies here. Fail if small caps are
set at default tracking. [PT, BR]

---

### A8. Numerals, Ligatures, Special Characters

**A8.1 — Use oldstyle (text) figures in running prose; lining figures in tables.**
Oldstyle figures have ascenders and descenders that align with lowercase
letterforms. Lining figures align with capitals and suit tabular data.
Fail if lining figures are used in mid-sentence within body copy, or if
oldstyle figures are used in a column of numeric data. [BR §3.2, SP]

**A8.2 — Use tabular (monospaced) figures in any column of numbers.**
Proportional figures cause columns to misalign. Fail if a numeric table or
price list uses proportional (non-tabular) figure spacing. [BR, SP]

**A8.3 — Enable standard ligatures (fi, fl, ff) when the font supports them.**
Standard ligatures are mandatory when the letters physically collide (fi is
the canonical case). Fail if `fi` or `fl` combinations produce visible
overlap and ligatures are disabled. [PT]

**A8.4 — Do not manually insert ligature characters into text.**
Manually placed ligatures break spell-check, search indexing, and
hyphenation. Use CSS `font-feature-settings: "liga" 1` or
`text-rendering: optimizeLegibility`. [PT]

**A8.5 — Use the en dash (–) for ranges, not the hyphen (-).**
"5–10 points" is correct; "5-10 points" is not. Fail if a range of numbers
uses a hyphen rather than an en dash. [BR]

**A8.6 — Use the multiplication sign (×) for dimensions, not the letter x.**
"21×29.7 cm" is correct; "21x29.7 cm" is not. [BR]

**A8.7 — Acronyms and abbreviations in small caps require no periods.**
"AM", "PM", "DC", "EU" in small caps: no periods. Fail if periods appear
in all-small-caps acronyms. [BR §2.1.6]

---

### A9. Paragraph Spacing

**A9.1 — Use either indentation or vertical spacing between paragraphs — never both.**
A first-line indent of 1–4× the type size signals a new paragraph.
Vertical space of 4–10pt between paragraphs signals the same break. Using
both is redundant. Fail if a layout has both indentation and a visible gap
between every paragraph. [PT, BR]

**A9.2 — First paragraph after a heading: set flush left, no indent.**
The heading already signals the start of a new section. An indent after a
heading is superfluous. Fail if the first paragraph after a heading is
indented. [BR §2.3.1]

---

## B. GRID + LAYOUT

### B1. Column System Principles

**B1.1 — Every layout must have an explicit alignment system.**
No element should be placed by eye without reference to a column or baseline
grid. Fail if elements in a composition cannot be traced back to shared
horizontal or vertical alignment coordinates. [MBr, VC]
**[CROSS-SOURCE AGREEMENT]**

**B1.2 — Column count should match content complexity.**
A simple single-narrative page: 1 column. Mixed text/image: 2–3 columns.
Complex editorial or data layouts: 4–12 column grids (where elements span
multiple columns). Fail if a single-column text document uses a 12-column
grid with no spanning elements — the grid provides no value. [MBr]

**B1.3 — In a multi-column grid, gutter width must prevent column bleeding.**
Columns must have sufficient inter-column space that text in adjacent
columns cannot be read as a single horizontal stream. A minimum of 1em
gutter is the practical threshold. Fail if adjacent columns can be
accidentally read together. [MBr]

**B1.4 — All grid units (illustrations, text blocks) should snap to whole grid
field multiples.**
Content occupies 1, 2, 3, or 4 grid fields — not 1.5 or 2.7. Partial-field
placement produces visual arbitrariness. Fail if layout elements span
fractional grid units. [MBr]

**B1.5 — Use CSS Grid for two-dimensional layouts; use Flexbox for one-dimensional.**
Flexbox arranges items along a single axis and lets content size drive
layout. Grid creates independent row and column tracks. Fail if CSS Grid
is used for a component whose layout is purely linear (e.g., a nav bar,
a button row), or if Flexbox is used to produce two-axis alignment that
requires pixel-precise track control. [JRS, Rachel Andrew]

---

### B2. Modular Scale / Spacing Scale

**B2.1 — Use a constrained spacing scale; never use arbitrary spacing values.**
A consistent base-unit system: 4px, 8px, 12px, 16px, 20px, 24px, 32px,
40px, 48px, 64px, 80px. Fail if any spacing value falls outside the scale
(e.g., 20px gap where the scale provides 16px and 24px but the designer
chose a midpoint). [RUI]

**B2.2 — Adjacent steps in a spacing scale should differ by at least 25%.**
Steps too close together (e.g., 14px and 16px in a scale) are visually
indistinguishable. Fail if any two adjacent scale values differ by less
than 25%. [RUI]

**B2.3 — Spacing within a group must be smaller than spacing between groups.**
Related elements (label + input, heading + subheading) should have tighter
margins than the gap to the next unrelated element. Fail if the gap between
a label and its associated field is equal to or larger than the gap to the
next form group. [RUI]
**[CROSS-SOURCE AGREEMENT]**

---

### B3. White Space

**B3.1 — Start with too much white space, then reduce.**
Do not start from tight and add space. Over-spaced layouts reveal what
elements can bear compression; under-spaced layouts reveal nothing. Fail if
a first-pass layout has elements touching or nearly touching their
container edges. [RUI, MBr]

**B3.2 — White space is a design element, not a failure to fill space.**
A column left blank for structural reasons (e.g., Vignelli's letterhead
convention of leaving the leftmost column empty for the logo) is correct.
Fail if white space is filled reflexively to "use the space." [VC, MBr]

**B3.3 — Reduce visual clutter before adding separators.**
Before adding a border, rule, or dividing line, try: increased white space,
contrasting background, or box shadow. Borders that duplicate structural
spacing are redundant. Fail if a border is added to separate elements that
are already adequately spaced. [RUI]

---

### B4. Asymmetric vs. Symmetric Grid

**B4.1 — Symmetric grids suit documents with equal-weight content streams.**
Side-by-side columns of equal importance (a two-column comparison, a two-
language document) warrant a symmetric grid. [MBr]

**B4.2 — Asymmetric grids create hierarchy between regions.**
When one column carries primary content and another carries secondary
(captions, navigation, metadata), the columns should differ in width.
A narrow sidebar at 1/3 width against a 2/3 main column signals hierarchy
spatially. Fail if a layout has primary and secondary content columns of
equal width with no other hierarchy cue. [MBr, VC]

**B4.3 — Vignelli letterhead grid: 3-column, left column blank.**
For documents using a letter/A4 format: divide into 3 columns, margin
10mm from edge. Left column: company mark only. Centre column: company
name and recipient address. Right column: body. Alternative: 5 columns,
content in the 3 central columns. This is a specific canonical grid
for B2B correspondence. [VC]

---

### B5. Hierarchy of Regions

**B5.1 — The number of distinct visual regions should not exceed the number of
distinct content roles.**
If a layout has three regions but the content requires only two, consolidate.
Fail if a region exists that contains only a single repeated element type
that could be absorbed into an adjacent region. [MBr, VC]

**B5.2 — Illustrations of varying sizes should conform to a limited size vocabulary.**
Müller-Brockmann: "The fewer the differences in the size of illustrations,
the quieter the impression." In a content layout, images should occupy 1, 2,
or 3 grid units — not arbitrary pixel widths. [MBr]

---

### B6. Responsive / Breakpoint Strategy

**B6.1 — Prefer intrinsic sizing over pixel breakpoints where possible.**
Use `minmax()`, `auto-fill`, `auto-fit`, and `fr` units to create layouts
that respond to their content without explicit breakpoints. Fail if a media
query is the only mechanism preventing a single-column layout from breaking
on resize when `minmax()` would have handled it without a query. [JRS]

**B6.2 — Combine fixed and fluid tracks intentionally.**
Fixed widths for sidebars/nav (content with a known optimal width). FR
units for content areas that should fill available space. Fail if all grid
columns are set to FR units when one column has a well-known optimal width
(e.g., a 260px sidebar). [JRS, Rachel Andrew]

**B6.3 — auto-fill vs. auto-fit: use auto-fit when empty tracks should collapse.**
`auto-fill` retains empty tracks as structural slots. `auto-fit` collapses
empty tracks and expands filled ones. Use `auto-fit` for card grids where
the last row should fill the row width; `auto-fill` where empty slots should
remain as placeholders. [Rachel Andrew]

**B6.4 — Never use `order`, `flex-direction: row-reverse`, or `grid-auto-flow: dense`
for logical content reordering — only for visual layering.**
These properties change visual sequence without changing DOM order. Screen
readers follow DOM order. Fail if the visual reading order of primary content
differs from DOM source order. [Rachel Andrew, Smashing Magazine grid best
practices]

**B6.5 — Optimal auto-column pattern: `repeat(auto-fit, minmax(MIN, 1fr))`.**
Set MIN to the smallest usable column width for the content type (e.g.,
240px for a card, 160px for a thumbnail). This creates as many columns as
fit without a media query. Fail if a responsive card grid uses explicit
column counts + breakpoints where this single declaration would work.
[Rachel Andrew, JRS]

---

## C. COLOR

### C1. Palette Structure

**C1.1 — A UI color palette requires 8–10 neutral (grey) shades, 5–10 primary
shades, and 5–10 shades per accent color.**
Fail if the palette has fewer than 5 shades for any color used in
interactive states (hover, active, disabled) — you will run out. [RUI]
**[CROSS-SOURCE AGREEMENT]**

**C1.2 — Structure the shade scale as 100–900 (9 steps). 500 = base, 100 = lightest,
900 = darkest.**
900-level shades serve text. 100-level shades serve backgrounds. Base (500)
serves buttons and primary UI elements. Fail if the scale has fewer than
7 distinct, visually separable steps. [RUI]

**C1.3 — Never use pure black (#000000) as a default text color.**
Pure black on white is higher contrast than human vision requires for
reading, and it creates a harsh optical effect. Use a very dark grey
(e.g., #111827 or equivalent near-black) for primary text. [RUI]

**C1.4 — Never use pure white (#FFFFFF) as a default background in dark mode.**
Dark mode backgrounds should target L:8–12% in HSL with slight saturation
and a cool or warm undertone (approximately #121214 to #141416). Fail if
dark mode uses a pure #000000 background or pure #FFFFFF. [Dark mode
industry consensus; RUI principle extension]

**C1.5 — Greys should not be pure neutral — tint them toward the primary hue.**
A grey tinted 5–10° toward the primary hue (e.g., a slightly warm grey
in a warm-primary brand) coheres the palette. Pure neutral greys (#808080)
look disconnected from a colored palette. Fail if brand greys have 0%
saturation and a primary color with high saturation coexists in the same
palette. [RUI]

**C1.6 — At any given lightness below 50% or above 50%, increase saturation to
maintain apparent vibrancy.**
Colors at extreme lightness values lose apparent saturation due to the
lightness-saturation perceptual interaction. For a 100-level (very light)
tint, increase saturation by 20–40% relative to the 500-level base.
Fail if a 100-level color swatch looks grey-white with no discernible hue.
[RUI]

---

### C2. Contrast / Readability

**C2.1 — Body text on background: minimum 4.5:1 contrast ratio (WCAG AA).**
Fail if any body copy text fails a 4.5:1 contrast check against its
background. Use a tool: WebAIM Contrast Checker or equivalent. [WCAG 2.1
SC 1.4.3]
**[CROSS-SOURCE AGREEMENT]**

**C2.2 — Large text (18pt / 24px+ or 14pt bold / 18.66px bold): minimum 3:1.**
Large text is easier to read and permits a lower contrast floor. Fail if
a heading above 24px fails a 3:1 contrast check. [WCAG 2.1 SC 1.4.3]

**C2.3 — AAA target for body text: 7:1 contrast ratio.**
For a B2B service brand (typically read in ambient office light on
commodity monitors), 4.5:1 is the floor, 7:1 is the target for body
copy. Fail against 4.5:1 = hard fail. Below 7:1 for body copy = soft
flag worth reviewing. [WCAG 2.1 SC 1.4.6]

**C2.4 — UI components and graphical elements: minimum 3:1 against adjacent colors.**
Form borders, icon fills, and chart elements require 3:1 contrast to be
reliably distinguishable. Fail if a form input border is the same lightness
as its background. [WCAG 2.1 SC 1.4.11]

**C2.5 — Do not rely on color alone to convey meaning.**
Any information conveyed by color must also be conveyed by shape, pattern,
label, or text. Fail if a status indicator (error, success, warning) uses
only color with no accompanying icon or label. [WCAG 2.1 SC 1.4.1]

---

### C3. Accent Usage

**C3.1 — Limit accent colors to 1–2 per composition.**
Accent colors signal "action" or "attention." Multiple competing accents
produce visual noise. Fail if more than 2 distinct hues function as accent
(attention-drawing) colors in a single page. [VC, RUI]

**C3.2 — Semantic accent colors require their own shade scales.**
Success (green), warning (yellow/amber), error (red), info (blue) each
need distinct shades for background tints and text states. Fail if semantic
colors have only one shade and are used for both background fills and text.
[RUI]

**C3.3 — Use gradient hues within a 30° arc for two-stop gradients.**
A gradient between hues more than 60° apart will pass through a desaturated
midpoint and produce a muddy center band. Keep gradient hue stops within
30° of each other. Fail if a gradient passes through a noticeably grey or
brown midpoint. [RUI]

---

### C4. Dark Mode / Inversion

**C4.1 — Do not invert the light palette to produce the dark palette.**
Inverting produces mathematically opposite lightness values that do not
correspond to the same perceptual hierarchy. Build dark mode as an
independent set of color decisions, not a CSS `filter: invert()`. [Dark mode
industry consensus]

**C4.2 — Dark mode elevation should use lighter surface values, not shadows.**
Shadows (which darken) become invisible against dark backgrounds. Use
background lightness increases of 3–5 percentage points per elevation level
to communicate depth. Fail if dark mode uses `box-shadow` as the primary
depth cue. [Dark mode industry consensus]

**C4.3 — Semantic colors (success, warning, error) in dark mode: desaturated and
lighter than their light-mode counterparts.**
Saturated dark-mode semantic colors bleed visually against dark backgrounds.
Fail if the same saturated red used for errors in light mode is used
unchanged in dark mode. [Dark mode industry consensus]

**C4.4 — In dark mode, eliminate card borders; use background contrast instead.**
A dark card on a slightly lighter dark background reads as elevated without
a border. Adding a border on top reads as double-outlined and dated. Fail
if dark mode cards use visible borders when background contrast already
defines the card boundary. [Dark mode industry consensus]

---

## D. HIERARCHY + SCANNING

### D1. Visual Hierarchy Rules

**D1.1 — Every composition must have exactly one primary focal point.**
If two elements compete for primary attention with equal visual weight, the
composition has no hierarchy. Fail if a user, shown the layout briefly, cannot
identify the single most important element within 3 seconds. [MBr, VC]
**[CROSS-SOURCE AGREEMENT]**

**D1.2 — Create hierarchy through size, weight, and color — in that order of
reliability.**
Size is the most universally perceived cue. Weight (bold vs. regular) is
second. Color (dark vs. light) is third. Fail if a hierarchy relies entirely
on color with no size or weight differentiation. [RUI, SP]

**D1.3 — De-emphasizing secondary content is as effective as emphasizing primary.**
Reducing the contrast, weight, or size of secondary text lifts primary
text relatively without changing the primary text at all. Fail if a layout's
hierarchy is achieved only by making the primary element larger or bolder
without reducing secondary element prominence. [RUI]

**D1.4 — Align mixed font sizes to their baselines, not their centers.**
Vertical center-alignment of text elements with different font sizes produces
a misaligned top and bottom edge that looks accidental. Baseline alignment
creates a clean optical line. Fail if a nav bar or inline element mixes
font sizes aligned to vertical center. [RUI]

---

### D2. F-Pattern / Z-Pattern Reading

**D2.1 — Text-heavy pages activate the F-pattern. Place critical information in the
top horizontal band and the left vertical spine.**
Users scan the top full width (H1, first sentence), then a shorter second
horizontal pass, then down the left edge. High-priority content not on this
path will be missed. Fail if critical supporting information (price, CTA,
key differentiator) is placed in the right-center or bottom-center of a
text-heavy layout. [Nielsen Norman Group eye-tracking research]

**D2.2 — Low-text pages (landing pages, hero sections) activate the Z-pattern.**
Eyes travel top-left → top-right → diagonal → bottom-left → bottom-right.
Place CTA at bottom-right, brand mark at top-left, key claim at top-right.
Fail if a landing page hero places its primary CTA at center-left or
bottom-center where the Z-path does not naturally terminate. [UX scanning
research]

**D2.3 — The first 2 words of each paragraph are scanned, not the full paragraph.**
In F-pattern scanning, users read the opening words of each paragraph and
skip the rest. If the paragraph opener does not deliver the key information,
the paragraph will be skipped. Fail if body copy paragraphs begin with
throat-clearing phrases ("It is important to note that...") rather than
the substantive claim. [NNGroup text scanning research]

---

### D3. Competing Focal Points

**D3.1 — No two elements on the same page should share maximum visual weight.**
"Maximum weight" is defined as the combination of: largest size, highest
contrast, most saturated color, on the page. Only one element should occupy
this position. Fail if two elements are equal across all three cues. [MBr, VC]

**D3.2 — Images always dominate text at equivalent canvas area.**
A full-width image will always pull focus from a typographic element of the
same height. If text hierarchy is primary, reduce image dominance through
size, desaturation, or opacity. Fail if a layout has a full-bleed image and
a headline intended as the primary read at the same vertical position. [MBr]

**D3.3 — Avoid more than 3 distinct border-radius values in a single layout.**
Inconsistent border-radius across elements creates micro-hierarchy noise
(the eye registers a "decision" at each corner). Fail if a design uses
more than 3 different border-radius values without a documented scale.
[RUI principle extension]

---

### D4. Scannability Rules

**D4.1 — Use sentence case for headings in web content; reserve title case for
formal documents.**
Sentence case (capitalize first word only) is faster to read because it
matches the natural shape of lowercase text. Title Case capitalizes every
word, imposing artificial visual bumps. Fail if web content headings use
title case as a default. [PT, web editorial standard]

**D4.2 — Subheadings must create contrast against body weight at the same size.**
If a subheading is the same size as body copy, it must differ in weight
(bold vs. regular) or color to register as a hierarchy marker. A subheading
that is merely bolded body text with no size, weight, or color difference
from adjacent body is a fail. [SP, RUI]

**D4.3 — Lists should not exceed 7 items without grouping or hierarchy.**
The eye's span for scanning an unbroken vertical list is approximately 5–7
items. Beyond 7, group items under sublabels or split into multiple lists.
Fail if a page contains an unbroken bullet list of 8 or more items with no
visual grouping. [Cognitive load and scanning research]

**D4.4 — Maximum line density: no more than one visual change per line on average.**
A line of body text should not carry more than one weight change, one color
change, or one link. Multiple inline changes per line produce visual noise
that disrupts scanning. Fail if body copy shows two or more formatting
interruptions in a single short paragraph. [SP, editorial convention]

---

## E. RESTRAINT

### E1. Concrete Rules for Less

**E1.1 — Vignelli's typeface restraint: work with 6–12 typefaces maximum in a
design practice; use 1–2 per project.**
Vignelli argued that a designer could work with a half-dozen typefaces for
life. The constraint is not poverty but mastery. Within a single project:
1 face is sufficient; 2 is acceptable; 3 is the absolute maximum and
requires justification. [VC]

**E1.2 — The number of visual elements should not exceed the number of content
distinctions to be made.**
Müller-Brockmann: reducing the number of visual elements and incorporating
them into a grid system creates compact planning and clarity. Fail if a
layout has more visual modules than there are distinct content types. [MBr]

**E1.3 — Every element on the canvas must pass the removal test.**
If removing an element would not diminish the information or structure of
the design, remove it. Tufte's principle applied to layout: maximize the
content-to-element ratio. Fail if you cannot state the function of every
visible element. [TUF, MBr, VC]
**[CROSS-SOURCE AGREEMENT]**

**E1.4 — Ornament must earn its place by solving a problem.**
An ornamental element (rule, flourish, background texture, icon, illustra-
tion) earns its place if: (a) it marks a structural boundary that whitespace
alone does not adequately mark; or (b) it carries semantic content. Fail
if ornament is present for decorative comfort without meeting criterion
(a) or (b). [VC, BR]

**E1.5 — Do not use color for emphasis in body copy unless semantic.**
Bold or italic are the appropriate inline emphasis tools. Color emphasis in
running text implies hyperlink or error-state semantics. Fail if color is
used to emphasize a word or phrase in body copy that is neither a link nor
a semantic status marker. [PT, RUI]

**E1.6 — Minimize border usage. Use spacing and background to define structure first.**
Borders add visual weight and imply structural hierarchy. Before adding a
border, ask: does a background color change or increased padding create the
same separation? Fail if a design has more than 2 categories of border
usage (e.g., card borders + divider lines + input borders = 3 categories
is the maximum before reviewing). [RUI]

---

### E2. How Master Designers Prune

**E2.1 — Vignelli's scale reduction method: establish hierarchy through scale alone
before adding weight or color.**
Vignelli often avoided bold and italic altogether, using only size
differentials to create hierarchy. Test: if you removed all bold and italic
from a design, would hierarchy survive through size alone? If yes, the
weight is additive decoration. Fail if bold or italic is the only hierarchy
cue at any level. [VC]

**E2.2 — Uniformity in illustration sizing reduces noise.**
The more sizes an image set uses, the noisier the layout. Constrain photo
or icon sizes to 2–3 discrete sizes per layout. Fail if a single page uses
more than 3 distinct image sizes for the same content type (e.g., 5
different card image heights). [MBr]

**E2.3 — Tufte's erasing test: remove an element; if the chart still shows the
same data, the element was chartjunk.**
Elements that survive the erasing test: axis labels, data points, the data
line itself. Elements that often fail: gridlines (use only when precise
values are read), 3D perspective, background fills on chart areas, decorative
tick marks. [TUF]

**E2.4 — Shadows in UI: 5 elevation levels are sufficient for a complete system.**
More than 5 shadow sizes produces imperceptible distinctions. Define:
no shadow / tight subtle shadow / card shadow / dropdown shadow / modal
shadow. Fail if a design system defines more than 6 shadow tokens. [RUI]

**E2.5 — Spacing and whitespace increases are cheaper than additions.**
Before adding a line, icon, or label to a cluttered section, try doubling
the padding. If the section reads clearly after padding expansion, the
additional element is not needed. [RUI, MBr]

---

### E3. When Ornament Earns Its Place

**E3.1 — A decorative element earns its place if it carries cultural or semantic
weight specific to the content.**
A woodcut illustration in a book about woodcut printing is semantic, not
decorative. A generic flourish in the same book is not. The test: would a
reader in the subject matter recognize the ornament as meaningful? [BR, VC]

**E3.2 — Textured backgrounds are acceptable only when they increase scannability
of content placed over them.**
A subtle paper texture behind long-form text can reduce eye strain on
bright-white screens. Fail if a texture reduces contrast between text and
background below 4.5:1, or if it creates a moiré-like vibration that
distracts from reading. [TUF principle of non-data-ink applied to UI; WCAG]

---

## F. WHEN RULES BREAK

**F1 — Short measure + justified text is a permitted violation of the
left-align default, when hyphenation is active and rendering quality is verified.**
Rule broken: A4.4 / A6.4 (prefer left-aligned on web).
What governs the violation: justified text is historically used in books
and formal documents and produces a cleaner block when hyphenation is
properly implemented. Justified text without hyphenation is never acceptable.
If the rendering environment allows fine-grained hyphenation control
(InDesign, high-quality web type rendering), justified text is defensible.
[BR, PT]

**F2 — Lowercase letterspacing is permitted for extremely condensed or bold
display faces at small sizes.**
Rule broken: A5.2 (never letterspace lowercase).
What governs the violation: Bringhurst himself notes that some condensed or
bold lowercase alphabets (Univers Bold Condensed is the cited example)
may benefit from moderate tracking because their default spacing is
pathologically tight. The test: does tracking improve or worsen legibility
for this specific face at this specific size? If improve, it is permitted.
[BR §2.1.7]

**F3 — Three or more typefaces are permitted in a multi-brand or wayfinding system
context.**
Rule broken: A1.1 (max 2 families).
What governs the violation: a wayfinding system serving multiple distinct
brands (a corporate campus with 4 tenants, a signage system for an airport
with distinct zones) may require each brand's typeface. The violation is
functional, not aesthetic. Each face must have a distinct spatial or
brand zone — they should never appear on the same surface. [VC notes on
systems work; BR]

**F4 — Color-only emphasis in body copy is permitted when the writing system
requires it (e.g., linked reference citations, code syntax).**
Rule broken: E1.5 (no color emphasis in body copy unless semantic).
What governs the violation: linked text in running prose has a universally
understood semantic (navigate here). Code syntax highlighting is a distinct
semantic layer. These are not decoration. The test: would a user who cannot
see the color lose information? If yes, the color is non-semantic — add an
underline or icon. If no, the color is semantic and permitted. [WCAG 1.4.1,
PT]

**F5 — Modular scale ratios may be abandoned for a hand-tuned scale if the
mathematical scale produces optically incorrect results.**
Rule broken: A2.1 (use a modular scale with a named ratio).
What governs the violation: mathematical scales are tools, not laws
(Butterick's exact position). If a scale derived from the Perfect Fifth
produces a 30px heading that looks identical in weight to the 24px subhead,
hand-tuning to 32px is correct. The test: does the scale produce perceptible,
clean hierarchy at the actual rendering sizes? If the mathematical value
fails this test, deviation is permitted. [PT, Bringhurst §3.1]

**F6 — Very long measures (75+ characters) are acceptable for code blocks,
transcripts, and data tables.**
Rule broken: A4.1 (45–75 char measure for body text).
What governs the violation: these content types are not read in the same
scanning pattern as prose. Code must not be arbitrarily line-wrapped;
transcripts preserve original line breaks; tables require full-width display.
The measure rule applies to narrative body copy only. [PT, BR §2.1.2]

**F7 — Omitting chart gridlines entirely is incorrect when precise value reading
is required.**
Rule broken: Tufte's lean toward gridline elimination (E.2.3).
What governs the violation: Tufte recommends removing gridlines when the
chart's message is the trend or shape of data. If the reader must extract
a precise value from the chart (e.g., a quarterly financial summary), grid-
lines at meaningful intervals aid accuracy and are not chartjunk. The test:
can a user extract the required precision without gridlines? If no, gridlines
stay. [TUF — Tufte himself acknowledges the precision-read case]

**F8 — A heading that is the same size as body copy is acceptable in intentionally
quiet editorial design.**
Rule broken: A2.5 / D4.2 (hierarchy requires visible scale or weight
difference).
What governs the violation: a design that deliberately employs uniform
typographic color (all text the same size, weight differentiated only
subtly) is a recognized modernist aesthetic choice (cf. Vignelli's
scale-as-hierarchy method). The violation is intentional and consistent
across the entire composition. Fail: if only one heading breaks the scale
while all others comply — that reads as an error, not a decision. [VC, BR]

**F9 — Tighter line-height than 1.2 is acceptable for large-scale display type
above 72px.**
Rule broken: A3.1 (leading minimum 1.2).
What governs the violation: at extreme display scales (poster headlines,
full-viewport type), the vertical distance created by even 1.2 line-height
appears as a break between visually unrelated lines. A tight 0.9–1.05
line-height knits the headline into a single typographic mass. The test:
at 72px+, does line-height 1.2 produce a legible, unified block or a series
of isolated lines? If isolated, tighten. [PT, typographic convention for
display work]

**F10 — More than 2 typefaces are permitted in a design that treats typeface
contrast as its primary expressive device.**
Rule broken: A1.1 (max 2 families).
What governs the violation: certain editorial, cultural, or typographic-
showcase projects make the multiplicity of faces the subject. This is a
design statement, not a solution to a communication problem. For a B2B
service brand, this violation is essentially never applicable — it is
included for completeness and to define the boundary. The test: is the
multi-typeface system itself the content? If yes, the rule breaks. If no,
enforce the limit. [BR, type design tradition]

---

## Cross-Source Agreement Index

The following 19 rules are supported by two or more independent canonical
sources and carry the highest authority. Treat a failing check on any of
these as a hard fail requiring resolution, not a soft flag for review.

| Rule | Summary | Sources |
|------|---------|---------|
| A1.1 | Max 2 typeface families | VC, SP, BR |
| A2.1 | Use a modular scale, not arbitrary steps | BR, PT |
| A3.1 | Leading 1.2–1.45 for body text | PT, BR |
| A4.1 | Single-column measure 45–75 characters | BR, PT |
| A4.4 | Do not center text blocks over 2–3 lines | PT, RUI |
| A5.1 | Letterspace all-caps 5–12% | BR, PT |
| A5.2 | Never letterspace lowercase body text | BR, SP |
| A6.1 | Justified text requires hyphenation | BR, PT |
| A6.4 | Prefer left-aligned for web body copy | BR, PT |
| B1.1 | Every layout needs an explicit alignment system | MBr, VC |
| B2.3 | Spacing within groups < spacing between groups | RUI (cross-confirmed by Gestalt proximity) |
| C1.1 | UI palette needs 8–10 grey shades, 5–10 per color | RUI (scale requirement) |
| C2.1 | Body text contrast minimum 4.5:1 | WCAG, design industry |
| D1.1 | One primary focal point per composition | MBr, VC |
| D1.2 | Hierarchy: size, then weight, then color | RUI, SP |
| E1.3 | Every element must pass the removal test | TUF, MBr, VC |
| E1.4 | Ornament must solve a problem | VC, BR |
| A9.1 | Indent XOR space between paragraphs — not both | PT, BR |
| A8.1 | Oldstyle figures in prose, lining in tables | BR, SP |

---

## Appendix: Source Reliability Notes

**Bringhurst** is the deepest technical reference for micro-typography (spacing,
letterforms, hyphenation, scale). Its page proportion and margin chapters
(§8) are the most rigorous survey in print but were not fully excavated
here because they are print-specific. Apply his grid principles directionally
to web; they do not translate with numerical precision.

**Müller-Brockmann** supplies the strongest systemic grid logic. His rules on
field-based content sizing and hierarchy of regions are directly applicable
to multi-column web layouts and data-heavy content.

**Refactoring UI** is the most concretely actionable for screen interfaces.
Its spacing scale, color shade counts, and type scale are grounded in
real UI production constraints and translate directly to CSS design tokens.

**Butterick** is the clearest on micro-typographic legibility: measure, leading,
letterspacing, case. Freely readable at practicaltypography.com — the
primary reference for resolving any ambiguity in Section A.

**Vignelli** supplies the discipline framework: restraint, typeface limits,
timelessness tests, grid as mandatory structure. His numeric specifics
(margin 10mm, 3-column letterhead) are applicable directly to print and
as structural analogues for web.

**Tufte** applies primarily to Section E (restraint) and to any chart, table,
or data visualization element. His data-ink ratio and chartjunk framework
are the canonical tools for pruning visualizations.

**Spiekermann** corroborates the pairing, hierarchy, and spacing rules and adds
practical type-for-text-at-work perspective. Good tiebreaker when Bringhurst
is ambiguous.

**Simmons/Andrew** are the authoritative sources for intrinsic CSS layout
strategy. Their rules in Section B6 supersede any print-derived grid
thinking for responsive web work.

**WCAG 2.1** is the only legally-referenced standard in this document. Contrast
ratio rules (C2.1–C2.4) are not stylistic preferences — they are compliance
requirements for public-facing web content.
