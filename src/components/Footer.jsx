import React from "react";

const Footer = () => {
  return (
    <div className="relative bg-[#0a163d] text-white mt-20 pt-32">
      {/* Curved Top SVG */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 z-0">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="w-full h-24"
        >
          <path
            d="M0.00,49.98 C150.00,150.00 350.00,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            fill="#0a163d"
          />
        </svg>
      </div>

      {/* CTA Box */}
      <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-4 z-10">
        <div className="bg-gradient-to-r from-blue-700 to-blue-500 p-8 md:p-12 rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Ready to get Started?
          </h2>
          <button className="border-2 border-white text-white font-medium px-6 py-3 rounded hover:bg-white hover:text-blue-700 transition">
            Contact us
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm relative z-10">
        {/* Logo + Contact */}
        <div>
          <div className="font-bold text-2xl mb-4">AMAVA</div>
          <p className="text-gray-400">info@yourdomain.com</p>
          <p className="text-gray-400">(+44) 123 456 789</p>
          <div className="flex space-x-4 mt-4">
            <i className="fab fa-facebook-f text-gray-400 hover:text-white"></i>
            <i className="fab fa-twitter text-gray-400 hover:text-white"></i>
            <i className="fab fa-dribbble text-gray-400 hover:text-white"></i>
            <i className="fab fa-linkedin-in text-gray-400 hover:text-white"></i>
          </div>
        </div>

        {/* About Us */}
        <div>
          <h4 className="font-semibold mb-4 text-white">About Us</h4>
          <ul className="space-y-2 text-gray-400">
            <li>About Us</li>
            <li>Our Team</li>
            <li>Projects</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Support Solutions */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Support Solutions</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Pricing</li>
            <li>Tables</li>
            <li>Accordions</li>
            <li>Services</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Blog Grid</li>
            <li>Blog Default</li>
            <li>Contact Us</li>
            <li>Blog Post</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
