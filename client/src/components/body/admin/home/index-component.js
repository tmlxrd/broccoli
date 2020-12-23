import React from "react";
import { NavLink } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      <NavLink to="/admin/student">student</NavLink>
     <hr />
      <NavLink to="/admin/teacher">teacher</NavLink>
    </div>
  );
};

export default Home;
