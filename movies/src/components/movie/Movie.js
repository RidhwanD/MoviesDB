import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import APIService from '../../APIService'
import { useNavigate } from 'react-router-dom';

function retrieveGenres(genres, props) {
  var result = ""
  if (props && genres) {
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

function getButton(link) {
  if (link) {
    return <a href={link} className="btn btn-outline-info" role="button" target="_blank">Watch Here</a>
  } else {
    return <a href={link} className="btn btn-outline-info disabled" role="button">Watch Here</a>
  }
}

function Movie() {
  let navigate = useNavigate()
  const { id } = useParams()

  const [genres, setGenres] = useState([])
  useEffect(() => {
    APIService.ObtainAllGenres()
    .then(resp => setGenres(resp))
    .catch(error => console.log(error))
  }, [])

  const [movie, setMovie] = useState([])

  useEffect(() => {
    APIService.RetrieveMovie(id)
    .then(resp => setMovie(resp))
    .catch(error => console.log(error))
  }, [])

  const deleteBtn = async id => {
    APIService.DeleteMovie(id)
    navigate('../../');
  };

  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        Back to Home
      </Link>
      <h1 className="display-4">{movie.title}</h1>
      <hr />
      <table className="table table-striped table-dark">
        <tbody>
          <tr>
            <td>Genre</td>
            <td>:</td>
            <td>{retrieveGenres(movie.genres, genres)}</td>
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
            <td>{getButton(movie.trailer)}</td>
          </tr>
          <tr>
            <td>Watch</td>
            <td>:</td>
            <td>{getButton(movie.watch)}</td>
          </tr>
          <tr>
            <td>
              <button className="btn btn-danger" onClick={() => {if (window.confirm('Are you sure you wish to delete this item?')) deleteBtn(movie.id)}}>
                Delete
              </button>
            </td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Movie;
