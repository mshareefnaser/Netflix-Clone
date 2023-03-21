import { useEffect,useState } from "react";
import MovieList from "../MovieList/MovieList";
function Home() {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const sendRequest = async () => {
        const serverUrl = 'http://localhost:3000/trending';
        const response = await fetch(serverUrl);
        const data = await response.json();
        setTrendingMovies(data);
        console.log(data);
    }
    useEffect (() => {
        sendRequest();
    }, [])

    return (
        <>
            <MovieList trendingMovies={trendingMovies} />
        </>
    )
}
export default Home;