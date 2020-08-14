import styled from 'styled-components/native';

export const Container = styled.View`
    margin-top: 25px;
    padding: 0 16px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between
`;  

export const Title = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`;
 
 export const HeaderLeft = styled.View`
    flex-direction: row;
    justify-content: space-between 
 `;

 export const HeaderButton = styled.TouchableOpacity``;

 export const TextTotal = styled.Text`
    font-size: 16px;
    color: #10c86e;
    text-decoration: underline;
 `;
 
 export const TextMine = styled.Text`
    color: #fff;    
    font-size: 16px;
    margin-left: 10px;
 `;
