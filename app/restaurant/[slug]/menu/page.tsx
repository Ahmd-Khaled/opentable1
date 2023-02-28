import { PrismaClient } from '@prisma/client';
import { RHeader, RMenu, RNavBar } from '../components';

const prisma = new PrismaClient();

const fetchRestaurantMenu = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug
    },
    select: {
      items: true,
    }
  });

  if (!restaurant) {
    throw new Error
  }

  return restaurant.items;
}

export default async function RestaurantMenu({ params }: { params: { slug: string } }) {
  
  const menu = await fetchRestaurantMenu(params.slug);
  console.log({ menu });

  return (
    <div className="Description bg-white w-[100%] rounded p-5 shadow">
      <RNavBar slug={params.slug} />
      <RMenu menu={menu} />
    </div>
  )
}
