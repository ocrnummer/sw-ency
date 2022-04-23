// React & Bootstrap
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'

// Imports
import SWAPI from '../services/SWAPI'


export default function Film() {
  
  const [film, setFilm] = useState([])
  const { id } = useParams()

  const getFilmById = async (id) => {
    const data = await SWAPI.getFilm(id)
    setFilm(data)
  }

  useEffect(() => {
    getFilmById(id)
  }, [id])


  return (
    <div>
      <h1>Film</h1>

    {film && (
      <>
        <h2>{film.title}</h2>
        <ListGroup>
          <ListGroup.Item>Episode: {film.episode_id}</ListGroup.Item>
          <ListGroup.Item>Director: {film.director}</ListGroup.Item>
          <ListGroup.Item>Producer: {film.producer}</ListGroup.Item>
          <ListGroup.Item>Release date: {film.release_date}</ListGroup.Item>
        </ListGroup>
      </>
      )}


    </div>
  )
}
