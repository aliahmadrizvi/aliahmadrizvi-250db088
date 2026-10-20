<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Personal/social links config lives in src/data/site.ts and project data in src/data/projects.ts; every outbound href goes through safeUrl/emailHref in src/lib/links.ts so placeholder or non-https values render as disabled instead of dead links.

- Keep profile, experience, hackathons and credential records in site data, and project descriptions/status/verified destinations in project data, so factual updates do not require presentation changes.
- Contact mailto subjects are encoded by emailHref; reuse it for all email CTAs to prevent query/header injection.
- All section IDs are sourced from navItems for navigation observation; use a compact menu until the full link set fits.
