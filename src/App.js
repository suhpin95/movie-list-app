import React from 'react'
import './App.css'
import Header from './components/Header'
import ListMovies from './components/ListMovies'
import AddButton from './components/AddButton'

function App () {
  return (
    <div className="container">
      <Header />
      <AddButton />
      <ListMovies />
    </div>
  )
}

export default App
