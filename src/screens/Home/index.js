import React from 'react';

import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { Wrapper, Header, BalanceContainer, BalanceTitle, Balance, Container } from './styles.js';

import Sugestions from '../../components/Sugestions';
import ActivitiesHeader from '../../components/ActivitiesHeader';
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';
import ActivitiesCard from '../../components/ActivitiesCard';

function Home() {

    const item1 = [
        {
            id: 1,
            transactionDepositor: 'xamps',
            transactionReceiver: 'carlosdnba',
            description: 'Corsinha amarelo',
            transactionValue: '20.000,00',
            transactionDate: '6 horas atrás',
            commentsNumber: 12,
            likesNumber: 52,
        }
    ];

    const items23 = [
        {
            id: 2,
            transactionDepositor: 'caraAleatorio',
            transactionReceiver: 'carlosdnba',
            description: 'Freelancer',
            transactionValue: '1000,00',
            transactionDate: '5 dias atrás',
            commentsNumber: 4,
            likesNumber: 29,
        },
        {
            id: 3,
            transactionDepositor: 'chefe',
            transactionReceiver: 'carlosdnba',
            description: 'Salário',
            transactionValue: '1.600,00',
            transactionDate: '12 horas atrás',
            commentsNumber: 24,
            likesNumber: 67,
        },
    ];

    const items45 = [
        {
            id: 4,
            transactionDepositor: 'caraDaOlx',
            transactionReceiver: 'carlosdnba',
            description: 'Playstation',
            transactionValue: '1200,00',
            transactionDate: '25 dias atrás',
            commentsNumber: 4,
            likesNumber: 29,
        },
        {
            id: 5,
            transactionDepositor: 'chefe',
            transactionReceiver: 'carlosdnba',
            description: 'Salário',
            transactionValue: '1.600,00',
            transactionDate: '30 horas atrás',
            commentsNumber: 24,
            likesNumber: 67,
        },
    ];


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

            {items23.map((item) => (
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

            {items45.map((item) => (
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

            </Container>
        </Wrapper>
    );
}

export default Home;