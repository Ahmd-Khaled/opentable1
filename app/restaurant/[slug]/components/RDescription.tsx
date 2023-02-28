

export default function RDescription({description}: {description: string}) {
  return (
    <>
      <div className="flex gap-2 items-center mt-4">
        <span className="font-bold">Top tags:</span>
        <div className="flex gap-2 items-center flex-wrap">
          <p className="border rounded-full px-3 py-1">Good For Special Occasions</p>
          <p className="border rounded-full px-3 py-1">Good For Groups</p>
          <p className="border rounded-full px-3 py-1">Romantic</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-lg font-light">{description}</p>
      </div>
    </>
  )
}
