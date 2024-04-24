## Default

```
let name = "";
name ||= "Guest" // name = "Guest"

const result = (null || undefined) ?? "guest"               // result = "guest" >> false hariç
const result = (undefined || null || false) || "guest"      // result = "guest"
```

# In operator

```
const person = {
  name: 'John',
  surname: 'Doe',
  age: 41
};
console.log('location' in person) // false
console.log('name' in person) // true
```