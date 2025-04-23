import { db } from '../db/db';

export const fetchData = async () => {
    const response = await fetch('https://catfact.ninja/fact');
    const catFact = await response.json();
    await db.putFactsIntoDB(catFact);
    return catFact;
};

export const getFacts = async () => {
    return db.facts.toArray();
};

export const deleteFact = async (number) => {
    const n = parseInt(number);
    await db.facts.where('id').equals(n).delete();
};

export const deleteAllFacts = () => {
    return db.facts.clear();
};
