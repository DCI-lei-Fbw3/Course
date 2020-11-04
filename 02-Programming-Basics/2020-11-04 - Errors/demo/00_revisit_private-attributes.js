class Student{
	constructor(name, age, grade){
		//adding some hidden properties

		this.a = 1;

		var _name = name;
		var _age = age;
		var _grade = grade;

		this.getname = function() {
			return _name;
		}
		this.getage = function() {
			return _age;
		}
		this.getgrade = function() {
		    return _grade;
		}
	}

	get b() {
		return this.getgrade() + 2;
	}
	
	log() {
		console.log(this.a);
		console.log(this.getname(), this.getage(), this.getgrade());
	}

}

let student = new Student("Alice", 26, 2);

//console.log(student._age);
student.log();

console.log(student.b);
