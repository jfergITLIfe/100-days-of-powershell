# Day 008 – Control Flow and Loops

Today I focused on **control flow**, specifically how PowerShell can repeat actions using loops.

Loops are important because in real environments you rarely run commands on just one object. Most of the time you're working with **lists of users, servers, files, or services**.

Instead of running the same command over and over manually, PowerShell lets you automate the process.

Common looping tools include:

- `foreach`
- `for`
- `while`
- `do/while`
- `do/until`

---

# The `foreach` Loop

A `foreach` loop runs a command against **each item in a collection**.

A collection is usually stored in an **array**.

When a loop goes through each item in a a list, it's called **iterating**.

This is extremely useful when you need to run the same command on many things like:

- multiple servers
- many files
- several services
- a list of usernames

PowerShell allows three ways to do this:

- `foreach` statement  
- `ForEach-Object` cmdlet  
- `.foreach()` method  

---

# `foreach` Statement

This is the most common and easiest loop to read.

Inside the parentheses you define:

1. A variable to represent each object
2. The keyword `in`
3. The collection you want to loop through

Example:

```powershell
$services = Get-Service

foreach ($service in $services) {
    $service.Name
}
```

PowerShell will take **one service at a time** from `$services` and temporarily store it in `$service` while the loop runs.

---

# `ForEach-Object` Cmdlet

This version is used **in the PowerShell pipeline**.

Instead of looping through a saved array, it processes objects **as they flow through the pipeline**.

Example:

```powershell
Get-Service | ForEach-Object {
    $_.Name
}
```

The `$_` represents the **current object** coming through the pipeline.

---

# `.foreach()` Method

Some collections support a `.foreach()` method directly.

It behaves similarly to the other loops but is attached directly to the collection.

Example:

```powershell
$services.foreach({
    $_.Name
})
```

You will see this less often than the standard `foreach` statement.

---

# `for` Loop

A `for` loop runs a specific number of times.

It’s useful when you want **precise control over how many times something runs**.

Example:

```powershell
for ($i = 0; $i -lt 5; $i++) {
    Write-Host "Iteration number: $i"
}
```

Breakdown:

`$i = 0` → starting point  
`$i -lt 5` → condition  
`$i++` → increase the counter each time  

---

# `while` Loop

A `while` loop runs **as long as a condition remains true**.

Once the condition becomes false, the loop stops.

Example:

```powershell
$i = 0

while ($i -lt 5) {
    Write-Host $i
    $i++
}
```

---

# `do/while` Loop

A `do/while` loop runs the code **at least once** before checking the condition.

Example:

```powershell
$i = 0

do {
    Write-Host $i
    $i++
} while ($i -lt 5)
```

---

# `do/until` Loop

This loop continues running **until a condition becomes true**.

Example:

```powershell
$i = 0

do {
    Write-Host $i
    $i++
} until ($i -eq 5)
```

---

# Quick Comparison

| Loop | When to Use |
|-----|-----|
| `foreach` | Best for iterating through arrays or collections |
| `ForEach-Object` | Best for working with pipeline output |
| `for` | When you need a loop to run a specific number of times |
| `while` | Run while a condition remains true |
| `do/while` | Run once, then repeat while condition is true |
| `do/until` | Run once, then repeat until condition becomes true |

---

# Knowledge Check

1. What does it mean to **iterate** over a collection?

2. What is the difference between `foreach` and `ForEach-Object`?

3. Which loop guarantees the code runs **at least once**?

4. When would you use a `for` loop instead of a `foreach` loop?

5. In a pipeline loop, what does `$_` represent?

---

# Answers

1. Iterating means going through each object in a collection one at a time.

2. `foreach` loops through stored collections like arrays, while `ForEach-Object` processes objects that come through the pipeline.

3. `do/while` and `do/until` both guarantee the code runs at least once.

4. A `for` loop is useful when you want something to run a specific number of times.

5. `$_` represents the **current object** being processed in the pipeline.

---

# Script Challenge

Create a script that:

1. Retrieves all services on the system
2. Loops through them
3. Displays only the services that are **running**





---

# Contact Me

If you're also learning PowerShell or working in cybersecurity / IT, feel free to connect.

LinkedIn:  
https://www.linkedin.com/in/itlife
