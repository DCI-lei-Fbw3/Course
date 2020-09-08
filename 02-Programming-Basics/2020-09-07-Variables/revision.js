 //Welcome Back FbW3!

 //Expressions
    a = 5
    b = 1

    c = a + b

    console.log(c);

// Conditional Expressions
    (condition) ? val1 : val2 //this is just a condition

//Operators

    c = a + b 

    /* x += y means x = x + y
    x -= y means x = x - y
    x *= y means x = x * y
    x /= y means x = x / y
    x %= y means x = x % y
    */ 

    x = 1
    y = 5

    x += y // x = x + y OR x = 1 + 5
    // x = 6 now


    // JS has arithmetic (this one here), string, and logical operators

//Arithematic
    //Modulus (%) --> remainder after dividing two values 

    c = a / b
    c = a % b // divide a by b and the remainder is the answer

    /* Precedence (order of operations) is just the order in which an arithmetic expression 
    executes */

    // e.g. 2 + 4 * 2 = 10

    //Increments

    c = a++ // ++ is an +1 incremenet in JS: this means c is equal to a +1, +1, +1

        // Decrement
    c = a-- // -- is an -1 decremenet in JS: this means c is equal to a +1, +1, +1


//Logical Operators

    // And (&&)
    a && b

    // Or (||)
    a || b

    // Not (!)
    a ! b



// Comparison Operators

    /* Equal (==): returns true if the operands are equal.
    Not equal (!=): returns true if the operands are not equal.
    Greater than (>): returns true if left operand is greater than right operand. Example: x > y returns true if x is greater than y.
    Greater than or equal to (>=): returns true if left operand is greater than or equal to right operand. Example: x >= y returns true if x is greater than or equal to y.
    Less than (<): returns true if left operand is less than right operand. Example: x < y returns true if x is less than y.
    Less than or equal to (<=): returns true if left operand is less than or equal to right operand. Example: x <= y returns true if x is less than or equal to y. */

    a = b // a takes up the value of b here, the values are equal
    a == b // returns true if the operands are equal.
    a === b // are the TYPES of these two equal? the types and values are equal

// Concatenation
 
    "a" + "b" //the answer will be ab


 // Precendence of Operators
    /* The precedence of operators, from lowest to highest is as follows:
    comma ,
    assignment = += -= *= /= %= 
    conditional ?:
    logical-or ||
    logical-and &&
    equality == !=
    relational < <= > >=
    addition/subtraction + -
    multiply/divide * / %
    negation/increment ! ++ --
    call, member () []  */


    a == b * c + d / e  // b * c, then d / e, then +, then check for equality




