const {createStore} = require('redux');


//Just the initial state of our data

const initialState = {
    age: 27,
}

//Reducer: Follow the basic rules of reducers: (state, action) => newState, and update state immutably rather than mutating it directly.
//1st argument: Default parameter from ES6, sets a default value in the parameters
const myReducer = ((state = initialState, action)=>{
//Create a copy of my initial state, since states are immutable objects
const newState = {...state};

if(action.type === 'ADD'){
    newState.age += action.val;
}

if(action.type === 'SUBSTRACT'){
    newState.age -= action.val;
}

return newState;

})

const store = createStore(myReducer);//This creates the Redux Store, we need an initial state and a reducer function as the two arguments


//Subscribe method subscribes us to any changes in the state (store)
store.subscribe(() => {
    console.log("State has been changed to:", store.getState())
})

//  When we call store.dispatch(action), we disptach an event to the reducer


store.dispatch({type:'ADD',  val: 10});
store.dispatch({type:'SUBSTRACT', val: 20});



store.dispatch({type:'ADD',  val: 40});
store.dispatch({type:'SUBSTRACT', val: 10});