import "./App.css";
import { Header } from "./Components/Header";
import {Footer} from "./Components/Footer"

function App() {
  return (
    <fragment className="App">
      <Header />
      <main>
        <h1>Hello There</h1>
      </main>
      <Footer/>
    </fragment>
  );
}

export default App;
