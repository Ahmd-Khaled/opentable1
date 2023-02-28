import { PrismaClient, Review } from "@prisma/client";
import { notFound } from "next/navigation";
import { RDescription, RHeader, RImages, RNavBar, RRating, RReservationCard, RReviews, RTitle } from "./components";

const prisma = new PrismaClient();

interface Restaurant {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
  reviews: Review[];
}

const fetchRestaurantBySlug =async (slug: string): Promise<Restaurant> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
      reviews: true,
    }
  });

  if (!restaurant) {
    // throw new Error("Can't find restaurant!");
    notFound();
  }

  return restaurant;
}

export default async function RestaurantDetails({params}: {params: {slug: string}}) {
  const restaurant = await fetchRestaurantBySlug(params.slug);
  console.log({restaurant})
  return (
    <>
      <div className="bg-white w-[70%] rounded p-5 shadow">
        <RNavBar slug={restaurant.slug} />
        <RTitle name={restaurant.name} />
        <RRating reviews={restaurant.reviews} />
        <RDescription description={restaurant.description} />
        <RImages images={restaurant.images} />
        <RReviews reviews={restaurant.reviews} />
      </div>
      <div className="w-[27%] relative text-reg">
        <RReservationCard />
      </div>
    </>
  )
}
