# Day 003 - Variables, Objects, Arrays

$service = "Spooler"
$svc = Get-Service $service -ErrorAction SilentlyContinue

if ($null -eq $svc) {
    Write-Host "Service not found"
}
else {
    $svc | Select-Object Name, Status
}

$servers = @("DC01","WEB01","SQL01")
Write-Host "First server: $($servers[0])"

Write-Host "Uppercase service name: $($service.ToUpper())"
