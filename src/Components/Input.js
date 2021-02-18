import React, {useState } from "react";
import Card from "./Card";
import Axios from "axios";
import "../Styles/Input.css";

const Input = () =>{

    const [inputValue, setInputValue] = useState("");
    const [movies, setMovies] = useState([]);
    const [randomMovie, setRandomMovie] = useState("");
        

    const getMovie = () => {
        if(inputValue !== ""){
            let moviesUrl = "https://api.themoviedb.org/3/search/movie?api_key=1a33d2a63d1685081b5d07f619b37cd4&query="+encodeURIComponent(inputValue);

            Axios.get(moviesUrl)
            .then(res => {
                setMovies(res.data.results);
            })
            .catch(er => console.log(er));
        } else {
            console.log("EMPTY")
        }
    };

    const getRandom = () => {
        let randomNumber = Math.floor(Math.random() * (133 - 1) ) + 1;
        let url =  `https://api.themoviedb.org/3/movie/${randomNumber}?api_key=1a33d2a63d1685081b5d07f619b37cd4&language=en-US`
        console.log(url)
        Axios.get(url)
            .then(res => {
                setRandomMovie(res.data);
                console.log(res.data.title)
            })
            .catch(er => console.log(er));
        };

    return(
        <div>
            <div className="container">    
                <input placeholder="Buscar peli! Ej: Soul" onChange={e => setInputValue(e.target.value)}/>
                <div className="button-container">
                    <button onClick={getRandom}>
                        Random
                    </button>
                    <button onClick={getMovie}>
                        Buscar!
                    </button>
                </div>
            </div>
            <p>{randomMovie.title}</p>
                {movies.map((movie)=>{
                    return(
                        <Card
                        title = {movie.title}>
                        </Card>
                    )
                })}
        </div>
    )
}

export default Input;