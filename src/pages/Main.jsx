import React from 'react';
import Hero from '../components/Hero';

const Main = () => {
    return (
        <Hero 
            bgImg={'./hero-home.jpg'}
            description={'Вы здесь, чтобы найти самого верного друга в мире.<br>Они здесь, чтобы подарить вам свою любовь.'}
        />
    );
};

export default Main;
