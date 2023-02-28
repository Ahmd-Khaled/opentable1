import { Review } from "@prisma/client";
import RReviewCard from "./RReviewCard";


export default function RReviews({reviews}: {reviews: Review[]}) {
  return (
    <div className="">
      <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
        What {reviews.length} {reviews.length === 1 ? 'person' : 'people' } are saying
      </h1>
      <div>
        {reviews?.map((review) => (
          <RReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  )
}
