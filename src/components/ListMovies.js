import React from 'react'
import Movie from './Movie'

const ListMovies = () => {
  const movieList = [
    { id: 1, title: 'Temp1', description: 'Lorum Ipsum' },
    { id: 2, title: 'Temp2', description: 'Lorum Ipsum' }
  ]
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
