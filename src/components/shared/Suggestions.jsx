import React from 'react';
import { Grid, GridItem } from '../styles/Grid';
import styled from 'styled-components';

const DoggieCardStyles = styled.div`
    padding: 8px;
    height: 208px;
    background-color: lightgrey;
`;

const DoggieCard = ({ name, age, breed }) => {
    return (
        <DoggieCardStyles>
            <div>
                <h3>{name}</h3>
                <p>{age}</p>
                <p>{breed}</p>
            </div>
        </DoggieCardStyles>
    )
}

const Suggestions = ({ doggies }) => {
    return (
        <Grid
            templateColumns="repeat(4, 1fr)"
            alignItems="center"
        >
            {doggies.map((doggie, index) => (
                    <GridItem column="auto" justifySelf="left" fullWidth key={index}>
                        <DoggieCard 
                            name={doggie.name}
                            age={doggie.age}
                            breed={doggie.breed}
                        />
                    </GridItem>
            ))}
        </Grid>
    );
};

export default Suggestions;
