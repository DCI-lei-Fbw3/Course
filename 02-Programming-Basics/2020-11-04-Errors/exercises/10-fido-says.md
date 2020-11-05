# Debugging Exercises

#### 1. Fido says...
* In the following code, we want fido to bark. Instead, we get an error. Why?

``` javascript
class Dog {
  constructor(name) {
    this.name = name;
  }
}

Dog.bark = function() {
  console.log(`${this.name} says woof`);
};

let fido = new Dog("fido");
fido.bark();
```
* Edit the code to make fido bark.
