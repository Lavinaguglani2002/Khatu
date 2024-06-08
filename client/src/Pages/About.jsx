import React from 'react';
import avv from './avv.mp4'; // Import your background video file
import bh from "./bh.jpg";
import Footer from './Footer';
import Home from './Navbar';

const AboutUs = () => {
  return (
    <div>
      <Home />
      <div
        className="min-h-screen bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${bh})` }} // Use image as background
      >
        <div className="container mx-auto py-12 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 pr-8 mb-4 lg:mb-0 flex justify-center items-center">
            {/* Video Component */}
            <video autoPlay loop className="h-[50vw] rounded-lg w-[30vw]">
              <source src={avv} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            </div>

          <div className="lg:w-1/2 pl-8">
            <h2 className="text-3xl font-bold mb-4 text-white">About Us</h2>
            <p className="text-lg mb-6 text-white">
              Welcome to Khatu Ji Vaishnu Dhaba. We pride ourselves on serving delicious meals made from locally sourced ingredients. Our chefs craft each dish with passion and expertise.
            </p>
            <p className="text-lg mb-6 text-white">
              Our restaurant celebrates the rich heritage of flavors and culinary traditions.
              At Khatu Ji Vaishnu Dhaba, we prioritize customer satisfaction and strive to create a warm and welcoming atmosphere for our guests. Whether you're dining in or ordering takeout, we guarantee a memorable dining experience.
              Come visit us and indulge in a gastronomic journey that celebrates the essence of Indian cuisine and hospitality.

            </p>
            {/* Add more text or content as needed */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
