// Welcome FbW3!
// Topic: React Hook -- useEffect()
// Reference: https://reactjs.org/docs/hooks-reference.html#usestate


// A recap to React Hooks

    /* 
    - Hooks, genereally, are specially-implemented functions that allow us to add functionality
    React components.
    - According to the React Hooks API, we have certain specific hooks available to us. 
    - The three most commonly used hooks are:
            1) useState()
            2) useEffect()
            3) useContext()
    */

// Hook Rules and Linting
//Reference: https://reactjs.org/docs/hooks-rules.html

    /* 
    - Only Call hooks at the top level of your functional components.
    - Con't call hooks inside loops, conditions, or nexted functions.
    - Instead just use Hooks at the top level of your react functions and all should be fine.
    - What becomes clear quite fast using react is that the execution flow of React is 
    really sensitive. 
    - Hooks are powerful, but can be unintuitive at first, personally I think relying on 
    linting tools is the best way to dea with this. (tool: ESLint)  
*/

// useEffect -- Intro

/* 
- Side effects recap: When changing one entity (function, object, array) changes another
in your program, this effect is known as a side effect.

function one (param1){
    var color = param1;
    function two(){
        console.log(color)
    }
    return two();
}

one("blue")

- The useEffect hook is used for calling functons with side effects within our components.
- From the React hooks API docs above:
 The useEffect hook takes 2 arguments:
    - callback: a function with side effects
    - dependecies: an optional arry containing depency values

- When our component function run, the callback will be called if any dependecies have changed 
since the last time the component funciton ran.

*/

// Example --> in the live-code folder

/* 
- useEffect allows you to control how your the logic of your components has an effect (i.e.
    side effect) on your React application.

- Its quite important to understanc how React Hooks work in the background, this will be
a pain initially, but worth the time you will save debugging Hook issue later on:
https://medium.com/the-guild/under-the-hood-of-reacts-hooks-system-eb59638c9dba

*/

