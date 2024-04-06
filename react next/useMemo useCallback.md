# Performance Hooks: `useMemo` and `useCallback`
Memoization is a powerful technique to improve performance, but it comes with costs. Understanding when and how to use
`useMemo` and `useCallback` is essential. These tools can significantly boost your application's performance, but 
overusing them can lead to code complexity.

Use `useMemo` when you have expensive calculations that shouldn't be recomputed on every render. For example, if you have 
a component calculating a factorial, you can memoize the result to prevent needless re-computation.
```
import React, { useMemo } from 'react';

function ExpensiveComponent({ number }) {
  const factorial = useMemo(() => {
    console.log('Calculating factorial');
    return calculateFactorial(number);
  }, [number]);
  return <div>Factorial: {factorial}</div>;
}
```
Complex calculations can slow down your application if you don’t use `useMemo`. However, for simpler operations, like 
adding numbers, memoization might not be necessary, as it introduces its own costs.

For scenarios where you want to prevent the recreation of callback functions on every render, `useCallback` becomes 
valuable. 

Consider a scenario where you pass a callback function as a prop to a child component:
```
import React, { useCallback } from 'react';

function ParentComponent() {
  const handleButtonClick = useCallback(() => {
    console.log('Button clicked');
    // Your logic here
  }, []);
  return <ChildComponent onClick={handleButtonClick} />;
}


function ChildComponent({ onClick }) {
  return <button onClick={onClick}>Click me</button>;
}
```
In this example, `useCallback` prevents the recreation of the `handleButtonClick` function on every render of the 
ParentComponent, optimising performance by ensuring that the callback reference remains stable unless its dependencies 
change.