// Research: What does the string function "substring" do?
console.log('Demonstrate "substring":');
//The substring() method returns the part of the string between the start and end indexes, or to the end of the string.
let aString = "Winnie the Pooh";
console.log("The substring is:", aString.substring(0, 6));

// Research: What does the string function "includes" do?
console.log('Demonstrate "includes":');
//The includes() method determines whether one string may be found within another string, returning true or false as appropriate.
const bString = "Winnie the Pooh likes honey and ponders sitting on the log in front of his tree house.";
const aWord = "piglet";
const bWord = "honey";
console.log("Does the sentence mention Pooh's best friend:", bString.includes(aWord));
console.log("Does this sentence mention Pooh's favorite food:", bString.includes(bWord));

// Research: What does the string function "trim" do?
console.log('Demonstrate "trim":');
//The trim() method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).
var cString = "    Winnie the Pooh lives in Hundred Acrewoods.    ";
console.log(cString.trim());
