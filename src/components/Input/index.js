import React from 'react';

import './Input.css';

const Input = ({ inputValue, onInputChange }) => {
    return (
        <div className="App-Form">
            <form>
                <input
                    className="App-Input"
                    type="text"
                    value={inputValue}
                    onChange={onInputChange}
                    placeholder="Entrez un nom ou un numéro"
                />
            </form>
        </div>
    );
};

export default Input;