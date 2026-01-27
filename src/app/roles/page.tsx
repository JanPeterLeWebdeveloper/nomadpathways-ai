import Link from "next/link";
import Footer from "@/components/landing/Footer";

export default function RolesPage() {
  const roles = [
    {
      name: "NomadApprentice",
      tagline: "Learn & Grow",
      description:
        "You're starting your digital nomad journey or looking to acquire new skills for location-independent work.",
      icon: "🎓",
      benefits: [
        "Access structured learning pathways",
        "Complete practical assignments and projects",
        "Track your progress with detailed metrics",
        "Get curated, expert-verified content",
        "Join a supportive learning community",
        "Access templates, tools, and resources",
      ],
      idealFor: [
        "Career changers seeking remote work",
        "Students preparing for the digital economy",
        "Professionals wanting location independence",
        "Anyone building new income streams",
      ],
      cta: "Start Learning",
      href: "/signup/nomadapprentice",
      color: "blue",
    },
    {
      name: "Nomadpreneur",
      tagline: "Teach & Earn",
      description:
        "You have expertise to share and want to help others while building your own location-independent income.",
      icon: "👨‍🏫",
      benefits: [
        "Create and publish learning content",
        "Build your personal brand",
        "Earn income from your expertise",
        "Connect with motivated learners",
        "Access creator tools and analytics",
        "Grow your audience globally",
      ],
      idealFor: [
        "Experienced digital nomads",
        "Subject matter experts",
        "Freelancers and consultants",
        "Coaches and mentors",
      ],
      cta: "Start Teaching",
      href: "/signup/nomadpreneur",
      color: "purple",
    },
    {
      name: "Company",
      tagline: "Hire Talent",
      description:
        "You're a business looking to connect with skilled, location-independent professionals.",
      icon: "🏢",
      benefits: [
        "Access a pool of skilled remote workers",
        "Post job opportunities to targeted audience",
        "Find pre-vetted, trained candidates",
        "Build your remote team efficiently",
        "Reduce hiring time and costs",
        "Connect with motivated professionals",
      ],
      idealFor: [
        "Remote-first companies",
        "Startups building distributed teams",
        "Agencies seeking freelancers",
        "Businesses scaling remotely",
      ],
      cta: "Find Talent",
      href: "/signup/company",
      color: "green",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Find Your Role
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Choose the role that matches your goals. Learn, teach, or hire - each has unique features designed for success.
            </p>
          </div>
        </div>
      </div>

      {/* Roles Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-24">
            {roles.map((role, index) => (
              <div
                key={role.name}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center`}
              >
                <div className="flex-1 space-y-6">
                  <div className="text-6xl mb-4">{role.icon}</div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                      {role.name}
                    </h2>
                    <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mt-2">
                      {role.tagline}
                    </p>
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    {role.description}
                  </p>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      What you get:
                    </h3>
                    <ul className="space-y-2">
                      {role.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start text-gray-600 dark:text-gray-300"
                        >
                          <svg
                            className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0"
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
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Ideal for:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {role.idealFor.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link
                      href={role.href}
                      className="inline-block rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
                    >
                      {role.cta}
                    </Link>
                  </div>
                </div>

                <div className="flex-1 flex justify-center">
                  <div className="w-full max-w-md h-96 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-200 dark:from-blue-900 dark:to-purple-800 shadow-2xl flex items-center justify-center">
                    <span className="text-9xl">{role.icon}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="bg-gray-50 dark:bg-gray-800 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Quick Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">
                    NomadApprentice
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">
                    Nomadpreneur
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">
                    Company
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                    Learning Pathways
                  </td>
                  <td className="px-6 py-4 text-center">✅</td>
                  <td className="px-6 py-4 text-center">✅</td>
                  <td className="px-6 py-4 text-center">-</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                    Create Content
                  </td>
                  <td className="px-6 py-4 text-center">-</td>
                  <td className="px-6 py-4 text-center">✅</td>
                  <td className="px-6 py-4 text-center">-</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                    Post Jobs
                  </td>
                  <td className="px-6 py-4 text-center">-</td>
                  <td className="px-6 py-4 text-center">-</td>
                  <td className="px-6 py-4 text-center">✅</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                    Community Access
                  </td>
                  <td className="px-6 py-4 text-center">✅</td>
                  <td className="px-6 py-4 text-center">✅</td>
                  <td className="px-6 py-4 text-center">✅</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 dark:bg-blue-800 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Choose Your Role and Get Started
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands already building their digital nomad lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup/nomadapprentice"
              className="inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-100 transition-colors"
            >
              Sign up as NomadApprentice
            </Link>
            <Link
              href="/signup/nomadpreneur"
              className="inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-100 transition-colors"
            >
              Sign up as Nomadpreneur
            </Link>
            <Link
              href="/signup/company"
              className="inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-100 transition-colors"
            >
              Sign up as Company
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
