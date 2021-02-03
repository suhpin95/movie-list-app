import React from 'react'
import PropTypes from 'prop-types'
const Movie = ({ movieList }) => {
  return (
        <div>
            <label>Title</label>
            <h3>{movieList.title}</h3>
            <label>Description</label>
            <h3>{movieList.description}</h3>
        </div>
  )
}

Movie.propTypes = {
  movieList: PropTypes.arrayOf(PropTypes.any).isRequired
}

export default Movie
