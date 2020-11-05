// !Person Class
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
		this.printClass = () => `${this.name}, is ${this.age} years old`;
	}
}

let firstPerson = new Person("john", 44);
console.log(firstPerson.printClass());

// !Volume
class Volume {
	constructor(height, radius) {
		this.height = height;
		this.radius = radius;
		this.calculateVolume = () =>
			`the cylinder volume is ${(
				Math.PI *
				this.radius ** 2 *
				this.height
			).toFixed(4)}`;
	}
}
let cylinder1 = new Volume(22, 2.5);
console.log(cylinder1.calculateVolume());

// !Tick Tack
class Clock {
	constructor() {
		let timer;
		this.stop = () => clearInterval(timer);
		this.start = () => {
			this.render();
			timer = setInterval(this.render, 1000);
		};
	}
	render = () => {
		let date = new Date();

		let hrs = date.getHours();
		if (hrs < 10) hrs = "0" + hrs;

		let mins = date.getMinutes();
		if (mins < 10) mins = "0" + mins;

		let secs = date.getSeconds();
		if (secs < 10) secs = "0" + secs;
		this.hours = hrs;
		this.minutes = mins;
		this.seconds = secs;
		console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
	};
}
let clock = new Clock();
clock.start();
clock.stop();

// !TV Class
class TV {
	constructor(brand, channel = 1, volume = 50) {
		this.brand = brand;
		this.channel = channel;
		this.volume = volume;
		this.increase = () => {
			this.volume < 100 ? ++this.volume : this.volume;
		};
		this.decrease = () => {
			this.volume > 0 ? --this.volume : this.volume;
		};
		this.randomChannel = () =>
			(this.channel = Math.floor(Math.random() * 50 + 1));
		this.reset = () => {
			this.channel = 1;
			this.volume = 50;
		};
		this.getStatus = () =>
			`${this.brand} at channel ${this.channel}, volume ${this.volume}`;
	}
}
let sony = new TV("SONY", 25, 2);
sony.decrease();
sony.decrease();
sony.decrease();
console.log(sony.volume);
sony.randomChannel();
console.log(sony.channel);
console.log(sony.getStatus());
