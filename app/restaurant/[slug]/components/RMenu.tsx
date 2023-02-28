import { Item } from "@prisma/client";
import RMenuCard from "./RMenuCard";


export default function RMenu({menu}: {menu: Item[]}) {
  return (
    <section className='Menu bg-white mt-5'>
      <div>
        <div className='mt-4 pb-1 mb-1'>
          <h1 className='font-bold text-4xl'>Menu</h1>
        </div>
        {menu.length ? (
          <div className="flex flex-wrap justify-between">
            {menu?.map((item) => (
              <RMenuCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
            <p>This restaurant does not have a menu.</p>
        )}
      </div>
    </section>
  )
}
