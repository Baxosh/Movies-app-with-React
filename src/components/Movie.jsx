import Joi from 'joi-browser'
import Form from './form/Form'
import { getGenres } from '../services/genreService'
import { getMovie, saveMovie } from '../services/movieService'

// Styles 
import styled from 'styled-components';

const MovieContainer = styled.div `
  margin: 60px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  h3 {
    align-self: center;
  }

  h3 span {
    color: orange;
  }

`

export default class Movie extends Form {
  state = {
    data: {
      _id: 'new',
      title: '',
      genreId: '',
      numberInStock: '',
      dailyRentalRate: '',
    },
    errors: {},
    genres: [],
  }

  schema = {
    _id: Joi.string().required(),
    title: Joi.string().required().min(5).label('Title'),
    genreId: Joi.string().required().label('Genre'),
    numberInStock: Joi.number().required().label('Stock'),
    dailyRentalRate: Joi.number().required().min(0).max(10).label('Rate'),
  }

  doSubmit = async () => {
    await saveMovie(this.state.data)
    window.location = '/'
  }

  populationGenre = async () => {
    const { data: genres } = await getGenres()
    this.setState({ genres })
  }

  populationMovies = async () => {
    try {
      let movieId = this.props.match.params.id
      if (movieId === 'new') return

      let { data: movie } = await getMovie(movieId)
      this.setState({ data: this.viewModel(movie) })
    } catch (e) {
      if (e.response && e.response.status === 404)
        this.props.history.replace('/movies')
    }
  }

  async componentDidMount() {
    await this.populationGenre()
    await this.populationMovies()
  }

  viewModel = (movie) => {
    return {
      _id: movie._id.toString(),
      title: movie.title,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
      genreId: movie.genre._id,
    }
  }
  render() {
    return (
      <MovieContainer>
        <h3>Editing the movie <span>{this.state.data.title}</span></h3>
        <form onSubmit={this.handlerSubmit}>
          {this.renderingInput('title', 'Title')}
          {this.renderingSelect('genreId', 'Genre')}
          {this.renderingInput('numberInStock', 'Number in stock')}
          {this.renderingInput('dailyRentalRate', 'Rate')}
          {this.renderButton('Save')}
        </form>
      </MovieContainer>
    )
  }
}
