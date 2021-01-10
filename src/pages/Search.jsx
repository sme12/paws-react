import React, { useState, useEffect } from 'react';
import { useUrlSearchParams } from 'use-url-search-params';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { Grid, GridItem } from '../components/styles/Grid';
import { SecondaryButton } from '../components/shared/Button';
import Autocomplete from '../components/shared/Autocomplete';
import ContentStyles from '../components/styles/ContentStyles';
import { IMAGE_PROXY } from '../constants';
import cityList from '../dictionaries/cityList';
import ages from '../dictionaries/ages';
import breeds from '../dictionaries/breeds';
import sex from '../dictionaries/sex';

import { Hub } from "@aws-amplify/core";
import { DataStore, Predicates } from '@aws-amplify/datastore';
import { Doggie } from '../models';

const SearchControls = ({ filters, onChangeFilters }) => {

    const [params] = useUrlSearchParams();

    const [selectedFilters, setSelectedFilters] = useState(params);

    const handleSelect = ({ value, field }) => {
        if (field) {
            const newFilters = selectedFilters;
            newFilters[field] = value; 
            setSelectedFilters(newFilters)
        }
    };

    const handleApplyButtonClick = () => {
        onChangeFilters(selectedFilters);
    };

    return (
        <div style={{ position: 'relative' }}>
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
                        value={selectedFilters.city}
                        onSelect={handleSelect}
                    />
                </GridItem>
                <GridItem column="4 / 8">
                    <Autocomplete 
                        label="Порода:"
                        placeholder="Начните вводить название"
                        name="breed"
                        options={breeds}
                        value={selectedFilters.breed}
                        onSelect={handleSelect}
                    />
                </GridItem>
                <GridItem column="8 / 10">
                    <Autocomplete 
                        label="Пол:"
                        placeholder="Выберите ниже"
                        name="sex"
                        options={sex}
                        value={selectedFilters.sex}
                        onSelect={handleSelect}
                    />
                </GridItem>
                <GridItem column="10 / 13">
                    <Autocomplete 
                        label="Возраст:"
                        placeholder="Выберите ниже"
                        name="age"
                        options={ages}
                        value={selectedFilters.age}
                        onSelect={handleSelect}
                    />
                </GridItem>
            </Grid>
            <div style={{ position: 'absolute', bottom: '-88px', width: '100%', zIndex: '0' }}>
                <div style={{maxWidth: '368px', margin: '24px auto 0 auto'}}>
                    <SecondaryButton onClick={handleApplyButtonClick}>Применить фильтры</SecondaryButton>
                </div>
            </div>
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
                        <p>{ages.find(a => a.id === age).displayName}</p>
                        <p>{breeds.find(b => b.id === breed).displayName}</p>
                        <p className="city">г.{cityList.find(c => c.id === city).displayName}</p>
                    </div>
                </div>
            </a>
        </DoggieSearchResultStyles>
    )
}

const Search = () => {
    const [doggies, setDoggies] = useState( [] );

    const [filters, setFilter] = useUrlSearchParams({
            city: 0,
            breed: 0,
            sex: 0,
            age: 0
    });

    const handleChangeFilters = (selectedFilters) => {
        setFilter(selectedFilters);
    };

    useEffect(() => {
        // TODO: Make this in a service

        const fetchAndSetData = async () => {
            const city = cityList.find(city => city.id === parseInt(filters.city, 10));
            const age = ages.find(age => age.id === parseInt(filters.age, 10));
            const sexx = sex.find(s => s.id === parseInt(filters.sex, 10));

            const buildPredicates = () => {
                if (city && age && sexx) {
                    return c => c.city('eq', city.id).age('eq', age.id).sex('eq', sexx.id);
                }
                if (city && age) {
                    return c => c.city('eq', city.id).age('eq', age.id);
                }
                if (city && sexx) {
                    return c => c.city('eq', city.id).sex('eq', sexx.id);
                }
                if (age && sexx) {
                    return c => c.age('eq', age.id).sex('eq', sexx.id);
                }
                if (sexx) {
                    return c => c.sex('eq', sexx.id);
                }
                if (city) {
                    return c => c.city('eq', city.id);
                }
                if (age) {
                    return c => c.age('eq', age.id);
                }
                return Predicates.ALL;
            };
 
            const doggies = await DataStore.query(
                Doggie,
                buildPredicates(),
                { limit: 9 }
            );
            setDoggies(doggies);
        };

        const removeListener = Hub.listen("datastore", async (capsule) => {
            const { payload: { event } } = capsule;

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
    }, [filters]);

    return (
        <div>
            <Hero
                bgImg={'./hero-list.jpg'}
                description={'Каждый из них готов стать вашим другом на всю жизнь.<br>Выбирайте мудро'}
            >
                <SearchControls
                    filters={filters}
                    onChangeFilters={handleChangeFilters}
                />
            </Hero>
            <div style={{ height: '88px' }}>
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
