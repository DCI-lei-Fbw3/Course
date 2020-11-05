/* let # Programming Basics: Conditionals Part 3

Attempt this exercise using only simple "if" conditionals (and only what you have learnt this far into the course, so no loops, functions or arrays just yet!)

**Print your results to the console**

1. Aleeza and Lis both play basketball in different teams. In the latest 3 games, Aleeza's team scored 89, 120 and 103 points, while Lis's team scored 116, 94 and 123 points.

- 1a) Calculate the average score for each team.
- 1b) Decide which teams wins in average (highest average score), and print the winner to the console, including their average score in the output.
- 1c) Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).
- 1d) Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.
- 1e) Like before, change the scores to generate different winners, keeping in mind that there might be draws.
/* let alezFirst = 89;
let alezSec = 120;
let alezThird = 103;

let lisFirst = 120, lisSec = 103, lisThird = 89;

let MarFirst = 120, MarSec = 103, MarThird = 89;


let alez_av = (alezFirst + alezSec + alezThird)/3;
let lis_av = (lisFirst + lisSec + lisThird)/3;
let Mar_av = (MarFirst + MarSec + MarThird)/3;


/* if (alez_av > lis_av) console.log("Aleeza teams" + alez_av + " is the winner ");
if (alez_av < lis_av) console.log("Lis teams " + lis_av + " is the winner ");
else console.log("It's a Draw"); 

let winner = Math.max(alez_av, lis_av, Mar_av);
let name = (winner === alez_av && winner === lis_av && winner === Mar_av) ? "It's a Draw" :(winner = alez_av) ? "Aleeza" : (winner = lis_av) ? "Lis" : "Marry";
console.log(name + " the average is " + winner); */
// goot job raafat
// try again ....

/*let num_1 = 7;
if ( num_1%3 == 0 && num_1%5 == 0){
    console.log("FizzBuzz");
}
else if (num_1%3 == 0){
    console.log("Fizz");
}

else if (num_1%5 == 0 ){
    console.log("Buzz");
}


else{
    console.log(num_1);
}*/
/* let i = 0;
while (i < 15) {
    console.log(i);
    i++
} */

// function sumUp() {
//     let a = 1;
//     let sum = 0;
//     while (a <= 20) {

//         sum += a;
//         a++;

//     }console.log(sum);
// }
// sumUp();

// const sum = (num) => {
// 	if (num == 1) {
// 		return 1;
// 	} else return num + sum(num - 1);
// };

// console.log(sum(20));

/* let i = 1;
do {
    console.log(`The number is ${i}`)
    i++;
} while (i <= 20); */

/* switch(expression) {
    case x:
      // code block
      break;
    case y:
      // code block
      break;
    default:
      // code block
  }  */

/* let col = "yellow";
switch (col) {
    case "red":
        console.log("Red");
        break;
    case "blue":
        console.log("Blue");
        break;
    case "green":
        console.log("Green");
        break;

    case "yellow":
        console.log("Yellow");
        break;
    default:
        console.log("Enter a real color")
} */

/* let Grade = 99.5;
switch (true) {
    case (Grade <= 30):
        console.log("Still a long way to go");
        break;
    case (Grade > 30 && Grade <= 50):
        console.log("Slowly getting there");
        break;
    case (Grade > 50 && Grade <= 80):
        console.log("You can do it!");
        break;
    case (Grade > 80 && Grade <= 99):
        console.log("This is the last push!");
        break;
    case (Grade == 100):
        console.log("You are there. Well done!");
        break;
    default:
        console.log("You're very good");
} */

/* for (let i = 0; i < 10; i++) {
   console.log(i);
} */

let cars = [2, 3, 4, 6, 9, 10];
let sum = 0;
for (let i = 0; i < cars.length; i++) {
  
   sum += cars[i]; // sum = sum + cars[i]
  /* console.log(sum); */
}

console.log(sum);



/* for (var i = 1; i < 10; i++) {
    if (i == 5){
   
        break;
    }
    console.log(i);
 
} */
