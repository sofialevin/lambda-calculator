import React from "react";

const NumberButton = (props) => {
  return (
    <button onClick={ () => {
      if (props.result == 0) {
        props.set(props.number)
      } else {
        props.set(props.result.toString() + props.number)
      }
    }}>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      props.number}
    </button>
  );
};

export default NumberButton;