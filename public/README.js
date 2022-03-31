//!What is Redux

/**
 *? Redux is a state management library that helps us manage state in our application.
 *? It's not specific to react. It's a library that you can use in any other library or framework
 *? like "Angular", "Vue" or "Vanilla JS"
 *? Redux provides a single store that you can use to manage a large amount of data.
 *? In redux, we can use the store to manage and track the data that's changing in the application
 *? To create store, we need to import the create store function like this
 */

//* "import { createStore } from 'redux';

//?The createStore function accepts 3 arguments

//? The first argument is a function that is normally known as a reducer (Required)
//? The second argument is the initial value of the state (optional)
//? The third argument is an enhancer where we can pass middlewear, if any. (optional)

//!Example

//* "import { createStore } from 'redux';

const reducer = (state, action) => {
  console.log("reducer called");
  return state;
};

const store = createStore(reducer, 0);

/**
 *? Here, we defined a reducer function using ES6 arrow function syntax. We can also use normal functions instead of arrow functions if we want.

 *? Inside the reducer function, we're logging some text to the console and then returning the value of the state from the function.

 *? Then we pass that reducer function to the createStore function as the first argument and 0 as the initial value of the state as the second argument.

 *? The createStore function returns a store that we can use to manage the application data. 

 *? The reducer function recieves state and action as the parameters.
 
 *? The initial value of the state which we passed as 0 for the createStore function is automatically passed as the value of the state parameter.

 *? But it's much more common practice to initialize the state inside the reducer itself rather than passing it as a second argument to the createStore function like this 

 ** import {createStore} from 'redux'

 ** const reducer = (state = 0, action) => {

**      console.log("Reducer");
**      return state;
**}

** const store = createStore(reducer);

*? Here, we are using ES6 default parameter syntax for initializing the state parameter to value 0.

*? Once the store is created, we can use the subscribe method provided by the store to subscribe the changes in the store as shown below:

** store.subscribe(() => {
**      console.log('Current State', store.getState());
**});

*? Here, using the subscribe function, we're registering a callback function, we're calling the store.getState method to get the current value of the state.

*? Now open the src/index.js file and add the above contents inside it.
 */
