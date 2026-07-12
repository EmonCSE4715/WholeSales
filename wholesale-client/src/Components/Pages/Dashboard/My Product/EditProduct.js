import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const EditProduct = ({ product, closeModal }) => {
  const [category, setCategory] = useState('');
  const [pType, setPType] = useState('');
    const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = data => {
setLoading(true)
  
    const updateProduct = {
    
      name: data.name || product.name,
      category: category || product.category,
      quantity: data.quantity || product.quantity,
      price: data.price || product.price,
      pType: pType || product.pType,
      img: data.img || product.img,
      
    };
  
      fetch(`http://localhost:5000/updateProduct/${product?._id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(updateProduct),
      })
        .then(res => res.json())
        .then(data => {
          setLoading(false);
          toast.success('Update Successful');
          setLoading(false)
          closeModal();
         
        });
   

    // data.category = category;
    // data.pType = pType;
    // console.log(product._id);
    // // Reset form after submission
    // reset();
    // toast.success("dado")
    // // Close the modal after updating
    // closeModal();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-14 bg-slate-300 rounded-lg p-5 px-20">
          <div className="flex items-center">
            {/* category */}
            <div>
              <h1 className="ml-1 text-lg font-semibold mb-2">
                Select Your Product Category
              </h1>
              <select
                onChange={e => setCategory(e.target.value)}
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled selected>
                  {product?.category}
                </option>
                <option>Electronics and Mobile Devices</option>
                <option>Food and Beverages</option>
                <option>Health and Personal Care</option>
                <option>Automotive</option>
                <option>Agricultural Products</option>
                <option>Home Appliances and Furniture</option>
                <option>Construction Materials</option>
                <option>E-commerce</option>
                <option>Education and Learning Tools</option>
                <option>Textiles and Apparel</option>
              </select>
            </div>
          </div>
          <div>
            {/* name */}
            <div className="form-control w-full max-w-xs my-2">
              <h1 className="ml-1 text-lg ">Update Product </h1>
              <input
                type="text"
                placeholder={`Name: ${product?.name || ''}`}
                className="input input-bordered bg-white w-[300px] h-10"
                {...register('name')}
              />
            </div>
            {/* Product Quantity */}
            <div className="form-control w-full max-w-xs mb-2 font-mono">
              <input
                type="number"
                placeholder={`Quantity: ${product?.quantity || ''}`}
                className="input input-bordered bg-white w-[300px] h-10"
                {...register('quantity')}
              />
            </div>
            {/* Product price */}
            <div className="form-control w-full max-w-xs mb-2 font-mono">
              <input
                type="number"
                placeholder={`Price: ${product?.price || ''}`}
                className="input input-bordered bg-white w-[300px] h-10"
                {...register('price')}
              />
            </div>
            {/*  */}
            <div>
              <select
                onChange={e => setPType(e.target.value)}
                className="select select-bordered w-full max-w-xs font-thin"
              >
                <option disabled selected>
                  {product?.pType}
                </option>
                <option>Pieces</option>
                <option>Kg</option>
              </select>
            </div>
            {/* Product image */}

            <div className="form-control w-full max-w-xs my-3">
              <input
                type="text"
                placeholder={`Image: ${product?.img || ''}`}
                className="input input-bordered bg-white w-[300px] h-10"
                {...register('img')}
              />
            </div>

            <input
              className="btn btn-secondary w-full text-white"
              type="submit"
              value="Update"
            />
          </div>
        </div>
      </form>
      
    </div>
  );
};

export default EditProduct;

























// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';

// const EditProduct = ({product}) => {
//   const [category, setCategory] = useState('');
//   const [pType, setPType] = useState('');
//   const {
//     register,
//     formState: { errors },
//     handleSubmit,
//     reset,
//   } = useForm();

//   const onSubmit = data => {
//     data.category = category;
//     data.pType = pType;
//     console.log(data);
//     // Reset form after submission
//     reset();
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="flex gap-14 bg-slate-300 rounded-lg p-5 px-20">
//           <div className="flex items-center">
//             {/* category */}
//             <div>
//               <h1 className="ml-1 text-lg font-semibold mb-2">
//                 Select Your Product Category
//               </h1>
//               <select
//                 onChange={e => setCategory(e.target.value)}
//                 className="select select-bordered w-full max-w-xs"
//               >
//                 <option disabled selected>
//                   {product?.category}
//                 </option>
//                 <option>Electronics and Mobile Devices</option>
//                 <option>Food and Beverages</option>
//                 <option>Health and Personal Care</option>
//                 <option>Automotive</option>
//                 <option>Agricultural Products</option>
//                 <option>Home Appliances and Furniture</option>
//                 <option>Construction Materials</option>
//                 <option>E-commerce</option>
//                 <option>Education and Learning Tools</option>
//                 <option>Textiles and Apparel</option>
//               </select>
//             </div>
//           </div>
//           <div>
//             {/* name */}
//             <div className="form-control w-full max-w-xs my-2">
//               <h1 className="ml-1 text-lg ">Update Product </h1>
//               <input
//                 type="text"
//                 placeholder={`Name: ${product?.name || ''}`}
//                 className="input input-bordered bg-white w-[300px] h-10"
//                 {...register('name')}
//               />
//             </div>
//             {/* Product Quantity */}
//             <div className="form-control w-full max-w-xs mb-2 font-mono">
//               <input
//                 type="number"
//                 placeholder={`Quantity: ${product?.quantity || ''}`}
//                 className="input input-bordered bg-white w-[300px] h-10"
//                 {...register('quantity')}
//               />
//             </div>
//             {/* Product price */}
//             <div className="form-control w-full max-w-xs mb-2 font-mono">
//               <input
//                 type="number"
//                 placeholder={`Price: ${product?.price || ''}`}
//                 className="input input-bordered bg-white w-[300px] h-10"
//                 {...register('price')}
//               />
//             </div>
//             {/*  */}
//             <div>
//               <select
//                 onChange={e => setPType(e.target.value)}
//                 className="select select-bordered w-full max-w-xs font-thin"
//               >
//                 <option disabled selected>
//                   {product?.pType}
//                 </option>
//                 <option>Pieces</option>
//                 <option>Kg</option>
//               </select>
//             </div>
//             {/* Product image */}

//             <div className="form-control w-full max-w-xs my-3">
//               <input
//                 type="number"
//                 placeholder={`Image: ${product?.img || ''}`}
//                 className="input input-bordered bg-white w-[300px] h-10"
//                 {...register('img')}
//               />
//             </div>

//             <input
//               className="btn btn-orange-500 w-full text-white"
//               type="submit"
//               value="Update"
//             />
//           </div>
//         </div>
//       </form>
//       <label className="modal-backdrop" htmlFor="my_modal_7">
//         Close
//       </label>
//     </div>
//   );
// };

// export default EditProduct;
