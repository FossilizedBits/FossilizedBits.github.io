---
name: Slug It
tagline: Mix the slug you need, not a pit full of barite.
category: Drilling
summary: Slug It works out slug weight, length and barite for a dry trip, so you stop over-mixing and wasting sacks.
order: 2
status: in-development
platforms: [iPhone]
units: Oilfield and metric
highlights:
  - title: Start from dry pipe
    text: Tell it how many feet of dry pipe you want and it works back to the slug weight and volume.
  - title: Barite to the sack
    text: See exactly how much barite the slug needs, rounded to whole sacks.
  - title: Pit gain check
    text: Know how much the pits should gain once the slug falls, before you start pulling.
faq:
  - q: What sack size does it assume?
    a: 100 lb sacks.
---

## What It Calculates

```
Slug length (ft) = slug volume (bbl) ÷ drill pipe capacity (bbl/ft)
Slug weight (ppg) = mud weight + (dry pipe length × mud weight ÷ slug length)
Barite (lb/bbl) = 1470 × (slug weight − mud weight) ÷ (35 − slug weight)
```

Mix only the barite the slug calls for, and nothing goes back to the pits as excess weight.
