// Change state here
export default (state, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [action.payload, ...state.movieList]
      }
    default: {
      return state
    }
  }
}
