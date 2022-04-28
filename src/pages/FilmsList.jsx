// React & Bootstrap
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Row, Col, Card } from 'react-bootstrap'


// Imports
import SWAPI from '../services/SWAPI'
import GetIDFromURl from '../services/helpers/GetIDFromURL'


export default function FilmsList() {
  // Declarations
  const [films, setFilms] = useState('')
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
        <h2 className="m-3 text-primary">Loading...</h2>
      )}

      {films && (
        <>
          <h2 className="m-3 text-primary">Films</h2>

          <Container fluid="md">
            <Row xs={1} s={2} md={3} >
              {films.map((film, index) => 
                <Col key={index}>
                  <Card className="m-3 bg-secondary text-light">
                    <Card.Header><h3 className="text-warning bold">{film.title}</h3></Card.Header>
                    <Card.Body>
                      <Card.Text><span className="bold">Episode:</span> {film.episode_id}</Card.Text>
                      <Card.Text><span className="bold">Relase date:</span> {film.release_date}</Card.Text>
                      <Card.Text><span className="bold">Characters:</span> {film.characters.length}</Card.Text>
                    </Card.Body>
                    <Button                         
                      as={Link} 
                      to={`/films/${GetIDFromURl(film.url)}`}
                    >Read more</Button>
                  </Card>
                </Col>
              )}
            </Row>
          </Container>
        </>
      )}
    </>
  )
}
