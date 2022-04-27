/*
*   Imports
*/

import axios from 'axios'

/*
*   delcarations
*/

axios.defaults.baseURL = 'https://swapi.dev/api'

/*
*   Functions
*/

const get = async (endpoint) => {
    try {
        const res = await axios.get(endpoint) 
        return res.data
    } catch (err) {
        return err;
    }
}

const getAllPeople = async (page) => {
    return get(`/people/?page=${page}`)
}

const getPerson = async (id) => {
    return get(`/people/${id}/`)
}

const getAllFilms = async () => {
    return get(`/films/`)
}

const getFilm = async (id) => {
    return get(`/films/${id}/`)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	getAllPeople,
	getPerson,
	getAllFilms,
	getFilm,
}