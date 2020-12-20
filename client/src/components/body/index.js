import React from "react";
import { Route, Switch } from "react-router-dom";
import AccountContainer from "./account/account-container";
import AdminContainer from "../../pages/admin/home";
import GeneralPage from "./general-page";
import LogoutContainer from "./logout/logout-container";



const Body = () => {
  return (
      <Switch>
        <Route exact path="/" render={()=><GeneralPage />} />
        <Route path="/admin" render={()=><AdminContainer />} />
        <Route exact path="/logout" render={()=><LogoutContainer />} />
        <Route exact path="/account" render={()=><AccountContainer />} />
      </Switch>
  );
};

export default Body;
