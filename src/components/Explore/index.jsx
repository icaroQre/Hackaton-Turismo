import React from "react";
import { Bar,Btn,ExploreBar } from "./styles";

import { FaSearch } from 'react-icons/fa';

const Explore = () => {

    return (
        <>
            <ExploreBar>
                <Bar type="text"/>
                <Btn><FaSearch size={25} /></Btn>
            </ExploreBar>
        </>
    )
}

export default Explore;