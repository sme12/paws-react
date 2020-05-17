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
        margin: 0;
        margin-top: -7px;
        padding: 0;
        padding-top: 7px;
        background-color: #bababb;
        color: var(--grey);
    }

    .options.is-visible {
        visibility: visible;
        opacity: 1;
    }

    .option {
        display: block;
        margin: 0;
        padding: 10px 8px;
        border-bottom: 1px solid #85858b;
        cursor: pointer;
    }

    .option:hover,
    .option.is-active {
        background-color: #ddd;
        color: var(--dark-grey);
    }
`;


const Autocomplete = ({ label, className, name , placeholder, required, options, activeOptionIndex}) => {
    const initialState = {
        isMenuOpen: false,
        query: '',
        options: options,
        activeOptionIndex: -1
    }

    const keyCodes = {
        13: 'enter',
        27: 'escape',
        32: 'space',
        38: 'up',
        40: 'down'
      }

    const [state, setState] = useState({ ...initialState });

    const ref = React.createRef();
    const autocompleteInput = React.createRef();

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

        setState({ ...state, query: newQuery, options: filteredOptions, isMenuOpen: true });
    }

    const handleInputBlur = event => {
    }

    const handleInputFocus = event => {
        setState({ ...state, isMenuOpen: true, activeOptionIndex: -1 });
    }

    const handleInputClick = event => {
        console.log(event);
    }

    const handleOptionSelect = (index) => {
        const selectedOption = state.options[index];
        const filteredOptions = filterOptions(selectedOption);
        autocompleteInput.current.focus();
        setState({ ...state, query: selectedOption, isMenuOpen: false, options: filteredOptions });
    }

    const handleUpArrow = event => {
        event.preventDefault();
        const setActiveIndex = () => {
            const currentIndex = state.activeOptionIndex;
            if (currentIndex > 0) {
                return currentIndex - 1;
            }
            return currentIndex;
        }
        setState({ ...state, activeOptionIndex: setActiveIndex() })
    }

    const handleDownArrow = event => {
        event.preventDefault();
        const setActiveIndex = () => {
            const currentIndex = state.activeOptionIndex;
            if (currentIndex < state.options.length - 1) {
                return currentIndex + 1;
            }
            return currentIndex;
        }
        setState({ ...state, activeOptionIndex: setActiveIndex() })
    }

    const handleSpace = event => {
        event.preventDefault();
        handleOptionSelect(state.activeOptionIndex);
    }

    const handleEnter = event => {
        event.preventDefault();
        handleOptionSelect(state.activeOptionIndex);
    }

    const handleKeyDown = (event) => {
        switch (keyCodes[event.keyCode]) {
          case 'up':
            handleUpArrow(event)
            break
          case 'down':
            handleDownArrow(event)
            break
          case 'space':
            handleSpace(event)
            break
          case 'enter':
            handleEnter(event)
            break
          default:
            break
        }
      }

    return (
        <AutocompleteStyles ref={ref} onKeyDown={handleKeyDown}>
            <FormStyles autocomplete>
                <label htmlFor={name}>{label}</label>
                <input
                    ref={autocompleteInput} 
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
                            className={`option ${state.activeOptionIndex === index ? 'is-active' : ''}`}
                            key={`${name}-option-${index}`}
                            onClick={() => handleOptionSelect(index)}
                        >
                            {option}
                        </li>
                    ))}
            </ul>
        </AutocompleteStyles>
    );
};

export default Autocomplete;
