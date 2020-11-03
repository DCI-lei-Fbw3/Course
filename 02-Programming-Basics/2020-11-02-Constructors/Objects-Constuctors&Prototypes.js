// Welcome FbW3!
// Topic: Objects: Constructor functions (or Constructors)  
// Reading: https://medium.com/better-programming/prototypes-in-javascript-5bba2990e04b


//Intro to Constructors
    /* 
    We have previously talked about the idea that FUNCTIONS are also objects in JavaScript.
    This is because, just like objects, they have their own properties and methods.
    Functions can also be used to construct objects.
    The type functions are called constructor functions. 
    */

    /* 
    Why should we use constructor functions?
    I have step back into how we have been declaring objects so far

    Using object literals:
    */

    var employee1 = {
    name: 'Taimur Khan',
    age: '26',
    designation: 'Class Clown',
    displayName(){
        console.log("My name is", this.name);
    }
    }

    employee1.nickName = 'Neo';
    console.log(employee1.nickName);

    /* 
    Now what if I want to create a similar object but with different property values.
    There are three ways:
    1) I manually create a new object and change its property values,
    2) I can clone the EMPLOYEE1 object, and change the porpoerty values for the cloned object
    3) I can write a constructor function, which (when called) will construct a new object with
    similar properties.
    */

// Syntax of constructors

    /* 
    Wouldn't it be nice to have a blueprint for the employee object? SO that when you
    call this blueprint, all future emplyee objects will take the blueprint as its
    base.
    This is what constructor functions do: they give you a blueprint for objects.

    - This concept disussed above is basically that of classes.
    - Classes in JS were not a thing till ES6.
    */

    function FunctionName(para1, param2, ...){
        //all the properties of the object are initilised here
        // functions to  be provided by objects are also defined here
    }

    /* 
    Explanation of syntax

    - As a convetion, the constructor function name should be capitalized with
    camel case.
    - The body of this function is the constructor part as it initializes the propoerties
    by stting them as equal to the respective parameters being passed into the function.
    
    */

    // example

   /*  function Employee(_name, _age, _designation){
        this.name = _name;
        this.age = _age;
        this.designation = _designation;
    }
 */
    /* 
    Explanation:
    - The name of the constructor function in Employee
    - Employee passes _name, _age, and _designation parameters
    - From line 67-69, the props of the objectd are being initialised as their values
    are set to be the parameters pased into the function. 
    - All the objects created from Employee will contain these props.
    */

//Syntax of new objects using constructors

    // var ObjectName = new ConstructorFunction(arg1, arg2, ..)

    /* 
    - The syntax above is how you create new objects from constructors
    - This will create a new object, called ObjectName, with the properties from the constructor
    */
   
    let employee2 = new Employee('Joe', 22, 'Developer');

    console.log ("Employee 2 is:", employee2.name);
    console.log (employee2.name , "is", employee2.age, "years old.");
    console.log (employee2.name , "is a", employee2.designation);


    /* Adding new properties:
    you can add new properties to your constructed objects the same way as you would with object
    literals.
    For example:
    */
    employee2.nickName = "Neo";
    console.log(employee2.nickName);


    /* Adding new methods:
    you can add new methods to your constructed objects the same way as you would with object
    literals.
    For example:
     */
    employee2.displayName = function(){
        console.log(this.name)
    }


    /* 
    Observations:
    - If you add new prooerties to a constructed object, your constructor function will not 
    have a new parameter added to it automatically.
    - This means, that whenever you will create new object with the constructor function,
    the new object will not have the new added propoerty from the previous object constructed.
    */

   
// Prototype Objects

    /* 
    Previously, in JS you could not add new props or methods to constructed objects
    the same way as you would to object literals. However, this seems to have changed with
    the newer version of JS. 
    Also previously,  there was a simpler approach for adding new methods/propoerties to a 
    constructor function. This method is using "Prototype Objects" in JS.

    Whenever you create a new object using a constructor function, the new object will also 
    have a prototype object in it. This prototype object is created automatically 
    by the JS engine.  
    */


    let employee3 = new Employee('Neo', 33, 'Developer'); // employee3, like employee2, will have a protype object in it

    /* 
    - Any object instance created fro a constructor function has a hidden porpoerty: Prototype.
    - Whenever a constructor funciton is initialized, it also gets a PROTOTYPE propoerty assigned to
    it.
    - The prototype propoerty of a constructor function is an object itself, containing further properties:
    hence it also known as a Protoype Object
    */

    // to access the prototype object

    Employee.prototype; // access the prototype object of the Employee constructor

    /* 
    The prototype object consists of two further properties:
    - The constructor which point back to the Employee constuctor function
    - The _proto_ porperty. You can ignore the _proto_ for now.   
    */

    //Why use Prototype Objects for Additions (of props & methods)?


    /* 
    The important conclusion:
    All objects created from constructor functions share its Prototype Object.
    
    Due to this, if any property/methods are added to the prototype object of the constructore function,
    they can be accessed by the objects created from it. 

    This is why prototypes should be used for additons in the constructor functions!!!    
    */

![Flow diagram showing relation between constructors and prototypes](https://github.com/DCI-lei-Fbw3/Course/blob/master/02-Programming-Basics/2020-11-02-Constructors/protoypeObject.png)

//Using Prototype Objects - Adding Properties to Prototypes

    /* 
    Notes:
    We already dicussed why props should be addded to the prototype object of a 
    constructor function, instead of individual.
    */

    //Syntax example
    ConstructorFunctionName.prototype.PropertyName = PropertyValue;

    function Employee(_name, _age, _designation){
        this.name = _name;
        this.age = _age;
        this.designation = _designation;
        //name a method here
    }

    Employee.prototype.company = 'Google';

    var employee4 = new Employee('Adam', 35, 'Developer');
    console.log ("Employee 4 is:", employee4.name);
    console.log (employee4.name , "is", employee4.age, "years old.");
    console.log (employee4.name , "is a", employee4.designation);
    console.log (employee4.name , "works at", employee4.company);

    var employee5 = new Employee('Jane', 25, 'Senior Developer');
    console.log ("Employee 5 is:", employee5.name);
    console.log (employee5.name , "is", employee5.age, "years old.");
    console.log (employee5.name , "is a", employee5.designation);
    console.log (employee5.name , "works at", employee5.company);

//Using Prototype Objects - Adding Methods to Prototypes
    
    //Syntax example
    ConstructorFunctionName.prototype.MethodName = function(){
        //method body
    };

    Employee.prototype.displayName = function(){
        return this.name;
    }

    var  employee6 = new Employee('Sana', 38, 'UX Designer');
    console.log ("Employee 6 is:", employee5.displayName());
