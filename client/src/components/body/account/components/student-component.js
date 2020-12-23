import React from "react";

const StudentComp = (props) => {
  return (
    <div>
      <img src={props.userData.image} alt="user img" />
      <div>{`${props.userData.passportData.ukr.surname} ${props.userData.passportData.ukr.name} ${props.userData.passportData.ukr.middleName}`}</div>
      <div>{`${props.userData.passportData.eng.surname} ${props.userData.passportData.eng.name} ${props.userData.passportData.eng.middleName}`}</div>
      <div>
        Навчальний план - {props.userData.profession}, форма -{" "}
        {props.userData.formOfEducation}, курс -{" "}
        {props.userData.course}({props.userData.entry})
      </div>
    </div>
  );
};

export default StudentComp;
