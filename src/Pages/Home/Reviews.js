import React, { useEffect, useState } from "react";
import Loading from "../Shared/Loading";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://manufacturer-car-parts-server-side.onrender.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section className="my-28">
      <div className="text-center">
        <h2 className="lg:text-5xl text-4xl mb-10 font-bold text-primary">
          What our Customer say
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {reviews
          .slice(2)
          .reverse()
          .map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
      </div>
    </section>
  );
};

export default Reviews;
