import React from 'react'

export default function RTitle({name}: {name: string}) {
  return (
    <div className="mt-4 border-b pb-6">
      <h1 className="font-bold text-6xl text-[#2D333F]">{name}</h1>
    </div>
  )
}
