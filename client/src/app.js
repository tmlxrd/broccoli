import React from "react";
import Body from "./pages/index";
import Head from "./components/head/head-container";
import style from "./style.module.css";

const App = () => {
  return (
    <div className={style.generalDiv}>
      <div className={style.head}>
        <Head />
      </div>
      <Body />
    </div>
  );
};

export default App;
