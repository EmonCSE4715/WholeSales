import React from 'react';

const About = () => {
  return (
    <div>
      <div><h1 className='bg-slate-100 p-4 text-center text-4xl  font-serif font-semibold'>About Us</h1></div>
      <div className="grid grid-cols-12 mt-10 mx-20 gap-10">
        <div className="col-span-7">
          <img
            className="rounded-lg shadow-xl"
            src="https://www.cloudways.com/blog/wp-content/uploads/Top-Ecommerce-Websites.jpg"
            alt=""
          />
        </div>
        <div className="col-span-5  text-lg font-serif">
          <h1>
            An e-commerce warehouse website serves as the digital hub for
            managing and optimizing the storage, processing, and shipping of
            online orders. These websites typically offer features such as
            real-time inventory tracking, order management systems, and
            integration with various e-commerce platforms. They ensure that
            products are efficiently stored and dispatched, minimizing delivery
            times and improving customer satisfaction. Additionally, they may
            provide analytics tools to monitor warehouse performance and
            streamline operations, making it easier for businesses to manage
            large volumes of orders and reduce operational costs.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;