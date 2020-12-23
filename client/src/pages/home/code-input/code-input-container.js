import { connect } from "react-redux";
import {
  toggleIsLoading,
  setUserCode,
} from "../../../redux/reducer-code-input-page";
import { setUserData } from "../../../redux/reducer-auth";
import IndexComponent from "./index-component";

const mapStateToProps = (state) => {
  if(state.reducerAuth.userData.role === 'teacher'){
    
    return{code: state.reducerCodePage.code,
    isLogged: state.reducerAuth.isLogged,
    name: state.reducerAuth.userData.name,
    surname: state.reducerAuth.userData.surname,
    isLoading: state.reducerCodePage.isLoading,}
  } else {
  return {
    code: state.reducerCodePage.code,
    isLogged: state.reducerAuth.isLogged,
    name: state.reducerAuth.userData.passportData.ukr.name,
    surname: state.reducerAuth.userData.passportData.ukr.surname,
    isLoading: state.reducerCodePage.isLoading,
  };}
};
export default connect(mapStateToProps, {
  setUserCode,
  toggleIsLoading,
  setUserData,
})(IndexComponent);
