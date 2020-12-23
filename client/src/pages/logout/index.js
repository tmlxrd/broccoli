import React from "react";
import {Redirect} from "react-router-dom";
import Preloader from "../../components/common/preloader";
const axios = require("axios");

class Logout extends React.Component {
  componentDidMount() {
    this.props.toggleIsLoading(true);
    axios
      .get("http://localhost:4000/api/user/logout/1.0", {
        withCredentials: true,
      })
      .then((res) => {
        this.props.setUserData(res.data)
        this.props.toggleIsLoading(false);
      });
  }
  render() {
    if (this.props.isLoading) {
      return <Preloader />;
    } else {
      if (!this.props.isLogged && !(this.props.isLogged=== null) ) {
        return <Redirect to="/" />;
      } else {
        return <div>ввійшов</div>;
      }
    }
  }
}

export default Logout;
