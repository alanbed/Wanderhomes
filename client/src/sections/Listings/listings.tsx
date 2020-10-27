import React from 'react';
import { server } from '../../lib/api';
import { DeleteListingData, DeleteListingVariables, ListingsData } from './types';

const LISTINGS = `
  query Listings {
    listings {
      id
      title
      image
      address
      price
      numOfGuests
      numOfBeds
      numOfBaths
      rating
    }
  }
`;

interface Props {
  title: string;
}

export const Listings = ({ title }: Props) => {
  const fetchListings = async () => {
    const { data } = await server.fetch<ListingsData>({ query: LISTINGS });
    console.log(data); 
  };

  const deleteListings = async () => {

  }

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={fetchListings}>
        Query Listings!
      </button>
      <button onClick={deleteListings}>
        Delete a Listings!
      </button>
    </div>
  );
};