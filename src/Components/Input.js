import React, {useState} from "react";
import Axios from "axios";
import "../Styles/Input.css";

const Input = () =>{

    const [inputValue, setInputValue] = useState("");
    const [movies, setMovies] = useState([]);
        
    const getMovie = () => {
        let moviesUrl = "https://api.themoviedb.org/3/movie/popular?api_key=1a33d2a63d1685081b5d07f619b37cd4";

        Axios.get(moviesUrl)
        .then(res => {
            console.log(res.data.results[7].title);
            setMovies(res.data.results);
        })
        .catch(er => console.log(er));
    };

    return(
        <div>
            <div className="container">    
                <input placeholder="Search movie" onChange={e => setInputValue(e.target.value)}/>
                <div className="button-container">
                    <button onClick={getMovie}>
                        Search!
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Input;