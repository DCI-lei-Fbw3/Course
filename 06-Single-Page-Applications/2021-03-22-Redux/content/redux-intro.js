//Weclcome FbW3
//Topic: Redux -- Intro 
//Reference: https://redux.js.org --> Redux
//Reference 2: https://react-redux.js.org --> React-Redux

//Redux 

/* 
- Redux itself has nothing to do with React per say, it has a standalone tool.
- However, we do have a React specific bindings of Redux called "React-Redux".
- I have heard many times, that Redux is the biggest barrier to writing React apps for devs.
- Why should we use Redux at all, if its so complicated?
    - This is definitely not because everyone of the internet using it.
    - The reason Redux is useful is that it solves a problem. 
    - This problem is not "state management". That is super vague, since React already
    does state management. Redux does help to manage state, but that'S not the problem it
    solves.
    - Redux, is primarily, about data flow. It tries to streamline how data moves in 
    your React application. 
- Data flows in React from the props down to the component. Think of this as electricity, conencted by wires
to the components. Data flows down and up these wires, but these wires cannot be run through thin air-
they have to conencted between each component. 
- Beacause redux is so good at managing how data flows between your components, it is quite useful
as soon as you have tons and tons components relying on the same data.
*/


//How dow Redux work
//Reference: https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#redux-terminology
    /* 
    - Redux has the following elements:
        1) Store: this is the "box" that manages any updates to the state 
        2) Reducer: this is the callback/function that literally updates the state based on events
        3) Dispatcher: thhe dispatcher is responsible for communicating to the reducer to make certain changes
        4) Actions:  You can think of an action as an event that describes something that happened in the application.

    - The dispatcher dispatches an action to the reducer, the reducer takes the payload from the dispatcher and updates the state with the payload data. The reducer and the state sit in the redux store. 
    */

    //Persisting Store data in Redux w7 localStorage API

    /* 
    - In some use cases, the state of a user's data needs to be persisted, i.e. the browser 
    needs to remember in what state the user left your React application if they closed the
    borwser tab or window. 
    - There are many third-party tools that allow you to persist your redux data in the browser,
    however the simplest one to begin with is good ol' localStorage. 
    - LocalStorage gives you a "database" in the browser to preserve the state of your Redux Store.
    - A good example on how to persis Redux Store in localStorage can be seen here: https://www.geeksforgeeks.org/how-to-persist-redux-state-in-local-storage-without-any-external-library/    
    */
