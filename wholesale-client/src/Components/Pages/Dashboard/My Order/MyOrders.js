import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';
import MyOrder from './MyOrder';

const MyOrders = () => {
    const [users] = useAuthState(auth);
   const [products, setProducts] = useState([]);

   useEffect(() => {
     fetch(`https://wholesales.onrender.com/buyEmail/${users?.email}`)
       .then(res => res.json())
       .then(data => setProducts(data));
   }, [products, users?.email]);

   const handleDelete = id => {
     const proceed = window.confirm('Are You Sure ?');
     if (proceed) {
       const url = `https://wholesales.onrender.com/buy/${id}`;
       fetch(url, {
         method: 'DELETE',
       })
         .then(res => res.json())
         .then(data => {
           const remaining = products.filter(product => product._id !== id);
           setProducts(remaining);
           toast.success('Successfully Delete ');
         });
     }
   };
  return (
    <div className="font-serif mb-20">
      <h1 className="text-center text-4xl py-3 mt-[1px]  font-semibold text-indigo-50 bg-slate-600">
       My Order
      </h1>

      <div className="overflow-x-auto mt-3 mx-5">
        <table className="table  w-full text-white ">
          <thead>
            <tr className="text-3xl bg-slate-900  text-center">
              <th className="bg-secondary text-xl border-r-[1px] "></th>
              <th className="bg-secondary text-lg border-r-[1px] font-thin">
                Product <br /> Name
              </th>
              <th className="bg-secondary text-lg border-r-[1px] font-thin">
                Seller <br /> Name
              </th>
              <th className="bg-secondary text-lg border-r-[1px] font-thin">
                Buyer <br /> Name
              </th>
              <th className="bg-secondary  text-lg border-r-[1px] font-thin">
               delivery <br /> date
              </th>
              <th className="bg-secondary text-lg border-r-[1px] font-thin">
                Quantity
              </th>
              <th className="bg-secondary  text-lg border-r-[1px] font-thin">
                Price
              </th>
              <th className="bg-secondary  text-lg border-r-[1px] font-thin">
                Delivery <br /> Charge
              </th>
              <th className="bg-secondary text-lg border-r-[1px] font-thin">
                Payment
              </th>

              <th className="bg-secondary text-lg font-thin">Remove</th>
            </tr>
          </thead>
          <tbody>
            {products.slice().reverse().map((product, index) => (
              <MyOrder
                key={product._id}
                product={product}
                index={index + 1}
                handleDelete={handleDelete}
              ></MyOrder>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;