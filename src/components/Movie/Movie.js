//Movie.js
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ModalMovie from '../ModalMovie/ModalMovie';
import { useState } from 'react';
function Movie(props) {
    const { trendingMovie } = props;
    const [movieDetails, setMovieDetails] = useState({});
    const [showModal, setShowModal] = useState(false);
    function handleShowModal(trendingMovie) {
        setMovieDetails(trendingMovie);
        setShowModal(true);
    }
    function handleCloseModal() {
        setShowModal(false);
    }
    return (
        <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img width={400} height={400} variant="top" src= {`https://image.tmdb.org/t/p/original/${trendingMovie.poster_path}`} alt={trendingMovie.title} />
                    <Card.Body>
                        <Card.Title>{props.trendingMovie.title}</Card.Title>
                        <Card.Text>
                            {props.trendingMovie.overview}
                        </Card.Text>
                        <Button variant="primary" onClick={()=>handleShowModal(props.trendingMovie)}>Add to favorites</Button>
                        {/**/}
                    </Card.Body>
                </Card>
            <ModalMovie show={showModal} close={handleCloseModal} data={movieDetails}/>
       </>
    )
}
export default Movie;