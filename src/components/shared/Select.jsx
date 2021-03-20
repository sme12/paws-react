import React from 'react';
import FormStyles from '../styles/FormStyles';

const Select = ({ 
        name,
        id,
        label,
        register,
        className,
        placeholder,
        invalid,
        errorMessage,
        onSelect,
        options,
        defaultValue,
        isDefaultDisabled
    }) => {
    return (
        <FormStyles invalid={invalid}>
            <label htmlFor={id}>{label}</label>
            <select 
                name={name}
                id={id}
                className={className}
                ref={register}
                onChange={(event) => onSelect(event.target.value)}
                defaultValue={defaultValue || ''}
            >
                <option 
                    disabled={isDefaultDisabled}
                    value={defaultValue}
                >
                    {placeholder}
                </option>
                {options && Object.keys(options).map((option, index) => (
                    <option 
                        key={option}
                        value={option}
                    >{options[option]}</option>
                ))}
            </select>
            <p className="error-message">{invalid && errorMessage}</p>
        </FormStyles>
    );
};

export default Select;
