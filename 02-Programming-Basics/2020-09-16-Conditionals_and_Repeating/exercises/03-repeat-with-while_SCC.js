/*# Repeat

## 1. Run Along
Create a `while` loop that runs as long as the variable `i` is less than 15. Print `i`.

## 2. Add it up
Create a function which sums up numbers from 1-20 using a `while` loop.

## 3. Do this while i...
Use a `do`, `while` loop to print `The number is [i]` while i is less than 20.*/

i=0;
while (i<15){
    i++;
    console.log(i);
}
console.log(`I am looping from 1 to 15 using while loop without do! ${i}`);

j=0;
sum=0;
while (j<20){
    j++;
    //console.log(j);
    sum=sum+j; 
    console.log(sum);   
}
console.log(`The final sum from 0 to ${j} is ${sum}`);

k=0;
do {
    k++;
    console.log(k);    
} while (k<20)

console.log(`I am looping from 1 to ${k} using do and while loop! ${k}`);