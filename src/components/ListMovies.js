import React, { useContext } from 'react'
import Movie from './Movie'
import { MovieContext } from '../context/MovieContext'

const ListMovies = () => {
  const { movieList, deleteMovies } = useContext(MovieContext)
  return (
    <>
      <ul>
        { movieList.length > 0
          ? movieList.map(
            movie =>
          <Movie key = {movie.id} movieList = {movie} deleteMovies = {deleteMovies}/>
          )
          : 'No Movies to Watch'
        }
      </ul>
    </>
  )
}

export default ListMovies
