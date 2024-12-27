import "./App.css";
import { ApiProvider } from "./ApiProvider";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <>
      <h1>lorem5</h1>
      <ApiProvider>
        <Home />
        <About />
      </ApiProvider>
    </>
  );
}

export default App;
