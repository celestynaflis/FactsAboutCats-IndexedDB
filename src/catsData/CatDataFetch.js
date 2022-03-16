import React, {useState, useEffect} from 'react';
import {db} from "../db/db";
import "./CatDataFetch.css"
import CatFactsList from "../components/CatFactsList";

// const useForceUpdate = ()  => {
//     const [value, setValue] = useState(0);
//     return () => setValue((value) => value + 1);
// }

const CatDataFetch = () =>
{
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    // const forceUpdate = useForceUpdate();

    const [data, setData] = useState(['']);
    const [factId, setFactId] = useState();


    const factIdToDeleteHandler = (event) => {
        setFactId(event.target.value);
    };

    const fetchData = async () =>
    {
        // await fetch(`${constants.REACT_APP_API_URL}/weather/?q=${city_name}&appid=${constants.REACT_APP_API_KEY}`)
    await fetch("https://catfact.ninja/fact")
    .then(res => res.json())
            .then(result => {
                db.putFactsIntoDB(result);
            });
        forceUpdate();
    }


    const getFact = async (number) => {
        return db.facts.get(number);
    };

    const getFacts = async () => {
      return db.facts.toArray();
    };

    const deleteFact = async (number) => {
        const n = parseInt(number);
        await db.facts.where('id').equals(n).delete();
        forceUpdate();
    };

    useEffect(async ()=>
    {
        const data = await getFact(1);
    },[])

    useEffect(async ()=>
    {
        const data = await getFacts();
        let facts = [];
        for (let i =0; i<data.length; i++)
        {
            let numberedFact = (data[i].id) + ". " + data[i].fact;
            facts.push(numberedFact);
        }
        setData(facts);
    },[])


    const showFacts = data.map((item) => {
            return (
                <div>
                    <CatFactsList
                        fact={item}
                    />
                </div>
            );
    });

    const facts = (
        <div>
            {showFacts}
        </div>
    );


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
    </div>
            <div>
                <button className="buttonStyle" onClick={forceUpdate}>
                    <p className="buttonText">
                        Update
                    </p>
                </button>
                <h1 className="h1">Facts about cats:</h1>
                <p>
                    {facts}
                </p>

            </div>

        </>


    );
}

export default CatDataFetch;