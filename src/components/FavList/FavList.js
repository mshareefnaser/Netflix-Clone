import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
// import Movie from '../Movie/Movie';
import FavoriteCard from '../FavoriteCard/FavoriteCard';
function FavList() {
    const [favoriteMovies, setFavoriteMovies] = useState([]);
    const sendRequest = async () => {
        const serverUrl = `${process.env.REACT_APP_serverURL}/newmovies` ;
        const response = await fetch(serverUrl);
        const data = await response.json();
        setFavoriteMovies(data);
        console.log(data);
    }
    useEffect(() => { sendRequest() }, []);
    return (
        <>
            <Row xs={1} md={4} className="g-4">
                {favoriteMovies.map((FavoriteMovie) => {
                    return <Col>
                        <FavoriteCard FavoriteMovie={FavoriteMovie} />
                    </Col>
                })}
            </Row>


        </>
    );
}
export default FavList;