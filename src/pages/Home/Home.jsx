import React from "react";
import banner from "../../assets/banner/header-bg.png";
import bannervisual from "../../assets/content/banner-content-img.png";
import {
  Monitor,
  PenTool,
  Globe2,
  ShoppingCartIcon,
  PhoneCall,
  TrendingUp,
} from "lucide-react";

import { Link } from "react-router-dom";
import Projects from "../Projects";
import SDLCSection from "./SDLCSection";
import Industries from "./Industries";
import Technology from "./Technology";
import WebServicesPricing from "./WebServicesPricing";
import Testimonials from "./Testimonials";

const features = [
  {
    icon: <Monitor className="h-8 w-8 text-white" />,
    title: "Web",
    highlight: "Development",
    description:
      "Custom websites built for performance, scalability, and user experience using modern tech stacks like React, Next.js, and Node.js.",
  },
  {
    icon: <PenTool className="h-8 w-8 text-white" />,
    title: "UI/UX",
    highlight: "Design",
    description:
      "Crafting intuitive, engaging designs that enhance usability and reflect your brand identity across all devices.",
  },
  {
    icon: <Globe2 className="h-8 w-8 text-white" />,
    title: "Digital",
    highlight: "Marketing",
    description:
      "Boost visibility and drive conversions through SEO, Google Ads, social media campaigns, and content strategy.",
  },
  {
    icon: <ShoppingCartIcon className="h-8 w-8 text-white" />,
    title: "E-commerce",
    highlight: "Solutions",
    description:
      "End-to-end development of powerful eCommerce platforms that increase sales and provide seamless user journeys.",
  },
  {
    icon: <PhoneCall className="h-8 w-8 text-white" />,
    title: "Tech",
    highlight: "Support",
    description:
      "Ongoing maintenance, updates, and troubleshooting to keep your digital products running smoothly 24/7.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-white" />,
    title: "Branding &",
    highlight: "Strategy",
    description:
      "Helping brands find their voice through creative branding, logo design, and growth-driven marketing plans.",
  },
];

const HeroSection = () => {
  return (
    <>
      <section>
        <div className="relative bg-gradient-to-r from-blue-800 to-blue-500 overflow-hidden min-h-screen  pb-24">
          {/* Background curved shape */}
          <div className="absolute bottom-0 left-0 right-0 ">
            <img src={banner} alt="Banner" className=" w-full " />
          </div>

          <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center mt-16">
            {/* Left content - text area */}
            <div className="w-full lg:w-1/2 text-white z-10 mt-20 lg:mt-0">
              <h1 className="text-5xl   font-light  mb-6">
                Let's <span className="font-bold">build something</span> that
                your users love
              </h1>
              <p className="text-xl opacity-90 mb-10 max-w-lg">
                Strong management and security for powerful features. Clean and
                creative design for you.
              </p>
              <div className="flex items-center">
                <Link
                  to="/get-started"
                  className="bg-transparent hover:bg-blue-700 text-white font-medium py-3 px-8 border-2 border-white rounded-md mr-6 transition-colors duration-300"
                >
                  Get Started
                </Link>
                <Link
                  to="/watch-video"
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right content - illustration */}
            <div className="w-full lg:w-1/2 mt-16 lg:mt-7 z-10">
              <img
                src={bannervisual}
                alt="Digital Experience Illustration"
                className="w-full"
                // You'll need to replace this with your actual illustration image
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl poppins-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-gray-500 mb-12 poppins-light tracking-wider">
            We craft digital experiences that drive results. <br />
            From custom websites to powerful marketing strategies, we help
            brands grow and thrive online.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-5 px-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative bg-white p-5 md:p-10 rounded-lg hover:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] hover:scale-105 transition-transform duration-500 group"
              >
                {/* Wavy animated blob behind the icon */}
                <div className="absolute md:top-7 top-3 left-1/2 transform -translate-x-1/2 gooey" />

                {/* Icon and content */}
                <div className="relative z-10 flex flex-col gap-y-5 items-center">
                  <div className="p-4 rounded-full  mb-4 z-10">
                    {feature.icon}
                  </div>
                  <h3 className="text-3xl poppins-light   text-gray-900">
                    {feature.title} <br />
                    <span className="poppins-bold text-3xl ">
                      {feature.highlight}
                    </span>
                  </h3>
                  <p className="text-gray-500 mt-3 text-sm  poppins-light tracking-wider">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <Projects />
        <SDLCSection />
        <Industries />
        <Technology />

        
        <WebServicesPricing />
        <Testimonials />
      </section>
    </>
  );
};

export default HeroSection;
