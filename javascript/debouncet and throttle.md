


### Debounce
```
const  debounce = (callback, time = 300) => {
    let timer;  
      
return  () => {  
    clearTimeout(timer);  
    timer = setTimeout(callback, time);  
    	};  
    };
    
const debouncedMessage = debounce("message: ", 1000);  

// we are calling it 10000 times in this loop  
for (let i = 0; i < 10000; i++) {  
    setTimeout(debouncedMessage, i);  
}
```
### Throttle

    const  throttle = (callback, time = 300) => {  
	    let pause = false;  
      
	    return  () => {  
		    if (pause) return;  
		    
		    pause = true;  
		    callback();  
		    setTimeout(() => {  
			    pause = false;  
		    }, time);  
	    };  
    };
    // this is the throttled function with 1 second of delay  
    const throttledMessage = throttle("showMessage", 1000);  
      
    // we are calling it 10000 times in this loop  
    for (let i = 0; i < 10000; i++) {  
	    setTimeout(throttledMessage, i);  
    }

