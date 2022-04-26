// React & Bootstrap
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import ListGroup from 'react-bootstrap/ListGroup'
// import Button from 'react-bootstrap/Button'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Card from 'react-bootstrap'
import { Button, Container, Row, Col, Card } from 'react-bootstrap'


// Imports
import SWAPI from '../services/SWAPI'
import GetIDFromURl from '../services/helpers/GetIDFromURL'


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
          <h2>Films</h2>

          <Container fluid="md">
            <Row xs={1} s={2} md={3} >
              {films.map((film, index) => 
                <Col key={index}>
                  <Card className="filmslist m-3">
                    <Card.Header><h3>{film.title}</h3></Card.Header>
                    <Card.Body>
                      <Card.Text>Episode: {film.episode_id}</Card.Text>
                      <Card.Text>Relase date: {film.release_date}</Card.Text>
                      <Card.Text>Characters: {film.characters.length}</Card.Text>
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
