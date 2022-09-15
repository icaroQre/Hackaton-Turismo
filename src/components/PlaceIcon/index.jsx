import React from "react";
import { Icon, Place, Container } from './styles';

const PlaceIcon = ({ img, text }) => {

    return (
        <Container>
            <Icon>
                {img}
            </Icon>
            <Place href="/">
                {text}
            </Place>
        </Container>
    )
}

export default PlaceIcon;