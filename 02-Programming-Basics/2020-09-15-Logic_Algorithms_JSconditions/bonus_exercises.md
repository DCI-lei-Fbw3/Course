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
        console.log(a);
    } 
    if (b>a) {
        console.log(b);
    }
}

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

/*
#### 3.

|  Input   | Output |
| :------: | :----: |
| 110, 100 |  true  |
| 150, 100 |  true  |
| 50, 100  | false  |
*/
# Programming Basics: Conditionals Part 2

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height). (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).

1. Store Mark's and John's mass and height in variables.

2. Calculate both their BMIs and store their BMIs in variables. 
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is"). 
5. Create an *if* statement which prints the name and BMI of the person with the highest BMI. 