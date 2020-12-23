import React from 'react'
import { NavLink } from "react-router-dom";

const Teacher=()=>{
    return(
        <div>
      <NavLink to="/admin/teacher/add">add</NavLink>
     <hr />
      <NavLink to="/admin/teacher/find">find</NavLink>
    </div>
    )
}

export default Teacher