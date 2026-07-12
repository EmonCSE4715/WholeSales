
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Buy from '../Buy/Buy';

const LatestProduct = () => {
  const [products, setProduct] = useState([])
  const navigator = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/products`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [products])
  
  const handleBuy = (id) => {
    navigator(`/buyNow/${id}`);
  }


  return (
    <div className="mt-14">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-indigo-800 bg-slate-100 inline-block px-6 py-3 rounded-md shadow-sm">
          Our Latest Products
        </h1>
        <p className="text-gray-600 mt-3 text-sm md:text-base">
          Discover our newest arrivals — updated regularly for you.
        </p>
      </div>
      <div className="grid grid-cols-5 px-10 gap-16  mt-5">
        {products
          .slice(0, 5)
          .reverse()
          .map(product => (
            <Buy key={product._id} product={product} handleBuy={handleBuy} />
          ))}
      </div>
    </div>
  );
};

export default LatestProduct;
