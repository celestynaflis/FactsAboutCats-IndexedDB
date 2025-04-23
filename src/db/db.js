import Dexie from 'dexie';

export class GenerateDexieClass extends Dexie {
    constructor() {
        super('db');

        this.version(1).stores({
            facts: '++id, fact, length, id',
        });
    }

    putFactsIntoDB = async (facts) => {
        try {
            await this.facts.put(facts);
        } catch (err) {
            console.log(err);
        }
    };
}

export const db = new GenerateDexieClass();
