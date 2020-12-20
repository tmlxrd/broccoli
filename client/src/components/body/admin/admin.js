import React from "react";
import { Switch, NavLink, Route } from "react-router-dom";
import axios from "axios";
import Preloader from "../../common/preloader";
import AddStudent from "./add-student";
import AddTeacher from "./add-teacher";

class AdminPage extends React.Component {
  componentDidMount() {
    this.props.toggleIsLoading("from general admin page");
    axios
      .get("http://localhost:4000/api/admin/user-is-admin/1.0", {
        withCredentials: true,
      })
      .then((res) => {
        this.props.toggleIsAdmin(res.data);
        this.props.toggleIsLoading(false);
      });
  }
  adminPage = () => {
    return (
      <div>
        <NavLink to="/admin/add-student">student</NavLink>
        <hr />
        <NavLink to="/admin/add-teacher">teacher</NavLink>
      </div>
    );
  };

  render() {
    if (this.props.isLoading) {
      return <Preloader />;
    }
    if (this.props.isAdmin) {
      return (
        <Switch>
          <Route exact path="/admin" render={() => this.adminPage()} />
          <Route
            exact
            path="/admin/add-teacher"
            render={() => <AddTeacher />}
          />
          <Route
            exact
            path="/admin/add-student"
            render={() => (
              <AddStudent
                studentData={this.props.studentData}
                toggleIsLoading={this.props.toggleIsLoading}
                isLoading={this.props.isLoading}
                setNewStudent={this.props.setNewStudent}
              />
            )}
          />
        </Switch>
      );
    } else {
      return <div>Не дозволено!</div>;
    }
  }
}

export default AdminPage;
