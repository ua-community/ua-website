# User & Agents website

The community website is built with Next.js and deployed as static assets on Cloudflare Workers.

- Production domain: <https://www.userandagents.org>
- Cloudflare deployment: <https://ua-website.feynon.workers.dev>
- Worker: `ua-website`

## Development

Use Node.js 22.23.0 (see `.nvmrc`) and npm. The Cloudflare CLI does not support Bun.

```sh
nvm use
npm ci
npm run dev
```

## Build and preview

```sh
npm run build
npm run deploy:check
npm start
```

Next.js exports the website into `out/`. The Cloudflare Vite plugin packages those files, unchanged, into `.cloudflare/output/v0/`. The preview runs the packaged site in Cloudflare's local runtime.

The `/api/og` social image is generated at build time. `public/_headers` preserves its PNG content type and applies immutable caching to Next.js's versioned assets. Missing routes return the exported 404 page.

No runtime secrets or server are required. `NEXT_PUBLIC_SITE_URL` optionally overrides the metadata origin at build time; its default is `https://www.userandagents.org`.

## Deployment

The [Cloudflare workflow](.github/workflows/cloudflare.yml) builds and validates pull requests. Pushes to `main` build, validate, and deploy that same output. It can also be run manually from GitHub Actions on `main`.

The repository secret `CLOUDFLARE_API_TOKEN` authenticates deployment. Its permissions are Workers Scripts Write for the configured account, plus Zone Read and Workers Routes Write for `userandagents.org` only. Keep the token in GitHub secrets or a local environment variable, never in source control.

To deploy locally, sign in once and deploy:

```sh
npx cf auth login
npm run deploy
```

`cloudflare.config.ts` declares the Worker and its domains. The Cloudflare zone has a separate redirect rule from `userandagents.org` to `www.userandagents.org`, preserving paths and query strings.

## Domain migration

The Cloudflare deployment is ready before the domain moves. The current domain uses external nameservers and DNSSEC. Complete these steps at the current DNS provider and registrar:

1. Compare the existing DNS records with the [Cloudflare DNS records](https://dash.cloudflare.com/e531d96572bcfc4edacf957949c536cd/userandagents.org/dns/records). Import any missing records before switching. Automatic scans do not guarantee a complete zone; preserve mail, DKIM, verification records, and other subdomains.
2. Disable the old DNSSEC configuration and remove its DS record at the registrar. Wait until the old DS record is no longer returned by public DNS resolvers before changing nameservers.
3. Replace the existing nameservers with `jobs.ns.cloudflare.com` and `tara.ns.cloudflare.com`.
4. Wait for Cloudflare to mark the zone active and finish issuing HTTPS certificates. Verify the homepage, `/api/og`, the apex-to-www redirect, and `go.userandagents.org/discord`.
5. Enable DNSSEC in Cloudflare and publish Cloudflare's new DS record at the registrar.

`vercel.json` disables future automatic Vercel deployments. The existing Vercel deployment stays available during the DNS change and can be retained temporarily as a rollback option.

To roll back the website after switching DNS, detach its two Worker custom domains, restore `A @ 76.76.21.21` and `CNAME www cname.vercel-dns.com`, and disable the Cloudflare apex redirect if necessary. Do not change unrelated domain records.
