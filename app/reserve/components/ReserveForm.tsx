
export default function ReserveForm() {
  return (
    <form className='mt-10 flex flex-wrap justify-between w-[660px]'>
      <input placeholder='First Name' type="text" className="border rounded p-3 w-80 mb-4 outline-none" />
      <input placeholder='Last Name' type="text" className="border rounded p-3 w-80 mb-4 outline-none" />
      <input placeholder='Phone Number' type="text" className="border rounded p-3 w-80 mb-4 outline-none" />
      <input placeholder='Email' type="email" className="border rounded p-3 w-80 mb-4 outline-none" />
      <input placeholder='Occasion (optional)' type="text" className="border rounded p-3 w-80 mb-4 outline-none" />
      <input placeholder='Additional requests (optional)' type="text" className="border rounded p-3 w-80 mb-4 outline-none" />
      <button className='bg-red-600 w-full p-3 text-white rounded font-bold disabled:bg-gray-300'>Complete Reservation</button>
      <p className='mt-4 text-sm'>By clicking “Complete reservation” you agree to the OpenTable Terms of Use and Privacy Policy. Standard text message rates may apply. You may opt out of receiving text messages at any time.</p>
    </form>
  )
}
