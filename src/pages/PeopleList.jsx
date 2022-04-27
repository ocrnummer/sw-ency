// React & Bootstrap
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Row, Col, Card } from 'react-bootstrap'


import GetIDFromURl from '../services/helpers/GetIDFromURL'

// Imports
import SWAPI from '../services/SWAPI'

export default function FilmsList() {
  // Declarations
  const [people, setPeople] = useState('')
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  // Functions and such
  const getpeople = async (page = 0) => {
    setLoading(true)

    const data = await SWAPI.getAllPeople(page)

    setPeople(data.results)
    setLoading(false)
  }

  useEffect(() => {
    getpeople(page)
  }, [page])

  return (
    <>
      {loading && (
        <h2>Loading...</h2>
      )}

      {people && (
        <>
          <h2>Characters</h2>


          <Container fluid="md">
            <Row xs={1} s={2} md={3}>
            {people.map((people, index) => 
                <Col key={index}>
                  <Card className="filmslist m-3">
                    <Card.Header><h3>{people.name}</h3></Card.Header>
                    <Card.Body>
                      <Card.Text>Gender: {people.gender}</Card.Text>
                      <Card.Text>Born: {people.birth_year}</Card.Text>
                      <Card.Text>In: {people.films.length} films</Card.Text>
                    </Card.Body>
                    <Button                         
                      as={Link} 
                      to={`/people/${GetIDFromURl(people.url)}`}
                    >Read more</Button>
                  </Card>
                </Col>
              )}
            </Row>
          </Container>

          <div className="d-flex justify-content-between align-items-center">
            <div>
              <Button
                onClick={() => setPage(value => value -1)}
                variant="primary"
                disabled={page <= 1}
              >Previous Page</Button>
            </div>
            <div>{page}</div>
            <Button
                onClick={() => setPage(value => value +1)}
                variant="primary"
                disabled={page + 1 >= page.next}
              >Next Page</Button>
          </div>
        </>
      )}
    </>
  )
}
