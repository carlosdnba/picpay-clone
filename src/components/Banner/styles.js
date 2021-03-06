import styled from 'styled-components/native';

export const Container = styled.View`
    background: #6882bb;
    margin: 0 16px;
    margin-top: 20px;
    border-radius: 8px;
    height: 140px;
    flex-direction: row;
    padding: 15px;
    align-items: center;
`;

export const Details = styled.View`
    flex: 1;
`;

export const Img = styled.Image`
    margin-left: 10px;
`;

export const Title = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`;

export const Description = styled.Text`
    color: #fff;
    font-size: 14px;
    margin-top: 15px;
`;
