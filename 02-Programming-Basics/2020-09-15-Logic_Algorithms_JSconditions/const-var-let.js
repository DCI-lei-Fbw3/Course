/* Welcome FbW3! Here we will look into constants, and the difference between let vs var 
in terms of their usage in scopes
*/

//Constants
    const firstConstant = 34;

    firstConstant = 67; //cannot reassign

    const firstConstant = "adalk"; // cannot redeclare

    /* Everything else, the way you would declare, assign and use a 
    a CONST is the same as a variable.
    */

//Let vs Var

    // 1) functions, loops, if-statements --> they all have a scope
    // 2) SCOPE is a block of code between { } "curly braces"
    // 3) there is always a Global scope, and then there are various local scopes
    // 4) Depending on the scope, var and let variable behave differently

// The problem with with VAR variables

        var hello = "hello";  //global hello
        var times = 4

       if (times > 3){
        var hello = "this is a new hello!" // local scope

       }
       console.log(hello);  //logs "this is a new hello"
        // VAR variables 

// How LET variables solved this problem

        // Global LET variables cannot be overwritten in a local scope

        let hello = "hello";  //global hello
        let times = 4;

       if (times > 3){
        let hello = "this is a new hello!" // local scope

       }
       console.log(hello);  //logs "hello"

        // The biggest difference with LET and VAR is that LET variables are block (locally) scoped

        //Just like VAR, a variable declared with LET can be updated within its scope
        // *** Unlike VAR, a LET varible cannot be re-declared within its scope.

        let hello = "hello"; // declaration -> ' let hello ' and initialisation -> ' hello = "hello" '
        hello = "this cannot happen" //reassignment: LET variables can be reassigned
        let hello = "whatever is next" // re-declaration won't work 

        
        
/*         However, if the same variable is defined in different scopes, 
            there will be no error
 */

        let hello = "hello";  //global hello
        let times = 4;
        
       if (times > 3){
        let hello = "this is a new hello!" // local scope
        console.log(hello); // --> logs: this is a new hello!
       }
       console.log(hello); // -->  logs: hello

       /* 
       So just in case you missed the differences, here they are:

       - VAR declarations are globally scoped or function scoped while LET amd CONST are block scoped
       - VAR variables can be updated and re-declared within its scope; LET
       varibales can be updated but not re-declared; CONST variables can neither 
       be updated nor re-decalared.
       - They are all hoisted to the top of their scope. But VAR variables are initialised
       with UNDEFINED,  LET and CONST variables are not initialised.
       - While VAR and LET can be decalared without being initialized, CONST must be
       initilized during declaration. 
       
       
       */

