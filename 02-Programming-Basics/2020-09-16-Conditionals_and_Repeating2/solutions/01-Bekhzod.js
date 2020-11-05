

/*1. Aleeza and Lis both play basketball in different teams. In the latest 3 games, Aleeza's team scored 89, 120 and 103 points, while Lis's team scored 116, 94 and 123 points.

​

- 1a) Calculate the average score for each team.

- 1b) Decide which teams wins in average (highest average score), and print the winner to the console, including their average score in the output.

- 1c) Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).

- 1d) Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.

- 1e) Like before, change the scores to generate different winners, keeping in mind that there might be draws.*/

​

// 1a)

​

let AleezaTeamScored = 97 + 134 + 102;

let LisTeamScored = 97 + 134 + 102;

​

console.log("Aleeza's average =" + AleezaTeamScored / 3);

console.log("Lis's average =" + LisTeamScored / 3);

​

// 1b)

​

/*if (AleezaTeamScored / 3 > LisTeamScored / 3) {

  console.log("Alizaa wins");

} else if (AleezaTeamScored / 3 == LisTeamScored / 3) {

  console.log("it's a draw"); //--> 1c)

} else {

  console.log("Lis wins");

}*/

​

// 1d

let maryTeamScored = 97 + 134 + 105;

​

let LissAverag = LisTeamScored / 3;

let AleezaAverag = AleezaTeamScored / 3;

let MaryAverag = maryTeamScored / 3;

​

console.log("Mary's average =" + MaryAverag);

​

if (LissAverag > AleezaAverag && LissAverag > MaryAverag) {

  console.log("Liss wins");

} else if (MaryAverag > AleezaAverag && MaryAverag > LissAverag) {

  console.log("Mary wins");

} else if (AleezaAverag > MaryAverag && AleezaAverag > LissAverag) {

  console.log("Alee wins");

} else {

  console.log("It's a draw");

}

