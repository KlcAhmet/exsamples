## Default

```
let name = "";
name ||= "Guest" // name = "Guest"

const result = (null || undefined) ?? "guest" // result = "guest" >> false hariç
const result = (undefined || null || false) || "guest" // result = "guest"
```