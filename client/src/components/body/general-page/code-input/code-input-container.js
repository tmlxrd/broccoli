import { connect } from "react-redux";
import CodeInput from ".";
import {toggleIsLoading,setUserCode} from '../../../../redux/reducer-code-input-page'
import {setUser} from '../../../../redux/reducer-auth'

const mapStateToProps = (state) => {
  return {
    code:state.reducerCodePage.code,
    isLogged:state.reducerAuth.isLogged,
    name:state.reducerAuth.userData.passportData.ukr.name,
    surname:state.reducerAuth.userData.passportData.ukr.surname,
    isLoading:state.reducerCodePage.isLoading
  };
};
export default connect(mapStateToProps, {
    setUserCode,
    toggleIsLoading,
    setUser
})(CodeInput);
