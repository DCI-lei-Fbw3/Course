## SPA - Single Page Application
- Clientside Rendering (HTML Output is generated in the browser)
- "Raw material" is sent to the client/browser
-
- less performance needed on the serverside
- BUT: the client has to do the work
- large initial load (larger files, because they also contain the logic)
- small operational load: we only fetch data from the backend, not the whole HTML page
- frontend and backend separated: one backend can then serve multiple apps (webapp, mobile app, api, 3rd party systems,...)
- interactive user interfaces


## MPA - Multi Page Application
- Serverside Rendering (HTML is generated on the server)
- ready-to-use HTML page is sent to the client/browser

- more performance needed on the serverside
- better predictability of the outcome because the server declares the HTML
- smaller initial load, BUT: every page request must contain the whole HTML page
- tightly coupled frontend and backend: backend creates the frontend


(There are many ways to have some concepts of one approach in the other so this definition should only give us an overview of what can be achieved)



## DOM - Document Object Model
- represents the current page in the form of an accessible Object
- we can manipulate the page via DOM, e.g. with JavaScript

## Virtual DOM
- copy of the DOM
- contains the changes we want to make (represents the desired output)
- React uses the Virtual DOM to determine what it has to change in the actual DOM



## Declarative & Imperative Programming
- Declarative: Describes the "what" (blueprint)
- Imperative: Describes the "how" (recipe)



## Components
- a reusable element
- has its own logic and state

## State
- a place to store values
- it lives inside the component
- every component has its own state

## Props
- the "props" variable is an object, the parameter of a Function Component
- we can pass props to child components from the parent
