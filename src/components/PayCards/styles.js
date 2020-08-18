import styled from 'styled-components/native';

export const PayComponent = styled.TouchableOpacity`
    background: #000;
    height: 70px;
    width: 320px;
    margin-top: 10px;

    align-self: center;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const PayComponentImg = styled.Image``;

export const PayComponentText = styled.View`
    margin-left: -80px;
    align-items: flex-start;
    justify-content: space-around;
    flex-grow: 2;
    margin-left: 18px;
`;

export const PayComponentInsideTitle = styled.Text`
    color: #fff;
    font-size: 14px;
    font-weight: bold;
`;

export const PayComponentInsideDesc = styled.Text`
    color: #8e8e93;
    font-size: 14px;
    margin-top: 8px;
`;


export const Dots = styled.View``;