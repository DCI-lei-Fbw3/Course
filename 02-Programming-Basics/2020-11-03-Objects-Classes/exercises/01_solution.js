//Q1
/* class Person{
    constructor(name,age){
        this.Name = name;
        this.Age = age;
        this.describe = function(){
            return this.Name + " ," + this.Age + " years old"
        }
    }
}

var person1 = new Person("Jon",19);
console.log(person1.describe());  */

// Q2

/* class Volume{
    constructor(height,radius){
        this.HEIGHT = height;
        this.RADIUS = radius;
        this.VOLUME = function(){
            return (Math.PI*this.RADIUS*this.RADIUS*this.HEIGHT).toFixed(4);
        }

    }
}

var cylinder = new Volume(5,10);
console.log(cylinder.VOLUME());  */

//Q4

/* class TV{
    constructor(brand){
       this.Volume = 50;
       this.Channel = 1;
       this.Brand = brand; 
           
       this.Channel1 = function(min,max,inc){
        this.min = min || 0;
        this.inc = inc || 1;
        this.max = max; 
               return this.Brand + " is at " + "Channel " + (Math.floor(Math.random()* (50-this.Channel+1) + this.Channel)) + " Volume " +  (Math.floor(Math.random() * (this.max - this.min) / this.inc) * this.inc + this.min) ; 
       }

       this.Reset = function(){
           return "TV set back to Channel " + this.Channel + " and Volume " + this.Volume ;
        
       }
    }
}

var TV1 = new TV("Panasonic");
console.log(TV1.Channel1(0,100,8));  
console.log(TV1.Reset());   */



/* class Student{
    constructor(name, age, grade){
    this.name = name;
    this.age = age;
    this.grade = grade;
    
    this.getName = function() {
    return this.name
    }
    this.getAge = function() {
    return this.age
    }
    this.getGrade = function() {
    return this.grade
    }
    
    }
    //external function accessing the properties 
    getAAge(){
    return this.getAge();
    }
}
    var student1 = new Student ('Illya', 28, 'A');
    console.log(student1.getAAge()); */







    class Student{
        constructor(name, age, grade){
        //adding some hidden properties
        var _name = name;
        var _age = age;
        var _grade = grade;
        
        this.getname = function() {
        return _name
        }
        this.getage = function() {
        return _age
        }
        this.getgrade = function() {
        return _grade
        }
        
        }
        //nothing to add to the prototype object 
        }
        
        var student1 = new Student ('Illya', 28, 'A');
        console.log ("Name: ", student1.getname()); 
        console.log ("Age: ", student1.getage()); 
        console.log ("Grade: ", student1.getgrade()); 
        console.log(student1._age);