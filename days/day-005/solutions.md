# Day 005 – Challenge Solutions

This document contains the answers and solutions for the **Day 005 PowerShell Script Challenge**.

---

# Answers to the Knowledge Questions

## Basic Understanding

1. A PowerShell script is a file containing a sequence of PowerShell commands that can be executed together. It uses the `.ps1` file extension.

2. Scripts make automation easier because they allow multiple commands to be saved and executed with a single command. This reduces repetitive manual work and helps automate tasks.

3. The command would be:

```powershell
C:\Scripts\backup.ps1
```

---

## Execution Policy

1. The Execution Policy is a security feature in PowerShell that determines which scripts are allowed to run on a system.

2. The default execution policy is:

```
Restricted
```

3. The policy that allows any script regardless of origin is:

```
Unrestricted
```

4. The policy that allows locally created scripts but requires downloaded scripts to be signed is:

```
RemoteSigned
```

---

## Commands

1. Check the current execution policy:

```powershell
Get-ExecutionPolicy
```

2. Change the execution policy to RemoteSigned:

```powershell
Set-ExecutionPolicy RemoteSigned
```

---

# Example Script Solution

```powershell
# system-info.ps1

Write-Host "System Information Script Running"

Write-Host "Current Date and Time:"
Get-Date

Write-Host "Computer Name:"
$env:COMPUTERNAME

Write-Host "Execution Policy:"
Get-ExecutionPolicy
```

---

# Bonus Challenge Solution

```powershell
# system-info.ps1

Write-Host "System Information Script Running"

Get-Date

$env:COMPUTERNAME

$policy = Get-ExecutionPolicy

Write-Host "Execution Policy: $policy"

if ($policy -eq "Restricted") {
    Write-Host "Scripts cannot run under the Restricted policy."
}
else {
    Write-Host "Scripts are allowed to run."
}
```
