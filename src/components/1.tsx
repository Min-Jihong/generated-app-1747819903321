import React from 'react';
// Assuming Gallery, Details, and Button components are defined following the provided guidelines.
import Gallery from './Gallery';
import Details from './Details';
import Button from './Button';

export const ProductDetailsPage: React.FC = () => (
  <div>
    <Gallery />
    <Details />
    <Button variant='primary'>Add to Cart</Button>
  </div>
);