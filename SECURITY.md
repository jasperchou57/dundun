# Security / Secrets Policy

This repo must **never** contain secrets.

## Do not commit
- Passwords, emails with passwords, 2FA backup codes
- API keys / tokens (OpenAI, Stripe, analytics, etc.)
- OAuth client secrets
- Private keys (SSH, TLS)
- Cookies / session headers

## Where secrets live
- Use `.env.local` for local dev.
- Use deployment platform secret store (Vercel/CF/Render/etc.) for production.

## Repo hygiene
- Keep `.env*` ignored (except `.env.example` if we add one).
- If a secret is accidentally committed:
  1) Rotate/revoke immediately
  2) Purge history (git filter-repo) if needed
  3) Add detection (pre-commit / CI secret scanning)
