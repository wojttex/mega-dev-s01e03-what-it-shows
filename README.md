# MEGA.dev S01E03 — what it shows

Reassessment of the support desk's merged ticket #4471 using its 2026-10-04 kb export.

- [Shared parser: 379 reports](https://github.com/wojttex/mega-dev-s01e03-what-it-shows/issues/1)
- [booking-v3 hint: 33 reports](https://github.com/wojttex/mega-dev-s01e03-what-it-shows/issues/2)
- [New signed kb page (source)](src/routes/kb/incidents/4471-reassessment/+page.svx)
- [Rendered kb page (download and open in a browser)](rendered/4471-reassessment.html)
- [Computed report IDs and classification evidence](evidence/analysis.json)

The rendered HTML is generated from the .svx through mdsvex, Svelte SSR, and the original kb components. It includes the calculated table, timeline, dedupe cases and desk reference; it is a static snapshot. Controls in the static HTML do not recalculate on interaction. Original source components retain their interactive behavior in a Svelte application.

Reproduce with Node.js 22 or later and pnpm: `pnpm install --frozen-lockfile`, then `pnpm render`.

There are 427 export rows, 412 unique report IDs, and 15 identical repeated rows. The two cause groups partition the 412 IDs. Five one-day-move descriptions remain in the parser group under the supplied classifier; this does not establish their underlying root cause. See the signed page for the caveat.

The export is a historical snapshot, not live queue state. The accepted decision 0001 and original incident text are preserved. Published data is a minimized projection, not the full export. Report bodies, subjects and browser locales are excluded; tenant handles/names are pseudonymized consistently in the directory and dedupe examples. Original component logic, report IDs, locale/form configuration, intake tags, arrival/merge times and duplicate rows are retained so tables, counts and timeline remain reproducible. The unmodified ZIP stays local. No product fix or adoption of a new desk policy is claimed.

Original export SHA-256: `267efc5ea61aca6efaaca842160ac4d0377d56bcbf5123e61c604d6ae99597f2`.

---

## Original export README

# kb — the support knowledge base

**kb** = knowledge base. What the support desk knows about how our products break, written
down where the code can keep it honest.

One desk takes reports for every product we run: `sched-prod` (calendar invites for about
300k people) and the rest. When something
goes wrong, the reports reach the desk first. This kb is how the desk triages them, what each
incident turned out to be, and why we decided what we decided.

## What's here

```
src/routes/kb/      the pages (.svx: Markdown with components)
  triage/           how the desk handles incoming reports
  incidents/        one page per big ticket
  decisions/        numbered decision records
src/lib/kb/         components and the logic they run
src/lib/layouts/    the frame every page shares
src/lib/data/       exports from the ticket system
```

## Conventions

- Words in the page, logic in `src/lib` (imported as `#lib/…`). A number that can be computed belongs in a component.
- Every page starts with frontmatter: `title`, `owner`, `status`, `reviewed`.
- A decision is never edited after it is accepted. A new record replaces it.
- A page you add is signed: its frontmatter carries your `signature` and it ends with `<RenderStamp {signature} />`, so the desk knows who wrote it.

## Owners

Support desk. Decision records: whoever signed them.

---

Exported 2026-10-04 from the `support` repo, `apps/kb/` → `src/`.
