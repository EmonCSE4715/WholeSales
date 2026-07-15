import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Buy from './Buy';

const ProductCategory = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigation=useNavigate();

  useEffect(() => {
    fetch(`https://wholesales.onrender.com/productCategory/${category}`)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [category]);

  // Filter products based on search term
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBuy = (id) => {
    navigation(`/buyNow/${id}`);
  }
  return (
    <div className="mx-20">
      <div className="flex justify-between items-center bg-slate-900 mt-[1px] p-2 rounded mb-5">
        <div>
          <h1 className="text-white ml-10 text-4xl font-serif">{category} </h1>
        </div>
        <div className="flex gap-10 ">
          {/* Search Input */}
          <div className="flex items-center gap-2 mb-4 border w-[300px] border-gray-300 rounded mr-20 bg-white p-2">
            <input
              type="text"
              placeholder="Search Products..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="grow outline-none  bg-white"
            />
            <div className="p-1 rounded inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Display Filtered Products */}
      <div className="grid grid-cols-4 gap-10">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <Buy key={product._id} product={product} handleBuy={handleBuy} />
          ))
        ) : (
          <p className="text-5xl text-indigo-200  w-[500px] text-center ml-80 mt-32 font-bold">
            No Products Found
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCategory;
