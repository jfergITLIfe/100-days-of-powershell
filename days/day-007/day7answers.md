# Answers

## Review Question Answers

**1. What does the `if` statement do in PowerShell?**  
The `if` statement checks whether a condition is true. If it is true, PowerShell runs the code inside the `if` block.

**2. When does the `else` block run?**  
The `else` block runs when the `if` condition is false.

**3. What is the purpose of the `elseif` statement?**  
The `elseif` statement lets you check additional conditions if the first `if` condition is false.

**4. In what order does PowerShell evaluate conditional statements?**  
PowerShell evaluates conditions from top to bottom.

**5. Does PowerShell continue checking conditions after one evaluates to true?**  
No. PowerShell stops checking as soon as it finds the first true condition.

---

# Script Answer

```powershell
$cpu = 65

if ($cpu -lt 50) {
    Write-Output "CPU usage is normal"
}
elseif ($cpu -le 80) {
    Write-Output "CPU usage is moderate"
}
else {
    Write-Output "CPU usage is high"
}
```

### How it works

- If `$cpu` is less than 50, it prints: `CPU usage is normal`
- If `$cpu` is 50 through 80, it prints: `CPU usage is moderate`
- If `$cpu` is above 80, it prints: `CPU usage is high`

---

