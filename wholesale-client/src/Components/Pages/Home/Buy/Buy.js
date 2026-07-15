import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Buy = ({ product = {}, handleBuy }) => {
  const [showModal, setShowModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState('');
  const [reviews, setReviews] = useState([]);

  // Fetch reviews
  const fetchReviews = () => {
    if (!product?._id) return;
    fetch(`https://wholesales.onrender.com/review/${product._id}`)
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchReviews();
  }, [product?._id]);

  // Submit review
  const handleSubmitReview = async () => {
    if (!rating) return alert('Please select a rating!');

    const newReview = {
      pid: product._id,
      rating,
      comment,
      date: new Date().toLocaleString(),
    };

    try {
      const res = await fetch('https://wholesales.onrender.com/review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newReview),
      });
      const data = await res.json();
      toast.success('Review added!');
      setComment('');
      setRating(0);
      setShowReviewModal(false);
      fetchReviews(); // Refresh reviews
    } catch (err) {
      console.error(err);
      toast.error('Failed to add review');
    }
  };

  return (
    <>
      {/* ==== PRODUCT CARD ==== */}
      <div className="card card-compact bg-white w-60 shadow-xl hover:shadow-2xl duration-300">
        <figure>
          <img
            className="w-full h-48 object-cover"
            src={product?.img || ''}
            alt={product?.name || 'Product'}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-semibold">{product?.name}</h2>
          <p>
            Quantity:{' '}
            <span className="font-semibold">{product?.quantity || 0}</span>
          </p>
          <p>
            Price:{' '}
            <span className="font-bold text-primary">
              {product?.price || 0} BDT
            </span>
          </p>
          <p className="text-xs">
            From:{' '}
            <span className="font-semibold text-secondary ml-1">
              {product?.user?.name || 'Unknown'}
            </span>
          </p>
          <div className="card-actions justify-between mt-2">
            <button
              onClick={() => setShowModal(true)}
              className="btn btn-outline btn-xs"
            >
              Details
            </button>
            <button
              onClick={() => handleBuy(product?._id)}
              className="btn btn-primary btn-xs"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* ==== PRODUCT DETAILS MODAL ==== */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 overflow-y-auto">
          <div className="bg-white p-6 rounded-xl w-[500px] shadow-xl relative">
            <button
              className="absolute right-3 top-3 text-gray-700 hover:text-black"
              onClick={() => setShowModal(false)}
            >
              ✖
            </button>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-6">
                <img
                  src={product?.img || ''}
                  alt={product?.name}
                  className="w-64 h-42 object-cover rounded-md"
                />
                <h2 className="text-xl font-bold mt-3">{product?.name}</h2>
                <p className="mt-1">
                  <span className="font-semibold">Price:</span>{' '}
                  {product?.price || 0} BDT
                </p>
                <p className="mt-1 text-sm">
                  <span className="font-semibold">Seller:</span>{' '}
                  {product?.user?.name || 'Unknown'}
                </p>
              </div>
              <div className="col-span-6">
                <p className="mt-1 text-sm">{product?.description}</p>
              </div>
            </div>
            <button
              onClick={() => handleBuy(product?._id)}
              className="btn btn-primary w-full mt-4"
            >
              Buy Now
            </button>

            {/* Reviews Section */}
            <h3 className="text-lg font-semibold mt-5">
              Reviews ({reviews.length})
            </h3>
            <button
              onClick={() => setShowReviewModal(true)}
              className="btn btn-outline btn-sm mt-2 mb-2"
            >
              Write a Review
            </button>

            <div className="max-h-40 overflow-y-auto pr-1">
              {reviews.length === 0 ? (
                <p className="text-sm text-gray-600">No reviews yet.</p>
              ) : (
                reviews.map((r, index) => (
                  <div
                    key={index}
                    className="p-2 border rounded-lg mt-2 bg-gray-50"
                  >
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          size={16}
                          className={
                            i < r.rating ? 'text-yellow-400' : 'text-gray-300'
                          }
                        />
                      ))}
                    </div>
                    <p className="text-sm mt-1">{r.comment}</p>
                    <p className="text-xs text-gray-500 mt-1">{r.date}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* ==== REVIEW MODAL ==== */}
      {showReviewModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-96 shadow-xl relative">
            <button
              onClick={() => setShowReviewModal(false)}
              className="absolute right-3 top-3 text-gray-700 hover:text-black"
            >
              ✖
            </button>
            <h2 className="text-xl font-bold mb-3">Write a Review</h2>

            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => {
                const ratingValue = i + 1;
                return (
                  <FaStar
                    key={i}
                    size={30}
                    className="cursor-pointer transition-all"
                    color={
                      ratingValue <= (hover || rating) ? '#facc15' : '#e5e7eb'
                    }
                    onClick={() => setRating(ratingValue)}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(0)}
                  />
                );
              })}
            </div>

            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Write your comment..."
              value={comment}
              onChange={e => setComment(e.target.value)}
            />
            <button
              onClick={handleSubmitReview}
              className="btn btn-primary w-full mt-4"
            >
              Submit Review
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Buy;

