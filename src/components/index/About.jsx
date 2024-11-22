import React, { useState } from "react";

function About() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (section) => {
    if (section === "Contact Us") {
      const contactSection = document.getElementById("contact-section");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
    setActiveDropdown(activeDropdown === section ? null : section);
  };

  return (
    <div className="flex flex-col items-center text-gray-800 dark:text-gray-200 bg-gradient-to-b from-gray-300 via-white to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 py-8 text-center">
        <div className="rounded-xl bg-gradient-to-b from-gray-100 to-transparent dark:from-gray-900 dark:to-transparent py-12">
          <div className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-center">
            <div className="ml-8 lg:w-1/2 flex flex-col items-center lg:items-start p-6">
              <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-200 mb-6 text-center lg:text-left">
                About Us
              </h1>

              <p className="text-lg tracking-wide leading-relaxed mb-6 max-w-2xl text-center lg:text-left">
                Established on December 12, 2020, ONE-KONEK Network and Data
                Solutions is a community-based internet service provider serving
                Bulacan and surrounding areas with high-quality, affordable, and
                locally managed internet. We enable individuals and businesses
                to connect reliably and efficiently with advanced technology and
                a commitment to local service.
              </p>

              <a
                href="/contact"
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
              >
                Contact Us
              </a>
            </div>

            <div className="h-46 w-46 lg:w-1/2 flex justify-center mt-6 lg:mt-0">
              <img
                src="/aboutus_pic.png"
                alt="Description of image"
                className=" rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

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
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 px-8 mt-8">
            {[
              {
                title: "SULIT PLAN 75Mbps",
                price: "Php749/month",
                description:
                  "Best for 3-5 devices, ideal for general use like browsing, streaming, and casual gaming.",
              },
              {
                title: "OKAY PLAN 100Mbps",
                price: "Php949/month",
                description:
                  "Perfect for 5-7 devices, stable speeds for browsing, streaming, and light downloading.",
              },
              {
                title: "WOW PLAN 200Mbps",
                price: "Php1449/month",
                description:
                  "Suitable for 8-12 devices, offering reliable speeds for demanding tasks.",
              },
              {
                title: "PANALO PLAN 300Mbps",
                price: "Php1949/month",
                description:
                  "For large households or businesses, supporting extensive, high-speed connectivity.",
              },
            ].map(({ title, price, description }) => (
              <div
                key={title}
                className="flex items-center justify-center p-8 bg-gray-200 dark:bg-gray-800 rounded-full transition-shadow duration-300 aspect-square"
                style={{
                  boxShadow: "0px 4px 15px rgba(55, 65, 81, 0.7)",
                  filter:
                    "drop-shadow(0 4px 8px rgba(209, 213, 219, 0.3)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))",
                }}
                role="region"
                aria-labelledby={`${title}-heading`}
              >
                <div className="text-center">
                  <h3
                    id={`${title}-heading`}
                    className="text-lg font-semibold text-gray-800 dark:text-gray-300 mb-2"
                  >
                    {title}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {price}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 mt-4">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-col items-start text-gray-800 dark:text-gray-200">
          <div className="container mx-auto px-6 py-12">
            {[
              {
                label: "Additional Services",
                content: (
                  <div>
                    <p>
                      In addition to internet connectivity, ONE-KONEK provides a
                      wide range of technology solutions, enhancing convenience,
                      security, and digital access for local businesses,
                      institutions, and individual users.
                    </p>
                    <h4 className="font-semibold mt-4">
                      CCTV Installation Services
                    </h4>
                    <p>
                      We offer comprehensive CCTV installation for homes,
                      businesses, and community areas, enhancing safety and
                      security with high-quality surveillance solutions. Our
                      technicians ensure proper setup and maintenance, allowing
                      for dependable monitoring and peace of mind.
                    </p>
                    <h4 className="font-semibold mt-4">
                      Public Address System Installation Services
                    </h4>
                    <p>
                      Our PA system installation services are designed for a
                      range of clients, including businesses, schools, and Local
                      Government Units (LGUs). By providing reliable and
                      efficient public address systems, we enable clear and
                      effective communication for events, announcements, and
                      other community needs. This service ensures seamless audio
                      solutions that are essential for large gatherings and
                      public spaces.
                    </p>
                    <h4 className="font-semibold mt-4">
                      Computer and Printer Repair
                    </h4>
                    <p>
                      ONE-KONEK’s skilled technicians offer fast and effective
                      repair services for computers and printers, ensuring these
                      devices remain operational and efficient. Whether for
                      individual clients or small businesses, our repair
                      services help avoid downtime, keeping essential technology
                      running smoothly.
                    </p>
                    <h4 className="font-semibold mt-4">
                      Smart Printing Solutions (Printer Rental Service)
                    </h4>
                    <p>
                      Our flexible printer rental services offer a convenient
                      option for small businesses and individuals needing
                      printing capabilities without long-term commitment. With a
                      range of printer models available, we provide tailored
                      rental solutions that cater to different usage levels and
                      printing needs.
                    </p>
                    <h4 className="font-semibold mt-4">
                      Document Printing Services
                    </h4>
                    <p>
                      We provide high-quality document printing services to meet
                      both personal and business needs. From single-page prints
                      to bulk printing jobs, ONE-KONEK ensures professional
                      quality and fast turnaround, supporting our clients’
                      document and branding requirements.
                    </p>
                    <h4 className="font-semibold mt-4">
                      Cash-In and Cash-Out Services for GCash and Maya
                    </h4>
                    <p>
                      For added convenience in the community, ONE-KONEK offers
                      cash-in and cash-out services for GCash and Maya users.
                      This service allows residents to handle digital
                      transactions securely and easily, supporting a
                      digital-friendly local economy and providing accessible
                      e-wallet services in their own neighborhood.
                    </p>
                  </div>
                ),
              },
              {
                label: "FREE INTERNET CONNECTION",
                content:
                  "ONE-KONEK is committed to supporting local institutions by providing FREE INTERNET CONNECTION for schools, Local Government Offices, churches, and events, particularly those organized by LGUs and community groups. This initiative aims to enhance access to information, resources, and connectivity for local residents, contributing to community development and engagement.",
              },
              {
                label: "Why Choose ONE-KONEK?",
                content: (
                  <div>
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
                    <h4 className="font-semibold mt-4">
                      Customer-Centered Technical Support
                    </h4>
                    <p>
                      Our Technical Team Department is always ready to address
                      technical concerns quickly and efficiently. Following our
                      Report-Now-Repair-Same-Day model, we are committed to
                      resolving connectivity issues within the day they are
                      reported. This rapid response capability sets us apart,
                      ensuring subscribers experience minimal service
                      interruptions and a seamless digital experience.
                    </p>
                  </div>
                ),
              },
              {
                id: "contact-section",
                label: "Contact Us",
                content: (
                  <div>
                    <p>
                      For service inquiries, assistance, or to schedule an
                      appointment, please reach out to us:
                    </p>
                    <ul className="list-disc list-inside mt-2">
                      <li>
                        Main Office: 0505 Purok 2, Looban, Santa Elena, Hagonoy,
                        Bulacan
                      </li>
                      <li>
                        Palapat Office: 2nd Floor, PetroJam Commercial Building,
                        PetroJam Gas Station, Purok 6, Palapat, Hagonoy, Bulacan
                      </li>
                      <li>
                        Contact Numbers: 0947-898-0649, 0947-898-0690,
                        0968-856-6745
                      </li>
                      <li>
                        Email:{" "}
                        <a
                          href="mailto:onekonekinternet@gmail.com"
                          className="text-blue-600 hover:underline"
                        >
                          onekonekinternet@gmail.com
                        </a>
                      </li>
                      <li>
                        Facebook Page:{" "}
                        <a
                          href="https://www.facebook.com/onekonekinternet"
                          className="text-blue-600 hover:underline"
                        >
                          facebook.com/onekonek
                        </a>
                      </li>
                    </ul>
                    <p className="mt-4">
                      ONE-KONEK Network and Data Solutions is dedicated to
                      advancing local connectivity and community support with
                      trusted service, quality products, and a commitment to
                      empowering Bulacan through digital accessibility.
                    </p>
                  </div>
                ),
              },
            ].map(({ label, content }) => (
              <div key={label} className="mt-4 w-full">
                <div
                  onClick={() => toggleDropdown(label)}
                  className="rounded-xl dark:bg-gray-700 bg-gray-300 text-xl flex items-center justify-between cursor-pointer text-gray-800 dark:text-gray-200 shadow-lg p-4 hover:text-blue-500 dark:hover:text-blue-500"
                >
                  <span className="text-left ml-4">{label}</span>
                  <span
                    className={`transform transition-transform duration-200 ${activeDropdown === label ? "rotate-180" : ""
                      }`}
                  >
                    ▼
                  </span>
                </div>

                {activeDropdown === label && (
                  <div className="mt-4 text-gray-600 dark:text-gray-400 text-left p-4">
                    {content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="py-8 text-center border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} OneKonek. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default About;
