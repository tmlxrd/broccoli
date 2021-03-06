import React from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import Preloader from "../../components/common/preloader";
import Student from "./student/index";
import TeacherPage from "./teacher";
import { connect } from "react-redux";
import {
  setNewTeacher, 
  toggleIsAdmin,
  toggleIsLoading,
  setNewStudent,
  setNewStudentFindCode,
} from "../../redux/reducer-admin";
import Home from "./home";

class AdminPage extends React.Component {
  componentDidMount() {
    this.props.toggleIsLoading(true);
    axios
      .get("/api/admin/user-is-admin/1.0", {
        withCredentials: true,
      })
      .then((res) => {
        this.props.toggleIsAdmin(res.data);
        this.props.toggleIsLoading(false);
      })

      .catch(function (error) {
        alert(error);
      });
  }

  render() {
    if (this.props.isLoading) {
      return <Preloader />;
    }
    if (this.props.isAdmin) {
      return (
        <Switch>
          <Route exact path="/admin" render={() => <Home />} />
          <Route
            path="/admin/teacher"
            render={() => (
              <TeacherPage
              setNewTeacher={this.props.setNewTeacher}
                toggleIsLoading={this.props.toggleIsLoading}
                isLoading={this.props.isLoading}
                teacherData={this.props.teacher.newTeacherData}
              />
            )}
          />
          <Route
            toggleIsLoading={this.props.toggleIsLoading}
            isLoading={this.props.isLoading}
            path="/admin/student"
            render={() => (
              <Student
                studentData={this.props.student.newStudentData}
                toggleIsLoading={this.props.toggleIsLoading}
                isLoading={this.props.isLoading}
                setNewStudent={this.props.setNewStudent}
                setNewStudentFindCode={this.props.setNewStudentFindCode}
                code={this.props.student.studentCode}
              />
              // <AddStudent
              //   studentData={this.props.studentData}
              //   toggleIsLoading={this.props.toggleIsLoading}
              //   isLoading={this.props.isLoading}
              //   setNewStudent={this.props.setNewStudent}
              // />
            )}
          />
        </Switch>
      );
    } else {
      return <div>Не дозволено!</div>;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.reducerAdmin.isLoading,
    isLogged: state.reducerAdmin.isLoading,
    isAdmin: state.reducerAdmin.isAdmin,
    student: {
      newStudentData: state.reducerAdmin.student.add.newStudentData,
      studentCode: state.reducerAdmin.student.find.byCode.code,
    },
    teacher: {
      newTeacherData: state.reducerAdmin.teacher.add.newTeacherData,
    },
  };
};

export default connect(mapStateToProps, {
  toggleIsAdmin,
  toggleIsLoading,
  setNewStudent,
  setNewStudentFindCode,
  setNewTeacher
})(AdminPage);
