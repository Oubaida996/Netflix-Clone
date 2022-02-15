import { useState } from 'react'
import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ModalMovie from '../ModalMovie/ModalMovie';




function Movie(props) {


    const [show, setShow] = useState(false);
    const [chosenMovie, setchosenMovie] = useState();

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);




    function handleShowModle(movie) {
        handleShow();
        setchosenMovie(movie);

    }




    let data = props.data;
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={data.poster_path} />
                <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>
                        {data.overview}
                    </Card.Text>
                    {/* onClick recive call back function ()=> nameFun(dddd) */}
                    <Button style={{ margin: "5px", }} variant="primary" onClick={()=>handleShowModle(data)} >Modal Movie</Button>
                    <Button style={{ backgroundColor: "purple" }} variant="primary">Add to Fav.</Button>
                </Card.Body>
            </Card>
            {
                chosenMovie && (< ModalMovie show={show} handleClose={handleClose} chosenMovie={chosenMovie} />)
            }
        </>

    );
}

export default Movie