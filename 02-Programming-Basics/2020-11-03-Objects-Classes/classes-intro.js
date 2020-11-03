// Welcome Fbw3!
// Topic: Introduction to Object Classes
// Reading: https://eloquentjavascript.net/06_object.html

//Intro

    /* NOTE:
    Previously, we discussed constructor functions, which are used in the ES5 version of JS, to
    implement the concept of classes. 
    However, in the ES6 version, the CLASS keyword is used, which cleans up syntax for implementing 
    the same concept.
    */

    /* What is a Class?
    Classes are blueprints for creating object propoerties and methods, which could then
    be inherited by the object instances created from that blueprint. 
    This saves us time and effort to create seperate object literals. 
    The ES6 version introduces the CLASS keyword to create classes which are used to implement
    functionality.
    The classes created become the blueprints from which the objects inherit propperties
    */
   

//Declaring a Class
    
    // The following syntax can be  used for declaring classes

    class ClassName{
        constructor(){
            //initializing class propoerties
            //methods can also initialized here
        }
    }

    /* Previously, in ES5:

    function Employee(_name, _age, _designation){
        this.name = _name;
        this.age = _age;
        this.designation = _designation;
        //name a method here
    }
    
    */ 

    /* Differences between Class based and costructor function based implementation 

    - You have new syntax with the Class-based implementation
    - In comparison to putting methods and properties in the body of the function, 
    class-based implementation requires you to put everything in the constructor() function.
   
    
    */

    //creting a class named employee
  /*   class Employee{
        // creating the constructor function
        constructor(name, age, designation){
            //all props defined as they were in the constructor function
            this.name = name;
            this.age = age;
            this.designation = designation;
            //inside methods
            this.displayName = function (){
                console.log("Name of emplyee is ", this.name)
            }
            //outside methods
        }
    }
    //displaying type of "employee" --> function
    console.log(typeof Employee);

    let obj = new Employee("john", 29, "Dev");

    console.log(obj.displayName);
 */

    /* 
    Even though we are using the nested constructor function to initlize properties and
    methods, the underlying concept still remains the same compared to construcor functions.
    
    */
   
// Class Methods  

        /* Notes:
        - Previously, the employee class constructor encapsulated all props and methods. 
        However, methods can also be defined outside the constructor in a class.
        
        - Whenever a mthod is declared inside a class, it gets defined on the prototype 
        of that class. Hence, whenever an object instance accesses a method, it gets taken from 
        the respect class' prototype
        
        Lets have a look at how this works: 
        */
     /*    class Employee{
            // creating the constructor function
            constructor(name, age, designation){
                //all props defined as they were in the constructor function
                this.name = name;
                this.age = age;
                this.designation = designation;
                //inside methods
                this.displayName = function (){
                    console.log("Name of emplyee is ", this.name)
                }
            }
            //outside methods
            getAge(){
                return this.age;
            }    
        }
        

        let employee1 = new Employee("John", 29, "Developer");
        
        employee1.displayName();
        console.log("Age is ", employee1.getAge());
        console.log("designation is: ", employee1.designation);
        console.log(employee1); */

        /* 
        Explanation:
        - The getAge funciton is being defined outside the constructor at line 98.
        - All such methods are stored in the prototype object employee1.
        - All new objects creted from the Emplyee class will have access to all methods defined
        in the class.
        - When called by employee1 object, the method getAge is taken from employee.prototype
        */

// GET/SET Methods in Classes

    /* 
    GET: is getting something FROM an object
    SET: is putting/setting something IN in object (propoerty)
    */
    class Employee{
        // creating the constructor function
        constructor(name, age, designation){
            //all props defined as they were in the constructor function
            this.name = name;
            this.age = age;
            this.designation = designation;
            //inside methods
            this.displayName = function (){
                console.log("Name of emplyee is ", this.name)
            }
        }
        //outside methods

        //defining methods in a class
        //getname  method returning the name if the current object
        get getname(){
            return this.name;
        } 
        
        //setname methods in a class
        // and displaying the name and the number of alphabets in the name
        set setname(val){
            this.name = val;
            console.log("New name is ", this.name);
            console.log(`The name ${this.name} has  ${val.length} alphabets`);
        }
    }


    let employee1 = new Employee("John", 29, "Developer");

    console.log ("Name is ", employee1.getname)   
    console.log("designation is: ", employee1.designation);
    employee1.setname = 'Ted';

    console.log ("Name is ", employee1.getname)   
    
    console.log(employee1);

        /* Explanation:
        Similar to other methods defined in a class, both getname and setname will be 
        defined in the employeee1.prototype object:
        - The getname method return the name propoerty of the current object (employee1)
        - The setname method updates the value of name in the current object and displays botth 
        the new name and the number of alphabets in it 
        */

// Protecting Properties 

    /* Notes

    - In order to hide the class props, they can declared inside the constructor using the var
    keyword, so that they're only accessible through getters/setters, which can also be defined
    inside the constructor
    
    - As discussed, the ES5 version of JS had the convention of unsing underscores (_) prefix
    before values that need to be protected. This is followed in ES6.
    */

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

        var student1 = new Student ('Ilya', 28, 'A');
        console.log ("Name: ", student1.getname());  
        console.log ("Age: ", student1.getage());  
        console.log ("Grade: ", student1.getgrade());  
        console.log(student1.getage());

        /* Explanation
        - As all props are declared locally using var, they can only be accesses through the 
        public get functions.
        - by console.logging the entire student1 object, you will see that the properties declared
        using the VAR keyword will not show in the log. So they are private, or hidden, so to speak.    
        - No need to be picky about your variables, use let or var at your disposle. 
        - The private variables (_name, _age, _grade) are not visible as propoerties of the student1 
        object either in the console, nor in the program.
        - 
        */


        /* 
        To Sum Up/Take-aways:

        - ES6 gives us new systax for creating classes of objects in js --> called Class
        - Class still needs a constructor function within it --> by using the constructor() syntax
        - You can have internal and external methods in the class. The internal methods will be
        passed down to individual objects instances. Whereas, the external methods are available to
        the entire class of objects. 
        - You can make properties private (using private variables) in the constructor so that they
         are not visible in the object passed into the console (and beyond). The these private variables
         will also not be visible to the rest of your program.
        
        */