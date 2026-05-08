---
title: "Design Failure Modes — CastWorks Trip-Wire Reference"
date: 2026-05-08
sources_researched:
  - underconsideration.com/brandnew
  - thebrandingjournal.com
  - smashbrand.com
  - fastcompany.com
  - creativebloq.com
  - nngroup.com (Nielsen Norman Group)
  - baymard.com
  - cxl.com (ConversionXL)
  - payan.design
  - colonyspark.com
  - subtraction.com (Khoi Vinh)
  - bradfrost.com
  - packagingdigest.com
  - dezeen.com
  - fortune.com
  - brandfinance.com
  - boia.org
  - w3.org (WCAG)
  - accessibility.psu.edu
  - prg.sh
  - trajectorywebdesign.com
entry_counts:
  TYPOGRAPHY_TRAPS: 7
  COLOR_TRAPS: 6
  LAYOUT_TRAPS: 8
  COPY_TRAPS: 6
  IMAGERY_TRAPS: 4
  INTERACTION_TRAPS: 5
  BRAND_EQUITY_TRAPS: 8
  ACCESSIBILITY_TRAPS: 5
total_entries: 49
context: >
  Negative examples for CastWorks (B2B service-brand website). Complements canon
  and brand books on the negative axis. Each entry is a testable trip-wire, not
  a vague principle. Written so a designer can run a pre-flight check.
---

# Design Failure Modes — Trip-Wire Reference

This is a catalog of specific design failures: redesigns that were walked back, patterns that cratered conversion or trust, trends that aged badly, and moves that look defensible in isolation but fail in practice. Each entry names a case, identifies the principle violation, and ends with a pre-flight check the designer can run on the current work.

The reference is organized by failure category. Within each category, entries run from brand-level (strategic) to execution-level (tactical), because the most expensive failures are usually made at the strategic level and discovered at the execution level.

---

## TYPOGRAPHY TRAPS

---

### TT-1: Weight-as-refinement — using ultra-thin type to signal luxury or editorial taste

**THE TRIP-WIRE:** Specifying font weight 100 or 200 (Thin / ExtraLight) for body copy, hero headlines, or UI labels on the assumption that thinness reads as premium restraint.

**WHO TRIED IT:** Widespread across the 2012–2018 wave of "luxury-influenced" B2B and DTC sites. The pattern spread from fashion editorial (where thin type prints at large sizes on coated paper with tight process control) into web interfaces where neither condition holds. Burberry's 2018–2019 rebrand used ultra-thin type as part of its Helvetica-inflected minimalism before partially reversing course in 2024.

**WHAT HAPPENED:** The W3C's own accessibility working group documented the specific failure mode: rasterization at screen resolution renders light-weight strokes as graduated gray rather than the specified color. Black text specified at weight 100 renders as a patchwork of dark gray, medium gray, and near-white at typical body sizes (14–16px), causing effective contrast to fall far below the 4.5:1 WCAG AA minimum even when the color values nominally pass. Penn State's accessibility office confirmed this independently: "when a light weight font is used for long passages of body text, the lightness of the characters may be difficult for many readers to clearly see because the ultra thin strokes can cause the letters to blend in with the background." Current accessibility tooling does not catch this — it validates only hex contrast values and the user agent's reported font size, ignoring actual stroke width.

**WHY IT FAILED:** Conflation of print convention with screen convention. Thinness confers elegance in offset printing because ink sits on coated stock at controlled densities. On screen, RGB subpixel rendering degrades thin strokes in ways that vary by display technology, OS rendering engine, and zoom level. The "premium" read disappears; the accessibility failure stays.

**HOW TO DETECT IT IN OUR WORK:** Check every type style with weight below 400 that appears at sizes smaller than 24px. Run those specific combinations through a contrast checker using the actual hex values. Then view the rendered page at 100% zoom on a standard display (not a retina/HiDPI screen) and assess stroke legibility without magnification. If you can only read it clearly because you know what it says, the weight is too thin.

---

### TT-2: The "tech uniformity" convergence — every redesign produces the same geometric sans

**THE TRIP-WIRE:** Selecting a geometric or neo-grotesque sans (Inter, Söhne, ABC Diatype, GT America, Neue Haas Grotesk) because it reads as "premium tech" without asking whether it contributes a distinctive voice or only blends the brand into the category median.

**WHO TRIED IT:** Khoi Vinh documented this in 2018 on Subtraction.com, noting a pattern spreading across major tech brands — an entire industry visually converging. James Edmonson (Oh No Type Co.) summarized it as a "pervasive tendency towards visual uniformity that seems to draw in nearly every major tech brand operating today." The "AI purple gradient problem" research (2025) confirmed the same dynamic in AI startup sites: when AI tools generate UIs, they produce Inter or Roboto on white with purple accents — not because these choices are good, but because they were statistically dominant in the training corpus.

**WHAT HAPPENED:** Brands designed themselves to disappear. When every competitor at a category level uses the same type system, the typeface stops encoding brand identity and starts encoding category membership. Category membership is table stakes, not a differentiator. Vinh diagnosed the root cause as designers prioritizing implementation questions ("how do we propagate our design system?") over strategic ones ("what unique contribution does this typeface make?").

