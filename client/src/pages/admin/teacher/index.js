import React from "react";
import { Switch, Route } from "react-router-dom";
// import Input from "../../../components/body/admin/student/add-student/input-component";
// import Preloader from "../../../components/common/preloader";
import AddTeacherContainer from "./add/index";
// import FindStudent from "./find-student";
import TeacherHomeComp from "../../../components/body/admin/teacher/index";
const axios = require("axios");

const arrInputs = (props) => {
  return [
    {
      text: "ukr",
      refName: "ukrName",
      value: props.studentData.ukrName,
      placeholder: "Ім'я",
      onChange: (newValue) => {
        props.setNewStudent({ ukrName: newValue });
      },
    },
    {
      text: "",
      refName: "ukrSurname",
      value: props.studentData.ukrSurname,
      placeholder: "Прізвище",
      onChange: (newValue) => {
        props.setNewStudent({ ukrSurname: newValue });
      },
    },
    {
      text: "",
      refName: "ukrMiddleName",
      value: props.studentData.ukrMiddleName,
      placeholder: "По батькові",
      onChange: (newValue) => {
        props.setNewStudent({ ukrMiddleName: newValue });
      },
    },
    {
      text: "eng",
      refName: "engName",
      value: props.studentData.engName,
      placeholder: "Ім'я",
      onChange: (newValue) => {
        props.setNewStudent({ engName: newValue });
      },
    },
    {
      text: "",
      refName: "engSurname",
      value: props.studentData.engSurname,
      placeholder: "Прізвище",
      onChange: (newValue) => {
        props.setNewStudent({ engSurname: newValue });
      },
    },
    {
      text: "",
      refName: "engMiddleName",
      value: props.studentData.engMiddleName,
      placeholder: "По батькові",
      onChange: (newValue) => {
        props.setNewStudent({ engMiddleName: newValue });
      },
    },
    {
      text: "",
      refName: "code",
      value: props.studentData.code,
      placeholder: "Код доступу",
      onChange: (newValue) => {
        props.setNewStudent({ code: newValue });
      },
    },
    {
      text: "",
      refName: "registerNumber",
      value: props.studentData.registerNumber,
      placeholder: "Номер залікової книжки",
      onChange: (newValue) => {
        props.setNewStudent({ registerNumber: newValue });
      },
    },
    {
      text: "",
      refName: "profession",
      value: props.studentData.profession,
      placeholder: "Спеціальність",
      onChange: (newValue) => {
        props.setNewStudent({ profession: newValue });
      },
    },
    {
      text: "",
      refName: "daybookNumber",
      value: props.studentData.daybookNumber,
      placeholder: "Номер в списку",
      onChange: (newValue) => {
        props.setNewStudent({ daybookNumber: newValue });
      },
    },
    {
      text: "",
      refName: "image",
      value: props.studentData.image,
      placeholder: "Посилання на зображення",
      onChange: (newValue) => {
        props.setNewStudent({ image: newValue });
      },
    },
    {
      text: "",
      refName: "entry",
      value: props.studentData.entry,
      placeholder: "Дата вступу",
      onChange: (newValue) => {
        props.setNewStudent({ entry: newValue });
      },
    },
  ];
};

const addStudentInDb = (studentData, toggleIsLoading, setNewStudent) => {
  toggleIsLoading(true);
  axios
    .post("/api/admin/add-student/1.0", studentData, {
      withCredentials: true,
    })
    .then((res) => {
      if (res.data.message === "Created") {
        setNewStudent();
      } else {
        alert(res.data.message);
      }
      // props.setUserData(res.data);
      toggleIsLoading(false);
    })
    .catch(function (error) {
      alert(error);
    });
};

const TeacherPage = (props) => {
    debugger
  return (
    <Switch>
      <Route exact path="/admin/teacher" render={() => <TeacherHomeComp />} />
      <Route
        
        path="/admin/teacher/add"
        render={() => (
          <AddTeacherContainer
            // addStudentInDb={() =>
            //   addStudentInDb(props.studentData, props.toggleIsLoading, () =>
            //     props.setNewStudent("Created")
            //   )
            // }
            // arrInputs={() => arrInputs(props)}
            // toggleIsLoading={props.toggleIsLoading}
            // isLoading={props.isLoading}
          />
        )}
      />
     {/* <Route path="/admin/student/find" render={() => <FindStudent
        setNewStudentFindCode={props.setNewStudentFindCode}
      toggleIsLoading={props.toggleIsLoading}
            isLoading={props.isLoading}
     code={props.code} />} />*/}
    </Switch>
    // <div>
    //   <AddStudentContainer
    //     addStudentInDb={() =>
    //       addStudentInDb(props.studentData, props.toggleIsLoading, () =>
    //         props.setNewStudent("Created")
    //       )
    //     }
    //     arrInputs={() => arrInputs(props)}
    //     toggleIsLoading={props.toggleIsLoading}
    //     isLoading={props.isLoading}
    //   />
    //   <FindStudent />
    // </div>
  );
};

export default TeacherPage;

