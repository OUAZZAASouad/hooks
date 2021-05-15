import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import {faStarHalf} from '@fortawesome/free-solid-svg-icons'
const MovieCard = ({...others}) => {
    const len = others.rating/2 ;
    const arr = new Array(5).fill(0);
    console.log(arr)
    return(
            <div style = {{display : 'flex', justifyContent : 'space-between', marginBottom : '10px', marginTop : '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                <img src = {others.posterURL} width = '150px' height = 'auto'/>
                <div style = {{width : '78%', paddingRight :'10px', display : 'flex', flexDirection : 'column', justifyContent : 'space-between'}}>
                    <h1 style = {{color : '#333333'}}>{others.title}</h1>
                    <p style = {{color : 'gray'}}>{others.description}</p>
                    <div>{arr.map((item, index) => <FontAwesomeIcon icon = { len % 1 !== 0 && index + 1 === Math.round(len) ? faStarHalf : faStar} color = {index + 1 <= Math.round(len) ? 'yellow' : 'gray'}/>)}</div>
                </div>
                
            </div>
           
    )
}

export default MovieCard;