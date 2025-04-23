import React from 'react';
import './CatFactsList.css';

export const CatFactsList = (props) => {
    return (
        <>
            <h1 className="h1">Facts about cats:</h1>
            {props.facts.map((item) => {
                return (
                    <div className="listFont" key={item.id}>
                        <p className="list">
                            {item.fact} [fact {item.id}]
                        </p>
                    </div>
                );
            })}
        </>
    );
};
