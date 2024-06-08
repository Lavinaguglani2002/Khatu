// import React from 'react';
// import achiev from "./achiev.jpg";
// import auror from "./auror.jpg"; // Assuming you have a transparent background image with a file extension

// const Achievements = () => {
//   return (
//     <div className="relative">
//       {/* Image container */}
//       <div className="relative w-full h-80"> {/* Adjust the height here */}
//         {/* Actual image */}
//         <img src={auror} alt="Achievement 1" className="w-full h-full object-cover rounded-md shadow-lg" />
//         <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-4xl font-bold bg-opacity-50 bg-gray-800" style={{ backgroundImage: `url(${auror})`, backgroundSize: 'cover', abackgroundPosition: 'center' }}>
// Our Achievements
//         </div>
//       </div>

//       {/* Content */}
//       <div className="bg-gray-800 text-white p-6 relative z-10">
//         <p className="text-lg mb-6">
//         "Our restaurant Khatu Ji Vaishnu Dhaba has successfully 
//         completed and surpassed 1 lakh online orders through Zomato."






//         </p>

//         <div className="flex flex-wrap gap-4">
//           {/* Left side text */}
//           <div className="w-full md:w-1/2">
//           </div>
//           {/* Right side image */}
//           <div className="w-full md:w-1/2">
// <img src={achiev}/>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Achievements;
// import React from 'react';
// import achiev from "./achiev.jpg";
// import auror from "./auror.jpg"; // Assuming you have a transparent background image with a file extension
// import Navbar from './Navbar';

// const Achievements = () => {
//   return (
//     <div className="relative">
//         <Navbar/>
//       {/* Background image with text */}
//       <div className="relative w-full h-80 bg-cover bg-center flex items-center justify-center text-white text-4xl font-bold bg-opacity-50 bg-gray-800" style={{ backgroundImage: `url(${auror})` }}>
//         Our Achievements
//       </div>

//       {/* Content */}
//       <div className="bg-gray-800 text-white p-6 flex flex-col md:flex-row">
//         {/* Left side text */}
//         <div className="md:w-1/2">
//           <p className="text-7xl mb-6">
//             Our Restaurant Khatu Ji Vaishnu Dhaba has successfully completed and surpassed 1 lakh online orders through Zomato."
//           </p>
//         </div>
//         {/* Right side image */}
//         <div className="md:w-1/2 flex justify-end">
//           <img src={achiev} alt="Achievement 1" className="w-2/3 h-auto object-cover rounded-md shadow-lg" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Achievements;
// import React from 'react';
// import achiev from "./achiev.jpg";
// import auror from "./auror.jpg"; // Assuming you have a transparent background image with a file extension
// import Navbar from './Navbar';

// const Achievements = () => {
//   return (
//     <div className="relative">
//       <Navbar />
//       {/* Background image with text */}
//       <div className="relative w-full h-80 bg-cover bg-center flex items-center justify-center text-white text-4xl font-bold bg-opacity-50 bg-gray-800" style={{ backgroundImage: `url(${auror})` }}>
//         Our Achievements
//       </div>

//       {/* Content */}
//       <div className="bg-gray-800 text-white p-6 flex flex-col md:flex-row">
//         {/* Left side text */}
//         <div className="md:w-1/2">
//           <p className="text-7xl mb-6 transition-opacity ease-in-out duration-500 hover:opacity-50 text-blue-300 ">
//             Our Restaurant Khatu Ji Vaishnu Dhaba has successfully completed and surpassed 1 lakh online orders through Zomato."
//           </p>
//         </div>
//         {/* Right side image */}
//         <div className="md:w-1/2 flex justify-end">
//           <img src={achiev} alt="Achievement 1" className="w-2/3 h-auto object-cover rounded-md shadow-lg" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Achievements;
import React, { useState } from 'react';
import achiev from "./achiev.jpg";
import auror from "./auror.jpg"; // Assuming you have a transparent background image with a file extension
import Navbar from './Navbar';

const Achievements = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleAchievementsClick = () => {
    setIsTextVisible(!isTextVisible); // Toggle visibility on click
  };

  return (
    <div>
              <Navbar />

    <div className="relative">
      {/* Background image with text */}
      <div className="relative w-full h-80 bg-cover bg-center flex items-center justify-center text-white text-4xl font-bold bg-opacity-50 bg-gray-800" style={{ backgroundImage: `url(${auror})` }}>
        <button className={`btn ${isTextVisible ? 'active' : ''}`} onClick={handleAchievementsClick}>Our Achievements</button>
      </div>

      {/* Additional text */}
      <div className={`bg-gray-800 text-white p-6 flex flex-col md:flex-row ${isTextVisible ? 'visible' : 'hidden'}`}>
        {/* Left side text */}
        <div className="md:w-1/2">
          <p className="text-7xl mb-6 transition-opacity ease-in-out duration-500 hover:opacity-50 text-blue-300 cursive-font">
            Our Restaurant<strong className='text-red-400'> Khatu</strong> Ji <strong className='text-red-400'>Vaishnu</strong> Dhaba has successfully completed and surpassed 1 lakh online orders through Zomato.
          </p>
        </div>
        {/* Right side image */}
        <div className="md:w-1/2 flex justify-end">
          <img src={achiev} alt="Achievement 1" className="w-2/3 h-auto object-cover rounded-md shadow-lg" />
        </div>
      </div>
    </div>
    </div>

  );
};

export default Achievements;
