import styled from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity``;

export const Container = styled.View`
    background: #000;
    height: 100px;
    padding: 5px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
`;

export const NotificationContent = styled.Text`
    color: #fff;
    font-size: 14px;
`;

export const NotificationDate = styled.Text`
    color: #8e8e93;
    font-size: 12px;
`;

export const Divider = styled.View`
    color: #8e8e93;
    height: 5px;
    width: 300px;
`;