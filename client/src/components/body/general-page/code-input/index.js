import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Preloader from "../../../common/preloader";

class CodeInput extends React.Component {
  sendCode = () => {
    this.props.toggleIsLoading(true);
    axios
      .get(`http://localhost:4000/api/user/login/1.0?code=${this.props.code}`, {
        withCredentials: true,
      })
      .then((res) => {
        this.props.setUser(res.data);
        this.props.toggleIsLoading(false);
      });
  };
  userCode = React.createRef();
  render() {
    if (this.props.isLoading) { 
      return <Preloader />;
    } 
      if (this.props.isLogged) {
        return (
          <div>
            <div>
              Ви авторизовані як {`${this.props.surname} ${this.props.name}`}
            </div>
            <span>
              <NavLink to="/logout">Вийти</NavLink>
            </span>
            <span>
              <NavLink to="/account">Далі!</NavLink>
            </span>
          </div>
        );
      } else {
        return (
          <div>
            <input
              type="field"
              placeholder="Введіть ваш код"
              onChange={() => {
                this.props.setUserCode(this.userCode.current.value);
              }}
              ref={this.userCode}
              value={this.props.code}
            />
            <button onClick={() => this.sendCode()}>send!</button>
          </div>
        );
      }
    
  }
}

export default CodeInput;
