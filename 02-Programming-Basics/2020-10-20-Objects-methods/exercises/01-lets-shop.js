// # Exercise 1: Let's Shop

// ### Problem 1 
// In this exercise, you are required to create an object for shopping products named product. This object should have the following properties:

// let product = { 
//     name: "Cheese",
//     price: 20, 
//     amount: 10, 
//     madeIn: "USA",
//     rename() {
//         for (x in this) {
//             if (x === "name") this.name = "Bottle";
//             if (x === "madeIn") this.madeIn = "China";
//         }
//     }
// }
//  attributes have values 
//  methods are functions 
// attributes and methods are properties of objects


// ### Problem 2

// In this exercise, you’re already given the object product from the previous exercise with properties and their values. 
// You need to iterate through the object and change the value of:

// - name to Bottle
// - madeIn to China

// product.rename();
// console.log(product);


// function set(){
//     //write your code here
// }
// ```
// __Note__: For more practice, try solving this question using both dot notation and square brackets to access properties of the object.


// ### Problem 3
// In this exercise, you are required to write a function totalBill that returns the total bill after the customer buys that product.

// __Note__: Assume all prices are in dollars.

// The object from the previous exercise is already given below. However, the property values are not set. You can set them to whatever you want. The skeleton of the function is already given; you just need to write its implementation.


// var product = {
//     //These are sample values, you can change them to whatever you want
//     name: 'Cheese',
//     price: 30, 
//     amount: 10,
//     madeIn: 'USA',
//     //wrtie code for the function here 
//     totalBill() {
//         return this.price * this.amount 
//     }
// }

// console.log(product.totalBill())



// ### Problem 4

// This exercise has two parts.

// #### First Part
// The shop has decided to offer a 10% discount on Cheese. In the first part, 
// you are required to write a set function setPrice which updates the price after computing the discount.

// ```javascript
// //Part 1: declare the function with appropriate parameters "without" using the set keyword and implement it as well.
// var product = {
//     name: 'Cheese',
//     price: 20,
//     amount: 10,
//     madeIn: 'USA', 
//     totalBill() {
//         return (this.price*this.amount)
//     },
//     //write the correct declaration and also write the implementation
//     setPrice(){
//         for (y in this) {
//             if (y === "price") this.price = (this.price*0.9);
            
//             }return this.price
//     }
// }
// // should the console.log return just the price or all properties with the new price included? 
// console.log(product.setPrice())

// #### Second Part 
// In the second part, you are required to implement the same functionality but this time you need to make the function using the set keyword instead. As an addition, you also need to call setPrice in the testFunc function given.


// //Part 2: declare the function using "set" keyword and appropriate parameter/parameters, implement it and call it.
var product = {
    name: 'Cheese',
    price: 20,
    amount: 10,
    madeIn: 'USA', 
    totalBill() {
        return (this.price*this.amount)
    },
    //write the correct declaration and also write the implementation
    setPrice(){}
}

// //Zero is just a default value, change it to set temp equal to a number of your choice.
// //the test case will run for the value of temp that you set
// var temp = 0

function testFunc(){
    //call setPrice and set the new value of "price" equal to "temp" here    
}



// __Note__: We are only using the testFunc function for testing purposes, so there’s no need to worry. Just call your function there.

// __Sample Input__
// 20

// __Sample Output__
// 18

// Note: The skeleton function for setPrice is given in both code tabs. Right now, it is not being passed any parameters. You need to pass it appropriate parameter/parameters, so use appropriate keywords and write the code for implementation as well.

