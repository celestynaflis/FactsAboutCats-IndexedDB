import React, {useState, useEffect} from 'react';
import {db} from "../db/db";
import "./CatDataFetch.css"
import CatFactsList from "../components/CatFactsList";

const CatDataFetch = () =>
{
    const [dbData, setDbData] = useState(['']);
    const [factId, setFactId] = useState();

    useEffect(async ()=>
    {
        const data = await getFacts();
        let facts = [];
        for (let i =0; i<data.length; i++)
        {
            let numberedFact = (data[i].id) + ". " + data[i].fact;
            facts.push(numberedFact);
        }
        setDbData(facts);
    },[]);

    const factIdToDeleteHandler = (event) => {
        setFactId(event.target.value);
    };

    const getFact = async (number) => {
        return db.facts.get(number);
    };

    const getFacts = async () => {
        return db.facts.toArray();
    };

    const deleteFact = async (number) => {
        const n = parseInt(number);
        await db.facts.where('id').equals(n).delete();
    };

    const deleteAllFacts = async => {
        return db.facts.clear();
    }

    const fetchData = async() => {
        const  response = await fetch("https://catfact.ninja/fact");
        const catFact = await response.json();
        await db.putFactsIntoDB(catFact);
        return catFact;
    }

    const factsAboutCats = dbData.map((item) => {
            return (
                <div>
                    <CatFactsList
                        fact={item}
                    />
                </div>
            );
    });


    return(
        <>
    <div className="layout">
        <button className="buttonStyle" onClick={() => fetchData()}>
            <p className="buttonText">
                Fetch fact
            </p>
        </button>

        <button className="buttonStyle" onClick={() => deleteFact(factId)}>
            <p className="buttonText">
                Delete fact number:
            </p>
        </button>
        <input
            onChange={factIdToDeleteHandler}
            value={factId}
            className="inputStyle"
            type="number"
            min={1}
            max={1000}
        >
        </input>
        <button className="buttonStyle" onClick={deleteAllFacts}>
            <p className="buttonText">
                Delete all
            </p>
        </button>
    </div>
            <div>
                <h1 className="h1">Facts about cats:</h1>
                <div>
                    {factsAboutCats}
                </div>

            </div>
        </>
    );
}

export default CatDataFetch;