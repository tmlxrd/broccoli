import React from "react";

const AddStudentInput = (props) => {
  const refName = React.createRef();
  return (
    <div>
      <span>{props.text}</span>
      <input
        onChange={() => props.onChange(refName.current.value)}
        type="field"
        ref={refName}
        value={props.value}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default AddStudentInput;
