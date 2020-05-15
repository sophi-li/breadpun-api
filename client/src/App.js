import React, { useState, useEffect } from "react";
import style from "./App.module.css";
import breadpunPhoto from "./Breadpun.jpg";
const App = () => {
  const [breadpun, setBreadPun] = useState([]);

  useEffect(() => {
    fetch("https://my-bao-server.herokuapp.com/api/breadpuns")
      .then((res) => res.json())
      .then((bp) => setBreadPun([bp]));
  }, []);

  return (
    <div className={style.container}>
      <h1 className={style.title}>Bread Puns API</h1>
      <div>{breadpun}</div>
      <img
        src={breadpunPhoto}
        alt="ourdough bread cross section"
        className={style.breadpunPhoto}
      ></img>

      <h2 className={style.endpointsHeader}>Endpoints</h2>

      <section className={style.getContainer}>
        <h3 className={style.getHeader}>GET /api/breadpuns</h3>
        <p>Returns a single random bread pun.</p>
        <a href="https://my-bao-server.herokuapp.com/api/breadpuns">
          https://my-bao-server.herokuapp.com/api/breadpuns
        </a>
      </section>

      <section className={style.getContainer}>
        <h3 className={style.getHeader}>GET /api/allbreadpuns</h3>
        <p>Returns an array of all bread puns.</p>
        <a href="https://my-bao-server.herokuapp.com/api/allbreadpuns">
          https://my-bao-server.herokuapp.com/api/allbreadpuns
        </a>
      </section>
    </div>
  );
};

export default App;
