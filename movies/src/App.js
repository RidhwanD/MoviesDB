import './App.css';
import MovieList from './components/pages/MovieList';
import NotFound from "./components/pages/NotFound";
import Navbar from "./components/layout/Navbar";
import Movie from "./components/movie/Movie";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  withRouter
} from "react-router-dom";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar/>

        <Routes>
          <Route exact path="/" element={<MovieList />} />
          <Route exact path="/movies/:id" element={<Movie />} />
          <Route element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
