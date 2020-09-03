Notes to myself:

- try breakout-rooms with 3x3, and 1x2 students

- Robert Martin: "Clean Code"

## Topics

### Short Circuiting

```
> false && true
false
// you know what this becomes after reading "false &&"

> true || false
true
// your know what this becomes after reading "true ||"

> name = ""
''
> fullname = name && "not set"
''
> fullname
''
> name && "not set"? "1" : "2"
'2'
> name = "Thomas"
'Thomas'
> fullname = name && "not set"
'not set'
> fullname = "not set" && name
'Thomas'
> "not set" && name && true
true
> "not set" && name && false
false
> false && "not set" && name
false
> "" && false && "not set" && name
''
> false && "" && false && "not set" && name
false
> true && "" && false && "not set" && name
''
> true || ""
true
> false || "test"
'test'
> false || ""
''
> false || "" || undefined || 0
0
> false || "" || undefined || 0 || "last"
'last'
> false || "" || "potatoe" || 0 || "last"
```

## Unary Operators

- `!` Not/Negation
```
   > ! true
   false
   > ! false
   true
```

- `-` Minus
```
   > a = 10
   10
   > -a
   -10
   > a
   10
   > -a
   -10
```

- `typeof`
```
   > typeof a
   'number'
   > typeof "a"
   'string'
   > typeof "hi"
   'string'
   > typeof Infinity
   'number'
   > typeof NaN
   'number'
   > typeof null
   'object'
   > typeof undefined
   'undefined'
```