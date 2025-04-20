import {
  ShoppingBag,
  Stethoscope,
  GraduationCap,
  Building2,
  Plane,
  Hammer,
  Smartphone,
  Globe2,
  Building2Icon,
  GraduationCapIcon,
  HammerIcon,
  SmartphoneIcon,
} from "lucide-react";

const industries = [
  { icon: <ShoppingBag className="h-8 w-8 text-white" />, name: "E-commerce" },
  { icon: <Stethoscope className="h-8 w-8 text-white" />, name: "Healthcare" },
  { icon: <GraduationCap className="h-8 w-8 text-white" />, name: "Education" },
  { icon: <Building2 className="h-8 w-8 text-white" />, name: "Real Estate" },
  { icon: <Plane className="h-8 w-8 text-white" />, name: "Travel & Tourism" },
  { icon: <Hammer className="h-8 w-8 text-white" />, name: "Construction" },
  {
    icon: <Smartphone className="h-8 w-8 text-white" />,
    name: "Tech Startups",
  },
  { icon: <Globe2 className="h-8 w-8 text-white" />, name: "Digital Media" },
  { icon: <Building2Icon className="h-8 w-8 text-white" />, name: "Finance" },
  {
    icon: <GraduationCapIcon className="h-8 w-8 text-white" />,
    name: "EdTech",
  },
  {
    icon: <HammerIcon className="h-8 w-8 text-white" />,
    name: "Manufacturing",
  },
  {
    icon: <SmartphoneIcon className="h-8 w-8 text-white" />,
    name: "Mobile Apps",
  },
];

const Industries = () => {
  return (
    <>
      {/* Top wave divider */}

      <div className="w-full overflow-hidden leading-none">
        <svg
          className="w-full h-32 rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#292dc2"
            fillOpacity="1"
            d="M0,224L34.3,208C68.6,192,137,160,206,160C274.3,160,343,192,411,208C480,224,549,224,617,224C685.7,224,754,224,823,234.7C891.4,245,960,267,1029,256C1097.1,245,1166,203,1234,186.7C1302.9,171,1371,181,1406,186.7L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
      </div>

      <section className="bg-[#292dc2] text-white pb-20 px-6 relative z-10 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 style={{ color: "white" }} className="text-4xl poppins-bold mb-6">
            Industries We Serve
          </h2>
          <p
            style={{ color: "white" }}
            className="text-white/80 mb-14 poppins-light tracking-wider max-w-3xl mx-auto"
          >
            From healthcare to real estate, our tailored digital solutions
            empower brands across a wide range of industries.
          </p>

          <div className="flex flex-wrap justify-center gap-x-20 md:px-20 items-center gap-y-5">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex flex-col items-center group transition-transform duration-300 "
              >
                <div className="bg-white/20 group-hover:scale-110 transition-transform duration-300 p-6 rounded-full shadow-lg mb-4">
                  {industry.icon}
                </div>
                <span className="text-lg font-medium group-hover:text-white/90 transition-colors duration-300">
                  {industry.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full overflow-hidden leading-none">
        <svg
          className="w-full h-32 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#292dc2"
            fillOpacity="1"
            d="M0,224L34.3,208C68.6,192,137,160,206,160C274.3,160,343,192,411,208C480,224,549,224,617,224C685.7,224,754,224,823,234.7C891.4,245,960,267,1029,256C1097.1,245,1166,203,1234,186.7C1302.9,171,1371,181,1406,186.7L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Bottom wave divider (flipped) */}
    </>
  );
};

export default Industries;
