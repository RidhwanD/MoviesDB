import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import APIService from '../../APIService'

const initialState = {
  title: "",
  genres: [],
  rating: "",
  duration: "",
  quality: "",
  trailer: "",
  watch: ""
}

const AddMovie = () => {
  let navigate = useNavigate()
  const [movie, setMovie] = useState(initialState);

  const [allGenres, setAllGenres] = useState([])

  useEffect(() => {
    APIService.ObtainAllGenres()
    .then(resp => setAllGenres(resp))
    .catch(error => console.log(error))
  }, [])

  const { title, genres, rating, duration, quality, trailer, watch } = movie;

  const onInputChange = e => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleChange = e => {
    var options = e.target.options;
    var value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setMovie({ ...movie, [e.target.name]: value });
  };

  const clearState = (resp) => {
    if (resp.status === 201) {
      window.alert('Movie is added succesfully')
      setMovie({ ...initialState });
    } else {
      window.alert('Please input a correct movie data')
    }
  };

  const onSubmit = async e => {
    e.preventDefault();
    APIService.AddMovie(movie)
    .then(resp => clearState(resp))
    .catch(error => console.log(error))
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <Link className="btn btn-primary" to="/">
          Back to Home
        </Link>
        <h2 className="text-center mb-4">Add A Movie</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <label htmlFor="inputTitle">Title*:</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Title"
              name="title"
              value={title}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="selectGenre">Genre*:</label>
            <select multiple className="form-control" name="genres" onChange={e => handleChange(e)}>
              {allGenres && allGenres.map((genre) => {
                return (
                  <option value={genre.id} key={genre.id}>{genre.name}</option>
                )
              })}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="inputRating">Rating (1 - 10)*:</label>
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="0"
              name="rating"
              value={rating}
              onChange={e => onInputChange(e)}
              min="0"
              max="10"
              step="0.1"
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputDuration">Duration*:</label>
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="0"
              name="duration"
              value={duration}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="selectQuality">Quality:</label>
            <select className="form-select form-select-lg" name="quality" onChange={e => onInputChange(e)}>
              <option>Select Quality</option>
              <option value="HD">HD</option>
              <option value="CAM">CAM</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="inputTrailer">Trailer:</label>
            <input
              type="url"
              className="form-control form-control-lg"
              placeholder="Enter Trailer URL"
              name="trailer"
              value={trailer}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputMovie">Movie:</label>
            <input
              type="url"
              className="form-control form-control-lg"
              placeholder="Enter Movie URL"
              name="watch"
              value={watch}
              onChange={e => onInputChange(e)}
            />
          </div>
          *: required
          <div>
          <button className="btn btn-primary btn-block">Add Movie</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
