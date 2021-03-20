import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { Grid, GridItem } from '../components/styles/Grid';
import { BaseLink } from '../components/shared/Link';
import { BaseButton } from '../components/shared/Button';
import { Toggle } from '../components/shared/Checkbox';
import Suggestions from '../components/shared/Suggestions';
import ContentStyles from '../components/styles/ContentStyles';
import Select from '../components/shared/Select';
import cityList from '../dictionaries/cityList';

const HomeControls = () => {
    const history = useHistory();
    const [city, setCity] = useState({
        value: '',
        disabled: false
    });
    const { register, errors, handleSubmit, setError, clearErrors } = useForm({
        shouldFocusError: false,
    });

    const handleCitySelect = ( value ) => {
        clearErrors(['city']);
        setCity({
            value,
            disabled: false
        });
    };
    const onSubmit = (data) => {
        if (!city.disabled && !Object.keys(cityList).some(c => c === data.city)) {
            setError('city', {
                type: 'manual',
                message: 'В нашей базе нет такого варианта'
            });
            return;
        }

        history.push(`/search${city.value ? `?city=${city.value}` : ''}`);
    }

    const handleAnyCityChange = (event) => {
        const isChecked = event.target.checked;
        if (isChecked) {
            clearErrors(['city']);
            setCity({
                value: '',
                disabled: true
            })
            return;
        }
        setCity({
            value: '',
            disabled: false
        })
    }

    return (
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <Grid
                templateColumns="repeat(12, 1fr)"
                alignItems="center"
            >
                <GridItem column="1 / 7">
                    <Select
                        label="Я ищу собаку в городе:"
                        name="city"
                        placeholder="Выберите город из списка"
                        register={register}
                        onSelect={handleCitySelect}
                        invalid={errors.city}
                        errorMessage={errors.city && errors.city.message}
                        options={cityList}
                        isDefaultDisabled={true}
                    />
                </GridItem>
                <GridItem column="7 / 10" style={{ marginTop: '39px', paddingBottom: '18px' }}>
                    <Toggle
                        name="any-city"
                        onChange={handleAnyCityChange}
                    >
                        Любой город
                    </Toggle>
                </GridItem>
                <GridItem column="10 / 13" style={{ marginTop: '39px', paddingBottom: '18px' }}>
                    <BaseButton 
                        className="home-controls-button"
                    >Давайте посмотрим!</BaseButton>
                </GridItem>
            </Grid>
        </form>
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
                <div className="icon"><img src={icon} alt={heading}/></div>
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
            <section style={{ paddingTop: '56px', paddingBottom: '48px', fontSize: '24px' }}>
                <ContentStyles>
                    <p style={{margin: '0 auto 56px auto', width: '757px', textAlign: 'center'}}>
                        Или посмотрите среди этих отличных ребят, которые прямо сейчас ищут свой дом
                    </p>
                    <div style={{marginBottom: '48px'}}>
                        <Suggestions />
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
            <section style={{ paddingTop: '40px', paddingBottom: '40px', backgroundColor: 'var(--bg-grey)' }}>
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
            <section style={{ paddingTop: '40px', paddingBottom: '24px', backgroundColor: 'var(--bg-grey)' }}>
                <ContentStyles>
                    <Grid
                        templateColumns="repeat(3, 1fr)"
                    >
                        <GridItem column="1 / 2">
                            <p style={{ fontSize: '.875rem', lineHeight: '1.2' }}>
                                PAWS - это доска объявлений от собачьих приютов.
                                Все объявления создаются приютами, и только они несут ответственность за актуальность информации. Модераторы сайта являются исключительно ретрансляторами, помогающими облечь информацию в нужную форму.
                                <br /><br />
                                PAWS - полностью некоммерческий проект. Мы не берём платы за размещение объявлений или за доступ к его материалам. 
                                У нас есть партнёры - производители товаров для собак. Они поддерживают нас финансово в обмен на рекламу. Однако мы предоставляем информационную поддержку только тем, в чьей продукции полностью уверены. Если вы хотите стать нашим партнёром, напишите нам на почту paws-studio@gmail.com, мы обсудим подробности. 
                                Если вы просто хотите помочь нам, вы можете оформить одноразовый или регулярный донат с помощью кнопки “Поддержать” в шапке сайта или в самом низу страницы. 
                            </p>
                        </GridItem>
                        <GridItem column="2 / 4">
                            <div style={{ 
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '100%',
                                height: '240px',
                                marginBottom: '32px',
                                backgroundColor: 'var(--grey)' 
                            }}>Место для вашей рекламы</div>
                            <div style={{ 
                                display: 'flex',
                                alignItems: 'center', 
                            }}>
                                <img 
                                    src="./icon-love.svg"
                                    alt="Пиктограмма: сердце и лапка"
                                    style={{ marginRight: '32px' }}
                                />
                                <p style={{ fontSize: '20px' }}>Спасибо, что помогаете вместе с нами</p>
                            </div>
                        </GridItem>
                    </Grid>
                </ContentStyles>
            </section>
            <Footer />
        </div>
    );
};

export default Main;
