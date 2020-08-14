import styled from 'styled-components/native';

export const Wrapper = styled.View`
    background: #000;
    flex: 1;
`

export const Container = styled.View`
    background: #000;
    flex: 1;
    margin: 0 0 50px 0;
`;

export const Header = styled.View`
    background: #1c1c1e;
    height: 60px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const HeaderTitle = styled.Text`
    color: #fff;
    margin-left: 15px;
    font-size: 18px;
    font-weight: bold;
`;


export const ConfigureButton = styled.TouchableOpacity``; 

export const ConfigureButtonLabel = styled.Text`
    color: #0db060;
    margin-right: 15px;
    font-size: 14px;
    font-weight: bold;
    
`; 

export const NotificationsContainer = styled.View`
    padding: 0 15px;
`;

export const NotificationsScroll = styled.ScrollView``;