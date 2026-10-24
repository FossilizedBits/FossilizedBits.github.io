---
name: Clima
tagline: Today's weather, the next twelve hours and four days ahead, on one screen.
category: Weather
summary: Clima puts current conditions, a twelve-hour temperature chart, a four-day forecast and a map on a single page that never scrolls. Tap anything for the details.
order: 5
status: testing
platforms: [iPhone]
version: "1.4.1"
requires: iOS 27 or later
units: Celsius or Fahrenheit
highlights:
  - title: One page, no scrolling
    text: Current conditions, the next twelve hours, four days of highs and a map all fit on one screen.
  - title: Details on tap
    text: Tap the current conditions, the temperature chart or any forecast day to see temperature, UV, and sunrise, sunset, moonrise and moonset charts for that period.
  - title: Saved locations
    text: Add places by name and coordinates and switch between them, without needing GPS access. One tap on the location arrow returns to where you are.
  - title: A backup forecast
    text: Weather comes from Apple Weather. Add your own OpenWeather key and Clima uses it whenever Apple Weather can't be reached.
screenshots:
  - { src: /images/apps/clima/1.png, alt: "iOS App Usage Screenshot", device: iphone }
  - { src: /images/apps/clima/2.png, alt: "iOS App Weather Graphs", device: iphone }
  - { src: /images/apps/clima/3.png, alt: "iOS App Daily Details", device: iphone }
faq:
  - q: Do I need an OpenWeather key?
    a: No. Clima uses Apple Weather on its own. A key only adds a fallback for when Apple Weather fails, and it needs an OpenWeather One Call 3.0 subscription.
  - q: Where is my OpenWeather key stored?
    a: In the iPhone's Keychain, on this device only. It doesn't sync to other devices or move with backups.
  - q: Why does Clima ask for my location?
    a: To show weather where you are. It asks only while the app is in use, at roughly kilometer accuracy. Saved locations work without it.
---

## How It Works

Clima asks for your location only while you're using it, then fetches the forecast from Apple Weather. Pull down to refresh at any time; when you come back to the app after ten minutes it refreshes on its own. If a refresh fails, the last forecast stays on screen with a notice, and Clima never fills gaps with made-up data.

Units switch between Celsius and Fahrenheit, and every value follows: temperature, wind and gusts, visibility, rainfall and pressure. Clima follows your system's light or dark appearance unless you choose one in Settings.
