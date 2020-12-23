import React from "react";
import { NavLink } from "react-router-dom";

const UserLogged = (props) => {
  return (
    <div>
      Ви авторизовані як {`${props.surname} ${props.name}`}
      <span>
        <NavLink to="/logout">Вийти</NavLink>
      </span>
      <span>
        <NavLink to="/account">Далі!</NavLink>
      </span>
    </div>
  );
};

export default UserLogged;
