import './App.css';
import MovieList from './components/pages/MovieList';
import NotFound from "./components/pages/NotFound";
import Navbar from "./components/layout/Navbar";
import Movie from "./components/movie/Movie";
import AddMovie from "./components/movie/AddMovie";
import Search from "./components/movie/Search";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar/>

        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movies/add" element={<AddMovie />} />
          <Route path="/movies/:id" element={<Movie />} />
				  <Route path="/search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
