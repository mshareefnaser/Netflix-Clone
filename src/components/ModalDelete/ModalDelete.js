import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
function ModalDelete(props) {
    const serverUrl = `${process.env.REACT_APP_serverURL}/newmovies/${props.data.movie_id}`;
    const handleDeleteMovie = () => {
        axios.delete(serverUrl)
        .then((response) => {console.log(response.data)})
        .catch((error) => {console.log(error)});
        props.close();
    }
    return (
        <Modal show={props.show} onHide={props.close}>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>{props.data.movie_name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Are you sure you want to delete it from favorites?</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={props.close}>Close</Button>
                    <Button variant="danger" onClick={handleDeleteMovie}>Delete</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
    );
}

export default ModalDelete;