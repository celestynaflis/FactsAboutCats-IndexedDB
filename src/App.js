import cat from './assets/cat.svg';
import './App.css';
import React from 'react';
import CatFactsPage from './components/CatFactsPage/CatFactsPage';

function App() {
    return (
        <div className="App">
            <div className="App-header">
                <img src={cat} className="App-logo" alt="logo" />
                <h1 className="App-fonts">
                    The data come from CatFact.ninja API
                </h1>
                <a
                    className="App-link"
                    href="https://catfact.ninja/"
                    target="_blank"
                    rel="nofollow"
                >
                    LINK
                </a>

                <CatFactsPage />
            </div>
        </div>
    );
}

export default App;
