import React from "react";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faFilm, faSearch, faHome} from '@fortawesome/free-solid-svg-icons';
import "../Styles/Menu.css";

const Menu = () =>{
    return(
        <div>
            <div className="menu">
                <span>
                    <Link to="/Home">
                        <FontAwesomeIcon icon={faHome} className="links"/>
                    </Link>
                </span>
                <span>
                    <Link to="/ToWatch">
                        <FontAwesomeIcon icon={faFilm} className="links"/>
                    </Link>
                </span>
                <span>
                    <Link to="/Favorites">
                        <FontAwesomeIcon icon={faHeart} className="links"/>
                    </Link>
                </span>
                <span>
                    <Link to="/Search">
                        <FontAwesomeIcon icon={faSearch} className="links"/>
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default Menu;