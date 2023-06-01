import "./App.css";
import { Header } from "./Components/Header";
// import { Footer } from "./Components/Footer";
import { Main } from "./Components/Main";
import { Menu } from "./Components/Menu";

function App() {
  return (
    <fragment className="App">
      <Header />
      <Main />
      {/* <Menu /> */}
      {/* <Footer /> */}
    </fragment>
  );
}

export default App;
