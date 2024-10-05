import React, { useState } from "react";
import Image from "/AboutUs_Top.png";

function About() {
  return (
    <div>
      <div className="text-gray-800 flex flex-col justify-center items-center">
        <div class="container px-6 py-10 mx-auto">
          <div className="lg:-mx-6 lg:flex lg:items-center">
            <img
              className="mx-4 place-content-start mt-4 max-w-xl my-10 rounded-lg justify-center items-center shadow-lg"
              src="about_us.png"
              alt="About Us"
            />
            <div>
              <h1 className="my-4 pt-5 text-4xl font-semibold tracking-wider capitalize dark:text-white">
                Who Are We?
              </h1>
              <h3 className="pt-5 text-sm tracking-wider capitalize dark:text-white">
                At "One Konek", we are passionate about [your core mission or
                value]. Founded in [year], we have committed ourselves to
                delivering exceptional [products/services] that not only meet
                but exceed our customers' expectations. Our team of dedicated
                professionals brings a wealth of experience and expertise,
                ensuring that we stay at the forefront of innovation in the
                industry. We believe in [core values such as integrity, quality,
                sustainability, etc.], and we strive to create a positive impact
                in everything we do, from our customer interactions to our
                community engagements. Our mission is to [specific goals or
                objectives], and we take pride in building lasting relationships
                with our clients based on trust, transparency, and mutual
                respect. At [Your Company Name], we understand that our success
                is rooted in the success of our customers. That’s why we work
                tirelessly to provide personalized solutions that cater to their
                unique needs, helping them achieve their goals. Join us on this
                journey as we continue to grow, innovate, and make a difference
                in the world.
              </h3>
            </div>
          </div>
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
              <div className="p-8 h-full w-full bg-white shadow-lg rounded-lg">
                <div className="p-6 text-center">
                  <h2 className="text-gray-500 text-lg font-semibold">
                    Wala pa
                  </h2>
                  <p className="text-gray-400">Template</p>
                </div>
              </div>
              <div className="p-8 h-full w-full bg-white shadow-lg rounded-lg">
                <div className="p-6 text-center">
                  <h2 className="text-gray-500 text-lg font-semibold">
                    Wala pa
                  </h2>
                  <p className="text-gray-400">Template</p>
                </div>
              </div>
            </div>
          </section>
          <div className="py-20">
            <h1 className="text-lg font-semibold">Footer</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
