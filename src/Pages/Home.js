import React, {useContext, useEffect} from 'react';
import HeaderTitle from "../Components/HeaderTitle";
import TitleContext from "../Context/TitleContext";

const Home = () =>{

    const {setTitle} = useContext(TitleContext);

    useEffect(() => {
        setTitle("Home");
     });

    return(
        <div>
            <HeaderTitle></HeaderTitle>
        </div>
    )
}

export default Home;