import React from 'react'
import { useState, useEffect } from "react";
import MovieList from '../MovieList/MovieList';




function Home() {
    
    const [dataState, setData] = useState();
    const getData = async () => {

        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER}/trending`)
            const data = await response.json();
            console.log(data);
            setData(data);
        } catch (error) {
                 console.log("error", error);
        }
    };

    useEffect(() => {
        getData();
    }, []);


    // Functions
    // Start Fun Update Comment 

    function updateCommentInMovie(id, newMoveHoldCommentFromModalMovie) {

        let updateMovie = dataState.map(movie => {
            if (movie.id === id) {
                movie.comment = newMoveHoldCommentFromModalMovie.comment;
               // console.log(movie ,"ddddddddddddddddddddd");
                return movie;
            } else {
                return movie;
            }
        });

        setData(updateMovie);
    }
 // End Fun Update Comment 
    return (
        <>
      
            <h1>Home</h1>
            {

                dataState && (<MovieList dataFromHome={dataState} updateCommentInMovie={updateCommentInMovie} />)

            }
        </>

    );
}

export default Home