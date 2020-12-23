import React from "react";
import MobileHead from "./mobile-head";
import DesktopHead from "./desktop-head";
const axios = require("axios");

class Head extends React.Component {
  componentDidMount() {
    this.props.toggleIsLoading(true);
    axios
      .get("/api/user/login-with-cookie/2.0", {
        withCredentials: true,
      })
      .then((res) => {
        this.props.setUserData(res.data);
      })
      .catch(function (error) {
        alert(error);
      });

    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(
        navigator.userAgent
      )
    ) {
      this.props.setGlobalDevice("Mobile");
    } else {
      this.props.setGlobalDevice("Desktop");
    }
    this.props.toggleIsLoading(false);
  }

  render() {
    if (this.props.isLoading) {
      return <div>loading...</div>;
    }
    if (this.props.device === "Desktop") {
      return (
        <DesktopHead
          role={this.props.userData.role}
          isLogged={this.props.isLogged}
          userData={this.props.userData}
        />
      );
    } else if (this.props.device === "Mobile") {
      return (
        <MobileHead
          isLogged={this.props.isLogged}
          userData={this.props.userData.passportData.ukr}
        />
      );
    } else {
      return "Error";
    }
  }
}
export default Head;
