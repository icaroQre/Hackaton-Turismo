import React from "react";
import { Icon, Place, Container } from './styles';
import {Link} from 'react-router-dom';

const PlaceIcon = (props) => {

    return (
        <Link style={{ textDecoration: "none"}} to="/details">
            <Container>
                <Icon>
                    <img src={props.img} alt="logo" />
                </Icon>
                <Place href="/">
                    {props.text}
                </Place>
            </Container>
        </Link>
    )
}

export default PlaceIcon;