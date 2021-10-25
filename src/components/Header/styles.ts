import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { AntDesign } from '@expo/vector-icons'; 


export const Container = styled.SafeAreaView`
    height: 15%;
    background-color: white;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    padding: 0px 20px;
`

export const Title = styled.Text`
    color: ${({theme})=> theme.colors.text_dark };
    text-align: center;
    padding: 0 20px;
    font-size: 20px;
    font-family: ${({theme})=> theme.fonts.medium};
`

export const Icon = styled(AntDesign)`
    font-size: ${RFValue(20)}px;
    color: black;
`;