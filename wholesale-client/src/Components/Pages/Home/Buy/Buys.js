import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Buy from './Buy';

const Buys = () => {
  const [products, setProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const [category, setCategory] = useState(''); // State for selected category
  const [categories, setCategories] = useState([]); // State for categories
  const navigator=useNavigate()

  // Fetch products and categories
  useEffect(() => {
    fetch(`http://localhost:5000/products`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        // Extract unique categories from the product list
        const uniqueCategories = [
          ...new Set(data.map(product => product.category)),
        ];
        setCategories(uniqueCategories);
      });
  }, []);

  // Filter products based on search and category
  const filteredProducts = products.filter(product => {
    return (
      (category ? product.category === category : true) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleBuy = id => {
    navigator(`/buyNow/${id}`)
  }

  return (
    <div className="mx-20">
      <div className="flex justify-between items-center bg-slate-900 mt-[1px] p-2 rounded mb-5">
        <div onClick={() => setCategory('')} className="cursor-pointer">
          <h1 className="text-white ml-10 text-4xl font-serif">All Products</h1>
        </div>
        <div className="flex gap-10 ">
          {/* Category Filter Dropdown */}
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="select h-5 bg-slate-100  w-full  max-w-xs "
          >
            <option value="">All Categories</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          {/* Search Input */}
          <div className="flex items-center gap-2 mb-4 bg-slate-300 border border-gray-300 rounded mr-20">
            <input
              type="text"
              placeholder="Search Products..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="grow outline-none p-2 bg-slate-100"
            />
            <div className="bg-slate-300 p-1 rounded inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70 bg-slate-300 rounded"
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

      {/* Product Grid */}
      <div className="grid grid-cols-4 gap-10">
        {filteredProducts.map(product => (
          <Buy key={product._id} product={product} handleBuy={handleBuy} />
        ))}
      </div>
    </div>
  );
};

export default Buys;

