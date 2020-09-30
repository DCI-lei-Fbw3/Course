//Q1

function add(x){
    return function add_1(y,z){
       
        
        return x+y+z;
        }
    
}

var add_ = add(3);
console.log(add_(2,3));


//Q2

function multiplier(x,y){
    return function mul(z){
        return x*y*z;
    }
}

let Q2 = multiplier(2,3);
console.log(Q2(2));


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
function calculation(Age, RA){
    return function age_check(savings, wage){
    if(Age>=RA){
        console.log("you are already retired");
    }
    else{
    console.log("the person is " + Age + " years old" + " and she retires at " + RA + " and saves " + savings + "%" + " and earns monthly " + wage + "$" + " and that would leave her with a saving of " + "$" + (wage)* (savings/100) * 12 * (RA - Age) );
}

    }
} 

var abc = calculation(40,65);
console.log(abc(5,2000));