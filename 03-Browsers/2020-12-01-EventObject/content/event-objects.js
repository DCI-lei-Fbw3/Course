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

//Event.Target
//References: https://www.w3schools.com/jsref/event_target.asp

/* 
- The target property of the Event object is a reference to the object where
 the event happens.
 - Event.currentTarget return the element, but this returned element cannot be altered
 - Event.currentTarget is called during the bubbling or capturing phase of the event.
 - You would want to store the event target in a variable if you want to alter the target
 element after the event is triggered.
*/
 
const theTarget = event.target; //this variable here now hold the reference to the target element


//HTML Form element: Submit events
//Reference: https://www.w3schools.com/tags/ref_eventattributes.asp

    /* 
    - The submit event fires when  <form> is submitted
    - Submit events are only restricted to the <form> element, and not to any
    <button> or <input> elements.
    - The object SubmitEvent, which is sent to the form's submit action, includes
    a "submitter" property.
    - The "submitter" property holds the element which triggers the submit event.
    - It is worth nothing, that <button> or <input> elements can trigger a submit event
    (when placed right in the DOM).
    - The submit event will not work when you dont define the "type" attribute as "submit"
    - The submit can bubble (although specified as a simple event that doesn't bubble)
    */



//addEventListner Options and assigning multiple handlers to a single event

    /*
    - When we assign event listeners with addEventListener, the fundamental problem is that
    we cannot assign multiple handlers to one event.
    
    
    */

    input.onclick = function() {alert("1")};
    input.onclick = function() {alert("2")};

    /* 
    - We would like to assign two event handlers for the same click event. 
    The problem is, the mthod above, the DOM propoerty will overwrite
    the existing.
    - Developers of web standards uderstood that assigning multiple handerls 
    to single events cannot be left open to makeshift methods and had to be
    standardized. to make this easier, they added some options to the 
    addEventListener method.

    - The options avaibale to us include:

        - once: (it is a boolean variable) if set to TRUE (once:true), then the
        listener is automatically removed after the event triggers. Sytanx --> {once: true/false}
        - capture: (another boolean) Capture is the phase where the event is handled. Sytanx --> {once: true/false, catpure: true/false}
        - passive: (gain a boolean) if ture, then the handler will not call preventDefault(). Sytanx --> {once: true/false, catpure: true/false, passive: true/false}
     */


    

