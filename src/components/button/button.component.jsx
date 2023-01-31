import './button.styles.scss';
import React from 'react';
const Button = ({ displayText, givenClass, givenType, clickHandler }) => {
  return (
    <div>
      <button onClick={clickHandler} className={givenClass} type={givenType}>
        {displayText}
      </button>
    </div>
  );
};
export default Button;
