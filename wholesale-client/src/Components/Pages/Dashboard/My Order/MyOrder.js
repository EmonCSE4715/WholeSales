import { FaChevronDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MyOrder = ({ product, handleDelete, index }) => {
    const navigate = useNavigate();
   const handlePayment = id => {
     navigate(`/dashboard/payment/${id}`);
   };
  return (
    <tr className="text-center text-slate-800">
      <th className=" border-r-[1px] border-slate-900">{index}</th>
      <td className=" border-r-[1px] border-slate-900">
        <div className="flex items-center">
          <img
            className="w-14 h-14 rounded-md"
            src={product?.product?.img}
            alt=""
          />
          <div>
            <h1 className=" ml-3 text-start">{product?.product?.name}</h1>
            <h1 className=" ml-3 font-mono text-start text-sm">
              ৳ {product?.product?.price}
            </h1>
          </div>
        </div>
      </td>
      <td className=" border-r-[1px] border-slate-900 text-start">
        <h1 className=" ml-3">{product?.product?.user?.name}</h1>
        <h1 className=" ml-3 font-mono text-sm">
          {product?.product?.user?.phone}
        </h1>
      </td>
      <td className=" border-r-[1px] border-slate-900 text-start">
        <h1 className=" ml-3 font-mono">{product?.customerName}</h1>
        <h1 className=" ml-3 font-mono text-sm">{product?.phone}</h1>
      </td>
      <td className=" border-r-[1px] border-slate-900 font-mono">
        <h1 className=" ml-3">{product?.date}</h1>
      </td>
      <td className=" border-r-[1px] border-slate-900">
        <h1 className="ml-3 font-mono ">
          {product?.orderQuantity} {product?.product?.pType}
        </h1>
      </td>
      <td className=" border-r-[1px] border-slate-900 text-end">
        <h1 className="ml-3 font-mono ">{product?.totalPrice}.00 BDT</h1>
      </td>
      <td className=" border-r-[1px] border-slate-900 text-end">
        <h1 className="ml-3 font-mono ">{product?.deliveryCharge}.00 BDT</h1>
      </td>
      <td className=" border-r-[1px] border-slate-900 ">
        {product.payment ? (
          <div className="flex justify-center items-center">
            <h1 className="  mr-4">Paid</h1> {/* The button to open modal */}
            <label
              htmlFor="my_modal_6"
              className="mt-1 text-2xl flex items-center"
            >
              <FaChevronDown className="text-xs cursor-pointer" />
            </label>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box bg-white">
                <div>
                  <img
                    src="https://img.freepik.com/free-vector/thank-you-placard-concept-illustration_114360-13436.jpg"
                    alt=""
                  />
                </div>
                <div className="modal-action">
                  <label htmlFor="my_modal_6" className="btn">
                    Close!
                  </label>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => handlePayment(product?._id)}
            className="bg-lime-600 px-3 py-1 rounded-md uppercase text-white  hover:bg-lime-500"
          >
            Payment
          </button>
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

export default MyOrder;