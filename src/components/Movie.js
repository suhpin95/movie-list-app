import React from 'react'
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'

const Movie = ({ movieList, deleteMovies }) => {
  const handleSubmit = (id) => {
    deleteMovies(id)
  }
  return (
        <div className="card">
            <label>Movie <FaTimes
             onClick= { () => { handleSubmit(movieList.id) }}
             id='deletCursor'
             style={{
               color: 'red',
               cursor: 'pointer'
             }}/></label>
            <h3>{movieList.title}</h3>
            <label>Director</label>
            <h3>{movieList.description}</h3>
        </div>
  )
}

Movie.propTypes = {
  movieList: PropTypes.any,
  deleteMovies: PropTypes.func
}

export default Movie
