---
name: Health Charts
tagline: Your Health data, charted over days, weeks and years.
category: Health
summary: Health Charts turns the step, sleep and other data in Apple Health into clear charts. Turn your iPhone sideways to see the long view.
order: 6
status: testing
platforms: [iPhone]
version: "2.0"
requires: iOS 27 or later
highlights:
  - title: Sleep by stage
    text: Deep, REM, Core and Awake each get a consistent color, with your average marked by a single reference line. Awake time is shown but never counted as sleep.
  - title: Steps against your average
    text: Days below your average stand out by more than color alone, and trends use a steady calculation instead of comparing first and last days.
  - title: The long view in landscape
    text: Rotate to landscape for weekly totals across quarters and years, with buttons to change the range and the metric.
  - title: Fast and private
    text: Charts load recent data first and keep a cache on the device, so they appear quickly. Force Refresh rereads everything from Health.
screenshots:
  - { src: /images/apps/health-charts/1.png, alt: "iOS App 30 Days Screenshot", device: iphone }
  - { src: /images/apps/health-charts/2.png, alt: "iOS App 60 Days Screenshot", device: iphone }
  - { src: /images/apps/health-charts/3.png, alt: "iOS App 90 Days Screenshot", device: iphone }
faq:
  - q: Why is one of my charts empty?
    a: Check that Health Charts can read that data in Settings, under Privacy & Security, then Health. iOS doesn't tell apps which data types were denied, so the app shows an empty chart instead of an error.
  - q: Why doesn't a chart go back as far as my Health history?
    a: If you've limited how much history Health Charts can read, it shows only that range and says so on the chart.
  - q: I edited data in Health. Why hasn't the chart changed?
    a: Use Force Refresh. It skips the cache and reloads every metric from Health.
---

## How It Works

Health Charts reads from Apple Health with your permission and keeps a copy on your iPhone so charts open quickly. Recent data appears first and older history fills in after it. Your data doesn't leave the device.

Each chart has its own loading, empty and limited-history state, so you can tell missing data from data that's still on its way. Charts include VoiceOver labels and values.
