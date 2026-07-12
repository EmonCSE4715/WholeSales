

import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  FaCartArrowDown,
  FaCartPlus,
  FaLuggageCart,
  FaOpencart,
  FaShoppingCart,
} from 'react-icons/fa';

import { Link, Outlet, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const { pathname } = useLocation();

  const [open, setOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState('Button 10');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="bg-white ">
      <div className="">
        <div className="drawer drawer-mobile">
          <input
            id="dashboard-sidebar"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content">
            <Outlet></Outlet>
          </div>
          <div className="drawer-side navigation ">
            <label
              htmlFor="dashboard-sidebar"
              className="drawer-overlay "
            ></label>
            <section className="flex ">
              <div
                className={` ${
                  open ? 'w-60 ' : 'w-20'
                } bg-secondary h-screen p-5  text-white pt-8 relative duration-300`}
              >
                <img
                  src="https://cdn.pixabay.com/photo/2012/04/11/17/14/left-28998_1280.png"
                  className={`absolute cursor-pointer -right-3 top-9 w-7
             border-2 rounded-full  ${!open && 'rotate-180'}`}
                  onClick={() => setOpen(!open)}
                  alt=""
                />

                <div className="flex gap-x-4 items-center">
                  <div onClick={() => setSelectedButton('Button 10')}>
                    {' '}
                    <Link to={'/dashboard'}>
                      {' '}
                      <img
                        src="https://www.svgrepo.com/download/7869/settings.svg"
                        className={`cursor-pointer duration-500 rounded-full ${
                          open && 'rotate-[360deg] h-20  '
                        }`}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>

                <div className={`mt-4 flex flex-col gap-4 relative ${
                    !open ? 'pt-14' : 'pt-0'
                  }`}>
                  {/* Dashboard */}
                  <div
                    onClick={() => setSelectedButton('Button 10')}
                    className={
                      selectedButton === 'Button 10'
                        ? 'bg-white text-black w-[215px] rounded-lg'
                        : ''
                    }
                  >
                    {' '}
                    <Link
                      to="/dashboard"
                      className={`  group flex items-center text-xl w-[215px] gap-3.5 font-medium p-2 hover:bg-primary rounded-md`}
                    >
                      <div>
                        {React.createElement(FaShoppingCart, {
                          size: '20',
                        })}
                      </div>
                      <h2
                        style={{
                          transitionDelay: `${0 + 3}00ms`,
                        }}
                        className={`whitespace-pre duration-500  ${
                          !open && 'opacity-0 translate-x-28 overflow-hidden '
                        }`}
                      >
                        My Products
                      </h2>
                    </Link>
                  </div>

                  {/* add donner */}
                  <div
                    onClick={() => setSelectedButton('Button a')}
                    className={
                      selectedButton === 'Button a'
                        ? 'bg-white text-black w-[215px] rounded-lg'
                        : ''
                    }
                  >
                    {' '}
                    <Link
                      to="/dashboard/allProduct"
                      className={`  group flex items-center text-xl w-[215px] gap-3.5 font-medium p-2  hover:bg-primary rounded-md`}
                    >
                      <div>
                        {React.createElement(FaCartArrowDown, {
                          size: '24',
                        })}
                      </div>
                      <h2
                        style={{
                          transitionDelay: `${0 + 3}00ms`,
                        }}
                        className={`whitespace-pre duration-500 ${
                          !open && 'opacity-0 translate-x-28 overflow-hidden '
                        }`}
                      >
                        All Products
                      </h2>
                    </Link>
                  </div>
                  {/* show donner */}
                  <div
                    onClick={() => setSelectedButton('Button d')}
                    className={
                      selectedButton === 'Button d'
                        ? 'bg-white text-black w-[215px] rounded-lg'
                        : ''
                    }
                  >
                    {' '}
                    <Link
                      to="/dashboard/addProduct"
                      className={`  group flex items-center text-xl w-[215px] gap-3.5 font-medium p-2  hover:bg-primary rounded-md`}
                    >
                      <div>
                        {React.createElement(FaCartPlus, {
                          size: '24',
                        })}
                      </div>
                      <h2
                        style={{
                          transitionDelay: `${0 + 3}00ms`,
                        }}
                        className={`whitespace-pre duration-500 ${
                          !open && 'opacity-0 translate-x-28 overflow-hidden '
                        }`}
                      >
                        Add Product
                      </h2>
                    </Link>
                  </div>
                  {/* my buy*/}
                  <div
                    onClick={() => setSelectedButton('Button 5')}
                    className={
                      selectedButton === 'Button 5'
                        ? 'bg-white text-black w-[215px] rounded-lg'
                        : ''
                    }
                  >
                    {' '}
                    <Link
                      to="/dashboard/myOrder"
                      className={`  group flex items-center text-xl w-[215px] gap-3.5 font-medium p-2  hover:bg-primary rounded-md`}
                    >
                      <div>
                        {React.createElement(FaLuggageCart, {
                          size: '24',
                        })}
                      </div>
                      <h2
                        style={{
                          transitionDelay: `${0 + 3}00ms`,
                        }}
                        className={`whitespace-pre duration-500 ${
                          !open && 'opacity-0 translate-x-28 overflow-hidden '
                        }`}
                      >
                        My Order
                      </h2>
                    </Link>
                  </div>
                  {/* manage buy*/}
                  <div
                    onClick={() => setSelectedButton('Button 55')}
                    className={
                      selectedButton === 'Button 55'
                        ? 'bg-white text-black w-[215px] rounded-lg'
                        : ''
                    }
                  >
                    {' '}
                    <Link
                      to="/dashboard/manageBuy"
                      className={`  group flex items-center text-xl w-[215px] gap-3.5 font-medium p-2  hover:bg-primary rounded-md`}
                    >
                      <div>
                        {React.createElement(FaOpencart, {
                          size: '24',
                        })}
                      </div>
                      <h2
                        style={{
                          transitionDelay: `${0 + 3}00ms`,
                        }}
                        className={`whitespace-pre duration-500 ${
                          !open && 'opacity-0 translate-x-28 overflow-hidden '
                        }`}
                      >
                        Manage Buy
                      </h2>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
