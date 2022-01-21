export default class APIService {
  static mainUrl = 'http://127.0.0.1:8000'

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

  static DeleteMovie(id) {
    return fetch(`${this.mainUrl}/api/movies/${id}`, {
      'method':'DELETE',
      headers: {
        'Content-Type':'application/json',
        'Authorization':'Token 95b8869fa90cda6c23932ab1a7d66e7c3995483e'
      }
    })
  }

  static AddMovie(body) {
    return fetch(`${this.mainUrl}/api/movies/`, {
      'method':'POST',
      headers: {
        'Content-Type':'application/json',
        'Authorization':'Token 95b8869fa90cda6c23932ab1a7d66e7c3995483e'
      }, body:JSON.stringify(body)
    })
  }
}
