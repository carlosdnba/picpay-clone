import React from 'react';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import {
    Container,
    Card,
    CardHeader,
    Avatar,
    Description,
    Bold,
    CardBody,
    TransactionDescription,
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

const ActivitiesCard = ({ 
    description,
    transactionDepositor, 
    transactionReceiver, 
    transactionValue,
    transactionDate,
    commentsNumber,
    likesNumber,
}) => {

    return (
        <Container>
        <Card>
            <CardHeader>
                <Avatar source={avatar} />
                <Description>
                    <Bold>@{transactionDepositor}</Bold> pagou a <Bold>@{transactionReceiver}</Bold>
                </Description>
            </CardHeader>

            <CardBody>
                <TransactionDescription>{ description }</TransactionDescription>
            </CardBody>
            <CardFooter>
                <Details>
                    <Value>R$ {transactionValue}</Value>

                    <Divider />

                    <Feather name="lock" color="#fff" size={14} />
                    
                    <Date>{transactionDate}</Date>
                </Details>

                <Actions>
                    <Option>
                        <MaterialCommunityIcons name="comment-outline" color="#fff" size={14} />
                        <OptionLabel>{commentsNumber}</OptionLabel>    
                    </Option>

                    <Option>
                        <AntDesign name="hearto" color="#fff" size={14} />
                        <OptionLabel>{likesNumber}</OptionLabel>
                    </Option>
                </Actions>
            </CardFooter>
        </Card>
        </Container>
    );
}

export default ActivitiesCard;