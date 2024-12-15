import {TMDB_IMAGE_BASE_URL_MEDIUM} from '../../../../api/config';
import {AdaptedMovieDetails, Movie} from '../../types';

export const adaptMovieDetails = (movie: Movie): AdaptedMovieDetails => {
  return {
    id: movie.id,
    title: movie.title,
    posterUrl: `${TMDB_IMAGE_BASE_URL_MEDIUM}${movie.poster_path}`,
    releaseDate: movie.release_date,
    voteAverage: `${movie.vote_average.toFixed(1)}`,
    voteCount: movie.vote_count,
    overview: movie.overview,
    genres: movie.genres.map((genre: any) => genre.name),
  };
};
