"use client";
import Image from "next/image";
import errorMascot from "../../public/icons/error.png";

export default function NotFound({error}: {error: Error}) {
  return (
    <div className="h-screen bg-gray-200 flex flex-col justify-center items-center">
      <Image className="w-56 mb-8" src={errorMascot} alt='error' />
      <div className="bg-white px-9 py-6 shadow rounded text-center">
        <h3 className="text-3xl font-bold">Well, this is embarrassing</h3>
        <p className="text-reg font-bold">We couldn't find the restaurant</p>
        <p className="mt-6 text-sm font-light">Error code: 404</p>
      </div>
    </div>
  )
}