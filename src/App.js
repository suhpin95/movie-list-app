import React from 'react'
import './App.css'
import Header from './components/Header'
import ListMovies from './components/ListMovies'
import AddButton from './components/AddButton'
import { MovieProvider } from './context/MovieContext'

function App () {
  return (
    <div className="container">
      <Header />
      <MovieProvider>
        <AddButton />
        <ListMovies />
      </MovieProvider>
    </div>
  )
}

export default App
