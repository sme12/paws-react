import styled from 'styled-components';
import is from 'styled-is';

export const Grid = styled.div`
    display: grid;
    grid-gap: var(--gap);
    ${is('templateColumns')`
        grid-template-columns: ${props => props.templateColumns};
    `};
    ${is('rowGap')`
        grid-row-gap: ${props => props.rowGap};
    `};
    ${is('autoRows')`
        grid-auto-rows: ${props => props.autoRows};
    `};
    ${is('width')`
        width: ${props => props.width};
    `};
    ${is('height')`
        height: ${props => props.height};
    `};
`;

export const GridItem = styled.div`
    grid-row: 1;
    ${is('column')`
        grid-column: ${props => props.column}`};
    ${is('row')`
        grid-row: ${props => props.row}`};
`;
