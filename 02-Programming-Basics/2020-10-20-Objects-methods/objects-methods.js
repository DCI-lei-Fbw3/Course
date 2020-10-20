//Let's talk about objects

    // Iterating over Object Properties

            /* 
            The FOR...IN loop present in JS can be used in aorder to iterate 
            over any object's properties
            
            */

        for (iteratorName in objectName){
            //some actions happening
        }

        // For example -- without nested objects

        var employee = {
            //define the properties here
            // set data values
            //these below are the properties of the object
            name: 'taimur',
            age: 26,
            designation: 'Trainer',
            //function to display name of the employee
            //these below are the methods of the object
            displayName(){
                console.log("Name is Taimur")
            }
        }

        // using for...in to iterate over the properties
        for (x in employee) {
            console.log(x);
        }

        // For example -- with nested objects

        var employee = {
            //define the properties here
            // set data values
            //these below are the properties of the object
            name: {
                firstName: 'Taimur',
                lastName: 'Khan',
            },
            age: 26,
            designation: 'Trainer',
            //function to display name of the employee
            //these below are the methods of the object
            displayName(){
                console.log("Name is Taimur");
            }
        }

        let firstProp = employee.name.lastName;
        let secondProp = employee.age;
        let thirdProp = employee.designation;

        // using for...in to iterate over the properties
        for (x in employee) {

            if(x === "name")console.log(employee.name['lastName']);
        }

            // Calling Functions
            
            /* 
            The function prop inside an object can be called using the dot operator as
            well as square brackets
            */

            // using DOT notation 
            objectName.functionName()

            // using BRACKET notation
            objectName['functionName']()

    // Examples

            var shape = {
                name: 'square',
                sides: 4,
                displaySides(){
                    console.log("Square has 4 sides")
                },
                displayName(){
                    console.log("Square is square")
                }

            }
        // calling function using dot operator
        shape.displayName()

        // calling function using square brackets 
        shape['displayName']()

        // calling function using dot operator
        shape.displaySides()

        // calling function using square brackets 
        shape['displaSides']()


  // Setting Values Using Dot Notation

        var employee1 = {
            //define the properties here
            // set data values
            //these below are the properties of the object
            name: {
                firstName: 'Taimur',
                lastName: 'Khan',
            },
            age: 26,
            designation: 'Trainer',
            //function to display name of the employee
            //these below are the methods of the object
            displayName(){
                console.log("Name is Taimur");
            }
        }

        console.log("The age of the employee is: ", employee1.age);

        employee1.age = 27;

        console.log("The new age of the employee is: ", employee1.age);


    // Adding Properties with DOT Notation

        // using the employee1 object from above

        employee1.university = 'Skidmore College';

        console.log("The university of the employee was: ", employee1.university);

        console.log(employee1);

//  Settting properties using Square Brakcets

        employee1['age'] = 28;

        console.log("The new age of the employee is: ", employee1.age);


        employee1['location'] = 'Halle';

        console.log(employee1['location']);
        
        console.log(employee1);

// Deleting Properties

        /* 
        Props can deleted or removed from an object using the DELETE 
        operator. Both the prop and the value will get deleted. So if
        you want to use the prop again, you will have to redefine it.
        */

        //Example

        var employee2 = {
            //define the properties here
            // set data values
            //these below are the properties of the object
            name: {
                firstName: 'Taimur',
                lastName: 'Khan',
            },
            age: 26,
            designation: 'Trainer',
            university: 'Skidmore College',
            //function to display name of the employee
            //these below are the methods of the object
            displayName(){
                console.log("Name is Taimur");
            }
        }

        //deleting "university" property
        delete employee2.university;

        console.log("The university of the employee was: ", employee2.university);

        /* 
        Similarly you can delete function properties
        */

        delete employee2.displayName;

        employee2.displayName();

        /* IMPORTANT NOTE
        The DELETE operator has no effect on the variables and functions 
        in the global scope. It can only delete object props and functions.
        */


// Methods in Objects

