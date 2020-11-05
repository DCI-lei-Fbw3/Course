// Pseudo code Ilya

    // Factorial
    function factorial(n) {
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    }
    console.log(factorial(4));

    /*
    So given the input 4, the steps of execution are as below:
    Check 4 <= 1 ==> false.
    Invoke factorial(3):
        Check 3 <= 1 ==> false.
        Invoke factorial(2):
            Check 2 <= 1 ==> false.
            Invoke factorial(1):
                Check 1 <= 1 ===> true
                Return 1.
            Operate 2 * 1.
            Return 2.
        Operate 3 * 2.
        Return 6.
    Operate 4 * 6.
    Return 24.
    */


    // Fibonacci
    function fib(n) {
        if (n === 0) return 0;
        if (n === 1) return 1;
          
        return fib(n - 1) + fib(n - 2);
    }
    console.log(fib(4));

    /*
    So given the input 4, the steps of execution are as below:
    ***fib(4)-level***
    Check 4 === 0 ==> false.
    Check 4 === 1 ==> false.
    Invoke fib(4-1):
        ***fib(3)-level***
        Check 3 === 0 ==> false.
        Check 3 === 1 ==> false.
        Invoke fib(3-1):
            ***fib(2)-level***
            Check 2 === 0 ==> false.
            Check 2 === 1 ==> false.
            Invoke fib(2-1):
                ***fib(1)-level***
                Check 1 === 0 ==> false.
                Check 1 === 1 ===> true.
                Return 1.
            ***fib(2)-level***
            Invoke fib(2-2):
                ***fib(0)-level***
                Check 0 === 0 ===> true.
                Return 0.
            ***fib(2)-level***
            Operate 1 + 0.
            Return 1.
        ***fib(3)-level***
        Invoke fib(1):
            ***fib(1)-level***
            Check 1 === 0 ==> false.
            Check 1 === 1 ===> true.
            Return 1.
        ***fib(3)-level***    
        Operate 1 + 1.
        Return 2.
    ***fib(4)-level***
    Invoke fib(2):
        ***fib(2)-level***
        Check 2 === 0 ==> false.
        Check 2 === 1 ==> false.
        Invoke fib(1):
            ***fib(1)-level***
            Check 1 === 0 ==> false.
            Check 1 === 1 ===> true.
            Return 1.
        ***fib(2)-level***
        Invoke fib(0):
            ***fib(0)-level***
                Check 0 === 0 ===> true.
                Return 0.
        ***fib(2)-level***
        Operate 1 + 0.
        Return 1.
    ***fib(4)-level***
    Operate 2 + 1.
    Return 3.
    */
