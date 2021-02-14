import React from 'react';
import styled from 'styled-components';

const Link = ({ children, className, href }) => {
    return (
        href ? (
            <a
                className={className}
                href={href}
            >
                {children}
            </a>
        ) : (
            <span
                className={className}
            >
                {children}
            </span>
        )
    );
};

export const BaseLink = styled(Link)`
    display: inline-block;
    color: var(--white);
    border-bottom: calc(1em/16) dashed var(--white);
    text-decoration: none;
    transition: transform .2s;
    cursor: pointer;

    &:hover,
    &.hover {
        color: var(--grey);
        transform: scale(1.05);
        border-color: var(--grey);
    }
`;
