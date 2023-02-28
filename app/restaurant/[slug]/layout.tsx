import { RHeader } from './components'

export default function RestaurantLayout({
  children,
  params
}: {
    children: React.ReactNode;
    params: {slug: string}
}) {
  return (
    <>
      <RHeader name={params.slug} />
      <div className="flex m-auto w-3/4 justify-between items-start 0 -mt-12">
        {children}
      </div>
    </>
  )
}
