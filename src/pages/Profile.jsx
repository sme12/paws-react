/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { Grid, GridItem } from '../components/styles/Grid';
import { SecondaryButton } from '../components/shared/Button';
import Autocomplete from '../components/shared/Autocomplete';
import { BaseLink } from '../components/shared/Link';
import ContentStyles from '../components/styles/ContentStyles';
import { IMAGE_PROXY } from '../constants';
import cityList from '../dictionaries/cityList';
import ages from '../dictionaries/ages';
import breeds from '../dictionaries/breeds';
import sex from '../dictionaries/sex';

import { useQuery, gql } from '@apollo/client';

const DOGGIE = gql`
    query GetDoggie($id: ID!) {
        getDoggie(id: $id) {
            age
            breed
            city
            description
            image
            name
            sex
            shelter {
                phone
                vk
                name
                instagram
                id
                facebook
                email
                city
            }
        }
    }
`;

const ProfileHeroBottomStyles = styled.div`
    h3 {
        margin-bottom: 8px;
        font-size: 24px;
    }
    p {
        font-size: 18px;
        margin-bottom: 8px;
    }
`;

const ProfileHeroBottom = ({ name, age, breed, city }) => {
    return (
        <ProfileHeroBottomStyles>
            <div style={{ position: 'relative' }}>
                <Grid
                    templateColumns="repeat(2, 1fr)"
                    alignItems="center"
                >
                    <GridItem>
                        <h3>{name}</h3>
                        <p style={{ textTransform: 'lowercase' }}>{ages[age]}, {breeds[breed]}</p>
                        <p>г. {cityList[city]}</p>
                    </GridItem>
                    <GridItem justifySelf="end">
                        Test
                    </GridItem>
                </Grid>
            </div>
        </ProfileHeroBottomStyles>
    );
}

const Profile = () => {
    const { id } = useParams();
    console.log(id);

    const { loading, error, data } = useQuery(DOGGIE, {
        notifyOnNetworkStatusChange: true,
        variables: {
            id: id
        }
    });

    console.log(DOGGIE)

    return (
        <div>
            <Hero
                bgImg={data && `${IMAGE_PROXY.url}fill/2400/1040/ce/1/plain/${IMAGE_PROXY.storage}${data.getDoggie.image}`}
            >
                {
                    data &&
                    <ProfileHeroBottom
                        name={data.getDoggie.name}
                        age={data.getDoggie.age}
                        breed={data.getDoggie.breed}
                        city={data.getDoggie.city}
                    />
                }
            </Hero>
            <div style={{ height: '88px' }}>
            </div>
            <section style={{ paddingTop: '48px', paddingBottom: '48px'}}>
                    <ContentStyles>
                        <p>Content is here</p>
                    </ContentStyles>
            </section>
            <Footer />
        </div>
    );
};

export default Profile;
