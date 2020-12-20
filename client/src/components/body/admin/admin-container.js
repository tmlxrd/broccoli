import { connect } from "react-redux";
import AdminPage from "../../../pages/admin/home";
import {
  toggleIsAdmin,
  toggleIsLoading,
  setNewStudent,
} from "../../../redux/reducer-admin";


const mapStateToProps = (state) => {
  return {
    isLoading: state.reducerAdmin.isLoading,
    isLogged: state.reducerAdmin.isLoading,
    isAdmin: state.reducerAdmin.isAdmin,
    studentData: state.reducerAdmin.studentData,
  };
};

export default connect(mapStateToProps, {
  toggleIsAdmin,
  toggleIsLoading,
  setNewStudent,
})(AdminPage);
