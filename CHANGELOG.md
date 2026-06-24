# Changelog

All notable changes to this project are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [1.0.0] – 2026-06-24

### Added
- Initial release of Craig Law's personal resume and portfolio site
- **Hero section** — name, title, description, CTA buttons, and availability badge
- **About section** — bio, quick stats, and contact card with email/phone/location/socials
- **Experience section** — timeline of 4 roles across RSL Queensland and Downer/MHPS
- **Skills section** — grouped skill tags across 5 categories (D365, Power Platform, Azure DevOps, IT Infrastructure, Tools)
- **Projects section** — featured and standard project cards with tag and link support
- **Education section** — degrees, certifications, and continuous learning panels
- **Contact section** — Formspree-powered contact form with success/error feedback
- **Footer** — copyright, LinkedIn, GitHub, and email links
- `src/data/` TypeScript content files for easy no-code content editing
- Umami analytics integration (opt-in via `src/data/site.ts`)
- Multi-stage `Dockerfile` (Node 20 build → nginx 1.27 serve)
- `nginx.conf` with gzip compression, aggressive asset caching, and security headers
- `docker-compose.yml` for Dockge deployment on TrueNAS
- GitHub Actions workflow: build on push to `main`, push image to `ghcr.io/lawless76/myresume:latest`
- `README.md` with setup, content editing, deployment, and analytics instructions

---

## [1.1.0] – 2026-06-24

### Changed
- **About section** — removed contact details card; bio is now full-width with an extra stat (BCS cert). Cleaner layout, no duplicate information.
- **Contact section** — contact details (email, phone, location) moved below the form as three clickable side-by-side cards. Email opens mail client, phone opens dialler, location opens Google Maps.
- **Social links** — LinkedIn and GitHub moved below the contact cards as pill buttons.

### Added
- **Discord link** — new `discord` and `discordUsername` fields in `src/data/site.ts`. Button appears automatically once filled in. README updated with instructions for finding your Discord user ID.

### Fixed
- **Dockerfile** — changed `npm ci` → `npm install` to allow builds without a committed `package-lock.json`.

<!-- Add new entries above this line using the format:

## [X.Y.Z] – YYYY-MM-DD

### Added | Changed | Fixed | Removed
- Description of change (why + what)

-->
