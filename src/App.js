import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alerts from "./components/Alerts";
import { useState } from "react";
import {
  Outlet,
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState("light");
  const [style, setStyle] = useState({
    backgroundColor: "white",
    color: "black",
  });

  function toggleStyle() {
    if (mode === "light") {
      document.body.style.backgroundColor = "#010519";
      setMode("dark");
      setStyle({
        backgroundColor: "#010519",
        color: "white",
      });
    } else {
      document.body.style.backgroundColor = "white";
      setMode("light");
      setStyle({
        backgroundColor: "white",
        color: "black",
      });
    }
  }

  function showAlert(message, type) {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
    <Router>
      <>
        <Navbar
          title="TextWizard"
          aboutText="AboutText"
          toggleStyle={toggleStyle}
          style={style}
          mode={mode}
        />
        <Alerts alert={alert} />
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                heading="Enter your text here"
                style={style}
                showAlert={showAlert}
              />
            }
          />
          <Route path="about" element={<About mode={mode} />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
