// # Debugging Exercises

// #### 1. Fido says...
// * In the following code, we want fido to bark. Instead, we get an error. Why?

// ``` javascript

//Method 1:
class Dog {
  constructor(name) {
    this.name = name;
  }
}
// 
Dog.prototype.bark = function() {
  console.log(`${this.name} says woof`);
};

let fido = new Dog("fido");
fido.bark();
// ```
// * Edit the code to make fido bark.

//Method 2:
class Dog {
  constructor(name) {
    this.name = name;
    this.bark = function() {
      console.log(`${this.name} says woof`);
    }
  }  
};

let fido = new Dog("fido");
fido.bark(); 

