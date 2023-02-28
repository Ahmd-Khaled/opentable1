import { PRICE, PrismaClient } from "@prisma/client";
import { SHeader, SSideBar, SRestaurantCard } from "./components";

const prisma = new PrismaClient();

interface SearchParams { city?: string, cuisine?: string, price?: PRICE }

const fetchRestaurantByCity = (searchParams: SearchParams) => {
  const where: any = {};

  if (searchParams.city) {
    const location = {
      name: {
        equals: searchParams.city.toLowerCase(),
      },
    };
    where.location = location;
  }

  if (searchParams.cuisine) {
    const cuisine = {
      name: {
        equals: searchParams.cuisine.toLowerCase(),
      },
    };
    where.cuisine = cuisine;
  }

  if (searchParams.price) {
    const price = {
      equals: searchParams.price,
    };
    where.price = price;
  }

  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
    reviews: true,
  }

  return prisma.restaurant.findMany({
    where: where,
    select,
  });
};

const fetchLocations = async () => {
  return prisma.location.findMany();
};

const fetchCuisines = async () => {
  return prisma.cuisine.findMany();
};

export default async function Search(
  { searchParams }:
    { searchParams: SearchParams }) {
  
  const restaurants = await fetchRestaurantByCity(searchParams);
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();

  return (
    <>
      <SHeader />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start gap-7">
        <SSideBar locations={locations} cuisines={cuisines} searchParams={searchParams} />
        <div className="w-5/6">
          {restaurants.length
            ? (
              <>
                {restaurants?.map(restaurant => (
                  <SRestaurantCard key={restaurant.id} restaurant={restaurant} />
                ))}
              </>
            )
            : (
              <p className="text-red-700">Sorry, we found no restaurants in <span className="capitalize">{searchParams.city}</span></p>
            )
          }
        </div>
      </div>
    </>
  )
}
