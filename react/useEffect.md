    useEffect(() => {  
    	const intervalId = setInterval(() => {  
   		setCount1(count1 => count1 + 1);  
   		}, 1000);  
    	  
    	return  () =>  clearInterval(intervalId);  
    });

-   The first  `useEffect`  sets up an interval for  `count1`  to increment  **every 1 second** (1000 milliseconds).
It also returns a cleanup function that clears the interval when this  `useEffect`  is unmounted or when the component 
is re-rendered.
