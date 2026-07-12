import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Electronics and Mobile Devices',
    img: 'https://images.pexels.com/photos/2237804/pexels-photo-2237804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Food and Beverages',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUE_1GtXoamu4NI4wTOv5O2xge_1luMCO-EQ&s',
  },
  {
    name: 'Health and Personal Care',
    img: 'https://i.pinimg.com/736x/69/31/7e/69317e0e5f8974e3ae2e25c693815310.jpg',
  },
  {
    name: 'Automotive',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThjLjbM3uXAsMl4dfeMzHLt0JJnMpFArlzwA&s',
  },
  {
    name: 'Agricultural Products',
    img: 'https://png.pngtree.com/element_our/png/20181215/green-agriculture-logo-design-template-vector-illustration-png_270631.jpg',
  },
  {
    name: 'Home Appliances and Furniture',
    img: 'https://www.shutterstock.com/image-vector/modern-minimalist-home-appliance-store-600nw-2184010063.jpg',
  },
  {
    name: 'Construction Materials',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzdSR6lo3r3v0EWQHrvF3vctfAeIZFbLUhTQ&s',
  },
  {
    name: 'E-commerce',
    img: 'https://www.pngitem.com/pimgs/m/161-1619330_logos-e-commerce-png-transparent-png.png',
  },
  {
    name: 'Education and Learning Tools',
    img: 'https://cdn-icons-png.flaticon.com/512/2132/2132405.png',
  },
  {
    name: 'Textiles and Apparel',
    img: 'https://static.vecteezy.com/system/resources/thumbnails/006/922/994/small/needle-and-thread-line-icon-illustration-vector.jpg',
  },
];

