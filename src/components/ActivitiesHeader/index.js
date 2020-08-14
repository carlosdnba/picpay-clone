import React from 'react';

import { 
    Container,
    Header,
    Title,
    HeaderLeft,
    HeaderButton,
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
                    <HeaderButton>
                        <TextTotal>Todas</TextTotal>
                    </HeaderButton>
                    
                    <HeaderButton>
                        <TextMine>Minhas</TextMine>
                    </HeaderButton>
                </HeaderLeft>
            </Header>

            
              
        </Container>
    );
}

export default Activities;