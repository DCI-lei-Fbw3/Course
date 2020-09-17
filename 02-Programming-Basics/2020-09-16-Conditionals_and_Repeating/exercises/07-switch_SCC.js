/*# Switch if... 

#### Color Analyzer
Create a switch statement that prints a different statement for each color possibility (red, blue, green, yellow).*/

//const dColors = ["red", "blue", "green", "yellow"];
const dColors=prompt("Please choose from red, blue, green, and yellow as your favorite color.");

switch (dColors){
    case "red":
        console.log("Red as blood.");
        break;
    
    case "blue": 
        console.log("Blue as ocean.");
        break;
    
    case "green": 
        console.log("Green as forest.");
        break;
    
    case "yellow": 
        console.log("Yellow as gold.");
        break;    
    default: 
        console.log("We do not have the color you are looking for.");
}

/*#### Grading
Create a switch statement that prints different comments depending on a grade.

#### Percentage Complete. 
* If percentageComplete is below 30, print "Still a long way to go". 
* If the percentageComplete is between 30 and 50, print "Slowly getting there". 
* If percentageComplete is between 51 and 80, print "You can do it!". 
* If percentageComplete is between 81 and 99, print "This is the last push!".
* If percentageComplete is 100, print "You're there. Well done!". 

#### Differences
* When should you use a switch statement versus an `if else` statement. Comment your answer in your js file.*/

//Method one: Switch (long widing road ....)
const grade =Number(prompt("Please enter your grade between 0 to 100."));

if (grade>=0 && grade<30) {
    var levelOne = grade;
}
if (grade>=30 && grade<=50) {
    var levelTwo = grade;
}
if (grade>=51 && grade<=80) {
    var levelThree = grade;
}
if (grade>=81 && grade<=99) {
    var levelFour = grade;
}
if (grade==100) {
    var levelFive = grade;
}

switch (grade){
    case (levelOne):
        console.log(`Still a long way to go.`);
        break;
    
    case (levelTwo):
        console.log(`Slowly getting there.`);
        break;
    
    case (levelThree): 
        console.log(`You can do it!.`);
        break;
    
    case (levelFour): 
        console.log(`This is the last push!`);
        break;  

    case (levelFive): 
        console.log(`You're there. Well done!`);
        break;    

    default: 
        console.log("Are you sure you have offered your grade or you are just typing something else?");
}


//Method Two: Switch
const grade =Number(prompt("Please enter your grade between 0 to 100."));

switch (true){
    case (grade>=0 && grade<30):
        console.log(`Still a long way to go.`);
        break;
    
    case (grade>=30 && grade<=50):
        console.log(`Slowly getting there.`);
        break;
    
    case (grade>=51 && grade<=80): 
        console.log(`You can do it!.`);
        break;
    
    case (grade>=81 && grade<=99): 
        console.log(`This is the last push!`);
        break;  

    case (grade==100): 
        console.log(`You're there. Well done!`);
        break;    

    default: 
        console.log("Are you sure you have offered your grade or you are just typing something else?");
}

//Method 3: If Else if and Else
const grade =Number(prompt("Please enter your grade between 0 to 100."));

if (grade>=0 && grade<30) {
    console.log(`Still a long way to go.`);
}
else if (grade>=30 && grade<=50) {
    console.log(`Slowly getting there.`);
}
else if (grade>=51 && grade<=80) {
    console.log(`You can do it!.`);
}
else if (grade>=81 && grade<=99) {
    console.log(`This is the last push!`);
}
else if (grade==100) {
    console.log(`You're there. Well done!`);
}
else {
    console.log("Are you sure you have offered your grade or you are just typing something else?");
}

//Method 4: If Else

const grade =Number(prompt("Please enter your grade between 0 to 100."));

if (grade>=0 && grade<30) {
    console.log(`Still a long way to go.`);
}
if (grade>=30 && grade<=50) {
    console.log(`Slowly getting there.`);
}
if (grade>=51 && grade<=80) {
    console.log(`You can do it!.`);
}
if (grade>=81 && grade<=99) {
    console.log(`This is the last push!`);
}
if (grade==100) {
    console.log(`You're there. Well done!`);
}
else {
    console.log("Are you sure you have offered your grade or you are just typing something else?");
}

