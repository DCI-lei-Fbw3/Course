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