**WHY IT FAILED:** Design systems incentivize replication. The cascade from a single popular choice (Figma shipping Inter as its default UI font; Tailwind's component libraries defaulting to inter) floods training data and design reference libraries, making the choice feel validated by consensus when it is actually validated by inertia.

**HOW TO DETECT IT IN OUR WORK:** Find three direct B2B service competitors. Screenshot their hero sections. If they share the same typeface family or a functional equivalent (neo-grotesque in the 400–700 weight range), our type choice is not differentiating. CastWorks's locked system (Instrument Serif + Inter) has a partial answer here: Instrument Serif is the voice; Inter is structural scaffolding. The question is whether Instrument Serif is doing enough visible work in the hero and key copy moments to establish a distinct register, or whether Inter is dominating and the look converges toward the category.

---

### TT-3: Bad kerning on a "custom" wordmark signals amateurs did the job

**THE TRIP-WIRE:** A wordmark where letter spacing is set by default tracking values rather than manually adjusted at the specific size and weight the mark will be used, producing collisions, gaps, or uneven color density in the word.

**WHO TRIED IT:** Yahoo's 2013 logo. The typographic community's largest complaint after the "30 logos in 30 days" stunt and the final reveal was that the Optima-based wordmark had bad kerning. Designers also noted Optima's fuzziness at small sizes, its unsuitability for a tech context, and a dated bevel effect on the letterforms. These were not aesthetic preferences — they were legibility and contextual fit failures.

**WHAT HAPPENED:** The redesign process became the story. By teasing thirty alternate logos over thirty days before the final reveal, Yahoo generated maximal attention and then delivered a mark that professional typographers could dissect and dismiss on technical grounds. The gap between the production value of the campaign and the execution quality of the final mark was publicly visible.

**WHY IT FAILED:** Treating a wordmark as typography rather than as a drawn object. At mark sizes, optical kerning diverges significantly from metric kerning. Individual character pairs at specific weights require manual adjustment. Automated tracking is a starting point, not a finished mark.

**HOW TO DETECT IT IN OUR WORK:** Print the CastWorks wordmark at its primary usage sizes (business card, website header at 32px equivalent, presentation slide heading). Photograph it and zoom in. Look at the gaps between: W and o, W and a, s and t, r and k, s at the end. If any pair has visibly more or less air than adjacent pairs, it requires manual kerning correction.

---

### TT-4: The bevel/effect relic — applying dimension-faking effects to type in a flat-design context

**THE TRIP-WIRE:** Adding subtle drop shadows, inner shadows, bevels, embossing, or texture overlays to typographic elements in a contemporary (post-2014) context without a specific conceptual rationale for the dimensional effect.

**WHO TRIED IT:** Yahoo 2013 (bevel on the letterforms — noted by typographers as a "dated look"). Broadly characteristic of the 2005–2012 skeuomorphic era before iOS 7 initiated the flat design transition.

**WHAT HAPPENED:** When Apple moved aggressively to flat design with iOS 7 (2013), the shift was so widely adopted that dimensional type effects became chronological markers — they read as "2008" in the same way certain hair and clothing styles read as "2003." Subsequent design generations treated them as automatically regressive.

**WHY IT FAILED:** Effects without purpose are period markers. The period they mark (late skeuomorphism) is now used as a negative reference in design discourse. The effect carries the era's aesthetic baggage into present contexts.

**HOW TO DETECT IT IN OUR WORK:** Audit every text-level CSS property for text-shadow, box-shadow, filter: drop-shadow, gradient-fill, and outline/stroke at the character level. For each instance, write one sentence stating the design rationale. If the sentence is "it looks polished" or "it gives it depth," the effect has no justification — remove it.

---

### TT-5: Mismatched tone registers across copy blocks

**THE TRIP-WIRE:** Hero headline uses editorial, confident, compressed language; feature descriptions drop into stiff corporate boilerplate; CTA copies reverting to SaaS defaults ("Get Started," "Learn More"). The visitor reads a brand that cannot decide what register it occupies.

**WHO TRIED IT:** Documented by Nielsen Norman Group in 2023: "If a hero section opens with a casual tone but feature descriptions read like stiff corporate boilerplate, users feel a jarring shift in personality... tone inconsistency erodes user confidence." This is extremely common in agency-built B2B sites where different sections are written by different people without a governing voice document.

**WHAT HAPPENED:** Users interpret tone inconsistency as organizational incoherence — the same cognitive signal they get from a company representative whose speaking register changes erratically. Trust drops faster with visible inconsistency than with a consistently mediocre voice.

**WHY IT FAILED:** Copy is treated as a content problem (fill the slots) rather than a design problem (maintain a coherent register across every text touchpoint). Without a locked voice document, each contributor defaults to their own register.

**HOW TO DETECT IT IN OUR WORK:** Read every text block on the page aloud in sequence without pausing at section boundaries. Note where the spoken voice changes register. Mark any section where you'd shift from conversational to formal or vice versa. Those marks are inconsistencies that need to be resolved toward a single governing voice.

---

### TT-6: Tracking set too wide on body copy — "airy" text that breaks reading flow

**THE TRIP-WIRE:** Applying positive letter-spacing (tracking) of 0.05em or greater to body-copy or paragraph text, typically to achieve a "refined" or "spacious" feel.

**WHO TRIED IT:** Common in premium B2B and agency sites influenced by print editorial conventions. Tracked body text is appropriate in print (especially at smaller sizes) because ink spread and paper absorption require compensation. On screen it rarely has a justification — NN/g research consistently shows that standard or slightly tighter tracking reads faster and with less effort for body text.

**WHAT HAPPENED:** When users have to work harder to read, they read less. On high-intent B2B pages where the copy is doing persuasion work, any friction in reading increases the probability that key arguments are skimmed past.

**WHY IT FAILED:** Application of a print convention to a screen context without testing whether the convention improves the experience in the new medium.

**HOW TO DETECT IT IN OUR WORK:** Check the letter-spacing CSS property on every text style below 24px. If any body or supporting copy has letter-spacing above 0.03em, it needs a documented rationale. The burden of proof is on the tracked version.

---

### TT-7: All-caps usage in body passages — legibility degraded, authority misread as aggression

**THE TRIP-WIRE:** Using all-caps type in sections longer than a single word or a 3–4 word label, typically to signal authority, category headers, or premium register.

**WHO TRIED IT:** Widespread across professional services websites as a means of establishing formality. Common in sections labeled "OUR PROCESS" / "HOW IT WORKS" / "WHAT WE DO."

**WHAT HAPPENED:** Research going back to 1955 (confirmed repeatedly since) shows all-caps text is approximately 10–15% slower to read than mixed-case equivalents because readers rely on word shape (the ascender/descender profile) as a parsing shortcut. In all-caps, every word is a rectangle. At high information density or in longer passages, this becomes a legibility burden.

**WHY IT FAILED:** All-caps is a legitimate display-level tool at short lengths (1–4 words). Extending it to run-on labels or descriptive text mistakes the "authoritative" read of the style for a license to apply it broadly.

**HOW TO DETECT IT IN OUR WORK:** Search the codebase and design files for text-transform: uppercase. For each instance, count the word length. Any all-caps passage over 5 words should be reconsidered. Subheads and section labels that are 2–4 words are defensible. Paragraphs or extended labels are not.

---

## COLOR TRAPS

---

### CT-1: The AI purple default — indigo/violet gradient as signal of innovation

**THE TRIP-WIRE:** Using a purple, indigo, or violet gradient (especially dark-to-light or radial) as the primary palette or hero background, reading it as a signal of innovation, intelligence, or technical sophistication.

**WHO TRIED IT:** Documented extensively in 2024–2025. The root cause: Tailwind CSS's component library shipped with bg-indigo-500 as the default action color, flooding tutorial codebases from 2019 onward. LLMs trained on this corpus reproduce purple gradients as the median of "modern tech design." Stripe, Twitch, and the twilight-aesthetic wave of 2015–2020 reinforced the association. The pattern is now so ubiquitous that a 2025 analysis was titled "Why Your AI Keeps Building the Same Purple Gradient Website." shadcn/ui's gradient hero blocks and Aceternity UI's gradient templates continue to ship the same defaults.

**WHAT HAPPENED:** The palette ceased to differentiate and began to categorize. A purple gradient no longer signals "innovative tech company" — it signals "used an AI tool or a template library." The function of color in brand design is to create distinctive memory structures. When the distinctive element is shared with thousands of other brands, it provides no memory-structure benefit.

**WHY IT FAILED:** Color as trend rather than color as strategy. Purple was not chosen because it was right for these brands — it was chosen because it appeared frequently in design inspiration and tutorials and felt validated by frequency.

**HOW TO DETECT IT IN OUR WORK:** Pull screenshots of twenty B2B service or SaaS sites from the past 18 months in our adjacencies. Count how many use purple, violet, indigo, or a purple-adjacent gradient as their primary web palette. If the count is above five, our use of any purple-family color needs a specific strategic rationale beyond "it signals innovation."

---

### CT-2: Low-contrast palette chosen for aesthetic reasons — failing WCAG at 1.4.3

**THE TRIP-WIRE:** A color system where text colors and background colors are chosen for visual harmony or brand alignment before being checked against WCAG 2.1 Success Criterion 1.4.3 (4.5:1 ratio for normal text; 3:1 for large text 18pt+).

**WHO TRIED IT:** Documented by BOIA (Bureau of Internet Accessibility): "Low contrast text remains the most common accessibility issue in 2023," detected on 83.6% of home pages in their annual audit. Dark mode UIs are especially vulnerable — "vibes-first" dark interfaces with pale borders and gray text on near-black backgrounds fail consistently.

**WHAT HAPPENED:** Beyond accessibility non-compliance (a legal risk under ADA and similar), low-contrast text creates measurable usability degradation for users with astigmatism, age-related contrast sensitivity reduction, or low vision. A brand presenting itself as credible and professional while failing the most basic legibility check signals inattention to craft.

**WHY IT FAILED:** Contrast testing is treated as a compliance checkbox rather than a design quality check. The failure often originates in design tools where displays are calibrated bright, making low-contrast text appear more legible than it is at typical user display settings.

**HOW TO DETECT IT IN OUR WORK:** Run every text/background color pair through WebAIM's contrast checker. This includes: body text on all background colors, CTA button text on button background, footer text on footer background, placeholder text on form fields, and any text overlaid on photography. Do not test on a calibrated professional display — use a standard consumer display at factory settings, because that is what most users see.

---

### CT-3: The dark hero with radial "orb" gradients — now a template marker

**THE TRIP-WIRE:** Black or near-black hero background with one or more soft radial-gradient orbs (typically in cyan/teal, violet, or green) placed in the corners or as a central glow, creating an "atmospheric" effect.

**WHO TRIED IT:** Linear, Vercel, and their design-system inheritors established this aesthetic in 2021–2022. By 2023 it had been absorbed into shadcn/ui's block library ("React Centered Gradient Orbs Hero Block"), Aceternity UI templates, and thousands of Next.js/Tailwind starter projects. The pattern appears in the ElevenLabs design documentation (Aceternity blocks), in countless developer tool and AI startup sites.

**WHAT HAPPENED:** The pattern migrated from distinctive brand choice to template default in approximately 18 months. The codified presence in component libraries (shadcn, Aceternity) means any developer building quickly without a design constraint will produce a site using it by default. The pattern now encodes "built fast" rather than "thought carefully."

**WHY IT FAILED:** Not wrong by design principle — it works visually and focuses attention on headline copy. Wrong by saturation: once a pattern is in the default component library, it loses its ability to differentiate. CastWorks launching on this aesthetic would signal "another developer-tool startup" to anyone with visual pattern recognition across the space.

**HOW TO DETECT IT IN OUR WORK:** Search design comps and CSS files for: radial-gradient in combination with black or near-black (#0a0a0a to #1a1a1a) backgrounds. Check whether any component library assets are being used whose defaults ship with this pattern (shadcn hero blocks). If found, require a replacement that achieves atmospheric depth through means other than the orb convention.

---

### CT-4: Brand color chosen for personal preference and then "justified" through post-hoc rationale

**THE TRIP-WIRE:** Selecting a primary brand color based on taste ("I like this teal") and then constructing an explanation connecting it to brand values — instead of deriving color from a strategic brief before any aesthetic judgments.

**WHO TRIED IT:** The Pepsi 2008 rebrand is the canonical case. Arnell Group's 27-page "Breathtaking Design Strategy" document retrospectively connected a minor adjustment to the Pepsi circle's white stripe to the Golden Ratio, the Mona Lisa, the Parthenon, the Sun's path in Earth's gravitational field, and the theory of relativity. The document was leaked and became an internet artifact, with designers calling it "surely this is satire." The logo itself barely changed. The $1M fee and the $1.2B global rollout were spent moving two wavy lines a few degrees. Arnell later told CBS News the Pepsi logo was "bullshit."

**WHAT HAPPENED:** The post-hoc rationalization framework was publicly embarrassing at the highest professional level. But the practical failure is subtler: when color is chosen by personal preference, it often lacks discriminating power. If the designer loves teal because teal is everywhere they aspire to, the brand inherits the color's existing associations rather than building its own.

**WHY IT FAILED:** The creative brief should precede color selection, not the reverse. "What does this color need to do for this brand in this market context?" is a different question from "which of these colors do I find compelling?"

**HOW TO DETECT IT IN OUR WORK:** Challenge every primary color choice with: "What was the strategic brief that this color answers?" If the answer is a post-hoc narrative — even a sophisticated one — the choice is preference-dressed-as-strategy. The brief should precede and constrain color exploration.

---

### CT-5: Color-only differentiation — using color as the sole carrier of meaning in UI states

**THE TRIP-WIRE:** Designing form error states, active navigation items, CTA disabled states, or data visualizations where color is the only visual difference between states (e.g., a button that turns gray when disabled, with no change to shape, icon, or label).

**WHO TRIED IT:** Neumorphism made this failure systematic: the entire design language was built on slight color shifts between pressed and unpressed states, with insufficient contrast differentials to be usable without color perception. The accessibility community documented the pattern exhaustively in 2020–2021. Glassmorphism shares the same failure mode — transparency layers compress the contrast between interactive and non-interactive states.

**WHAT HAPPENED:** WCAG 1.4.1 (Use of Color, Level A) explicitly prohibits color as the only visual means of conveying information. Neumorphism was therefore non-compliant at its core. Beyond compliance, the usability failure affected sighted users in bright outdoor light, on non-color-calibrated displays, and in states of inattention.

**WHY IT FAILED:** The aesthetic principle (seamless surfaces, gentle depth) was in direct conflict with the usability principle (clear affordance signaling). When aesthetics win that conflict, usability loses. Both neumorphism and glassmorphism were "not picked up by mainstream for functionality and accessibility reasons."

**HOW TO DETECT IT IN OUR WORK:** Take every interactive state (hover, active, disabled, error, success) and photograph it in grayscale. If two states are indistinguishable in grayscale, a secondary differentiator (shape change, iconography, label change, border) is required.

---

### CT-6: The luxury-palette transplant — grey/cream/white with a single accent, applied to a service brand with no luxury positioning

**THE TRIP-WIRE:** Adopting a near-monochrome palette (cream, warm white, warm grey) with a single restrained accent color, transplanting the "quiet luxury" color system from fashion and high-end hospitality into a B2B service context without the substantive positioning to support it.

**WHO TRIED IT:** The "quiet luxury" and "stealth wealth" aesthetic that peaked in consumer goods in 2023–2024 infected professional services web design in 2024–2025. The failure mode is common on agency, consultancy, and early-stage startup sites that want to signal premium positioning before earning it.

**WHAT HAPPENED:** Industry observers noted the pattern: "what once felt fresh, premium, and forward-thinking now often feels predictable — sometimes even forgettable. Every startup, every challenger brand, every DTC product launch in the 2010s followed the same toolkit: a clean sans-serif, a neutral palette, and a logo with nothing extraneous on it. The result: A sea of brands that all looked thoughtful, and none of which looked different." In service brands specifically, the failure is that restraint reads as emptiness when there is no inherited prestige to fill the space.

**WHY IT FAILED:** Quiet luxury is a discipline, not an aesthetic. It works only when a brand has enough material substance, heritage, or social proof that restraint in visual presentation reads as confidence rather than absence of content. An unproven brand using the same palette as a century-old luxury house is not signaling prestige — it is signaling misalignment.

**HOW TO DETECT IT IN OUR WORK:** If CastWorks uses a near-monochrome palette, identify three comparison points: (1) an established luxury or premium service brand using the same palette, (2) an unproven brand using the same palette, and (3) our current level of proof and social validation. If the comparison points are category (1) but our proof level resembles category (2), the palette is aspirational rather than earned. Consider whether a stronger, more declarative palette would serve the current stage better.

---

## LAYOUT TRAPS

---

### LT-1: Company-structure navigation — labeling menus for internal organization instead of buyer intent

**THE TRIP-WIRE:** Navigation items organized around internal company categories ("Who We Are," "What We Do," "Our Services," "Our Approach") rather than around the questions and paths that buyers arrive with.

**WHO TRIED IT:** Documented across B2B site audits by Trajectory Web Design and others: "B2B buyers don't engage well with navigation categories like 'Who we are,' 'What we do,' 'Who we serve' — they're looking for 'Products, services, solutions, customers, pricing.'" The pattern is near-universal in early-stage and founder-built B2B sites because the person writing the navigation knows the company from the inside.

**WHAT HAPPENED:** Studies show sites with confusing navigation see form submission rates below 1%, while well-organized sites achieve 2–3% or higher. On a site with 10,000 monthly visitors, that gap represents 100 vs. 300 leads — measurable pipeline impact. More acutely: buyers interpret navigation confusion as a product maturity risk signal. If they cannot find the information they need, they infer that the company is not yet organized around serving customers.

**WHY IT FAILED:** Navigation is an information architecture problem. Information architecture serves retrieval, not expression. "Our Approach" is a company expression; "How it Works" is an answer to the buyer's question. These are not cosmetically different — they point at different mental models.

**HOW TO DETECT IT IN OUR WORK:** List every navigation label. For each, write the buyer question it answers. If you cannot write the buyer question (if the label maps to a company concept rather than a buyer need), rename it. Do this before the site launches, not after the first analytics review.

---

### LT-2: The 2010s SaaS hero template — illustration + gradient + three-feature row + CTA

**THE TRIP-WIRE:** A homepage structure with: (1) a hero illustration (custom or stock, typically showing "people collaborating" or an abstract isometric object), (2) a gradient background, (3) a three-column feature row directly below the fold, (4) a single CTA above the fold.

**WHO TRIED IT:** This structure was dominant from approximately 2014 to 2020. Intercom, HubSpot, Mailchimp, and hundreds of SaaS companies used it or close variants. It was taught in conversion rate optimization courses as "best practice" for long enough that it became the baseline, then the cliche.

**WHAT HAPPENED:** The template became so familiar that it stopped communicating anything beyond "this is a SaaS company." Users habituated to the structure process it as a category signal rather than as a message about the specific company. More damaging for B2B service brands: the illustration aesthetic signals product-company-with-a-free-tier, which is the wrong mental model for a service brand. Service brands need to establish trust in people and process, not features and scalability.

**WHY IT FAILED:** Optimization toward conversion convention rather than brand distinctiveness. The structure was tested and refined in high-traffic product contexts where conversion optimization at the margin mattered. It was then applied wholesale to contexts where the primary task is trust establishment, not feature-to-feature comparison.

**HOW TO DETECT IT IN OUR WORK:** Take a screenshot of the CastWorks homepage hero. If it has all four elements (illustration, gradient background, feature row, single CTA), it is executing the 2015 template. The presence of two or more of these elements in combination triggers the association regardless of individual execution quality.

---

### LT-3: Scroll-jacking — overriding the browser's native scroll behavior to create "cinematic" experiences

**THE TRIP-WIRE:** Using JavaScript to intercept scroll events and substitute programmatic animations, snapping, or section-by-section progression for the user's native scroll velocity and control.

**WHO TRIED IT:** Agency and portfolio sites were the primary practitioners (2013–2018). Apple's product marketing pages used section-snap scrolling for hardware reveals. The pattern spread to B2B marketing sites as a way to create "premium" feel and control the narrative sequence.

**WHAT HAPPENED:** Nielsen Norman Group documented the failure in their "Scrolljacking 101" article: altered scrolling behavior causes "disorientation and frustration." The conversion impact is measurable: scroll-hijacked funnels see increased bounce rates because the behavior "kills momentum." Specific failure points: users who scroll quickly to navigate past already-read content are forced through the animation at full speed; users who use keyboard navigation lose expected arrow-key behavior; screen readers break entirely in most implementations. Get Started International's 2024 analysis titled it directly: "Scrolljacking Is Evil."

**WHY IT FAILED:** Scroll is not a passive viewing action — it is how users navigate. Navigation control is one of the most fundamental user expectations on the web. Overriding it in pursuit of an aesthetic experience tells the user that the designer's narrative matters more than the user's time.

**HOW TO DETECT IT IN OUR WORK:** Check for any JavaScript that intercepts wheel events, touches/pointer events with preventDefault() on scroll directions, or any library implementing section-snap, full-page scrolling, or scroll-step behavior (fullPage.js, ScrollMagic section-snap modes). If found: remove unless the section is an explicit product demo where controlling sequence is essential, and even then provide a skip/exit mechanism.

---

### LT-4: Competing CTAs — presenting multiple equal-weight actions and letting the user resolve the priority

**THE TRIP-WIRE:** Placing two or more CTAs with equal visual weight in the same hero or section — typically "Book a Call" and "Learn More" and "See Our Work" at the same size, color, and prominence.

**WHO TRIED IT:** Common on B2B agency and service sites as a way to "serve all visitor intents." The rationale is usually "some visitors are ready to buy and some just want to learn more, so we need both options." This logic is correct but the execution is wrong: the existence of multiple equal-weight actions creates decision friction (Hick's Law: decision time increases with option count) and causes the page to fail at its primary conversion objective.

**WHAT HAPPENED:** CXL (ConversionXL) consistently documents: "reducing CTA choice often raises primary conversion rates." The reason is that adding a secondary CTA does not merely give a second option — it implicitly communicates uncertainty about which action the site operator wants the visitor to take, and uncertainty is contagious.

**WHY IT FAILED:** Serving all intents equally in the visual hierarchy prevents the primary conversion from reading as primary. One CTA should visually dominate; others can exist at lower weight (text links, secondary buttons with outline style) without creating decision paralysis.

**HOW TO DETECT IT IN OUR WORK:** On each page, identify every CTA. Assign a conversion priority rank to each (1 = primary). Check that the rank-1 CTA is visually distinct from all others — it should be the only filled/solid button of its color in that section. If two CTAs share the same button style, one of them is undercutting the other.

---

### LT-5: Navigation consuming more than 15% of viewport height — content starvation on mobile

**THE TRIP-WIRE:** A sticky/fixed navigation bar whose height exceeds 15% of the viewport height on mobile screens.

**WHO TRIED IT:** Documented by NN/g in their sticky headers research: headers consuming more than 15% of the viewport height were rated negatively by users. On a 700px-tall mobile viewport, 15% is 105px — a relatively modest bar. Many mobile navigation implementations with logo, wordmark, hamburger, and a CTA button run to 80–120px on standard displays and significantly more on smaller devices.

**WHAT HAPPENED:** A header that consumes 11%+ of the screen on a mobile viewport creates what usability researchers describe as a "claustrophobic" feel — the available reading area is permanently compressed, which is especially damaging on content-heavy service pages where the case is made in text. The NN/g finding is specific: "using big sticky headers on landing pages or homepages can hinder UX as it blocks content and gives the website an uncomfortable claustrophobic look." The effect is worse than a static header because the space is permanently unavailable, not just absent at the top.

**WHY IT FAILED:** Desktop-first design that treats mobile as a scaled-down version of the desktop experience. At desktop, a 60–80px sticky nav is barely perceptible. At mobile, the same nav is now a significant portion of the usable viewport.

**HOW TO DETECT IT IN OUR WORK:** Open the site in browser dev tools at 375px width (iPhone SE viewport). Measure the nav height in pixels. Calculate as a percentage of 667px (SE viewport height). If above 15% (100px), reduce the mobile nav height or implement a variant that collapses to a smaller bar on scroll.

---

### LT-6: The empty editorial — using extreme white space without the content substance to fill it

**THE TRIP-WIRE:** Adopting a wide-margin, large-white-space layout — influenced by Stripe Press, Anthropic's marketing site, or Mercury — without having the content density or brand substance to justify the visual restraint.

**WHO TRIED IT:** Industry observers documented the pattern in 2024–2025: "minimalism works when the brand has enough substance to carry it — if not, the site can feel empty instead of elevated." The Arterfak Project documented the backlash: "what once felt fresh, premium, and forward-thinking now often feels predictable — sometimes even forgettable." The specific failure mode for unproven brands is that white space substitutes for depth rather than framing it.

**WHAT HAPPENED:** Stripe Press and Anthropic can use maximum white space because they have extreme content density — long essays, research publications, technical documentation — that the restraint is organizing. An early-stage service brand that uses the same visual system while publishing three marketing pages and a contact form does not get the same read. The read is "they don't have much to say." The brand that inspired the look is carrying decades of earned intellectual credibility. The imitator is carrying none.

**WHY IT FAILED:** Confusing the effect of the aesthetic (appears considered and mature) with the cause of the effect (actually considered and mature content, earned over time). The restraint is a byproduct of substance, not a substitute for it.

**HOW TO DETECT IT IN OUR WORK:** Count the substantive content elements on the homepage: unique claims, specific outcomes, verifiable credentials, named clients, evidence. If there are fewer than eight distinct substantive elements, extreme white space is not framing depth — it is highlighting its absence. Reduce margins and increase content density, or replace white space with a bolder visual element that does not require content to justify.

---

### LT-7: Form length as a lead qualification filter — using long forms to look "serious"

**THE TRIP-WIRE:** Contact or demo request forms with more than 5 required fields, rationalized as "qualifying leads" or "showing we take the engagement seriously."

**WHO TRIED IT:** Widespread in professional services. The logic is internally plausible: "If someone fills out a 10-field form, they're a serious prospect." The evidence contradicts it.

**WHAT HAPPENED:** Baymard Institute-adjacent research documented by multiple CRO practitioners: "every additional form field reduces conversion rate by an average of 4.1%. Forms with more than 5 fields in the B2B sector record a 30% conversion decrease." A B2B software company that reduced from 10 to 6 fields saw a 15.65% increase in demo request completions. The practical finding: long forms do not select for high-quality leads — they select for patients.

**WHY IT FAILED:** The qualification mechanism is working: it is filtering out impatient visitors. But impatience is not a proxy for budget, authority, or fit. A VP with a budget and a decision to make in 30 days will not fill out a 10-field form if she can find a competitor with a 3-field form. The 10-field form selected against exactly the kind of prospect it was designed for.

**HOW TO DETECT IT IN OUR WORK:** Count every required field in the contact/inquiry form. If above 5, audit each field for whether it (a) is required for the first conversation or (b) could be gathered during a call. Fields that are "nice to know" in advance are friction for the prospect. Remove them from the form; add them to the intake call.

---

### LT-8: Information architecture reflecting internal team structure rather than buyer decision sequence

**THE TRIP-WIRE:** Page and section organization that maps to how the team thinks about what they do (delivery process, service categories, company history) rather than to the sequence of questions a buyer works through before committing.

**WHO TRIED IT:** Universal failure mode on professional services sites. The B2B navigation trap (LT-1) is the macro version; this is the page-level version. A common pattern: "About / Services / Process / Work / Contact" ordered by organizational logic, where the buyer's actual sequence is "What outcomes can you produce? / Do I trust these people? / What would working with you look like? / What does it cost?"

**WHAT HAPPENED:** Buyers exit pages before reaching their decision-relevant information because the page architecture does not serve retrieval at the buyer's point of need. The payan.design UX analysis documented the downstream effect: "users interpret navigation confusion as product maturity risk signals" — disorganized information suggests organizational immaturity.

**WHY IT FAILED:** Organization as expression ("this is how we think about our work") versus organization as service ("this is how a buyer makes a decision"). The buyer does not care how the company is organized.

**HOW TO DETECT IT IN OUR WORK:** Write down the five questions a skeptical, high-fit prospect needs answered in sequence before contacting CastWorks. Map each question to a page section. If any question is not answered within the first two scrolls, or if sections appear before the questions they answer, the architecture is serving the company, not the buyer.

---

## COPY TRAPS

---

### CPT-1: Vague transformation language — "empower," "transform," "seamlessly," "end-to-end solutions"

**THE TRIP-WIRE:** Hero headlines or service descriptions that use transformation-claiming verbs ("empower," "transform," "elevate," "unlock") or process-quality adjectives ("seamless," "end-to-end," "innovative," "cutting-edge," "best-in-class") without specifying what specific outcome is produced for which specific buyer in what timeframe.

**WHO TRIED IT:** Documented as endemic to B2B. Colony Spark's conversion analysis named the pattern: "messaging like 'We are a leading provider of innovative, end-to-end solutions that empower organizations to achieve their strategic objectives' says nothing and could describe a software company, a consulting firm, or a commercial laundry service." The CRO firm TrajectoryWebDesign confirmed: "headlines like 'Empowering Tomorrow's Innovators' sound impressive in a boardroom and mean absolutely nothing to a website visitor."

**WHAT HAPPENED:** Conversion rate is measurable. Colony Spark cites "28% lift in lead-to-opportunity conversion" and "34% increase in on-page engagement" as outcomes of switching from vague transformation language to specific outcome statements. The mechanism is cognitive: when a visitor cannot answer "what does this do for me" within 5 seconds, they leave. NN/g research from 2023 confirms the 5–8 second decision window.

**WHY IT FAILED:** The language is aspirational for the company but opaque to the buyer. "Empower" requires the visitor to translate the aspiration into a specific benefit — most won't. The copy places the burden of interpretation on the prospect rather than doing the work itself.

**HOW TO DETECT IT IN OUR WORK:** Find every instance of: empower, transform, elevate, unlock, seamless, end-to-end, innovative, best-in-class, cutting-edge, holistic, robust, leverage, synergy, streamline, world-class. For each, rewrite the sentence replacing the vague word with a specific claim. If the rewrite reveals nothing specific, the sentence has no content and should be replaced entirely.

---

### CPT-2: Company-centered hero copy — leading with capability claims instead of buyer transformation

**THE TRIP-WIRE:** A hero headline that opens with the company's identity, credentials, or capability ("Leading B2B creator sourcing firm," "We help brands find the right creators," "Our platform connects you with creators") rather than with the buyer's current problem or desired future state.

**WHO TRIED IT:** Documented by Colony Spark's B2B conversion analysis as the most common homepage pattern. The typical failing form: "[Entity] helps [category] [achieve something vague]." This forces the prospect to mentally translate company capability into personal relevance — most won't complete the translation.

**WHAT HAPPENED:** Colony Spark documented a 19% lift in qualified demo requests within 90 days of switching from company-centered to buyer-narrative-centered hero copy. The research finding is mechanistic: "prospects arrive carrying specific tensions about industry shifts and role changes, not looking for feature lists." When the hero addresses those tensions directly, it closes a search that was already underway. When it does not, the visit is a bounce.

**WHY IT FAILED:** The hero was written by someone thinking about the company, not by someone thinking about the buyer's day. The writer knows what the company does and presents it. The buyer does not know what the company does and needs to know why it matters for their specific situation.

**HOW TO DETECT IT IN OUR WORK:** The test is the "so what" test. Read the hero headline aloud. Then say "so what?" aloud. If the answer to "so what?" is not already in the headline, the headline is company-centered. Rewrite until "so what?" is the answer rather than a follow-up question.

---

### CPT-3: Generic CTA labels — "Get Started," "Learn More," "Explore"

**THE TRIP-WIRE:** CTA labels that describe a mechanical action (start, learn, explore, discover) rather than the specific outcome or commitment the click delivers.

**WHO TRIED IT:** Documented by NN/g: "Avoid vague labels like 'Get Started' that mislead or stall progress. Use plain-language verbs that promise the value of the click." Colony Spark's research showed "personalized calls-to-action convert 202% better than generic ones."

**WHAT HAPPENED:** Generic CTAs fail for two reasons. First, they do not tell the visitor what happens after the click — there is no implicit promise being made, so there is no motivation to click unless the visitor is already fully committed. Second, "Get Started" has been so widely used for so long that it is processed as a category signal ("this is where you click to begin the SaaS onboarding flow") rather than as a meaningful invitation.

**WHY IT FAILED:** The CTA is the last message the visitor reads before converting. It should do work — name a specific benefit, clarify a commitment level, or reduce a specific fear. "Get Started" does none of these. "Book a 20-minute call" does all three: it names an action (book), clarifies the commitment (20 minutes), and reduces the implicit fear that it will be a long or high-pressure interaction.

**HOW TO DETECT IT IN OUR WORK:** List every CTA label on the site. Apply this test: could the label appear on any other B2B service site without modification? If yes, it is generic. Rewrite with a specific action, a specific commitment level, or a specific outcome: "See how it works in 15 minutes," "Get a creator shortlist for your brand," "Talk to us about your next campaign."

---

### CPT-4: Over-promised outcomes disconnected from the evidence on the page

**THE TRIP-WIRE:** Making specific outcome claims ("3x ROAS," "50% reduction in sourcing time," "100+ creators in 48 hours") in hero or above-the-fold copy without the adjacent evidence (case study, testimonial, methodology note) to support the claim.

**WHO TRIED IT:** Common across early-stage B2B startups in a growth mindset: "show the aspiration, earn the trust later." The conversion research argues the opposite: Baymard Institute-adjacent studies show "lack of trust signals near commitment points is one of the leading causes of form abandonment." payan.design's analysis confirmed: "proof elements separated from commitment points" is a primary B2B conversion failure mode.

**WHAT HAPPENED:** Unsubstantiated claims do not build aspiration — they build suspicion. B2B buyers in particular are trained to discount unsupported claims because they have been burned by over-promised vendor relationships. A specific number without a source is not more persuasive than a vague claim — it is less persuasive, because it invites the question "where does that number come from?" without providing an answer.

**WHY IT FAILED:** The claim needs to be in proximity to its evidence. Not on a separate case study page. Not three scrolls below. In the same viewport as the claim, or within one scroll of it.

**HOW TO DETECT IT IN OUR WORK:** For every specific outcome claim (numbers, percentages, timeframes), identify its paired evidence element on the page. If the evidence is more than one scroll away from the claim, move one of them. If there is no evidence element, either soften the claim to a directional statement or add the evidence.

---

### CPT-5: Process-first copy — leading with "how we work" before establishing "why it matters"

**THE TRIP-WIRE:** A services or "how it works" section that opens with a description of the company's methodology or process steps before the visitor has been given a reason to care about the process.

**WHO TRIED IT:** Near-universal in agency and consultancy sites. The "Our Process" section typically reads as a numbered list: "Discovery → Strategy → Execution → Delivery." The implicit logic is that showing rigor builds confidence. The actual reading experience for a buyer is: "I don't yet know if this company can solve my problem, and they are telling me about their meetings."

**WHAT HAPPENED:** Buyers do not buy process — they buy outcomes. Process descriptions, presented before outcomes are established, create friction: the buyer is reading an answer to a question they have not yet asked. The information is not wrong; it is misplaced.

**WHY IT FAILED:** The copy is organized for the seller ("here is how we do excellent work") rather than for the buyer ("here is what you get, here is why it is hard to achieve without us, here is how we achieve it"). The sequencing inverts the buyer's decision logic.

**HOW TO DETECT IT IN OUR WORK:** Find the first process-description or methodology section on the site. Identify what appears before it in the page order. If an outcome claim and a problem statement do not precede it, the section is premature. Reorder: outcome → problem → process.

---

### CPT-6: Social proof positioned at the bottom of the page — trust evidence offered after commitment has already been required

**THE TRIP-WIRE:** Placing client logos, testimonials, case study links, or case counts in the footer or below-the-fold area, treating proof as a "nice to know" afterthought rather than a conversion-stage tool.

**WHO TRIED IT:** Documented by payan.design's UX analysis: "trust-building happens at moments of decision, not globally on the page." The misplacement is structural: companies often list proof elements at the end of a page because that is where they appear in "about us" pages, not because that is where they are most effective at reducing buyer uncertainty.

**WHAT HAPPENED:** Buyer uncertainty peaks at two points: (1) when evaluating whether the company is credible enough to engage at all, and (2) when filling out the contact form. Both of these moments occur near the top of the page and at the form location. Proof elements positioned at the bottom address neither moment — the buyer has already decided to scroll past or already exited.

**WHY IT FAILED:** Conversion optimization research is consistent: proof elements (testimonials, logo strips, case study links) perform best in the viewport where the conversion action is asked, not in a separate "testimonials" section at the bottom.

**HOW TO DETECT IT IN OUR WORK:** Identify every proof element on the site (logos, testimonials, outcome claims from clients, named case references). Map each to its vertical position on the page. Any proof element that appears after the primary CTA or after the fold is positioned defensively rather than offensively. Move proof elements to the hero section (for credibility gate), to the section preceding the form (for commitment facilitation), or inline with outcome claims (for claim substantiation).

---

## IMAGERY TRAPS

---

### IT-1: Recognizable stock photography — images users have seen on other sites

**THE TRIP-WIRE:** Using stock photography of people — especially handshakes over conference tables, diverse teams pointing at laptops, smiling professionals on video calls, or abstract "growth" imagery (plant sprouts, upward arrows) — on any page where the brand is making a credibility claim.

**WHO TRIED IT:** Documented by WebsiteDesigners.com: "using stock photos of your 'team' that visitors recognize from other websites creates immediate distrust. When those images feel staged or overly familiar, credibility drops faster than if no image were present at all." Tailored Edge Marketing confirmed: "the same smiling faces, the same collaborative poses, the same artificial moments appear everywhere. Visitors recognize this immediately."

**WHAT HAPPENED:** A phenomenon known as "banner blindness" extends to stock photography: users habituated to the images process them as non-content. But the effect is worse than neutrality — recognized stock images undermine the adjacent copy. If the site claims "we work closely with our clients" while showing a stock image of a handshake, the image contradicts the claim by signaling "we do not have real evidence of this."

**WHY IT FAILED:** Stock images of people are easy to recognize because they are widely distributed. Recognition of the stock context destroys the intended communication. "75% of users judge credibility based on website design" — and stock photography is a negative credibility signal in a trust-intensive B2B context.

**HOW TO DETECT IT IN OUR WORK:** Right-click every person-featuring image on the site and run a reverse image search. If the image appears on more than one unrelated site, replace it. If no original photography is available, use abstract, illustrative, or typographic visual elements rather than people-featuring imagery that cannot be authenticated.

---

### IT-2: Illustration style used as a personality substitute — when the illustration is louder than the brand

**THE TRIP-WIRE:** Choosing a distinctive illustration style (isometric, line art, surrealist, editorial) and deploying it pervasively as the primary personality carrier, without ensuring the written voice and positioning have equivalent distinctiveness.

**WHO TRIED IT:** The 2010s SaaS illustration wave — Slack, Mailchimp, Intercom, Stripe, and hundreds of followers. Mailchimp's 2018–2019 Collins rebrand went furthest: a surrealist/outsider-art illustration system that paid homage to "raw, expressive qualities imbued with creative freedom." This was genuinely distinctive execution on a genuinely distinctive brief. The failure mode is not Mailchimp — it is the fifty companies that adopted surrealist or distinctive illustration styles to substitute for voice and positioning they had not developed.

**WHAT HAPPENED:** When illustration becomes the brand, the brand is vulnerable to the day when illustration style changes. More acutely for service brands: illustration signals product company. A service brand that leads with illustration signals "we are like Slack" rather than "we are experts in a specific domain." The illustration is doing personality work that should be done by evidence.

**WHY IT FAILED:** A distinctive illustration system is a vehicle for brand personality, not a source of it. If the personality cannot be expressed in words, it cannot be reliably expressed in images either — the images will be internally inconsistent across illustrators and over time.

**HOW TO DETECT IT IN OUR WORK:** Write the CastWorks brand personality in two sentences using no visual language. Then check whether the existing imagery is expressing those same sentences, or whether it is a stand-in for the verbal work that hasn't been done.

---

### IT-3: Photography that contradicts the service claim — visual evidence that doesn't match the copy's claims

**THE TRIP-WIRE:** A service brand claiming niche expertise, bespoke process, or premium positioning whose photography shows generic settings (coworking spaces, open-plan offices, video call screens) that are visually interchangeable with any competitor.

**WHO TRIED IT:** Documented by multiple B2B UX auditors: "when visual signals contradict written claims, visitors trust neither." The failure is especially damaging for service brands where the claim is relational ("we understand your category") because generic photography signals categorical, not specific, competence.

**WHAT HAPPENED:** Insivia's conversion research showed websites using custom photography see "higher engagement, lower bounce rates, and stronger conversions." The mechanism is trust transfer: authentic imagery lends credibility to adjacent copy. When the imagery is recognizably generic, it borrows that credibility back.

**WHY IT FAILED:** Photography is treated as filler between copy blocks rather than as evidence. Every photograph on a B2B service site should answer a buyer question: "what does working with these people look like?" Generic imagery does not answer that question.

**HOW TO DETECT IT IN OUR WORK:** For each image on the site, write the buyer question it is answering. If the answer is "it is decorative" or "it fills the space," replace it with an image that makes an evidentiary claim, or remove it and tighten the layout.

---

### IT-4: Hero video autoplaying — motion in the background that competes with headline reading

**THE TRIP-WIRE:** A hero section with autoplay background video (or looping animation with continuous motion) behind the primary headline and CTA.

**WHO TRIED IT:** Common on agency, event, and professional services sites as a way to signal dynamism and production quality. The pattern migrated from consumer brand sites (hotels, fashion labels) to B2B service sites.

**WHAT HAPPENED:** NN/g research on attention and distraction is consistent: motion in the peripheral visual field is processed by the preattentive system and competes with focal reading tasks. When a user is trying to read and evaluate a headline, background motion creates a measurable reading burden. The "polished" effect of a hero video comes at the cost of the primary task: getting the headline read and the CTA acted on.

**WHY IT FAILED:** The animation draws attention to the production budget rather than to the message. In B2B service contexts, production budget is not a buying signal — it may even be a negative signal, implying the company invests in marketing rather than delivery.

**HOW TO DETECT IT IN OUR WORK:** If any autoplay video or looping animation is present in the hero, test the conversion impact against a static hero using the same copy. If A/B testing is not available, default to static — the evidence for motion in hero sections does not support the cost in reading friction.

---

## INTERACTION TRAPS

---

### INT-1: Chat widgets, cookie banners, and newsletter popups firing simultaneously on first load

**THE TRIP-WIRE:** Multiple on-load interruptions appearing in the first 3 seconds of a page visit — any combination of: cookie consent banner, chat widget prompt, email capture popup, notification permission request, "hello, I'm here to help" bot message.

**WHO TRIED IT:** Documented by NN/g and Baymard Institute as a near-universal B2B site failure. The individual rationale for each element is defensible. The aggregate effect is not: the user arrives wanting to evaluate the company and instead evaluates three requests for permission.

**WHAT HAPPENED:** The effect on trust is immediate and negative. Each interruption signals that the site prioritizes data collection over user experience. In B2B contexts where the buying cycle begins with trust establishment, a first impression of friction is especially damaging — the buyer's working assumption shifts from "let me find out if this company is right for us" to "let me get past these obstacles and find out if this company is right for us."

**WHY IT FAILED:** Each interrupt was added by a different team with a different goal (legal compliance, sales qualification, marketing list growth) and nobody counted the aggregate number of interrupts on first load. The failure is organizational before it is design.

**HOW TO DETECT IT IN OUR WORK:** Open the site in an incognito browser window with no cookies. Count every element that animates in, slides up, appears, or requests permission within the first 5 seconds. If the count is above 1, the second and subsequent elements need to be triggered conditionally (scroll depth, dwell time, exit intent) or removed.

---

### INT-2: Mobile hamburger menus hiding critical conversion paths

**THE TRIP-WIRE:** A mobile navigation that collapses all navigation into a hamburger menu, including the primary CTA, making the conversion action require two taps to reach (tap to open menu, tap on CTA).

**WHO TRIED IT:** Near-universal in mobile implementations of desktop-first designs. The pattern emerges because the desktop nav is rebuilt for mobile without asking which elements are conversion-critical and should remain persistently visible.

**WHAT HAPPENED:** Every additional tap between intent and action costs conversion. On mobile, where the primary CTA may be the single most important element on the page for a high-intent visitor, hiding it behind a navigation drawer removes it from the viewport at exactly the moment it should be most visible.

**WHY IT FAILED:** The hamburger was designed as a space-saving container for navigation links. Navigation links and conversion triggers are functionally different: navigation enables exploration, conversion triggers capitalize on readiness. Treating them identically in the mobile information hierarchy is an architecture error.

**HOW TO DETECT IT IN OUR WORK:** On mobile, navigate to the site without opening the hamburger menu. Is the primary CTA ("Book a Call," "Get in Touch," or equivalent) visible without opening any menu? If no, the CTA must be extracted from the navigation and placed as a persistent button in the mobile header bar.

---

### INT-3: Neumorphic or glassmorphic UI states — interactive elements indistinguishable from static elements without color

**THE TRIP-WIRE:** Using the neumorphism (soft, embossed shadows on same-color background) or glassmorphism (blur/transparency layers) aesthetic for interactive UI elements (buttons, form fields, toggles), where the state differences (hover, focus, active, disabled) are expressed only through subtle shadow or transparency shifts.

**WHO TRIED IT:** Neumorphism peaked as a trend in 2020–2021 following Michal Malewicz's widely-circulated concept exploration. Hundreds of Dribbble concept designs adopted it. Glassmorphism followed. Both had significant accessibility documentation published by 2021 confirming they "severely impede accessibility, with low-contrast palettes making it difficult for users to understand hierarchy, interact with buttons, or read essential content."

**WHAT HAPPENED:** Both styles failed mainstream adoption "for functionality and accessibility reasons." The core failure: they rely on contrast differentials (shadow depth, transparency layer) to signal state, but these differentials fall below the WCAG 1.4.11 non-text contrast minimum (3:1) required for interactive component boundaries. The visual sophistication of the effect works against users — the more seamless the surface, the harder it is to identify where to click.

**WHY IT FAILED:** Treating UI as surface rather than as interface. The aesthetic principle is that the surface should feel continuous and tactile. The interaction principle is that interactive affordances must be unambiguously identifiable. These principles are in direct conflict.

**HOW TO DETECT IT IN OUR WORK:** Convert every button, form field, and interactive element screenshot to grayscale. Verify that interactive elements are identifiable by shape and boundary alone, without color or shadow. If grayscale legibility requires explanation, the design is depending on effects that fail accessibility requirements.

---

### INT-4: Form validation that fires on field entry rather than on submit — punishing users before they finish

**THE TRIP-WIRE:** Inline form validation that shows error states (red borders, error messages) while the user is still typing in a field, before they have completed or moved away from it.

**WHO TRIED IT:** Documented by Baymard Institute and NN/g in form design research. Inline validation while typing is the default behavior of browser native validation in some implementations and a common error in JavaScript form libraries.

**WHAT HAPPENED:** Showing an error ("Invalid email address") while a user is typing "joh" into an email field is technically correct but experientially hostile — the user is still constructing the input. The red state creates anxiety and interrupts the typing task. Baymard Institute's analysis consistently shows that overly aggressive inline validation increases form abandonment.

**WHY IT FAILED:** Validation is helpful on-blur (when the user leaves the field) or on-submit (when they finish the form). On-keypress validation applies a correctness test to an in-progress action, which mismatches the user's mental model of what they are doing.

**HOW TO DETECT IT IN OUR WORK:** Tab through every form field on the site, type a few characters, and observe whether error states appear before leaving the field. If yes, change validation trigger from oninput / onkeyup to onblur / onfocusout for format-sensitive fields.

---

### INT-5: Oversized sticky elements blocking content on mobile — cookie banners, chat bubbles, bottom navigation

**THE TRIP-WIRE:** Multiple sticky or fixed elements at different edges of the mobile viewport — a top navigation bar, a bottom-edge cookie banner, and a chat bubble in the corner — together consuming more than 25% of the viewport height.

**WHO TRIED IT:** UK Government Digital Service documented this in their sticky elements accessibility testing (2018): "sticky elements inherently take up space on the screen that could be used for content." The failure is structural and cumulative — each element is placed by a different decision-maker and nobody audits the combined effect.

**WHAT HAPPENED:** A typical offender: 80px top nav + 70px cookie banner + 60px chat bubble launcher = 210px consumed on a 667px viewport, leaving 457px (68%) for content. On pages where the case is made in body copy, this represents a significant reduction in effective reading area, increasing scroll depth needed and time required to complete the page.

**WHY IT FAILED:** Each element has a rational owner (legal, sales, marketing) who views the element in isolation. Nobody has visibility into the total intrusion budget — the cumulative mobile viewport space consumed by all fixed elements simultaneously.

**HOW TO DETECT IT IN OUR WORK:** On mobile (375px width), scroll to the middle of a long content page and take a screenshot. Measure the total pixel height consumed by all fixed/sticky elements visible simultaneously. If above 20% of the viewport height, audit which elements can be conditionally hidden (on scroll), dismissed after first view, or removed entirely.

---

## BRAND-EQUITY TRAPS

---

### BET-1: Redesigning without a verbal claim shift — changing the visual system while the positioning stays the same

**THE TRIP-WIRE:** Commissioning a visual rebrand (new logo, new color system, new typeface) without a parallel repositioning — a change in what the brand claims to be, who it serves, or what it stands for.

**WHO TRIED IT:** Gap 2010 is the canonical case. Gap replaced its 20-year-old blue box logo with a plain wordmark and a gradient square. The company offered no rationale, no positioning shift, no narrative for why the brand needed to change. It was purely visual. The spokesperson described the intent as "modern, sexy and cool" — a creative direction, not a strategic one. The logo was reverted in 6 days after 2,000 negative comments in 24 hours, 5,000 Twitter followers on @GapLogo (protest account), and 14,000 parody logo redesigns. The market cap loss was estimated at $100M.

**WHAT HAPPENED:** Gap's consumers had accrued associations to the blue box over 20 years. The box was not just a recognition device — it was equity. The removal communicated that the company did not value what its customers valued, and the customers responded with a proportional outrage.

**WHY IT FAILED:** Visual systems are downstream of positioning. When positioning does not change, there is no rationale for the visual to change. And when there is no rationale, loyal customers interpret the change as arbitrary. The principle: if the brand has recognized visual equity, the burden of proof for changing it is a demonstrated positioning shift, not a creative mood.

**HOW TO DETECT IT IN OUR WORK:** Before any significant visual change to a recognized brand element (logo, primary color, wordmark), write one paragraph describing the positioning change that makes the visual change necessary. If the paragraph cannot be written, the visual change is aesthetic rather than strategic. Aesthetic changes to recognized elements are expensive and reversible — which means there is no good reason to make them.

---

### BET-2: Abandoning distinctive marks without replacing their recognition function

**THE TRIP-WIRE:** Removing a distinctive visual element — a specific iconographic device, a unique color application, an owned shape — in a minimalist redesign, without an explicit plan for how brand recognition will be maintained or transferred to a replacement device.

**WHO TRIED IT:** Multiple documented cases from Distinctive BAT research: Peugeot (removed the lion's body, kept only the head — reduced brand recognition and attribution), Warner Brothers (flattened the legendary monogram — recognition drop), Intel (removed the circular swoosh — attribution decline). Contrasted with failures: Tropicana removed the orange-with-straw visual that consumers used as a "recognition shortcut" on supermarket shelves. The 20% sales drop in 2 months was attributed directly to consumers failing to locate their preferred product among competitors.

**WHAT HAPPENED:** Tropicana's case is the most quantified: $50M in total costs (production, advertising, reversal), 20% sales decline in 2 months, walkback after approximately 6 weeks. The cause was not that people disliked the new design — it was that they could not find the product. The distinctive orange-with-straw was not just branding; it was a wayfinding device in a visually competitive retail environment.

**WHY IT FAILED:** Minimalist redesigns often treat distinctiveness as complexity to be eliminated. "Simplification" and "loss of distinctiveness" are different things. A brand can simplify and increase distinctiveness (Burger King 2021, Toyota). A brand can simplify and destroy distinctiveness (Tropicana, Peugeot, Intel). The variable is whether the simplification concentrates visual energy on the most recognizable element or disperses it.

**HOW TO DETECT IT IN OUR WORK:** For any design element CastWorks has used repeatedly and consistently (mark shape, wordmark structure, color combination), ask: "What recognition function does this element serve? What is the plan for that function if we change it?" The question is not "can we change it" but "what replaces its functional role."

---

### BET-3: Destroying a verbal brand asset — retiring an ownable word, phrase, or product name

**THE TRIP-WIRE:** Changing a name, tagline, or product naming convention that has accumulated significant verbal brand equity — in particular, the verbing or social use of the brand name ("tweeting," "googling," "slacking").

**WHO TRIED IT:** Twitter to X (2023) is the most dramatic documented case. Brand Finance valued Twitter at $5.7B in January 2022. By 2024, X's brand value was measured at $673M — a $5B+ destruction in brand value. Twitter had 17 years of accumulated cultural equity, including a Merriam-Webster dictionary verb ("tweet"), cultural shorthand, and verb status in multiple languages. The X rebrand discarded all of it overnight, with no transition period, no communication campaign, no user preparation. Marketing consultant Allen Adamson called it "completely irrational from a business and brand point of view" and an "ego decision."

**WHAT HAPPENED:** Beyond the financial measurement, the practical failure was that X never achieved verb status or cultural shorthand. It remained permanently qualified: "X (formerly Twitter)." The inherited description proves the destruction — the new name requires the old name to explain itself.

**WHY IT FAILED:** Verbal brand assets are accrued through repetition over time and cannot be manufactured or transferred. When a name enters common verb usage ("google it," "slack me"), it has achieved the highest possible form of brand equity. Overwriting it without an equivalent cultural foundation is not a rebrand — it is an erasure.

**HOW TO DETECT IT IN OUR WORK:** This trap is most relevant at naming stage. For CastWorks: if the name is changed in the future, any accumulated verbal equity (the company being referred to by name in shorthand, any verbing, any cultural reference) needs to be explicitly inventoried before the change decision is made. The inventory is the minimum ante for the conversation.

---

### BET-4: Virtue-signaling repositioning disconnected from the core product promise

**THE TRIP-WIRE:** Rebranding around lifestyle, values, social identity, or cultural positioning that is unrelated to the core functional promise of the product or service, particularly when the core audience bought on functional terms.

**WHO TRIED IT:** Jaguar's 2024 rebrand is the most recent high-profile case. The 102-year-old brand retired its leaping jaguar, introduced a new monogram, launched a campaign featuring models in a pink surrealist landscape with no cars, and used slogans ("delete ordinary," "copy nothing," "live vivid") that expressed a cultural stance rather than a product promise. European sales fell 75.1% in the first four months of 2025 (49 vehicles in April 2025 vs. 1,961 in April 2024, a 97.5% single-month decline). The designer behind the rebrand was dismissed.

**WHAT HAPPENED:** The core Jaguar buyer purchased on the basis of heritage, performance, and British craftsmanship. These were the things the brand stood for, and they were the things the rebrand discarded in favor of a cultural identity appeal. The Cultural identity appeal was directed at a buyer who did not yet exist for the brand. The existing buyer saw the repositioning as a rejection of what they valued.

**WHY IT FAILED:** Repositioning away from your core audience before your aspirational audience exists is a sequencing error. The timeline is: establish new positioning → begin converting new audience → retire old positioning when new audience is large enough to sustain the business. Jaguar collapsed this timeline to zero, retiring old positioning before new audience existed.

**HOW TO DETECT IT IN OUR WORK:** Any repositioning that involves retiring existing equity or abandoning existing positioning should include a documented answer to: "How large is the audience we are moving toward, and when will they be large enough to support the business if our current audience declines?" This is a business question, not a brand question — and it must be answered before the brand decision is made.

---

### BET-5: Process-substituted-for-result brand narrative — the press release rebrand

**THE TRIP-WIRE:** A rebrand announced primarily through a brand story about the design process — the agency chosen, the strategic thinking done, the iterations considered — rather than through a changed experience for the customer.

**WHO TRIED IT:** Yahoo's 2013 "30 logos in 30 days" campaign turned the process of choosing a logo into the marketing activation for the rebrand. The 30 days of logos were "generally unexciting" — Katz and Farnham (the original Yahoo logo designers) noted in AdAge that "some of them could have used a random font generator." The campaign maximized attention during the process but delivered a technically flawed final mark that typographers could dissect publicly.

**WHAT HAPPENED:** The gap between the production value of the process (30 days of daily social releases, media coverage, brand narrative) and the execution quality of the product (poorly kerned Optima, dated bevel, technical deficiencies) created a contrast that amplified the criticism. The process campaign had raised expectations that the final mark could not meet.

**WHY IT FAILED:** A design process is not a brand statement. It is evidence that the brand is thinking carefully about itself, which only matters if the output justifies the effort. When the output is underwhelming, the process narrative becomes ironic evidence — proof that all that deliberation produced something unremarkable.

**HOW TO DETECT IT IN OUR WORK:** If any brand communication leads with "here is how we thought about our brand," ask: "is the output interesting enough to justify calling attention to the process?" If the answer requires explaining the strategic nuance of the result, the result is not strong enough to carry the process story.

---

### BET-6: Rebrand timed to financial events rather than brand strategy

**THE TRIP-WIRE:** A visual rebrand or identity update timed to coincide with a funding announcement, IPO, or acquisition rather than with a genuine strategic shift in what the brand is, who it serves, or what it stands for.

**WHO TRIED IT:** Slack's 2019 rebrand was timed to the IPO. Pentagram redesigned the identity — a functional improvement that eliminated the maintenance problems of the 11-color plaid hashtag (noted as "extremely easy to get wrong") and replaced it with a simplified 4-color pinwheel. The rebrand was publicly acknowledged as finance-driven. Michael Bierut noted that "Slack knew 95% of people would hate the change." Fast Company noted: "Slack had a defining aesthetic that could have been coaxed into cohesion without ditching much of its brand equity."

**WHAT HAPPENED:** The Slack case is instructive because it was not a catastrophic failure — the new mark is serviceable and is still in use. But the criticism points at a real risk: a rebrand timed to financial events is read as a signal to investors, not as a communication to users. When users recognize they are not the audience for the brand change, they react with indifference at best and resentment at worst.

**WHY IT FAILED:** Financial calendar forcing functions are poor brand strategy inputs. The question "does our brand need to change?" and the question "do we need to signal maturity to institutional investors?" are different questions with different answers. When they are conflated, the brand change is optimized for the wrong audience.

**HOW TO DETECT IT IN OUR WORK:** If a brand change is being considered in conjunction with a commercial milestone (first major client, partnership announcement), verify that the strategic rationale for the change exists independently of the milestone. If removing the milestone from the timeline removes the rationale for the change, the change is driven by event, not strategy.

---

### BET-7: The post-hoc rationalization document — assigning meaning to choices that were made aesthetically

**THE TRIP-WIRE:** A brand rationale document (internal brief, agency deck, website "about our brand" page) that constructs significance for visual choices — proportions, color selections, letterform details — that were made on aesthetic grounds.

**WHO TRIED IT:** The canonical case is Arnell Group's 27-page "Breathtaking Design Strategy" for the 2008 Pepsi logo — a $1M fee to document a minimal change to the Pepsi circle's white stripe by connecting it to the Mona Lisa, the Parthenon, the Golden Ratio, the theory of relativity, and the path of the Sun in Earth's gravitational field. The document was leaked and became an internet artifact. Arnell later told CBS News the logo was "bullshit."

**WHAT HAPPENED:** The document became the object of ridicule rather than the logo — which actually barely changed. The post-hoc rationalization was so elaborate that it demonstrated exactly what it was trying to conceal: that the design decision lacked a strategic rationale proportional to the investment.

**WHY IT FAILED:** Post-hoc rationalization is identifiable as such by anyone with enough experience to read it critically. The tell is that the narrative works equally well for many different design choices — it is not a rationale for the specific choice made, but a framework for making any choice sound significant. Designers, journalists, and sophisticated buyers can identify this pattern. When identified, it reads as evidence that the work cannot be defended on its own merits.

**HOW TO DETECT IT IN OUR WORK:** For each significant design decision (primary mark, color choice, type system), write the rationale before opening any design software. The rationale is a constraint: it limits the valid choices. If the rationale can be written equally for multiple opposing choices, it is not a rationale — it is a description of the category.

---

### BET-8: Rebranding as an attempt to escape negative associations without changing the underlying product

**THE TRIP-WIRE:** Commissioning a rebrand when the brand's problem is not its visual identity but its performance, product quality, or reputation — expecting the new visual to carry a message that the product experience does not support.

**WHO TRIED IT:** The B2B brand strategy literature documents this consistently. The State of Brand: "the single most common reason rebrands fail is that they start with design instead of positioning. A new logo gets commissioned, new colors get picked, the website gets a fresh coat of paint, and everyone feels good for about three months. Then the same problems resurface because the underlying positioning was never resolved." Literal Humans: "If the underlying story is still wrong, if the positioning is still feature-led... then a new visual system is expensive and useless."

**WHAT HAPPENED:** A new visual applied to an unchanged experience produces cognitive dissonance. Customers who had a disappointing experience with the brand encounter new visuals and may re-engage — only to rediscover the same problem. The rebrand burns through goodwill more efficiently than the original negative association did.

**WHY IT FAILED:** Brand equity is built through experience, not through visual presentation. The visual is a retrieval cue for accumulated experience. If the experience is negative, upgrading the retrieval cue retrieves the negative experience more efficiently.

**HOW TO DETECT IT IN OUR WORK:** Before any visual brand update, document the specific customer problem the update is solving. If the problem statement is "we look outdated" or "we look like our competitors," the problem is visual and a visual solution may help. If the problem statement is "clients don't understand our value" or "we're not winning the right clients," the problem is strategic — and visual changes will not solve it.

---

## ACCESSIBILITY TRAPS

---

### AT-1: Low contrast text detected only by hex values — not by rendered appearance at screen resolution

**THE TRIP-WIRE:** Running contrast checks against the hex values of text and background colors, passing WCAG 1.4.3, and treating the check as complete — without verifying that the rendered text at the actual font-weight, size, and display resolution actually meets the contrast requirement.

**WHO TRIED IT:** Documented by Penn State Accessibility and W3C working group: "color contrast checkers and accessibility testing tools do not yet take a font's actual rendering dimensions, line thickness or unusual shapes into consideration." The W3C WCAG issue tracker includes a filed issue: "Include font weight for color contrast tests." Current tools validate based on hex values and user-agent-reported font size only.

**WHAT HAPPENED:** The failure mode is specific and documented: a thin-weight font (100–200) specified as black (#000000) on white (#ffffff) passes contrast checks with a 21:1 ratio — the maximum possible. But at stroke widths below 1px at rendering size, rasterization produces graduated gray values that reduce effective contrast substantially. BOIA's annual audit found low contrast on 83.6% of home pages — many of which likely passed automated contrast checkers.

**WHY IT FAILED:** Automated tooling creates a false floor of confidence. A passing automated contrast score is a necessary condition for accessibility compliance, not a sufficient one. The additional verification is visual, not automated: view the rendered text at 100% zoom on a standard display, in the lightest font weight used at the smallest text size, and assess legibility directly.

**HOW TO DETECT IT IN OUR WORK:** After running automated contrast checks, perform a manual visual check: (1) open the site in a non-retina browser window, (2) set zoom to 100%, (3) look at every text weight below 400 at sizes below 20px, and (4) ask whether the text is immediately legible or requires effort. Any case requiring effort fails the practical test.

---

### AT-2: Sticky navigation consuming viewport space that collapses the reading zone on mobile

*See also Layout Trap LT-5 — this entry records the accessibility dimension specifically.*

**THE TRIP-WIRE:** A sticky top navigation that is not compensated by a body { padding-top } value equal to the nav height, causing anchor-link targets to be scrolled behind the sticky nav and appear invisible to the user.

**WHO TRIED IT:** UK GDS sticky element accessibility testing (2018) documented this: "sticky elements stay glued to the top of the browser window and often block content as it scrolls underneath them." The technical failure occurs when: page has anchor links (e.g., #contact-section), user clicks an anchor link, browser scrolls the target element to the top of the viewport, sticky nav covers the first {nav-height}px of the target section.

**WHAT HAPPENED:** For a B2B service site where the primary conversion action is a contact form linked from the navigation, this means the form heading may be hidden behind the nav when the user arrives — an invisible conversion point.

**WHY IT FAILED:** Sticky navigation is implemented without testing the interaction with anchor links. The fix is structural: scroll-margin-top equal to nav height on every anchor target, or scroll-padding-top on the root element.

**HOW TO DETECT IT IN OUR WORK:** For every anchor link on the site (navigation links that scroll to page sections, "back to top" links), click them with the sticky navigation in its final scroll state. Verify that the target section's heading is fully visible below the nav after the scroll completes. If the heading disappears behind the nav, add scroll-margin-top: {nav-height}px to the target element.

---

### AT-3: Color-only state differentiation in dark mode — interactive elements invisible on near-black backgrounds

*See also Color Trap CT-5 for the principle; this entry captures the dark-mode-specific failure.*

**THE TRIP-WIRE:** A dark mode implementation (black or near-black background, #0a0a0a to #1a1a1a) where button borders, form field outlines, and focus rings are expressed as near-black or dark gray, making interactive elements invisible against the background.

**WHO TRIED IT:** Accessibilitychecker.org documented the pattern: "simply inverting colors often fails to meet WCAG standards, especially for components like buttons, form fields, icons, and focus states." The failure is especially common in dark hero sections that were built as visual treatments rather than as accessible interfaces.

**WHAT HAPPENED:** Interactive elements become invisible. A form field on a dark background with a dark-gray border disappears. A button with a dark fill on a near-black background requires the text label to carry the interactive affordance entirely — there is no visible button boundary. For users with low contrast sensitivity, these elements are functionally unusable.

**WHY IT FAILED:** Dark mode was designed visually (the dark background looks sophisticated) rather than functionally (every interactive element must have a 3:1 contrast ratio at its boundary). WCAG 1.4.11 (Non-text Contrast, Level AA) requires this for UI components.

**HOW TO DETECT IT IN OUR WORK:** In every dark section or dark-mode variant, identify every interactive element (buttons, form fields, toggles, links, icon buttons). Measure the contrast between the element's boundary and the background using WebAIM's contrast checker, using the actual background color and border/fill color. All boundaries must achieve 3:1 minimum. Focus rings must achieve 3:1 against both background and adjacent colors.

---

### AT-4: Autoplay video or animation that cannot be paused — vestibular disorder trigger

**THE TRIP-WIRE:** Hero background video or looping animations that play automatically and cannot be paused or stopped by the user, with no prefers-reduced-motion media query implementation.

**WHO TRIED IT:** Widespread across professional services sites using video heroes or complex scroll animations. The WCAG 2.1 Success Criterion 2.2.2 (Pause, Stop, Hide — Level A) requires that any moving, blinking, or scrolling content that starts automatically, lasts more than 5 seconds, and is presented alongside other content must have a mechanism for the user to pause, stop, or hide it.

**WHAT HAPPENED:** Users with vestibular disorders (BPPV, Meniere's disease, migraine) experience nausea, dizziness, and disorientation from persistent motion on screen. The condition affects an estimated 35% of adults over 40. For these users, an auto-playing background video makes the site unusable. Beyond accessibility, there is a conversion impact: any user who feels physical discomfort will exit the page.

**WHY IT FAILED:** Motion is implemented by designers who do not experience vestibular sensitivity and who are testing on high-end displays in low-motion environments. The failure is invisible at design time and visible at user time.

**HOW TO DETECT IT IN OUR WORK:** (1) Enable prefers-reduced-motion in the OS accessibility settings and verify that all animations, transitions, and videos are paused or minimized — if they are not, the CSS implementation is missing the @media (prefers-reduced-motion: reduce) check. (2) For any autoplay video, verify that a visible pause button exists in the first viewport.

---

### AT-5: Missing keyboard navigation — interactive elements unreachable by tab key

**THE TRIP-WIRE:** Custom interactive elements (dropdown menus, modal dialogs, animated accordions, custom select boxes, image carousels) that can be operated by mouse but cannot be reached or activated using only the keyboard.

**WHO TRIED IT:** Documented by W3C, NN/g, and Baymard Institute as one of the most common accessibility failures on custom-built sites. The failure typically occurs when interactive behavior is implemented in JavaScript without the corresponding ARIA roles, keyboard event handlers, and focus management.

**WHAT HAPPENED:** Users who navigate by keyboard (a large population: users with motor disabilities, power users, and screen reader users who are sighted or partially sighted) encounter pages where they cannot reach the primary navigation, cannot dismiss a modal that appeared, or cannot operate a custom dropdown. For a B2B service site where the contact form is the conversion point, an inaccessible form is a complete conversion barrier for keyboard users.

**WHY IT FAILED:** Keyboard accessibility is not tested during visual QA. It requires a specific test mode: close the mouse, open the page, and navigate exclusively with Tab (forward), Shift+Tab (backward), Enter (activate), Space (toggle), and arrow keys (navigate within a component). This test is not part of standard design review processes.

**HOW TO DETECT IT IN OUR WORK:** Before launch: close the mouse and navigate the entire site using keyboard only. Verify that (1) every interactive element receives a visible focus ring when focused, (2) every interactive element can be activated without a mouse, (3) modal dialogs trap focus within themselves and can be closed with Escape, and (4) focus returns to the triggering element after a modal closes.

---

*End of catalog. 49 entries across 8 categories.*

*Maintenance note: Add new entries when a specific design decision on the CastWorks site is traced back to a failure mode that is not yet documented here. Each entry must have a named case — no abstract principles without examples.*
