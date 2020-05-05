import React from 'react';
import styled from 'styled-components';
import ContentStyles from './styles/ContentStyles';
import Header from './Header';

const HeroStyles = styled.div`
    .hero {
        display: flex;
        flex-direction: column;
        height: 520px;
        background-image: ${props => `linear-gradient(180deg, rgba(25, 27, 31, 0) 0%, rgba(25, 27, 31, 0.5) 35.23%, rgba(25, 27, 31, 0.7) 52.65%, rgba(25, 27, 31, 0.9) 71.21%, #191B1F 100%), 
            url('${props.bgImg}')`
        };
        background-position-x: center;
        background-position-y: bottom, top;
        background-size: 100% 128px, cover;
        background-repeat: no-repeat;
    }

    .hero-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }

    .description {
        padding-top: 178px;
        font-size: var(--font-size-3);
        line-height: 1,1666666667;
        font-weight: 500;
        color: var(--light-grey);
        text-align: center;
        text-shadow: 0px 8px 16px rgba(0, 0, 0, 0.7);
    }
`;

const Hero = ({ bgImg, description, children }) => {
    return (
        <HeroStyles bgImg={bgImg}>  
            <div className="hero">
                <Header />
                <ContentStyles grow={true}>
                    <div className="hero-content">
                        <div
                            className="description"
                            dangerouslySetInnerHTML={{__html: description}}
                        ></div>
                        <div>{children}</div>
                    </div>
                </ContentStyles>
            </div>
        </HeroStyles>
    );
};

export default Hero;
