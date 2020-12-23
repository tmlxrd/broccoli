import { connect } from "react-redux";
import Logout from ".";
import {toggleIsLoading} from '../../redux/reducer-logout'
import {setUserData} from '../../redux/reducer-auth'

const mapStateToProps = (state) => {
  return {
    isLoading:state.reducerLogout.isLoading,
    isLogged:state.reducerAuth.isLogged
  };
};
export default connect(mapStateToProps, {
  toggleIsLoading,
  setUserData
})(Logout);
