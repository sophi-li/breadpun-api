import React, { useState, useEffect } from 'react'
import style from './App.module.css'
import breadpunPhoto from './Breadpun.jpg'

const App = () => {
  const [breadpun, setBreadPun] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://my-bao-server.herokuapp.com/api/breadpuns')
      .then((res) => res.json())
      .then((bp) => setBreadPun([bp]))
      .then(setIsLoading(false))
  }, [])

  const handleNewPunClick = () => {
    fetch('https://my-bao-server.herokuapp.com/api/breadpuns')
      .then((res) => res.json())
      .then((bp) => setBreadPun([bp]))
  }

  return (
    <div className={style.container}>
      <h1 className={style.title}>Bread Puns API</h1>
      {isLoading ? (
        <p className={style.breadpun}>One sec, your breading pun is baking!</p>
      ) : (
        <p className={style.breadpun}> {breadpun}</p>
      )}
      <img
        src={breadpunPhoto}
        alt="sourdough bread cross section"
        className={style.breadpunPhoto}
      />
      <div className={style.newBreadPunContainer}>
        <button onClick={handleNewPunClick} className={style.newBreadPunBtn}>
          Bake me another pun
        </button>
      </div>

      <h2 className={style.endpointsHeader}>Endpoints</h2>

      <section className={style.getContainer}>
        <h3 className={style.getHeader}>GET /api/breadpuns</h3>
        <p>Returns a single random bread pun.</p>
        <a
          href="https://my-bao-server.herokuapp.com/api/breadpuns"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://my-bao-server.herokuapp.com/api/breadpuns
        </a>
      </section>

      <section className={style.getContainer}>
        <h3 className={style.getHeader}>GET /api/allbreadpuns</h3>
        <p>Returns an array of all bread puns.</p>
        <a
          href="https://my-bao-server.herokuapp.com/api/allbreadpuns"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://my-bao-server.herokuapp.com/api/allbreadpuns
        </a>
      </section>
    </div>
  )
}

export default App
