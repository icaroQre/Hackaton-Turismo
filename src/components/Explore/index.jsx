import React from "react";
import { Bar,Btn,ExploreBar } from "./styles";

import { FaSearch } from 'react-icons/fa';

const Explore = () => {

    return (
        <>
            <ExploreBar>
                <Bar type="text" placeholder="Onde quer ir?"/>
                <Btn><FaSearch size={20} /></Btn>
            </ExploreBar>
        </>
    )
}

export default Explore;