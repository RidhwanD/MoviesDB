import React from 'react'
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";

function retrieveGenres(genres, props) {
  var result = ""
  if (props) {
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
  const [genres, setGenres] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/genres/', {
      'method':'GET',
      headers: {
        'Content-Type':'application/json',
        'Authorization':'Token 95b8869fa90cda6c23932ab1a7d66e7c3995483e'
      }
    })
    .then(resp => resp.json())
    .then(resp => setGenres(resp))
    .catch(error => console.log(error))
  }, [])

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/movies/', {
      'method':'GET',
      headers: {
        'Content-Type':'application/json',
        'Authorization':'Token 95b8869fa90cda6c23932ab1a7d66e7c3995483e'
      }
    })
    .then(resp => resp.json())
    .then(resp => setMovies(resp))
    .catch(error => console.log(error))
  }, [])

  return (
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
                  <Link className="btn btn-primary mr-2" to={`/movies/${movie.id}`}>
                    View
                  </Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default MovieList
