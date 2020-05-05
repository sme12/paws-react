import React from 'react';
import Hero from '../components/Hero';
import { Grid, GridItem } from '../components/styles/Grid';
import { BaseButton } from '../components/shared/Button';
import { Toggle } from '../components/shared/Checkbox';

const HomeControls = () => {
    return (
        <Grid
            templateColumns="repeat(12, 1fr)"
            alignItems="center"
        >
            <GridItem column="1 / 7">
                <label htmlFor="city">Я ищу собаку в городе</label>
                <input id="city" name="city" type="text"/>
            </GridItem>
            <GridItem column="7 / 10">
                <Toggle
                    name="any-city"
                >
                    Любой город
                </Toggle>
            </GridItem>
            <GridItem column="10 / 13">
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
