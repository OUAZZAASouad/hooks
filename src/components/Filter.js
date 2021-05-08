import {React, useState, useEffect} from 'react'

const Filter = ({data, handleStatus, handleFiltredMovies}) => {
    const [keyword, setKeyword] = useState('')
    useEffect(() => {
        let newData = data.filter(item => item.title.toUpperCase().includes(keyword.toUpperCase()) || item.rating.includes(keyword))
        handleFiltredMovies(newData)
      },[keyword]);
    
    
    return(
        <div>
            <input type = 'text' onChange = {(e) => setKeyword(e.target.value)} style = {{width : '50%', marginLeft : '10px'}}/>
            <button onClick={handleStatus} style = {{width : '30%'}}> + Add movie</button>
            
        </div>
    )
}

export default Filter;