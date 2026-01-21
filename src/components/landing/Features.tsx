export default function Features() {
  const features = [
    {
      name: "Curated Learning Paths",
      description: "Follow structured roadmaps tailored to your chosen career path and skill level.",
    },
    {
      name: "Progress Tracking",
      description: "Monitor your skills development and celebrate milestones along your journey.",
    },
    {
      name: "Remote Job Board",
      description: "Access vetted remote opportunities from companies hiring digital nomads.",
    },
    {
      name: "Community Network",
      description: "Connect with fellow nomads, share experiences, and learn from each other.",
    },
    {
      name: "Expert Mentorship",
      description: "Get guidance from experienced digital nomads and industry professionals.",
    },
    {
      name: "Resource Library",
      description: "Access templates, guides, and tools to accelerate your nomad journey.",
    },
    {
      name: "Income Stream Builder",
      description: "Tools and frameworks to help entrepreneurs build sustainable businesses.",
    },
    {
      name: "Global Talent Matching",
      description: "Smart matching system connecting companies with qualified remote professionals.",
    },
  ];

  return (
    <section id="features" className="py-24 sm:py-32 bg-white dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Everything You Need to Succeed
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Comprehensive tools and resources for your digital nomad journey
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="relative flex flex-col gap-4 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                  <svg
                    className="h-6 w-6 text-white"
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
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {feature.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
