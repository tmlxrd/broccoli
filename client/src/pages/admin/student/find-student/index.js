import React from "react";
import { Switch, Route } from "react-router-dom";
import FindHome from "../../../../components/body/admin/student/find-student/home/index";
import Input from "../../../../components/body/admin/student/find-student/input/input";
const axios = require("axios");

const findStudentByCodeFunc = (code) => {
  axios
    .get(`/api/admin/student/find/by-code/1.0?code=${code}`, {
      withCredentials: true,
    })
    .then((res) => {
      if (!res.data.success) {
        alert(res.data.message);
      } else {
        console.log(res.data);
      }
    })
    .catch(function (error) {
      alert(error);
    });
};

const FindStudent = (props) => {
  return (
    <Switch>
      <Route exact path="/admin/student/find" render={() => <FindHome />} />
      <Route
        exact
        path="/admin/student/find/by-code"
        render={() => (
          <Input
            code={props.code}
            findStudentByCodeFunc={() => findStudentByCodeFunc(props.code)}
            setNewStudentFindCode={props.setNewStudentFindCode}
          />
        )}
      />
      <Route
        exact
        path="/admin/student/find/by-ukr-data"
        render={() => <div>by ukr-data</div>}
      />
    </Switch>
  );
};

export default FindStudent;
