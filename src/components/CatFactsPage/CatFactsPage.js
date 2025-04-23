import React, { useState, useEffect } from 'react';
import './CatFactsPage.css';
import { CatFactsList } from '../CatFactsList/CatFactsList';
import {
    getFacts,
    deleteFact,
    deleteAllFacts,
    fetchData,
} from '../../catsDataFetcher/catsDataFetcher';
import { MenuButton } from '../MenuButton/MenuButton';
import { NumberInput } from '../NumberInput/NumberInput';

const CatFactsPage = () => {
    const [dbData, setDbData] = useState(['']);
    const [factIdToDelete, setFactIdToDelete] = useState();

    useEffect(async () => {
        const data = await getFacts();

        setDbData(data);
    }, [dbData]);

    return (
        <>
            <div className="layout">
                <MenuButton onClick={fetchData} buttonText="Fetch fact" />
                <MenuButton
                    onClick={() => deleteFact(factIdToDelete)}
                    buttonText="Delete fact number:"
                />
                <NumberInput
                    value={factIdToDelete}
                    onChange={(event) => setFactIdToDelete(event.target.value)}
                />
                <MenuButton onClick={deleteAllFacts} buttonText="Delete all" />
            </div>
            <div>
                <CatFactsList facts={dbData} />
            </div>
        </>
    );
};

export default CatFactsPage;
