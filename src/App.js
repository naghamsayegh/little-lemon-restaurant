import "./App.css";
import React, { Fragment } from "react";

//Components
import { Header } from "./Components/Header";
import Routing from "./Components/Routing";
// import { Footer } from "./Components/Footer";
import { Main } from "./Components/Main";
import { Menu } from "./Components/Menu";

function App() {
  return (
    <Fragment>
      <Header />
      <Routing />
      {/* <Main />
      <Menu /> */}
    </Fragment>
  );
}

export default App;
