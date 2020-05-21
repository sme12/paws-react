import styled from 'styled-components';
import is from 'styled-is';

export const Grid = styled.div`
    display: grid;
    grid-gap: var(--gap);
    ${is('templateColumns')`
        grid-template-columns: ${props => props.templateColumns};
    `};
    ${is('alignItems')`
        align-items: ${props => props.alignItems};
    `};
`;

export const GridItem = styled.div`
    grid-row: 1;
    ${is('fullWidth')`
        width: 100%`};
    ${is('justifySelf')`
        justify-self: ${props => props.justifySelf}`};
    ${is('column')`
        grid-column: ${props => props.column}`};
    ${is('row')`
        grid-row: ${props => props.row}`};
`;
