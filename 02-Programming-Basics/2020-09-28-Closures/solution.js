//Q1

/* function add(x){
    let y = 4;
    
    function add_1(z){  
        return x+y+z;
        }
        
        return add_1;
    }

var add_ = add(3);
console.log(add_(3)); */


//Q2

/* function multiplier(x){
    let z = 4;
    return function mul(y){
        return x*y*z;
    }
}

let Q2 = multiplier(2);
console.log(Q2(2)); */


//Q3

/* function calculation(age, retirement_age, wage, savings){
    if(age>=retirement_age){
        return "you are already retired";
    }
    else{
        console.log("the person is " + (age) + " years old" + " and she retires at " + retirement_age + " and saves " + savings +"%" + "and earns monthly " + wage + "$" +  " and that would leave her with a saving of " + "$" + (wage * (savings/100) * 12 * (retirement_age-age) )  );
    }
        

        
    }
console.log(calculation (40, 65, 2000, 5));
 */
/* function calculation(Age, RA){
    let wage = 2000; 
    return function age_check(savings){
    if(Age>=RA){
        console.log("you are already retired");
    }
    else{
    console.log("the person is " + Age + " years old" + " and she retires at " + RA + " and saves " + savings + "%" + " and earns monthly " + wage + "$" + " and that would leave her with a saving of " + "$" + (wage)* (savings/100) * 12 * (RA - Age) );
}

    }
} 

var abc = calculation(40,65);
console.log(abc(5)); */


/* function say_hi(){
    return "hello";

} 

function greetings(x,y){
    return x() + y;
}

console.log(greetings(say_hi, " Saad")); */




/* function add(z){
     return z;
}

function sum (x,y){
    return x+y;
} */

/* console.log(add(sum(5,7))); */

function say_hi(){
    return "hi";
}

function greetings(x,y){
    return x() + y;
}

console.log(greetings(say_hi, " Saad"));

function say_hi(){
    return "hiiii";
}

function greetings(y){
    return y();
}

greetings(say_hi);