import React, { useState } from "react";
import * as C from "./styles";
import { FaSearch } from 'react-icons/fa';
import data from "./data.json"

const Explore = () => {
    const [filteredData, setFilteredData] = useState([]);

    const handleFilter = (event) => {
        const searchWord = event.target.value
        const newFilter = data.filter((value) => {
            return value.nome.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    }

    return (
        <C.Background>
            <C.ExploreBar>
                <C.Input type="text" placeholder="Onde deseja ir?" onChange={handleFilter} />
                <C.Btn><FaSearch size={20} /></C.Btn>
            </C.ExploreBar>
            {filteredData.length !== 0 && (
                <C.DataResult>
                    {filteredData.slice(0, 5).map((value, key) => {
                        return (
                            <C.a href=" ">
                                <C.p>{value.nome}</C.p>
                            </C.a>)
                    })}
                </C.DataResult>
            )}
        </C.Background>

    )
}

export default Explore;