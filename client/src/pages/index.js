import React from "react";
import { Route, Switch } from "react-router-dom";
import Account from "../components/body/account/account-container";
import AdminPage from "./admin/index";
import Home from "./home/index";
import Logout from './logout/logout-container';



const Body = () => {
  return (
      <Switch>
        <Route exact path="/" render={()=><Home />} />
        <Route path="/admin" render={()=><AdminPage />} />
        <Route exact path="/logout" render={()=><Logout />} />
        <Route exact path="/account" render={()=><Account />} />
      </Switch>
  );
};

export default Body;
