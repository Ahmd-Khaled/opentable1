import Image from 'next/image';
import Link from 'next/link';
import { RestaurantCardType } from '../page';
import { Price, Stars } from '../components';

interface Props {
  restaurant: RestaurantCardType;
}

export default function RestaurantCard({restaurant}: Props) {
  return (
    <div className='Card w-60 h-72 m-3 rounded overflow-hidden border cursor-pointer'>
      <Link href={`/restaurant/${restaurant.slug}`}>
        <img className='w-full h-36' src={restaurant.main_image} alt='' />
        <div className='p-1'>
          <h3 className='font-bold text-lg mb-2 text-[#2d333f]'>{restaurant.name}</h3>
          <div className='flex items-center gap-2'>
            <Stars reviews={restaurant.reviews} />
            <p className=''>{restaurant.reviews.length} review{restaurant.reviews.length > 1 ? 's': ''}</p>
          </div>
          <div className='flex gap-3 text-reg font-light capitalize'>
            <p className=''>{restaurant.cuisine.name}</p>
            <Price price={restaurant.price} />
            <p className=''>{restaurant.location.name}</p>
          </div>
          <div>
            <p className='text-sm mt-1 font-bold text-[#2d333f]'>Booked 3 times today</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
