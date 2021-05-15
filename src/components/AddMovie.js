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

    const styles = {
        marginRight : '5px',
        paddingLeft : '5px',
        borderRadius: '5px',
        width       : '160px' 
    }
    return(
        <form onSubmit = {(e) => add(e)} >
            <input type = 'text' placeholder = 'title' ref = {titleRef} style = {styles}/>
            <input type = 'text' placeholder = 'description' ref = {desc} style = {styles}/>
            <input type = 'text' placeholder = 'posterURL' ref = {url} style = {styles}/>
            <input type = 'text' placeholder = 'rating' ref = {rating} style = {styles}/>
            <button type = 'submit' style = {{borderRadius : '5px', width : '80px'}}>Add</button>
        </form>
    )
}

export default AddMovie