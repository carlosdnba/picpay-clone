import styled from 'styled-components/native';

export const Wrapper = styled.View`
    flex: 1;
    background: #000;
`;

export const Container = styled.ScrollView``;

export const Header = styled.View`
    height: 60px;
    padding: 0 16px;
    flex-direction: row;
    align-items: center;
`;

export const HeaderInput = styled.TextInput`
    background: #000;
    margin-left: 20px;
    padding: 5px;
    height: 36px;
    width: 264px;
    border: 1px #fff; 
    border-radius: 20px;
    color: #fff;
`;

export const PayOptions = styled.View`
    margin-top: 30px;
    margin-left: 20px;
    flex-direction: row;
    align-items: center;
`;

export const SelectedOption = styled.Text`
    color: #fff;
    font-size: 24px;
    font-weight: bold;
`;

export const PayComponentContainer = styled.View`
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const PayComponentTitle = styled.Text`
    margin-left: 15px;
    margin-bottom: 8px;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
`;

