import {React, useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import './Filter.css'
const Filter = ({data, handleStatus, handleFiltredMovies}) => {
    const [keyword, setKeyword] = useState('')
    const [filterType, setFilterType] = useState('title')
    const [rating, setRating] = useState(10)

    useEffect(() => {
        // let newData = data.filter(item => item.title.toUpperCase().includes(keyword.toUpperCase()) || item.rating.includes(keyword))
        let newData = filterType === 'title' ? data.filter(item => item.title.toUpperCase().includes(keyword.toUpperCase())) : data.filter(item => item.rating === rating)
        handleFiltredMovies(newData)
      },[keyword, rating]);
    
    
    return(
        <div>
            <div className = 'search' style = {{position : 'relative'}}>
                <span><FontAwesomeIcon icon = {faSearch}/></span>
                <input type = 'text' onChange = {(e) => setKeyword(e.target.value)}/>
                <button onClick={handleStatus}> + Add movie</button>
            </div>
            
            
            <input type="radio" id="title" name="filter" value="title" checked = 'checked' onClick = { () => setFilterType('title')}/>
            <label for="title">Title</label>
            <input type="radio" id="rating" name="filter" value="rating" onClick = { () => setFilterType('rating')}/>
            <label for="rating">Rating</label>
            {filterType === 'rating' ? <input type="range" id="range" name="range" min="0" max="10" onChange = {(e) => setRating(e.target.value)}/> : <></>}
            
            
        </div>
    )
}

export default Filter;