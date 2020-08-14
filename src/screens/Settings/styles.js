import styled from 'styled-components/native';

export const Wrapper = styled.View`
    flex: 1;
    background: #1c1c1e;
`;
export const Container = styled.ScrollView``;

export const Header = styled.View`
    flex-direction: column;
    align-items: center;
`;

export const HelpView = styled.TouchableOpacity`
    margin-top: 20px;
    margin-right: 20px;
    flex-direction: row;
    align-self: flex-end;
`;

export const HelpLabel = styled.Text`
    color: #0db060;
    font-size: 16px;
    font-weight: bold;
`;

export const Img = styled.Image`
    margin-top: 30px;
    width: 100px;
    height: 100px;
`;

export const UserNick = styled.Text`
    margin-top: 10px;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
`;

export const UserName = styled.Text`
    margin-top: 5px;
    color: #8e8e93;
    font-size: 14px;
    font-weight: 100;
    
`;

export const ProfileButton = styled.TouchableOpacity`
    margin-top: 8px;
`;

export const ProfileButtonLabel = styled.Text`
    color: #0db060;
`;



export const SettingsComponentContainer = styled.View`
    margin-top: 15px;
`;

export const SettingsComponentTitle = styled.Text`
    margin-left: 15px;
    margin-bottom: 8px;
    color: #0db060;
    font-weight: bold;
`;

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
`;

export const SettingsComponentInsideText = styled.Text`
    color: #8e8e93;
    font-size: 14px;
    font-weight: 100;
`;

export const SettingsComponentLogoffTitle = styled.Text`
    color: red;
    font-size: 14px;
    font-weight: bold;
`;

export const BottomSpace = styled.View`
    height: 30px;
`;
