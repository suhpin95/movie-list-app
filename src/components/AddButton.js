import React, { useState } from 'react'
import AddMovies from './AddMovies'

const AddButton = () => {
  const [btnToggle, setToggle] = useState(false)
  const [btnText, setBtnText] = useState('Add Movies')
  const handleToggle = () => {
    setToggle(!btnToggle)
    if (btnToggle) {
      setBtnText('Add Movies')
    } else {
      setBtnText('Close')
    }
  }
  return (
    <>
    <button onClick = { handleToggle } > {btnText} </button>
    {btnToggle && <AddMovies />}
    </>
  )
}

export default AddButton
