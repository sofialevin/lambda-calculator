import React, { useState } from "react";
import "./App.css";
// STEP 4 - import the button and display components

import { Display } from "./components/DisplayComponents/Display"
import { Numbers } from "./components/ButtonComponents/NumberButtons/Numbers"
import { Operators } from "./components/ButtonComponents/OperatorButtons/Operators"
import { Specials } from "./components/ButtonComponents/SpecialButtons/Specials"

// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

function App() {

  const [result, setResult] = useState('0');

  const updateDisplay = num => {
    setResult(num);
  }
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  return (
    <div className="container">
      <Logo />
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */
        <div>
          <Display result={result}/>
          <div className="buttons">
            <Specials updateDisplay={updateDisplay}/>
            <Numbers updateDisplay={updateDisplay} result={result}/>
            <Operators />
          </div>
        </div>
      }
      </div>
    </div>
  );
}

export default App;
