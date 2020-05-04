import React from 'react';
import Hero from '../components/Hero';
import { Grid, GridItem } from '../components/styles/Grid';
import { BaseButton } from '../components/shared/Button';

const HomeControls = () => {
    return (
        <Grid
            templateColumns="repeat(12, 1fr)"
        >
            <GridItem column="1 / 7">
                <label htmlFor="city">Я ищу собаку в городе</label>
                <input id="city" name="city" type="text"/>
            </GridItem>
            <GridItem column="7 / 10">
                <label htmlFor="any-city">
                    <span>Любой город</span>
                    <input id="any-city" name="any-city" type="checkbox"/>
                </label>
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
