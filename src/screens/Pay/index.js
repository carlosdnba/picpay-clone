import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import PayCards from '../../components/PayCards';

import {
    itemsServices,
    itemsContacts,
} from './arrays';

import {
    Wrapper,
    Container,
    Header,
    HeaderInput,
    PayOptions,
    SelectedOption,
    PayComponentContainer,
    PayComponentTitle,
} from './styles';

function Pay() {
    const headerInputPlaceHolder = ` Busque quem ou o que quer pagar`;

    return (
        <Wrapper>
            <Container>
                <Header>
                    <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />
                    <HeaderInput placeholder={headerInputPlaceHolder}></HeaderInput>
                </Header>

                <PayOptions>
                    <SelectedOption>Principais</SelectedOption>
                </PayOptions>

                <PayComponentContainer>
                    <PayComponentTitle>Serviços</PayComponentTitle>
                    
                    {itemsServices.map((item) => (
                        <PayCards 
                            key={item.id}
                            routeImg={item.routeImg}
                            componentTitle={item.componentTitle}
                            componentDesc={item.componentDesc}
                        />
                    ))}
                    
                </PayComponentContainer>


                <PayComponentContainer>
                    <PayComponentTitle>Contatos</PayComponentTitle>
                    
                    {itemsContacts.map((item) => (
                        <PayCards 
                            key={item.id}
                            routeImg={item.routeImg}
                            componentTitle={item.componentTitle}
                            componentDesc={item.componentDesc}
                        />
                    ))}
 
                </PayComponentContainer>
            </Container>
        </Wrapper>
    );
}

export default Pay;