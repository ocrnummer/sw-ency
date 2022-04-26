// React & Bootstrap
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

import GetIDFromURl from '../services/helpers/GetIDFromURL'

// Imports
import SWAPI from '../services/SWAPI'


export default function FilmsList() {
  const [people, setPeople] = useState([])
  const [loading, setLoading] = useState(false)



//   const charId = async (id) => {
//     return `/people/${id}`
// }

  const getpeople = async () => {
    setLoading(true)

    const data = await SWAPI.getAllPeople()

    setPeople(data.results)
    setLoading(false)

  }

  useEffect(() => {
    getpeople()
  }, [])

  
  // console.log(people.url.GetIDFromURl())




  return (
    <>
      {loading && (
        <h2>Loading...</h2>
      )}

      {people && (
        <>
          <h1>Characters</h1>

          <ListGroup className="peoplelist">
            {people.map(people => 
              <ListGroup.Item key={GetIDFromURl(people.url)}>
                <h3>{people.name}</h3>
                <p><span>Gender:</span> {people.gender}</p>
                <p><span>Born:</span> {people.birth_year}</p>
                <p><span>In:</span> {people.films.length} films</p>
                <Button 
                  as={Link} 
                  to={`/people/${GetIDFromURl(people.url)}`}
                >Read more</Button>
              </ListGroup.Item>
            )}
          </ListGroup>
        </>
      )}
    </>
  )
}
