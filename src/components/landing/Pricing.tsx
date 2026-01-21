export default function Pricing() {
  const tiers = [
    {
      name: "Nomad Starter",
      price: "€29",
      period: "/month",
      description: "Perfect for beginners exploring remote work possibilities",
      features: [
        "Access to learning paths",
        "Basic progress tracking",
        "Community forum access",
        "Job board browsing",
        "Resource library",
      ],
    },
    {
      name: "Nomad Guided",
      price: "€99",
      period: "/month",
      description: "For serious learners ready to accelerate their journey",
      features: [
        "Everything in Starter",
        "1-on-1 mentor sessions (2/month)",
        "Priority job applications",
        "Advanced analytics",
        "Live workshops",
        "Certificate programs",
      ],
      featured: true,
    },
    {
      name: "Nomad Unlimited",
      price: "€199",
      period: "/month",
      description: "Premium support for entrepreneurs and companies",
      features: [
        "Everything in Guided",
        "Unlimited mentor access",
        "Business tools & templates",
        "Talent matching (companies)",
        "White-glove support",
        "Custom integrations",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Choose the plan that fits your journey. All plans include 12-month minimum term.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col justify-between rounded-3xl p-8 shadow-lg ring-1 ${
                tier.featured
                  ? "bg-blue-600 ring-blue-600 text-white"
                  : "bg-white dark:bg-gray-800 ring-gray-200 dark:ring-gray-700"
              }`}
            >
              <div>
                <h3
                  className={`text-2xl font-bold ${
                    tier.featured ? "text-white" : "text-gray-900 dark:text-white"
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`mt-4 flex items-baseline gap-x-2 ${
                    tier.featured ? "text-white" : "text-gray-900 dark:text-white"
                  }`}
                >
                  <span className="text-5xl font-bold tracking-tight">{tier.price}</span>
                  <span className="text-lg font-semibold">{tier.period}</span>
                </p>
                <p
                  className={`mt-6 text-base leading-7 ${
                    tier.featured ? "text-blue-100" : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  {tier.description}
                </p>
                <ul className="mt-8 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg
                        className={`h-6 w-6 flex-shrink-0 ${
                          tier.featured ? "text-white" : "text-blue-600"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span
                        className={`ml-3 text-sm ${
                          tier.featured ? "text-blue-100" : "text-gray-600 dark:text-gray-300"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <p
                  className={`text-xs italic ${
                    tier.featured ? "text-blue-100" : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  12-month minimum term applies
                </p>
                <button
                  className={`mt-4 w-full rounded-full px-8 py-3 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors ${
                    tier.featured
                      ? "bg-white text-blue-600 hover:bg-blue-50"
                      : "bg-blue-600 text-white hover:bg-blue-500"
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
