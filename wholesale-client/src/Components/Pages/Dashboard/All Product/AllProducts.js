import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import AllProduct from './AllProduct';


const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/products`)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [products]);

  const handleDelete = id => {
    const proceed = window.confirm('Are You Sure ?');
    if (proceed) {
      const url = `http://localhost:5000/product/${id}`;
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
    <div className="font-serif">
      <h1 className="text-center text-4xl py-3 mt-[1px]  font-semibold text-indigo-50 bg-slate-600">
        All Products
      </h1>

      <div className="overflow-x-auto mt-3 mx-5">
        <table className="table  w-full text-white ">
          <thead>
            <tr className="text-3xl bg-slate-900  text-center">
              <th className="bg-secondary text-xl border-r-[1px] "></th>
              <th className="bg-secondary text-lg border-r-[1px] font-thin">
               Product Name
              </th>
              <th className="bg-secondary text-lg border-r-[1px] font-thin">
               Seller Name
              </th>
              <th className="bg-secondary text-lg border-r-[1px] font-thin">
             Phone
              </th>
              <th className="bg-secondary  text-lg border-r-[1px] font-thin">
                Category
              </th>
              <th className="bg-secondary text-lg border-r-[1px] font-thin">
                Quantity
              </th>
              <th className="bg-secondary  text-lg border-r-[1px] font-thin">
                Price
              </th>
              <th className="bg-secondary text-lg border-r-[1px] font-thin">
                Edit
              </th>
              {/* <th className="bg-secondary  text-lg border-r-[1px] font-thin">
                Status
              </th> */}
              <th className="bg-secondary text-lg font-thin">Remove</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <AllProduct
                key={product._id}
                product={product}
                index={index + 1}
                handleDelete={handleDelete}
              ></AllProduct>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProducts;
