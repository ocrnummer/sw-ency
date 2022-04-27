// React & Bootstrap
import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ListGroup, Button } from 'react-bootstrap'


// Imports
import SWAPI from '../services/SWAPI'
import GetIDFromURl from '../services/helpers/GetIDFromURL'


export default function People() {
  // Declarations
  const [person, setPerson] = useState([])
  const [loading, setLoading] = useState(false)

  const { films } = person

  const { id } = useParams()
  const navigate = useNavigate()


  // Functions and such
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
    <>
      {loading && (
        <p className="text-light">Loading...</p>
      )}

      {person && (
        <>
          <ListGroup>
            <h3>{person.name}</h3>
            <p><span>Gender:</span> {person.gender}</p>
            <p><span>Height:</span> {person.height} cm</p>
            <p><span>mass:</span> {person.mass} kg</p>
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

          <Button onClick={() => navigate(-1)}>Back</Button>
        </>
      )}
    </>
  )
}
