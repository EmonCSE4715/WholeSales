import React, { useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import Loading from "../Share/Loading";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [signInWithGoogle, gUser, gLoading, gError] =
    useSignInWithGoogle(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  if (user || gUser) {
    navigate(from, { replace: true });
  }

  if (loading || gLoading) {
    return <Loading />;
  }

  let signInError;
  if (error || gError) {
    signInError = (
      <p className="text-red-500 text-center">
        <small>{error?.message || gError?.message}</small>
      </p>
    );
  }

  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data.email, data.password);
    toast.success("Successfully Login");
  };

  return (
    <div className="flex justify-center">
      <div className="flex justify-center items-center">
        <div className="card w-96 shadow-2xl bg-violet-200 mt-20">
          <div className="card-body">
            <h2 className="text-center text-4xl font-serif">Login</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Email */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered bg-white w-full max-w-xs"
                  {...register("email", {
                    required: "Email is Required",
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>

              {/* Password */}
              <div className="form-control w-full max-w-xs relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="input input-bordered bg-white w-full max-w-xs pr-14"
                  {...register("password", {
                    required: "Password is Required",
                    minLength: {
                      value: 8,
                      message: "Must be 8 characters or longer",
                    },
                    pattern: {
                      value: /(?=.*[a-zA-Z])/,
                      message:
                        "Password must contain at least one alphabet (A–Z)",
                    },
                  })}
                />

                {/* Show / Hide */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-11 text-sm text-blue-600"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

                <label className="label">
                  {errors.password && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>

              {signInError}

              <input
                className="btn btn-orange-500 w-full text-white"
                type="submit"
                value="Login"
              />
            </form>

            <p className="text-center mt-2">
              <small>
                New to wholesales?{" "}
                <Link
                  to="/createAccount"
                  className="text-orange-600 font-bold"
                >
                  Create New Account
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
