// !indexOf

// let arr = ["hi", "how", "are", "you", "today"];
// let newArr = arr.reverse();
// for (let i = 0; i < newArr.length; i++) {
// 	var item = newArr[i];
// 	console.log(item, newArr.indexOf(item));
// }

// !------reverseArray
// let names = ["Alice", "Bob", "Eve"];

// function reverseArray(arr) {
// 	var newArray = [];
// 	for (var i = arr.length - 1; i >= 0; i--) {
// 		newArray.push(arr[i]);
// 	}
// 	return newArray;
// }

// console.log(reverseArray(names));

// !------SumArray

// let arr2 = [1, 2, 3, 4, 5, 6];
// let sum = 0;
// for (let i = 0; i < arr2.length; i++) {
// 	sum += arr2[i];
// 	console.log(sum);
// }

// !------countingBottles
// let bottles = ["one", "two", "three", "four", "five"];
// for (let x = 0; x < bottles.length; x++) {
// 	const counting = bottles[x];
// 	console.log(`There are ${counting} of beer on the wall`);
// }

// !------oddOrEven

// for (let y = 0; y <= 20; y++)
// 	y % 2 === 0 ? console.log(`${y} is even`) : console.log(`${y} is odd`);

// !------multiplicationTables

// const multi = () => {
// 	for (var x = 1; x <= 10; x++) {
// 		for (var z = 0; z < 10; z++) {
// 			console.table(`${x} X ${z} = ${x * z}`);
// 		}
// 	}
// };

// multi();

// let number = 9;
// for (let i = 1; i <= 10; i++) {
// 	result = i * number;
// 	console.log(`${number} * ${i} = ${result}`);
// }

// const multi = () => {
// 	for (var x = 1; x <= 10; x++) {
// 		let line = "";
// 		for (var z = 0; z < 10; z++) {
// 			line += x * z + " ";
// 		}
// 		console.log(`${line}`);
// 	}
// };
// multi();

// ! isPalindrome

// const isPalindrome = (word) => {
// 	let reverseWord = "";
// 	for (let i = word.length - 1; i >= 0; i--) {
// 		element = word[i];
// 		reverseWord = reverseWord.concat(element);
// 	}
// 	if (word === reverseWord) {
// 		console.log(`${word} is Palindrome word`);
// 	} else console.log(`${word} is not Palindrome word`);
// };

// isPalindrome("madan");

// ! chessboard

// var cube = "";
// var size = 9; // prompt("enter the height and width");
// for (var y = 0; y < size; y++) {
// 	for (var x = 0; x < size; x++) {
// 		(x + y) % 2 == 0 ? (cube += "#") : (cube += " ");
// 	}
// 	cube += "\n";
// }
// console.log(cube);

// !Setup Pairs for Pair Programming

// let boys = [
// 	"Aaran",
// 	"Amar",
// 	"Aarez",
// 	"Aarman",
// 	"Aaron",
// 	"Samatar",
// 	"Sambrid",
// 	"Sameer",
// 	"Sami",
// 	"Samir",
// 	"Sami-Ullah",
// 	"Salim",
// 	"Samuel",
// 	"Samuela",
// ];
// let girls = [
// 	"Emily",
// 	"Hannah",
// 	"Madison",
// 	"Ashley",
// 	"Sarah",
// 	"Alexis",
// 	"Samantha",
// 	"Jessica",
// 	"Elizabeth",
// 	"Taylor",
// 	"Lauren",
// 	"Alyssa",
// 	"Kayla",
// 	"Sanaullah",
// ];

// let boysNames = [];
// let girlsNames = [];

// for (let b = 0; b < boys.length; b++) {
// 	boysNames = boys[b];

// 	for (let g = 0; g < girls.length; g++) {
// 		girlsNames = girls[g];

// 		if (boys.indexOf(boys[b]) === girls.indexOf(girls[g])) {
// 			console.log([boysNames, girlsNames]);
// 		}
// 	}
// }

// var pairs = {};

// var i;
// for (i = 0; i < boys.length; i++) {
// 	pairs[girls[i]] = boys[i];
// }
// console.log(pairs);

// let students = ["Alice", "Bob", "Eve", "Tom", "Nici"];

// let pairs = [];

// for (let i = 0; i < students.length; i++) {
// 	for (let j = 0; j < students.length; j++) {
// 		if (i > j) pairs.push(students[i] + ", " + students[j]);
// 	}
// }

// for (let i = 0; i < pairs.length; i++) {
// 	console.log(pairs[i]);
// }

// ! numbers

// var array = [];
// for (let index = 100; index <= 1000; index = index + 100) {
// 	array.push(index);
// }
// console.log(array.join(" "));

// var array2 = [];
// for (let index = 0; index <= 10; index += 2) {
// 	array2.push(index);
// }
// console.log(array2.join(" "));

// var array3 = [];
// for (let index = 3; index <= 15; index += 3) {
// 	array3.push(index);
// }
// console.log(array3.join(" "));

// var array5 = [];
// for (let index = 9; index >= 0; index--) {
// 	array5.push(index);
// }
// console.log(array5.join(" "));

// var array4 = [];
// for (let index = 0; index < 3; index++) {
// 	for (let index = 0; index < 5; index++) {
// 		array4.push(index);
// 	}
// }
// console.log(array4.join(" "));

// let result = "";
// for (let i = 1; i <= 4; i++) {
// 	for (let j = 1; j <= 3; j++) {
// 		result += i + " ";
// 	}
// }
//   console.log(result);

// ! Alarm

// for (let index = 0; index <= 10; index++) {
// 	const THRESHOLD = 0.15;
// 	let randomNumber = Math.random().toFixed(2);
// 	let result = (randomNumber - THRESHOLD).toFixed(2);
// 	console.log(
// 		`Attention: current value ${randomNumber} exceeds the threshold ${THRESHOLD} by ${result}.`
// 	);
// }

const threshold = 0.2;                            //Define the threshold
for (let i = 0; i < 10; i++) {                    //Create a loop to run 10 times
  let value = Math.random();                      //Assign a random number to value
  if (value > threshold) {                        //Check if value exceeds the threshold
    let difference = (value - threshold);         //Assign the difference to a variable
    let stars = Math.floor(difference / 0.1);     //Work out how many stars we need
    let starString = "";                          //Create a string to assign stars to
    for (let x = 0; x < stars; x++) {             //Loop through the number of stars we need
      starString += "*"                           //Adding that number of stars to the string
    }
    console.log(`${starString} Attention: current value ${value} exceeds the threshold ${threshold} by ${difference}.`)  //console log all of it
  }
}


