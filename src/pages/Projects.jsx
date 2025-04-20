import React from "react";
import foreverlife from "../assets/projects/foreverlife.jpg";
import maidem from "../assets/projects/maidem.jpg";
import realestate from "../assets/projects/realestate.jpg";
import dental from "../assets/projects/dental.jpg";
import webfuture from "../assets/projects/webfuture.jpg";
import hotelnow from "../assets/projects/hotelnow.jpg";

function Projects() {
  const projects = [
    {
      title: "E-commerce Website for Fashion",
      description:
        "A modern, fast-loading online store with secure payment gateway and product management dashboard.",
      image: foreverlife,
      link: "https://foreverlife.vercel.app/",
    },
    {
      title: "Maid Booking App – Wapventures",
      description:
        "On-demand maid services app with real-time booking, payment, and admin control panel.",
      image: maidem,
      link: "#",
    },
    {
      title: "WebFuture – Web Agency",
      description:
        "Personal portfolio to showcase web development work, blogs, and projects with smooth animations.",
      image: webfuture,
      link: "https://www.webfuture.in/",
    },
    {
      title: "HotelNow - Hotel Booking App",
      description:
        "A hotel booking app with real-time booking, payment, and admin control panel.",
      image: hotelnow,
      link: "https://hotelnow-frontend.vercel.app/",
    },
    {
      title: "DentalCareConnects - Dental Services",
      description:
        "A dental care platform that connects patients with dental professionals, offering appointment booking, reviews, and consultation services.",
      image: dental,
      link: "https://www.dentalcareconnects.com",
    },
    {
      title: "FakeEstate - Real Estate Website",
      description:
        "A property listing and real estate platform that helps users buy, sell, and rent properties with detailed listings, search filters, and agent contact options.",
      image: realestate,
      link: "https://fakeestate.vercel.app/",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <h2 className="text-4xl poppins-bold text-gray-900 mb-4">
        Our Recent Projects
      </h2>
      <p className="text-gray-500 mb-12 poppins-light tracking-wider">
        Real results, real impact. <br />
        Here’s a glimpse of the work we've done for our amazing clients.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl poppins-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p
                className="text-gray-500 text-sm mb-4"
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  WebkitLineClamp: 3, // Ensures the text is limited to 3 lines
                }}
              >
                {project.description}
              </p>
              <a
                href={project.link}
                className="text-blue-600 font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Case Study →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
