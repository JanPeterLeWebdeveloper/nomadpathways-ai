import Link from "next/link";
import Footer from "@/components/landing/Footer";

export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      title: "Choose Your Role",
      description:
        "Sign up as a NomadApprentice to learn, a Nomadpreneur to teach, or a Company to hire. Each role has a tailored experience.",
      icon: "🎯",
    },
    {
      number: "02",
      title: "Select Your Pathway",
      description:
        "Pick from Income Streams, Remote Jobs, Business Builder, or Investments. Each pathway guides you step-by-step toward your goals.",
      icon: "🗺️",
    },
    {
      number: "03",
      title: "Learn & Complete Tasks",
      description:
        "Work through curated content, practical assignments, and real-world projects. Track your progress with checklists and milestones.",
      icon: "📝",
    },
    {
      number: "04",
      title: "Apply Your Skills",
      description:
        "Use templates, tools, and resources to implement what you've learned. Build your portfolio and gain practical experience.",
      icon: "🛠️",
    },
    {
      number: "05",
      title: "Achieve Digital Freedom",
      description:
        "Land remote jobs, build your business, create income streams, or hire talent. Join the community of location-independent professionals.",
      icon: "🌍",
    },
  ];

  const pathways = [
    {
      title: "Income Streams",
      description: "Learn to build multiple sources of income - freelancing, products, services, and passive revenue.",
      color: "blue",
    },
    {
      title: "Remote Jobs",
      description: "Master the skills companies want and learn how to find, apply for, and succeed in remote positions.",
      color: "green",
    },
    {
      title: "Business Builder",
      description: "Start and scale your own location-independent business with proven frameworks and strategies.",
      color: "purple",
    },
    {
      title: "Investments",
      description: "Build wealth for long-term freedom through smart investing strategies tailored for digital nomads.",
      color: "orange",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              How NomadPathways Works
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Your structured path to digital freedom in 5 simple steps.
            </p>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 items-center`}
              >
                <div className="flex-1">
                  <div className="text-6xl mb-4">{step.icon}</div>
                  <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="w-full max-w-md h-64 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 shadow-xl flex items-center justify-center">
                    <span className="text-8xl">{step.icon}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pathways Section */}
      <div className="bg-gray-50 dark:bg-gray-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Choose Your Pathway
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Four specialized learning paths to match your goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pathways.map((pathway) => (
              <div
                key={pathway.title}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-600"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {pathway.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {pathway.description}
                </p>
                <Link
                  href="/signup/nomadapprentice"
                  className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                >
                  Start this pathway →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 dark:bg-blue-800 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start learning today and take your first step toward digital freedom.
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
