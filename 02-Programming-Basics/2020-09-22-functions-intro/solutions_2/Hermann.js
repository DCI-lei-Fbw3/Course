
/*
#### 1. Multiply - Function Declaration
* Create a function that multiples a number by another number.
*/
function multiplication(nber1,nber2){
let result = nber1*nber2;
console.log(result);
}
multiplication(5,10);
/*
#### 2. Multiply - Function Declarations as Values
* Rework the syntax of the above function so that the function declaration is stored as a value.
*/

const multiplication2 = function(nber1,nber2){
    let result = nber1*nber2;
console.log(result);
}
multiplication2(5,70);
/*
#### 3. Multiply - Arrow Function
* Rework the syntax of the function declaration so that is uses the arrow function shorthand.
*/

const multiplication3 = (nber1,nber2)=>{
    let result = nber1*nber2;
console.log(result);
}
multiplication3(5,85);
/*
#### 4. Declarations
* Create functions (using all three declarations) to check the remainder of division given two numbers. 
*/

//one

function multiplication4(nber1,nber2){
    let result = nber1%nber2;
    console.log(result);
    }
    multiplication4(100,10);

    //two
    const multiplication5 = function(nber1,nber2){
        let result = nber1%nber2;
    console.log(result);
    }
    multiplication5(55,7);
    //three

    const multiplication6 = (nber1,nber2)=>{
        let result = nber1%nber2;
    console.log(result);
    }
    multiplication6(78,8);
