/*# Inputs & Outputs

Write down pseudo-code on pen and paper for the following patterns:

#### 1.

| Input  | Output |
| :----: | :----: |
|  2, 5  |   5    |
| 0, 100 |  100   |
| 52, 35 |   52   |
*/

function compare1 (a, b) {
    if (a>b) {
        console.log("The bigger number is", String(a));
    } 
    if (b>a) {
        console.log("The bigger number is", String(b));
    }
}

compare1 (2, 5);
compare1 (0, 100);
compare1 (52, 35);

console.log("\n");
/*
#### 2.

| Input  | Output |
| :----: | :----: |
|  5, 5  |  true  |
| 40, 40 |  true  |
| 50, 51 | false  |
*/

function compare2 (a, b) {
    if (a==b) {
        console.log("True");        
    }
    else {
        console.log("False");
    }
}

compare2 (5, 5);
compare2 (40, 40);
compare2 (50, 51);

console.log("\n");
/*
#### 3.

|  Input   | Output |
| :------: | :----: |
| 110, 100 |  true  |
| 150, 100 |  true  |
| 50, 100  | false  |
*/

function compare3 (a, b) {
    if (a>b) {
        console.log("The condition is true because the number to the left is bigger than the number to the right");
    }
    else {
        console.log("The condition is false while the number to the left is smaller than the number to the right");
    }
}
compare3(110, 100);
compare3(150, 100);
compare3(50, 100);

console.log("\n");

/*# Programming Basics: Conditionals Part 2

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height). (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).

1. Store Mark's and John's mass and height in variables.
2. Calculate both their BMIs and store their BMIs in variables. 
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is"). 
5. Create an *if* statement which prints the name and BMI of the person with the highest BMI.*/ 

//BMI formula: BMI = mass (weight) / (height * height)

//step 1
let JohnHeight=1.75, JohnWeight=75;
let MarkHeight=1.85, MarkWeight=85;

//step 2
JohnBMI=75/(1.75**2);
MarkBMI=85/(1.85**2);

//step 3
(MarkBMI>JohnBMI)? console.log("Mark has a higher BMI."):console.log("John has a higher BMI.");

//step 4
console.log ("Is Mark's BMI higher than John's? Why yes, it's", String(MarkBMI>JohnBMI), "it is.");

//step 5
if (MarkBMI>JohnBMI) console.log("Mark has got a higher BMI, which is", String(MarkBMI));
else console.log("John has got a higher BMI, which is", String(JohnBMI));