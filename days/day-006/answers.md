# Review Question Answers

### 1. What operator would you use to check if two values are equal in PowerShell?

`-eq`

Example:

```powershell
5 -eq 5
```

---

### 2. What is the difference between `-eq` and `-ne`?

- `-eq` checks if values **are equal**
- `-ne` checks if values **are NOT equal**

Example:

```powershell
5 -eq 5   # True
5 -ne 3   # True
```

---

### 3. Which operator would you use to see if a string matches a wildcard pattern?

`-like`

Example:

```powershell
"server01" -like "server*"
```

---

### 4. What is the difference between `-like` and `-match`?

`-like`
- Uses **wildcards**
- Example: `*` and `?`

`-match`
- Uses **regular expressions (regex)**

Examples:

```powershell
"server01" -like "server*"

"admin123" -match "\d+"
```

---

### 5. How do `-contains` and `-in` relate to each other?

They perform **membership checks but from opposite directions**.

`-contains`

```powershell
1,2,3 -contains 2
```

`-in`

```powershell
2 -in 1,2,3
```

---

### 6. Are PowerShell comparison operators case-sensitive by default?

No.

PowerShell comparisons are **case-insensitive by default**.

Example:

```powershell
"Admin" -eq "admin"
```

Result:

```
True
```

---

### 7. What operator would you use for a case-sensitive equality check?

`-ceq`

Example:

```powershell
"Admin" -ceq "admin"
```

Result:

```
False
```

---

### 8. In this command, what does `$_` represent?

```powershell
Get-Service | Where-Object {$_.Status -eq "Running"}
```

`$_` represents **the current object in the pipeline**.

In this example, each **service object** being processed by `Where-Object`.

---
