# Craig Law — Personal Resume & Portfolio

A personal resume and portfolio site built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), containerised with Docker, and deployed via GitHub Actions to a self-hosted TrueNAS server managed by Dockge.

---

## Quick Start (local development)

**Prerequisites:** Node.js 20+

```bash
npm install
npm run dev
```

Visit `http://localhost:4321`.

---

## Updating Content

All site content lives in `src/data/`. No code knowledge required — edit the files in GitHub's web editor or VS Code, commit, and push.

| File | What it controls |
|---|---|
| `src/data/site.ts` | Name, title, email, phone, LinkedIn, GitHub, analytics, contact form endpoint |
| `src/data/experience.ts` | Work history cards (company, title, period, description, skill tags) |
| `src/data/skills.ts` | Skill groups and individual skill tags |
| `src/data/projects.ts` | Project cards with tags and optional links |
| `src/data/education.ts` | Degrees, certifications, and courses |

---

## Deployment Workflow

1. **Edit** any file under `src/data/` or `src/components/`
2. **Commit and push** to `main`:
   ```powershell
   git add .
   git commit -m "feat: update experience section"
   git push
   ```
3. **GitHub Actions** automatically builds and pushes a new Docker image to `ghcr.io/lawless76/myresume:latest`
4. In **Dockge** (`http://10.0.1.252:5300`), pull the new image and restart the `myresume` stack
5. Verify at `http://10.0.1.252:3000`

### First-time GitHub setup (run once)

```powershell
git init
git remote add origin https://github.com/lawless76/myresume.git
git add .
git commit -m "feat: initial commit — Astro resume site"
git push -u origin main
```

---

## Project Structure

```
src/
├── components/    # Astro UI components (Header, Hero, About, etc.)
├── data/          # Content files — edit these to update the site
├── layouts/       # Base HTML layout (analytics script lives here)
└── pages/         # index.astro — assembles all components
public/            # Static assets (favicon, images)
Dockerfile         # Multi-stage build: Node → nginx
nginx.conf         # nginx with gzip, caching, security headers
docker-compose.yml # Dockge stack definition
.github/workflows/ # GitHub Actions CI/CD pipeline
```

---

## Analytics (Umami)

The site supports [Umami](https://umami.is) for privacy-friendly visitor analytics.

1. Deploy Umami as a Docker container on your TrueNAS (see [Umami docs](https://umami.is/docs/install))
2. Add your site in the Umami dashboard — it gives you a **Website ID** and a **script URL**
3. Open `src/data/site.ts` and fill in:
   ```ts
   umamiWebsiteId: 'YOUR-WEBSITE-ID',
   umamiSrc: 'https://your-umami-instance/script.js',
   ```
4. Push — the tracking script is injected automatically on the next deploy

---

## Contact Form (Formspree)

The contact form uses [Formspree](https://formspree.io) (free tier: 50 submissions/month).

1. Sign up at formspree.io and create a new form
2. Copy the endpoint URL (e.g. `https://formspree.io/f/abcd1234`)
3. Update `formspreeEndpoint` in `src/data/site.ts`

---

## Docker Image

The image is pushed to the GitHub Container Registry:

```
ghcr.io/lawless76/myresume:latest
```

To pull manually:
```bash
docker pull ghcr.io/lawless76/myresume:latest
```

Make sure the repository **Packages** visibility is set to **Public** (or authenticate with a PAT) so Dockge can pull without credentials.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Astro 4 (static output) |
| Styling | Tailwind CSS 3 |
| Runtime | Node 20 (build only) |
| Server | nginx 1.27 (Alpine) |
| CI/CD | GitHub Actions |
| Registry | GitHub Container Registry (ghcr.io) |
| Orchestration | Docker / Dockge |
