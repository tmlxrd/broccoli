import React from "react";
import AddStudentInput from "../../../../components/body/admin/student/add-student/input-component";
import AddStudentButton from "../../../../components/body/admin/student/add-student/button-component";

const AddStudentContainer = (props) => {
  const UserInputsContainer = props
    .arrInputs()
    .map((obj) => (
      <AddStudentInput
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
      <AddStudentButton onClick={props.addStudentInDb} />
    </div>
  );
};

export default AddStudentContainer;
