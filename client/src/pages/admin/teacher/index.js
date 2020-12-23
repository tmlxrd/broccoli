import React from "react";
import { Switch, Route } from "react-router-dom";
// import Input from "../../../components/body/admin/student/add-student/input-component";
// import Preloader from "../../../components/common/preloader";
import AddTeacherContainer from "./add/index";
// import FindStudent from "./find-student";
import TeacherHomeComp from "../../../components/body/admin/teacher/index";
const axios = require("axios");

/*name: "Любов",
        surname: "Турчанська",
        middleName: "Михайлівна",
        image:
          "https://dn.khnu.km.ua/kpk/k_img.aspx?M=k2156&T=autors&I=image003&R=jpg",
        bio:
          "Викладач Коломийського політехнічного коледжу Національного університету «Львівська політехніка»",
        code: 1234567,
       */
const arrInputs = (props) => {
  return [
    {
      text: "",
      refName: "name",
      value: props.teacherData.name,
      placeholder: "Ім'я",
      onChange: (newValue) => {
        props.setNewTeacher({ name: newValue });
      },
    },
    {
      text: "",
      refName: "surname",
      value: props.teacherData.surname,
      placeholder: "Прізвище",
      onChange: (newValue) => {
        props.setNewTeacher({ surname: newValue });
      },
    },
    {
      text: "",
      refName: "middleName",
      value: props.teacherData.middleName,
      placeholder: "По батькові",
      onChange: (newValue) => {
        props.setNewTeacher({ middleName: newValue });
      },
    },
    {
      text: "",
      refName: "code",
      value: props.teacherData.code,
      placeholder: "Код доступу",
      onChange: (newValue) => {
        props.setNewTeacher({ code: newValue });
      },
    },
    {
      text: "",
      refName: "image",
      value: props.teacherData.image,
      placeholder: "Посилання на зображення",
      onChange: (newValue) => {
        props.setNewTeacher({ image: newValue });
      },
    },
    {
      text: "",
      refName: "bio",
      value: props.teacherData.bio,
      placeholder: "Опис вччителя",
      onChange: (newValue) => {
        props.setNewTeacher({ boi: newValue });
      },
    },
  ];
};

const addTeacherInDb = (teacherData, toggleIsLoading, setNewTeacher) => {
  toggleIsLoading(true);
  axios
    .post("/api/admin/add-teacher/1.0", teacherData, {
      withCredentials: true,
    })
    .then((res) => {
      debugger
      if (res.data.message === "Created") {
        setNewTeacher();
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
  return (
    <Switch>
      <Route exact path="/admin/teacher" render={() => <TeacherHomeComp />} />
      <Route
        
        path="/admin/teacher/add"
        render={() => (
          <AddTeacherContainer
          addTeacherInDb={() =>{
            addTeacherInDb(props.teacherData, props.toggleIsLoading, () =>
              props.setNewTeacher("Created")
            )}
          }
          arrInputs={()=>arrInputs(props)}
          toggleIsLoading={props.toggleIsLoading}
          isLoading={props.isLoading}
          teacherData={props.teacherData}
            // addStudentInDb={() =>
            //   addStudentInDb(props.teacherData, props.toggleIsLoading, () =>
            //     props.setNewTeacher("Created")
            //   )
            // }
            // arrInputs={() => arrInputs(props)}
            // toggleIsLoading={props.toggleIsLoading}
            // isLoading={props.isLoading}
          />
        )}
      />
     {/* <Route path="/admin/student/find" render={() => <FindStudent
        setNewTeacherFindCode={props.setNewTeacherFindCode}
      toggleIsLoading={props.toggleIsLoading}
            isLoading={props.isLoading}
     code={props.code} />} />*/}
    </Switch>
    // <div>
    //   <AddStudentContainer
    //     addStudentInDb={() =>
    //       addStudentInDb(props.teacherData, props.toggleIsLoading, () =>
    //         props.setNewTeacher("Created")
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

