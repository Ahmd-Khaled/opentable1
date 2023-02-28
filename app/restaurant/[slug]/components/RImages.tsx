

export default function RImages({images}: {images: string[]}) {
  return (
    <div className="Images">
      <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
        {images.length} photo{images.length > 1 ? 's' : ''}
      </h1>
      <div className="flex gap-2">
        {/* <div className="flex-1">
          <img className="w-42 h-80" src="/imgs/r/26520012.png" alt="" />
        </div> */}
        <div className="flex flex-wrap gap-2 flex-1">
          {images?.map((image) => (
            <img className="w-36 h-42" src={image} alt="" />
          ))}
        </div>
      </div>
    </div>
  )
}
