"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchBar() {
  const router = useRouter();
  const [location, setLocation] = useState('');

  const searchHandler = () => {
    if (location === '') return;
    router.push(`/search?city=${location}`);
    setLocation('');
  };
  
  return (
    <div className='SearchBar text-left text-lg py-3 m-auto flex justify-center gap-3'>
      <input
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className='rounded p-2 w-[450px]' type='text' placeholder='State, city or town'
      />
      <button
        onClick={searchHandler}
        className='rounded bg-red-600 px-9 py-2 text-white' type='submit'
      >
        {"Let's go"}
      </button>
    </div>
  )
}
