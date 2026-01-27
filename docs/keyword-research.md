# Keyword Research SOP (Trends-first)

This doc turns Google Trends signals into shippable pages.

## 1) Seed keywords
- Maintain a curated list in `seed-keywords.csv`.
- Seeds are **word roots / intent modifiers** (e.g. generator, editor, converter).

## 2) Google Trends workflow
Settings (default):
- Region: US (then Worldwide)
- Time range: Past 7 days (then 30 days)
- Category: (leave default unless niche-specific)

Steps:
1. Enter 3–5 seeds at a time.
2. Open **Related queries** → switch to **Rising**.
3. Export candidates or copy them into a scratch sheet.

## 3) Guardrails (avoid semantic drift)
Seeds like `generator` can drift into hardware terms (e.g. portable generator).
Filter candidates by:
- SERP intent check (top results match our product intent)
- Must be web-tool-able in 1–3 days (MVP)
- Avoid high-risk niches (adult, piracy, gambling) unless explicitly decided

## 4) Turn a keyword into a build plan
For each chosen keyword:
- Primary landing/tool page: `/tools/<keyword>`
- Supporting pages: how-to / templates / comparisons / FAQ
- Monetization: ads + email capture + pro limit

## 5) When to add new seeds
Add a new seed when you observe a recurring pattern like:
- "<noun> generator"
- "<noun> checker"
- "<noun> to <noun>" conversion

Add to `seed-keywords.csv` via PR.
