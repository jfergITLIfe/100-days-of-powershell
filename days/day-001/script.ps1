

# Display PowerShell version information
$versionInfo = $PSVersionTable

Write-Host "PowerShell Version Information:" -ForegroundColor Cyan
$versionInfo
Write-Host ""

#  Discover commands related to processes
Write-Host "Commands related to 'Process':" -ForegroundColor Cyan
$processCommands = Get-Command -Noun Process
$processCommands | Select-Object Name, CommandType, ModuleName | Format-Table -AutoSize
Write-Host ""

# Retrieve help synopsis for Get-Process
Write-Host "Help Synopsis for Get-Process:" -ForegroundColor Cyan
$helpSynopsis = (Get-Help Get-Process).Synopsis
Write-Host $helpSynopsis
Write-Host ""

# Count how many process-related cmdlets exist
$cmdletCount = $processCommands.Count
Write-Host "Total Process-related Commands Found: $cmdletCount" -ForegroundColor Green
