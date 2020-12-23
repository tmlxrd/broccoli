import axios from "axios";
import React from "react";
import Preloader from "../../../components/common/preloader";
import UserLogged from '../../../components/body/general-page/user-logged-component'
import InputComponent from '../../../components/body/general-page/input-component'

class IndexComponent extends React.Component {
  sendCode = () => {
    this.props.toggleIsLoading(true);
    axios
      .get(`http://localhost:4000/api/user/login/2.0?code=${this.props.code}`, {
        withCredentials: true,
      })
      .then((res) => {
        if(!res.data.success){
          alert(res.data.message)
        } else {
        this.props.setUserData(res.data);
        }
        this.props.toggleIsLoading(false);
      })
    .catch(function (error) {
        alert(error);
      });
  };
  render() {
    if (this.props.isLoading) {
      return <Preloader />;
    }
    if (this.props.isLogged) {
      return (
          <UserLogged name={this.props.name} surname={this.props.surname} />
          
      );
    } else {
      return  <InputComponent onClick={() => this.sendCode()} onChange={(newWalue)=>{this.props.setUserCode(newWalue)}} code={this.props.code} />
          
    }
  }
}

export default IndexComponent;
