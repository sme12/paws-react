import React from 'react';
import styled from 'styled-components';
import ContentStyles from './styles/ContentStyles';
import { Grid, GridItem } from './styles/Grid';
import { GhostButton } from './shared/Button';
import { BaseLink } from './shared/Link';
import { NavLink } from "react-router-dom";

const FooterStyles = styled.div`
    footer {
        padding: 24px 0;
        font-size: var(--font-size-0);
    }
`;

const Footer = () => {
    return (
        <FooterStyles>  
            <footer>
                <ContentStyles>
                    <Grid
                        templateColumns="repeat(3, 1fr)"
                        alignItems="center"
                    >
                        <GridItem column="auto" justifySelf="left">
                            <p>&copy; PAWS Studio 2021</p>
                        </GridItem>
                        <GridItem column="auto" justifySelf="center">
                            <p>
                                <BaseLink href="https://github.com/sme12/paws-react">Посмотреть код на Github</BaseLink>
                            </p>
                        </GridItem>
                        <GridItem column="auto">
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                                <NavLink 
                                    to="/about"
                                    style={{ 
                                        color: 'var(--white)',
                                        textDecoration: 'none',
                                        marginRight: '24px'
                                    }}>
                                    О проекте
                                </NavLink>
                                <GhostButton
                                    type="button"
                                    className="footer-button"
                                >
                                    Поддержать
                                </GhostButton>
                            </div>
                        </GridItem>
                    </Grid>
                </ContentStyles>
            </footer>
        </FooterStyles>
    );
};

export default Footer;
