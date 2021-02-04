import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'
import AppReducer from './AppReducer'

const initialState = {
  movieList: [
    { id: 1, title: 'Temp1', description: 'Lorum Ipsum' },
    { id: 2, title: 'Temp2', description: 'Lorum Ipsum' }
  ]
}

export const MovieContext = createContext(initialState)
export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // Actions
  function addMovies (movie) {
    dispatch({
      type: 'ADD_MOVIE',
      payload: movie
    })
  }
  return (
      <MovieContext.Provider value = {
          {
            movieList: state.movieList,
            addMovies
          }
      }>
          {children}
      </MovieContext.Provider>
  )
}
MovieProvider.propTypes = {
  children: PropTypes.any
}
