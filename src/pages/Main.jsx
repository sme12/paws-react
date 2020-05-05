import React from 'react';
import Hero from '../components/Hero';
import { Grid, GridItem } from '../components/styles/Grid';
import { BaseButton } from '../components/shared/Button';
import { Toggle } from '../components/shared/Checkbox';
import Autocomplete from '../components/shared/Autocomplete';

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
            <div style={{paddingTop: '56px'}}></div>
        </div>
    );
};

export default Main;
