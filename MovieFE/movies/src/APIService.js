export default class APIService {
  // Define the server URL. Please change if the server is running on a different port.
  static mainUrl = 'http://127.0.0.1:8000'

  // Authentication is supported but not implemented in the front-end.

  // Define a function to fetch all genres data using the API.
  // Return a JSON file containing all genres in the database.
  static ObtainAllGenres() {
    return fetch(`${this.mainUrl}/api/genres/`, {
      'method':'GET',
      headers: {
        'Content-Type':'application/json',
        'Authorization':'Token 95b8869fa90cda6c23932ab1a7d66e7c3995483e'
      }
    })
    .then(resp => resp.json())
  }


  // Define a function to fetch all movies data using the API.
  // Return a JSON file containing all movies in the database.
  static ObtainAllMovies() {
    return fetch(`${this.mainUrl}/api/movies/`, {
      'method':'GET',
      headers: {
        'Content-Type':'application/json',
        'Authorization':'Token 95b8869fa90cda6c23932ab1a7d66e7c3995483e'
      }
    })
    .then(resp => resp.json())
  }

  // Define a function to fetch a movie data using the API.
  // Input: An integer 'id': id of the movie to be retrieved
  // Return a JSON file containing the specified movie.
  static RetrieveMovie(id) {
    return fetch(`${this.mainUrl}/api/movies/${id}`, {
      'method':'GET',
      headers: {
        'Content-Type':'application/json',
        'Authorization':'Token 95b8869fa90cda6c23932ab1a7d66e7c3995483e'
      }
    })
    .then(resp => resp.json())
  }

  // Define a function to delete a movie data using the API.
  // Input: An integer 'id': id of the movie to be deleted
  // Return a response from the server that indicate whether the movie is deleted.
  static DeleteMovie(id) {
    return fetch(`${this.mainUrl}/api/movies/${id}`, {
      'method':'DELETE',
      headers: {
        'Content-Type':'application/json',
        'Authorization':'Token 95b8869fa90cda6c23932ab1a7d66e7c3995483e'
      }
    })
  }

  // Define a function to add a movie data using the API.
  // Input: An object 'body': a movie object to be added
  // Return JSON file containing the added movie if successful
  static AddMovie(body) {
    return fetch(`${this.mainUrl}/api/movies-add/`, {
      'method':'POST',
      headers: {
        'Content-Type':'application/json',
        'Authorization':'Token 95b8869fa90cda6c23932ab1a7d66e7c3995483e'
      }, body:JSON.stringify(body)
    })
  }

  // Define a function to search movies using the API.
  // Input: A string 'query': string containing keyword to be searched
  // Return a JSON file containing all movies containing the query in the title.
  static FindMovie(query) {
    return fetch(`${this.mainUrl}/api/search/?search=${query}`, {
      'method':'GET',
      headers: {
        'Content-Type':'application/json',
        'Authorization':'Token 95b8869fa90cda6c23932ab1a7d66e7c3995483e'
      }
    })
    .then(resp => resp.json())
  }
}
