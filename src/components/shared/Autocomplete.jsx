import React from 'react';
import FormStyles from '../styles/FormStyles';

const Autocomplete = ({ label, className, name , placeholder, required, query}) => {
    const handleInputBlur = event => {
        console.log(event);
    }

    const handleInputFocus = event => {
        console.log(event);
    }

    const handleInputClick = event => {
        console.log(event);
    }
    return (
        <FormStyles>
            <label htmlFor={name}>{label}</label>
            <input
                autoComplete='off'
                className={className}
                id={name}
                onClick={(event) => handleInputClick(event)}
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                name={name}
                placeholder={placeholder}
                type='text'
                required={required}
                value={query}
            />
        </FormStyles>
    );
};

export default Autocomplete;
