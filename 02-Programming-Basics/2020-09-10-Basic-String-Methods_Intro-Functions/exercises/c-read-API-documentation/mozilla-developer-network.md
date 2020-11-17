# Reading Developer's Documentation

## Review Documentation of different standard Objects

1. Math

   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

2. String

   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

### Tasks:
- Get an overview/feeling of what functionality is covered.
- What sections do they have in common?
- Review the description of the following functions and write down their signature with a short description (in your own words) of what they do. In addition please provide a usage example.
  - Math.round()
    - round is used to round up number in a floating number. 

  - Math.abs()
    - abs stands for absolute, which is to convert negative into positive.

  - Math.ceil()
    - ceil is to round a smaller number up to a bigger number.

  - Math.random()
    - random is to generate numbers randomly between 0 to 1.

  - Math.pow()
    - pow means power.

  - Math.sign() => 2's complement, positive is unsigned, sign bit is 0
                   negative is signed, sign bit is negative. 
    - how to calculate unsigned (0-2**n-1).
    - how to calculate signed two's compliment, which is inverting all  
      of the bits and adding 1 to it.
    - sign refers to signed and unsigned.

  - String.match()
    - used to search for match.
    
  - String.substring()
    - does not accept negative indexes.
    - can take 2 parameter, start and end. Without the end it will slice out the rest of the string.

  - String.charAt()
    - used to make query of the chacter at an given indexed position.
    let str = "Winnie the Pooh is flying a kite today."
    whereCharacter = str.charAt(-1);
  
  - String.toLowerCase()  
    - used to make letters lower cases.
  
  - String.trim()
    - used to removed white spaces from both the ends of the given string.
    - What "trim"-variants are available?
    function stringTrim () {
        let str = "  Hello World   ";
        let st = str.trim(); 
        console.log(st);       
    }

    stringTrim();

