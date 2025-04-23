import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import {
  MdOutlineAssignment,
  MdOutlineTimeline,
  MdOutlineDesignServices,
  MdOutlineCode,
  MdOutlineBugReport,
  MdOutlineCloudUpload,
  MdOutlineSettings,
} from "react-icons/md";

const SDLCSection = () => {
  const steps = [
    {
      title: "1. Requirement Gathering",
      description:
        "We start by understanding your business goals, audience needs, and technical constraints. Through consultations and discovery sessions, we define a clear scope for your project.",
      icon: <MdOutlineAssignment size={28} className="text-white" />,
    },
    {
      title: "2. Planning",
      description:
        "We structure a roadmap for the entire project. Timelines, milestones, resources, and tools are selected to ensure smooth execution with minimum risk.",
      icon: <MdOutlineTimeline size={28} className="text-white" />,
    },
    {
      title: "3. Design",
      description:
        "Wireframes, user flows, and high-fidelity designs are created to visualize the user experience. We ensure the UI/UX aligns with your brand identity and user needs.",
      icon: <MdOutlineDesignServices size={28} className="text-white" />,
    },
    {
      title: "4. Development",
      description:
        "Using agile methodology, we build the solution in sprints — front-end and back-end development are done in parallel with frequent reviews and testing.",
      icon: <MdOutlineCode size={28} className="text-white" />,
    },
    {
      title: "5. Testing",
      description:
        "Each feature is thoroughly tested for functionality, usability, security, and performance. We fix bugs quickly and refine the experience before going live.",
      icon: <MdOutlineBugReport size={28} className="text-white" />,
    },
    {
      title: "6. Deployment",
      description:
        "Your website or application is deployed to a live environment with zero downtime strategies. We ensure everything works perfectly on all devices and browsers.",
      icon: <MdOutlineCloudUpload size={28} className="text-white" />,
    },
    {
      title: "7. Maintenance & Scaling",
      description:
        "After launch, we continue supporting your product. From performance monitoring to adding new features, we help your digital solution grow and evolve.",
      icon: <MdOutlineSettings size={28} className="text-white" />,
    },
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section className="py-24  ">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl poppins-bold text-gray-900 text-center mb-6">
          How We Work – Our SDLC Process
        </h2>
        <p className="text-gray-600 poppins-light text-center mb-12 max-w-3xl mx-auto">
          Our Software Development Life Cycle ensures quality, consistency, and
          predictable outcomes across every project. Here’s our approach:
        </p>

        <div className="relative" ref={containerRef}>
          {/* Animated vertical line */}
          <motion.div
            className="absolute left-1/2 top-0 w-1 bg-blue-600 origin-top -translate-x-1/2 z-0"
            style={{ height: "100%", scaleY: scrollYProgress }}
          />

          <div className="relative z-10 space-y-20">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  className="relative flex flex-col md:flex-row items-center bg-white md:bg-transparent "
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Left side content */}
                  {isLeft ? (
                    <>
                      <div className="hidden md:flex w-1/2 justify-end pr-8 text-right">
                        <div className="">
                          <h3 className="text-2xl text-gray-800 poppins-semibold mb-2 ">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 poppins-light leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                      <div
                        className="flex-shrink-0 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10"
                        style={{ position: "relative", left: "-1px" }}
                      >
                        {step.icon}
                      </div>
                      <div className="md:hidden w-full text-center mt-4">
                        <h3 className="text-2xl text-gray-800 poppins-semibold mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 poppins-light leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      <div className="hidden md:flex w-1/2" />
                    </>
                  ) : (
                    <>
                      <div className="hidden md:flex w-1/2" />
                      <div
                        className="flex-shrink-0 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10"
                        style={{ position: "relative", left: "1px" }}
                      >
                        {step.icon}
                      </div>
                      <div className="hidden md:flex w-1/2 justify-start pl-8 text-left">
                        <div>
                          <h3 className="text-2xl text-gray-800 poppins-semibold mb-2">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 poppins-light leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                      <div className="md:hidden w-full text-center mt-4">
                        <h3 className="text-2xl text-gray-800 poppins-semibold mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 poppins-light leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SDLCSection;
