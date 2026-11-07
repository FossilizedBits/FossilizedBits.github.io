---
name: Astro inside Container Machine
tagline: A Linux workspace for your Astro sites, running right on your Mac.
category: Container
summary: Astro inside Container Machine builds a small Linux machine with Apple's container tool and runs Node and Astro inside it. Your project stays in a normal folder on your Mac, and the dev server and builds run in Linux, the same way they do on GitHub Actions.
order: 11
status: released
platforms: [Mac]
version: "1.0"
requires: macOS 26 and Apple's container tool
highlights:
  - title: Node stays off your Mac
    text: Node 24, npm and every package live inside the machine. Nothing is installed on macOS, and removing the machine removes all of it.
  - title: Your files stay on your Mac
    text: The machine shares your project folder, so you edit in your usual Mac editor and the built site appears in your Mac's dist folder.
  - title: Builds that match deployment
    text: Astro builds in Linux with Linux packages, just like a GitHub Actions runner. If it builds in the machine, it builds when you deploy.
  - title: Sized for the job
    text: Give the machine as many CPU cores and as much memory as Astro needs, and stop it when you're done to free them for everything else.
screenshots:
  - { src: /images/apps/astro-container/1.svg, alt: "Building the machine image from the Containerfile in Terminal", device: mac }
  - { src: /images/apps/astro-container/2.svg, alt: "The Astro dev server running inside the machine", device: mac }
  - { src: /images/apps/astro-container/3.svg, alt: "The site open in Safari, served from the machine", device: mac }
faq:
  - q: How do I open the dev server in Safari?
    a: Start the dev server with the `--host 0.0.0.0` option so it listens outside the machine. Then find the machine's IP address in the output of `container machine inspect astro` and go to that address on port 4321.
  - q: I saved a file, but the page didn't reload. What's wrong?
    a: "File-change events from the Mac don't always reach the machine through the shared folder. Turn on polling in `astro.config.mjs` by adding `vite: { server: { watch: { usePolling: true, interval: 300 } } }` to your config."
  - q: Why did npm say it couldn't find package.json?
    a: Commands run in whatever folder your Mac shell is in, and quoted `sh -c` commands get split on spaces, so a `cd` inside them never takes effect. Change to the project folder on your Mac first, then run the command. Folder names with spaces can cause the same problem.
  - q: Can I reuse the node_modules folder I made on my Mac?
    a: No. Packages like Astro's build tools install binaries for the system they were installed on. Delete `node_modules` and `package-lock.json`, then run `npm install` inside the machine.
  - q: Astro can't read an image I just added. Why?
    a: Some Mac apps, including screenshot tools, save files that only your Mac user can read. Run `chmod a+r` on the file so the machine's user can read it too.
  - q: How do I stop the dev server?
    a: Run `npx astro dev stop` inside the machine, or `pkill -f "astro dev"` if it doesn't respond. To stop everything at once, run `container machine stop astro`. The next `container machine run` starts it again.
---

## How it works

The machine starts from the official Node 24 image, with bash and git added. Clearing the image's entrypoint lets the machine boot `init` like a full Linux system instead of dropping straight into Node:

```dockerfile
FROM node:24-alpine
RUN apk add --no-cache bash git
# Clear the Node image's entrypoint so the machine boots init
ENTRYPOINT []
CMD ["/sbin/init"]
```

Build the image from the folder that holds the Containerfile, then create the machine from it. A new machine gets half your Mac's memory by default, so cap it:

```bash
cd ~/Developer/Containers/Astro
container build -t local/astro-machine:latest .

container machine create local/astro-machine:latest --name astro
container machine set -n astro cpus=4 memory=4G
container machine stop astro
container machine run -n astro -- node -v   # should print v24.x
```

From then on, do all `npm` work inside the machine. Change to your project folder on the Mac, and each command runs there:

```bash
cd ~/Developer/Astro
container machine run -n astro -- npm install
container machine run -n astro -- npx astro dev --host 0.0.0.0
container machine run -n astro -- npm run build
```

The dev server is reachable from Safari at the machine's IP address, and `npm run build` writes the finished site to `dist/` in your Mac folder, ready to deploy. Run `container machine set-default astro` to drop the `-n astro` from every command.
