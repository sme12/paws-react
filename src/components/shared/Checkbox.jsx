import React from 'react';
import styled from 'styled-components';

const Checkbox = ({ children, className, name }) => {
    return (
        <label
            className={className}
            htmlFor={name}
        >
            <span className="label">{children}</span>
            <input
                className="u-visually-hidden"
                type="checkbox"
                id={name}
                name={name}
            />
            <span className="toggle">
                <span className="toggler"></span>
            </span>
        </label>
    );
};

export const Toggle = styled(Checkbox)`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    cursor: pointer;

    .label {
        margin-right: 24px;
    }

    .toggle {
        --text-line-height: 12px;
        --toggle-width: 74px;
        display: block;
        position: relative;
        width: var(--toggle-width);
        height: 28px;
        background-color: var(--silver-grey);
        border: 2px solid var(--silver-grey);
        border-radius: 8px;
        transition: border .3s;
    }

    .toggle:after,
    .toggle:before {
        position: absolute;
        font-size: 10px;
        line-height: var(--text-line-height);
        top: calc(50% - var(--text-line-height)/2);
    }

    .toggle::after {
        content: 'Выкл.';
        right: 7px;
        color: var(--black);
        opacity: 1;
    }

    .toggle::before {
        content: 'Вкл.';
        left: 7px;
        color: var(--white);
        opacity: 0;
    }

    .toggler {
        --toggler-width: 32px;
        display: block;
        position: absolute;
        top: -2px;
        left: -2px;
        height: 28px;
        width: var(--toggler-width);
        background-color: var(--grey);
        border-radius: 8px;
        transition: transform .3s, background-color .3s;
    }

    input:checked + .toggle {
        background-color: transparent;
        border: 2px solid var(--white);
    }

    input:checked + .toggle:before {
        opacity: 1
    }

    input:checked + .toggle:after {
        opacity: 0
    }

    input:checked + .toggle .toggler {
        background-color: var(--white);
        transform: translate3d(calc(var(--toggle-width) - var(--toggler-width)), 0, 0);
    }
`;
