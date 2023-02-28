import { Cuisine, Location, PRICE } from '@prisma/client'
import Link from 'next/link'
import React from 'react'


export default function SSideBar({
  locations,
  cuisines,
  searchParams
}: {
    locations: Location[];
    cuisines: Cuisine[];
    searchParams: { city?: string, cuisine?: string, price?: PRICE }
  }) {
  
  const prices = [
    {
      price: PRICE.CHEAP,
      label: '$',
      className:"border w-full text-reg font-light rounded-l p-2 text-center"
    },
    {
      price: PRICE.REGULAR,
      label: '$$',
      className:"border-t border-b w-full text-reg font-light p-2 text-center"
    },
    {
      price: PRICE.EXPENSIVE,
      label: '$$$',
      className:"border w-full text-reg font-light rounded-r p-2 text-center"
    },
  ];
  
  return (
    <div className="w-1/5 ">
      <div className="border-b pb-4 flex flex-col">
        <h1 className="mb-2">Region</h1>
        {locations?.map(location => (
          <Link
            href={{
              pathname: '/search',
              query: {
                ...searchParams,
                city: location.name,
              },
            }}
            key={location.id}
            className="font-light text-reg capitalize"
          >
            {location.name}
          </Link>
        ))}
      </div>
      <div className="border-b pb-4 mt-3 flex flex-col">
        <h1 className="mb-2">Cuisine</h1>
        {cuisines?.map(cuisine => (
          <Link 
            href={{
              pathname: '/search',
              query: {
                ...searchParams,
                cuisine: cuisine.name,
              },
            }}
            key={cuisine.id}
            className="font-light text-reg capitalize"
          >
            {cuisine.name}
          </Link>
        ))}
      </div>
      <div className="pb-4 mt-3">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          {prices?.map((item) => (
            <Link 
              key={item.label}
              href={{
                pathname: '/search',
                query: {
                  ...searchParams,
                  price: item.price
                }
              }} 
              className={item.className}>{item.label}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}
