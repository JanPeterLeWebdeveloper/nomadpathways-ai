export default function Roles() {
  const roles = [
    {
      name: "NomadApprentice",
      tagline: "Start Your Journey",
      description: "Perfect for beginners exploring remote work. Learn foundational skills and discover your path to location independence.",
      features: ["Curated learning paths", "Skill tracking", "Community access", "Job board access"],
    },
    {
      name: "Nomadpreneur",
      tagline: "Build Your Business",
      description: "For entrepreneurs building digital businesses. Get tools, mentorship, and resources to create sustainable income streams.",
      features: ["Business templates", "Mentor matching", "Marketing tools", "Revenue tracking"],
    },
    {
      name: "Company",
      tagline: "Hire Global Talent",
      description: "Connect with skilled remote professionals. Post opportunities and find motivated digital nomads for your team.",
      features: ["Job posting", "Talent matching", "Hiring tools", "Team management"],
    },
  ];

  return (
    <section id="roles" className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Choose Your Role
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Every journey is unique. Pick the role that matches your goals.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
          {roles.map((role) => (
            <div
              key={role.name}
              className="flex flex-col rounded-3xl bg-white dark:bg-gray-800 p-8 shadow-lg ring-1 ring-gray-200 dark:ring-gray-700 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {role.name}
              </h3>
              <p className="mt-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
                {role.tagline}
              </p>
              <p className="mt-4 text-base text-gray-600 dark:text-gray-300">
                {role.description}
              </p>
              <ul className="mt-8 space-y-3">
                {role.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg
                      className="h-6 w-6 flex-shrink-0 text-blue-600"
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
                    <span className="ml-3 text-sm text-gray-600 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
