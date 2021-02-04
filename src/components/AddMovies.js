import React, { useContext, useState } from 'react'
import { MovieContext } from '../context/MovieContext'
import { v4 as uuidv4 } from 'uuid'

const AddMovies = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [id, setId] = useState(null)
  const { addMovies } = useContext(MovieContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    setId(uuidv4())
    const newMovie = {
      title,
      description,
      id
    }
    setTitle('')
    setDescription('')
    addMovies(newMovie)
  }

  return (
    <div className="addMovies">
        <form onSubmit = {handleSubmit}>
          <div>
            <label>Title</label>
            <input type ="text" placeholder="Title" value={title}
              onChange = {(e) => setTitle(e.target.value)}
            />
          </div>
            <div>
              <label>Description</label>
              <input type ="text" placeholder="Description" value={description}
                onChange = {(e) => setDescription(e.target.value)}
              />
          </div> <br/>
            <button id="saveBtn" >Save Movie</button>
        </form>
    </div>
  )
}

export default AddMovies
