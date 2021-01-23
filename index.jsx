import * as React from "react";
import ReactDOM from "react-dom";

// this is the HTML element in which we want React to render
const reactDomContainer = document.getElementById("react-dom-container");

// arrow function used on purpose here
// to demonstrate how Babel transpiles this code to ES5 syntax
const App = () => {
    return (
        <>
            <h1>Congrats!</h1>
            <h3>You have successfully setup React.JS from scratch</h3>
        </>
    )
}

const rootComponent = App();

// instruct ReactDOM to render our React App in the specified HTML element and
// to mount the specified component
ReactDOM.render(rootComponent, reactDomContainer);