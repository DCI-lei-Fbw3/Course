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

//let studentNumber=10;

/*function doPairs (studentNumber) {
    for (let i=0; i<(studentNumber/2); i++){
        randomStudents = Math.floor(Math.random()*10)+1;
        console.log(randomStudents);
    }
}

doPairs(10);
const array1 = ['a', 'b', 'c', 'd', 'e'] ;
array1 ['a', 'b', 'c', 'd', 'e'] = ["1", "2", "3", "4", "5"];
const iterator1 = array1.keys();

for (const key1 in iterator1) {
  console.log(key1);
}

const array2 = ['f', 'g', 'h', 'i', 'j'] ;
const iterator2 = array2.keys();

for (const key2 in iterator2) {
  console.log(key2);
}*/

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

console.log("\n");

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
