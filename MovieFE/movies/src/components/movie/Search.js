import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import APIService from '../../APIService'

// A function to retrieve genres as a string from a list of genre objects.
function retrieveGenres(genres) {
  var result = ""
  if (genres) {
    for (let i = 0; i < genres.length; i++) {
      result += genres[i].name + " "
    }
  }
  return result
}

// A handler for the case where no data is found.
const isEmpty = (result) => {
  if (result.length === 0) {
    return (
      <tr><td colspan="5"><em>No data found.</em></td></tr>
    )
  }
}


const Search = () => {
  // Initialize the search results.
	const [appState, setAppState] = useState({
		search: '',
		movies: [],
	});

  // Obtain the query from the URL.
  const query = window.location.search.split('=')[1]

  // Use the API to obtain movies data based on the query.
	useEffect(() => {
    APIService.FindMovie(query)
    .then(resp => setAppState({ movies: resp }))
    .catch(error => console.log(error))
	}, []);

  // Delete button handler using the API. Show the list of remaining movies if successful
  const deleteBtn = async id => {
    APIService.DeleteMovie(id)
    const new_movies = appState.movies.filter(movie => {
      if(movie.id === id) {
        return false
      }
      return true;
    })
    setAppState({ movies: new_movies })
  };

	return (
    <div>
      <div className="title">
        <h1>Result for query: {query}</h1>
      </div>
      <div className="main-table">
        <div>
          <a className="btn btn-primary"
            href={`data:text/json;charset=utf-8,${encodeURIComponent(
              JSON.stringify(appState.movies)
            )}`}
            download="movies.json"
          >
            {'Download Json'}
          </a>
        </div>
        <table className="table table-striped table-dark table-hover">
          <thead className="thead-dark">
            <tr>
              <th>No.</th>
              <th>Title</th>
              <th>Genre</th>
              <th>Rating</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {appState.movies && appState.movies.map((movie, index) => {
              return (
                <tr key={movie.id}>
                   <td>{index+1}</td>
                   <td>{movie.title}</td>
                   <td>{retrieveGenres(movie.genres)}</td>
                   <td>{movie.rating}</td>
                   <td>
                    <Link className="btn btn-primary mr-2" to={`/movies/${movie.id}`} target="_blank">
                      View
                    </Link>
                    <button className="btn btn-danger" onClick={() => {if (window.confirm('Are you sure you wish to delete this item?')) deleteBtn(movie.id)}}>
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })}
            {isEmpty(appState.movies)}
          </tbody>
        </table>
      </div>
    </div>
	);
};
export default Search;
