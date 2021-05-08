import './App.css';
import {useState} from 'react'
import MovieList from './components/MovieList'
import Filter from './components/Filter'
import AddMovie from './components/AddMovie'


function App() {

  const data = [
    {
      title : 'Just Mercy',
      description : 'is a 2019 American biographical legal drama film. It tells the true story of Walter McMillian, who, with the help of young defense attorney Bryan Stevenson, appeals his murder conviction. The film is based on the memoir of the same name, written by Stevenson.',
      posterURL  : 'https://m.media-amazon.com/images/M/MV5BYmM4YzA5NjUtZGEyOS00YzllLWJmM2UtZjhhNmJhM2E1NjUxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
      rating    : '9'
    },
    {
      title : 'The Revenant',
      description : 'is a 2019 American biographical legal drama film. It tells the true story of Walter McMillian, who, with the help of young defense attorney Bryan Stevenson, appeals his murder conviction. The film is based on the memoir of the same name, written by Stevenson.',
      posterURL  : 'https://i1.wp.com/diacritik.com/wp-content/uploads/2016/02/the-revenant-2015-poster1.jpg?ssl=1',
      rating    : '9'
    },
    {
      title : 'Tanet',
      description : 'is a 2019 American biographical legal drama film. It tells the true story of Walter McMillian, who, with the help of young defense attorney Bryan Stevenson, appeals his murder conviction. The film is based on the memoir of the same name, written by Stevenson.',
      posterURL  : 'https://images-na.ssl-images-amazon.com/images/I/51acC5xSLZL._AC_.jpg',
      rating    : '10'
    }
  ]

    const [movies, setMovies] = useState(data)
    const [status, setStatus] = useState(false)
    const [filtredMovies, setfiltredMovies] = useState(data)

    const handleMovies = (newData) =>{
      setMovies(newData)
      setfiltredMovies(newData)
      setStatus(false)
      }
    
    const handleStatus = () => {
      setStatus(true)
    }

    const handleFiltredMovies = (newData) =>{
      setfiltredMovies(newData)
      }
    
    // const saveStateToLocalStorage = () => {
    //     localStorage.setItem('movies', JSON.stringify(movies))
    //   }

  return (
    <div className="container">
      <div className="content">
        <Filter data = {movies} handleStatus = {handleStatus} handleFiltredMovies = {handleFiltredMovies} />
        {status ? <AddMovie handleMovies = {handleMovies} data = {movies}/> : <></>}
        <MovieList data = {filtredMovies}/> 
      </div>
    </div>
  );
}

export default App;
