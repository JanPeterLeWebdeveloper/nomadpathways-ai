export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Pick Your Pathway",
      description: "Choose your role: NomadApprentice, Nomadpreneur, or Company. Each pathway is tailored to your goals and experience level.",
    },
    {
      number: "02",
      title: "Learn & Track Progress",
      description: "Follow curated learning paths, complete milestones, and track your journey to becoming location-independent.",
    },
    {
      number: "03",
      title: "Apply to Remote Jobs or Build Income Streams",
      description: "Connect with vetted remote opportunities or launch your own digital business with our support.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-white dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Three simple steps to start your digital nomad journey
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
                    {step.number}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-base text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
