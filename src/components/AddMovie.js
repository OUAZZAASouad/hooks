import {useRef} from 'react'
const AddMovie = ({handleMovies, data}) =>{
    const titleRef = useRef(null)
    const desc = useRef(null)
    const url = useRef(null)
    const rating = useRef(null)

    const add = (e) =>{
        e.preventDefault()
        let new_movies = [...data, {title : titleRef.current.value, description: desc.current.value, posterURL : url.current.value, rating : rating.current.value}]
        handleMovies(new_movies) 
    }  
    return(
        <form onSubmit = {(e) => add(e)} style = {{margin : '10px'}}>
            <input type = 'text' placeholder = 'title' ref = {titleRef}/>
            <input type = 'text' placeholder = 'description' ref = {desc}/>
            <input type = 'text' placeholder = 'posterURL' ref = {url}/>
            <input type = 'text' placeholder = 'rating' ref = {rating}/>
            <button type = 'submit' >Add</button>
        </form>
    )
}

export default AddMovie