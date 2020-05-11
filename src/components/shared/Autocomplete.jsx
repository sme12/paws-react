import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FormStyles from '../styles/FormStyles';

const AutocompleteStyles = styled.div`
    & {
        position: relative;
    }

    .options {
        display: block;
        visibility: hidden;
        opacity: 0;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
    }

    .options.is-visible {
        visibility: visible;
        opacity: 1;
    }

    .option {
        display: block;
    }
`;


const Autocomplete = ({ label, className, name , placeholder, required, options}) => {
    const initialState = {
        isMenuOpen: false,
        query: '',
        options: options
    }

    const [state, setState] = useState({ ...initialState });

    const ref = React.createRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setState({ ...state, isMenuOpen: false });
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });

    const filterOptions = query => {
        return options.filter(option => {
            const regExp = new RegExp(query.toLowerCase());
            return regExp.test(option.toLowerCase());
        });
    }

    const handleChange = event => {
        const newQuery = event.target.value;
        const filteredOptions = filterOptions(newQuery);

        setState({ ...state, query: newQuery, options: filteredOptions });
    }

    const handleInputBlur = event => {
    }

    const handleInputFocus = event => {
        setState({ ...state, isMenuOpen: true });
    }

    const handleInputClick = event => {
        console.log(event);
    }

    const handleOptionClick = (event, index) => {
        const selectedOption = state.options[index];
        const filteredOptions = filterOptions(selectedOption);
        setState({ ...state, query: selectedOption, isMenuOpen: false, options: filteredOptions });
    }

    return (
        <AutocompleteStyles ref={ref}>
            <FormStyles>
                <label htmlFor={name}>{label}</label>
                <input
                    autoComplete='off'
                    className={className}
                    id={name}
                    onClick={(event) => handleInputClick(event)}
                    onChange={handleChange}
                    onBlur={handleInputBlur}
                    onFocus={handleInputFocus}
                    name={name}
                    placeholder={placeholder}
                    type='text'
                    required={required}
                    value={state.query}
                />
            </FormStyles>
            <ul 
                className={`options ${state.isMenuOpen ? 'is-visible': ''}`}
            >
                {state.options.map((option, index) => (
                        <li
                            className="option"
                            id={`${name}-option-${index}`}
                            onClick={(event) => handleOptionClick(event, index)}
                        >
                            {option}
                        </li>
                    ))}
            </ul>
        </AutocompleteStyles>
    );
};

export default Autocomplete;
