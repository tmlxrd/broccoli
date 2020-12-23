import React from "react";
import { NavLink } from "react-router-dom";
import AdminHead from "./admin";
import StudentHead from "./student";
import TeacherHead from "./teacher";

const DesktopHead = (props) => {
  if (props.isLogged) {
    if (props.role === "admin") {
      return <AdminHead userData={props.userData} />;
    } else if (props.role === "student"||props.role === "user") {
      return <StudentHead userData={props.userData} />;
    } else {
      return <TeacherHead userData={props.userData} />;
    }
  } else {
    return (
      <NavLink to="/login" activeClassName="selected">
        login
      </NavLink>
    );
  }
};

export default DesktopHead;
