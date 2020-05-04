import React from 'react';
import styled from 'styled-components';
import ContentStyles from './styles/ContentStyles';
import {
    NavLink,
    Link
} from "react-router-dom";

const HeaderStyles = styled.div`
    header {
        display: flex;
        align-items: center;
        min-height: 88px;
        background: linear-gradient(180deg, #1E2126 0%, rgba(30, 33, 38, 0.4) 67.96%, rgba(30, 33, 38, 0) 100%);
    }

    .header-inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
`;

const NavStyles = styled.div`
    ul {
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;

        li:not(:last-child) {
            margin-right: 32px;
        }
    }

    a {
        color: var(--white);
        text-decoration: none;
        font-weight: 700;
        line-height: 1.2;
        opacity: .7;
    }

    a:hover,
    a.active {
        opacity: 1;
    }

    .secondary-nav a {
        font-weight: 400;
    }
`;

const Nav = () => {
    return (
        <NavStyles>
            <nav>
                <ul>
                <li>
                    <NavLink exact to="/">
                        Главная
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/list">
                        Объявления
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contacts">
                        Контакты
                    </NavLink>
                </li>
                </ul>
            </nav>
        </NavStyles>
    );
}

const Header = () => {
    return (
        <HeaderStyles>  
            <header>
                <ContentStyles>
                    <div className="header-inner">
                        <Nav />
                        <Link to="/">
                            <img src="./logo.svg" alt="Paws"/>
                        </Link>
                        <NavStyles>
                            <ul className="secondary-nav">
                                <li>
                                    <NavLink to="/about">
                                        О проекте
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/shelters-info">
                                        Информация для приютов
                                    </NavLink>
                                </li>
                            </ul>
                        </NavStyles>
                    </div>
                </ContentStyles>
            </header>
        </HeaderStyles>
    );
};

export default Header;
