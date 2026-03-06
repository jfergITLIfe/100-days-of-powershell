# Day 004 – The PowerShell Pipeline

For Day 004 my main focus was the **Pipeline**. 

The pipeline allows you to **take the output from one command and pass it directly into another command as input**.

**PowerShell passes objects through the pipeline**, which makes filtering, sorting, and manipulating data much more powerful.

---

## Using the Pipeline

The pipeline operator is the **pipe symbol (`|`)**.

It connects commands together so that the output of one command becomes the input of the next.

```powershell
command1 | command2
```

What happens here:

1. `command1` runs first  
2. It produces output (objects)  
3. Those objects are passed to `command2` through the pipeline  

Example:

```powershell
Get-Process | Sort-Object CPU
```

This command:

- Gets all running processes
- Sends them to `Sort-Object`
- Sorts them by CPU usage

---

## Why I think the Pipline is Powerful 

PowerShell passes **objects instead of text**, commands can understand the structure of the data.

This allows you to do things like:

- Filter data
- Sort results
- Select specific properties
- Export results

Example:

```powershell
Get-Service | Where-Object Status -eq Running
```

This retrieves all services and only returns the ones currently **running**.

---

## Parameter Binding

When objects move through the pipeline, PowerShell needs to determine **which parameter should receive the data**.

This process is called **Parameter Binding**.

PowerShell automatically matches pipeline input to parameters in two main ways.

---

### ByValue

PowerShell checks the **type of object** coming through the pipeline and matches it to a parameter that accepts that type.

Example concept:

```powershell
Get-Service | Stop-Service
```

Each **service object** produced by `Get-Service` is passed directly into `Stop-Service`.

---

### ByPropertyName

PowerShell checks whether the object has a **property that matches a parameter name**.

If it finds one, it uses that property value for the parameter.

Example concept:

If an object has a property called `Name`, and a command accepts a `-Name` parameter, PowerShell can automatically map that value.

---

## Example Script

Here’s a simple example showing the pipeline in action.

```powershell
# Day 004 - Pipeline Example

# Get all services
$services = Get-Service

# Filter running services using the pipeline
$runningServices = $services | Where-Object Status -eq "Running"

# Display selected properties
$runningServices | Select-Object Name, Status
```

This script:

1. Retrieves all services  
2. Uses the pipeline to filter running services  
3. Displays only the Name and Status properties

---

## Key Takeaways

- The **pipeline (`|`) connects commands together**
- PowerShell passes **objects, not text**
- **Parameter binding** determines how pipeline data is used
- Data can be matched **ByValue** or **ByPropertyName**

I am Learning to think in **pipelines** and I feel this is a big step forward. I am excited to see what the rest of this journey unfolds. See you on Day 005. 
