let mangoes = 20;
let oranges = 50;
let apples = 20;

let status = mangoes == oranges && oranges == apples;
console.log(status);

let mangoes_ = 5;
let apples_ = 20;
let oranges_ = 300;

let status_ = apples_ - mangoes_ < oranges_ / mangoes_;
console.log(status_);

let a;
a = 23;
a = 25;
console.log(a);

for (let i = 0; i <= 100; i++) {
  let output = "";
  if (i % 4 == 0) output = output + "Fizz ";
  if (i % 3 == 0) output = output + "Buzz ";
  if (i === 0) output = 0;
  console.log(output || i);
}
