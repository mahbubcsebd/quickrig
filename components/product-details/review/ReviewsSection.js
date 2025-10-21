'use client';

import { useState } from 'react';
import ReviewForm from './ReviewForm';

const ReviewsSection = ({ reviews = [] }) => {
  const [showForm, setShowForm] = useState(false);
  const [reviewsList, setReviewsList] = useState(reviews);

  const handleReviewSubmit = (data) => {
    const newReview = {
      id: Date.now(),
      name: data.name,
      rating: data.rating,
      comment: data.comment,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      verified: false,
    };

    setReviewsList([newReview, ...reviewsList]);
    setShowForm(false);
    alert('Review submitted successfully!');
  };

  return (
    <div className="">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-semibold text-black">
          All Reviews{' '}
          <span className="text-lg font-normal text-[#7b7b7b]">
            ({reviewsList.length})
          </span>
        </h3>
        <h2 className="text-2xl font-bold text-gray-900"></h2>
        <button
          onClick={() => setShowForm(true)}
          className="text-white text-base px-6 py-3 rounded-lg font-medium bg-black transition"
        >
          Write a Review
        </button>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviewsList.map((review) => (
          <div
            key={review.id}
            className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-between items-start mb-4">
              {/* Star Rating */}
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`w-5 h-5 ${
                      star <= review.rating
                        ? 'text-yellow-400 fill-current'
                        : star - 0.5 === review.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300 fill-current'
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <h3 className="font-bold text-gray-900">{review.name}</h3>
              {review.verified && (
                <svg
                  className="w-5 h-5 text-green-500 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>

            <p className="text-gray-700 mb-4 leading-relaxed">
              &quot;{review.comment}&quot;
            </p>

            <p className="text-sm text-gray-500">Posted on {review.date}</p>
          </div>
        ))}
      </div>

      {reviewsList.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No reviews yet. Be the first to review!
          </p>
        </div>
      )}

      {/* Review Form Modal */}
      <ReviewForm
        open={showForm}
        onSubmit={handleReviewSubmit}
        onCancel={() => setShowForm(false)}
      />
    </div>
  );
};

export default ReviewsSection;
