import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import EditProduct from './EditProduct';

const MyProduct = ({ index, product, handleDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <tr className="text-center text-slate-800">
      <th className=" border-r-[1px] border-slate-900">{index}</th>
      <td className=" border-r-[1px] border-slate-900">
        <div className="flex items-center">
          <img className="w-14 h-14 rounded-md" src={product?.img} alt="" />
          <h1 className="font-semibold ml-3">{product?.name}</h1>
        </div>
      </td>
      <td className=" border-r-[1px] border-slate-900">
        <h1 className="font-semibold ml-3">{product?.category}</h1>
      </td>
      <td className=" border-r-[1px] border-slate-900">
        <h1 className="ml-3 font-mono font-semibold">{product?.quantity}</h1>
      </td>
      <td className=" border-r-[1px] border-slate-900">
        <h1 className="ml-3 font-mono font-semibold">{product?.price}</h1>
      </td>
      <td className=" border-r-[1px] border-slate-900">
        <button onClick={openModal} className=" ">
          <FaEdit />
        </button>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg">
              <EditProduct product={product} closeModal={closeModal} />
              <button
                onClick={closeModal}
                className="btn btn-sm btn-secondary mt-4"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </td>
      <td className=" border-r-[1px] border-slate-900">
        <button
          onClick={() => handleDelete(product?._id)}
          className="btn btn-xs btn-primary"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default MyProduct;























// import React, { useState } from 'react';
// import EditProduct from './EditProduct';

// const MyProduct = ({ index, product, handleDelete }) => {
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const openModal = () => setIsModalOpen(true);
//     const closeModal = () => setIsModalOpen(false);
//   return (
//     <tr className="text-center text-slate-800">
//       <th className="bg-slate-200 border-r-[1px] border-slate-900">{index}</th>
//       <td className="bg-slate-200 border-r-[1px] border-slate-900">
//         <div className="flex items-center">
//           <img className="w-14 h-14 rounded-md" src={product?.img} alt="" />
//           <h1 className="font-semibold ml-3">{product?.name}</h1>
//         </div>
//       </td>
//       <td className="bg-slate-200 border-r-[1px] border-slate-900">
//         <h1 className="font-semibold ml-3">{product?.category}</h1>
//       </td>
//       <td className="bg-slate-200 border-r-[1px] border-slate-900">
//         <h1 className=" ml-3 font-mono font-semibold">{product?.quantity}</h1>
//       </td>
//       <td className="bg-slate-200 border-r-[1px] border-slate-900">
//         <h1 className=" ml-3  font-mono font-semibold">{product?.price}</h1>
//       </td>
//       <td className="bg-slate-200 border-r-[1px] border-slate-900">
//         {/* <label htmlFor="my_modal_7" className="">
//           <FaEdit className="text-secondary" />
//         </label>

//         <input type="checkbox" id="my_modal_7" className="modal-toggle" />
//         <div className="modal" role="dialog">
//           <EditProduct product={product} />
//         </div> */}

//         <div>
//           <button onClick={openModal}>Edit Product</button>
//           {isModalOpen && (
//             <Modal>
//               <EditProduct product={product} closeModal={closeModal} />
//             </Modal>
//           )}
//         </div>
//       </td>
//       {/* <td className="bg-slate-200 border-r-[1px] border-slate-900">
//         <h1 className="font-semibold ml-3">{product?.status}</h1>
//       </td> */}
//       <td className="bg-slate-200 border-r-[1px] border-slate-900">
//         <button
//           onClick={() => handleDelete(product?._id)}
//           className="btn btn-xs btn-primary"
//         >
//           Remove
//         </button>
//       </td>
//     </tr>
//   );
// };

// export default MyProduct;
