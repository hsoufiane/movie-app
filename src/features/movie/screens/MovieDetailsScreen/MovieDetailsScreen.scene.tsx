import React from 'react';
import CardImage from '../../../../components/atoms/CardImage';
import TextWithCategories from '../../../../components/atoms/TextWithCategories';
import StarIcon from '../../../../components/atoms/StarIcon';
import BackButton from '../../../../components/atoms/BackButton';
import {AdaptedMovieDetails} from '../../types';

interface MovieDetailsScreenSceneProps {
  movie: AdaptedMovieDetails;
}

export const MovieDetailsScreenScene: React.FC<MovieDetailsScreenSceneProps> = ({movie}) => {
  return (
    <div className="container mx-auto px-4 pt-8 pb-6 sm:py-8 md:py-12">
      <div className="max-w-6xl mx-auto mt-0 sm:mt-4 bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Image container - Maintain aspect ratio on mobile */}
          <div className="w-full md:w-2/5 lg:w-1/3">
            <div className="relative md:pt-0 md:h-full">
              <CardImage
                src={movie.posterUrl}
                alt={movie.title}
                aspectRatio="portrait"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content container */}
          <div className="flex-1 p-6 sm:p-8 md:p-10">
            <BackButton
              href="/"
              className="inline-flex items-center text-orange-500 hover:text-orange-600 transition-colors mb-6">
              Retour à la recherche
            </BackButton>

            <h1
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3"
              data-testid="movie-title">
              {movie.title}
            </h1>

            <p className="text-gray-600 mb-4">{movie.releaseDate}</p>

            <div className="mb-6">
              <StarIcon
                rating={parseFloat(movie.voteAverage)}
                votes={movie.voteCount}
                className="text-lg sm:text-xl"
              />
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-700 leading-relaxed">{movie.overview}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Genres</h2>
              <TextWithCategories categories={movie.genres} className="flex flex-wrap gap-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
