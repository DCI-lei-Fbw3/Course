// # Classy

// #### 1. Person Class
// * Create a class called `Person` which accepts the name of a person as a string, and his/her age as a number. The `Person` class should have a method called describe which returns a string with the following syntax: "name, age years old". So, for example, if John is 19 years old, then the function describe of his object will return "John, 19 years old".

class Person{
    constructor (name, age) {
        this._name = name;
        this._age = age;
        this.describe = function () {
            return `${this._name} is ${this._age} years old.`;
        }
    }
}

let person1 = new Person("Neo", 33);
let person2 = new Person("Trinity", 33);
let person3 = new Person("Morpheus", 44);

console.log(person1.describe());
console.log(person2.describe());
console.log(person3.describe());

// #### 2. Volume
// * Write a JavaScript program to get the volume of a cylinder with four decimal places using a class. 
// * **Note**: Volume of a cylinder : `V = πr^2h` - r is the radius and h is the height of the cylinder.

class Cylinder {
    constructor (r, h) {
        this._r = r;
        this._h = h;
        this.cylinderVolume = function() {
            let cylinderV = (Math.PI*((this._r)**2)*this._h).toFixed(4);
            return `This volume of this cylinder of ${this._r} cm in radius and of ${this._h} cm in height is ${cylinderV}`; 
        } 
    }
}

let cylinder1 = new Cylinder(8, 15);
console.log(cylinder1.cylinderVolume());

// #### 3. Tick Tock
// Rewrite the following code to use the "class" syntax. 
// ```javascript
//   function Clock({ template }) {
  
//     let timer;
  
//     function render() {
//       let date = new Date();
  
//       let hours = date.getHours();
//       if (hours < 10) hours = '0' + hours;
  
//       let mins = date.getMinutes();
//       if (mins < 10) mins = '0' + mins;
  
//       let secs = date.getSeconds();
//       if (secs < 10) secs = '0' + secs;
  
//       let output = template
//         .replace('h', hours)
//         .replace('m', mins)
//         .replace('s', secs);
  
//       console.log(output);
//     }
  
//     this.stop = function() {
//       clearInterval(timer);
//     };
  
//     this.start = function() {
//       render();
//       timer = setInterval(render, 1000);
//     };

//   }
  
//   let clock = new Clock({template: 'h:m:s'});
//   clock.start();
// ```

  class Clock {
    constructor({template}) {
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
  }
  
  let clock = new Clock({template: 'h:m:s'});
  clock.start();

// #### 4. TV Class
// * Create a TV class with properties like brand, channel and volume.
// * Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
// * Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// * Add a method to set the channel randomly. Let's say the TV has only 50 channels.
// * Add a method to reset TV so it goes back to channel 1 and volume 50. 
// * It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".
class TV {

  constructor (brand){
    this.brand = brand;
    this.channel = 1;
    this.volume = 50;
    this.reset = function() {
      this.channel = 1;
      this.volume = 50;
      console.log(`${this.brand} is reset back at channel ${this.channel} and at volume ${this.volume}`);
    }     
  }

    volumeDown() {
        if (this.volume>0) {
        this.volume--;
      }
      return this.volume;
    }  

    volumeUp() {
      if(this.volume<100) {
        this.volume++;
      }
      return this.volume;
    }   
    
    randomChannel() {
      this.channel = Math.floor(Math.random() * 50) + 1;
      return this.channel;
    }

    getStatus = function () {
    console.log(`${this.brand} is at channel ${this.channel} and at volume ${this.volume}`);
  }  
}

let tv1 = new TV("Panasonic");

tv1.getStatus();
console.log(tv1.volumeUp());
console.log(tv1.volumeUp());
console.log(tv1.volumeUp());
console.log(tv1.randomChannel());
tv1.reset();
tv1.getStatus();
console.log(tv1.volumeDown());
console.log(tv1.volumeDown());
console.log(tv1.volumeDown());
console.log(tv1.randomChannel());
tv1.getStatus();
