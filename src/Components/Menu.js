import React from "react";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faFilm, faTv, faHome} from '@fortawesome/free-solid-svg-icons';
import "../Styles/Menu.css";

const Menu = () =>{
    return(
        <div>
            <div className="menu">
                <span>
                    <Link to="/Home" className="links">
                        <FontAwesomeIcon icon={faHome}/>
                    </Link>
                </span>
                <span>
                    <Link to="/ToWatch" className="links">
                        <FontAwesomeIcon icon={faFilm}/>
                    </Link>
                </span>
                <span>
                    <FontAwesomeIcon icon={faTv} className="links"/>
                </span>
                <span>
                    <Link to="/Favorites" className="links">
                        <FontAwesomeIcon icon={faHeart}/>
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default Menu;