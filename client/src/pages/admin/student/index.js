import React from "react";
import Input from "../../../components/body/admin/add-student/input";
import Preloader from "../../../components/common/preloader";
const axios = require("axios");

const AddStudent = (props) => {
  const sendUserInServer = () => {
    props.toggleIsLoading(true);
    axios
      .post("/api/admin/add-student/1.0", props.studentData)
      .then((res) => {
        props.toggleIsLoading(false);
        console.log(res, props);
      })
      .catch((err) => {
        alert(err);
      });
  };
  const arrCreate = [
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
  let UserElements = arrCreate.map((obj) => (
    <Input
      onChange={obj.onChange}
      text={obj.text}
      refName={obj.refName}
      value={obj.value}
      placeholder={obj.placeholder}
    />
  ));

  if (props.isLoading) {
    return <Preloader />;
  } else {
    return (
      <>
        {UserElements}
        <button
          onClick={() => {
            sendUserInServer();
          }}
        >
          add student!
        </button>
      </>
    );
  }
};
export default AddStudent;
