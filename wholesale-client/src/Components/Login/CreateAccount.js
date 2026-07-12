import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const CreateAccount = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  let signInError;
  if (gUser) {
    navigate("/");
  }

  const createDBUser = (name, email,phone,address,tradeId) => {
    fetch(`http://localhost:5000/create-user/${email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone, address, tradeId }),
    })
      .then(res => res.json())
      .then(data => {
        navigate('/');
      });
  };

  const onSubmit = async(data) => {
   
    await createUserWithEmailAndPassword(data.email, data.password);
   await updateProfile({ displayName: data.name });
     createDBUser(data.name, data.email,data.phone,data.address,data.tradeId);
   
  };
  return (
    <div className="flex justify-center  ">
      <div className="flex  justify-center items-center  ">
        <div className="card  shadow-xl bg-violet-100 mt-14">
          <div className="card-body">
            <h2 className="text-center text-indigo-900 text-4xl font-bold font-serif">Sign Up</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex gap-10">
                <div >
                  {' '}
                  {/* name */}
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="input input-bordered bg-white w-[300px]"
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
                  {/* email */}
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="input input-bordered bg-white w-full max-w-xs"
                      {...register('email', {
                        required: {
                          value: true,
                          message: 'Email is Required',
                        },
                        pattern: {
                          value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                          message: 'Provide a valid Email',
                        },
                      })}
                    />
                    <label className="label">
                      {errors.email?.type === 'required' && (
                        <span className="label-text-alt text-red-500">
                          {errors.email.message}
                        </span>
                      )}
                      {errors.email?.type === 'pattern' && (
                        <span className="label-text-alt text-red-500">
                          {errors.email.message}
                        </span>
                      )}
                    </label>
                  </div>
                  {/* password */}
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      className="input input-bordered bg-white w-full max-w-xs"
                      {...register('password', {
                        required: {
                          value: true,
                          message: 'Password is Required',
                        },
                        minLength: {
                          value: 6,
                          message: 'Must be 6 characters or longer',
                        },
                      })}
                    />
                    <label className="label">
                      {errors.password?.type === 'required' && (
                        <span className="label-text-alt text-red-500">
                          {errors.password.message}
                        </span>
                      )}
                      {errors.password?.type === 'minLength' && (
                        <span className="label-text-alt text-red-500">
                          {errors.password.message}
                        </span>
                      )}
                    </label>
                  </div>
                </div>
                <div>
                  {' '}
                  {/* phone */}
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Phone</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Your Phone Number"
                      className="input input-bordered bg-white w-[300px] "
                      {...register('phone', {
                        required: {
                          value: true,
                          message: 'Phone is Required',
                        },
                      })}
                    />
                    <label className="label">
                      {errors.phone?.type === 'required' && (
                        <span className="label-text-alt text-red-500">
                          {errors.phone.message}
                        </span>
                      )}
                    </label>
                  </div>
                  {/* address */}
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Address</span>
                    </label>
                    <textarea
                      type="address"
                      placeholder="Your Address"
                      className="input input-bordered bg-white w-full max-w-xs pt-1"
                      {...register('address', {
                        required: {
                          value: true,
                          message: 'Address is Required',
                        },
                        
                      })}
                    />
                    <label className="label">
                      {errors.address?.type === 'required' && (
                        <span className="label-text-alt text-red-500">
                          {errors.address.message}
                        </span>
                      )}
                     
                    </label>
                  </div>
                  {/* trade id */}
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Trade Id / Nid Number</span>
                    </label>
                    <input
                      type="text"
                      placeholder="TradeId / Nid Number"
                      className="input input-bordered bg-white w-full max-w-xs"
                      {...register('tradeId', {
                        required: {
                          value: true,
                          message: 'Trade Id is Required',
                        }
                      
                      })}
                    />
                    <label className="label">
                      {errors.tradeId?.type === 'required' && (
                        <span className="label-text-alt text-red-500">
                          {errors.tradeId.message}
                        </span>
                      )}
                     
                    </label>
                  </div>
                </div>
              </div>
              {signInError}
              <input
                className="btn w-full text-white"
                type="submit"
                value="Sign Up"
              />
            </form>
            <p>
              <small>
                Already Have an Account ?{' '}
                <Link to="/login" className="text-orange-600 font-bold">
                  Please Login
                </Link>
              </small>
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
