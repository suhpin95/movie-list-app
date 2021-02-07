import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'
import AppReducer from './AppReducer'

const initialState = {
  movieList: [
    { id: 1, title: 'Pulp Fiction', director: 'Quintin Tarentino' },
    { id: 2, title: 'Dark Knight', director: 'Chris Nolan' }
  ]
}

export const MovieContext = createContext(initialState)
export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // Actions
  // add
  function addMovies (movie) {
    dispatch({
      type: 'ADD_MOVIE',
      payload: movie
    })
  }
  // delete
  function deleteMovies (id) {
    dispatch({
      type: 'DELETE_MOVIE',
      payload: id
    })
  }
  return (
      <MovieContext.Provider value = {
          {
            movieList: state.movieList,
            addMovies,
            deleteMovies
          }
      }>
          {children}
      </MovieContext.Provider>
  )
}
MovieProvider.propTypes = {
  children: PropTypes.any
}
