import React from 'react'
import { useRef } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ModalMovie(props) {


    const commentRef = useRef();

    
    //Start Functions

    //Start fun HandleComment
    function handleComment(event) {
        event.preventDefault();
        const comment = commentRef.current.value;
        const newMovie = { ...props.chosenMovie, comment };
        props.updateCommentInMovie(props.chosenMovie.id, newMovie);
    }
    //End fun HandleComment


    //Start handleFav 
    async function handleAddFav(event, movie) {
        event.preventDefault();
        // `INSERT INTO list_movies(movie_name, poster_path, overview) VALUES($1, $2, $3) RETURNING * ;`
        const dataToBeSent = {
            movie_name: movie.title,
            poster_path: movie.poster_path,
            overview: movie.overview

        }

        // console.log(dataToBeSent);

        const url = `${process.env.REACT_APP_SERVER}/addMovie`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToBeSent)
        })
        const data = await response.json();
        console.log(response.status);
        console.log(data);


    }
    //End handleFav 


    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.chosenMovie.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.chosenMovie.overview}</Modal.Body>
                <Modal.Footer>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>comment:{props.chosenMovie.comment ? props.chosenMovie.comment : "add your comment"}</Form.Label>
                            <Form.Control ref={commentRef} type="text" placeholder="Enter your comment" />
                            <Form.Text className="text-muted">

                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleComment}>
                            Submit
                        </Button>
                    </Form>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button style={{ backgroundColor: "purple" }} variant="primary" onClick={(event) => { handleAddFav(event, props.chosenMovie) }}>Add to Fav.</Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}

export default ModalMovie