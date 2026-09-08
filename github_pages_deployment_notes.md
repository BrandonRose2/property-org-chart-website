# GitHub Pages Deployment Notes

## 2026-09-08 — Initial 404 Resolution

The GitHub Pages Action deployment for `BrandonRose2/property-org-chart-website` completed successfully and the Pages API reported `status: built`. The public GitHub Pages host initially served GitHub’s default 404 page during first-site edge propagation. No application or artifact correction was required: subsequent header verification returned **HTTP 200**, and the deployed HTML references the repository-scoped assets under `/property-org-chart-website/assets/`.

**Public URL:** https://brandonrose2.github.io/property-org-chart-website/

**Repository:** https://github.com/BrandonRose2/property-org-chart-website

## 2026-09-08 — Client-Side Route Correction

After edge propagation, the page host and assets returned HTTP 200 but the browser showed the application’s own 404 screen. The app router was matching the GitHub Pages path (`/property-org-chart-website/`) against its root-only route (`/`). The router now uses Vite’s `BASE_URL`, so GitHub Pages routes are interpreted relative to the repository base path. The corrected workflow run `34290732215` completed successfully.
