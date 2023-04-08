import React from "react";

function Button({ onClick, children, bgColor }) {
  return (
    <button
      className={`${bgColor ? bgColor : 'bg-indigo-600'} text-white mr-3 py-2 px-6 my-10 arounded hover:bg-indigo-700`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
