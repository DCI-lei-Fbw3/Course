/*

Exercise: "Setup Pairs for Pair Programming"

Imagine a class of students.
In order to setup pairs of students for pair programming
an overview of possible pairs should be provided.

Store the pairs in a variable.
Finally output those pairs.

What variables are needed?
What are the data structures of those variables?

Bonus:
In some circumstances it might be necessary, to prohibit certain pairs, 
let's assume, no one of the first three students should ever be in the same pair.

How could this be solved?

*/
//step 1: find out how many students are there

let studentNumber=10;

/*function doPairs (studentNumber) {
    for (let i=0; i<(studentNumber/2); i++){
        randomStudents = Math.floor(Math.random()*10)+1;
        console.log(randomStudents);
    }
}

doPairs(10);*/
const array1 = ['a', 'b', 'c', 'd', 'e'] ;
array1 ['a', 'b', 'c', 'd', 'e'] = ["1", "2", "3", "4", "5"];
const iterator1 = array1.keys();

for (const key1 of iterator1) {
  console.log(key1);
}

const array2 = ['f', 'g', 'h', 'i', 'j'] ;
const iterator2 = array2.keys();

for (const key2 of iterator2) {
  console.log(key2);
}

