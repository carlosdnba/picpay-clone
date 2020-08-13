import React from 'react';

import { 
    Container,
    Header,
    Title,
    HeaderLeft,
    TextTotal,
    TextMine,
} from './styles';

function Activities() {

    return (
        <Container>
            <Header>
                <Title>
                    Atividades
                </Title>
                <HeaderLeft>
                    <TextTotal>Todas</TextTotal>
                    <TextMine>Minhas</TextMine>
                </HeaderLeft>
            </Header>

            
              
        </Container>
    );
}

export default Activities;