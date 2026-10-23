---
name: MeTube
tagline: Watch the videos on your MeTube server, at home or away.
category: Video
summary: MeTube is a native player for your self-hosted MeTube server. Browse and search your downloads, play them with Picture in Picture, and save them to Photos.
order: 7
status: testing
platforms: [iPhone, iPad]
version: "1.3"
requires: iOS 27 or later
highlights:
  - title: Your library, newest first
    text: Every completed download in your MeTube history, with thumbnails, search and pull to refresh.
  - title: Picture in Picture
    text: Keep watching in a floating window or in the background while you use other apps.
  - title: Home or away
    text: Add a Tailscale address next to your local one. MeTube tries Tailscale first and falls back to your home network automatically.
  - title: Manage from your phone
    text: Touch and hold a video to save it to Photos, open its original source, or delete it from the server.
screenshots:
  - { src: /images/apps/metube/1.png, alt: "iOS App Usage Screenshot", device: iphone }
  - { src: /images/apps/metube/2.png, alt: "iOS App Settings Screenshot", device: iphone }
  - { src: /images/apps/metube/3.png, alt: "iOS App Playback Screenshot", device: iphone }
faq:
  - q: What do I need to use the app?
    a: A MeTube server your iPhone or iPad can reach on your network or over a VPN. Enter its address in Settings, for example 192.168.1.10:8081. The server needs no changes.
  - q: Which videos play?
    a: Anything iOS can play natively. H.264 or HEVC video with AAC audio in MP4 files works best. The app doesn't convert files.
  - q: Does it work with servers that require a login?
    a: Not in this version.
  - q: Does the app turn Tailscale on or off?
    a: No. It checks whether your server answers at the Tailscale address, and uses the local address if it doesn't answer within four seconds.
---

## How It Works

MeTube connects to your server and lists the videos in its download history. Tap one to play it with the standard iOS controls. Downloads to Photos show progress and can be canceled, and the app asks only for permission to add to your library, not to read it.

If you use a reverse proxy, it needs to support WebSocket connections. Videos removed from MeTube's history don't appear in the app, even if the files are still on disk.
