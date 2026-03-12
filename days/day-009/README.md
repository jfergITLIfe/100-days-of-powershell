# Day 009 – Review Day (Revisiting Day 003)

Today was a review day.

Instead of learning new commands, I went back and reinforced some core PowerShell concepts from Day 003:

- Variables
- $null
- Objects
- Arrays
- Methods

These fundamentals show up in almost every PowerShell script. Taking time to review them helps build stronger scripting habits before moving on to more advanced topics.

To reinforce these ideas, I worked through review questions, flashcards, and micro scripting labs.

---

# Review Questions

1. What is the purpose of a variable in PowerShell?

2. What does $null represent?

3. Why is it important to check for $null in scripts?

4. What type of data does PowerShell pass through the pipeline?

5. What is the difference between text output and objects in PowerShell?

6. What command would you run to see the properties and methods of an object?

7. How do you store multiple values inside a single variable?

8. What index number represents the first item in an array?

9. What is a method in PowerShell?

10. What does the .ToUpper() method do?

---

# Flashcards

### Flashcard 1

Front  
What does $null mean in PowerShell?

Back  
$null represents no value or an empty variable. It is commonly used to check whether a command returned anything.

---

### Flashcard 2

Front  
What is an object in PowerShell?

Back  
An object is structured data that contains properties and methods.

Example properties from Get-Service include:

- Name  
- Status  
- DisplayName

---

### Flashcard 3

Front  
What is an array?

Back  
An array is a variable that stores multiple values.

Example:

```powershell
$servers = @("DC01","WEB01","SQL01")
```

---

### Flashcard 4

Front  
How do you access an item in an array?

Back  
Arrays start counting at index 0.

Example:

```powershell
$servers[0]
```

---

### Flashcard 5

Front  
What is a method?

Back  
A method performs an action on an object or value.

Example:

```powershell
$string = "powershell"
$string.ToUpper()
```

Output

```
POWERSHELL
```

---

# Micro Labs

These small labs reinforce the concepts from Day 003.

---

# Micro Lab 1 – Service Checker

Goal

Practice using:

- variables
- $null
- objects
- Select-Object

Instructions

1. Create a variable that stores a service name  
2. Use Get-Service to look for that service  
3. If the service exists, display its Name and Status  
4. If it does not exist, display "Service not found"

Example Script

```powershell
$service = "Spooler"

$svc = Get-Service -Name $service -ErrorAction SilentlyContinue

if ($null -eq $svc) {
    Write-Host "Service not found"
}
else {
    $svc | Select-Object Name, Status
}
```

Practice Ideas

- Change "Spooler" to "W32Time"
- Try a fake service name
- Display DisplayName as well

---

# Micro Lab 2 – Server List Parser

Goal

Practice using:

- arrays
- indexing
- loops

Instructions

1. Create an array of server names  
2. Display the first server  
3. Loop through the array and print each server name  

Example Script

```powershell
$servers = @("DC01", "WEB01", "SQL01")

Write-Host "First server: $($servers[0])"
Write-Host ""

foreach ($server in $servers) {
    Write-Host "Server: $server"
}
```

Practice Ideas

- Add two more server names
- Display the last server in the array
- Count the number of servers using .Count

Example:

```powershell
$servers.Count
```

---

# Micro Lab 3 – Object and Method Explorer

Goal

Practice using:

- objects
- properties
- methods

Instructions

1. Create a string variable  
2. Use methods to modify the text  
3. Run Get-Service on one service  
4. Display selected properties  

Example Script

```powershell
$text = "powershell review day"

Write-Host "Original: $text"
Write-Host "Uppercase: $($text.ToUpper())"
Write-Host "Lowercase: $($text.ToLower())"
Write-Host ""

Get-Service -Name Spooler | Select-Object Name, Status, DisplayName
```

Practice Idea

Explore the object structure using:

```powershell
Get-Service -Name Spooler | Get-Member
```

This shows the properties and methods available on the object.

---

# Extra Challenge

Combine what you practiced into one script.

Challenge

1. Store multiple service names in an array  
2. Loop through the array  
3. Check whether each service exists  
4. Display service information if found  
5. Display a message if it does not exist  
6. Convert the service name to uppercase before printing it  

Example Script

```powershell
$services = @("Spooler", "W32Time", "FakeService")

foreach ($service in $services) {

    $svc = Get-Service -Name $service -ErrorAction SilentlyContinue

    if ($null -eq $svc) {
        Write-Host "$($service.ToUpper()) - Service not found"
    }
    else {
        $svc | Select-Object Name, Status, DisplayName
        Write-Host ""
    }

}
```

---

# Why Review Days Matter

Learning PowerShell is not just about adding new commands every day.

Reviewing core concepts like variables, arrays, objects, and methods helps build a stronger foundation for scripting and automation.

Sometimes slowing down to reinforce the basics makes future learning much easier.

---

# Contact

If you're also learning PowerShell or cybersecurity, feel free to connect.

LinkedIn  
https://www.linkedin.com/
