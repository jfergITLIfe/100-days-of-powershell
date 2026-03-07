# Day 006 – PowerShell Comparison Operators

PowerShell uses **comparison operators** to evaluate values and determine whether conditions are true or false. These operators are commonly used in:

- `if` statements  
- `Where-Object` filtering  
- loops  
- validation logic  

Understanding these makes it much easier to write useful automation scripts.

---

# Equality Operators

These operators compare values and return **True or False**.

| Operator | Meaning | Example |
|--------|--------|--------|
| `-eq` | Equal to | `5 -eq 5` |
| `-ne` | Not equal to | `5 -ne 3` |
| `-gt` | Greater than | `10 -gt 5` |
| `-lt` | Less than | `3 -lt 8` |
| `-ge` | Greater than or equal to | `5 -ge 5` |
| `-le` | Less than or equal to | `4 -le 6` |

### Example

```powershell
$number = 10

if ($number -gt 5) {
    Write-Host "Number is greater than 5"
}
```

---

# String Comparison Operators

These are used when working with **text values**.

| Operator | Meaning | Example |
|--------|--------|--------|
| `-like` | Matches wildcard pattern | `"server01" -like "server*"` |
| `-notlike` | Does not match wildcard pattern | `"file.txt" -notlike "*.log"` |
| `-match` | Regex match | `"admin123" -match "\d+"` |
| `-notmatch` | Regex does not match | `"user" -notmatch "\d+"` |

### Example

```powershell
$name = "server01"

if ($name -like "server*") {
    Write-Host "This is a server"
}
```

---

# Collection / Membership Operators

These operators help determine whether a value exists inside a collection or array.

| Operator | Meaning | Example |
|--------|--------|--------|
| `-contains` | Collection contains value | `1,2,3 -contains 2` |
| `-notcontains` | Collection does not contain value | `1,2,3 -notcontains 5` |
| `-in` | Value exists in collection | `2 -in 1,2,3` |
| `-notin` | Value not in collection | `4 -notin 1,2,3` |

### Example

```powershell
$servers = "DC01","WEB01","SQL01"

if ("DC01" -in $servers) {
    Write-Host "Server exists in list"
}
```

---

# Case Sensitivity

By default, PowerShell comparisons are **case-insensitive**.

Example:

```powershell
"Admin" -eq "admin"
```

Result:

```
True
```

If you want **case-sensitive comparisons**, use the `c` variants.

| Operator | Meaning |
|--------|--------|
| `-ceq` | Case-sensitive equal |
| `-cne` | Case-sensitive not equal |
| `-clike` | Case-sensitive wildcard |
| `-cmatch` | Case-sensitive regex |

Example:

```powershell
"Admin" -ceq "admin"
```

Result:

```
False
```

---

# Real World Example

A very common pattern in PowerShell is checking **object properties**.

```powershell
$service = Get-Service Spooler

if ($service.Status -eq "Running") {
    Write-Host "Spooler service is running"
}
else {
    Write-Host "Spooler service is not running"
}
```

This checks the **status property of the service object** and executes code based on the result.

---

# Example Filtering with Comparison Operators

These operators are frequently used with pipelines.

```powershell
Get-Service | Where-Object {$_.Status -eq "Running"}
```

This command:

1. Gets all services  
2. Sends them through the pipeline  
3. Filters only the ones where **Status equals Running**

---

# Key Takeaways

- PowerShell comparison operators return **True or False**
- They are essential for **automation logic**
- Used heavily in **if statements and filtering**
- PowerShell comparisons are **case-insensitive by default**

---

# Review Questions

1. What operator would you use to check if two values are equal in PowerShell?
2. What is the difference between `-eq` and `-ne`?
3. Which operator would you use to see if a string matches a wildcard pattern?
4. What is the difference between `-like` and `-match`?
5. How do `-contains` and `-in` relate to each other?
6. Are PowerShell comparison operators case-sensitive by default?
7. What operator would you use for a case-sensitive equality check?
8. In this command, what does `$_` represent?

```powershell
Get-Service | Where-Object {$_.Status -eq "Running"}
```

---

# Scripting Challenge

Write a small PowerShell script that does the following:

- Creates a variable called `$serviceName`
- Stores the name of a service in that variable
- Uses `Get-Service` to try to retrieve that service
- Checks whether the service exists
- If it exists, display the service name and status
- If it does not exist, display a message saying the service was not found

### Bonus Challenge

Add another condition so that if the service exists and its status is `"Running"`, the script prints:

```powershell
Service is running normally
```

If the service exists but is not running, print:

```powershell
Service exists but is not running
```

---
---

# Contact Me

If you're also learning PowerShell, working in IT, or exploring cybersecurity, feel free to connect with me.

🔗 **LinkedIn:**  
https://www.linkedin.com/in/YOUR-LINKEDIN-URL
