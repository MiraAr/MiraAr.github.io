import React from "react";
import Home from "./components/Home";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <>
      <CssBaseline />
      <Home key={Math.random() + 1} />
    </>
  );
}

export default App;
