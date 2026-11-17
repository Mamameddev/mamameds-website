# December 29, 2026 outreach registration

Local production preview: http://localhost:3011/register

The `/register` page uses the approved flyer and Google Form. Responses go directly to Google Forms; this site stores no registration details and sends no confirmations. Google Forms displays the submission confirmation. Kasite can follow up manually.

The source flyer is optimized as `public/images/december-2026-outreach.webp` (117,826 bytes, 1024 × 1280). Event content lives in `src/app/register/page.tsx`; this release adds no CMS fields or services. The existing CMS still provides shared branding and footer content.

## Before launch

- On a phone signed out of Google, open the page and submit one clearly labelled test registration agreed with Kasite. Have her confirm it arrives in the linked Google Sheet, then remove the test entry. Automated verification intentionally does not submit an invented participant.
- Confirm `kasite@mamamedsng.com` receives questions. Existing shared footer/contact settings have not been changed.
- Use `NEXT_PUBLIC_SITE_URL=https://mamamedsng.com` for the production build. Local `.env.local` may use localhost, which the production URL validation deliberately rejects.
- Push/deploy only when requested.

## After the outreach

Keep `/register` available for existing flyer links. Replace the registration form and availability copy with a short thank-you message. Remove the registration header link and homepage promotion, or replace the banner with a results link. Add only results supplied by Kasite. Update page metadata and sitemap frequency. No automatic closure or results are currently scheduled.
