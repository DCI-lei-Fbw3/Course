/* Welcome FbW3
Topic: Event Objects in the Browser
Reference: 
Reference 2: https://developer.mozilla.org/en-US/docs/Web/Events
 */

 // Event Objects

 /* 
 Just like the window or document objects in the browser, we also have the event
 object.
 
 To properly handle an event we' want to know what is happening in the browser.
 Not just a "click" or a "keydown", but (also e.g.) what were the pointer coordinates?

*/


/* Some Notes: 
- We saw that the event object allows us to get a bunch of information regarding events
in the browser. 
- event.currentTarget: method returns the element where the event happens
- event.type: return the type of event, in our example this was a "click" event
- event.clientX /event.clientY: These return window-relative coordinates of the cursor

There are more properties of the event object. Many of them depend on the event type:
keyboard events have one type of props, and pointer events another. 

*/