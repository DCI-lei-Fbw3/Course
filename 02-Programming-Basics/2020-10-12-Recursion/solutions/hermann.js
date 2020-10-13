//------------Length's String----------
console.log("Length's String")

function recursion(mot){
  if(mot === ''){
    return 0;
  }
  else{
    return 1 + recursion(mot.substring(1)) ; 
  }
}
console.log(recursion('hermann'));


//------------reverse string----------


console.log("reverse string")
function reverseString(myString){
  if(myString==""){
    return "";
  }
  else{
    return reverseString(myString.substring(1)) + myString[0] ;
  }
}
console.log(reverseString(""))




//------------Factoriel number----------


console.log("Factoriel number")
function factoriel(chiffre){
  if(chiffre === 0 || chiffre === 1){
    return 1
  }
  else{
   return chiffre * factoriel(chiffre - 1)
  }
}
console.log(factoriel(3))



//------------Fibonacci number----------
function fibonacci(nth) {
  if (nth === 0) {
    return 0;
  }
  if (nth === 1) {
    return 1;
  }
	
  else {
    let result = fibonacci(nth - 1) + fibonacci(nth - 2);
    return result;
  }
}
console.log(fibonacci(3));