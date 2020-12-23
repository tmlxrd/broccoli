import React from "react";

const Input = (props) => {
    const inputRef = React.createRef()
  return (
    <div>
      <input type="field" ref={inputRef} onChange={()=>props.setNewStudentFindCode(inputRef.current.value)} value={props.code} placeholder="введіть .." />
      <button onClick={()=>props.findStudentByCodeFunc()}>1123</button>
    </div>
  );
};

export default Input;
