---
name: Well Killsheet
tagline: A complete kill sheet on the big screen.
category: Well Control
summary: Well Killsheet builds a driller's method or wait-and-weight kill sheet from your shut-in pressures and slow circulating rates, laid out for iPad.
order: 3
status: planned
platforms: [iPad]
version: "0.1"
units: Oilfield and metric
highlights:
  - title: Built for iPad
    text: The whole sheet fits on one screen, with the pressure schedule beside the inputs that drive it.
  - title: Pressure schedule
    text: Drill pipe pressure step-down from initial to final circulating pressure, by stroke count.
  - title: Pre-recorded data
    text: Save slow circulating rates and well geometry ahead of time, so you only enter shut-in readings when it counts.
faq:
  - q: Can it replace our company kill sheet?
    a: No. Use it to check your numbers, and always follow your company's well control procedures.
---

## What It Calculates

```
Kill mud weight (ppg) = SIDPP ÷ (0.052 × TVD) + original mud weight
Initial circulating pressure = slow circulating pressure + SIDPP
Final circulating pressure = slow circulating pressure × kill mud weight ÷ original mud weight
```

Well Killsheet is a calculation aid. It does not replace your company's well control procedures or certified training.
