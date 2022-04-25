// React & Bootstrap
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

// Imports
import SWAPI from '../services/SWAPI'
import GetIDFromURl from '../services/helpers/GetIDFromURL'


export default function FilmsList() {
  const [films, setFilms] = useState([])

  const getFilms = async () => {
    const data = await SWAPI.getAllFilms()
    setFilms(data.results)
  }

  useEffect(() => {
    getFilms()
  }, [])


  return (

    <>
      <h1>Films</h1>

      <ListGroup className="filmslist">
        {films.map(film => 
            <ListGroup.Item key={GetIDFromURl(film.url)}>
              <h3>{film.title}</h3>
              <p><span>Episode:</span> {film.episode_id}</p>
              <p><span>Relase date:</span> {film.release_date}</p>
              <p><span>Characters:</span> {film.characters.length}</p>
              <Button 
                as={Link} 
                to={`/films/${GetIDFromURl(film.url)}`}
                // size="lg"
              >Read more</Button>
            </ListGroup.Item>
          )}

        </ListGroup>
    </>
  )
}
