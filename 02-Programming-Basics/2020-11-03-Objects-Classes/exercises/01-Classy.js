// # Classy

// #### 1. Person Class
// * Create a class called `Person` which accepts the name of a person as a string, and his/her age as a number.
// The `Person` class should have a method called describe which returns a string with the following syntax: "name, age years old". 
// So, for example, if John is 19 years old, then the function describe of his object will return "John, 19 years old".


class Person{
    constructor(_name,_age) {
        this.name = _name;
        this.age = _age;
        this.describe = function() {
            return this.name + ", " + this.age + " years old"
        }
    }   
}

var student = new Person("Lewes", 31);
console.log(student);
console.log(student.describe());



// #### 2. Volume
// * Write a JavaScript program to get the volume of a cylinder with four decimal places using a class. 

// * **Note**: Volume of a cylinder : `V = πr^2h` - r is the radius and h is the height of the cylinder.

class cylinder{
    constructor(r, h){
        this.r = r; 
        this.h = h; 
        this.volume = function(){
            //return (Math.PI * r^2)* h
            return (this.h * Math.PI * this.r * this.r).toFixed(4)
        }
    }
}

var cylinder1 = new cylinder(3, 6);

console.log(cylinder1.volume())



// #### 3. Tick Tock
// Rewrite the following code to use the "class" syntax. 

class clock{
    constructor(h, min, sec){
    this.h = h;
    this.min = min;
    this.sec = sec;
    this.render = function(){
        let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
    }
    }
}

  
  
    let timer;
  
    function render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    this.stop = function() {
      clearInterval(timer);
    };
  
    this.start = function() {
      render();
      timer = setInterval(render, 1000);
    };

  }
  
  let clock = new Clock({template: 'h:m:s'});
  clock.start();