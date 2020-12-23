import React from "react";
import AddInputWithRef from "../../../../components/common/input-with-ref";
import ButtonOnclickFunc from "../../../../components/common/button-onclick-func";

const AddStudentContainer = (props) => {
  const UserInputsContainer = props
    .arrInputs()
    .map((obj) => (
      <AddInputWithRef
        onChange={obj.onChange}
        text={obj.text}
        refName={obj.refName}
        value={obj.value}
        placeholder={obj.placeholder}
      />
    ));
  return (
    <div>
      {UserInputsContainer}
      <ButtonOnclickFunc
        onClick={props.addStudentInDb}
        text="Добавити користувача!"
      />
    </div>
  );
};

export default AddStudentContainer;
