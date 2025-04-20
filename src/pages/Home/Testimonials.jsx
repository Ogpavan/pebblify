import React from "react";
import user1 from "../../assets/avatar/user1.webp";
import user2 from "../../assets/avatar/user2.webp";
import user3 from "../../assets/avatar/user3.jpg";

const testimonials = [
  {
    message:
      "Honestly, I didn’t expect it to turn out this good. Super fast, smooth, and it looks amazing. Everyone on my team loved it!",
    name: "Salani Sharma",
    role: "Startup Founder",
    image: user1,
  },
  {
    message:
      "I just wanted a basic site at first, but what you delivered was way beyond that. The design feels premium and customers keep mentioning it!",
    name: "Priya Mehta",
    role: "Cafe Owner",
    image: user2,
  },
  {
    message:
      "You literally helped me take my small business to the next level. Orders started doubling after the new site went live. So grateful!",
    name: "Ankit Verma",
    role: "eCommerce Seller",
    image: user3,
  },
];

const Testimonials = () => {
  return (
    <section className="max-w-5xl mx-auto py-20 bg-white text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        What our customers say
      </h2>
      <p className="text-gray-500 mb-12">
        Real words from people who trusted our services. Real impact, real
        results.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="text-5xl text-gray-300 mb-4">“</div>
            <p className="text-gray-600 text-sm mb-6">{testimonial.message}</p>
            <div className="flex items-center justify-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
