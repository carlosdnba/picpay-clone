import React from 'react';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { 
    Container,
    Header,
    Title,
    HeaderLeft,
    TextTotal,
    TextMine,
    Card,
    CardHeader,
    Avatar,
    Description,
    Bold,
    CardBody,
    UserName,
    CardFooter,
    Details,
    Value,
    Divider,
    Date,
    Actions,
    Option,
    OptionLabel,
} from './styles';

import avatar from '../../images/avatar.png';

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

            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>@michel</Bold> pagou a <Bold>@carlosdnba</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>Fotografias</UserName>
                </CardBody>
                <CardFooter>
                    <Details>
                        <Value>R$ 100,00</Value>

                        <Divider />

                        <Feather name="lock" color="#fff" size={14} />
                        <Date>6 horas atrás</Date>
                    </Details>

                    <Actions>
                        <Option>
                            <MaterialCommunityIcons name="comment-outline" color="#fff" size={14} />
                            <OptionLabel>0</OptionLabel>    
                        </Option>

                        <Option>
                            <AntDesign name="hearto" color="#fff" size={14} />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Actions>
                </CardFooter>
            </Card>
            
            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>@champs</Bold> pagou a <Bold>@carlosdnba</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>Corsinha amarelo</UserName>
                </CardBody>
                <CardFooter>
                    <Details>
                        <Value>R$ 20.000,00</Value>

                        <Divider />

                        <Feather name="lock" color="#fff" size={14} />
                        <Date>30 dias atrás</Date>
                    </Details>

                    <Actions>
                        <Option>
                            <MaterialCommunityIcons name="comment-outline" color="#fff" size={14} />
                            <OptionLabel>0</OptionLabel>    
                        </Option>

                        <Option>
                            <AntDesign name="hearto" color="#fff" size={14} />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Actions>
                </CardFooter>
            </Card>
           
            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@carlosdnba</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>Dinheiro do app</UserName>
                </CardBody>
                <CardFooter>
                    <Details>
                        <Value>R$ 250,00</Value>

                        <Divider />

                        <Feather name="lock" color="#fff" size={14} />
                        <Date>4 dias atrás</Date>
                    </Details>

                    <Actions>
                        <Option>
                            <MaterialCommunityIcons name="comment-outline" color="#fff" size={14} />
                            <OptionLabel>0</OptionLabel>    
                        </Option>

                        <Option>
                            <AntDesign name="hearto" color="#fff" size={14} />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Actions>
                </CardFooter>
            </Card>
            
        </Container>
    );
}

export default Activities;