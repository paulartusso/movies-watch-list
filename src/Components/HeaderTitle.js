import React, {useContext} from 'react';
import TitleContext from "../Context/TitleContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import "../Styles/HeaderTitle.css";
import "../Styles/Menu.css";

const HeaderTitle = () =>{

    const {title} = useContext(TitleContext);
    let backIcon;
    let plusIcon;
    if(title === "HOME") {
        backIcon = <span></span>
        plusIcon = <span></span>
    } else {
        backIcon =
            <span>
                <FontAwesomeIcon icon={faChevronLeft} className="links"/>
            </span>
        plusIcon =
            <span>
                <FontAwesomeIcon icon={faPlusCircle} className="links"/>
            </span>
    }

    return(
        <div className="header">
            {backIcon}
            <h1>
                {title}
            </h1>
            {plusIcon}
        </div>
    )
}

export default HeaderTitle;