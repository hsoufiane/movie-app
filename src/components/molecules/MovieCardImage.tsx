import React from 'react';
import CardImage from '../atoms/CardImage';
import StarIcon from '../atoms/StarIcon';

export interface MovieCardImageProps {
  src: string;
  alt: string;
  rating?: number;
  votes?: number;
  className?: string;
}

const MovieCardImage: React.FC<MovieCardImageProps> = ({
  src,
  alt,
  rating,
  votes,
  className = '',
}) => {
  return (
    <div className={`relative ${className}`}>
      <CardImage src={src} alt={alt} aspectRatio="portrait" />
      {rating && (
        <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded-md">
          <StarIcon rating={rating} votes={votes} />
        </div>
      )}
    </div>
  );
};

export default MovieCardImage;
