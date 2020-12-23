// import React from 'react'
import { connect } from "react-redux";
import Head from ".";
// import setUser from "../../redux/reducer-auth";
import {setGlobalDevice} from '../../redux/reducer-global-user-data'
import {toggleIsLoading,setUserData} from '../../redux/reducer-auth'

const mapStateToProps = (state) => {
  return {
    // authData: state.usersPageData.authData,
    device:state.reducerGlobalData.device,
    userData:state.reducerAuth.userData,
    isLoading:state.reducerAuth.isLoading,
    isLogged:state.reducerAuth.isLogged
  };
};
export default connect(mapStateToProps, {
  setGlobalDevice,
  setUserData,
  toggleIsLoading
})(Head);
