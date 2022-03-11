import React from 'react';
import './CatFactsList.css'

const CatFactsList = props =>
{
    return(
        <div className="listFont">
                <p className="list">
                    {props.fact}
                </p>

        </div>

    );
}

export default CatFactsList;