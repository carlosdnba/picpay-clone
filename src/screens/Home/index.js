import React from 'react';

import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { Wrapper, Header, BalanceContainer, BalanceTitle, Balance, Container } from './styles.js';

import Sugestions from '../../components/Sugestions';
import Activities from '../../components/Activities';
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';

function Home() {
    return (
        <Wrapper>
            <Container>
            <Header>
                <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />

                <BalanceContainer>
                    <BalanceTitle>Meu saldo</BalanceTitle>
                    <Balance>R$ 980.032,00</Balance>
                </BalanceContainer>

                <AntDesign name="gift" size={30} color="#10c86e" />
            </Header>

            <Sugestions />

            <Activities>

            </Activities>

            <Tips />

            <Banner />
            </Container>
        </Wrapper>
    );
}

export default Home;