/* 
The properties that are functions, are known as Object Methods
*/

    // THIS operator

            /* 
            Let's consider a scenario where you have an object named employee
            with certain props (name, age, and designation). We also have a
            displayName function as a method for the employee object.
            What if you are required to write an object method called displyDesignation(),
            that returns the designation prop of the employee object.
            */

        var employee3 = {
            //define the properties here
            // set data values
            //these below are the properties of the object
            name: {
                firstName: 'Taimur',
                lastName: 'Khan',
            },
            age: 26,
            designation: 'Trainer',
            university: 'Skidmore College',
            //function to display name of the employee
            //these below are the methods of the object
            displayDeisgnation(){
                return designation
            }
        }
            //this will genereate an error
            console.log(employee3.displayDeisgnation());

            // designation is not defined

            /* 
            The reason we get this error, is because JS does not let us
            access object props from within the object. This is beacuse
            JS does not allow us to refer to an objectName from within the object.
            
            So how do we refer to an object within itself?

            To be able to access an object's properties from within the object,
            we can use the THIS operator
            */

            // Example
            
            var employee4 = {
                //define the properties here
                // set data values
                //these below are the properties of the object
                name: {
                    firstName: 'Taimur',
                    lastName: 'Khan',
                },
                age: 26,
                designation: 'Trainer',
                university: 'Skidmore College',
                //function to display name of the employee
                //these below are the methods of the object
                displayDeisgnation(){
                    return this.designation //you can refer to a prop using THIS operator
                }
            }
                console.log(employee4.displayDeisgnation());
    
            // Explanation

            /* 
            
            In the example above, line 265 translates to "returning the DESIGNATION
            property of THIS object". Here, THIS refers to the employee4 object
            */
           var employee4 = {
            //define the properties here
            // set data values
            //these below are the properties of the object
            name: {
                firstName: 'Taimur',
                lastName: 'Khan',
            },
            age: 26,
            designation: 'Trainer',
            university: 'Skidmore College',
            //function to display name of the employee
            //these below are the methods of the object
            displayInfo(){
                return "First Name is " + this.name.firstName + "\n Age is " + this.age + "\n Designation is "  + this.designation
            }
        }
            console.log(employee4.displayInfo());

    
    // Setting Values of Props Using THIS


            /* 
            Till now we were using THIS to get a property within an object;
            however, we can also use THIS to set the value of a prop in an object.
            */

            var employee5 = {
                //define the properties here
                // set data values
                //these below are the properties of the object
                name: {
                    firstName: 'Taimur',
                    lastName: 'Khan',
                },
                age: 26,
                designation: 'Trainer',
                university: 'Skidmore College',
                //function to display name of the employee
                //these below are the methods of the object
                setDesignation(paramValueofDesig){
                    this.designation = paramValueofDesig;
                },
                displayInfo(){
                    return "First Name is " + this.name.firstName + "\n Age is " + this.age + "\n Designation is "  + this.designation
                },
            }

                employee5.setDesignation('Not working');
                console.log(employee5.displayInfo());

            /* 
            Explanation:

            As seen in the code above,

            - In line 318, the function setDesignation(paramValueofDesig) is defined
            with paramValueofDesig being passed to it as a parameter.
            - In line 319, the value of designation prop is set as equal to paramValueofDesig
            - In line 326, the setDesignation method is called with an argument.
            Hence, the original value of designation is updated.
            */


// Using GET Keyword

            var employee6 = {
                //define the properties here
                // set data values
                //these below are the properties of the object
                name: {
                    firstName: 'Taimur',
                    lastName: 'Khan',
                },
                age: 26,
                designation: 'Trainer',
                //function to display name of the employee
                //these below are the methods of the object
                displayDesignation(){
                    return this.designation
                }
            }
            console.log(employee6.displayDesignation()); // you are calling the method displayDesignation as a method function, not as a prop

            /* 
            In the example with employee6 object, we have a displayDesignation method,
            which is used to get the values from the desingation prop. 
            JS gives us a different way of getting values in methods.
            */

            // Example

            var employee7 = {
                //define the properties here
                // set data values
                //these below are the properties of the object
                name: {
                    firstName: 'Taimur',
                    lastName: 'Khan',
                },
                age: 26,
                designation: 'Trainer',
                //function to display name of the employee
                //these below are the methods of the object
                get displayDesignation(){
                    return this.designation
                }
            }
            console.log(employee6.displayDesignation)

            /* 
            Explanation:
            With the GET operator, you call the method function as you would any other
            property. This is purely a "make-it-easy-to-read" thing. 
            Don't use the GET keyword if you want to pass arguments to your method function

            */

// SET Keyword

        var employee8 = {
            //define the properties here
            // set data values
            //these below are the properties of the object
            name: {
                firstName: 'Taimur',
                lastName: 'Khan',
            },
            age: 26,
            designation: 'Trainer',
            //function to display name of the employee
            //these below are the methods of the object
            setDesignation(desig){
                this.designation = desig;
            }
            
        }
        employee8.setDesignation("No designation");

        // Let's do this using the SET keyword

        var employee9 = {
            //define the properties here
            // set data values
            //these below are the properties of the object
            name: {
                firstName: 'Taimur',
                lastName: 'Khan',
            },
            age: 26,
            designation: 'Trainer',
            //function to display name of the employee
            //these below are the methods of the object
            set setDesignation(desig){
                this.designation = desig;
            }
        }
        employee9.setDesignation = "Some new role";
        console.log(employee9.designation);

        /* Explanation

        Using the SET keyword changes the way setDesignation is used in order to set the
        DESIGNATION (that's the prop) value. 

        Previously, the value of designation was set by the approach shown in line 
        410 of the employee8 object. 

        However, looking at line 430 of the employee9 object above shows that when
        the SET keyword is used, setDesignation sets the values of designation 
        similarly to how any other property value would be set.


        */

        //
       var employee10 = {
        //define the properties here
        // set data values
        //these below are the properties of the object
        name: {
            firstName: 'Taimur',
            lastName: 'Khan',
        },
        age: 26,
        designation: 'Trainer',
        //function to display name of the employee
        //these below are the methods of the object
        set setDesignation(desig){
            this.designation = desig;
        },
        set setName(first){
            this.name.firstName = first;
        }
    }
    employee10.setDesignation = "Some new role";
    employee10.setName = "John", "Doe";

    console.log(employee10.name.firstName, employee10.name.lastName);