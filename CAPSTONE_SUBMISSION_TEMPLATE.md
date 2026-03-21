# Capstone Submission Template

Use this template for all five capstone submissions (Days 20, 40, 60, 80, 100).

Copy this file into your forked repo under `capstones/phase-X/SUBMISSION.md` and fill it out completely before submitting.

---

## Submission Info

| Field | Your Answer |
|-------|-------------|
| **Your Name / GitHub Handle** | |
| **Capstone** | Phase X — Project Name |
| **Date Completed** | |
| **Fork URL** | https://github.com/YOUR-USERNAME/100-days-of-powershell |
| **Script Location in Your Fork** | `capstones/phase-X/YourScript.ps1` |

---

## Checklist

Go through every requirement from the capstone day and check it off. If you didn't complete something, explain why in the notes section below.

### Phase 1 — System Info Reporter
- [ ] Comment-based help header included (`.SYNOPSIS`, `.DESCRIPTION`, `.NOTES`)
- [ ] Displays hostname, current user, OS version, uptime
- [ ] Displays CPU name and total RAM in GB
- [ ] Displays C:\ disk usage (used / total / free in GB)
- [ ] Displays top 5 processes by memory (Name + MemoryMB)
- [ ] Displays count of running vs stopped services
- [ ] Output is cleanly formatted (table or aligned Write-Host)
- [ ] Exports report to `.txt` file with hostname and date in filename
- [ ] Prints colored confirmation line with export path

### Phase 2 — Log Parser Script
- [ ] Accepts a log file path as a parameter
- [ ] Validates that the file exists before processing
- [ ] Parses lines using regex or string methods
- [ ] Filters for ERROR and WARNING entries
- [ ] Displays a summary count by severity
- [ ] Exports filtered results to CSV
- [ ] Includes proper error handling (Try/Catch)
- [ ] Comment-based help header included

### Phase 3 — System Audit Script
- [ ] Audits local user accounts (enabled/disabled, last logon)
- [ ] Checks for recently modified files in sensitive directories
- [ ] Reports on installed software or recently installed programs
- [ ] Checks running services against a known-good baseline
- [ ] Queries relevant event log entries (last 24 hours)
- [ ] Exports full audit to a timestamped CSV
- [ ] Comment-based help header included
- [ ] Proper error handling throughout

### Phase 4 — AD User Onboarding Tool
- [ ] Accepts parameters: FirstName, LastName, Department, Title, Manager
- [ ] Creates the AD user with proper attributes
- [ ] Sets a temporary password (SecureString)
- [ ] Adds user to appropriate department group
- [ ] Creates home directory if applicable
- [ ] Sends confirmation email (or logs to file if no mail server)
- [ ] Full error handling and logging
- [ ] Comment-based help header included

### Phase 5 — Threat Hunting Toolkit
- [ ] Detects suspicious processes (unsigned, unusual paths)
- [ ] Hunts for persistence mechanisms (scheduled tasks, registry run keys)
- [ ] Parses Security event log for failed logons (Event ID 4625)
- [ ] Checks for unusual network connections
- [ ] Queries Defender threat history
- [ ] Generates structured HTML or CSV report
- [ ] Supports `-ComputerName` parameter for remote execution
- [ ] Comment-based help header included

---

## Script Description

*In 2–4 sentences: what does your script do? What problem does it solve?*

> Write your answer here.

---

## Screenshot

*Paste a screenshot or link to an image showing your script running and producing output.*

> Paste image or link here.

---

## What I'd improve

*What would you add or change if you had more time? This is the most important section — it shows you're thinking critically about your own work.*

> Write your answer here.

---

## What surprised me

*What was harder than you expected? What clicked in a way you didn't anticipate?*

> Write your answer here.

---

## Want to be on the Showcase Wall?

If you want your submission listed on the [Showcase page](https://jfergitlife.github.io/100-days-of-powershell/showcase), submit a small PR adding an entry to `showcases.json` in the root of the repo.

Format:
```json
{
  "name": "Your Name",
  "github": "https://github.com/your-username",
  "fork": "https://github.com/your-username/100-days-of-powershell",
  "capstone": 1,
  "description": "One sentence about what you built.",
  "completed": "2024-03-01"
}
```
