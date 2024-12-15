import {useQuery} from '@tanstack/react-query';
import {fetchMovieDetails} from '../../../api/actions/movie';
import {Movie} from '../types';
import {QUERY_KEYS} from './constants';

export const useMovieDetails = (movieId: string) => {
  return useQuery<Movie>({
    queryKey: [QUERY_KEYS.MOVIE_DETAILS, movieId],
    queryFn: () => fetchMovieDetails(movieId),
    enabled: !!movieId,
  });
};
