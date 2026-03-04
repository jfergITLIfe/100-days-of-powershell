# 100 Days of PowerShell
# Day 2 Practice Script
# Focus: Command discovery, aliases, help system, variables

Write-Host "===== Day 2 PowerShell Practice =====" -ForegroundColor Cyan
Write-Host ""

# Show PowerShell version information
Write-Host "PowerShell Version Information:" -ForegroundColor Yellow
$versionInfo = $PSVersionTable
$versionInfo
Write-Host ""

# List contents of the current directory
Write-Host "Listing contents of the current directory:" -ForegroundColor Yellow
dir
Write-Host ""

# Display some aliases
Write-Host "Displaying some PowerShell aliases:" -ForegroundColor Yellow
Get-Alias | Select-Object -First 10
Write-Host ""

# Discover commands related to processes
Write-Host "Commands related to 'Process':" -ForegroundColor Yellow
Get-Command -Noun Process
Write-Host ""

# Example of using Get-Help
Write-Host "Help synopsis for Get-Process:" -ForegroundColor Yellow
$helpInfo = Get-Help Get-Process
$helpInfo.Synopsis
Write-Host ""

# Example of variables
Write-Host "Working with variables:" -ForegroundColor Yellow
$firstName = "Jacob"
$lastName = "Ferguson"

Write-Host "User First Name: $firstName"
Write-Host "User Last Name: $lastName"
Write-Host ""

# Example parameter usage
Write-Host "Example of using parameters:" -ForegroundColor Yellow
Get-Process -Name powershell
Write-Host ""

Write-Host "===== End of Day 2 Script =====" -ForegroundColor Cyan
