import React from "react";

const TeacherComp = (props) => {
  return (
    <div>
      <img src={props.userData.image} alt="user img" />
      <div>{`${props.userData.surname} ${props.userData.name} ${props.userData.middleName}`}</div>
    </div>
  );
};

export default TeacherComp;
