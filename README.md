# dundun

SEO-first, fast-shipping web project for building tools + mini SaaS.

## Goals
- Ship quickly
- Rank quickly
- Convert traffic (ads + subscription)

## Local dev
```bash
pnpm install
pnpm dev
```

## Security
- Never commit secrets. See [SECURITY.md](./SECURITY.md)
- Use `.env.local` for local secrets (ignored)

## Notes
- `robots.txt` and `sitemap.xml` are generated from `src/app/robots.ts` and `src/app/sitemap.ts`.
