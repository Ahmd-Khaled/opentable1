import Image from 'next/image'


export default function ReserveHeader() {
  return (
    <div className="Header">
      <h3 className="font-bold">You're almost done!</h3>
      <div className="mt-5 flex gap-4">
        <Image className='w-32 h-18 rounded' width={130} height={130} src="/imgs/r/47921503.png" alt="" />
        <div className="">
          <h1 className="text-3xl font-bold">Nairu - Restaurant</h1>
          <div className="flex gap-6 items-center mt-3">
            <p>Tues, Feb 21</p>
            <p>6:30 PM</p>
            <p>7 people</p>
          </div>
        </div>
      </div>
  </div>
  )
}
