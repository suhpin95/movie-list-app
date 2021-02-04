import React, { useContext } from 'react'
import Movie from './Movie'
import { MovieContext } from '../context/MovieContext'

const ListMovies = () => {
  const { movieList } = useContext(MovieContext)
  console.log(movieList)
  return (
    <>
      <ul>
        {movieList.map(movie =>
          <Movie key = {movie.id} movieList = {movie}/>
        )}
      </ul>
    </>
  )
}

export default ListMovies
