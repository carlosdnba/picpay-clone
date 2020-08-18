import React from 'react';

import {
    SettingsComponent,
    SettingsComponentInsideTitle,
    SettingsComponentInsideText,
} from './styles.js'

const PayCards = ({
    componentTitle,
    componentText
}) => {
    return (
        <SettingsComponent>
            <SettingsComponentInsideTitle>{componentTitle}</SettingsComponentInsideTitle>
            {componentText? <SettingsComponentInsideText>{componentText}</SettingsComponentInsideText> : <></>}
        </SettingsComponent>
    );
}

export default PayCards;