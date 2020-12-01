// Weekend Countdown 

    // we store the "Date" object in a variable: 
    let today = new Date(); 
    // "Date" is ready object in Dom.
    //today = 2020.12.01, day=2, timestamp, etc.
    //inbuilt object/class

    // we access the detDay method (from the Date object), to get the number of the current day:
    var dayNumber = today.getDay(); 
    //getDay is a method built into the "Date" object, which returns a number from 0 to 6 according to what day it is
    //dayNumber = 2

    // we are defining an array called weekdayNames:
    //The index for each item in the array will be the dayNumber we get back (e.g. 0 = Sunday)
    let weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    // in the remaining variable we subtract the current day from the number which represents Friday (5):
    let remaining = 5 - dayNumber
    // this variable selects the specific day from the weekdayNames array using the dayNumber to specify the index position:
    var dayText = weekdayNames[dayNumber]; //weekdayNames[2] === "Tuesday"
    // in this variable we select the "button" element from the html file: 
    let button = document.querySelector('button')
    // then we add the event "click" to the button, after which it will execute the greet function:
    button.addEventListener('click', greet) // we don't need () for callback functions.
    // addEventListener is a method that is waiting for an event to happen (whose type can be: click, focus, hover, mouse.....), and then executes a callback function. 


function greet() {
    // here we are selecting the input tag and we are accessing the value from the tag: 
    let input = document.querySelector('input').value; 
    // here we are selecting the p tag: 
    let pTag = document.querySelector('p');
    // here we are creating the template for the first half of the message which includes the name and day: 
    let greetingAndDay = 'Hello ' + input + '! Today is ' + dayText +'. '
    // if statement in case it is Saturday or Sunday: 
    if (dayNumber === 0 || dayNumber === 6){
        // print a weekend message by replacing the pTag's text content: 
        pTag.textContent = greetingAndDay + "YAY! It's the weekend! Drink responsibly!"
        // if statement in case it is Friday: 
    } else if (dayNumber === 5) {
        // print a Friday message by replacing the pTag's text content: 
        pTag.textContent = greetingAndDay + " Weekend starts tomorrow! Try not to get trashed!"
        // in any other cases: 
    } else {
        // print a Friday message by replacing the pTag's text content, and use the remaining variable to calculate how many days until the weekend: 
        pTag.textContent = greetingAndDay + " There are only " + remaining + " days left until the weekend."
    }
}


// P.S 
// "onclick" older version 
// "click" newest version
// https://stackoverflow.com/questions/6348494/addeventlistener-vs-onclick