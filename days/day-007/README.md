# Day 007 – PowerShell Conditional Logic (if / else / elseif)

Conditional statements allow your script to **make decisions**.  
PowerShell evaluates a condition and **executes code only when that condition is true**.

---

# The `if` Statement

The `if` statement tells PowerShell:

> If a condition is true → run some code.

If the condition is **false**, PowerShell **skips the code block**.

## Syntax

```powershell
if (condition) {
    # code to run if the condition evaluates to True
}
```

## Example

```powershell
$number = 10

if ($number -gt 5) {
    Write-Output "The number is greater than 5"
}
```

### What Happens

1. PowerShell checks if `$number` is **greater than 5**
2. `$number` is **10**
3. The condition is **true**
4. The code block runs

Output:

```
The number is greater than 5
```

---

# The `else` Statement

The `else` statement runs **when the `if` condition is false**.

Think of it like:

- **if** → Do something **when true**
- **else** → Do something **when false**

## Syntax

```powershell
if (condition) {
    # code if condition is true
}
else {
    # code if condition is false
}
```

## Example

```powershell
$number = 10

if ($number -gt 5) {
    Write-Output "The number is greater than 5"
}
else {
    Write-Output "The number is 5 or less"
}
```

### What Happens

1. PowerShell checks: **Is `$number` greater than 5?**
2. `$number` is **10**
3. The condition is **true**
4. PowerShell runs the **if block**
5. The **else block is skipped**

Output:

```
The number is greater than 5
```

---

# When `else` Runs

If the condition evaluates to **false**, PowerShell executes the `else` block.

```powershell
$number = 3

if ($number -gt 5) {
    Write-Output "The number is greater than 5"
}
else {
    Write-Output "The number is 5 or less"
}
```

### What Happens

1. PowerShell checks if `$number` is greater than 5
2. `$number` is **3**
3. The condition is **false**
4. The **else block runs**

Output:

```
The number is 5 or less
```

---

# The `elseif` Statement

Sometimes you need to check **multiple conditions**.

That is where `elseif` is used.

## Simple Idea

- **if** → check the first condition  
- **elseif** → check another condition if the first was false  
- **else** → run this if none were true  

## Syntax

```powershell
if (condition1) {
    # runs if condition1 is true
}
elseif (condition2) {
    # runs if condition1 was false AND condition2 is true
}
else {
    # runs if none of the conditions were true
}
```

---

# Example

```powershell
$number = 10

if ($number -lt 5) {
    Write-Output "The number is less than 5"
}
elseif ($number -lt 15) {
    Write-Output "The number is between 5 and 14"
}
else {
    Write-Output "The number is 15 or greater"
}
```

### What Happens

1. PowerShell checks: **Is `$number` less than 5?**

❌ No

2. Then it checks the `elseif` condition:

**Is `$number` less than 15?**

✅ Yes

3. PowerShell runs:

```
The number is between 5 and 14
```

PowerShell **stops checking conditions after the first true result**.

---

# Practical Example (Service Status Check)

This example checks the **status of a Windows service**.

```powershell
$service = Get-Service Spooler

if ($service.Status -eq "Running") {
    Write-Output "The service is running"
}
elseif ($service.Status -eq "Stopped") {
    Write-Output "The service is stopped"
}
else {
    Write-Output "Service status is something else"
}
```

### What This Script Does

1. Retrieves the **Print Spooler service**
2. Checks the **status property**
3. Displays a message depending on the result

Possible outputs:

```
The service is running
```

or

```
The service is stopped
```

---

# Important Rules

PowerShell evaluates conditional logic in a **specific order**:

- Conditions are checked **from top to bottom**
- PowerShell **stops at the first true condition**
- You can have **multiple `elseif` statements**
- The **`else` block is optional**

---

# Example Script (Practical Use)

This script checks whether a service exists and reports its status.

```powershell
# Day 007 Script - Service Status Check

$serviceName = "Spooler"
$service = Get-Service $serviceName -ErrorAction SilentlyContinue

if ($null -eq $service) {
    Write-Output "Service $serviceName was not found."
}
elseif ($service.Status -eq "Running") {
    Write-Output "Service $serviceName is running."
}
else {
    Write-Output "Service $serviceName exists but is not running."
}
```

This demonstrates:

- conditional logic
- `$null` checking
- service inspection

---

# Review Questions

1. What does the `if` statement do in PowerShell?
2. When does the `else` block run?
3. What is the purpose of the `elseif` statement?
4. In what order does PowerShell evaluate conditional statements?
5. Does PowerShell continue checking conditions after one evaluates to true?

---

# Scripting Challenge

Write a PowerShell script that:

1. Stores a **CPU usage percentage** in a variable
2. Uses `if`, `elseif`, and `else` to print:

- **"CPU usage is normal"** if below 50
- **"CPU usage is moderate"** if between 50 and 80
- **"CPU usage is high"** if above 80

Example variable:

```powershell
$cpu = 65
```

---

# Contact Me

If you're also learning PowerShell or working in cybersecurity/IT, feel free to connect.

LinkedIn:  
https://www.linkedin.com/in/itlife
