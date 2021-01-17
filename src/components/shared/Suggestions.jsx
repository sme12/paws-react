import React, { useState } from 'react';
import { Grid, GridItem } from '../styles/Grid';
import { BaseLink } from './Link';
import styled from 'styled-components';
import { IMAGE_PROXY } from '../../constants';
import ages from '../../dictionaries/ages';
import breeds from '../../dictionaries/breeds';

import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const listDoggies = gql`
  query listDoggies {
    listDoggies {
      items {
        id
        name
        age
        breed
        image
      }
    }
  }
`

const DoggieCardStyles = styled.div`
    font-size: 1rem;
    padding: 8px;
    height: 208px;
    cursor: pointer;
    background-image: ${props => `linear-gradient(180deg, rgba(31, 33, 38, 0) 50%, rgba(25, 27, 31, 0.7) 79.81%, #191B1F 100%), linear-gradient(0deg, rgba(31, 33, 38, 0.6), rgba(31, 33, 38, 0.6)), 
            url('${props.image}')`
        };
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    h3 {
        font-size: 1.25rem;
        font-weight: bold;
        line-height: 1.5;
        margin-bottom: 4px;
    }

    p {
        font-size: 0.875rem;
        line-height: 1.2;
        text-transform: lowercase;
    }

    a {
        display: flex;
        flex-direction: column;
        text-decoration: none;
        color: var(--white);
        height: 100%;
    }

    .linkWrapper {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        align-items: center;
        justify-content: flex-end;
    }
`;

const DoggieCard = ({ name, age, breed, image }) => {
    const [state, setHover] = useState({ hover: false });
    return (
        <DoggieCardStyles 
            image={`${IMAGE_PROXY.url}fill/540/416/ce/0/plain/${IMAGE_PROXY.storage}${image}`}
            onMouseOver={() => setHover({ hover: true })}
            onMouseOut={() => setHover({ hover: false })}
        >
            <a href="/">
                <div className="metaWrapper">
                    <h3>{name}</h3>
                    <p>{ages.find(a => a.id === age).displayName},</p>
                    <p>{breeds.find(b => b.id === breed).displayName}</p>
                </div>
                <div className="linkWrapper">
                    <BaseLink 
                        className={state.hover && 'hover'}
                    >Узнать больше</BaseLink>
                </div>
            </a>
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
                            image={doggie.image}
                        />
                    </GridItem>
            ))}
        </Grid>
    );
};

export default graphql(listDoggies, {
    options: {
      fetchPolicy: 'cache-and-network'
    },
    props: props => ({
      doggies: props.data.listDoggies ? props.data.listDoggies.items : []
    })
  })(Suggestions);
