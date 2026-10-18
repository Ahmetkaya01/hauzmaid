<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Hauzmaid

Production: https://www.hauzmaid.com  
Stack: Next.js 16 + Tailwind 4.  
Deploy (temporary, free): GitHub Pages (`main` → Actions). Netlify is blocked on credits; Vercel team is fair-use blocked.

## Commands

- `npm run dev` — local
- `npm run build` — production build
- `npm run lint` — eslint

Do not commit `.env` or Ads credentials. Do not change live Smart campaign budgets unless the owner asks.

## Ads + Grok Bot

- Conversion events: `whatsapp_clicks`, `phone_clicks` (`AdsLeadTracker`)
- Campaign landers: `/part-time-maid-kl`, `/home-aircon-cleaning-kl`
- Ads sitelink pages: `/prices`, `/about`, `/contact`, `/faq`
- WhatsApp/Sheets SOP: `docs/grok-bot-playbook.md`
- Search + GSC low-budget plan: `docs/google-ads-search-campaign-draft.md`
