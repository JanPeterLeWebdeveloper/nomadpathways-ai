import Link from "next/link";
import Footer from "@/components/landing/Footer";

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "Access to basic learning pathways",
        "Community support",
        "Progress tracking",
        "5 downloadable templates",
        "Email support",
      ],
      cta: "Start Free",
      href: "/signup/nomadapprentice",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      description: "For serious learners",
      features: [
        "Everything in Free",
        "Full access to all 4 pathways",
        "Unlimited templates & resources",
        "1-on-1 mentorship sessions",
        "Priority support",
        "Certificate of completion",
        "Job board access",
      ],
      cta: "Go Pro",
      href: "/signup/nomadapprentice",
      highlighted: true,
    },
    {
      name: "Creator",
      price: "$99",
      period: "per month",
      description: "For Nomadpreneurs",
      features: [
        "Everything in Pro",
        "Create & publish content",
        "Creator analytics dashboard",
        "Revenue sharing program",
        "Brand building tools",
        "Priority placement",
        "Dedicated account manager",
      ],
      cta: "Start Creating",
      href: "/signup/nomadpreneur",
      highlighted: false,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For companies",
      features: [
        "Unlimited job postings",
        "Access to talent pool",
        "Company profile page",
        "Advanced candidate filtering",
        "Bulk messaging",
        "Hiring analytics",
        "Dedicated support",
      ],
      cta: "Contact Sales",
      href: "/signup/company",
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Choose the plan that fits your digital nomad journey. Start free, upgrade anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl ${
                  plan.highlighted
                    ? "ring-2 ring-blue-600 shadow-2xl scale-105"
                    : "ring-1 ring-gray-200 dark:ring-gray-700 shadow-lg"
                } bg-white dark:bg-gray-800 p-8`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-block rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={`block w-full rounded-full py-3 px-4 text-center text-sm font-semibold shadow-sm transition-colors ${
                    plan.highlighted
                      ? "bg-blue-600 text-white hover:bg-blue-500"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 dark:bg-gray-800 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Can I switch plans later?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Is there a free trial for paid plans?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes! All paid plans come with a 14-day money-back guarantee. Try it risk-free.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Do you offer discounts for annual payments?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes! Save 20% when you pay annually. Contact us for custom annual plans.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 dark:bg-blue-800 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start Your Free Account Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            No credit card required. Upgrade when you're ready.
          </p>
          <Link
            href="/signup/nomadapprentice"
            className="inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-100 transition-colors"
          >
            Get Started Free
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
