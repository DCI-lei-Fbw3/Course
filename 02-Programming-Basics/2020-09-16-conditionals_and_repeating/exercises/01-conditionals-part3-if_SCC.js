/*# Programming Basics: Conditionals Part 3

Attempt this exercise using only simple "if" conditionals (and only what you have learnt this far into the course, so no loops, functions or arrays just yet!)

**Print your results to the console**

1. Aleeza and Lis both play basketball in different teams. In the latest 3 games, Aleeza's team scored 89, 120 and 103 points, while Lis's team scored 116, 94 and 123 points.

- 1a) Calculate the average score for each team.
- 1b) Decide which teams wins in average (highest average score), and print the winner to the console, including their average score in the output.
- 1c) Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).
- 1d) Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.
- 1e) Like before, change the scores to generate different winners, keeping in mind that there might be draws.*/

let ATeam = [89, 102, 103];
let LTeam = [97, 134, 105];// [116, 94, 123];
let MTeam = [97, 134, 105];

let ATeamTotal =(ATeam.reduce((a, b)=> a+b, 0));
let LTeamTotal =(LTeam.reduce((a, b)=> a+b, 0));
let MTeamTotal =(MTeam.reduce((a, b)=> a+b, 0));

let ATeamAve = ATeamTotal/3;
let LTeamAve = LTeamTotal/3;
let MTeamAve = MTeamTotal/3;

/*const obj1={"Aleeaźa": ATeamAve };
const obj2={"Lis": LTeamAve };
const obj3={"Mary": MTeamAve };*/

console.log(ATeamAve, LTeamAve, MTeamAve);

//let result = (ATeamAve>LTeamTotal)? console.log(`Aleeza's team won. The average score is ${ATeamAve}`): console.log(`Lis' team won. The average score is ${LTeamAve}`)
//let result = Math.max(ATeamAve, LTeamAve, MTeamAve);

if (ATeamAve>LTeamAve && ATeamAve>MTeamAve) {
    console.log(`The highest average score is Aleeza's team at the average score of ${ATeamAve}`);
}
if (LTeamAve>ATeamAve && LTeamAve>MTeamAve) {
    console.log(`The highest average score is Liz's team at the average score of ${LTeamAve}`);
}
if (MTeamAve>ATeamAve && MTeamAve>LTeamAve) {
    console.log(`The highest average score is Mary's team at the average score of ${MTeamAve}`);
}
if (ATeamAve==LTeamAve || ATeamAve == MTeamAve || LTeamAve==MTeamAve) {
    if (ATeamAve==LTeamAve) {
        console.log(`Aleeza's team has a tight score with Liz's team of ${ATeamAve}`);
    }
    if (ATeamAve==MTeamAve) {
        console.log(`Aleeza's team has a tight score with Mary's team of ${ATeamAve}`);
    }
    else {
        console.log(`Liz's team has a tight score with Mary's team of ${LTeamAve}`);
    }
}


