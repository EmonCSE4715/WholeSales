import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import useUser from '../../../../hooks/useUser';

const Sales = () => {
  const [user, loading] = useUser()
  const [category, setCategory] = useState('')
  const [pType,setPType]=useState("")
  const imageHostKey = 'c70a5fc10619997bd7315f2bf28d0f3e';

   const {
     register,
     formState: { errors },
     handleSubmit,
     reset,
  } = useForm();

  const onSubmit = data => {
    
  const image = data.image[0];
  const formData = new FormData();
  formData.append('image', image);
  const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
  fetch(url, {
    method: 'POST',
    body: formData,
  })
    .then(res => res.json())
    .then(imageData => {
      const image = imageData.data.url;
      const updateUrl = {
        ...data,
        category,
        pType,
        user,
        email:user.email,
        img: image,
      };

      // console.log('aci', updateUrl);
      fetch(`https://wholesales.onrender.com/products`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(updateUrl),
      })
        .then(res => res.json())
        .then(data => {
          toast.success('Add Product');
          reset();
        });
    });
};
  return (
    <div>
      <div>
        <h1 className="text-center text-4xl py-3 mt-[1px]  font-semibold text-indigo-50 bg-slate-600">
          Add Your Product
        </h1>
      </div>
      <div className="flex justify-center mt-5 ">
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
                    Select Your Product Category
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
              <div className="form-control w-full max-w-xs">
                <h1 className="ml-1 text-lg ">Name </h1>
                <input
                  type="text"
                  placeholder="Product Name"
                  className="input input-bordered bg-white w-[300px] h-10"
                  {...register('name', {
                    required: {
                      value: true,
                      message: 'Name is Required',
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
              {/* Product Quantity */}
              <div className="form-control w-full max-w-xs ">
                <input
                  type="number"
                  placeholder="Product Quantity"
                  className="input input-bordered bg-white w-[300px] h-10"
                  {...register('quantity', {
                    required: {
                      value: true,
                      message: 'Product Quantity is Required',
                    },
                  })}
                />
                <label className="label">
                  {errors.quantity?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.quantity.message}
                    </span>
                  )}
                </label>
              </div>
              {/* Product price */}
              <div className="form-control w-full max-w-xs ">
                <input
                  type="number"
                  placeholder="Product Price"
                  className="input input-bordered bg-white w-[300px] h-10"
                  {...register('price', {
                    required: {
                      value: true,
                      message: 'Product Price is Required',
                    },
                  })}
                />
                <label className="label">
                  {errors.price?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.price.message}
                    </span>
                  )}
                </label>
              </div>
              {/*  */}
              <div>
                <select
                  onChange={e => setPType(e.target.value)}
                  className="select select-bordered w-full max-w-xs font-normal"
                >
                  <option disabled selected>
                    Product Type
                  </option>
                  <option>Piece</option>
                  <option>Kg</option>
                </select>
              </div>
              {/* Product image */}
              <div>
                <label className="label">
                  <span className="label-text text-lg font-semibold ">
                    Input Product Image{' '}
                  </span>
                </label>
                <input
                  type="file"
                  className="input input-bordered text-black lg:w-72 sm:w-full max-w-xs pt-1    hover:shadow-xl shadow-inner h-[40px]"
                  {...register('image', {
                    required: {
                      value: true,
                      message: 'Image is Required',
                    },
                  })}
                />

                <label className="label">
                  {errors.image?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors?.image?.message}
                    </span>
                  )}
                </label>
              </div>

              {/* Product description */}
              <div className="form-control w-full max-w-xs ">
                <textarea
                  type="number"
                  placeholder="Product description"
                  className="input input-bordered bg-white w-[300px] h-16 pt-1"
                  {...register('description', {
                    required: {
                      value: true,
                      message: 'Description  is Required',
                    },
                  })}
                />
                <label className="label">
                  {errors.description?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.description.message}
                    </span>
                  )}
                </label>
              </div>

              {category && pType ? (
                <input
                  className="btn btn-orange-500 w-full text-white"
                  type="submit"
                  value="ADD"
                />
              ) : (
                <input
                  disabled
                  className="btn btn-orange-500 w-full text-white tooltip"
                  type="submit"
                  value="ADD"
                  data-tip="hello"
                />
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sales;