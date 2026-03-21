# Contributing to 100 Days of PowerShell

Thanks for being here. This project runs on community submissions — every fork, every capstone PR, every showcases.json entry makes the challenge more valuable for the next person.

---

## How to submit daily challenge work

1. Do the day's challenge
2. Paste your result (GitHub Gist link or screenshot) in [GitHub Discussions → Daily Submissions](https://github.com/jfergitlife/100-days-of-powershell/discussions/categories/daily-submissions)
3. Tag your post with `#day-XXX` (e.g. `#day-007`)

That's it. No PR needed for daily work.

---

## How to submit a capstone

1. Fork this repo if you haven't already
2. Complete the capstone project for your phase
3. Push your script to `capstones/phase-X/` in your fork
4. Copy `CAPSTONE_SUBMISSION_TEMPLATE.md` to `capstones/phase-X/SUBMISSION.md` and fill it out
5. Post in [GitHub Discussions → Capstone Submissions](https://github.com/jfergitlife/100-days-of-powershell/discussions/categories/capstone-submissions) with your fork link

---

## How to get on the Showcase wall

After completing a capstone:

1. Open a PR to the main repo editing `showcases.json`
2. Add your entry in this format:

```json
{
  "name": "Your Name",
  "github": "https://github.com/your-username",
  "fork": "https://github.com/your-username/100-days-of-powershell",
  "capstone": 1,
  "description": "One sentence about what you built.",
  "completed": "YYYY-MM-DD"
}
```

3. PRs for showcase entries are merged within 48 hours.

---

## How to report an error or suggest an improvement

Open an issue. Label it `bug` for errors in the content, `enhancement` for suggestions.

If you want to fix something yourself, submit a PR. Keep changes focused — one fix or improvement per PR.

---

## Code of conduct

Be straight with people. Help when you can. Don't gatekeep. Everyone was a beginner once.
