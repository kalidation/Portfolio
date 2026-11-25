---
name: Update-CV-and-generate-messages
description: Update Khaled Bougdour's CV/resume (FR + EN PDFs in public/) together with the Portfolio code that mirrors it (src/utils/constants.ts experiences, tech, profile), and write tailored recruiter messages (LinkedIn replies, InMail, connection notes under 300 chars, cover messages, follow-ups) for a job offer. Use ONLY inside the Portfolio repo. Trigger whenever the user wants to update, refresh, shorten or give advice on the CV or resume, add a mission/skill/tech to it, regenerate the PDFs, sync the portfolio with the CV, or answer or contact a recruiter about a job, even if they don't mention files or a skill. Do NOT use it for portfolio changes unrelated to CV content (UI/3D bugs, new project cards, translations of site text, contact form, dependencies, CI/deploy), other repos, LinkedIn posts, or applications on behalf of other people.
---

# Update CV and generate messages (Portfolio repo only)

Do not apply this skill outside the `Portfolio` repository. The CV is the single source of truth: every CV change must also be reflected in the portfolio code, otherwise the website and the PDFs drift apart.

## Files involved

| What | Where |
|---|---|
| Portfolio data (experiences, timelines, projects, technologies) | `src/utils/constants.ts` (`timelines`, `items`, `projects`, `technologies`, `services`) |
| Sections rendering it | `src/components/Experience.tsx`, `Works.tsx`, `Tech.tsx`, `About.tsx`, `Hero.tsx` |
| French CV | `public/Resume-khaled-bougdour-updated.pdf` |
| English CV | `public/Resume-khaled-bougdour-EN.pdf` |
| Reference content (last validated CV text + sample messages) | `~/Library/CloudStorage/OneDrive-VISEO/nexans-2025-2026/reports/onedrive-viseo-review-cv-fr-en-and-linkedin-2026-11-25.md` |

Read the reference report first: it holds the latest validated FR/EN CV wording, the structure (Profile, Experience by mission, Technical skills in 4 groups) and message examples. Treat it as the baseline to diff against, not as something to rewrite from scratch.

## Workflow

### 0. Choose the scope (always the very first action)
Before reading or editing anything, call `ask_user` with a single enum field "Scope":
- **Code base only**: sync the portfolio code with the existing resume content; the PDFs are left untouched (skip step 3).
- **Resume + code base**: update both PDFs and the code (steps 2 and 3).

Skip this only if the user is asking purely for recruiter messages (go to step 5). Why: regenerating the PDFs is the costly, design-sensitive part, so the user decides whether it's needed.

#### 0b. If "Code base only" was chosen: pick the sections to update
Immediately follow up with a second `ask_user` call (do not guess which parts of the code to touch). Use one multi-select field "Sections to update" with these options:
- **Experience / missions** (`timelines`, `items`)
- **Projects** (`projects`)
- **Technologies** (`technologies`)
- **Profile / services** (`services`, Hero/About text)
- **All sections**
- **Other** (the user types a freeform section or file)

Then restrict the edits in step 2 to the chosen sections (all of them if "All sections"; whatever the user typed for "Other"). Why: the code mirrors many parts of the resume, and touching only what changed avoids accidental drift or diff noise in the rest of `constants.ts`.
If "Resume + code base" was chosen, update every section the interview (step 1) shows as changed; no section question is needed.

### 1. Interview (ask before editing)
Use `ask_user` with a single focused form. Skip questions the user already answered. Ask:
- What changed? (new/ended mission, client, dates, duration, achievements, tech added/removed, certifications, profile headline)
- Which missions/projects to highlight, and which to drop? (the CV must stay 1 page, so something usually has to give)
- Any positioning change? (e.g. Front-End/Mobile vs Fullstack .NET; technologies to remove, such as Java/Spring Boot)
- Anything confidential to keep out (client names, numbers)?
- Is a message also needed now? If so go to step 5.

Why: the facts live in the user's head and the OneDrive report; inventing achievements or dates in a CV is worse than asking.

### 2. Update the code first
Edit only the sections selected in step 0b (or all that changed, for "Resume + code base") in `src/utils/constants.ts` (and the section components only if the data shape changes) so the portfolio matches the new CV: experience entries/timelines, technologies, projects. Keep the existing types and style. Run `npm run lint` and `npm run build` to verify.

### 3. Update both resumes (FR and EN) — only if scope includes the resume
Always update both PDFs together, with the same facts and structure.
- Preserve the visual design strictly: beige banner `#f3f0ec`, circular photo ringed in bronze `#b58d73`, fonts `Montserrat` / `Cormorant Garamond` / `Lato`, hollow-circle separators, exactly 1 A4 page.
- Reverse-chronological order; fix typos; concise bullets with the tech in bold.
- Regenerate from an HTML/CSS template reproducing the existing layout (extract the photo and layout details from the current PDF), render with headless Chrome (`"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --print-to-pdf=<out> --no-pdf-header-footer <html>`), and overwrite the files in `public/`.
- Verify the output is 1 page (`file public/*.pdf` reports the page count) and inspect it visually (render to PNG). If it overflows, trim the lowest-value bullets rather than shrinking fonts.
- Keep the working HTML in a temp dir and delete it afterwards. Do not commit unless asked.

### 4. Sync the reference report (optional)
If the user wants it, write a new dated report next to the existing one with the new validated CV text, so the next run has an up-to-date baseline.

### 5. Generate messages
For a job offer (ask for the URL or pasted text, recruiter names, and language if unclear), produce for each recruiter:
- **InMail / direct message**: greeting by first name, one line showing the offer matches the day-to-day work, 2 bullets of the most relevant missions (chosen from the CV according to the offer's stack, not everything), mention of the attached CV, a clear call to action (short call/coffee if same city), signature.
- **Connection note under 300 characters** (count them).
- Optionally a short, polite follow-up (5–7 days later).

Languages: FR and EN versions unless the user says otherwise (the offer's language first). Attach the CV in the same language. Only claim what is in the CV; emphasize the stack the offer asks for (React Native/Expo for mobile roles, .NET/Azure for fullstack ones). Tone: confident, warm, no filler.

## Final response
Summarize briefly: files changed, PDFs regenerated (page count), lint/build status, and the messages. Mention anything you could not verify.
