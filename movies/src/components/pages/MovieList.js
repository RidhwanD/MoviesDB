import React from 'react'
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import APIService from '../../APIService'

function retrieveGenres(genres, props) {
  var result = ""
  if (genres, props) {
    for (let i = 0; i < genres.length; i++) {
      for (let j = 0; j < props.length; j++) {
        if (genres[i] === props[j].id) {
          result += props[j].name + " "
          break
        }
      }
    }
  }
  return result
}

function MovieList() {

  const deleteBtn = async id => {
    APIService.DeleteMovie(id)
    // loadUsers();
  };

  const [genres, setGenres] = useState([])
  const [movies, setMovies] = useState([])

  const loadGenres = async () => {
    APIService.ObtainAllGenres()
    .then(resp => setGenres(resp))
    .catch(error => console.log(error))
  }

  const loadMovies = async () => {
    APIService.ObtainAllMovies()
    .then(resp => setMovies(resp))
    .catch(error => console.log(error))
  }

  useEffect(() => {
    loadGenres()
    loadMovies()
  }, [])

  return (
    <div>
      <div className="title">
        <h1>Movie List</h1>
      </div>
      <div className="main-table">
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
                   <td>{retrieveGenres(movie.genres, genres)}</td>
                   <td>{movie.rating}</td>
                   <td>
                    <Link className="btn btn-primary mr-2" to={`/movies/${movie.id}`} target="_blank">
                      View
                    </Link>
                    <button className="btn btn-danger" onClick={() => deleteBtn(movie.id)}>
                      Delete
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
