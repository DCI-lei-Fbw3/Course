/* 
Welcome FbW3
Topic: Intro to Browser Evevets
Reference: https://eloquentjavascript.net/15_event.html
Reference 2: https://developer.mozilla.org/en-US/docs/Web/Events
*/


/*
An event, in the browser context, is a signal 
that something has happened (signal is the keyword).

All DOM nodes generate such signals (but events are not limited to DOM)
 */

    //Type of events


    /* Mouse Events 
    - click: when the mouse clicks on an element (touchscreen 
        devices generate a click event with a tap)
    - contextmenu: when the mouse right-clicks on an element
    - mouseover/mouseout: when the mouse cursor comes over/leaves
    an element
    - mousedown/mouseup: when the mouse button is pressed / released
        over an element.
    - mousemove: when the mouse is moved
    */

    /* Keyboard events
    - keydown and keyup: when a keyboard key is pressed and released
    */

   /* Other events worth looking 
   - submit: only work with the <form> element
   - focus
   - DOMContentLoaded: when the HTML is loaded and processed
   */ 

   // Event Handlers

   /* 
   - Event handlers allow your program to react to events on your DOM
    - There are some EvenHandlers availble from the browser interface, however
    you can write your own EventHandler functions.
   */


   //Accessing the element with "this" keyword

   /* 
   - The value of "this" inside an event handler is the element. The one which has
   the event handler on it.
   - When you have an object in your javascript and youw ant to refer to that
   specific object' properties or methods, do not use this directly in the event handler.
    - Always be SUPER CAREFUL with the context of the "this" keyword.
   */

   //Adding eventlistners using javascript

   /* The syntax for adding event listners to you programs, use the following 
   syntax.
    */

   //Element.addEventListener(event, handler,[options])

    
   /* 
   The way to bypass this issue with contexts of the "this" keyword, is by
   wrapping object method in a function
   


   */

   class somObjectClass{
       constructor(){
           this.someProperty = "some property",
        }
    
   print() {
       console.log(this.someProperty)
   }
}


   var box = document.getElementById("box");
   box.addEventListener("click",  /* event => {somObjectClass.print()}  */);

   /* 
   
   on click --> function print() {
              console.log(this.someProperty)
   }
   
    Shorter version of all this:
    Use arrow functions when working with event handlers.

   */