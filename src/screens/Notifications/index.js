import React from 'react';

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
    const items = [
        {
            id: 1,
            notificationContent: '🤑 Parcelou, ganhou 🤑 Pague um amigo hoje e parcele o pagamento com PicPay para garantir até 8% de volta.',
            notificationDate: 'Hoje às 9:53'
        },
        {
            id: 2,
            notificationContent: 'Bora de cashback? 😛 É só parcelar um boleto hoje com PicPay e ganhar até 20% de volta. Toque e saiba mais.',
            notificationDate: 'Ontem às 18:28'
        },
        {
            id: 3,
            notificationContent: 'EI, não vai perder esse cashback, né? 💸 Para garantir 8% de volta, é só enviar 💰 para um amigo hoje e parcelar com PicPay.',
            notificationDate: '12 de ago às 12:37'
        },
        {
            id: 4,
            notificationContent: 'Dinheiro de volta... Topa? 🤨 Se sim, toque aqui, parcele um boleto hoje com PicPay e ganhe até 20% de volta.',
            notificationDate: '11 de ago às 17:50'
        },
        {
            id: 5,
            notificationContent: 'Tá cheio de boletos? 📰 Acabe com eles, parcelando com PicPay, e ganhe até 20% de volta. Saiba mais!',
            notificationDate: '10 de ago às 15:33'
        },
        {
            id: 6,
            notificationContent: '🤷‍♂️ Não deixe os amigos esperando 🤷🏾‍♂️ Pague com eles hoje, parcelando com PicPay, e ganhe até 8% de volta! Toque e entenda.',
            notificationDate: 'Hoje às 9:53'
        },{
            id: 7,
            notificationContent: '🤑 Parcelou, ganhou 🤑 Pague um amigo hoje e parcele o pagamento com PicPay para garantir até 8% de volta.',
            notificationDate: 'Hoje às 9:53'
        },
        {
            id: 8,
            notificationContent: 'Bora de cashback? 😛 É só parcelar um boleto hoje com PicPay e ganhar até 20% de volta. Toque e saiba mais.',
            notificationDate: 'Ontem às 18:28'
        },
        {
            id: 9,
            notificationContent: 'EI, não vai perder esse cashback, né? 💸 Para garantir 8% de volta, é só enviar 💰 para um amigo hoje e parcelar com PicPay.',
            notificationDate: '12 de ago às 12:37'
        },
        {
            id: 10,
            notificationContent: 'Dinheiro de volta... Topa? 🤨 Se sim, toque aqui, parcele um boleto hoje com PicPay e ganhe até 20% de volta.',
            notificationDate: '11 de ago às 17:50'
        },
        {
            id: 11,
            notificationContent: 'Tá cheio de boletos? 📰 Acabe com eles, parcelando com PicPay, e ganhe até 20% de volta. Saiba mais!',
            notificationDate: '10 de ago às 15:33'
        },
        {
            id: 12,
            notificationContent: '🤷‍♂️ Não deixe os amigos esperando 🤷🏾‍♂️ Pague com eles hoje, parcelando com PicPay, e ganhe até 8% de volta! Toque e entenda.',
            notificationDate: 'Hoje às 9:53'
        },{
            id: 13,
            notificationContent: '🤑 Parcelou, ganhou 🤑 Pague um amigo hoje e parcele o pagamento com PicPay para garantir até 8% de volta.',
            notificationDate: 'Hoje às 9:53'
        },
        {
            id: 14,
            notificationContent: 'Bora de cashback? 😛 É só parcelar um boleto hoje com PicPay e ganhar até 20% de volta. Toque e saiba mais.',
            notificationDate: 'Ontem às 18:28'
        },
        {
            id: 15,
            notificationContent: 'EI, não vai perder esse cashback, né? 💸 Para garantir 8% de volta, é só enviar 💰 para um amigo hoje e parcelar com PicPay.',
            notificationDate: '12 de ago às 12:37'
        },
        {
            id: 16,
            notificationContent: 'Dinheiro de volta... Topa? 🤨 Se sim, toque aqui, parcele um boleto hoje com PicPay e ganhe até 20% de volta.',
            notificationDate: '11 de ago às 17:50'
        },
        {
            id: 17,
            notificationContent: 'Tá cheio de boletos? 📰 Acabe com eles, parcelando com PicPay, e ganhe até 20% de volta. Saiba mais!',
            notificationDate: '10 de ago às 15:33'
        },
        {
            id: 18,
            notificationContent: '🤷‍♂️ Não deixe os amigos esperando 🤷🏾‍♂️ Pague com eles hoje, parcelando com PicPay, e ganhe até 8% de volta! Toque e entenda.',
            notificationDate: 'Hoje às 9:53'
        },
    ]

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