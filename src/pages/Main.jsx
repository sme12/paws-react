import React, { useState } from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero';
import { Grid, GridItem } from '../components/styles/Grid';
import { BaseLink } from '../components/shared/Link';
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

const ArticleCardStyles = styled.div`
    cursor: pointer;
    padding: 0 16px;

    a {
        display: flex;
        flex-direction: column;
        text-decoration: none;
        color: var(--white);
        height: 100%;
    }

    .icon {
        margin: 0 auto 16px auto;
        width: 96px;
        height: 96px;
    }

    h2 {
        margin-bottom: 16px;
        font-size: 1.5rem;
        font-weight: bold;
        line-height: 1.5;
        text-align: center;
    }

    p {
        margin-bottom: 16px;
        font-size: 1rem;
        line-height: 1.5;
    }

    .linkWrapper {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        align-items: center;
        justify-content: flex-end;
    }
`;

const ArticleCard = ({ heading, text, icon }) => {
    const [state, setHover] = useState({ hover: false });
    return (
    <ArticleCardStyles
        onMouseOver={() => setHover({ hover: true })}
        onMouseOut={() => setHover({ hover: false })} 
    >
        <a href="/">
            <div className="metaWrapper">
                <div class="icon"><img src={icon} alt={heading}/></div>
                <h2>{heading}</h2>
                <p>{text}</p>
            </div>
            <div className="linkWrapper">
                <BaseLink 
                    className={state.hover && 'hover'}
                >Читать дальше</BaseLink>
            </div>
        </a>
    </ArticleCardStyles>
    )
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
            <section style={{paddingTop: '56px', paddingBottom: '48px', fontSize: '24px'}}>
                <ContentStyles>
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
                </ContentStyles>
            </section>
            <section style={{paddingTop: '40px', paddingBottom: '24px', backgroundColor: 'var(--bg-grey)'}}>
                <ContentStyles>
                        <Grid
                            templateColumns="repeat(3, 1fr)"
                            alignItems="center"
                        >
                            <GridItem column="auto">
                                <ArticleCard
                                    icon="./icon-questions.svg"
                                    heading="У меня масса вопросов!"
                                    text="В формате вопрос-ответ рассказываем о самом важном в адаптации собаки в семью. Рекомендации к прочтению - практически на уровне “обязательно”."
                                ></ArticleCard>
                            </GridItem>
                            <GridItem column="auto">
                                <ArticleCard
                                    icon="./icon-list.svg"
                                    heading="Как подготовиться к собаке?"
                                    text="Ок, вы точно убедились, что морально готовы к собаке. Что теперь? Коротенький чек-лист для будущего хозяина собаки из приюта."
                                ></ArticleCard>
                            </GridItem>
                            <GridItem column="auto">
                                <ArticleCard
                                    icon="./icon-care.svg"
                                    heading="Я хочу помочь по-другому"
                                    text="По каким-то причинам вы не можете взять собаку, но очень хотите ей помочь. Разбираемся, как работает кнопка “Стать куратором” и подходит ли вам эта опция."
                                ></ArticleCard>
                            </GridItem>
                        </Grid>
                </ContentStyles>
            </section>
        </div>
    );
};

export default Main;
