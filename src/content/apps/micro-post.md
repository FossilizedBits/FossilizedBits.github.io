---
name: Micro Post
tagline: Write a short post, share it, and publish it to your blog.
category: Blogging
summary: Micro Post sends a short post to the social services you choose, then saves it as a Markdown file in your Hugo or Jekyll site's GitHub repository, with links back to each social post.
order: 8
status: testing
platforms: [iPhone]
highlights:
  - title: Hugo and Jekyll
    text: Posts are saved as Markdown with front matter in the folder you choose. Auto detects a Hugo site for you.
  - title: Post everywhere at once
    text: Pick the social services for each post. Any service without credentials is skipped.
  - title: Links in the post
    text: The links to each published social post are added to the Markdown file before it's saved, with no custom shortcode needed.
screenshots:
  - { src: /images/apps/micro-post/1.png, alt: "iOS App Usage Screenshot", device: iphone }
  - { src: /images/apps/micro-post/2.png, alt: "iOS App Usage Screenshot", device: iphone }
  - { src: /images/apps/micro-post/3.png, alt: "iOS App Settings Screenshot", device: iphone }
faq:
  - q: What does Micro Post need from GitHub?
    a: Your GitHub user name and a token that can write content to your site's repository. Posts are saved to the repository's default branch.
  - q: What happens if saving to GitHub fails?
    a: The social posts may already be published. Check them before you publish again, or you could post twice.
---

## How It Works

1. Write your post and choose where to share it.
2. Tap Generate to create the file name, such as `2026-07-06-micro-1.md`.
3. Tap Publish. Micro Post shares the post to each service, adds the links to the Markdown file and saves it to your repository.

Any social services that failed are listed once the file is saved to GitHub.
