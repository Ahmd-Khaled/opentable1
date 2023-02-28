import { Header } from './components';

const cardsArray = Array.from(Array(12).keys());

export default function Loading() {
  return (
    <section className='bg-gray-300 h-screen'>
      <Header />
      <div className='py-3 px-36 mt-10 flex flex-wrap justify-center'>
        {cardsArray?.map(card => (
          // <div key={card} className='animate-pulse bg-slate-200 w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer'></div>
          <div key={card} className='animate-pulse w-60 h-72 bg-slate-200 m-3 rounded overflow-hidden border cursor-pointer'></div>
        ))}
      </div>
    </section>
  )
}
