// Question - 1

/* let sum = 0;

for (let i = 1; i <= 20; i++){
sum = sum + i;

}
console.log(sum); */

// Question 2

/* for (let i = 1; i < 6; i++) {
  console.log("There is/are " + i + " bottles of beer on the wall");
} */

//Question 3

/* for (i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}
 */

//Question 4

/* for(let i = 0; i <= 10; i ++){
     let mult = i*9;
     console.log(mult);
 } */

//Question 5
/* let a = [];
for (let i = 100; i <= 1000; i++) {
  if (i % 100 == 0) {
    a.push(i);
  }
}

console.log(a.join(" "));

let b = [];
for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    b.push(i);
  }
}

console.log(b.join(" "));

let c = [];
for (let i = 3; i <= 15; i++) {
  if (i % 3 == 0) {
    c.push(i);
  }
}
/* console.log(c); */
/* console.log(c.join(" "));

let d = [];
for (let i = 0; i <= 9; i++) {
  d.push(i);
}
let d_1 = d.reverse();
console.log(d_1.join(" "));

let e = [];
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 1; j++) {
    console.log(j);
  }
}
for (let k = 1; k <= 3; k++) {
  for (let k_a = 2; k_a <= 2; k_a++) {
    console.log(k_a);
  }
}

for (let j = 1; j <= 3; j++) {
  for (let j_a = 3; j_a <= 3; j_a++) {
    console.log(j_a);
  }
}

for (let l = 1; l <= 3; l++) {
  for (let l_a = 4; l_a <= 4; l_a++) {
    console.log(l_a);
  }
}

console.log("new one");
let ef = [];
for (let i = 1; i <= 1; i++) {
  for (let j = 0; j <= 4; j++) {
    var num_1a = Array.of(j);
    console.log(num_1a);
  }
}

for (let k = 1; k <= 1; k++) {
  for (let k_a = 0; k_a <= 4; k_a++) {
    var num_2a = Array.of(k_a);
    console.log(num_2a);
  }
}

for (let j = 1; j <= 1; j++) {
  for (let j_a = 0; j_a <= 4; j_a++) {
    var num_3a = Array.of(j_a);
    console.log(num_3a);
  }
}

for (let l = 1; l <= 1; l++) {
  for (let l_a = 0; l_a <= 4; l_a++) {
    var num_4a = Array.of(l_a);
    console.log(num_4a);
  }
} */

// Question -6

/* let efg = [];
for (let i = 0; i <=4; i++){
    efg.push(i); */

/* } */
/* console.log(efg.join(" ")); */

/* for (let j = 0; j <=4; j++){
    efg.push(j); */

/* } */
/* console.log(efg.join(" "))
 */
/* for (let k = 0; k<=4; k++){
    efg.push(k);
    
    
} */
/* console.log(efg.join(" ")) */

/* for (let m = 0; m<=4; m++){
   efg.push(m);
    
    
}
console.log(efg.join(" ")) 
 */

// Chessboard
/* console.log("chessboard");
let width = 12;
let height = 12;
for (let i = 1; i <= height; i++) {
  let var_1 = "";
  for (let j = 1; j <= width; j++) {
     if(i%2 !=0){
       var_1 = var_1 + ((j%2!=0) ? "#" : " ");
     }
     else{
       var_1 = var_1 + ((j%2==0) ? "#" : " ");
     }
    
  
}
  console.log(var_1);
} */
  
let width = 20;
let height = 20;
for (let i = 1 ; i <= height ; i++){
  let line = "";
  for (let j = 1 ; j <= width ; j++){
    
    if(i%2!=0){
      line = line + ((j%2!=0) ? "#" : " ");
    }
    else{
      line = line + ((j%2==0) ? "#" : " ");
    }
}
console.log(line);
}
















