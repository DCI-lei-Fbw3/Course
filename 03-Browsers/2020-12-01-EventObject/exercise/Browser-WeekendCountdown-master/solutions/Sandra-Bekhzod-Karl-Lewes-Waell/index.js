// Weekend Countdown 

// how do we check for current day? 
// append p? with the greeting 
// condition after clicking the button 
// create a function to calculate a num of days 


// user puts the name in the input field
// then clicks go 
// the p tag text changes 
    // the name from the input tag is printed
    // the current date is logged 
    // the remaining days to the weekend are calculated

    let today = new Date();
    //today = 2020.12.01, day=2, timestamp, etc.
    //inbuilt object/class

    var dayNumber = today.getDay(); //getDay is a method built into the Date object, which returns a number from 0 to 6 according to what day it is
    //dayNumber = 2

    let weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    //The index for each item in the array will be the dayNumber we get back (e.g. 0 = Sunday)
    let remaining = 5 - dayNumber
    var dayText = weekdayNames[dayNumber]; //weekdayNames[2] === "Tuesday"

    let button = document.querySelector('button')
    button.addEventListener('click', greet)

function greet() {
    let input = document.querySelector('input').value; 
    let pTag = document.querySelector('p');
    let greetingAndDay = 'Hello ' + input + '! Today is ' + dayText +'. '
    // pTag.textContent = 'Hello ' + input + '! Today is ' + dayText +'. There is/are only ' + remaining + ' day(s) are left until the weekend.'
   
    if (dayNumber === 0 || dayNumber === 6){
        pTag.textContent = greetingAndDay + "YAY! It's the weekend! Drink responsibly!"
    } else if (dayNumber === 5) {
        pTag.textContent = greetingAndDay + " Weekend starts tomorrow! Try not to get trashed!"
    } else {
        pTag.textContent = greetingAndDay + " There are only " + remaining + " days left until the weekend."
    }
}
