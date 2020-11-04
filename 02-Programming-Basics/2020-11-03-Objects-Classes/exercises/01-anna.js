// # Classy

// #### 1. Person Class
// * Create a class called `Person` which accepts the name of a person as a string, and his/her age as a number. The `Person` class should have a method called describe which returns a string with the following syntax: "name, age years old". So, for example, if John is 19 years old, then the function describe of his object will return "John, 19 years old".

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  describe() {
    return `${this.name}, ${this.age} years old`;
  }
}

let John = new Person("John", 19);
console.log(John.describe());

// #### 2. Volume
// * Write a JavaScript program to get the volume of a cylinder with four decimal places using a class.

// * **Note**: Volume of a cylinder : `V = πr^2h` - r is the radius and h is the height of the cylinder.

class Cylinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }
  get getVolume() {
    return Math.PI * this.radius ** 2 * this.height;
  }
}

let newShape = new Cylinder(3, 5);
console.log(newShape.getVolume);

// #### 3. Tick Tock
// Rewrite the following code to use the "class" syntax.
// ```javascript

class Clock {
  constructor(objectEntered) {
    let timer;
    let template = objectEntered.template;
    function render() {
      let date = new Date();

      let hours = date.getHours();
      if (hours < 10) hours = "0" + hours;

      let mins = date.getMinutes();
      if (mins < 10) mins = "0" + mins;

      let secs = date.getSeconds();
      if (secs < 10) secs = "0" + secs;

      let output = template
        .replace("h", hours)
        .replace("m", mins)
        .replace("s", secs);

      console.log(output);
    }

    this.stop = function () {
      clearInterval(timer);
    };

    this.start = function () {
      render();
      timer = setInterval(render, 1000);
    };
  }
}

let clock = new Clock({ template: "h:m:s" });
clock.start();
// ```
// #### 4. TV Class
// * Create a TV class with properties like brand, channel and volume.
// * Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
// * Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// * Add a method to set the channel randomly. Let's say the TV has only 50 channels.
// * Add a method to reset TV so it goes back to channel 1 and volume 50.
// * It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".

class Television {
  constructor(brand, channel, volume) {
    this.brand = brand;
    this.channel = channel > 1 ? channel : 1;
    this.volume = volume <= 100 && volume >= 0 ? volume : 50;
  }
  increaseVolume() {
    this.volume += this.volume >= 100 ? 0 : 1; //Only increases volume if it's less than 100
  }

  decreaseVolume() {
    this.volume -= this.volume <= 0 ? 0 : 1; //Only decreases volume if it's over 0
  }

  selectRandomChannel() {
    this.channel = Math.floor(Math.random() * 50) + 1;
  }

  reset() {
    this.channel = 1;
    this.volume = 50;
  }

  status() {
    console.log(
      `${this.brand} television now on Channel ${this.channel}, volume level ${this.volume}`
    );
  }
}

let tv1 = new Television("Samsung", 3, 35);
tv1.status();
tv1.increaseVolume();
tv1.increaseVolume();
tv1.increaseVolume();
tv1.increaseVolume();
tv1.selectRandomChannel();
tv1.status();
