# Check if a service exists and report its status

$serviceName = "Spooler"

$service = Get-Service -Name $serviceName -ErrorAction SilentlyContinue

if ($null -eq $service) {

    Write-Host "Service '$serviceName' was not found."

}
else {

    Write-Host "Service Name: $($service.Name)"
    Write-Host "Status: $($service.Status)"

    if ($service.Status -eq "Running") {

        Write-Host "Service is running normally."

    }
    else {

        Write-Host "Service exists but is not running."

    }

}
