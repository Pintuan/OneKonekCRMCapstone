import React, { useState } from "react";
import Plans from "./Plans";

function Home() {
  return (
    <div>
  <div>
    <img
      src="map.svg"
      alt="Create a Plan"
      className="w-full h-[50vh] object-cover mb-8"
    />

    <div className="mx-8 bg-blen-darker-white my-4 mb-16 flex flex-col md:flex-row items-start lg:px-8 dark:bg-gray-900 rounded-lg overflow-hidden">
      {/* Text Section */}
      <div className="mb-12">
        {/* Added text-center for smaller screens */}
        <h1 className="text-left text-4xl md:text-6xl font-extrabold text-gray-800 dark:text-white mb-4">
          WELCOME TO ONE KONEK!
        </h1>
        <h4 className="text-left text-lg md:text-lg text-gray-800 dark:text-gray-200 leading-tight mb-6">
          We're delighted to have you here. At One Konek, we believe in
          connecting you to what matters to you the most: family, work, or
          leisure. Our commitment to providing seamless and reliable
          internet services ensures that you enjoy fast, uninterrupted
          connectivity at home or in the office. With a variety of flexible
          plans tailored to meet your needs, we empower you to explore,
          engage, and thrive in a digital world. Join us on this journey
          toward better, faster internet, and experience the One Konek
          difference today!
        </h4>
      </div>
    </div>
  </div>
  <div className="flex justify-center w-full mb-20">
    <img
      src="ok_man.png"
      alt="Welcome Animation"
      className="w-50 h-60 max-w-xs rounded-lg transition-transform duration-300 transform hover:scale-105 mb-6"
    />
  </div>

  <Plans />
  <footer className="py-10 text-center">
    <p className="text-sm text-gray-500 dark:text-gray-400">
      © {new Date().getFullYear()} OneKonek. All rights reserved.
    </p>
  </footer>
</div>

  );
}

export default Home;
