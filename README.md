# Fossilized Bits

Static site for fossilizedbits.com, built with Astro. Every app is one Markdown file; the home page, the app index and each app's pages are generated from those files.

## Run it

This site is one workspace in `~/Developer/Astro`, which shares a single `node_modules` across sites. Run everything from `~/Developer/Astro`, inside the `astro` container machine:

```sh
container machine run -n astro -- npm install
container machine run -n astro -- npm run dev:fb     # dev server on port 4321
container machine run -n astro -- npm run build:fb   # static site in "Fossilized Bits/dist/"
```

`dist/` is plain HTML and CSS, with no client-side JavaScript. Host it anywhere: Cloudflare Pages, Netlify, GitHub Pages, or behind your own reverse proxy.

## Add an app

1. Create `src/content/apps/<slug>.md`. The filename becomes the URL, `/apps/<slug>/`.
2. Put the icon and screenshots in `public/images/apps/<slug>/`.
3. Fill in the frontmatter. The body is the long description; plain fenced code blocks render as formula blocks.

```yaml
name: Bottoms Up
tagline: One line, shown in lists and under the title.
summary: Two sentences, used as the intro and the meta description.
order: 1                      # position on the home page and the well log
status: in-development        # planned | in-development | testing | released
platforms: [iPhone]           # iPhone, iPad, Mac, Apple Watch, Apple TV, Vision Pro, Self-Hosted
# lithology: granite          # optional override; normally the pattern comes from platforms
icon: /images/apps/bottoms-up/icon.png        # optional; falls back to initials
appStoreId: "1234567890"      # optional; adds the store button and Smart App Banner
testFlightUrl: https://testflight.apple.com/join/XXXX   # optional, shown until appStoreId is set
price: Free                   # optional, as are version, requires and units
highlights: [{ title: ..., text: ... }]
screenshots: [{ src: /images/apps/bottoms-up/1.png, alt: ..., device: iphone }]
faq: [{ q: ..., a: ... }]     # shown on /apps/<slug>/support/
privacy:                      # optional; generates /apps/<slug>/privacy/
  collects: []                # empty means "collects no personal data"
  updated: 2026-10-22
```

Every app gets a support page. Only apps with a `privacy` block get a privacy page, so the site never claims a policy you haven't confirmed. Point App Store Connect's support and privacy URLs at these pages.

## The design

The home page lists the apps as a well log. Each app is a formation: its rock pattern shows its platforms, and the progress curve runs through the band for its status (Planned 0–25%, In Development 25–50%, Testing 50–75%, Released 75–100%).

Each platform has its own rock, set in `src/lib/lithology.ts`:

| Platform | Rock |
| --- | --- |
| iPhone | Sandstone (dots) |
| iPad | Limestone (bricks) |
| Mac | Shale (long dashes) |
| Apple Watch | Salt (crosses) |
| Apple TV | Dolomite (slanted bricks) |
| Vision Pro | Conglomerate (pebbles) |
| Self-Hosted | Granite (crosses and carets) |

An app on several platforms is drawn interbedded: thin alternating beds of each rock, always in the order above. A legend under the list shows only the platforms in use. Set `lithology:` on an app to override its pattern.

Colors and type are tokens at the top of `src/styles/global.css`. Light and dark follow the visitor's system setting until they use the toggle. Fonts (Big Shoulders Display and Archivo) are self-hosted through Fontsource.

## Before going live

- Set the support email in `src/site.config.ts`.
- The app copy, features and FAQs are drafts written from the old site. Check every claim against what the apps actually do.
- Confirm Bottoms Up's privacy block, or remove it.
- When an app ships, swap the text store button for Apple's official "Download on the App Store" badge from Apple's marketing resources.
- The URLs match the old site (`/apps/bottoms-up`, `/apps/killsheet`, `/blog/mission-statement`), so existing links keep working.

## Files

```
src/site.config.ts        name, email, nav, social links
src/content.config.ts     app and blog schemas
src/content/apps/         one .md per app
src/content/blog/         posts
src/components/ProgressLog.astro  home page app log
src/lib/lithology.ts      rock patterns and the platform-to-rock map
src/pages/                routes
```
