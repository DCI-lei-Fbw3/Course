//Welcome FbW3!
//React - Intro to Class Components
//Reference: https://reactjs.org/docs/state-and-lifecycle.html

// Intro

    /* 
    - So far throughout this module, we have been writing all our components as functional components. 
    - Function components take in props, and return some JSX. 
    - React also gives us another way of writing components using classes instead of functions.

    - For many years, the only way to use State and lifecycle methods (e.g. useState hook) in React components
    was via class components. 
    - Since the introduction of react hooks in late 2018, that is no longer the case:
        functional components can everything classes can do! (well, almost)
    - You are still very likely to encounter class components when reading about react,
    and are even likely to see them on your first React job.
    - So, today, let's have a brief look at the syntax and learn some of the basic ins and outs of writing class components.
    */

//Class Component Syntax

    // When we are working with functional components, the most basic version (without hooks) looks something like this:

    function BlogPost(props){
        return(
            <article>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
            </article>
        )
    }

    // Here's what the same component looks like using the class component syntax:

    class BlogPost extends React.Component {
        // In class components, you need the render method to render any JSX
        render(){
            return(
                <article>
                <h1>{this.props.title}</h1>
                <p>{this.props.content}</p>
                </article>
            )
        }
    }

    /* Here are some of the features of class component syntax:
    - class BlogPost: the class declaration gives us a template for creating objects. 
    In this case, the kind of object we're creating is a React Component.
    - extends React.Component: our components must inherit from React.Component class; this is
    where we'll get some additional behavior we'll see later.
    - render(): the render method is a special lifecycle method that must be defined of all of our 
    class components. Just like with out funcitonal components, render is responsible for returning JSX. 
    - this.props: When React runs, any time we use <BlogPost> in a parent component, react will
    make a new object by calling constructor function "new BlogPost(props)" for us. 
    All of the props passed down fom the parent will be saved to the newly created object!
    So to access the props, we can use "this.props" inside any kind of method defined in our component.
    Props along won't work! We must use this.props. 
    */

        //Example 2
        //when we write this below
        <BlogPost title = "Hello" content ="World!"/>

        //something like this happens in Reacts internal code
        const component = new BlogPost({tile: "Hello", content: "World!"});

        //so inside the component, the propos object is saved to the object:
        class React.Component {
            constructor(props){
                this.props = props;
            }
        }

    //Class vs Functional comps

    /* 
    Functional components are good for simple components. 
    Class components are good for reusable components.
    Some benefits of class components:
    - Easier code organization (subjectively)
    - Can use 'state' (yet another React system)
    - Easier to handle user input
    - Work with react lifecycle
    */

    //Example 3
    //using geoLocation WebAPI
        
    //Functional component
        const App = () =>{
            window.navigator.geolocation.getCurrentPosition(
                (position) => console.log(position)
                (err) => console.log(err)
            )
            return <div>Latitude: </div>;
        }

    // Class Component

    class App extends React.Comopoent{
        render(){
            window.navigator.geolocation.getCurrentPosition(
                (position) => console.log(position)
                (err) => console.log(err)
            )
            return <div>Latitude: </div>;
        }
    }

    /* 
    - Working with classes in React always leads to more complexity, and this makes the
    "code organization" issue more relevant.
    - Class componets "break" more easily than functional componenets, purely because they are 
    more difficult to keep a track of. 
    

    Takeaway:
    Understand three basic things, and then move on:
    1) The different syntax for class and functional components.
    2) Understand the react lifecycle in the context of Class components.
    3) To understand how class components work with state in React vs. useState() hook.
    
    */