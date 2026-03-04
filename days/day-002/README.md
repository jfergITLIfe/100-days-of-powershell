
# 100 Days of PowerShell — Day 2

## Overview
Day 2 focused on understanding **PowerShell fundamentals**, including command discovery, aliases, cmdlet structure, parameters, and variables. PowerShell is designed to be discoverable and predictable, which makes learning commands easier once you understand its structure.

---

# Basic Navigation Commands

### `dir`
Lists the contents of the current working directory.

Equivalent to `ls` in Linux or `dir` in Command Prompt.

Example:

```powershell
dir
```

---

### `cls`
Clears the PowerShell console screen.

Example:

```powershell
cls
```

---

# Command Discovery

One of PowerShell’s biggest strengths is that it allows you to **discover commands directly from the terminal**.

### `Get-Alias`
Displays built-in aliases and the commands they map to.

Example:

```powershell
Get-Alias
```

Aliases are shortcuts for longer commands.

Example:

```
dir -> Get-ChildItem
```

While aliases are convenient, it is best practice to learn the **full cmdlet names** for scripting.

---

### `Get-Command`
Lists every command PowerShell currently knows about.

Example:

```powershell
Get-Command
```

This includes:

- Cmdlets  
- Functions  
- Aliases  
- Scripts  
- Applications  

---

# PowerShell Command Structure

PowerShell commands follow a **Verb-Noun naming convention**.

Example cmdlets:

| Cmdlet | Description |
|------|------|
| `Write-Host` | Writes output directly to the console |
| `Get-Content` | Reads the contents of a file |
| `Get-Process` | Displays running processes |
| `Connect-ExchangeOnline` | Connects to Exchange Online |

This naming convention makes commands easier to predict.

Common verbs include:

- Get  
- Set  
- New  
- Remove  
- Start  
- Stop  

---

# Types of PowerShell Commands

PowerShell commands fall into three main categories.

### Cmdlets
- Built-in PowerShell commands  
- Usually written in **C#**  
- Designed for performance and consistency  

Example:

```powershell
Get-Process
```

---

### Functions
- Commands written in **PowerShell itself**
- Can be created by users to automate tasks

Example concept:

```powershell
function Get-SystemInfo {
    Get-ComputerInfo
}
```

---

### Aliases
- Shortcuts for commands
- Often used for convenience

Example:

```
ls -> Get-ChildItem
```

---

# Parameters

Parameters allow you to **customize how a command behaves**.

### Named Parameters
Start with a dash (`-`).

Example:

```powershell
Get-Process -Name chrome
```

---

### Positional Parameters
These rely on the position of the argument rather than the parameter name.

Example:

```powershell
Get-Process chrome
```

Both commands above produce the same result.

---

# What You See Is What You Get

PowerShell outputs **objects**, not just plain text.

This allows commands to be easily piped, filtered, and manipulated in powerful ways.

Example:

```powershell
Get-Process
```

Returns structured objects representing running processes.

---

# Using the Help System

PowerShell has a built-in documentation system.

### `Get-Help`

Example:

```powershell
Get-Help Get-Process
```

Help output typically includes:

- **Synopsis** — brief description  
- **Syntax** — how the command should be written  
- **Description** — detailed explanation  
- **Related Links**  
- **Remarks**  

Shortcut:

```powershell
help Get-Process
```

---

# Variables

Variables store values that can be reused later in a script.

### Variable Rules

- Begin with `$`
- Typically written in **camelCase**
- Assigned using `=`

Example:

```powershell
$firstName = "Jacob"
$lastName = "Smith"
```

Variables can store:

- Text  
- Numbers  
- Command output  
- Objects  

Example storing command output:

```powershell
$processList = Get-Process
```

---

# Key Takeaways

- PowerShell commands follow a **Verb-Noun structure**
- `Get-Command` helps discover available commands
- `Get-Alias` shows shortcuts for commands
- Parameters customize command behavior
- `Get-Help` provides built-in documentation
- Variables allow values and data to be stored and reused
- PowerShell works with **objects rather than plain text**

---

# Progress Log

I hope that you are able to take away some value from this. Check out todays script and write it yourself for practice. Repition is key. 

# Practice Script 
The commands practices for day 2 are included here. 
[View the PowerShell Script](./commands.ps1)