// import { useEffect, useState } from 'react';
// import { FaStar } from 'react-icons/fa';
// import { toast } from 'react-toastify';

// const Buy = ({ product = {}, handleBuy }) => {
//   const [showModal, setShowModal] = useState(false);

//   // Review Modal States
//   const [showReviewModal, setShowReviewModal] = useState(false);
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(0);
//   const [comment, setComment] = useState('');
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     fetch(`https://wholesales.onrender.com/review/${product?._id}`)
//       .then(res => res.json())
//       .then(data => setReviews(data));
//   }, [product?._id]);

//   // const handleSubmitReview = () => {
//   //   if (!rating) return alert('Please select a rating!');

//   //   const newReview = {
//   //     rating,
//   //     comment,
//   //     date: new Date().toLocaleString(),
//   //   };

//   //   setReviews([newReview, ...reviews]);
//   //   setRating(0);
//   //   setComment('');
//   //   setShowReviewModal(false);

//   // };
// const handleSubmitReview = (id) => {
//   if (!rating) return alert('Please select a rating!');

//   const newReview = {
//     rating,
//     comment,
//     pid: id,
//     date: new Date().toLocaleString(),
//   };

//   // Update UI instantly
//   // setReviews([newReview, ...reviews]);
//   // setRating(0);
//   setComment('');
//   setShowReviewModal(false);

//   // Send review to backend
//   fetch(`https://wholesales.onrender.com/review`, {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json',
//     },
//     body: JSON.stringify(newReview), // <-- FIXED HERE
//   })
//     .then(res => res.json())
//     .then(data => {
//       toast.success('Review Added!');
//       // reset(); // use only if your form uses react-hook-form
//     })
//     .catch(err => {
//       console.error(err);
//       toast.error('Failed to add review');
//     });
// };

//   return (
//     <>
//       {/* ==== PRODUCT CARD ==== */}
//       <div className="card card-compact bg-white w-60 shadow-xl hover:shadow-2xl duration-300">
//         <figure>
//           <img
//             className="w-full h-48 object-cover"
//             src={product?.img || ''}
//             alt={product?.name || 'Product'}
//           />
//         </figure>

//         <div className="card-body">
//           <h2 className="card-title font-semibold">{product?.name}</h2>

//           <p>
//             Quantity:{' '}
//             <span className="font-semibold">{product?.quantity || 0}</span>
//           </p>

//           <p>
//             Price:{' '}
//             <span className="font-bold text-primary">
//               {product?.price || 0} BDT
//             </span>
//           </p>

//           <p className="text-xs">
//             From:{' '}
//             <span className="font-semibold text-secondary ml-1">
//               {product?.user?.name || 'Unknown'}
//             </span>
//           </p>

