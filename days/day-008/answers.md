# Day 008 – Answers & Script Solution

This file contains the **answers to the knowledge check** and the **script challenge solution** for Day 008.

If you're following along with the **100 Days of PowerShell**, try answering the questions and writing the script **before looking at the solutions**.

---

# Knowledge Check Answers

### 1. What does it mean to iterate over a collection?

Iterating means going through each object in a collection **one at a time** and performing an action on each item.

Example: looping through a list of services.

---

### 2. What is the difference between `foreach` and `ForEach-Object`?

`foreach`  
- Works with **collections stored in memory** (like arrays or variables).

`ForEach-Object`  
- Works with **objects passed through the PowerShell pipeline**.

Example:

```powershell
$services = Get-Service

foreach ($service in $services) {
    $service.Name
}
```

Pipeline version:

```powershell
Get-Service | ForEach-Object {
    $_.Name
}
```

---

### 3. Which loops guarantee the code runs at least once?

- `do/while`
- `do/until`

These loops execute the code block **before checking the condition**.

---

### 4. When would you use a `for` loop instead of a `foreach` loop?

A `for` loop is useful when you want something to run **a specific number of times** or when you need a **counter variable**.

Example:

```powershell
for ($i = 0; $i -lt 5; $i++) {
    Write-Host $i
}
```

---

### 5. In a pipeline loop, what does `$_` represent?

`$_` represents the **current object being processed in the pipeline**.

Example:

```powershell
Get-Service | ForEach-Object {
    $_.Name
}
```

Here, `$_` represents each service object as it moves through the pipeline.

---

# Script Challenge Solution

### Challenge Recap

Create a script that:

1. Retrieves all services on the system  
2. Loops through them  
3. Displays only the services that are **running**

---

# Example Script

```powershell
# Day 008 Script Solution
# Display all running services

$services = Get-Service

foreach ($service in $services) {

    if ($service.Status -eq "Running") {

        Write-Host "$($service.Name) is running"

    }

}
```

---

# Alternative (Pipeline Version)

The same task can also be done using the pipeline.

```powershell
Get-Service | Where-Object {$_.Status -eq "Running"} | ForEach-Object {
    Write-Host "$($_.Name) is running"
}
```

---

# What This Script Teaches

This script combines several important PowerShell concepts:

- retrieving objects with `Get-Service`
- looping with `foreach`
- conditional logic with `if`
- working with object properties
- pipeline processing
