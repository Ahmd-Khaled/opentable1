import Link from 'next/link'


export default function RNavBar({slug}: {slug: string}) {
  return (
    <nav className="flex gap-7 text-reg border-b pb-2">
      <Link href={`/restaurant/${slug}`} className="">Overview</Link>
      <Link href="" className="">Photos</Link>
      <Link href={`/restaurant/${slug}/menu`} className="">Menu</Link>
      <Link href="" className="">Reviews</Link>
    </nav>
  )
}
