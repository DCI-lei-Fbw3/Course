# Self Invoked Anonymous Function (SIAF)

see: https://abdulapopoola.com/2014/04/16/the-immediately-invoked-function-expression/

A SIAF requires `arguments.callee()` since that is deprecated from E5 on, they are only of concern in legacy code.

```
(function() {}
    arguments.callee();
)();
```
