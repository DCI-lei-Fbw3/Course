# Return: Strings

## 1. Is the String Empty?

Create a function that returns true if a string is empty and false otherwise.

## 2. Compare Strings by Count of Characters

Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

## 3. Concatenate First and Last Name into One String

Given two strings, firstName and lastName, return a single string in the format "last, first".

## 4. Name Greeting!

Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.

### Examples
```
helloName("Gerald") ➞ "Hello Gerald!"
helloName("Tiffany") ➞ "Hello Tiffany!"
helloName("Ed") ➞ "Hello Ed!"
```

## 5. Check String for Spaces

Create a function that returns true if a string contains any spaces.

### Examples
```
hasSpaces("hello")        ➞ false
hasSpaces("hello, world") ➞ true
hasSpaces(" ")            ➞ true
hasSpaces("")             ➞ false
hasSpaces(",./!@#")       ➞ false
```

## 6. Char-to-ASCII

Create a function that returns the ASCII value of the passed in character.

### Examples
```
ctoa("A") ➞ 65
ctoa("m") ➞ 109
ctoa("[") ➞ 91
ctoa("\") ➞ 92
```

Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt

## 7. Case Insensitive Comparison

Write a function that validates whether two strings are identical. Make it case insensitive.

### Examples
```
match("hello", "hELLo") ➞ true
match("motive", "emotive") ➞ false
match("venom", "VENOM") ➞ true
match("mask", "mAskinG") ➞ false
```

## 8. Check if the Same Case

Create a function that returns true if an input string contains only uppercase or only lowercase letters.

### Examples
```
sameCase("hello") ➞ true
sameCase("HELLO") ➞ true
sameCase("Hello") ➞ false
sameCase("ketcHUp") ➞ false
```

## 9. Remove the First and Last Characters

Create a function that removes the first and last characters from a string.

### Example:
```
removeFirstLast("hello") ➞ "ell"
```

## 10. Strange Pair

A pair of strings form a strange pair if both of the following are true:

- The 1st string's first letter = 2nd string's last letter.
- The 1st string's last letter = 2nd string's first letter.

Create a function that returns true if a pair of strings constitutes a strange pair, and false otherwise.

### Examples
```
isStrangePair("ratio", "orator") ➞ true
// "ratio" ends with "o" and "orator" starts with "o".
// "ratio" starts with "r" and "orator" ends with "r".

isStrangePair("sparkling", "groups") ➞ true
isStrangePair("bush", "hubris")      ➞ false
isStrangePair("", "")                ➞ true
```

### Note

It should work on a pair of empty strings (they trivially share nothing).
