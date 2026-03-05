# Day 003 - Variables, Data Types, Objects, and Arrays

Today was about: variables, Data types, objects, and simple data structures.



## Variables (the basics)
A variable is just a place to store a value so you can reuse it later.

- Variables start with `$`
- PowerShell knows you mean “variable” when it sees `$something`

### User-defined variables
You create these.

- A variable needs to exist before you can use it
- You create it by assigning it a value:
  - declare it (it exists)
  - initialize it (give it something)

### Automatic variables
PowerShell creates these for you.  
Best practice: treat them like **read-only** unless you *really* know what you’re doing.

A few you’ll run into a lot:
- `$null` - represents “nothing”
- `$LASTEXITCODE` - the exit code from the last native app that ran
- Preference variables - control default behavior for streams like:
  - Error, Warning, Verbose, Debug, Information

---

## Data types 
PowerShell has a bunch of types (strings, integers, booleans, etc.).  
One thing that’s different from some languages: you can often **change a variable’s type** just by assigning a different kind of value to it.

### Boolean (bool)
- `$true` / `$false`
- Used for “yes/no” or “on/off” style conditions

### Integers vs Floating point
- Integers: whole numbers
  - By default PowerShell uses **Int32** (32-bit signed)
  - Signed = positive + negative
  - Unsigned = only positive
- Floating point: decimals
  - Usually `Double` or `Single` (float)
  - Can be slightly imprecise (normal floating point behavior)

### Strings
Strings are text.
- Use quotes: `"text"` or `'text'`

**Double quotes** expand/interpolate variables:
- `"Hello $name"` becomes `"Hello Jacob"`

**Single quotes** are literal:
- `'Hello $name'` stays exactly `'Hello $name'`

---

## Objects (where PowerShell gets fun)
Objects come from a **class** (template).
- The class defines:
  - **properties** (data about the object)
  - **methods** (actions the object can do)

### Inspecting properties
A quick way:
- `Select-Object -Property *`

### Calling methods
Methods end with parentheses:
- `.ToUpper()`
- `.GetType()`

---

## Data structures: Arrays
Arrays let you store multiple items in one variable.

### Defining arrays
Use `@()`:

```powershell
$colors = @("Blue", "Gray", "Black")
```

This is it for Day 3. Now time to read over my notes again and put it all into practice. 
