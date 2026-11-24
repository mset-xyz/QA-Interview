# MSET | QA interview 

A neutral environment for live UI and API automation. Assessment URLs and tasks are shared during the interview. No internal application, credentials, test solutions, page objects or locators are included.

## Option A — GitHub Codespaces (recommended)

1. Sign into GitHub and open the repository.
2. Select **Code > Codespaces > Create codespace on main** (or the default branch).
3. Wait for the container and npm installation to finish.
4. Open the terminal and run `npm run check`.

Codespaces requires an eligible GitHub account and available usage quota. Browser tests run headlessly; inspect the target website in a separate browser tab and share your editor/terminal during the interview.

## Option B — Local setup

Install Node.js 22 or later and Git. Chrome is recommended; WebdriverIO can manage browser/driver downloads when needed. Internet access is required for dependencies and public testing websites.

Clone or download the repository, open its folder in an IDE, then run:

```sh
npm install
npm run check
```

## During the interview

- UI: edit `tests/ui/interview.spec.js`, remove `.skip`, and run `npm run test:ui`.
- API: edit `tests/api/interview.test.js`, remove `.skip`, and run `npm run test:api`. Node includes `fetch`, the test runner and assertion library; other libraries are optional.
- Create any reusable functions or other files you need.
- Use only public testing systems and records you create yourself. Do not use employer code, credentials or customer data.
- AI tools may be used when the interviewer permits them.

UI tests run headlessly by default. For visible local browser execution on macOS/Linux, use `HEADED=1 npm run test:ui`; on PowerShell use `$env:HEADED='1'; npm run test:ui`. A desktop display is required for headed execution.

The separate readiness checks confirm that a browser starts and local HTTP works. They are not assessment solutions. The candidate test files are intentionally skipped until implemented.

## Troubleshooting

If setup fails, share the error with the interviewer before the session. Check Node version, dependency installation, internet access and browser availability. The candidate may use an alternative working automation stack by agreement with the interviewer.
