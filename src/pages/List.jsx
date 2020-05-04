import React from 'react';
import Hero from '../components/Hero';

const List = () => {
    return (
        <div>
            <Hero
                bgImg={'./hero-list.jpg'}
                description={'Каждый из них готов стать вашим другом на всю жизнь.<br>Выбирайте мудро'}
            />
        </div>
    );
};

export default List;
