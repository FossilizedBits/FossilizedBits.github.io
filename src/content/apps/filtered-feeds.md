---
name: Filtered Feeds
tagline: Your own podcast feeds, filtered down to the episodes you want.
category: Container
summary: Filtered Feeds is a self-hosted service that builds custom RSS feeds from the podcasts you already follow, keeping or dropping episodes by keyword. Subscribe to the result in any podcast app, and it stays up to date on its own.
order: 10
status: released
platforms: [Self-Hosted]
version: "2.0"
requires: Docker and Docker Compose
highlights:
  - title: Keep only what you want
    text: Include episodes that mention your keywords, exclude the ones that do, or combine both. Pull the "Best of" segments out of a long-running show, or drop the bonus and replay episodes.
  - title: Edit in the browser or in files
    text: Create and edit feeds from the web dashboard, or drop a Markdown file into the configs folder. Both use the same format and stay in sync.
  - title: Preview before you save
    text: See exactly which episodes your filters keep before you commit to them. Previews never change your saved feeds.
  - title: Always current
    text: Changes to a config file rebuild its feed right away, and every feed refreshes on its own every 12 hours. Refresh one feed or all of them whenever you like.
screenshots:
  - { src: /images/apps/filtered-feeds/1.png, alt: "The dashboard listing filtered feeds with their status and last update", device: mac }
  - { src: /images/apps/filtered-feeds/2.png, alt: "Creating a feed with include and exclude keywords", device: mac }
  - { src: /images/apps/filtered-feeds/3.png, alt: "Previewing the episodes a filter keeps", device: mac }
faq:
  - q: How do I run it?
    a: Start the container with `docker-compose up -d`, then open the dashboard at http://localhost:8080. To serve it on port 80 instead, change the port mapping in `docker-compose.yml`.
  - q: How do I subscribe to a filtered feed?
    a: Each feed is served at `/feeds/<name>.xml`. Copy the URL from the dashboard and add it to any podcast app that accepts RSS feeds, such as Apple Podcasts or Pocket Casts.
  - q: What's the difference between the filter types?
    a: "Include keeps only episodes that contain at least one of your include keywords. Exclude keeps everything except episodes that contain an exclude keyword. Both requires an include keyword and no exclude keyword."
  - q: My feed isn't updating. What should I check?
    a: Make sure the original podcast feed is reachable, and that your keywords match the episode titles exactly. Then refresh the feed from the dashboard and check the container logs for errors.
  - q: Can I put it on the internet?
    a: It's designed for a local or private network and has no login of its own. Anyone who knows a feed's URL can read it. If you expose it, put it behind a reverse proxy with authentication and restrict access with firewall rules.
  - q: I used the GitHub Actions version. Can I keep my configs?
    a: Yes. The Markdown format is unchanged, so copy your files into the configs folder. Your feed URLs will move from GitHub Pages to your own server, so update your podcast app subscriptions.
---

## How it works

Each feed is one Markdown file with the settings in its front matter. Point it at a podcast's RSS feed, choose a filter type and list your keywords:

```yaml
---
feed: "https://podcast.example.com/feed.rss"
name: "interviews-only"
filter type: "both"
include: ["Interview", "Guest"]
exclude: ["Replay", "Rerun"]
episodes: 15
---
```

Filtered Feeds watches the configs folder. A new or changed file rebuilds its feed, and deleting a file removes the feed. You can also cap a feed at a set number of recent episodes, and give it your own artwork.

The dashboard does the same through a form, with a live preview of the matching episodes and one-click copying of each feed's URL. A refresh shortly after startup and another every 12 hours keep every feed current without any work from you.
