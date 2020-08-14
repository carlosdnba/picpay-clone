import React from 'react';

import { Wrapper, Container, NotificationContent, NotificationDate, Divider } from './styles';

const NotificationsCard = ({notificationContent, notificationDate}) => {
    return (
        <Wrapper>
        <Container>
            <NotificationContent>{notificationContent}</NotificationContent>
            <NotificationDate>{notificationDate}</NotificationDate>
        </Container>
        <Divider />
        </Wrapper>
    );
}

export default NotificationsCard;