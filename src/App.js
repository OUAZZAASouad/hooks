import './App.css';
import {useState} from 'react'
import MovieList from './components/MovieList'
import Filter from './components/Filter'
import AddMovie from './components/AddMovie'


function App() {

  const data = [
    {
      title : 'Just Mercy',
      description : 'Just Mercy dramatizes a real-life injustice with solid performances, a steady directorial hand, and enough urgency to overcome a certain degree of earnest advocacy',
      posterURL  : 'https://m.media-amazon.com/images/M/MV5BYmM4YzA5NjUtZGEyOS00YzllLWJmM2UtZjhhNmJhM2E1NjUxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
      rating    : '9'
    },
    {
      title : 'The Revenant',
      description : 'The Revenant (2015), based on a true story, chronicles the travails of Hugh Glass, a fur trapper (Leonardo DiCaprio) whose companions murder his son and leave him for dead following an attack by a bear.',
      posterURL  : 'https://i1.wp.com/diacritik.com/wp-content/uploads/2016/02/the-revenant-2015-poster1.jpg?ssl=1',
      rating    : '4'
    },
    {
      title : 'Tanet',
      description : 'This is a science fiction-action-thriller film starring John David Washington, Robert Pattinson, Elizabeth Debicki, and Kenneth Branagh, among others. It\'s the story of a secret agent who learns to manipulate the flow of time to prevent an attack from the future that threatens to annihilate the present.',
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
