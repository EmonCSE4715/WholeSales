// import { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import useUser from '../../../../hooks/useUser';

// const BuyNow = () => {
//   const { id } = useParams()
//   const [user] = useUser();
//   const navigate=useNavigate()
//   const [product, setProduct] = useState({})
//   const [orderQuantity, setOrderQuantity] = useState('')
//   const [customerName, setCustomerName] = useState('')
//   const [date, setDate] = useState('')
//   const [phone, setPhone] = useState('')
//   const [address, setAddress] = useState('')
//   const [deliveryCharge, setDeliveryCharge] = useState(3000)
//   const totalPrice = orderQuantity * product?.price ;

//     useEffect(() => {
//       fetch(`https://wholesales.onrender.com/product/${id}`)
//         .then(res => res.json())
//         .then(data => {
//           setProduct(data);
//         });
//     }, [product, id]);
  
//   const handleSubmit = () => {

//     const buyProduct = {
//       customerName: customerName || user.name,
//       phone: phone || user.phone,
//       address: address || user.address,
//       email:user?.email,
//       orderQuantity,
//       totalPrice,
//       product,
//       deliveryCharge,
//     date
     
//     };
//      fetch(`https://wholesales.onrender.com/buy`, {
//        method: 'POST',
//        headers: {
//          'content-type': 'application/json',
//        },
//        body: JSON.stringify(buyProduct),
//      })
//        .then(res => res.json())
//        .then(data => {
//          toast.success('Successful');
//          navigate('/buy')
//        });
   
//   }
//   return (
//     <div className="">
//       <div>
//         <h1 className="text-center text-4xl py-3 mt-[1px] mb-5 font-semibold text-indigo-50 bg-slate-600 uppercase">
//           Buy Product
//         </h1>
//       </div>

//       <div className="flex justify-between gap-14 ml-56 mr-16">
//         <div className="bg-slate-200 w-[500px] p-5 rounded-xl text-indigo-800">
//           <div className="flex">
//             <h1 className="text-xl font-semibold w-[200px]">Name</h1>
//             <h1 className="text-xl font-semibold text-black">
//               {' '}
//               : {product?.name}
//             </h1>
//           </div>
//           <div className="flex items-end">
//             <h1 className="text-xl font-semibold w-[200px]">Price</h1>
//             <h1 className="text-xl font-semibold text-black">
//               {' '}
//               : {product?.price} Taka
//             </h1>
//             <h1 className="text-sm  ml-2 "> / {product?.pType}</h1>
//           </div>
//           <div className="flex items-end">
//             <h1 className="text-xl font-semibold w-[200px]">
//               Available Quantity
//             </h1>
//             <h1 className="text-xl font-semibold text-black">
//               : {product?.quantity}
//             </h1>
//             <h1 className="text-sm font-semibold  ml-3">Pieces</h1>
//           </div>

//           <div className="w-[350px]">
//             <div className="mt-3 ">
//               <input
//                 onChange={e => setCustomerName(e.target.value)}
//                 type="text"
//                 placeholder={`Name: ${user?.name || ' Input name'}`}
//                 className="input input-bordered bg-white w-full "
//               />
//             </div>
//             <div className="mt-3 ">
//               <input
//                 onChange={e => setPhone(e.target.value)}
//                 type="number"
//                 placeholder={`Phone: ${user?.phone || ' Input Phone'}`}
//                 className="input input-bordered bg-white w-full "
//               />
//             </div>
//             <div className="mt-3 ">
//               <input
//                 onChange={e => setDate(e.target.value)}
//                 type="date"
//                 className="input input-bordered bg-white w-full "
//               />
//             </div>
//             <div className="mt-3 ">
//               <textarea
//                 onChange={e => setAddress(e.target.value)}
//                 type="number"
//                 placeholder={`Address: ${user?.address || ' Input Address'}`}
//                 className="input input-bordered bg-white w-full "
//               />
//             </div>

