/* example for creating an abstract class

class Abstract {
  constructor() {
    if (new.target === Abstract) {
      throw new TypeError("Cannot construct Abstract instances directly");
    }
  }
}

*/

/* abstract class, can not be instantiated */
class Vehicle {
	
	constructor(
        brand='default brand', 
        color="default color", 
        maxSpeed ="default maxSpeed", 
        model="default model", 
        numberOfTires="default numberOfTires" 
    ) {
		//if (new.target === Vehicle) {
		//	throw new TypeError("Cannot construct Vehicle instances directly");
		//}

		this.brand = brand;
		this.color = color;
		this.maxSpeed = maxSpeed;
		this.model = model;
		this.numberOfTires = numberOfTires;

    }
    
    fruit = "apple";

	drive(){
		// implementation
		console.log("drive()");
	}
	
	start(){
		throw new Error("not implemented: concrete subclass must implement start()");
	}
	
	stop(){
		throw new Error("not implemented");
	}
	
	transport(){
		throw new Error("not implemented");
	}
	
	toString() {
		return this;
	}
}

/* child of the abstract class Vehicle */

class Bicycle extends Vehicle {
	constructor(brand="bicycle default", color, maxSpeed, model) {

        /* static default for bycicles */
		const numberOfTires = 2;

		super(  brand, 
                color, 
                maxSpeed, 
                model, 
                numberOfTires 
        );
		
		this.start = function() {
			console.log("a bicycle just started");
		}

	}
}

let bicycle = new Bicycle("Scott", "black", undefined, "CR1 limited");
console.log(bicycle.toString());

bicycle.start();
bicycle.drive();

console.log("\nTesting the Vehicle:");
const v = new Vehicle();
v.drive();
console.log('v:', v);
