// React & Bootstrap
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'

// Imports
import SWAPI from '../services/SWAPI'
import GetIDFromURl from '../services/helpers/GetIDFromURL'



export default function Film() {
  
  const [film, setFilm] = useState([])
  const [loading, setLoading] = useState(false)
  const { id } = useParams()
  const { characters} = film;


  const getFilmById = async (id) => {
    setLoading(true)

    const data = await SWAPI.getFilm(id)

    setFilm(data)
    setLoading(false)

  }

  useEffect(() => {
    getFilmById(id)
  }, [id])


  return (
    <div>
      {loading && (
        <p>Loading...</p>
      )}
      {film && (
        <>
          <ListGroup>

            <ListGroup.Item>
              <h3>{film.title}</h3>
              <p><span>Episode:</span> {film.episode_id}</p>
              <p><span>Director:</span> {film.director}</p>
              <p><span>Producer:</span> {film.producer}</p>
              <p><span>Release date:</span>  {film.release_date}</p>
            </ListGroup.Item>

            <ListGroup.Item>
              <p><span>Characters:</span></p>
              {(characters || []).map((char, index) => 
              (
                <ListGroup.Item
                  action
                  as={Link}
                  to={`/people/${GetIDFromURl(char)}`}
                  key={GetIDFromURl(char)}
                >Character {index+1}</ListGroup.Item>
              )
              )}
            </ListGroup.Item>
          </ListGroup>
        </>
      )}
    </div>
  )
}
