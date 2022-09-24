import React from "react";
import { Btn } from "./styles";
import {Link} from 'react-router-dom';

const BackButton = () => {

    return (
        <Link to="/">
            <Btn>
                Voltar
            </Btn>
        </Link>    
    )
}

export default BackButton;