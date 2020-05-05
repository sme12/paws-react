import React from 'react';
import styled from 'styled-components';

const Button = ({ children, className, type }) => {
    return (
        <button
            className={className}
            type={type}
        >
            {children}
        </button>
    );
};

export const BaseButton = styled(Button)`
    display: flex;
    width: 100%;
    min-height: 50px;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--white);
    border-radius: 8px;
    padding: 18px 24px;
    background-color: var(--grey);
    box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.6);
    color: var(--white);
    font-family: var(--font-family);
    font-size: var(--font-size-2);
    font-weight: 700;
    line-height: 1.2;
    transition: background-color .3s, color .3s;
    cursor: pointer;
    appearance: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0); // Prevent default tap higlighting on the mobile

    &:hover {
        background-color: var(--white);
        color: var(--grey);
    }

    &:active {
        transition: none;
        background-color: #fafafa;
        color: rgba(25, 27, 31, 0.7);
        transform: scale(.98);
    }

    &.home-controls-button {
        @media (max-width: 1120px) {
            font-size: var(--font-size-1);
        }
    }
`;