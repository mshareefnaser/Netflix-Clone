//Movie.js
import ModalUpdate from '../ModalUpdate/ModalUpdate';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ModalMovie from '../ModalMovie/ModalMovie';
import { useState } from 'react';
import ModalDelete from '../ModalDelete/ModalDelete';
function FavoriteCard(props) {
    const { FavoriteMovie } = props;
    const [movieDetails, setMovieDetails] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal,setShowDeleteModal] = useState (false);
    function handleShowModal(FavoriteMovie) {
        setMovieDetails(FavoriteMovie);
        setShowModal(true);
    }
    function handleShowDeleteModal (FavoriteMovie)
    {
        setMovieDetails(FavoriteMovie);
        setShowDeleteModal(true);
    }
    function handleCloseModal() {
        setShowModal(false);
    }
    function handleCloseDeleteModal() {
        setShowDeleteModal(false);
    }

    return (
        <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img width={400} height={400} variant="top" src= {`https://image.tmdb.org/t/p/original/${FavoriteMovie.poster_path}`} alt={FavoriteMovie.movie_name} />
                    <Card.Body>
                        <Card.Title>{FavoriteMovie.movie_name}</Card.Title>
                        <Card.Text>
                            {FavoriteMovie.movie_overview}
                        </Card.Text>
                        <Button variant="danger" onClick={()=>handleShowDeleteModal(FavoriteMovie)}>Delete</Button>
                        <Button variant="primary" onClick={()=>handleShowModal(FavoriteMovie)}>Update</Button>
                        {/**/}
                    </Card.Body>
                </Card>
            <ModalUpdate show={showModal} close={handleCloseModal} data={movieDetails}/>
            <ModalDelete show={showDeleteModal} close={handleCloseDeleteModal} data={movieDetails}/>
       </>
    )
}
export default FavoriteCard;