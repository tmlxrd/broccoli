import React from "react";
import { NavLink } from "react-router-dom";

const AdminHead = (props) => {
  return (
    <div>
      {`${props.userData.passportData.ukr.surname} ${props.userData.passportData.ukr.name}`}
      <NavLink to="/admin">Admin page</NavLink>
      <NavLink to="/logout">Logout</NavLink>
    </div>
  );
};

export default AdminHead;
