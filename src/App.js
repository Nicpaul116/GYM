import React from "react";
import "./App.css";
import { Route, Routes, HashRouter } from "react-router-dom";
import Container from "./Container/Container";
import { Signin, Scroll } from "./component";
import { Men, Women } from "./Pages";

const App = () => {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Men" element={<Men />} />
          <Route path="/Women" element={<Women />} />
        </Routes>
      </HashRouter>
      <Scroll />
    </div>
  );
};

export default App;
