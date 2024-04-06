## Efficiently Utilise Context API
React’s Context API is a powerful tool for managing global state in your application, but it can lead to unnecessary 
re-renders if not used thoughtfully. When a component wraps its children with a `Context.Provider` and the value 
provided by the context changes, the `Context.Provider` component will re-render, triggering re-renders in consuming 
components.

To optimise, consider creating two separate contexts. The order in which you wrap them matters. Wrap the context that 
doesn’t change frequently (dispatch) around the one that changes more often (items) to avoid unnecessary re-renders.
```
// ItemsContext.js
import React, { createContext, useContext } from 'react';
export const ItemsContext = createContext();
export const useItems = () => useContext(ItemsContext);

// DispatchContext.js
import React, { createContext, useContext } from 'react';
export const DispatchContext = createContext();
export const useDispatch = () => useContext(DispatchContext);
```

Now, wrap your components accordingly:
```
import React from 'react';
import { ItemsContext, DispatchContext } from './contexts';

function App() {
  return (
    <DispatchContext.Provider value={dispatch}>
      <ItemsContext.Provider value={items}>
        {/* Your components */}
      </ItemsContext.Provider>
    </DispatchContext.Provider>
  );
}
```
By nesting the context providers in the right order, you can ensure that only the components depending on specific 
context values will re-render.