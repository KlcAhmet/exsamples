# Dynamic Import
```
async function loadModule(moduleName) {
  try {
    const module = await import(`./modules/${moduleName}.js`);
    module.default(); // Assuming the module exports a default function
  } catch (error) {
    console.error('Failed to load module:', error);
  }
}

loadModule('myDynamicModule');
```
# Wrapping Event-based APIs with Async/Await
```
function waitForEvent(emitter, eventName) {
  return new Promise((resolve, reject) => {
    emitter.once(eventName, resolve); // Resolve on the event
    emitter.once('error', reject); // Reject on error
  });
}

async function processEvents() {
  const emitter = new EventEmitter();
  
  setTimeout(() => emitter.emit('myEvent', 'event data'), 1000); // Example event
  
  try {
    const eventData = await waitForEvent(emitter, 'myEvent');
    console.log('Event received:', eventData);
  } catch (error) {
    console.error('Error waiting for event:', error);
  }
}
```
# Efficient Error Handling Example:
```
// Bad practice
function fetchData() {
   try {
      // Fetch data
   } catch (error) {
      console.log('Error:', error);
   }
}

// Good practice
function fetchData() {
   try {
      // Fetch data
   } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error appropriately
   }
}
```