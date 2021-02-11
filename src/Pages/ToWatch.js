import React, {useContext, useEffect} from 'react';
import HeaderTitle from "../Components/HeaderTitle";
import TitleContext from "../Context/TitleContext";
import Menu from "../Components/Menu";

const ToWatch = () =>{

    const {setTitle} = useContext(TitleContext);

    useEffect(() => {
        setTitle("PARA VER");
     });

    return(
        <div>
            <HeaderTitle></HeaderTitle>
            <Menu></Menu>
        </div>
    )
}

export default ToWatch;