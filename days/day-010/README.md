# 📋 PowerShell Log File Parser
### Day-010 of 100 Days of PowerShell

---

## 📖 Overview

This PowerShell script automates the process of searching through multiple log files in a directory to find specific keywords or patterns. Instead of manually opening each log file one by one, this script loops through an entire folder and returns every matching line, including the file name and line number in seconds.

---

## 📄 The Script

```powershell
$logFolderPath = "C:\PSLessons\Logs\LogFiles"

$logs = Get-ChildItem -Path $logFolderPath

foreach ($log in $logs) {
    Select-String -Pattern "Uptime" -Path $log.FullName
}
```

---

##  How It Works

| Line | Command | What It Does |
|------|---------|--------------|
| 1 | `$logFolderPath` | Stores the path to the folder containing your log files |
| 2 | `Get-ChildItem` | Retrieves all files inside the specified folder |
| 3 | `foreach` loop | Iterates through each log file one by one |
| 4 | `Select-String` | Searches each file for the specified keyword pattern and returns any matching lines |

---

##  Example Output

```
Logs\LogFiles\network_2024-01-16.txt:17:2024-01-16 23:55:00 [INFO] Daily network summary: 99.97% uptime
```

The output tells you:
- **File name** — which log file contained the match
- **Line number** — exactly where in the file it was found
- **Full line content** — the complete log entry

---

##  Customization

You can change the `-Pattern` value to search for anything:

```powershell
# Search for errors
Select-String -Pattern "ERROR" -Path $log.FullName

# Search for critical events
Select-String -Pattern "CRITICAL" -Path $log.FullName

# Search for a specific IP address
Select-String -Pattern "192.168.1.1" -Path $log.FullName

# Search for failed logins
Select-String -Pattern "Failed login" -Path $log.FullName

# Search for a specific username
Select-String -Pattern "john.doe" -Path $log.FullName
```

---

##  Real-World Use Cases

- **IT Administrators** — Scan hundreds of server logs for errors or warnings without opening each file manually
- **Security Analysts** — Hunt for suspicious events like failed logins, account lockouts, or unknown IPs across multiple log files
- **Help Desk Teams** — Quickly identify recurring patterns in system logs to speed up troubleshooting
- **Audit & Compliance** — Automate log reviews that would otherwise take hours of manual work

---

## 📁 Folder Structure

```
C:\PSLessons\
│
├── script.ps1
│
└── Logs\
    └── LogFiles\
        ├── system_2024-01-15.txt
        ├── app_webserver_2024-01-15.txt
        ├── security_auth_2024-01-16.txt
        ├── network_2024-01-16.txt
        ├── backup_2024-01-17.txt
        ├── windows_events_2024-01-17.txt
        ├── database_2024-01-18.txt
        ├── app_errors_2024-01-18.txt
        ├── services_2024-01-19.txt
        └── patching_2024-01-20.txt
```

---

## Part of the #100DaysOfPowerShell Challenge

This script is part of my journey through the **#100DaysOfPowerShell** challenge — building practical, real-world automation skills one day at a time.

Follow along on LinkedIn for daily updates!

---
🤝 
If you're on a similar journey or just love talking tech, let's connect!
---
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/itlife)
