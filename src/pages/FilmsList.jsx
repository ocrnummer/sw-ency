// React & Bootstrap
import { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

// Imports
import SWAPI from '../services/SWAPI'


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
            <ListGroup.Item key={film.id}>
              <h3>{film.title}</h3>
              <p>Episode: {film.episode_id}</p>
              <p>Relase date: {film.release_date}</p>
              <p>Characters: {film.characters.length}</p>
              <Button>Read more</Button>
            </ListGroup.Item>
          )}

        </ListGroup>
    </>
  )
}
