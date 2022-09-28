import React from "react";
import { Icon, Place, Container } from './styles';

const PlaceIcon = (props) => {

    return (
            <Container>
                <Icon>
                    <img src={props.img} alt="logo" />
                </Icon>
                <Place href="/">
                    {props.text}
                </Place>
            </Container>
    )
}

export default PlaceIcon;