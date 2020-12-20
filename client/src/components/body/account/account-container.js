import { connect } from "react-redux";
import Account from ".";
import { setSubjects, toggleIsLoading } from "../../../redux/reducer-subject";

const mapStateToProps = (state) => {
  return {
    subjectData: { subjects: state.reducerSubjects.subjectsData },
    userData: {
      userData: state.reducerAuth.userData,
      isLogged: state.reducerAuth.isLogged,
    },
    isLoading: state.reducerSubjects.isLoading,
  };
};
export default connect(mapStateToProps, {
  setSubjects,
  toggleIsLoading,
})(Account);
