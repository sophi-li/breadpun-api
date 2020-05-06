import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [breadpun, setBreadPun] = useState([]);

  useEffect(() => {
    fetch("api/breadpuns")
      .then((res) => res.json())
      .then((bp) => setBreadPun([bp]));
  }, []);

  return (
    <div>
      <h1>Bread Puns</h1>
      <ul>
        {breadpun.map((pun) => (
          <li key={pun}>{pun}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
