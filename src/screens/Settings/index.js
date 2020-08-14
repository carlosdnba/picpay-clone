import React from 'react';
import { AntDesign } from '@expo/vector-icons'; 

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
    SettingsComponentInsideText,
    SettingsComponentInsideTitle,
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

                    <SettingsComponent>
                        <SettingsComponentInsideTitle>Meu número</SettingsComponentInsideTitle>
                        <SettingsComponentInsideText>celular</SettingsComponentInsideText>
                    </SettingsComponent>

                    <SettingsComponent>
                        <SettingsComponentInsideTitle>Meu E-mail</SettingsComponentInsideTitle>
                        <SettingsComponentInsideText>d************2@gmail.com</SettingsComponentInsideText>
                    </SettingsComponent>
                    
                    <SettingsComponent>
                        <SettingsComponentInsideTitle>Dados pessoais</SettingsComponentInsideTitle>
                        <SettingsComponentInsideText>Nome, CPF e data de nascimento</SettingsComponentInsideText>
                    </SettingsComponent>
                    
                    <SettingsComponent>
                        <SettingsComponentInsideTitle>Conta Bancária</SettingsComponentInsideTitle>
                    </SettingsComponent>
                    
                    <SettingsComponent>
                        <SettingsComponentInsideTitle>Taxas e limites</SettingsComponentInsideTitle>
                    </SettingsComponent>
                    
                    <SettingsComponent>
                        <SettingsComponentInsideTitle>Meus endereços</SettingsComponentInsideTitle>
                    </SettingsComponent>
                    
                    <SettingsComponent>
                        <SettingsComponentInsideTitle>Meus favoritos</SettingsComponentInsideTitle>
                    </SettingsComponent>
                    
                    <SettingsComponent>
                        <SettingsComponentInsideTitle>Validar identidade</SettingsComponentInsideTitle>
                        <SettingsComponentInsideText>Não verificado</SettingsComponentInsideText>
                    </SettingsComponent>
                    
                    <SettingsComponent>
                        <SettingsComponentInsideTitle>Atualizar cadastro</SettingsComponentInsideTitle>
                    </SettingsComponent>
                </SettingsComponentContainer>

                <SettingsComponentContainer>
                    <SettingsComponentTitle>Promoções</SettingsComponentTitle>
                    
                    <SettingsComponent>
                        <SettingsComponentInsideTitle>Usar código promocional</SettingsComponentInsideTitle>
                    </SettingsComponent>
                </SettingsComponentContainer>

                <SettingsComponentContainer>
                    <SettingsComponentTitle>Minhas assinaturas</SettingsComponentTitle>
                    
                    <SettingsComponent>
                        <SettingsComponentInsideTitle>Ver minhas assinaturas</SettingsComponentInsideTitle>
                    </SettingsComponent>
                </SettingsComponentContainer>

                <SettingsComponentContainer>
                    <SettingsComponentTitle>Para o meu negócio</SettingsComponentTitle>
                    
                    <SettingsComponent>
                        <SettingsComponentInsideTitle>PicPay PRO</SettingsComponentInsideTitle>
                    </SettingsComponent>

                    <SettingsComponent>
                        <SettingsComponentInsideTitle>Para estabelecimentos</SettingsComponentInsideTitle>
                    </SettingsComponent>
                    
                    <SettingsComponent>
                        <SettingsComponentInsideTitle>Venda por assinaturas</SettingsComponentInsideTitle>
                    </SettingsComponent>
                </SettingsComponentContainer>

                <SettingsComponentContainer>
                    <SettingsComponentTitle>Configurações</SettingsComponentTitle>
                    
                    <SettingsComponent>
                        <SettingsComponentInsideTitle>Usar digital pra pagar</SettingsComponentInsideTitle>
                    </SettingsComponent>
                    
                    <SettingsComponent>
                        <SettingsComponentInsideTitle>Alterar senha</SettingsComponentInsideTitle>
                    </SettingsComponent>
                    
                    <SettingsComponent>
                        <SettingsComponentInsideTitle>Privacidade</SettingsComponentInsideTitle>
                    </SettingsComponent>
                    
                    <SettingsComponent>
                        <SettingsComponentInsideTitle>Notificações</SettingsComponentInsideTitle>
                    </SettingsComponent>
                    
                    <SettingsComponent>
                        <SettingsComponentInsideTitle>Contas vinculadas</SettingsComponentInsideTitle>
                    </SettingsComponent>
                </SettingsComponentContainer>

                <SettingsComponentContainer>
                    <SettingsComponentTitle>Geral</SettingsComponentTitle>
                    
                    <SettingsComponent>
                        <SettingsComponentInsideTitle>Precisa de ajuda?</SettingsComponentInsideTitle>
                    </SettingsComponent>
                    
                    <SettingsComponent>
                        <SettingsComponentInsideTitle>Sobre o PicPay</SettingsComponentInsideTitle>
                    </SettingsComponent>
                    
                    <SettingsComponent>
                        <SettingsComponentInsideTitle>Desativar minha conta</SettingsComponentInsideTitle>
                    </SettingsComponent>
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