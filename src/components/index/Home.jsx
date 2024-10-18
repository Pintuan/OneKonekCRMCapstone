import React, { useState } from "react";
import Plans from "./Plans";

function Home() {
  return (
    <div>
      <div>
        <img
          src="map.svg"
          alt="Create a Plan"
          className="w-screen h-[50vh] object-cover mb-2"
        />

        <div className="mb-4 flex flex-col md:flex-row items-center justify-between mt-2 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
 
          <div className="md:ms-16 flex-1 mb-6 md:mb-0 md:mr-8">
            <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white transition-transform duration-300 transform hover:scale-105 mb-4">
              WELCOME TO ONE KONEK!
            </h1>

            <h3 className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              Seamless Internet, Delivered to You by OneKonek! Stay connected to
              what matters with OneKonek. Whether it’s for work, play, or
              staying in touch with friends and family, we’ve got your internet
              needs covered. Explore our services and get started on a journey
              to better, faster connectivity today!
            </h3>
          </div>


          <div className="flex-shrink-0 w-full md:w-auto">
            <img
              src="home_gif_arrow.gif" 
              alt="Welcome Animation"
              className="w-full h-auto max-w-xs rounded-lg" 
            />
          </div>
        </div>
      </div>

      <Plans />
    </div>
  );
}

export default Home;
