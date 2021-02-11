import React, {useContext, useEffect} from 'react';
import HeaderTitle from "../Components/HeaderTitle";
import TitleContext from "../Context/TitleContext";
import Input from "../Components/Input";

const Home = () =>{

    const {setTitle} = useContext(TitleContext);
    /*
    const [movies, setMovies] = useState([]);
        
    useEffect(()=> {
        let moviesUrl = "https://api.themoviedb.org/3/movie/popular?api_key=1a33d2a63d1685081b5d07f619b37cd4";

        Axios.get(moviesUrl)
        .then(res => {
            console.log(res.data.results)
            setMovies(res.data.results);
        })
        .catch(er => console.log(er));
    }, []);
    */
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