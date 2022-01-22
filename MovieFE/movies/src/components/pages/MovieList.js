import { React, useState, useEffect } from 'react'
import { Link } from "react-router-dom"
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

function MovieList() {
  // Initialize the list of movies.
  const [movies, setMovies] = useState([])

  // Use the API to retrieve all movies data from the database.
  useEffect(() => {
    APIService.ObtainAllMovies()
    .then(resp => setMovies(resp))
    .catch(error => console.log(error))
  }, [])

  // Delete button handler using the API. Show the list of remaining movies if successful
  const deleteBtn = async id => {
    APIService.DeleteMovie(id)
    const new_movies = movies.filter(movie => {
      if(movie.id === id) {
        return false
      }
      return true;
    })
    setMovies(new_movies)
  };

  return (
    <div>
      <div className="title">
        <h1>Movie List</h1>
      </div>
      <div className="main-table">
        <div>
          <a className="btn btn-primary"
            href={`data:text/json;charset=utf-8,${encodeURIComponent(
              JSON.stringify(movies)
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
            {movies && movies.map((movie, index) => {
              return (
                <tr key={movie.id}>
                   <td>{index+1}</td>
                   <td>{movie.title}</td>
                   <td>{retrieveGenres(movie.genres)}</td>
                   <td>{movie.rating}</td>
                   <td>
                    <Link className="btn btn-primary mr-2" to={`/movies/${movie.id}`}>
                      View
                    </Link>
                    <button className="btn btn-danger" onClick={() => {if (window.confirm('Are you sure you wish to delete this item?')) deleteBtn(movie.id)}}>
                      <span className="glyphicon glyphicon-trash"></span> Delete
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MovieList
