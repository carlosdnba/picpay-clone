import React from 'react';

import { Entypo } from '@expo/vector-icons';

import {
    PayComponent,
    PayComponentImg,
    PayComponentInsideTitle,
    PayComponentInsideDesc,
    PayComponentText,
    Dots
} from './styles.js'

const PayCards = ({
    routeImg,
    componentTitle,
    componentDesc
}) => {
    return (
        <PayComponent>
            <PayComponentImg source={routeImg} />
            <PayComponentText>
                <PayComponentInsideTitle>{componentTitle}</PayComponentInsideTitle>
                <PayComponentInsideDesc>{componentDesc}</PayComponentInsideDesc>
            </PayComponentText>
            <Dots><Entypo name="dots-three-vertical" size={24} color="#fff" /></Dots>
        </PayComponent>
    );
}

export default PayCards;