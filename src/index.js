// Import React and ReactDom libraries
import React from "react";
import { ReactDOM } from "react";
// Get a reference to the div with id root
const el = document.getElementById('root');
// tell React to take control of the element
const root = ReactDOM.createroot(el);
// create a component
function App() {
    return <h1>Hi there!</h1>;
}
// show the component on the screen
root.render(<App/>)