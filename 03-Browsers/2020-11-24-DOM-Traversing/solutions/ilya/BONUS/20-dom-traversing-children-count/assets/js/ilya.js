//Get the children of the element with id wrapper and print them to the console as a list.
console.warn(`...::: wrapper's children :::...`)

const wrappersChildren =  [...document.getElementById('wrapper').children];

console.log(wrappersChildren);

// Iterate over them and print their children to the console, as well as how many they are.

// Note: We do not want to do this operation recursively, we just do it for the children of wrapper and its children.

// Note: There are 2 ways to print the number of children - give them both a try.
console.warn(`...::: iterate over wrapper's children :::...`)

wrappersChildren.forEach(child => {
    console.log('child:',child);
    console.log('grandchildren:', child.children);
    console.log('amount of grandchildren using "child.children.length":', child.children.length);
    console.log('amount of grandchildren using "child.childElementCount":', child.childElementCount);
});

/* 
Next, we need to find which from the children of the element with id wrapper has the highest number of classes.

For example, if one element has 2 classes and another has 3 classes - the one with 3 classes has the highest number of classes.

Let's write a function that returns an object that contains the element with the most classes and the total number of classes.
*/
console.warn(`...::: child with most classes :::...`)

const childWithMostClasses = o => {
    const child = o.sort((a,b) => b.classList.length - a.classList.length)[0];
    return {childWithMostClasses: child, amountOfClasses: child.classList.length};
    //string alternative
    //return `class list:\n    ${[...child.classList].join('\n    ')}\nlength: ${child.classList.length}`;
}
console.log(childWithMostClasses(wrappersChildren));