//           <div className="card-actions justify-between mt-2">
//             <button
//               onClick={() => setShowModal(true)}
//               className="btn btn-outline btn-xs"
//             >
//               Details
//             </button>

//             <button
//               onClick={() => handleBuy(product?._id)}
//               className="btn btn-primary btn-xs"
//             >
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ==== PRODUCT DETAILS MODAL ==== */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 overflow-y-auto">
//           <div className="bg-white p-6 rounded-xl w-[500px] shadow-xl relative">
//             <button
//               className="absolute right-3 top-3 text-gray-700 hover:text-black"
//               onClick={() => setShowModal(false)}
//             >
//               ✖
//             </button>

//             <div className="grid grid-cols-12 gap-4">
//               <div className="col-span-6">
//                 <img
//                   src={product?.img || ''}
//                   alt={product?.name}
//                   className="w-64 h-42 object-cover rounded-md"
//                 />
//                 <h2 className="text-xl font-bold mt-3">{product?.name}</h2>

//                 {/* <p className="mt-2">
//                   <span className="font-semibold">Quantity:</span>{' '}
//                   {product?.quantity || 0}
//                 </p> */}

//                 <p className="mt-1">
//                   <span className="font-semibold">Price:</span>{' '}
//                   {product?.price || 0} BDT
//                 </p>

//                 <p className="mt-1 text-sm">
//                   <span className="font-semibold">Seller:</span>{' '}
//                   {product?.user?.name || 'Unknown'}
//                 </p>
//               </div>
//               <div className="col-span-6">
//                 <p className="mt-1 text-sm">{product?.description}</p>
//               </div>
//             </div>

//             <button
//               onClick={() => handleBuy(product?._id)}
//               className="btn btn-primary w-full mt-4"
//             >
//               Buy Now
//             </button>

//             {/* ===== Reviews Section ===== */}
//             <h3 className="text-lg font-semibold mt-5">
//               Reviews ({reviews.length})
//             </h3>

//             <button
//               onClick={() => setShowReviewModal(true)}
//               className="btn btn-outline btn-sm mt-2 mb-2"
//             >
//               Write a Review
//             </button>

//             {/* Show Reviews */}
//             <div className="max-h-40 overflow-y-auto pr-1">
//               {reviews.length === 0 ? (
//                 <p className="text-sm text-gray-600">No reviews yet.</p>
//               ) : (
//                 reviews.map((r, index) => (
//                   <div
//                     key={index}
//                     className="p-2 border rounded-lg mt-2 bg-gray-50"
//                   >
//                     <div className="flex items-center">
//                       {[...Array(5)].map((_, i) => (
//                         <FaStar
//                           key={i}
//                           size={16}
//                           className={
//                             i < r?.rating ? 'text-yellow-400' : 'text-gray-300'
//                           }
//                         />
//                       ))}
//                     </div>
//                     <p className="text-sm mt-1">{r?.comment}</p>
//                     <p className="text-xs text-gray-500 mt-1">{r?.date}</p>
//                   </div>
//                 ))
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ==== REVIEW MODAL ==== */}
//       {showReviewModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-xl w-96 shadow-xl relative">
//             <button
//               onClick={() => setShowReviewModal(false)}
//               className="absolute right-3 top-3 text-gray-700 hover:text-black"
//             >
//               ✖
//             </button>

//             <h2 className="text-xl font-bold mb-3">Write a Review</h2>

//             {/* Star Rating */}
//             <div className="flex mb-4">
//               {[...Array(5)].map((_, i) => {
//                 const ratingValue = i + 1;
//                 return (
//                   <FaStar
//                     key={i}
//                     size={30}
//                     className="cursor-pointer transition-all"
//                     color={
//                       ratingValue <= (hover || rating) ? '#facc15' : '#e5e7eb'
//                     }
//                     onClick={() => setRating(ratingValue)}
//                     onMouseEnter={() => setHover(ratingValue)}
//                     onMouseLeave={() => setHover(0)}
//                   />
//                 );
//               })}
//             </div>

