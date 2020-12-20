import React from "react";
import { NavLink } from "react-router-dom";

const DesktopHead = (props) => {
  if (props.isLogged) {
    return (
      <div>
        {`${props.userData.surname} ${props.userData.name}`}
        <NavLink to="/logout">Logout</NavLink>
      </div>
    );
  } else {
    return (
      <NavLink to="/login" activeClassName="selected">
        login
      </NavLink>
    );
  }
};

export default DesktopHead;
