import React from 'react';
import {StoryFn, Meta} from '@storybook/react';
import MovieCardImage, {MovieCardImageProps} from './MovieCardImage';

export default {
  title: 'Molecules/MovieCardImage',
  component: MovieCardImage,
} as Meta;

const Template: StoryFn<MovieCardImageProps> = args => <MovieCardImage {...args} />;

export const WithRating = Template.bind({});
WithRating.args = {
  src: 'https://image.tmdb.org/t/p/original/cdqLnri3NEGcmfnqwk2TSIYtddg.jpg',
  alt: 'Movie poster',
  rating: 8.4,
  votes: 18,
};

export const WithoutRating = Template.bind({});
WithoutRating.args = {
  src: 'https://image.tmdb.org/t/p/original/cdqLnri3NEGcmfnqwk2TSIYtddg.jpg',
  alt: 'Movie poster',
};
