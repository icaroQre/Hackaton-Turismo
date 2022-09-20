import React from "react";
import { Container } from "./styles";

import SwiperFirst from "../SwiperFirst";
import { Title } from './styles'

const PlacesSection = ({ text }) => {

    return (

        <Container>
            <Title>
                {text}
            </Title>

            <SwiperFirst />
        </Container>

    )
}

export default PlacesSection;