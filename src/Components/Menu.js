import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilm, faTv, faHome} from '@fortawesome/free-solid-svg-icons';
import "../Styles/Menu.css";

const Menu = () =>{
    return(
        <div>
            <div className="menu">
                <FontAwesomeIcon icon={faHome}/>
                <FontAwesomeIcon icon={faFilm}/>
                <FontAwesomeIcon icon={faTv}/>
                <FontAwesomeIcon icon={faSearch}/>
            </div>
        </div>
    )
}

export default Menu;