import Dexie, { Table } from 'dexie';


export class GenerateDexieClass extends Dexie {

    constructor() {
        super('db');

        this.version(1).stores({
            facts:
                '++id, fact, length',
            notSentFacts:
            'id, fact, length',
        });
    }

    isEmpty = async () => {
        return (await this.facts.count()) === 0;
    };

    putFactsIntoDB = async (facts) => {
        try {
            await this.facts.put(facts);
        } catch (err) {
            console.log(err);
        }
    };
}

export const db = new GenerateDexieClass();
