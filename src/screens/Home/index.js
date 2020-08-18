import React from 'react';

import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { Wrapper, Header, BalanceContainer, BalanceTitle, Balance, Container, Divider } from './styles.js';

import { item1, items2, items3 } from './arrays';

import Sugestions from '../../components/Sugestions';
import ActivitiesHeader from '../../components/ActivitiesHeader';
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';
import ActivitiesCard from '../../components/ActivitiesCard';

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

            <ActivitiesHeader />

            {item1.map((item) => (
                <ActivitiesCard 
                    key={item.id}
                    transactionDepositor={item.transactionDepositor}
                    transactionReceiver={item.transactionReceiver}
                    description={item.description}
                    transactionValue={item.transactionValue}
                    transactionDate={item.transactionDate}
                    commentsNumber={item.commentsNumber}
                    likesNumber={item.likesNumber} 
                />
            ))}

            <Tips />

            {items2.map((item) => (
                <ActivitiesCard 
                    key={item.id}
                    transactionDepositor={item.transactionDepositor}
                    transactionReceiver={item.transactionReceiver}
                    description={item.description}
                    transactionValue={item.transactionValue}
                    transactionDate={item.transactionDate}
                    commentsNumber={item.commentsNumber}
                    likesNumber={item.likesNumber} 
                />
            ))}

            <Banner />

            {items3.map((item) => (
                <ActivitiesCard 
                    key={item.id}
                    transactionDepositor={item.transactionDepositor}
                    transactionReceiver={item.transactionReceiver}
                    description={item.description}
                    transactionValue={item.transactionValue}
                    transactionDate={item.transactionDate}
                    commentsNumber={item.commentsNumber}
                    likesNumber={item.likesNumber} 
                />
            ))}

            <Tips />

            <Banner />

            {item1.map((item) => (
                <ActivitiesCard 
                    key={item.id}
                    transactionDepositor={item.transactionDepositor}
                    transactionReceiver={item.transactionReceiver}
                    description={item.description}
                    transactionValue={item.transactionValue}
                    transactionDate={item.transactionDate}
                    commentsNumber={item.commentsNumber}
                    likesNumber={item.likesNumber} 
                />
            ))}

            <Tips />

            <Divider />
            </Container>
        </Wrapper>
    );
}

export default Home;