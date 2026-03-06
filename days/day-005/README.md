# Day 005 – PowerShell Scripts

For Day 005 my focus was **PowerShell Scripts**.

Scripts allow you to store a sequence of PowerShell commands inside a file and run them together. Instead of typing several commands in the console every time, you can execute a single script.

This makes automation easier and allows you to write more complex logic.

---

# What is a PowerShell Script?

A **PowerShell script** is a text file containing PowerShell commands.

Scripts use the file extension:

```
.ps1
```

Example of running a script:

```powershell
PS> C:\ThisisTheScriptPath\script.ps1
```

Instead of manually entering multiple commands, you can simply run the script.

---

# Why Scripts Are Useful

Scripts allow you to:

* Automate repetitive tasks
* Save complex command sequences
* Reduce manual work
* Run many commands with one command

As tasks grow more complicated, scripts become essential for automation.

---

# Execution Policy

PowerShell does **not allow scripts to run by default**.

This is controlled by a security feature called the **Execution Policy**.

The execution policy determines which scripts PowerShell is allowed to run.

### Common Execution Policies

**Restricted**

* Default configuration
* Does not allow any scripts to run

**AllSigned**

* Only scripts signed by a trusted publisher can run

**RemoteSigned**

* Scripts created locally can run
* Downloaded scripts must be signed

**Unrestricted**

* Allows any script to run

---

# Checking Execution Policy

To check the current execution policy:

```powershell
Get-ExecutionPolicy
```

---

# Changing Execution Policy

To allow locally created scripts to run:

```powershell
Set-ExecutionPolicy RemoteSigned
```

This is commonly used by developers and administrators.

---

# PowerShell Script Example

Here is a simple example script.

```powershell
# system-info.ps1

Write-Host "System Information Script Running"

Get-Date

$env:COMPUTERNAME

Get-ExecutionPolicy
```

This script:

* Displays a message
* Shows the current date and time
* Shows the computer name
* Displays the current execution policy

---

## Knowledge Challenge
Due to request, I have decided to add a few questions at the end of each day to practice and retain what we learned. 

Answer the following questions.

### Basic Understanding

1. What is a **PowerShell script**, and what file extension does it use?
2. Why might using a script be easier than running multiple commands manually in the console?
3. What command would you use to run a script located at:

```
C:\Scripts\backup.ps1
```

---

### Execution Policy

1. What is the purpose of the **Execution Policy** in PowerShell?
2. Which execution policy is the **default configuration**?
3. Which execution policy allows you to run **any script regardless of origin**?
4. Which execution policy allows you to run scripts **you create locally but requires downloaded scripts to be signed**?

---

### Commands

1. What command checks the current execution policy?
2. What command changes the execution policy to **RemoteSigned**?

---

# 2️⃣ PowerShell Scripting Challenge
I also want to start adding small challenges at the end of each day. This way we are all getting the theory as well as the hands-on practice in. The best way to learn PowerShell is through repitition. 

## Scenario

You want to automate a few basic tasks using a PowerShell script.

### Step 1

Create a PowerShell script named:

```
system-info.ps1
```

---

### Step 2

The script should:

1. Display the message:

```
System Information Script Running
```

2. Display the current date and time.
3. Display the computer name.
4. Display the current execution policy.

---

### Step 3

Run the script from PowerShell using the full file path.

Example:

```powershell
PS> C:\Scripts\system-info.ps1
```

---

# Bonus Challenge 

Modify your script so it also:

1. Checks the execution policy.
2. If it is **Restricted**, display this warning:

```
Scripts cannot run under the Restricted policy.
```

3. Otherwise display:

```
Scripts are allowed to run.
```

---

---

## Connect With Me

💼 **LinkedIn**
[Connect with me on LinkedIn](https://www.linkedin.com/in/itlife)

Follow my **100 Days of PowerShell** journey as I continue learn. 
