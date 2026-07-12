import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import CreateAccount from "./Components/Login/CreateAccount";
import Login from "./Components/Login/Login";
import RequireAuth from "./Components/Login/RequireAUth";
import About from "./Components/Pages/About/About";
import Contact from "./Components/Pages/Contact/Contact";
import AllProducts from "./Components/Pages/Dashboard/All Product/AllProducts";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import ManageBuys from "./Components/Pages/Dashboard/Manage Buy/ManageBuys";
import MyOrders from "./Components/Pages/Dashboard/My Order/MyOrders";
import Payment from "./Components/Pages/Dashboard/My Order/Payment";
import MyProducts from "./Components/Pages/Dashboard/My Product/MyProducts";
import BuyNow from "./Components/Pages/Home/Buy/BuyNow";
import Buys from "./Components/Pages/Home/Buy/Buys";
import ProductCategory from "./Components/Pages/Home/Buy/ProductCategory";
import Home from "./Components/Pages/Home/Home";
import Sales from "./Components/Pages/Home/Sales/Sales";
import Navbar from "./Components/Share/Navbar";
import NotFound from "./Components/Share/NotFound";

function App() {
  const [category,setCategory]=useState([])
  return (
    <div>
      {/* <div className="fixed top-0 z-50 duration-1000 w-full"> */}
      <Navbar />
      {/* </div> */}

      <Routes>
        <Route path="/" element={<Home setCategory={setCategory} />}></Route>

        <Route path="/createAccount" element={<CreateAccount />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/sales"
          element={
            <RequireAuth>
              <Sales />
            </RequireAuth>
          }
        ></Route>
        <Route path="/buy" element={<Buys />}></Route>
        <Route
          path="/buyNow/:id"
          element={
            <RequireAuth>
              <BuyNow />
            </RequireAuth>
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/myOrders"
          element={
            <RequireAuth>
              <MyOrders />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/products"
          element={<ProductCategory category={category} />}
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        {/* <Route path="/payment/:id" element={<Payment />}></Route> */}
        <Route path="/*" element={<NotFound />}></Route>

        {/* Dashboard Start */}
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyProducts />} />
          <Route path="allProduct" element={<AllProducts />} />
          <Route path="addProduct" element={<Sales />} />
          <Route path="manageBuy" element={<ManageBuys />} />
          <Route path="myOrder" element={<MyOrders />} />
          <Route path="payment/:id" element={<Payment />}></Route>
        </Route>
        {/* Dashboard End */}
        {/* <Footer /> */}
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
