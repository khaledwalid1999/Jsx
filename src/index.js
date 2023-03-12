// Import React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
// Get a reference to the div with id root
const el = document.getElementById('root');
// tell React to take control of the element
const root = ReactDOM.createRoot(el);
// create a component
function App() {
    const inputType = 'number';
    const minValue = 5;
    const maxValue = 10;


    return <input type={inputType} min={minValue} max={maxValue} />;
}
// show the component on the screen
root.render(<App />)