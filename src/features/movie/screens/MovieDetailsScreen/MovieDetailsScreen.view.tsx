import React from 'react';
import {useRouter} from 'next/router';
import {useMovieDetails} from '../../hooks';
import {MovieDetailsScreenScene} from './MovieDetailsScreen.scene';
import {adaptMovieDetails} from './MovieDetailsScreen.adapter';

export const MovieDetailsScreenView: React.FC = () => {
  const router = useRouter();
  const {id} = router.query;
  const {data: movie, isLoading} = useMovieDetails(id as string);

  if (isLoading) return <p className="text-center mt-6 text-gray-600">Chargement...</p>;
  if (!movie) return <p className="text-center mt-6 text-gray-600">Film non trouvé</p>;

  const adaptedMovie = adaptMovieDetails(movie);

  return <MovieDetailsScreenScene movie={adaptedMovie} />;
};
