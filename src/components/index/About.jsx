import React, { useState } from "react";
import Image from "/aboutus.png";

function About() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (section) => {
    setActiveDropdown(activeDropdown === section ? null : section);
  };

  return (
    <div className="flex flex-col items-center text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-6 py-10">
        <div className="lg:flex lg:items-center lg:-mx-6">
          <div className="lg:mx-6 flex flex-col items-start">
            <h1 className="text-4xl font-semibold tracking-wide mb-4">
              About Us
            </h1>
            <p className="text-sm tracking-wide leading-relaxed mb-6">
              Company Overview Established on December 12, 2020, ONE-KONEK
              Network and Data Solutions is a community-based internet service
              provider serving Bulacan and its surrounding areas. With a firm
              commitment to delivering high-quality, affordable, and locally
              managed internet, ONE-KONEK enables individuals and businesses in
              Bulacan to connect to the digital world reliably and efficiently.
              Licensed by the National Telecommunications Commission (NTC), we
              ensure a legal, structured service that meets the region's growing
              demand for accessible connectivity. Our unique blend of advanced
              technology and dedicated local service distinguishes ONE-KONEK as
              a trusted provider within the community.
            </p>
          </div>
          <div className="lg:ml-10 mt-6 lg:mt-0">
            <img className="max-w-md rounded-lg" src="aboutus.png" />
          </div>
        </div>

        <section className="py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 h-full bg-white shadow-lg rounded-lg transition-shadow duration-300 hover:shadow-xl dark:bg-gray-900">
              <div className="text-center">
                <h3 className="text-gray-600 dark:text-gray-300 text-lg font-semibold mb-2">
                  Our Vision
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  To be the leading community-based internet service provider in
                  Bulacan, connecting communities through accessible, high-speed
                  internet and supporting them with reliable, locally-managed
                  technology solutions.
                </p>
              </div>
            </div>
            <div className="p-8 h-full bg-white shadow-lg rounded-lg transition-shadow duration-300 hover:shadow-xl dark:bg-gray-900">
              <div className="text-center">
                <h3 className="text-gray-600 dark:text-gray-300 text-lg font-semibold mb-2">
                  Our Mission
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  ONE-KONEK is dedicated to delivering more than just
                  connectivity; we aim to bridge the digital gap in our
                  communities with services that are accessible, reliable, and
                  responsive. Our focus on quality service is summed up by our
                  tagline: "Siguradong OK sa SPEED, OK sa PRESYO, at OK sa
                  SERBISYO. Ito ang TATAK One-Konek – tatak na OK para sa iyo!"
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10">
          <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-6">
            Internet Subscription Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-8 h-full bg-white shadow-lg rounded-lg transition-shadow duration-300 hover:shadow-xl dark:bg-gray-900">
              <div className="text-center">
                <h3 className="text-gray-600 dark:text-gray-300 text-lg font-semibold mb-2">
                  SULIT PLAN 75Mbps – Php749/month
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Best for 3-5 devices, ideal for general use like browsing,
                  streaming, and casual gaming.
                </p>
              </div>
            </div>
            <div className="p-8 h-full bg-white shadow-lg rounded-lg transition-shadow duration-300 hover:shadow-xl dark:bg-gray-900">
              <div className="text-center">
                <h3 className="text-gray-600 dark:text-gray-300 text-lg font-semibold mb-2">
                  OKAY PLAN 100Mbps – Php949/month
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Perfect for 5-7 devices, providing stable speeds for browsing,
                  streaming, and light downloading.
                </p>
              </div>
            </div>
            <div className="p-8 h-full bg-white shadow-lg rounded-lg transition-shadow duration-300 hover:shadow-xl dark:bg-gray-900">
              <div className="text-center">
                <h3 className="text-gray-600 dark:text-gray-300 text-lg font-semibold mb-2">
                  WOW PLAN 200Mbps – Php1449/month
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Suitable for homes or small businesses with 8-12 devices,
                  offering reliable speeds for demanding tasks.
                </p>
              </div>
            </div>
            <div className="p-8 h-full bg-white shadow-lg rounded-lg transition-shadow duration-300 hover:shadow-xl dark:bg-gray-900">
              <div className="text-center">
                <h3 className="text-gray-600 dark:text-gray-300 text-lg font-semibold mb-2">
                  PANALO PLAN 300Mbps – Php1949/month
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Designed for large households or businesses with 12+ devices,
                  supporting extensive, high-speed connectivity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col items-start text-gray-800 dark:text-gray-200">
          <div className="container mx-auto px-6 py-10">
            <div className="mt-10">
              <div
                onClick={() => toggleDropdown("additionalServices")}
                className="cursor-pointer text-gray-800 dark:text-gray-200 hover:text-blue-500 shadow-md p-2 rounded transition duration-200 ease-in-out hover:shadow-lg"
              >
                Additional Services
              </div>
              {activeDropdown === "additionalServices" && (
                <div className="mt-4 text-gray-600 dark:text-gray-400">
                  <p>
                    In addition to internet connectivity, ONE-KONEK provides a
                    wide range of technology solutions, enhancing convenience,
                    security, and digital access for local businesses,
                    institutions, and individual users.
                  </p>
                  <ol className="list-decimal ml-6">
                    <li className="float-left">
                      <span className="float-left">
                        CCTV Installation Services
                      </span>
                      <p>
                        We offer comprehensive CCTV installation for homes,
                        businesses, and community areas, enhancing safety and
                        security with high-quality surveillance solutions. Our
                        technicians ensure proper setup and maintenance,
                        allowing for dependable monitoring and peace of mind.
                      </p>
                    </li>
                    <li className="float-left">
                      <span className="float-left">
                        Public Address System Installation Services
                      </span>
                      <p>
                        Our PA system installation services are designed for a
                        range of clients, including businesses, schools, and
                        Local Government Units (LGUs). By providing reliable and
                        efficient public address systems, we enable clear and
                        effective communication for events, announcements, and
                        other community needs. This service ensures seamless
                        audio solutions that are essential for large gatherings
                        and public spaces.
                      </p>
                    </li>
                    <li className="float-left">
                      <span className="float-left">
                        Computer and Printer Repair
                      </span>
                      <p>
                        ONE-KONEK’s skilled technicians offer fast and effective
                        repair services for computers and printers, ensuring
                        these devices remain operational and efficient. Whether
                        for individual clients or small businesses, our repair
                        services help avoid downtime, keeping essential
                        technology running smoothly.
                      </p>
                    </li>
                    <li className="float-left">
                      <span className="float-left">
                        Smart Printing Solutions (Printer Rental Service)
                      </span>
                      <p>
                        Our flexible printer rental services offer a convenient
                        option for small businesses and individuals needing
                        printing capabilities without long-term commitment. With
                        a range of printer models available, we provide tailored
                        rental solutions that cater to different usage levels
                        and printing needs.
                      </p>
                    </li>
                    <li className="float-left">
                      <span className="float-left">
                        Document Printing Services
                      </span>
                      <p>
                        We provide high-quality document printing services to
                        meet both personal and business needs. From single-page
                        prints to bulk printing jobs, ONE-KONEK ensures
                        professional quality and fast turnaround, supporting our
                        clients’ document and branding requirements.
                      </p>
                    </li>
                    <li className="float-left mb-4">
                      <span className="float-left">
                        Cash-In and Cash-Out Services for GCash and Maya
                      </span>
                      <p>
                        For added convenience in the community, ONE-KONEK offers
                        cash-in and cash-out services for GCash and Maya users.
                        This service allows residents to handle digital
                        transactions securely and easily, supporting a
                        digital-friendly local economy and providing accessible
                        e-wallet services in their own neighborhood.
                      </p>
                    </li>
                  </ol>
                </div>
              )}
            </div>

            <div className="mt-10">
              <div
                onClick={() => toggleDropdown("freeInternet")}
                className="cursor-pointer text-gray-800 dark:text-gray-200 hover:text-blue-500 shadow-md p-2 rounded transition duration-200 ease-in-out hover:shadow-lg"
              >
                FREE INTERNET CONNECTION
              </div>
              {activeDropdown === "freeInternet" && (
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  ONE-KONEK is committed to supporting local institutions by
                  providing FREE INTERNET CONNECTION for schools, Local
                  Government Offices, churches, and events, particularly those
                  organized by LGUs and community groups. This initiative aims
                  to enhance access to information, resources, and connectivity
                  for local residents, contributing to community development and
                  engagement.
                </p>
              )}
            </div>

            <div className="mt-10">
              <div
                onClick={() => toggleDropdown("whyChoose")}
                className="cursor-pointer text-gray-800 dark:text-gray-200 hover:text-blue-500 shadow-md p-2 rounded transition duration-200 ease-in-out hover:shadow-lg"
              >
                Why Choose ONE-KONEK?
              </div>
              {activeDropdown === "whyChoose" && (
                <div className="mt-4 text-gray-600 dark:text-gray-400">
                  <p>
                    ONE-KONEK is more than just an internet provider—we are a
                    dedicated partner in bringing accessible digital solutions
                    to Bulacan. Our Business Account setup with major telecom
                    providers and Joint Pole Agreements with local power
                    distributors ensure a reliable, sustainable infrastructure
                    that fully complies with regulatory standards. Subscribers
                    benefit from fast connectivity and the peace of mind that
                    comes with knowing their service provider is committed to
                    legal, long-term operations.
                  </p>

                  <p className="mt-4">
                    <strong>Customer-Centered Technical Support</strong>
                    <br />
                    Our Technical Team Department is always ready to address
                    technical concerns quickly and efficiently. Following our
                    Report-Now-Repair-Same-Day model, we are committed to
                    resolving connectivity issues within the day they are
                    reported. This rapid response capability sets us apart,
                    ensuring subscribers experience minimal service
                    interruptions and a seamless digital experience.
                  </p>

                  <p className="mt-4">
                    <strong>Payment Options</strong>
                  </p>

                  <ul className="list-disc ml-6 mt-2">
                    <li>
                      GCash Account Number: <strong>0995-326-1899</strong>
                    </li>
                    <li>
                      PayMaya Account Number: <strong>0908-240-9682</strong>
                    </li>
                    <li>
                      Door-to-Door Collection: Authorized collectors provide
                      reliable at-home payment services.
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-10">
              <div
                onClick={() => toggleDropdown("contactUs")}
                className="cursor-pointer text-gray-800 dark:text-gray-200 hover:text-blue-500 shadow-md p-2 rounded transition duration-200 ease-in-out hover:shadow-lg"
              >
                Contact Us
              </div>
              {activeDropdown === "contactUs" && (
                <div className="mt-4 text-gray-600 dark:text-gray-400">
                  <p>
                    For service inquiries, assistance, or to schedule an
                    appointment, please reach out to us:
                  </p>

                  <p className="mt-4">
                    <strong>Main Office:</strong> 0505 Purok 2, Looban, Santa
                    Elena, Hagonoy, Bulacan
                  </p>

                  <p className="mt-2">
                    <strong>Palapat Office:</strong> 2nd Floor, PetroJam
                    Commercial Building, PetroJam Gas Station, Purok 6, Palapat,
                    Hagonoy, Bulacan
                  </p>

                  <p className="mt-2">
                    <strong>Contact Numbers:</strong> 0947-898-0649,
                    0947-898-0690, 0968-856-6745
                  </p>

                  <p className="mt-2">
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:onekonekinternet@gmail.com"
                      className="text-blue-500 hover:underline"
                    >
                      onekonekinternet@gmail.com
                    </a>
                  </p>

                  <p className="mt-2">
                    <strong>Facebook Page:</strong>{" "}
                    <a
                      href="https://www.facebook.com/onekonekinternet"
                      className="text-blue-500 hover:underline"
                    >
                      facebook.com/onekonek
                    </a>
                  </p>

                  <p className="mt-4">
                    ONE-KONEK Network and Data Solutions is dedicated to
                    advancing local connectivity and community support with
                    trusted service, quality products, and a commitment to
                    empowering Bulacan through digital accessibility.
                  </p>
                </div>
              )}
            </div>
          </div>

          <footer className="py-10 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} OneKonek. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default About;
