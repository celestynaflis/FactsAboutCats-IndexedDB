import React from 'react';
import './NumberInput.css';

export const NumberInput = (props) => {
    return (
        <input
            onChange={props.onChange}
            value={props.value}
            className="inputStyle"
            type="number"
            min={1}
        />
    );
};
