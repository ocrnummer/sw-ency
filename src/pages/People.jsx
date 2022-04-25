// React & Bootstrap
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'

// Imports
import SWAPI from '../services/SWAPI'
import GetIDFromURl from '../services/helpers/GetIDFromURL'


export default function People() {
  
  const [person, setPerson] = useState([])
  const [loading, setLoading] = useState(false)
  const { films } = person;
  const { id } = useParams()

  const getPersonById = async (id) => {
    setLoading(true)

    const data = await SWAPI.getPerson(id)

    setPerson(data)
    setLoading(false)
  }

  useEffect(() => {
    getPersonById(id)
  }, [id])


  return (
    <div>

      {loading && (
        <p>Loading...</p>
      )}
      {person && (
        <>
          <ListGroup>
            <h3>{person.name}</h3>
            <p><span>Gender:</span> {person.gender}</p>
            <p><span>Height:</span> {person.height}</p>
            <p><span>mass:</span> {person.mass}</p>
            <p><span>Hair color:</span> {person.hair_color}</p>
            <p><span>Skin color:</span> {person.skin_color}</p>
            <p><span>Eye color:</span> {person.eye_color}</p>
          </ListGroup>

          <ListGroup.Item>
            <p><span>Featured in film:</span></p>
              {(films || []).map((film, index) => 
                (
                  <ListGroup.Item
                    action
                    as={Link}
                    to={`/films/${GetIDFromURl(film)}`}
                    key={GetIDFromURl(film)}
                  >Film {index+1}</ListGroup.Item>
                )
              )}
          </ListGroup.Item>
        </>
      )}
    </div>
  )
}
