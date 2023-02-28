import Image from "next/image";
import Link from "next/link";


export default function NavBar() {
  return (
    <nav className='bg-white p-2 flex justify-between'>
      <Link href='/' className='flex items-center ml-3'>
        <Image width={153} height={80} src='/imgs/opentable-logo-153e80.svg' alt='logo' />
        {/* <span className='font-bold text-gray-700 text-2xl'>OpenTable</span> */}
      </Link>
      <div className='mr-3'>
        <div className='flex gap-3'>
          <button className='bg-blue-400 text-white border p-1 px-4 rounded'>Sign up</button>
          <button className='border p-1 px-4 rounded'>Sign in</button>
        </div>
      </div>
    </nav>
  )
}
