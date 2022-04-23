// React & Bootstrap
import { useState, useEffect } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

// Imports
import SWAPI from '../services/SWAPI'


export default function People() {
  const [person, setPerson] = useState([])

  const getPersonById = async (id) => {
    const data = await SWAPI.getPerson(id)
    setPerson(data)
  }

  useEffect(() => {
    getPersonById(20)
  }, [])


  return (
    <div>
      <h1>Character</h1>

    {person && (
      <>
        <h2>{person.name}</h2>
        <ListGroup>
          <ListGroup.Item>Gender {person.gender}</ListGroup.Item>
          <ListGroup.Item>Height {person.height}</ListGroup.Item>
          <ListGroup.Item>mass {person.mass}</ListGroup.Item>
          <ListGroup.Item>Hair color{person.hair_color}</ListGroup.Item>
          <ListGroup.Item>Skin color{person.skin_color}</ListGroup.Item>
          <ListGroup.Item>Eye Color{person.eye_color}</ListGroup.Item>
        </ListGroup>
      </>
      )}


    </div>
  )
}
