import React from 'react';

import { items } from './arrays';

import { 
    Wrapper,
    Container,  
    Header, 
    HeaderTitle,
    ConfigureButton, 
    ConfigureButtonLabel,
    NotificationsContainer,
    NotificationsScroll
} from './styles';

import NotificationsCard from '../../components/NotificationsCard';

function Notifications() {

    return (
        <Wrapper>
        <Container>
            <Header>
                <HeaderTitle>Notificações</HeaderTitle>
                <ConfigureButton>
                    <ConfigureButtonLabel>
                        Configurar
                    </ConfigureButtonLabel>
                </ConfigureButton>
            </Header>
            <NotificationsContainer>
                <NotificationsScroll>
                    {items.map((item) => (
                        <NotificationsCard 
                            key={item.id}
                            notificationContent={item.notificationContent}
                            notificationDate={item.notificationDate}
                        />
                    ))}
                </NotificationsScroll>
            </NotificationsContainer>
        </Container>
        </Wrapper>
    );
}

export default Notifications;