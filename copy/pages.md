# CastWorks — Site Copy (live)

**Architecture:** Single long-scroll landing page.

**Site function (locked 2026-04-27):** Credibility-check for warm leads coming in
from outbound calls. The site confirms what was said on the phone and shows
that the company is real. It is not a cold-inbound persuasion engine. Voice
is confirm-not-convince; length-as-signal (editorial brands read confident
because they're brief).

**Narrative sequence (live):**
1. Hero — positioning hook
2. Service Overview — what we deliver, with a tear-sheet stack mock
3. Engineered for You — broken alternatives + what we built (merged from old S2 + S3)
4. Methodology — four operational steps from brief to hand-off
5. Terminal CTA — intake form

**Positioning anchor:**
- Target: small-to-mid-sized DTC brands looking for niche creator reach.
- Offer: a curated creator pipeline — sourced, vetted, warmed up — handed
  over per brief. Pricing model not disclosed on the site (per locked
  decision).
- Mechanism: search engine built for brand-fit questions, plus tooling that
  collapses the per-creator vetting cost. Surfaced explicitly in the
  "Engineered for you" section.
- Hero term: **creator**. SEO/meta term: **influencer**.
- Visual language: "Pragmatic Premium" — editorial restraint, Instrument
  Serif headlines, deep-forest-teal accent (#1F3A34), warm off-white surface.

---

## Global

**Nav:** CastWorks logo (left) · *How it works* · *Submit a brief* (primary CTA, right)

**Footer:** CastWorks · hello@castworks.co · © 2026 · Privacy

**Meta description (SEO — uses "influencer" for search):**
A curated creator pipeline. Sourced, vetted, warmed up. Built for
small-to-mid-sized DTC brands.

**og:description / og card:**
Tagline-led: "The creators your database missed." (rendered into
public/og-image-2.png from src/pages/og.astro).

---

## 1 — HERO

**Headline:** *The creators your database missed.*

**Sub-line:**
A curated creator pipeline. Sourced, vetted, warmed up.

**Primary CTA:** Submit a brief
**Secondary CTA:** How it works (anchors to Methodology)

(No micro-copy under the CTAs.)

---

## 2 — SERVICE OVERVIEW

**Heading:** Curated creator pipelines, warmed up before delivery.

**Body:**
We build a pipeline for each brief. Every creator on it is vetted, contacted,
and confirmed interested before the pipeline reaches you — so you start where
the deal-making begins.

**Visual (right column):** Stacked carousel of 5 tear-sheet mocks —
single-creator briefs rendered as styled documents (audience, overlap,
engagement, content, commercial history, rate ballpark, "warmed up —
interested" status, italic operator note). Click, scroll, arrow keys, or
flanking chevron buttons advance through the stack.

---

## 3 — ENGINEERED FOR YOU (merged old Agitation + Paradigm Shift)

**Heading:** Engineered for you.

**Body:**

Sourcing creators has been a headache. Databases sell you a filtered list and
expect you to run the rest. Agencies sell you retainers priced for someone
else.

We built a search engine for the questions a brand actually asks: audience
overlap, content fit, engagement quality, commercial signal. The work that
used to take a sourcing analyst per creator now runs through our own tooling.
You get a curated pipeline rather than another list.

**Visual (right column):** Creator universe → shortlist constellation
(line-art SVG, dashed selection boundary).

---

## 4 — METHODOLOGY

**Heading:** How the pipeline gets built.

**Sub-heading:** Four steps from brief to hand-off.

**01 — Strategy** *(target/crosshair glyph)*
You tell us your product, your audience, your goals. We translate that into
pipeline criteria. Which creator archetype, what audience overlap, what rate
range, what volume cadence. If creator marketing isn't the right channel for
your goal, we say so before anything moves.

**02 — Discovery** *(magnifier-over-dot-field glyph)*
Our engine surfaces creators whose audiences align with your brief.
Candidates are ranked on engagement quality, audience overlap, commercial
history, and content fit. Not vanity follower counts. Every match is reviewed
by hand before it reaches you.

**03 — Warm-up** *(paired speech bubbles glyph)*
We make first contact. We confirm fit, gauge interest, and qualify a working
rate ballpark. Cold creators stay off the list. By the time it lands, the
pipeline is already in motion.

**04 — Hand-off** *(stack → arrow → open-frame glyph)*
You receive the warm pipeline. Each creator with confirmed interest, a rate
ballpark, and the context you need to brief them. The relationship is yours
from there.

---

## 5 — TERMINAL CTA

**Heading:** Submit a brief.

**Body:**
Four questions. Two minutes. We read every brief ourselves and respond
personally.

**Intake form (4 questions):**

1. **What's your company, and what do you sell?** *(short text)*
2. **Roughly, what's your monthly marketing budget?** *(ranges: <$5K / $5K–$15K / $15K–$50K / $50K+)*
3. **Have you run creator or influencer campaigns before? Briefly: what happened?** *(short text)*
4. **Your email + who should we reach?** *(email + name)*

**Submit button:** Submit

**Thanks state:**
- Heading: Brief received.
- Body: We'll be in touch with next steps.

**Fallback link (smaller, below form):**
Prefer email? hello@castworks.co

---

## Sections cut from earlier iterations

These were on the page during the persuasion-engine phase and removed when
the site shifted to credibility-check framing (2026-04-27):
- **Risk Reversal** ("Why commission is the point" + Three Zeros) — pricing
  model is no longer disclosed on-site.
- **Authority** (founder manifesto) — too long, too explanatory; the warm
  lead from outbound doesn't need it.

Their components have been deleted from `src/components/`. Their copy lives
on in this file's git history if needed for reference.