//             <textarea
//               className="textarea textarea-bordered w-full"
//               placeholder="Write your comment..."
//               value={comment}
//               onChange={e => setComment(e.target.value)}
//             />

//             <button
//               onClick={()=>handleSubmitReview(product?._id)}
//               className="btn btn-primary w-full mt-4"
//             >
//               Submit Review
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Buy;

// 2nd version
// import { useState } from 'react';

// const Buy = ({ product, handleBuy }) => {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <>
//       {/* ==== PRODUCT CARD ==== */}
//       <div className="card card-compact bg-base-100 w-60 shadow-xl">
//         <figure>
//           <img className="w-full h-48" src={product?.img} alt={product?.name} />
//         </figure>

//         <div className="card-body">
//           <h2 className="card-title">{product?.name}</h2>

//           <p>
//             Quantity: <span className="font-semibold">{product?.quantity}</span>
//           </p>

//           <p>
//             Price:{' '}
//             <span className="font-semibold text-primary">
//               {product?.price} BDT
//             </span>
//           </p>

//           <p className="text-xs">
//             From:{' '}
//             <span className="font-semibold text-secondary text-xs ml-1">
//               {product?.user?.name}
//             </span>
//           </p>

//           <div className="card-actions justify-between mt-2">
//             {/* DETAILS BUTTON */}
//             <button
//               onClick={() => setShowModal(true)}
//               className="btn btn-outline btn-xs"
//             >
//               Details
//             </button>

//             {/* BUY BUTTON */}
//             <button
//               onClick={() => handleBuy(product._id)}
//               className="btn btn-primary btn-xs"
//             >
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ==== MODAL ==== */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-xl w-96 shadow-xl relative">
//             {/* CLOSE BUTTON */}
//             <button
//               className="absolute right-3 top-3 text-gray-700 hover:text-black"
//               onClick={() => setShowModal(false)}
//             >
//               ✖
//             </button>

//             <img
//               src={product.img}
//               alt={product.name}
//               className="w-full h-48 object-cover rounded-md"
//             />

//             <h2 className="text-xl font-bold mt-3">{product.name}</h2>

//             <p className="mt-2">
//               <span className="font-semibold">Quantity:</span>{' '}
//               {product.quantity}
//             </p>

//             <p className="mt-1">
//               <span className="font-semibold">Price:</span> {product.price} BDT
//             </p>

//             <p className="mt-1 text-sm">
//               <span className="font-semibold">Seller:</span>{' '}
//               {product?.user?.name}
//             </p>
//             <p className="mt-1 text-sm ">
//               <span>{product?.description}</span>
//             </p>

//             <button
//               onClick={() => handleBuy(product._id)}
//               className="btn btn-primary w-full mt-4"
//             >
//               Buy Now
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Buy;
// 1 st version
// const Buy = ({ product, handleBuy }) => {
//   // console.log(product)
//   return (
//     <div className="card card-compact bg-base-100 w-60 shadow-xl">
//       <figure>
//         <img className="w-full h-48" src={product?.img} alt={product?.name} />
//       </figure>
//       <div className="card-body">
//         <h2 className="card-title">{product?.name}</h2>
//         <p>
//           Quantity: <span className="font-semibold">{product?.quantity}</span>
//         </p>
//         <p>
//           Price:{' '}
//           <span className="font-semibold text-primary">
//             {product?.price} BDT
//           </span>
//         </p>
//         <p className='text-xs'>
//           From:{' '}
//           <span className="font-semibold text-secondary text-xs ml-1">
//             {product?.user?.name}
//           </span>
//         </p>
//         <div className="card-actions justify-end">
//           <button
//             onClick={() => handleBuy(product._id)}
//             className="btn btn-primary btn-sm"
//           >
//             Buy Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Buy;
