import React from 'react';

import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

import img1 from '../../images/01.png';
import img2 from '../../images/03.png';
import img3 from '../../images/06.png';
import img4 from '../../images/07.png';
import img5 from '../../images/avatar.png';

import {
    Wrapper,
    Container,
    Header,
    HeaderInput,
    PayOptions,
    SelectedOption,
    PayComponentContainer,
    PayComponentTitle,
    PayComponent,
    PayComponentImg,
    PayComponentInsideTitle,
    PayComponentInsideDesc,
    PayComponentText
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
                    
                    <PayComponent>
                        <PayComponentImg source={img1} />
                        <PayComponentText>
                            <PayComponentInsideTitle>Recarga de celular</PayComponentInsideTitle>
                            <PayComponentInsideDesc>Vivo, Claro, Tim, Oi</PayComponentInsideDesc>
                        </PayComponentText>
                        <Entypo name="dots-three-vertical" size={24} color="#fff" />
                    </PayComponent>

                    <PayComponent>
                        <PayComponentImg source={img2} />
                        <PayComponentText>
                            <PayComponentInsideTitle>Recarga de passe</PayComponentInsideTitle>
                            <PayComponentInsideDesc>Recarregue seu passe</PayComponentInsideDesc>
                        </PayComponentText>
                        <Entypo name="dots-three-vertical" size={24} color="#fff" />
                    </PayComponent>

                    <PayComponent>
                        <PayComponentImg source={img3} />
                        <PayComponentText>
                            <PayComponentInsideTitle>Pagar conta</PayComponentInsideTitle>
                            <PayComponentInsideDesc>Pague seus boletos</PayComponentInsideDesc>
                        </PayComponentText>
                        <Entypo name="dots-three-vertical" size={24} color="#fff" />
                    </PayComponent>


                    <PayComponent>
                        <PayComponentImg source={img4} />
                        <PayComponentText>
                            <PayComponentInsideTitle>Cobrar</PayComponentInsideTitle>
                            <PayComponentInsideDesc>Cobre um amigo</PayComponentInsideDesc>
                        </PayComponentText>
                        <Entypo name="dots-three-vertical" size={24} color="#fff" />
                    </PayComponent>
                </PayComponentContainer>


                <PayComponentContainer>
                    <PayComponentTitle>Contatos</PayComponentTitle>
 
                    <PayComponent>
                        <PayComponentImg source={img5} />
                        <PayComponentText>
                            <PayComponentInsideTitle>@Bolsonaro</PayComponentInsideTitle>
                            <PayComponentInsideDesc>Jair Messias Bolsonaro</PayComponentInsideDesc>
                        </PayComponentText>
                        <Entypo name="dots-three-vertical" size={24} color="#fff" />
                    </PayComponent>

                    <PayComponent>
                        <PayComponentImg source={img5} />
                        <PayComponentText>
                            <PayComponentInsideTitle>@Bolsonaro</PayComponentInsideTitle>
                            <PayComponentInsideDesc>Jair Messias Bolsonaro</PayComponentInsideDesc>
                        </PayComponentText>
                        <Entypo name="dots-three-vertical" size={24} color="#fff" />
                    </PayComponent>

                    <PayComponent>
                        <PayComponentImg source={img5} />
                        <PayComponentText>
                            <PayComponentInsideTitle>@Bolsonaro</PayComponentInsideTitle>
                            <PayComponentInsideDesc>Jair Messias Bolsonaro</PayComponentInsideDesc>
                        </PayComponentText>
                        <Entypo name="dots-three-vertical" size={24} color="#fff" />
                    </PayComponent>

                    <PayComponent>
                        <PayComponentImg source={img5} />
                        <PayComponentText>
                            <PayComponentInsideTitle>@Bolsonaro</PayComponentInsideTitle>
                            <PayComponentInsideDesc>Jair Messias Bolsonaro</PayComponentInsideDesc>
                        </PayComponentText>
                        <Entypo name="dots-three-vertical" size={24} color="#fff" />
                    </PayComponent>
                </PayComponentContainer>
            </Container>
        </Wrapper>
    );
}

export default Pay;