import React from 'react'
import { NavLink } from "react-router-dom";

const StudentHead = (props) =>{
    return <div>
    {`${props.userData.passportData.ukr.surname} ${props.userData.passportData.ukr.name}`}
    <NavLink to="/logout">Logout</NavLink>
  </div>
}

export default StudentHead