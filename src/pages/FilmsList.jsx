// React & Bootstrap
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

// Imports
import SWAPI from '../services/SWAPI'
import GetIDFromURl from '../services/helpers/GetIDFromURL'
import { Card } from 'react-bootstrap'


export default function FilmsList() {
  // Declarations
  const [films, setFilms] = useState([])
  const [loading, setLoading] = useState(false)

  // Functions and such
  const getFilms = async () => {
    setLoading(true)

    const data = await SWAPI.getAllFilms()
    setFilms(data.results)

    setLoading(false)
  }

  useEffect(() => {
    getFilms()
  }, [])


  return (
    <>
      {loading && (
        <h2>Loading...</h2>
      )}

      {films && (
        <>
          <h1>Films</h1>

          <Container fluid="md">
            <Card className="filmslist">
              {films.map(film => 
              <>
                <Card.Header>{film.title}</Card.Header>
                <Card.Body>
                  <Card.Text>Episode: {film.episode_id}</Card.Text>
                  <Card.Text>Relase date: {film.release_date}</Card.Text>
                  <Card.Text>Characters: {film.characters.length}</Card.Text>
                </Card.Body>
                <Button 
                  as={Link} 
                  to={`/films/${GetIDFromURl(film.url)}`}
                >Read more</Button>
              </>
              )}
            </Card>
          </Container>
        </>
      )}
    </>
  )
}
