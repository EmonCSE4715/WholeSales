import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import EditProduct from '../My Product/EditProduct';

const AllProduct = ({ index, product, handleDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  console.log(product)
  return (
    <tr className="text-center text-slate-800">
      <th className=" border-r-[1px] border-slate-900">{index}</th>
      <td className=" border-r-[1px] border-slate-900">
        <div className="flex items-center">
          <img className="w-14 h-14 rounded-md" src={product?.img} alt="" />
          <h1 className=" ml-3">{product?.name}</h1>
        </div>
      </td>
      <td className=" border-r-[1px] border-slate-900">
        <h1 className=" ml-3">{product?.user?.name}</h1>
      </td>
      <td className=" border-r-[1px] border-slate-900">
        <h1 className=" ml-3 font-mono">{product?.user?.phone}</h1>
      </td>
      <td className=" border-r-[1px] border-slate-900">
        <h1 className=" ml-3">{product?.category}</h1>
      </td>
      <td className=" border-r-[1px] border-slate-900">
        <h1 className="ml-3 font-mono ">{product?.quantity}</h1>
      </td>
      <td className=" border-r-[1px] border-slate-900">
        <h1 className="ml-3 font-mono ">{product?.price}</h1>
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
      <td className="bg-slate-200 border-r-[1px] border-slate-900">
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

export default AllProduct;