//             {/* quantity */}
//             <div className="mt-6 ">
//               {orderQuantity > 29 ? (
//                 <h1 className="text-green-600 font-semibold ml-1 mb-2">
//                   You Order in {orderQuantity}
//                   <span className="ml-1 text-xs"> {product?.pType}</span>
//                 </h1>
//               ) : (
//                 <h1 className="text-red-600 font-semibold ml-1 mb-2">
//                   Order Minimum 30 {product?.pType}
//                 </h1>
//               )}
//               <input
//                 onChange={e => setOrderQuantity(e.target.value)}
//                 type="number"
//                 placeholder="Input Order Quantity"
//                 className="input input-bordered bg-white w-full "
//                 min="30"
//               />
//             </div>
//           </div>
//         </div>
//         {/* total price */}
//         {orderQuantity > 29 && date && (
//           <div className="w-[300px] bg-slate-600 rounded-md p-5 text-indigo-50 h-auto">
//             <h1 className="text-center border-b-[1px] text-2xl font-semibold">
//               Total Price
//             </h1>

//             <div className="flex justify-between items-center mt-3">
//               <h1>Sub Total </h1>
//               <h1>: {totalPrice}.00 BDT</h1>
//             </div>
//             <div className="flex justify-between items-center mt-3">
//               <h1>Vat </h1>
//               <h1>: 0.00 BDT</h1>
//             </div>
//             <div className="flex justify-between items-center mt-3">
//               <h1>Other Charge </h1>
//               <h1>: 0.00 BDT</h1>
//             </div>

//             {/* Delivery Charge Radio Buttons */}
//             <div className="mt-3">
//               <div className="flex justify-between items-center mt-3">
//                 <h1>Delivery Charge</h1>
//                 <h1 className="mt-3">: {deliveryCharge}.00 BDT</h1>
//               </div>
//               <div className="flex items-center mt-2">
//                 <input
//                   type="radio"
//                   id="insideDhaka"
//                   name="delivery"
//                   value="3000"
//                   checked={deliveryCharge === 3000}
//                   onChange={() => setDeliveryCharge(3000)}
//                 />
//                 <label htmlFor="insideDhaka" className="ml-2 text-primary">
//                   Inside Dhaka (3000 BDT)
//                 </label>
//               </div>
//               <div className="flex items-center mt-2">
//                 <input
//                   type="radio"
//                   id="outsideDhaka"
//                   name="delivery"
//                   value="5000"
//                   checked={deliveryCharge === 5000}
//                   onChange={() => setDeliveryCharge(5000)}
//                 />
//                 <label htmlFor="outsideDhaka" className="ml-2 text-primary">
//                   Outside Dhaka (5000 BDT)
//                 </label>
//               </div>
//             </div>

//             <hr className="mt-3" />
//             <div className="flex justify-between items-center mt-3">
//               <h1>Total Price </h1>
//               <h1>: {totalPrice + deliveryCharge}.00 BDT</h1>
//             </div>
//             <div className="mt-5">
//               {orderQuantity > 29 ? (
//                 <button onClick={handleSubmit} className="btn w-full">
//                   Submit
//                 </button>
//               ) : (
//                 <button disabled className="btn w-full">
//                   Submit
//                 </button>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BuyNow;


import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useUser from '../../../../hooks/useUser';

