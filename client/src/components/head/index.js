import React from "react";
import MobileHead from "./mobile-head";
import DesktopHead from "./desktop-head";
const axios = require("axios");

class Head extends React.Component {
  componentDidMount() {
    // this.props.toggleIsLoading(true);
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(
        navigator.userAgent
      )
    ) {
      this.props.setGlobalDevice("Mobile");
    } else {
      this.props.setGlobalDevice("Desktop");
    }
    axios
      .get("/api/user/login-with-cookie/1.0", {
        withCredentials: true,
      })
      .then((res) => {
        console.log("res from cookies login --------- ",res)
        this.props.setUserData(res.data);
        // this.props.toggleIsLoading(false);
      })
      .catch(function (error) {
        alert(error);
      });
  }

  render() {
    if (this.props.isLoading) {
      return <div>loading...</div>;
    }
    if (this.props.device === "Desktop") {
      return (
        <DesktopHead
          isLogged={this.props.isLogged}
          userData={this.props.userData.passportData.ukr}
        />
      );
    } else if (this.props.device === "Mobile") {
      return <MobileHead isLogged={this.props.isLogged}
      userData={this.props.userData.passportData.ukr} />;
    } else {
      return "Error";
    }
  }
}
export default Head;
