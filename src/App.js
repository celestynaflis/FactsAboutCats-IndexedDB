import cat from './assets/cat.svg';
import './App.css';
import React from 'react';
import CatDataFetch from "./catsData/CatDataFetch";

function App() {

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  return (
    <div className="App">
      <div className="App-header">
        <img src={cat} className="App-logo" alt="logo" />
        <h1 className="App-fonts">
          The data come from CatFact.ninja API
        </h1>
        <button onClick={forceUpdate}>
          Update
        </button>
        <a
            className="App-link"
            href="https://catfact.ninja/"
            target="_blank"
            rel="nofollow"
        >
          LINK
        </a>

        <CatDataFetch/>

      </div>
    </div>
  );
}

export default App;
