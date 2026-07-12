
const ManageBuy = ({ product, handleDelete, index }) => {
  // console.log(product)
  return (
    <tr className="text-center text-slate-800">
      <th className="border-r-[1px] border-slate-900">{index}</th>
      <td className="border-r-[1px] border-slate-900">
        <div className="flex items-center">
          <img
            className="w-14 h-14 rounded-md"
            src={product?.product?.img}
            alt=""
          />
          <div>
            <h1 className=" ml-3 text-start overflow-x-auto w-[280px]">{product?.product?.name}</h1>
            <h1 className=" ml-3 font-mono text-start">
              {product?.product?.price} BDT
            </h1>
          </div>
        </div>
      </td>
      <td className="border-r-[1px] border-slate-900 text-start">
        <h1 className=" ml-3">{product?.product?.user?.name}</h1>
        <h1 className=" ml-3 font-mono">{product?.product?.user?.phone}</h1>
      </td>
      <td className="border-r-[1px] border-slate-900 text-start">
        <h1 className=" ml-3 font-mono">{product?.customerName}</h1>
        <h1 className=" ml-3 font-mono">{product?.phone}</h1>
      </td>
      <td className="border-r-[1px] border-slate-900 font-mono">
        <h1 className=" ml-3">{product?.date}</h1>
      </td>
      <td className="border-r-[1px] border-slate-900">
        <h1 className="ml-3 font-mono ">{product?.orderQuantity} {product?.product?.pType}</h1>
      </td>
      <td className="border-r-[1px] border-slate-900 text-end">
        <h1 className="ml-3 font-mono ">{product?.totalPrice}.00 BDT</h1>
      </td>
      <td className="border-r-[1px] border-slate-900">
        <h1 className="ml-3 font-mono ">{product.payment?<h className="text-green-700 font-semibold">Paid</h>:<h1 className='text-red-600 font-semibold'>Unpaid</h1>}</h1>
      </td>

      <td className="border-r-[1px] border-slate-900">
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

export default ManageBuy;