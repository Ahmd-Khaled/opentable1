import { Item } from "@prisma/client";


export default function RMenuCard({item}: {item: Item}) {
  return (
    <div className="MenuCard border rounded p-3 w-[49%] mb-3">
      <h3 className='font-bold text-lg'>{item.name}</h3>
      <p className='font-light mt-1 text-sm'>{item.name}</p>
      <p className="mt-7">{item.price}</p>
    </div>
  )
}
