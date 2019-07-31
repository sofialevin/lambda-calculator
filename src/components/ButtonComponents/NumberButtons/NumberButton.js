import React from "react";

const NumberButton = (props) => {
  return (
    <button onClick={ (event) => {
      if (props.result === '0') {
        props.set(props.number)
      } else {
        props.set(props.result.toString() + props.number)
      }

      let animationEndCallback = (e) => {
        e.target.removeEventListener('animationend', animationEndCallback);
        e.target.classList.remove('button-click');
      }

      event.target.classList.toggle('button-click');
      event.target.addEventListener('animationend', animationEndCallback);

    }}>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      props.number}
    </button>
  );
};

export default NumberButton;





  


