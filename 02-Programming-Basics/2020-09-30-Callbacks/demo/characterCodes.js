console.log("a", "a".charCodeAt());
console.log("b", "b".charCodeAt());
console.log("A", "A".charCodeAt());
console.log("B", "B".charCodeAt());

let characters = ["b", "B", "a", "A"];

characters.sort();
console.log(characters);

characters.sort(alphabeticComparison);
console.log(characters);

function alphabeticComparison(a, b) {
	aLowercase = a.toLowerCase();
	bLowercase = b.toLowerCase();

	if (aLowercase < bLowercase) return -1;
	if (aLowercase > bLowercase) return 1;
	return 0;
}
