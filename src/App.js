import "./App.css";
import React, { Fragment } from "react";

//Components
import { Header } from "./Components/Header";
import Routing from "./Components/Routing";
import Footer from "./Components/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <Routing />
      <Footer />
    </Fragment>
  );
}

export default App;
