---
name: DΔrt
tagline: Open YouTube and Reddit links on your own server.
category: Safari Extension
summary: DΔrt is a Safari extension that sends YouTube and Reddit pages to your self-hosted front ends, keeping the rest of the address intact.
order: 9
status: released
platforms: [iPhone, iPad, Mac]
version: "1.0"
icon: /images/apps/dart/icon.png
iconDark: /images/apps/dart/icon-dark.png
requires: iOS and iPadOS 26 or later
highlights:
  - title: The whole address carries over
    text: Paths, searches and fragments stay as they were, so a video or a post opens at the same place on your server.
  - title: Built into Safari
    text: Redirects happen as Safari navigates, with no browsing through a proxy and no app to keep open.
  - title: iPhone, iPad and Mac
    text: The same rules and icons on every device, with a native app on each platform.
screenshots:
  - { src: /images/apps/dart/1.png, alt: "iOS App Screenshot", device: iphone }
  - { src: /images/apps/dart/2.png, alt: "iOS Safari Extension Menu Screenshot", device: iphone }
  - { src: /images/apps/dart/3.png, alt: "Screenshot 3 placeholder", device: mac }
faq:
  - q: How do I turn it on?
    a: On iPhone or iPad, go to Settings, then Apps, Safari, Extensions, and DΔrt. On a Mac, use Safari's Settings, then Extensions. Enable DΔrt and allow it access to YouTube and Reddit.
  - q: Why isn't a page redirecting?
    a: Check that DΔrt can access the site, and that content blockers are enabled for YouTube and Reddit in Safari. DΔrt redirects only pages you open in Safari, not embedded players, other apps or their in-app browsers.
  - q: What about short links like youtu.be and redd.it?
    a: They aren't rewritten directly. When a short link opens the full YouTube or Reddit address, DΔrt redirects it then.
  - q: What happens when I'm away from home?
    a: Your server has to be reachable from your device, over your network or a VPN. Turn the extension off when it isn't, so YouTube and Reddit open normally.
---

## How It Works

DΔrt swaps the site's address for your server's and leaves everything after it unchanged. A link to `youtube.com/watch?v=…` opens as the same `/watch?v=…` page on your YouTube front end, and Reddit posts work the same way. Your server needs to offer the same pages at the same paths.

This early version redirects to fixed addresses. An editor for your own servers and rules is planned.