const BuyNow = () => {
  const { id } = useParams();
  const [user] = useUser();
  const navigate = useNavigate();

  const [product, setProduct] = useState({});
  const [orderQuantity, setOrderQuantity] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [date, setDate] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  // Logistics states
  const [transport, setTransport] = useState('');
  const [weight, setWeight] = useState('');
  const [pickupAddress, setPickupAddress] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [distance, setDistance] = useState('');
  const [deliveryCharge, setDeliveryCharge] = useState(0);

  const totalPrice = orderQuantity * product?.price;

  // Transport Rate per KM (Example demo rate)
  const transportRates = {
    bike: 20,
    van: 35,
    cold: 50,
    cargo: 60,
    truck: 80,
  };

  // Auto Delivery Charge Calculation
  useEffect(() => {
    if (!transport || !distance || !weight) return;

    const rate = transportRates[transport] || 0;
    const weightCharge = weight * 2; // 2 taka per kg example
    const charge = distance * rate + weightCharge;

    setDeliveryCharge(charge);
  }, [transport, distance, weight]);

  // Fetch product (fixed infinite loop issue)
  useEffect(() => {
    fetch(`https://wholesales.onrender.com/product/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  const handleSubmit = () => {
    const buyProduct = {
      customerName: customerName || user?.name,
      phone: phone || user?.phone,
      address: address || user?.address,
      email: user?.email,
      orderQuantity,
      totalPrice,
      product,
      date,
      pickupAddress,
      deliveryAddress,
      distance,
      transport,
      weight,
      deliveryCharge,
    };

    fetch(`https://wholesales.onrender.com/buy`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(buyProduct),
    })
      .then(res => res.json())
      .then(() => {
        toast.success('Order Submitted Successfully');
        navigate('/buy');
      });
  };

  return (
    <div className="py-10 px-4 md:px-16">
      <h1 className="text-center text-4xl py-4 mb-10 font-bold text-indigo-100 bg-slate-700 rounded-xl shadow">
        Buy Product
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT SIDE - PRODUCT & USER DETAILS */}
        <div className="bg-slate-100 shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-slate-700 mb-4">
            Product Information
          </h2>

          <div className="space-y-3 text-lg">
            <p>
              <b>Name:</b> {product?.name}
            </p>
            <p>
              <b>Price:</b> {product?.price} BDT / {product?.pType}
            </p>
            <p>
              <b>Available:</b> {product?.quantity} {product?.pType}
            </p>
          </div>

          <div className="mt-6 space-y-4">
            <input
              onChange={e => setCustomerName(e.target.value)}
              type="text"
              placeholder={`Name: ${user?.name || 'Enter Name'}`}
              className="input input-bordered w-full bg-white"
            />
            <input
              onChange={e => setPhone(e.target.value)}
              type="text"
              placeholder={`Phone: ${user?.phone || 'Enter Phone'}`}
              className="input input-bordered w-full bg-white"
            />
            <input
              onChange={e => setDate(e.target.value)}
              type="date"
              className="input input-bordered w-full bg-white"
            />
            <textarea
              onChange={e => setAddress(e.target.value)}
              placeholder={`Address: ${user?.address || 'Enter Address'}`}
              className="textarea textarea-bordered w-full bg-white"
            />

            {/* Quantity */}
            <div>
              {orderQuantity >= 30 ? (
                <p className="text-green-600 font-semibold">
                  Ordering {orderQuantity} {product?.pType}
                </p>
              ) : (
                <p className="text-red-600 font-semibold">
                  Minimum Order: 30 {product?.pType}
                </p>
              )}

              <input
                onChange={e => setOrderQuantity(Number(e.target.value))}
                type="number"
                min="30"
                placeholder="Order Quantity"
                className="input input-bordered w-full bg-white"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - LOGISTICS + TOTAL PRICE */}
        {orderQuantity >= 30 && date && (
          <div className="bg-slate-700 text-indigo-50 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl text-center font-bold border-b pb-2">
              Order Summary & Logistics
            </h2>

            {/* Logistics */}
            <div className="mt-5 space-y-4">
              <input
                onChange={e => setWeight(Number(e.target.value))}
                type="number"
                placeholder="Weight (kg)"
                className="input input-bordered w-full bg-white text-black"
              />

              <input
                onChange={e => setPickupAddress(e.target.value)}
                type="text"
                placeholder="Pickup Address"
                className="input input-bordered w-full bg-white text-black"
              />

              <input
                onChange={e => setDeliveryAddress(e.target.value)}
                type="text"
                placeholder="Delivery Address"
                className="input input-bordered w-full bg-white text-black"
              />

              <input
                onChange={e => setDistance(Number(e.target.value))}
                type="number"
                placeholder="Distance (KM)"
                className="input input-bordered w-full bg-white text-black"
              />

              {/* Transport Type */}
              <div>
                <p className="font-semibold mb-2">Select Transport</p>
                <select
                  onChange={e => setTransport(e.target.value)}
                  className="select select-bordered w-full bg-white text-black"
                >
                  <option value="">Choose Transport</option>
                  <option value="bike">Bike</option>
                  <option value="van">Mini-Van</option>
                  <option value="cold">Cold Storage</option>
                  <option value="cargo">Cargo</option>
                  <option value="truck">Truck</option>
                </select>
              </div>
            </div>

            {/* PRICE SECTION */}
            <div className="mt-6 space-y-3 text-lg">
              <p className="flex justify-between">
                <span>Product Total:</span>
                <span>{totalPrice} BDT</span>
              </p>

              <p className="flex justify-between">
                <span>Delivery Charge:</span>
                <span>{deliveryCharge} BDT</span>
              </p>

              <hr className="border-gray-400 my-2" />

              <p className="flex justify-between text-2xl font-bold">
                <span>Total Payable:</span>
                <span>{totalPrice + deliveryCharge} BDT</span>
              </p>
            </div>

            <button
              onClick={handleSubmit}
              className="btn btn-primary w-full mt-6 text-lg"
            >
              Submit Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BuyNow;
