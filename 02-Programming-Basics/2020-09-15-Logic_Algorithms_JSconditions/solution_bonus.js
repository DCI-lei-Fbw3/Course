let MarkMass = 130;
let MarkHeight = 190;

let JohnMass = 90;
let JohnHeight = 180;

let BMI_Mark = MarkMass / (MarkHeight * MarkHeight);
let BMI_John = JohnMass / (JohnHeight * JohnHeight);

/* console.log("BMI of Mark is " + BMI_Mark);
console.log("BMI of john is " + BMI_John);

let comparison =
  BMI_Mark > BMI_John ? "Mark has higher BMI" : "Mark has lower BMI";
console.log(comparison);
 */

let name_1 = "Mark";
let name_2 = "John";
let BMI_1 = MarkMass / (MarkHeight * MarkHeight);
let BMI_2 = JohnMass / (JohnHeight * JohnHeight);

if (BMI_1 > BMI_2) {
  console.log("The highest BMI is that of " + name_1 + " which is " + BMI_1);
} else {
  console.log("The highest BMI is that of " + name_2 + " which is " + BMI_2);
}
