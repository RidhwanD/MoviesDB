import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Movie = () => {

  const { id } = useParams();

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

  const [movie, setMovie] = useState([])

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/movies/${id}`, {
      'method':'GET',
      headers: {
        'Content-Type':'application/json',
        'Authorization':'Token 95b8869fa90cda6c23932ab1a7d66e7c3995483e'
      }
    })
    .then(resp => resp.json())
    .then(resp => setMovie(resp))
    .catch(error => console.log(error))
  }, [])

  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">{movie.title}</h1>
      <hr />
      <table className="table table-striped table-dark">
        <tbody>
          <tr>
            <td>Genre</td>
            <td>:</td>
            <td>{movie.username}</td>
          </tr>
          <tr>
            <td>Rating</td>
            <td>:</td>
            <td>{movie.rating}</td>
          </tr>
          <tr>
            <td>Duration</td>
            <td>:</td>
            <td>{movie.duration}</td>
          </tr>
          <tr>
            <td>Quality</td>
            <td>:</td>
            <td>{movie.quality}</td>
          </tr>
          <tr>
            <td>Trailer</td>
            <td>:</td>
            <td>{movie.trailer}</td>
          </tr>
          <tr>
            <td>Watch</td>
            <td>:</td>
            <td>{movie.watch}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Movie;
