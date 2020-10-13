// file 1

/* let myArray = [1,2,4,3,2];

for (let i =0 ; i <= myArray.length; i++){
    console.log(myArray[i]);
    let thirdElement = myArray[2];
    console.log(thirdElement);
    myArray[3] = "fourth element";
    console.log(myArray);
} */

// file 2

//Q1

let euroCities = ["London", "Valetta", "Prague", "Rome"];
let newVar = euroCities[1];
console.log(newVar);

//Q2

euroCities[0] = "Berlin";
console.log(euroCities);

//Q3

console.log(euroCities.length);

//Q4

let newArray = euroCities.pop();
console.log(newArray);
console.log(euroCities);

//Q5

euroCities.unshift("Budapest");
console.log(euroCities); 

//Q6

euroCities.splice(1,2);
console.log(euroCities);

//Q7

let asianCities = ["Lahore" , "Delhi", "Jakarta", "Mumbai", "Islamabad"];


//Q8

let asian_Cities = asianCities.slice(1,4);
console.log(asian_Cities);

//Q9

let worldCities = asian_Cities.concat(euroCities);
console.log(worldCities);

//Q10

console.log(worldCities.reverse());


//Q11

worldCities[2] = "Toronto";
console.log(worldCities);

//Q12

let new_modifications = worldCities.splice(1,0, "Washington");
console.log(worldCities);


//Q13

console.log(worldCities.toString());

// bonus

let str = "Hello World";

let arr_1 = Array.from(str);
console.log(arr_1);

let arr_2 = arr_1.reverse();

console.log(arr_2.join(""));


// extra practice

let mySiblings = ["Thor", "Iron Man", "Loki"];
let myParents = ["Rukhsana" , "Zakaria"];
let combined = mySiblings.concat(myParents);
console.log(combined);
combined.push("Lila");
console.log(combined);
combined.reverse(); 
console.log(combined);

console.log(combined[1]);
combined[1] = "Zakria Butt"
console.log(combined);


