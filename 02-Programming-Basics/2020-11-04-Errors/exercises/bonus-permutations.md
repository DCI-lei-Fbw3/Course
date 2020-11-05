# Permutations

Create a function that takes one parameter "word" (string).

And returns an array of strings, which represent every possible combination of the letters of the given word.

Hint: Most likely it will be a recursive approach.

## Signature

`permutate(word: string): array[string]`

## Example

```javascript
permutate("abc");
/* => [
	'abc',
	'acb',
	'bac',
	'bca',
	'cab',
	'cba'
]
```

## Bonus

Make the elements of the returned array unique. In other words, if there are some elements doubled, remove the duplicates.
