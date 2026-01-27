import Link from "next/link";
import Footer from "@/components/landing/Footer";

export default function FeaturesPage() {
  const features = [
    {
      title: "Structured Learning Pathways",
      description: "Step-by-step guided journeys from beginner to advanced, covering Income Streams, Remote Jobs, Business Building, and Investments.",
      icon: "📚",
    },
    {
      title: "Practice-Oriented Tasks",
      description: "Real-world assignments, checklists, and templates to apply what you learn immediately.",
      icon: "✅",
    },
    {
      title: "Curated & Verified Content",
      description: "All learning materials are carefully selected and approved by experts to ensure quality and relevance.",
      icon: "⭐",
    },
    {
      title: "Role-Based System",
      description: "Learn as an Apprentice, teach as a Nomadpreneur, or hire talent as a Company - each role has unique features.",
      icon: "👥",
    },
    {
      title: "Progress Tracking",
      description: "Monitor your journey with detailed progress indicators, achievements, and milestones.",
      icon: "📊",
    },
    {
      title: "Community Support",
      description: "Connect with other digital nomads, share experiences, and get help when you need it.",
      icon: "🤝",
    },
    {
      title: "Resource Library",
      description: "Access templates, tools, guides, and resources to accelerate your digital nomad journey.",
      icon: "📁",
    },
    {
      title: "Job Board Integration",
      description: "Discover remote job opportunities and connect with companies looking for location-independent talent.",
      icon: "💼",
    },
    {
      title: "Income Stream Builder",
      description: "Learn to diversify your income with multiple streams - freelancing, products, services, and passive income.",
      icon: "💰",
    },
    {
      title: "Business Planning Tools",
      description: "Build your remote business with templates, financial calculators, and strategic planning guides.",
      icon: "🚀",
    },
    {
      title: "Investment Education",
      description: "Learn about investing for location independence - from basics to advanced strategies.",
      icon: "📈",
    },
    {
      title: "Mobile-Ready Platform",
      description: "Access your learning journey anywhere with our responsive, mobile-optimized platform.",
      icon: "📱",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Powerful Features for Your Digital Nomad Journey
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Everything you need to transform your career into a location-independent lifestyle.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/signup/nomadapprentice"
                className="rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
              >
                Get Started Free
              </Link>
              <Link
                href="/pricing"
                className="rounded-full border border-gray-300 dark:border-gray-600 px-8 py-3 text-sm font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="relative rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 dark:bg-blue-800 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of digital nomads building location-independent careers.
          </p>
          <Link
            href="/signup/nomadapprentice"
            className="inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-100 transition-colors"
          >
            Sign Up Free
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
