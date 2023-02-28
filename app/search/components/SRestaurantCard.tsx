import { Cuisine, Location, PRICE, Review } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { calculateReviewRatingAverage } from '../../../utils/calculateReviewRatingAverage';
import { Price, Stars } from '../../components';

interface Restaurant {
  id: number;
  name: string;
  main_image: string;
  price: PRICE;
  cuisine: Cuisine;
  location: Location;
  slug: string;
  reviews: Review[];
};

export default function SRestaurantCard({restaurant}: {restaurant: Restaurant}) {
  
  const renderRating = () => {
    const rating = calculateReviewRatingAverage(restaurant.reviews);

    if (rating > 4) return 'Awesome'
    else if (rating <= 4 && rating > 3) return 'Good'
    else if (rating <= 3 && rating > 0) return 'Average'
    else ''
  }
  
  return (
    <div className="RestaurantCard border-b flex gap-5 pb-5 pt-5">
      <img className="w-44 h-36 rounded" src={restaurant.main_image} alt="1" />
      <div className="">
        <h2 className="text-3xl">{restaurant.name}</h2>
        <div className="flex items-center gap-2">
          <Stars reviews={restaurant.reviews} />
          <p className="ml-2 text-sm">{renderRating()}</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex gap-4 text-reg">
            <Price price={restaurant.price} />
            <p className="capitalize">{restaurant.cuisine.name}</p>
            <p className="capitalize">{restaurant.location.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/${restaurant.slug}`} className="">View more information</Link>
        </div>
      </div>
    </div>
  )
}
