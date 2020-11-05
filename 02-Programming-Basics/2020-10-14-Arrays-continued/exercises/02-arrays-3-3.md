0**1. Where Have My Four Letter Words Gone?**
Create a function that takes an array of strings. Return all words in the array that are exactly four letters.

Examples:

* isFourLetters(["John", "James", "Jack", "Jeanne"]) ➞ ["John", "Jack"]
* isFourLetters(["Tomato", "Corn", "Lettuce"]) ➞ ["Corn"]
* isFourLetters(["Dog", "Cat", "Deer"]) ➞ ["Deer"]

**2. Months.**
Create a function that takes a number (from 1 to 12) and return its corresponding month name as a string.

Examples:
* monthName(3) ➞ "March"
* monthName(12) ➞ "December"
* monthName(6) ➞ "June"

**3. Amplify the Multiples of 4.**
Create a function that takes an integer and returns an array of integers ascending from 1 to the given number, where:

* For each number in the array that can be evenly divided by 4, that number is amplified by 10 (i.e. return 10 times the number).
* If the number cannot be divided evenly by 4, simply return the number.
* The given integer will always be equal to or greater than 1.
* Include the given number (the number in the parameters).

Examples:
* amplify(4) ➞ [1, 2, 3, 40]
* amplify(3) ➞ [1, 2, 3]
* amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]

**4. One is not like the others...**
Create a function that takes an array of numbers and return the number that's unique.

Examples:
* unique([3, 3, 3, 7, 3, 3]) ➞ 7
* unique([0, 0, 0.77, 0, 0]) ➞ 0.77
* unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0

**5. Word Ranking.**
Create a function that takes a string of words and returns the highest scoring word. Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3, etc.
* The returned string should only contain alphabetic characters (a-z).
* Preserve case in the returned string (see 4th example above).

Examples:
* wordRank("The quick brown fox.") ➞ "brown"
* wordRank("Nancy is very pretty.") ➞ "pretty"
* wordRank("Check back tomorrow, man!") ➞ "tomorrow"
* wordRank("Today is Wednesday.") ➞ "Wednesday"

**6. c4n y0u r34d th15?**
Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string. **NB:** for your program to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.

Examples:
* hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
* hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
* hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"

## Bonus Questions

**1. Is it Symmetrical?**
Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. **NB:** A number is symmetrical when it is the same as its reverse.

Examples:
* isSymmetrical(7227) ➞ true
* isSymmetrical(12567) ➞ false
* isSymmetrical(44444444) ➞ true
* isSymmetrical(9939) ➞ false
* isSymmetrical(1112111) ➞ true

**2. snake_case ➞ camelCase**
Create a function toCamelCase() that takes a single string in `snake_case` and converts it into `camelCase`.

Examples:
* toCamelCase("hello_world") ➞ "helloWorld"
* toCamelCase("javascript_is_fun") ➞ "javaScriptIsFun"

**3. Pig Latin Translation.**
Create a function that takes a string of words and moves the first letter of each word to the end of it, then adds 'ay' to the end of the word. This is a basic form of "Pig Latin".

* Move the first letter of each word to the end of the word.
* Add "ay" to the end of the word.
* Words starting with a vowel (A, E, I, O, U) append "way" to the end instead.

**Extra Practice**
* Preserve proper capitalization as in the examples below.

Examples:
* pigLatin("Cats are great pets.") ➞ "Atscay areway reatgay etspay."
* pigLatin("Tom got a small piece of pie.") ➞ "Omtay otgay away allsmay iecepay ofway iepay."
* pigLatin("He told us a very exciting tale.") ➞ "Ehay oldtay usway away eryvay excitingway aletay."
