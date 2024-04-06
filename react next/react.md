```
import loadable from '@loadable/component'

const Chart = loadable(() => import('./Chart'))

function Dashboard() {
  return (
    <div>
      <Chart />
    </div>
  )
}
```

## Utilize Code Splitting:
Implement code splitting to break down your JavaScript code into smaller, manageable chunks. Loading only the necessary chunks on demand or in parallel reduces network load and enhances performance.
```
// Before code splitting
import MyComponent from './MyComponent';
// After code splitting
const MyComponent = React.lazy(() => import('./MyComponent'));
```

## Isolate Expensive Updates in Separate Sibling Components
In some cases, you may have a component that’s computationally expensive to render. To prevent it from slowing down 
your entire app, isolate these expensive updates in a separate sibling component. This approach ensures the continued 
performance of the rest of your application.

Consider a scenario with two sibling components, one of which is computationally expensive:

```
import React, { useState } from 'react';

function ParentComponent() {
  const [data, setData] = useState([]);
  // Expensive operation to process data
  const expensiveData = processData(data);
  return (
    <div>
      <ExpensiveComponent data={expensiveData} />
      <CheapComponent data={data} />
    </div>
  );
}

function ExpensiveComponent({ data }) {
  // Expensive operations on data
  return <div>Expensive Data: {data}</div>;
}

function CheapComponent({ data }) {
  return <div>Cheap Data: {data}</div>;
}
```