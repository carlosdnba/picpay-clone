import React from 'react';

import { AntDesign } from '@expo/vector-icons'; 

import SettingsCard from '../../components/SettingsCard';

import {
    itemsAccount,
    itemsPromotion,
    itemsSignature,
    itemsBusiness,
    itemsSettings,
    itemsGeneral,
} from './arrays';

import {
    Wrapper,
    Container,
    Header,
    HelpView,
    HelpLabel,
    Img,
    UserNick,
    UserName,
    ProfileButton,
    ProfileButtonLabel,
    SettingsComponentContainer,
    SettingsComponentTitle,
    SettingsComponent,
    SettingsComponentLogoffTitle,
    BottomSpace,   
} from './styles';

import avatar from '../../images/avatar.png';

function Settings() {

    return (
        <Wrapper>
            <Container>
                <Header>
                    <HelpView>
                        <HelpLabel>Ajuda</HelpLabel>
                    </HelpView>

                    <Img source={avatar} />

                    <UserNick>@carlosdnba</UserNick>
                    <UserName>Carlos Daniel do N. Barboza</UserName>

                    <ProfileButton>
                        <ProfileButtonLabel>Ver meu perfil <AntDesign name="caretright" size={14} color="#0db060" /> </ProfileButtonLabel>
                    </ProfileButton>
                </Header>

                <SettingsComponentContainer>
                    <SettingsComponentTitle>Minha conta</SettingsComponentTitle>

                    {itemsAccount.map((item) => (
                        <SettingsCard 
                            key={item.id}
                            componentTitle={item.componentTitle}
                            componentText={item.componentText}
                        />
                    ))}

                </SettingsComponentContainer>

                <SettingsComponentContainer>
                    <SettingsComponentTitle>Promoções</SettingsComponentTitle>

                    {itemsPromotion.map((item) => (
                        <SettingsCard 
                            key={item.id}
                            componentTitle={item.componentTitle}
                            componentText={item.componentText}
                        />
                    ))}
                </SettingsComponentContainer>

                <SettingsComponentContainer>
                    <SettingsComponentTitle>Minhas assinaturas</SettingsComponentTitle>

                    {itemsSignature.map((item) => (
                        <SettingsCard 
                            key={item.id}
                            componentTitle={item.componentTitle}
                            componentText={item.componentText}
                        />
                    ))}
                </SettingsComponentContainer>

                <SettingsComponentContainer>
                    <SettingsComponentTitle>Para o meu negócio</SettingsComponentTitle>

                    {itemsBusiness.map((item) => (
                        <SettingsCard 
                            key={item.id}
                            componentTitle={item.componentTitle}
                            componentText={item.componentText}
                        />
                    ))}
                </SettingsComponentContainer>

                <SettingsComponentContainer>
                    <SettingsComponentTitle>Configurações</SettingsComponentTitle>

                    {itemsSettings.map((item) => (
                        <SettingsCard 
                            key={item.id}
                            componentTitle={item.componentTitle}
                            componentText={item.componentText}
                        />
                    ))}
                </SettingsComponentContainer>

                <SettingsComponentContainer>
                    <SettingsComponentTitle>Geral</SettingsComponentTitle>

                    {itemsGeneral.map((item) => (
                        <SettingsCard 
                            key={item.id}
                            componentTitle={item.componentTitle}
                            componentText={item.componentText}
                        />
                    ))}
                </SettingsComponentContainer>

                <SettingsComponentContainer>
                    <SettingsComponent>
                        <SettingsComponentLogoffTitle>Sair</SettingsComponentLogoffTitle>
                    </SettingsComponent>
                </SettingsComponentContainer>

                <BottomSpace />
            </Container>
        </Wrapper>    
    )
}

export default Settings;