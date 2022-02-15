import React from 'react'
import { useState, useEffect } from "react";
import MovieList from '../MovieList/MovieList';


function Home() {
    const [dataState, setData] = useState();
    const getData = async () => {
       
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER}`)
            const data = await response.json();
            console.log(data.results);
            setData(data.results);
        } catch (error) {
      //      console.log("error", error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <h1>Home</h1>
           {
               
                dataState &&  (<MovieList  dataFromHome={dataState} />)
                
           }
        </>

    );
}

export default Home