import React, {useContext} from 'react';
import TitleContext from "../Context/TitleContext";
import "../Styles/HeaderTitle.css";

const HeaderTitle = () =>{

    const {title} = useContext(TitleContext);

    return(
        <div>
            <div className="header">
                <h1>
                    {title}
                </h1>
            </div>
        </div>
    )
}

export default HeaderTitle;