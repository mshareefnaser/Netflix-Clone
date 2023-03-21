//ModalMovie.js
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function ModalMovie(props) {
    const { show, close, data } = props;
    const serverUrl = 'http://localhost:3000/newmovies';
    const [comment, setComment] = useState('');
    const handleAddToFavorites = () => {
        const obj = {
        movie_name: data.title,
        movie_comments:comment,
        movie_overview:data.overview,
        poster_path:data.poster_path,
        release_date:data.release_date
        };
        axios.post(serverUrl, obj)
        .then((response) => {console.log(response.data)})
        .catch((error) => {console.log(error)});
        close();
    }
  return (
    <>
  <Modal show={show} onHide={close}>
    <Modal.Header closeButton>
      <Modal.Title>{data.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Card.Img width={400} height={400} variant="top" src= {`https://image.tmdb.org/t/p/original/${data.poster_path}`} alt={data.title} />
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Add your comment</Form.Label>
          <Form.Control as="textarea" rows={3} onChange={(e) => setComment(e.target.value)} />
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={close}>
        Close
      </Button>
      <Button variant="primary"  onClick={handleAddToFavorites}>
        Add to favorites
      </Button>
    </Modal.Footer>
  </Modal>
  </>
);
}

export default ModalMovie;