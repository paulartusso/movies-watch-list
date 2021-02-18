import React, {useContext, useEffect} from 'react';
import HeaderTitle from "../Components/HeaderTitle";
import TitleContext from "../Context/TitleContext";
import Input from "../Components/Input";

const Home = () =>{

    const {setTitle} = useContext(TitleContext);
    
    useEffect(() => {
        setTitle("HOME");
     });

    return(
        <div>
            <HeaderTitle></HeaderTitle>
            <Input></Input>
        </div>
    )
}

export default Home;