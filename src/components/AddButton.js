import React from 'react'
import AddMovies from './AddMovies'

const AddButton = () => {
  const toggleForm = () => {
    console.log('Toggling Form')
  }
  return (
    <>
    <AddMovies />
        <button onClick = {toggleForm}>
          Add
        </button>
    </>
  )
}

export default AddButton
