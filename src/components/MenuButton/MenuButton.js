import React from 'react';
import './MenuButton.css';

export const MenuButton = (props) => {
    return (
        <button className="buttonStyle" onClick={props.onClick}>
            <p className="buttonText">{props.buttonText}</p>
            {props.additionalComponent}
        </button>
    );
};
