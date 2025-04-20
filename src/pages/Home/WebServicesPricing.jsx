export default function WebServicesPricing() {
  const plans = [
    {
      name: "Starter",
      price: "₹2,999",
      features: [
        "1-Page Static Website",
        "Responsive Design",
        "Basic SEO Setup",
        "1 Month Support",
      ],
      buttonLabel: "Get Started",
      highlight: false,
    },
    {
      name: "Pro",
      price: "₹6,499",
      features: [
        "Multi-Page Dynamic Website",
        "CMS Integration",
        "Advanced SEO",
        "3 Months Support",
      ],
      buttonLabel: "Choose Pro",
      highlight: true,
    },
    {
      name: "Custom",
      price: "Let's Talk",
      features: [
        "E-commerce / Portals",
        "Custom APIs & Admin Panels",
        "End-to-End Deployment",
        "Priority Support",
      ],
      buttonLabel: "Contact Us",
      highlight: false,
    },
  ];

  return (
    <section className="max-w-5xl mx-auto py-20 bg-white text-center">
      <h2 className="text-4xl font-bold mb-3">Web Services Pricing</h2>
      <p className="text-gray-500 mb-12">
        Affordable plans tailored for your business needs.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`
                group relative rounded-2xl shadow-xl p-10 min-h-[450px] transition-all duration-300
                ${
                  plan.highlight
                    ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white scale-[1.02]"
                    : "bg-white text-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:text-white"
                }
              `}
          >
            <h3 className="text-2xl font-semibold mb-3">{plan.name}</h3>
            <div className="text-4xl font-bold mb-5">
              {plan.price}{" "}
              {plan.name !== "Custom" && (
                <span className="text-base font-medium">/ Month</span>
              )}
            </div>
            <ul className="mb-6 space-y-3 text-sm">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button
              className={`mt-auto px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                plan.highlight
                  ? "bg-white text-blue-700 hover:bg-blue-100"
                  : "bg-white text-blue-700 group-hover:bg-white group-hover:text-blue-700"
              }`}
            >
              {plan.buttonLabel}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
