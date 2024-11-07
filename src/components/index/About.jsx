import React, { useState } from "react";
import Image from "/AboutUs_Top.png";

function About() {
  return (
    <div className="flex flex-col items-center text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-6 py-10">
        <div className="lg:flex lg:items-center lg:-mx-6">
          <img
            className="mx-4 max-w-xl rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
            src="about_us.png"
            alt="About Us"
          />
          <div className="lg:mx-6">
            <h1 className="my-4 text-4xl font-semibold tracking-wide capitalize">
              Who Are We?
            </h1>
            <h3 className="text-sm tracking-wide leading-relaxed">
              At OneKonek, we believe that every business and individual
              deserves an internet experience tailored to their unique needs.
              Founded on the principles of innovation and customer satisfaction,
              we specialize in providing customizable internet solutions that
              empower our clients to thrive in the digital age. With a dedicated
              team of experts and state-of-the-art technology, we offer flexible
              plans, exceptional reliability, and personalized support that sets
              us apart from the competition. Whether you're a small business
              looking to enhance productivity or a family seeking seamless
              connectivity, OneKonek is committed to delivering the perfect
              internet solution just for you. Join us in connecting to a world
              of possibilities!
            </h3>
          </div>
        </div>

<<<<<<< Updated upstream
        <section className="py-10">
          <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-6">
            Our Services
=======
        <div className="py-12">
          <div className="mx-6 md:mx-28 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision Card */}
            <div className="flex items-center justify-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-shadow duration-300">
              <div className="text-center max-w-md">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4 dark:text-blue-400">
                  Our Vision
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  To be the leading community-based internet service provider in
                  Bulacan, connecting communities through accessible, high-speed
                  internet and supporting them with reliable, locally-managed
                  technology solutions.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="flex items-center justify-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-shadow duration-300">
              <div className="text-center max-w-md">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4 dark:text-blue-400">
                  Our Mission
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  ONE-KONEK is dedicated to bridging the digital gap in
                  communities with services that are accessible, reliable, and
                  responsive. 'OK sa SPEED, OK sa PRESYO, OK sa SERBISYO - TATAK
                  One-Konek!'
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-14 py-12">
          <h2
            className="text-4xl font-extrabold text-center text-gray-900 dark:text-gray-300 mb-6 py-4 border-t-2 border-gray-300 dark:border-gray-600"
            aria-label="Internet Subscription Plans"
          >
            Internet Subscription Plans
>>>>>>> Stashed changes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 h-full bg-white shadow-lg rounded-lg transition-shadow duration-300 hover:shadow-xl dark:bg-gray-900">
              <div className="text-center">
                <h3 className="text-gray-600 dark:text-gray-300 text-lg font-semibold mb-2">
                  Internet Plans
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Choose from a variety of internet plans tailored to meet your
                  needs, whether for home or business use.
                </p>
              </div>
            </div>
            <div className="p-8 h-full bg-white shadow-lg rounded-lg transition-shadow duration-300 hover:shadow-xl dark:bg-gray-900">
              <div className="text-center">
                <h3 className="text-gray-600 dark:text-gray-300 text-lg font-semibold mb-2">
                  Customer Support
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our dedicated customer support team is here to assist you with
                  any inquiries or issues you may have.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-10 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} OneKonek. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default About;
