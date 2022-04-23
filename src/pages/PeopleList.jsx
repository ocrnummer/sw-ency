// React & Bootstrap
import { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

// Imports
import SWAPI from '../services/SWAPI'


export default function FilmsList() {
  const [people, setPeople] = useState([])

  const getpeople = async () => {
    const data = await SWAPI.getAllPeople()
    setPeople(data.results)
  }

  useEffect(() => {
    getpeople()
  }, [])


  return (

    <>
      <h1>Characters</h1>

      <ListGroup className="filmslist">
        {people.map(people => 
            <ListGroup.Item key={people.id}>
              <h3>{people.name}</h3>
              <p>Gender: {people.gender}</p>
              <p>Born: {people.birth_year}</p>
              <p>In: {people.films.length} films</p>
              <Button>Read more</Button>
            </ListGroup.Item>
          )}

        </ListGroup>
    </>
  )
}
