import React from "react";
import "../styles/reviews.css";

const Reviews = () => {
  const userReviews = [
    {
      star: 5,
      content: "Excellent service, car was in perfect condition",
      userName: "Ruby S.",
      date: "20 Mar 2026",
    },
    {
      star: 3,
      content: "Affordable pricing and easy booking process",
      userName: "Nishi B.",
      date: "1 Feb 2026",
    },
    {
      star: 4,
      content: "Best car rental service in the city!",
      userName: "Rohit S.",
      date: "15 Apr 2026",
    },
  ];

  return (
    <div className="reviews">
      <div className="reviewsHeading">
        <p>Reviews</p>
      </div>
      <div className="reviewCards">
        {userReviews.map((review, index) => (
          <div className="cards" key={index}>
            <div className="reviewStar">{"★".repeat(review.star)}</div>
            <div className="reviewContent">
              <p>{review.content}</p>
            </div>
            <div className="reviewUser">
              <div className="reviewUserPhoto">
                <p>{review.userName.slice(0, 1)}</p>
              </div>
              <div className="reviewUserNameDate">
                <p id="name">{review.userName}</p>
                <p id="date">{review.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
