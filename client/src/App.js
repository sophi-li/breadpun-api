import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [breadpun, setBreadPun] = useState([]);

  useEffect(() => {
    fetch("https://my-bao-server.herokuapp.com/api/breadpuns")
      .then((res) => res.json())
      .then((bp) => setBreadPun([bp]));
  }, []);

  return (
    <div>
      <h1>Bread Puns</h1>
      {breadpun}
    </div>
  );
};

export default App;
