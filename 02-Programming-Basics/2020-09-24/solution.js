//q1

/* function StrCheck(str){
    if(str.length==0){
        return "true";
    }
    else{
        return "false";
    }
}

console.log(StrCheck("g")); */

//q2

/* function StrCheck(str_1, str_2){
    if(str_1.length === str_2.length){
        return true;
    }
    else{
        return false; 
    }

}

console.log(StrCheck("Saad", "Butty")); */


//Q3

/* str_1 = "Saad";
str_2 = "Butt"
console.log(str_1 + " " + str_2); */


//q4

/* const HelloName = (str_1) =>{
    return "Hello" + " " + str_1;

}

console.log(HelloName("Saad")); */


//Q5

/* function hasSpaces(str_1){

if(str_1.includes(" ")){
    return true;
}
else{
    return false;
}

}

console.log(hasSpaces("Hello")); */


//q6

/* function ctoa(x){
    return x.charCodeAt(0);

}

console.log(ctoa("\\")); */

//q7

/* function comparison(str_1, str_2){
    if(str_1.toLowerCase()== str_2.toLowerCase()){
        return true;
    }
    else{
        return false;
    }
}

console.log(comparison("Saad", "ketchup")); */


//q8

/* function sameCase(str_1){
    if(str_1 === str_1.toLowerCase() || str_1 === str_1.toUpperCase()){
    return true;
}
else{
    return false;
}
}
console.log(sameCase("ketcHUP")); */


//q9

/* function remove(str_1){
 
 
 var str_1_b = str_1.slice(1, (str_1.length-1));
 console.log(str_1_b);


}

console.log(remove("Hello")); */


//Q10

function Pair(str_1, str_2){


if(str_1.slice(0,1).toUpperCase() == str_2.slice(str_2.length-1, str_2.length).toUpperCase()
&& str_2.slice(0,1).toUpperCase() == str_1.slice(str_1.length-1, str_1.length
).toUpperCase()){
return true;
}

else{
    return false;
}

 

}

console.log(Pair("" , ""));