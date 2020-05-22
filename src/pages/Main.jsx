import React from 'react';
import Hero from '../components/Hero';
import { Grid, GridItem } from '../components/styles/Grid';
import { BaseButton } from '../components/shared/Button';
import { Toggle } from '../components/shared/Checkbox';
import Suggestions from '../components/shared/Suggestions';
import ContentStyles from '../components/styles/ContentStyles';
import Autocomplete from '../components/shared/Autocomplete';

const CITY_LIST = [
    'Самара',
    'Санкт-Петербург',
    'Саранск',
    'Саратов'
]

const DOGGIES = [
    {
        name: 'Проня',
        age: 'Щенок',
        breed: 'Метис',
        image: 'https://paws-react.herokuapp.com/sign/fill/540/416/ce/0/plain/s3://paws-bucket/pronya.jpg'
    },
    {
        name: 'Байкал',
        age: 'Щенок',
        breed: 'Метис',
        image: 'https://paws-react.herokuapp.com/sign/fill/540/416/ce/0/plain/s3://paws-bucket/baykal.jpg'
    },
    {
        name: 'Михалыч',
        age: 'Молодой пёс',
        breed: 'Метис',
        image: 'https://paws-react.herokuapp.com/sign/fill/540/416/ce/0/plain/s3://paws-bucket/mihalych.jpg'
    },
    {
        name: 'Вишня',
        age: 'Молодая собака',
        breed: 'Метис',
        image: 'https://paws-react.herokuapp.com/sign/fill/540/416/ce/0/plain/s3://paws-bucket/vishnya.jpg'
    },
]

const HomeControls = () => {
    return (
        <Grid
            templateColumns="repeat(12, 1fr)"
            alignItems="center"
        >
            <GridItem column="1 / 7">
                <Autocomplete 
                    label="Я ищу собаку в городе:"
                    placeholder="Начните набирать название города"
                    name="city"
                    options={CITY_LIST}
                />
            </GridItem>
            <GridItem column="7 / 10" style={{marginTop: '39px'}}>
                <Toggle
                    name="any-city"
                >
                    Любой город
                </Toggle>
            </GridItem>
            <GridItem column="10 / 13" style={{marginTop: '39px'}}>
                <BaseButton className="home-controls-button">Давайте посмотрим!</BaseButton>
            </GridItem>
        </Grid>
    );
}

const Main = () => {
    return (
        <div>
            <Hero 
                bgImg={'./hero-home.jpg'}
                description={'Вы здесь, чтобы найти самого верного друга в мире.<br>Они здесь, чтобы подарить вам свою любовь.'}
            >
                <HomeControls />
            </Hero>
            <ContentStyles>
                <div style={{paddingTop: '56px', paddingBottom: '48px', fontSize: '24px'}}>
                    <p style={{margin: '0 auto 56px auto', maxWidth: '757px', textAlign: 'center'}}>
                        Или посмотрите среди этих отличных ребят, которые прямо сейчас ищут свой дом
                    </p>
                    <div style={{marginBottom: '48px'}}>
                        <Suggestions doggies={DOGGIES} />
                    </div>
                    <Grid
                        templateColumns="repeat(3, 1fr)"
                        alignItems="center"
                    >
                        <GridItem column="1 / 3" justifySelf="left">
                            <p>
                                ...и еще тысячи хвостов в приютах по всем городам России
                            </p>
                        </GridItem>
                        <GridItem column="3 / 4">
                            <BaseButton>Перейти к объявлениям</BaseButton>
                        </GridItem>
                    </Grid>
                </div>
            </ContentStyles>
        </div>
    );
};

export default Main;
