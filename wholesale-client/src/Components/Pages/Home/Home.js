import { Link } from "react-router-dom";
import Footer from "../../Share/Footer";
import Category from "./Category/Category";
import LatestProduct from "./Latest Product/LatestProduct";
import PaymentMethod from "./Payment Method/PaymentMethod";
import SSP from "./SSP/SSP";
import Video from "./Video/Video";

const Home = ({ setCategory }) => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-[500px] font-sans"
      style={{
        backgroundImage:
          'url("https://png.pngtree.com/background/20230516/original/pngtree-two-business-men-shake-hands-on-a-city-street-picture-image_2597476.jpg")',
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

      {/* Main Content */}
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 md:gap-32 h-full w-full text-center px-4">
        {/* Sales Card */}
        <Link to="sales" className="group">
          <div className="border border-white/60 bg-white/10 backdrop-blur-sm rounded-2xl p-10 md:p-12 w-[300px] md:w-[400px] transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-red-400 group-hover:scale-105 group-hover:shadow-2xl">
            <h2 className="text-4xl md:text-6xl font-bold text-white group-hover:text-white tracking-wide">
              For Sales
            </h2>
            <p className="mt-4 text-gray-200 text-lg opacity-80 group-hover:opacity-100">
              Grow your business with trusted buyers.
            </p>
          </div>
        </Link>

        {/* Buy Card */}
        <Link to="buy" className="group">
          <div className="border border-white/60 bg-white/10 backdrop-blur-sm rounded-2xl p-10 md:p-12 w-[300px] md:w-[400px] transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-green-400 group-hover:scale-105 group-hover:shadow-2xl">
            <h2 className="text-4xl md:text-6xl font-bold text-white group-hover:text-white tracking-wide">
              To Buy
            </h2>
            <p className="mt-4 text-gray-200 text-lg opacity-80 group-hover:opacity-100">
              Find the best deals and trusted sellers.
            </p>
          </div>
        </Link>
      </div>
      <Category setCategory={setCategory} />
      <LatestProduct />
      <Video />
      <SSP />
      <PaymentMethod />
      <Footer />
    </div>
  );
};

export default Home;
