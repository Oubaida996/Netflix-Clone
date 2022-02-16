import React from 'react'
import Movie from '../Movie/Movie';



function MovieList(props) {
    return (
        <>
            {

                props.dataFromHome.map(data => {
                    return (


                        <>
                        {/* {console.log(data.id ,"dddddddddddddddd")} */}
                            <Movie key={data.id} data={data} updateCommentInMovie={props.updateCommentInMovie} />
                        </>

                    );
                })

            }
        </>
    );
}

export default MovieList