import Navbar from "./components/Navbar/Navbar";
import TextFrom from "./components/TextFrom";
// import About from "./components/About";
import React, { useState } from "react";
// import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not

  const toMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0a434e";
      document.title = "TextUtils - Dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils - light mode";
    }
  };

  return (
    <>
      {/*<Router>*/}
      <Navbar title="TextUtils" mode={mode} toMode={toMode} />
      <div className="container my-3">
        {/*<Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">*/}
        <TextFrom heading="Enter the Some text and convert to other" mode={mode} />
        {/*</Route>
          </Switch>*/}
      </div>
      {/* </Router>*/}
    </>
  );
}

export default App;
