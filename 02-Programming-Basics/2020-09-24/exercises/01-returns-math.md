# Return: Math

source: https://edabit.com/collection/XpDvYu8QYboB8v6E5

## 1. Return the Sum of Two Numbers

Create a function that takes two numbers as arguments and return their sum.

## 2. Return the Next Number from the Integer Passed

Create a function that takes a number as an argument, increments the number by +1 and returns the result.

## 3. Area of a Triangle

Write a function that takes the base and height of a triangle and return its area.

Note: The area of a triangle is: (base * height) / 2

## 4. Return the Remainder from Two Numbers

There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

Examples:
```
remainder(1, 3)   ➞  1
remainder(3, 4)   ➞  3
remainder(-9, 45) ➞ -9
remainder(5, 5)   ➞  0
```

## 5. The Farm Problem

In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

- chickens = 2 legs
- cows = 4 legs
- pigs = 4 legs

The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

Examples:
```
animals(2, 3, 5) ➞ 36
animals(1, 2, 3) ➞ 22
animals(5, 2, 8) ➞ 50
```

## 6. Convert Hours and Minutes into Seconds

Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

Bonus: Write a function that takes seconds and converts them to days, hours, minutes, seconds

## 8. Check if an Integer is Divisible By Five

Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

## 9. Multiple of 100

Create a function that takes an integer and return true if it's divisible by 100, otherwise return false.

```
divisible(1)    ➞ false
divisible(1000) ➞ true
divisible(100)  ➞ true
```

## 10. Is the Number Even or Odd?

Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.

Bonus: create two functions `isEvent(NUMBER)` and `isOdd(NUMBER)` that return a Boolean.

## 11. Slice of Pie

Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:

1. Total number of slices.
2. Number of recipients.
3. How many slices each person gets.

The function will be in this form:

`equalSlices(total slices, no. recipients, slices each)`

### Examples

```
equalSlices(11, 5, 2)  ➞ true
// 5 people x 2 slices each = 10 slices < 11 slices

equalSlices(11, 5, 3)  ➞ false
// 5 people x 3 slices each = 15 slices > 11 slices

equalSlices(8, 3, 2)   ➞ true
equalSlices(8, 3, 3)   ➞ false
equalSlices(24, 12, 2) ➞ true

```

### Notes
- Return (trivially) true if there are zero people.
- It's fine not to use the entire pie.
- All test parameters are integers.
- Don't forget to return the result.
- If you get stuck on a challenge, find help in the Resources tab.
- If you're really stuck, unlock solutions in the Solutions tab.
