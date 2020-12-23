import React from 'react'
import { NavLink } from "react-router-dom";

const Student=()=>{
    return(
        <div>
      <NavLink to="/admin/student/add">add</NavLink>
     <hr />
      <NavLink to="/admin/student/find">find</NavLink>
    </div>
    )
}

export default Student