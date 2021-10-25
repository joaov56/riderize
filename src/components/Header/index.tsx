import React from 'react';
import { Container, Title, Icon } from './styles'
import { AntDesign } from '@expo/vector-icons'; 

export function Header(){
    return(
        <Container>
            <Icon name="arrowleft"/>
                <Title>Pedalada</Title>
            <Icon name="setting" />

        </Container>
    )
}