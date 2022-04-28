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

  const style = "col-md-6 mx-auto d-flex flex-column align-items-start bg-secondary text-light" 



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
        <h2 className="m-3 text-primary">Loading...</h2>
      )}

      {person && (
        <>
          <ListGroup>
            <ListGroup.Item className={style}>
              <h3 className="text-warning bold">{person.name}</h3>
              <p><span className="bold">Gender:</span> {person.gender}</p>
              <p><span className="bold">Height:</span> {person.height} cm</p>
              <p><span className="bold">mass:</span> {person.mass} kg</p>
              <p><span className="bold">Hair color:</span> {person.hair_color}</p>
              <p><span className="bold">Skin color:</span> {person.skin_color}</p>
              <p><span className="bold">Eye color:</span> {person.eye_color}</p>
            </ListGroup.Item>
          </ListGroup>

          <ListGroup.Item className={style}>
            <p><span className="bold">Featured in film:</span></p>
              {(films || []).map((film, index) => 
                (
                  <ListGroup.Item
                    className={style}
                    action
                    as={Link}
                    to={`/films/${GetIDFromURl(film)}`}
                    key={GetIDFromURl(film)}
                  >Film {index+1}</ListGroup.Item>
                )
              )}
          </ListGroup.Item>

          <Button 
            className="col-md-6 mx-auto m-3"
            onClick={() => navigate(-1)}
          >Back</Button>
        </>
      )}
    </>
  )
}
