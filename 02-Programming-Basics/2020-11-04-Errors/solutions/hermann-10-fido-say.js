/*# Debugging Exercises

#### 1. Fido says...
* In the following code, we want fido to bark. Instead, we get an error. Why?

``` javascript*/
console.log("**** First Posibility*****");
class Dog {
  constructor(name) {
    this.name = name;
  }
  get bark() {
    console.log(`${this.name} says woof`);
  }
}

let fido = new Dog("fido");
fido.bark;

console.log("**** Second Posibility*****");

/* class Dog {
    constructor(name) {
      this.name = name;
      this.bark = function() {
        console.log(`${this.name} says woof`);
      };
    }
    
  }
  
  let fido = new Dog("fido");
  fido.bark(); */

/*
```
* Edit the code to make fido bark.*/
