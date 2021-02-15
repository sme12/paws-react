import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Grid, GridItem } from '../styles/Grid';
import { BaseLink } from './Link';
import styled from 'styled-components';
import { IMAGE_PROXY } from '../../constants';
import ages from '../../dictionaries/ages';
import breeds from '../../dictionaries/breeds';

import { useQuery, gql } from '@apollo/client';

const LIST_DOGGIES = gql`
  query {
    listDoggies(limit: 4) {
      items {
        id
        name
        age
        breed
        image
        shelter {
            name
        }
      }
    }
  }
`;

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

const DoggieCard = ({ name, age, breed, image, id }) => {
    const [state, setHover] = useState({ hover: false });
    return (
        <DoggieCardStyles 
            image={`${IMAGE_PROXY.url}fill/540/416/ce/0/plain/${IMAGE_PROXY.storage}${image}`}
            onMouseOver={() => setHover({ hover: true })}
            onMouseOut={() => setHover({ hover: false })}
        >
            <Link to={`/profile/${id}`}>
                <div className="metaWrapper">
                    <h3>{name}</h3>
                    <p>{ages[age]},</p>
                    <p>{breeds[breed]}</p>
                </div>
                <div className="linkWrapper">
                    <BaseLink 
                        className={state.hover && 'hover'}
                    >Узнать больше</BaseLink>
                </div>
            </Link>
        </DoggieCardStyles>
    )
}

const Suggestions = () => {
    const { loading, error, data } = useQuery(LIST_DOGGIES);

    if (error) return 'Error :(';
    return (
        loading ? 'Загружаем хвосты...' :
        <Grid
            templateColumns="repeat(4, 1fr)"
            alignItems="center"
        >
            {data.listDoggies.items.map((doggie, index) => (
                    <GridItem column="auto" justifySelf="left" fullWidth key={index}>
                        <DoggieCard 
                            name={doggie.name}
                            age={doggie.age}
                            breed={doggie.breed}
                            image={doggie.image}
                            id={doggie.id}
                        />
                    </GridItem>
            ))}
        </Grid>
    );
};

export default Suggestions;
