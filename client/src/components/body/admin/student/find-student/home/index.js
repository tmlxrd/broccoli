import React from 'react'
import {NavLink} from 'react-router-dom'

const FindHome = () =>{
    return  <div>
        <NavLink to="/admin/student/find/by-code">by code</NavLink>
        <hr />
        <NavLink to="/admin/student/find/by-ukr-data">by ukr-data</NavLink>
    </div>
}

export default FindHome