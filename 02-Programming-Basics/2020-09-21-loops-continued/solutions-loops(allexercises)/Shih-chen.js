// output an array in reverse order
let names = ["Alice", "Bob", "Eve"];

for (let i=(names.length)-1; i>=0; i--) {
    console.log(names[i]);
}

let line = " ";
line=line+56+line+78;
console.log(line);

// repeat-with-for loop

/*1. **Addition.**
   Write a program to add up the numbers 1 to 20.*/

let i=0;
let sum=0;
while (i<20) {
   i=i+1;
   sum=sum+i;   
}
console.log(`The sum of 0 to ${i} is ${sum}`);

/*2. **There are i bottles of beer on the wall.**
   Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles.*/
let arr = ["one", "two", "three", "four", "five"];

for (let i=0; i<arr.length; i++) {
   if(i==0) {
   console.log(`There is ${arr[i]} bottle of beer on the wall`);
   }
   else {
   console.log(`There are ${arr[i]} bottles of beer on the wall`);
   }
}

//3. **The odd/even reporter.**
//   Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
for (let n=0; n<=15; n++) {
  //console.log(n);
  if (n%2!=0) {
    console.log(`This is an odd number, ${n}`);    
  }
  else {
    console.log(`This is an even number, ${n}`);  
  }
}

/*4. **Multiplication Tables.**
   Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 \* 9 = 18").
   **Bonus:** Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).*/
  for (let i=0; i<=10; i++) {
   j=i*9;
   console.log(`${i} * 9 = ${j}`);
 }
 
 for (let x=0; x<=10; x++) {
   for(let y=0; y<=10; y++) {
     z=x*y;     
     console.log(z);
   }   
 }


//**Bonus***

/*5. Write programs that produce the following outputs:

   > 100 200 300 400 500 600 700 800 900 1000
   >
   > 0 2 4 6 8 10
   >
   > 3 6 9 12 15
   >
   > 9 8 7 6 5 4 3 2 1 0
   >
   > 1 1 1 2 2 2 3 3 3 4 4 4
   >
   > 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4*/
   //Write programs that produce the following outputs:
//100 200 300 400 500 600 700 800 900 1000
for (let i=1; i<=10; i++) {
   j=i*100;
   console.log(j); 
 }
 //0 2 4 6 8 10
 for (let i=0; i<=10; i=i+2) {
    console.log(i); 
 }
 //3 6 9 12 15
 for (let i=1; i<=5; i++) {
   j=i*3; 
   console.log(j); 
 }
 //9 8 7 6 5 4 3 2 1 0
 for (let i=9; i>=0; i--) {
   console.log(i);  
 }
 //1 1 1 2 2 2 3 3 3 4 4 4
 for (let i=1; i<=4; i++) {
   console.log(i, i, i); 
 }
 //0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
 for(let c=0; c<3; c++) {
   for(let i=0; i<5; i++) {
     console.log(`${i}`);
   } 
 }

/*6. **isPalindrome.**
   Write a program to check whether a word is a palindrome or not.
   Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. mmada or tarrattarrat*/

   let oldString="Peacock";
   let newString="";
   
   for(let index=oldString.length-1; index>=0; index--) {
      newString=newString+oldString[index];     
   }
   
   console.log(oldString);
   console.log(newString);
   
   var palindromeTest = (oldString===newString)? "a Palindrome!" : "Not a Palindrome for sure!";
   console.log(palindromeTest);

//chessboard
var result = " ";
var size= 10;

for (let row=0; row<size; row++){
  
  for(let col=0; col<size; col++){
    if ((row%2==0 && col%2==0)||(row%2!=0 && col%2!=0)){
        result=result+"   ";
        }
    else {
      result=result+" # ";
    }
  }
  result=result+"\n";
}

console.log(result); 

//alarm, with bonus point
const threshold = 0.3; 
for (let i=0; i<10; i++) {
    var randomNumber=Math.random();   
    console.log(randomNumber);
    if (randomNumber>threshold){
        var difference=randomNumber-threshold;
        var gap=Math.round(difference/0.1);
        var lineBonus="";
        for(let counter=1; counter<=gap; counter++) {
            lineBonus=lineBonus+"*";
        }
    console.log(`${lineBonus}Attention: current value ${randomNumber} exceeds the threshold ${threshold} by ${difference}`);
    }
    if (randomNumber<threshold){
        console.log("!");
    } 
    if (randomNumber==threshold) {
        console.log("??");
    }   
    }

//creating pairs

const students1
 = ['Alexa', 'Siri', 'Cortana', 'Athena', 'Hera', 'Iris'];

let line1="";
for (let i=0; i<(students1.length-1); i++) {     
    for (let j=1; j<(students1.length); j++) {        
            if (students1[i]!=students1[j]){
            line1=line1+students1[i]+"\t"+students1[j]+"\n";           
        }
    }     
}
console.log(`6 members combination to come up with pairs,\n${line1}`); 

//Bonus: students from one group cannot be together
//6 students: 'Alexa', 'Siri', 'Cortana', 'Athena', 'Hera', 'Iris'
//Alexa, Siri, Cortana cannot be in a group, the same with Athena, Hera, and Iris

console.log("\n");//This is only to create an extra row between the code above and the one below

const students2
 = ['Alexa', 'Siri', 'Cortana', 'Athena', 'Hera', 'Iris'];

let line2="";
for (let i=0; i<(students2.length/2); i++) {     
    for (let j=(students2.length/2); j<(students2.length); j++) {        
            if (students2[i]!=students2[j]){
            line2=line2+students2[i]+"\t"+students2[j]+"\n";           
        }
    }      
}
console.log(`with limitation to come up with pairs,\n${line2}`);

//line-wise loop
let string1="Hello World";
for (let i=0; i<string1.length; i++){
    console.log(string1[i]);
}
console.log("\n");

let index=0;

let string2="Winnie the Pooh";
for (index in string2) {
    console.log(string2[index]);
}
