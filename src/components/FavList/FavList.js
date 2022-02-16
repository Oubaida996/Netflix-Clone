import React, { useEffect } from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';




function FavList(props) {

    const [favListData, setFavListData] = useState();

    async function getDataFromDB() {

        const response = await fetch(`${process.env.REACT_APP_SERVER}/getMovies`);
        const data = await response.json()
        setFavListData(data);

    }

    useEffect(() => { getDataFromDB(); }, []);



    return (
        <>
            <h1>Favorite</h1>
            <h1>This is my favorite list of movies</h1>
     {
         favListData && favListData.map(movie =>{
             return (
                 <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                <Card.Body>
                    <Card.Title>{movie.movie_name}</Card.Title>
                    {console.log(movie.movie_name,"sssssssss")}
                    <Card.Text>
                        {movie.overview}
                    </Card.Text>
                    <Card.Text>
                        comment:{movie.comment ? movie.comment : "add your comment"}
                    </Card.Text>
                </Card.Body>
            </Card>
                 </>
             )
         })
     }
        </>
    );

}

export default FavList