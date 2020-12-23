import React from "react";

const ButtonOnclickFunc = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

export default ButtonOnclickFunc;
