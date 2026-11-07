# User & Agents website

The community website is built with Next.js, exported as static files, and deployed through GitHub Actions to GitHub Pages.

- Website: <https://www.userandagents.org>
- Repository: <https://github.com/ua-community/ua-website>
- Deployment settings: <https://github.com/ua-community/ua-website/settings/pages>
- Deployment runs: <https://github.com/ua-community/ua-website/actions/workflows/pages.yml>

## Registrar and DNS handoff

These instructions are for whoever manages `userandagents.org` at its registrar or DNS provider. Menu names vary, but the record values are the same at every provider. Domain registration, nameservers, and DNSSEC stay with the existing providers. This migration only changes the website's DNS records; the previous Cloudflare nameserver instructions no longer apply.

### 1. Confirm GitHub Pages is ready

The repository maintainer should check **Settings → Pages**:

- **Build and deployment → Source:** GitHub Actions.
- **Custom domain:** `www.userandagents.org`.
- The latest **GitHub Pages** workflow on `main` has a successful deployment.

Save the custom domain in GitHub before changing DNS. With this Actions workflow, GitHub stores the custom domain in the repository settings; a `CNAME` file in the source is not required. The existing `www` address remains the primary address, and GitHub redirects the apex domain to it once both DNS records are correct.

### 2. Back up the current website records

Open the domain's **DNS records**, **Manage DNS**, or **Zone editor**. If the registrar uses another company for DNS hosting, make these changes at that DNS provider instead.

Save the current apex (`@`) and `www` records and any website forwarding settings for rollback. Preserve unrelated records, including email, SPF, DKIM, DMARC, verification TXT records, and the `go`, `blog`, and `_atproto` subdomains.

### 3. Point the website to GitHub Pages

Replace the old website records with these values. A TTL of **Auto**, the provider's default, or **300 seconds** is suitable.

| Type | Host / Name | Value / Target |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `ua-community.github.io` |

`@` means the root domain, `userandagents.org`. Some providers use a blank field or the full domain instead. Enter the CNAME target as a hostname, without `https://`, a path, or the repository name.

Remove conflicting website A, AAAA, ALIAS, ANAME, or CNAME records for the apex and `www`, including old Vercel destinations. Keep apex TXT and MX records. Disable registrar website forwarding for these two hostnames so GitHub can handle the redirect. If the DNS provider offers a proxy option, use **DNS only** for the website records.

IPv6 is optional. If you want it, use all four AAAA records below alongside the A records. Otherwise, remove any old website AAAA records so IPv6 visitors do not reach the previous host.

| Type | Host / Name | Value / Target |
| --- | --- | --- |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |

These values come from [GitHub's custom-domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site). Follow that page if GitHub changes its published addresses.

### 4. Enable HTTPS and verify

Tell the repository maintainer when the records are saved. They should check **Settings → Pages** for a successful DNS check and certificate, then enable **Enforce HTTPS** when available. DNS propagation and certificate issuance may take up to 24 hours. Existing restrictive CAA records may need to permit `letsencrypt.org`; see [GitHub's HTTPS troubleshooting guidance](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https).

Verify these URLs after the switch:

| Check | Expected result |
| --- | --- |
| `https://www.userandagents.org` | Homepage loads, including styling and theme controls. |
| `https://userandagents.org/?check=1` | Redirects to `https://www.userandagents.org/?check=1`. |
| `http://www.userandagents.org` | Redirects to HTTPS once enforcement is enabled. |
| `https://www.userandagents.org/og.png` | Returns the 1200 × 630 PNG social image. |
| `https://www.userandagents.org/migration-check-missing-page` | Returns the site's 404 page with HTTP status 404. |
| `https://go.userandagents.org/discord` | Community invitation still works. |
| Other services | Existing email and other subdomains still work where configured. |

### Ongoing maintenance and rollback

Keep managing domain renewal, DNS records, nameservers, and DNSSEC with the existing providers. Website updates deploy automatically after changes reach `main`; normal updates need no DNS changes.

For a content rollback, revert the relevant Git commit and let the Pages workflow deploy again. To return hosting to the previous provider, restore the saved website DNS records, including the previous IPv6 settings, and verify that the old deployment is available. Retain the previous deployment until the Pages switch is verified. `vercel.json` disables new automatic Vercel deployments.

## Development

Use Node.js 22.23.0 (see `.nvmrc`) and npm.

```sh
nvm use
npm ci
npm run dev
```

## Build and preview

```sh
npm run build
npm start
```

The build exports the website into `out/`. The preview serves those files at <http://127.0.0.1:3000>. The social image is generated as `out/og.png` at build time, so Pages can serve it with the correct image type. GitHub Pages uses `out/404.html` for missing pages.

No runtime server or deployment secret is needed. `NEXT_PUBLIC_SITE_URL` optionally overrides the metadata origin at build time; it defaults to `https://www.userandagents.org`. The site is built for the root of its custom domain.

## Deployment

The [GitHub Pages workflow](.github/workflows/pages.yml) builds pull requests. Pushes to `main` build, upload `out/`, and deploy that exact artifact to the `github-pages` environment. To redeploy manually, open the workflow's **Run workflow** menu and choose `main`.

Deployment uses GitHub's built-in workflow authentication with `pages: write` and `id-token: write` permissions. The former Cloudflare workflow, build tools, and deployment token are no longer required.
