# V3 rollout playbook

The landing page now has two variants: **V2** (current production design)
and **V3** (persona-first, surface-aware, with deep-link routes, hub
preview, interactive try-it demos, and persona-aware testimonials/FAQ).

This doc covers the three ways real users can land on V3:

1. **Cold deep-link** — share specific URLs in campaigns
2. **Force-flag URL** — for QA + sales + warm campaign drops
3. **Random rollout %** — gradual production traffic ramp

---

## URL structure

| URL | Who it serves | Use case |
|---|---|---|
| `/` | Bucketed (V2 by default) | Production root — random rollout decides |
| `/?lrn=v3` | Forces V3, persists for 30 days | Share with paid-ad campaign that wants v3 |
| `/?lrn=v2` | Forces V2, persists for 30 days | Roll a v3 visitor back to v2 (debug, complaints) |
| `/v3` | Always V3, no persona | Cold preview link for team / press |
| `/v3/student` | Always V3, student picker pre-selected | Student-focused campaign |
| `/v3/teacher` | Always V3, teacher picker pre-selected | Teacher community drops |
| `/v3/parent` | Always V3, parent picker pre-selected | Parent groups on Zalo/FB |
| `/v3/professional` | Always V3, pro picker pre-selected | TOEIC/IELTS prep audiences |
| `/v3/school` | Always V3, school picker pre-selected | B2B sales |

Each `/v3/<slug>` route is **prerendered with persona-specific `<title>` +
meta description**, so cold link previews on Zalo/FB/Twitter carry the
right copy. The runtime `useDocumentMeta` hook also keeps the tab title
in sync when users switch persona via the picker mid-session.

Unknown slugs (e.g. `/v3/garbage`) fall through to the neutral `/v3`
landing — **typo-safe for paid ads**.

---

## Random rollout %

Default: **0% of `/` traffic on V3** — random users stay on V2 until you
explicitly ramp. Cold links (`/v3` family) are unaffected.

To change the rollout %, set the build-time env var in
`.github/workflows/azure-swa.yml`:

```yaml
- run: npm run build
  env:
    VITE_BUBBLE_API_URL: ${{ secrets.VITE_BUBBLE_API_URL }}
    VITE_GOOGLE_CLIENT_ID: ${{ secrets.VITE_GOOGLE_CLIENT_ID }}
    VITE_TRACKING_URL: https://admin.learneris.com
    VITE_V3_ROLLOUT_PCT: "10"   # ← add this; 0–100
```

Then commit + push to main → SWA rebuilds + redeploys. New visitors land
in their bucket; existing visitors keep their sticky cookie.

**Suggested ramp:** 0 → 5 → 25 → 50 → 100 over 1–2 weeks, watching the
analytics split. Roll back to 0 by setting the var (or removing it) and
redeploying — sticky cookies still pin existing v3 users.

---

## Bucket assignment

The decision happens in `src/lib/bucket.ts:resolveBucket()`. Precedence
(highest wins):

1. `?lrn=v2` or `?lrn=v3` query param — **always wins**, persists 30 days
2. Path `/v3*` — always V3
3. Cookie `lrn_v3_bucket` from a prior visit — sticky for 30 days
4. Random coin flip against `VITE_V3_ROLLOUT_PCT`

Cookie: `lrn_v3_bucket`, `Path=/`, `SameSite=Lax`, `Secure` in prod.

---

## Telemetry

Every page view tags the bucket onto Sentry as `landing_bucket=v2|v3` so
error reports + performance metrics attribute to the right variant.

When you want explicit bucket-assignment events (e.g. for a real A/B
analytics tool like GrowthBook or Mixpanel), wire a fetch ping inside
`tagBucketForTelemetry()` in `src/lib/bucket.ts` — current implementation
is a stub for the Sentry tag and a comment marker for the analytics call.

---

## Internal preview

Every PR to `learnery-engine/landing-page` automatically gets an Azure
SWA preview environment with its own URL — see
`.github/workflows/azure-swa.yml`. Share the preview URL internally;
it's unguessable and closes when the PR closes.

---

## How to undo V3

1. Set `VITE_V3_ROLLOUT_PCT` back to `0` (or remove the var).
2. Optionally also delete the route block in `App.tsx` matching
   `/v3*` to disable the cold preview routes.
3. Re-deploy main. New visitors see V2; existing v3 cookies keep them
   on v3 until cookie expiry (30 days) unless you bump the cookie name.
