## Table    

    const person = {  
   	    name: 'John',  
   	    age: 25,  
   	    profession: 'Programmer'  
    }  
    console.table(person);
![](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*9PjQV8atvGaxLJAq)

## Console Time
```
console.time();
for (let i = 0; i < 100000; i++) {
  // some code
}
console.timeEnd(); // default: 0.555908203125 ms
```

```
console.error("ERROR");
console.warn("WARNING");

// Logs a message to the console only if an expression evaluates to false.
console.assert(true, "Error: Math is broken! true");

console.assert(false, "Error: Math is broken! false"); // console: "Error: Math is broken! false"

// Outputs an informational message to the console.
console.info("Informational message");
```