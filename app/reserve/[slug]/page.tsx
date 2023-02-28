import { ReserveForm, ReserveHeader } from '../components';

export default function Reserve() {
  return (
    <>
      <div className='Reserve border-t h-screen'>
        <div className="py-9 w-3/5 m-auto">
          <ReserveHeader />
          <ReserveForm />
        </div>
      </div>
    </>
  )
}
