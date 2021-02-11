import React, {useContext, useEffect} from 'react';
import HeaderTitle from "../Components/HeaderTitle";
import TitleContext from "../Context/TitleContext";
import Menu from "../Components/Menu";

const Favorites = () =>{

    const {setTitle} = useContext(TitleContext);

    useEffect(() => {
        setTitle("MIS FAVORITOS");
     });

    return(
        <div>
            <HeaderTitle></HeaderTitle>
            <Menu></Menu>
        </div>
    )
}

export default Favorites;