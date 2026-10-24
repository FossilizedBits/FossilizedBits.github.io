---
name: PathFinder
tagline: Save a spot, then find your way back.
category: Navigation
summary: PathFinder points you back to any place you've saved, with the distance left and how long it will take at your current speed.
order: 4
status: planned
platforms: [iPhone]
version: "0.1"
highlights:
  - title: Drop a pin
    text: Save the truck, the location gate or the camp with one tap, even with no signal.
  - title: Distance and time
    text: See how far you have to go and when you'll get there at the speed you're moving now.
faq:
  - q: Does it need a data connection?
    a: No. It uses GPS only, which works without cell coverage.
---

## How It Works

PathFinder compares your current GPS position with the saved one and keeps the bearing, distance and arrival time updated as you move.

```
Time to arrive = distance remaining ÷ current speed
```
