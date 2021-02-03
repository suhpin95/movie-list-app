import React from 'react'
import './App.css'
import Header from './components/Header'
import AddButton from './components/AddButton'
import ListMovies from './components/ListMovies'

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
