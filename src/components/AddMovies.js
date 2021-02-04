import React, { useState } from 'react'

const AddMovies = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    setTitle('')
    setDescription('')
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
