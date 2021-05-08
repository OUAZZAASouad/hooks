import React from 'react'
const MovieCard = ({...others}) => {
    return(
        <div style = {{margin : '10px'}}>
            <div style = {{display : 'flex', alignItems : 'flex-end'}}>
                <img src = {others.posterURL} width = '150px' height = '100%'/>
                <div style = {{margin : '10px'}}>
                    <h1>{others.title}</h1>
                    <p>{others.description}</p>
                    <p>{others.rating}</p>
                </div>
                
            </div>
           
           
        </div>
    )
}

export default MovieCard;