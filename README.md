# User & Agents website

The community website is built with Next.js and deployed as static assets on Cloudflare Workers.

- Production domain: <https://www.userandagents.org>
- Cloudflare deployment: <https://ua-website.feynon.workers.dev>
- Worker: `ua-website`

## Registrar and DNS handoff

These instructions are for the person who manages `userandagents.org` at its registrar. They apply to any registrar that supports custom nameservers and DNSSEC settings; menu names vary by provider.

The domain stays registered and renewed with its current registrar. This deployment uses Cloudflare as the authoritative DNS provider, so DNS records will be managed in Cloudflare after the switch. The registrar owner changes the domain's nameserver delegation. A CNAME pointing to the `workers.dev` preview address does not activate this Workers Custom Domain setup. See [Cloudflare's Custom Domains requirements](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/).

### Access and responsibilities

| Maintainer | Access needed | Responsibilities |
| --- | --- | --- |
| Domain maintainer | The registrar account and the current DNS provider, if separate | Back up existing settings, change nameservers, and manage DNSSEC/DS records at the registrar. |
| Deployment maintainer | The project's Cloudflare account and GitHub repository | Prepare the Cloudflare DNS zone, preserve existing services, confirm Worker domains and certificates, and verify the deployment. |

One person can perform both roles. If the domain maintainer has no Cloudflare access, coordinate the steps below with the deployment maintainer. Registrar access alone is not enough to complete the preparation and verification.

### 1. Prepare Cloudflare before changing the registrar

The deployment maintainer must confirm all of the following:

