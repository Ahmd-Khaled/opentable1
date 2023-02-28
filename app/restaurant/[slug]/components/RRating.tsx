import { Review } from "@prisma/client";
import { calculateReviewRatingAverage } from "../../../../utils/calculateReviewRatingAverage";
import { Stars } from "../../../components";


export default function RRating({reviews}: {reviews: Review[]}) {
  return (
    <div className="flex items-end">
      <div className="ratings mt-2 flex items-center gap-2">
        <Stars reviews={reviews} />
        <span className="text-reg">{calculateReviewRatingAverage(reviews).toFixed(1)}</span>
      </div>
      <div className="flex gap-3">
        <span className="text-reg ml-4">{reviews.length} Review{reviews.length > 1 ? 's' : ''}</span>
      </div>
    </div>
  )
}
