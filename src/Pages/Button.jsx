import React from "react";

const Button = (props) => {
  return (
    <button className={`py-3 px-6 rounded-2xl text-white ${props.isClicked ? 'bg-black' : 'bg-blue-500'}`}
    type={props.type || 'button'}
    onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
