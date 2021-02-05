import React from 'react'
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'
const Movie = ({ movieList }) => {
  return (
        <div className="card">
            <label>Movie <FaTimes
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
  movieList: PropTypes.object
}

export default Movie
