---
name: Bottoms Up
tagline: Bottoms-up time and strokes in seconds.
category: Drilling
summary: Enter your hole sections, string and pump output. Bottoms Up returns the minutes and strokes until what's on bottom reaches the shakers.
order: 1
status: in-development
platforms: [iPhone]
units: Oilfield and metric
highlights:
  - title: Section by section
    text: Add each hole and casing section once, and the annular volume adds itself up from bit to bell nipple.
  - title: Saved wells
    text: Keep the geometry for each well, so the next calculation is only a pump rate change.
  - title: Shows its work
    text: Every result lists the capacities and volumes behind it, so you can check it against the tour sheet.
faq:
  - q: Does it work without a signal?
    a: Yes. All calculations run on the phone, with no connection needed.
  - q: Which pump output should I enter?
    a: Use the output per stroke at your pump's efficiency, in barrels per stroke or liters per stroke.
privacy:
  collects: []
  updated: 2026-10-22
---

## What It Calculates

Bottoms up is the annular volume divided by what the pumps put out. Bottoms Up runs that for every section between the bit and the surface and gives you one number in strokes and one in minutes.

```
Annular capacity (bbl/ft) = (Dh² − Dp²) ÷ 1029.4
Annular volume (bbl) = Σ capacity × section length
Bottoms up (stk) = annular volume ÷ pump output (bbl/stk)
Bottoms up (min) = strokes ÷ pump rate (spm)
```

Dh is the hole or casing inside diameter and Dp is the pipe outside diameter, both in inches.
