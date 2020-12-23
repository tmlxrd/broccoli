import React from "react";
import { NavLink } from "react-router-dom";

const TeacherHead = (props) => {
  return (
    <div>
      {`${props.userData.surname} ${props.userData.name}`}
      <NavLink to="/logout">Logout</NavLink>
    </div>
  );
};

export default TeacherHead;