- `userandagents.org` exists as a DNS zone in the same Cloudflare account as the `ua-website` Worker. Start at the [project's Cloudflare account](https://dash.cloudflare.com/e531d96572bcfc4edacf957949c536cd). If the zone is missing or inaccessible, resolve that before changing nameservers.
- The [Cloudflare preview](https://ua-website.feynon.workers.dev) works, and both `userandagents.org` and `www.userandagents.org` are attached under the Worker's **Settings → Domains & Routes**. Cloudflare manages the website DNS records through these Custom Domains.
- The zone's redirect rules send the apex domain to `https://www.userandagents.org`, preserve the path and query string, and redirect HTTP requests for `www` to HTTPS.
- The assigned nameservers in the zone's **Overview** match the values to be supplied to the registrar owner. Confirm them again if the zone or Cloudflare account has changed.

### 2. Back up and preserve the existing DNS records

The domain maintainer should export the full DNS zone, or save every record if export is unavailable. Also save the current nameservers, DNSSEC settings, website records, and any provider-managed forwarding rules. The registrar and DNS provider may be different companies.

Give the record export to the deployment maintainer, who must compare it with [Cloudflare's DNS records](https://dash.cloudflare.com/e531d96572bcfc4edacf957949c536cd/userandagents.org/dns/records) and copy anything missing. Preserve all records used by other services, including email records, DKIM selectors, SPF, DMARC, verification TXT records, SRV records, and subdomain delegations. For this domain, check `go.userandagents.org`, `blog.userandagents.org`, and `_atproto.userandagents.org` in particular. Use the current DNS provider's values as the source of truth.

Only the website records for the apex domain and `www` are being replaced by Worker Custom Domains. Keep unrelated services at their existing destinations and use DNS-only mode where their providers require it. Cloudflare's automatic scan can miss records, and registrar forwarding features may need separate recreation. Finish this comparison before switching nameservers. See [Cloudflare's DNS preparation guidance](https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/#2-review-your-dns-records).

### 3. Remove the old DNSSEC delegation, if present

At the registrar, open the domain's **DNSSEC**, **DS records**, or similarly named settings. If a DS record is published for the current DNS provider, remove it using the registrar's controls; some registrars label this action **Disable DNSSEC**. If no DS record is published, skip this step.

Wait for the removal to reach the parent registry and for cached DS records to expire before changing nameservers. Have the deployment maintainer check public DNS resolvers for a successful DS lookup with no records; a timeout or `SERVFAIL` is not a successful check. If DNS signing is controlled separately at the old DNS host, keep it working until the old DS records have expired. An old DS record paired with new nameservers can make the domain unreachable. Follow the [DNSSEC migration guidance](https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/#33-turn-off-dnssec) if the registrar requires additional steps.

### 4. Change the domain's nameservers at the registrar

Open `userandagents.org` in the registrar's domain management area. Look for **Nameservers**, **Custom nameservers**, or **Use external DNS**. Change the domain's nameserver delegation there; adding NS records in the old DNS record editor does not change registrar delegation.

The nameservers recorded for this deployment are:

| Registrar field | Value |
| --- | --- |
| Nameserver 1 | `jobs.ns.cloudflare.com` |
| Nameserver 2 | `tara.ns.cloudflare.com` |

Use these values only after the deployment maintainer confirms that they match the zone's current Cloudflare assignment. Replace the entire old nameserver list with the assigned pair and leave any additional nameserver fields empty. Enter the hostnames exactly; no IP addresses or glue records are required for these Cloudflare nameservers. Save the change and complete any confirmation requested by the registrar.

If these controls are unavailable, ask the registrar's support team to update the authoritative nameservers for `userandagents.org` to the confirmed pair. Domain registration and renewal remain with that registrar.

### 5. Verify the switch together

The domain maintainer should send the deployment maintainer the change time and the nameservers entered. The deployment maintainer then checks that public DNS returns the assigned nameservers, Cloudflare marks the zone **Active**, and HTTPS certificates for both website hostnames are valid. DNS caches and certificate issuance can take time; saving the registrar form alone does not confirm completion.

| Check | Expected result |
| --- | --- |
| `https://www.userandagents.org` | The User & Agents homepage loads without certificate errors. |
| `https://userandagents.org/api/og?check=1` | Redirects to the same path and query on `https://www.userandagents.org`. |
| `http://www.userandagents.org` | Redirects to HTTPS. |
| `https://www.userandagents.org/api/og` | Returns the 1200 × 630 PNG social image. |
| `https://www.userandagents.org/migration-check-missing-page` | Returns the site's 404 page with HTTP status 404. |
| `https://go.userandagents.org/discord` | The community invitation still works. |
| Other existing services | Email, verification records, and other subdomains still work where configured. |

### 6. Enable DNSSEC with Cloudflare's values

After activation and successful verification, the deployment maintainer enables DNSSEC for the Cloudflare zone and supplies its new DS details. The domain maintainer enters the **key tag**, **algorithm**, **digest type**, and **digest** in the registrar's DNSSEC controls, or follows the registrar's supported automatic process. Use Cloudflare's new values rather than the saved DS record from the previous provider, and have the deployment maintainer verify DNSSEC validation afterward. See [Cloudflare's DNSSEC instructions](https://developers.cloudflare.com/dns/dnssec/).

### Ongoing maintenance and rollback

Manage future DNS record changes in Cloudflare. Keep domain renewal and registrar-level nameserver/DNSSEC controls at the registrar. Website updates continue through GitHub as described below; normal code deployments do not require registrar changes.

`vercel.json` disables future automatic Vercel deployments. Retain the existing Vercel deployment and the DNS backup until the switch is verified.

If the website needs to return to Vercel while DNS stays on Cloudflare, coordinate with the deployment maintainer: remove the website's Custom Domain declarations from `cloudflare.config.ts` and its Worker attachments, restore the saved Vercel website records in Cloudflare, and adjust the website redirect rules if needed. Removing the declarations prevents a later deployment from reattaching the domains. Leave unrelated DNS records intact. Returning all DNS hosting to the old provider is a separate change that requires reviewing nameservers and DNSSEC together.

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

`cloudflare.config.ts` declares the Worker and its domains. Redirect rules are managed separately in the Cloudflare zone; verify them using the registrar and DNS handoff above.
