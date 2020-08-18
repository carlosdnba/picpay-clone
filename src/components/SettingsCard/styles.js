import styled from 'styled-components/native';

export const SettingsComponent = styled.TouchableOpacity`
    background: #000;
    border: 0.2px solid #4f4f4f;
    height: 70px;
    padding: 10px;

    flex-direction: column;
    justify-content: space-evenly;
`;

export const SettingsComponentInsideTitle = styled.Text`
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    margin-left: 5px;
`;

export const SettingsComponentInsideText = styled.Text`
    color: #8e8e93;
    font-size: 14px;
    font-weight: 100;
    margin-left: 5px;
`;