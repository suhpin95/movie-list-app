// Change state here
export default (state, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return {
        ...state,
        movieList: [action.payload, ...state.movieList]
      }
    case 'DELETE_MOVIE':
      return {
        ...state,
        movieList: state.movieList.filter(movie => movie.id !== action.payload)
      }
    default: {
      return state
    }
  }
}