const Category = ({ setCategory }) => {
  return (
    <div className="mx-6 md:mx-16 py-10 font-sans">
      {/* Header */}
      <div className="py-6 mb-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-indigo-900 mb-2">
          Our Product Categories
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          Explore a wide range of industries and products
        </p>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10">
        {categories.map(cat => (
          <Link
            key={cat.name}
            to="/products"
            onClick={() => setCategory(cat.name)}
            className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-[230px]"
          >
            {/* Image Section */}
            <div className="overflow-hidden">
              <img
                src={cat.img}
                alt={cat.name}
                className="h-40 w-full object-cover rounded-t-xl group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Text Section */}
            <div className="text-center py-3 h-20 bg-gradient-to-b from-slate-50 to-slate-100 group-hover:from-indigo-50 group-hover:to-indigo-100 transition-all">
              <h3 className="text-sm md:text-base font-medium text-gray-800 group-hover:text-indigo-700 transition-colors">
                {cat.name}
              </h3>
            </div>

            {/* Border Animation */}
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Category = ({ setCategory }) => {
//   return (
//     <div className="mx-16">
//       <div className="py-5 mb-5  text-center text-5xl  font-serif text-indigo-900 bg-slate-100">
//         Our Product Category
//       </div>
//       <div className="grid grid-cols-5 gap-10">
//         <Link
//           onClick={() => setCategory('Electronics and Mobile Devices')}
//           to="/products"
//           className="hover:bg-slate-100  shadow-lg  border-b-[1px] border-orange-700 hover:border-b-0  pb-1"
//         >
//           <img
//             className="h-32 w-full rounded-xl rounded-b-none"
//             src="https://images.pexels.com/photos/2237804/pexels-photo-2237804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//             alt=""
//           />
//           <h1 className="text-sm font-serif text-center mt-2">
//             Electronics and Mobile Devices
//           </h1>
//         </Link>
//         <Link
//           onClick={() => setCategory('Food and Beverages')}
//           to="/products"
//           className="hover:bg-slate-100  shadow-lg  border-b-[1px] border-orange-700 hover:border-b-0  pb-1"
//         >
//           <img
//             className="h-32 w-full rounded-xl rounded-b-none"
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUE_1GtXoamu4NI4wTOv5O2xge_1luMCO-EQ&s"
//             alt="Food and Beverages"
//           />
//           <h1 className="text-sm font-serif text-center mt-2">
//             Food and Beverages
//           </h1>
//         </Link>
//         <Link
//           onClick={() => setCategory('Health and Personal Care')}
//           to="/products"
//           className="hover:bg-slate-100  shadow-lg  border-b-[1px] border-orange-700 hover:border-b-0  pb-1"
//         >
//           <img
//             className="h-32 w-full rounded-xl rounded-b-none"
//             src="https://i.pinimg.com/736x/69/31/7e/69317e0e5f8974e3ae2e25c693815310.jpg"
//             alt="Health and Personal Care"
//           />
//           <h1 className="text-sm font-serif text-center mt-2">
//             Health and Personal Care
//           </h1>
//         </Link>
//         <Link
//           onClick={() => setCategory('Automotive')}
//           to="/products"
//           className="hover:bg-slate-100  shadow-lg  border-b-[1px] border-orange-700 hover:border-b-0  pb-1"
//         >
//           <img
//             className="h-32 w-full rounded-xl rounded-b-none"
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThjLjbM3uXAsMl4dfeMzHLt0JJnMpFArlzwA&s"
//             alt=""
//           />
//           <h1 className="text-sm font-serif text-center mt-2">Automotive</h1>
//         </Link>
//         <Link
//           onClick={() => setCategory('Agricultural Products')}
//           to="/products"
//           className="hover:bg-slate-100  shadow-lg  border-b-[1px] border-orange-700 hover:border-b-0  pb-1"
//         >
//           <img
//             className="h-32 w-full rounded-xl rounded-b-none"
//             src="https://png.pngtree.com/element_our/png/20181215/green-agriculture-logo-design-template-vector-illustration-png_270631.jpg"
//             alt=""
//           />
//           <h1 className="text-sm font-serif text-center mt-2">
//             Agricultural Products
//           </h1>
//         </Link>
//         <Link
//           onClick={() => setCategory('Home Appliances and Furniture')}
//           to="/products"
//           className="hover:bg-slate-100  shadow-lg  border-b-[1px] border-orange-700 hover:border-b-0  pb-1"
//         >
//           <img
//             className="h-32 w-full rounded-xl rounded-b-none"
//             src="https://www.shutterstock.com/image-vector/modern-minimalist-home-appliance-store-600nw-2184010063.jpg"
//             alt=""
//           />
//           <h1 className="text-sm font-serif text-center mt-2">
//             Home Appliances and Furniture
//           </h1>
//         </Link>
//         <Link
//           onClick={() => setCategory('Construction Materials')}
//           to="/products"
//           className="hover:bg-slate-100  shadow-lg  border-b-[1px] border-orange-700 hover:border-b-0  pb-1"
//         >
//           <img
//             className="h-32 w-full rounded-xl rounded-b-none"
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzdSR6lo3r3v0EWQHrvF3vctfAeIZFbLUhTQ&s"
//             alt="Construction Materials"
//           />
//           <h1 className="text-sm font-serif text-center mt-2">
//             Construction Materials
//           </h1>
//         </Link>
//         <Link
//           onClick={() => setCategory('E-commerce')}
//           to="/products"
//           className="hover:bg-slate-100  shadow-lg  border-b-[1px] border-orange-700 hover:border-b-0  pb-1"
//         >
//           <img
//             className="h-32 w-full rounded-xl rounded-b-none"
//             src="https://www.pngitem.com/pimgs/m/161-1619330_logos-e-commerce-png-transparent-png.png"
//             alt=""
//           />
//           <h1 className="text-sm font-serif text-center mt-2">E-commerce</h1>
//         </Link>
//         <Link
//           onClick={() => setCategory('Education and Learning Tools')}
//           to="/products"
//           className="hover:bg-slate-100  shadow-lg  border-b-[1px] border-orange-700 hover:border-b-0  pb-1"
//         >
//           <img
//             className="h-32 w-full rounded-xl rounded-b-none"
//             src="https://cdn-icons-png.flaticon.com/512/2132/2132405.png"
//             alt="Education and Learning Tools"
//           />
//           <h1 className="text-sm font-serif text-center mt-2">
//             Education and Learning Tools
//           </h1>
//         </Link>
//         <Link
//           onClick={() => setCategory('Textiles and Apparel')}
//           to="/products"
//           className="hover:bg-slate-100  shadow-lg  border-b-[1px] border-orange-700 hover:border-b-0  pb-1"
//         >
//           <img
//             className="h-32 w-full rounded-xl rounded-b-none"
//             src="https://static.vecteezy.com/system/resources/thumbnails/006/922/994/small/needle-and-thread-line-icon-illustration-vector.jpg"
//             alt="Textiles and Apparel"
//           />
//           <h1 className="text-sm font-serif text-center mt-2">
//             Textiles and Apparel
//           </h1>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Category;
