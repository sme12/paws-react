import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { Grid, GridItem } from '../components/styles/Grid';
import { SecondaryButton } from '../components/shared/Button';
import Autocomplete from '../components/shared/Autocomplete';
import ContentStyles from '../components/styles/ContentStyles';
import { IMAGE_PROXY } from '../constants';
import cityList from '../mocks/cityList';
import ages from '../mocks/ages';

import { Hub } from "@aws-amplify/core";
import { DataStore, Predicates } from '@aws-amplify/datastore';
import { Doggie } from '../models';

const SearchControls = () => {
    return (
        <div>
            <Grid
                templateColumns="repeat(12, 1fr)"
                alignItems="center"
            >
                <GridItem column="1 / 4">
                    <Autocomplete 
                        label="Город:"
                        placeholder="Начните вводить название"
                        name="city"
                        options={cityList}
                    />
                </GridItem>
                <GridItem column="4 / 8">
                    <Autocomplete 
                        label="Порода:"
                        placeholder="Начните вводить название"
                        name="breed"
                        options={['Метис']}
                    />
                </GridItem>
                <GridItem column="8 / 10">
                    <Autocomplete 
                        label="Пол:"
                        placeholder="Выберите ниже"
                        name="sex"
                        options={['Мальчик', 'Девочка']}
                    />
                </GridItem>
                <GridItem column="10 / 13">
                    <Autocomplete 
                        label="Возраст:"
                        placeholder="Выберите ниже"
                        name="age"
                        options={ages}
                    />
                </GridItem>
            </Grid>
        </div>
    );
}

const DoggieSearchResultStyles = styled.div`
    font-size: 1rem;
    background-color: rgba(54, 51, 70, 0.6);
    padding: 16px;
    cursor: pointer;

    h3 {
        font-size: 1.5rem;
        font-weight: bold;
        line-height: 1.5;
    }

    p {
        text-transform: lowercase;
        line-height: 1.5;
    }

    .city {
        text-transform: none;
    }

    a {
        display: flex;
        text-decoration: none;
        color: var(--white);
        height: 100%;
    }

    .imageWrapper {
        height: 144px;
        width: 144px;
        margin-right: 36px;
    }

    .metaWrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;

const DoggieSearchResult = ({ name, age, breed, city, image }) => {
    return (
        <DoggieSearchResultStyles>
            <a href="/">
                <div className="imageWrapper">
                    <img 
                        src={`${IMAGE_PROXY.url}fill/144/144/ce/0/plain/${IMAGE_PROXY.storage}${image}`}
                        alt={`${name}: фотография`}
                    />
                </div>
                <div className="metaWrapper">
                    <h3>{name}</h3>
                    <div>
                        <p>{age}</p>
                        <p>{breed}</p>
                        <p className="city">г.{city}</p>
                    </div>
                </div>
            </a>
        </DoggieSearchResultStyles>
    )
}

const Search = () => {
    const [doggies, setDoggies] = useState( [] );

    useEffect(() => {
        // TODO: Make this in a service

        console.log('search effect');

        const fetchAndSetData = async () => {
            const doggies = await DataStore.query(Doggie, Predicates.ALL, {
                limit: 9
            });
            setDoggies(doggies);
        };

        const removeListener = Hub.listen("datastore", async (capsule) => {
            console.log('listener');
            const { payload: { event } } = capsule;
            console.log('event', event);

            if (event === "ready") {
                // The actual fetch is here
                fetchAndSetData();
            }
        });

        DataStore.start();

        fetchAndSetData();
     
        return () => {
            removeListener();
          };
    }, []);

    return (
        <div>
            <Hero
                bgImg={'./hero-list.jpg'}
                description={'Каждый из них готов стать вашим другом на всю жизнь.<br>Выбирайте мудро'}
            >
                <SearchControls/>
            </Hero>
            <div style={{maxWidth: '368px', margin: '24px auto 0 auto'}}>
                <SecondaryButton>Применить фильтры</SecondaryButton>
            </div>
            <section style={{ paddingTop: '48px', paddingBottom: '48px'}}>
                <ContentStyles>
                    <p style={{marginBottom: '24px', textAlign: 'center', fontSize: '24px', fontWeight: 'bold'}}>
                        Вот кого мы подобрали по вашим пожеланиям
                    </p>
                    <Grid
                        templateColumns="repeat(3, 1fr)"
                        alignItems="center"
                    >
                        {doggies.map((doggie, index) => (
                            <GridItem row="auto" fullWidth key={index}>
                                <DoggieSearchResult
                                    name={doggie.name}
                                    age={doggie.age}
                                    breed={doggie.breed}
                                    city={doggie.city}
                                    image={doggie.image}
                                />
                            </GridItem>
                        ))}
                    </Grid>
                </ContentStyles>
            </section>
            <Footer />
        </div>
    );
};

export default Search;
