import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";
import SearchBar from 'material-ui-search-bar';

const Navbar = () => {
  let navigate = useNavigate();
	const [data, setData] = useState({ search: '' });

	const goSearch = (e) => {
		navigate({
			pathname: '/search/',
			search: '?search=' + data.search,
		});
		window.location.reload();
	};

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Movie Database
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="search-bar">
  				<SearchBar
  					value={data.search}
  					onChange={(newValue) => setData({ search: newValue })}
  					onRequestSearch={() => goSearch(data.search)}
  				/>
        </div>
        {<Link className="btn btn-outline-light" to="/movies/add">Add Movie</Link>}
      </div>
    </nav>
  );
};

export default Navbar;
