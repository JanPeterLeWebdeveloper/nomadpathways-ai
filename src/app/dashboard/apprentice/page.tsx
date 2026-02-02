import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  if (session.user.role !== "nomadapprentice") {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome back, {session.user.name}!
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Continue your journey to digital freedom
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
            <div className="text-3xl mb-2">🎯</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">45%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Overall Progress</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
            <div className="text-3xl mb-2">📚</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">3/4</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Pathways Started</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
            <div className="text-3xl mb-2">✅</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">24</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Tasks Completed</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
            <div className="text-3xl mb-2">🏆</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">12</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Achievements</div>
          </div>
        </div>

        {/* Pathways */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Your Pathways</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Income Streams</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Build multiple revenue sources</p>
                </div>
                <span className="text-blue-600 dark:text-blue-400 font-semibold">65%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: "65%" }}></div>
              </div>
            </div>

            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Remote Jobs</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Land your dream remote position</p>
                </div>
                <span className="text-blue-600 dark:text-blue-400 font-semibold">40%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: "40%" }}></div>
              </div>
            </div>

            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Business Builder</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Start and scale your business</p>
                </div>
                <span className="text-blue-600 dark:text-blue-400 font-semibold">20%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: "20%" }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Next Steps</h2>
          <div className="space-y-3">
            <div className="flex items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="text-2xl mr-3">📝</div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white">Complete Portfolio Setup</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Add your skills and experience</p>
              </div>
              <Link href="#" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                Start →
              </Link>
            </div>

            <div className="flex items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="text-2xl mr-3">🎓</div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white">Watch: Freelancing Basics</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">15 min video lesson</p>
              </div>
              <Link href="#" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                Watch →
              </Link>
            </div>

            <div className="flex items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="text-2xl mr-3">💼</div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white">Apply to 3 Remote Jobs</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Practice your application skills</p>
              </div>
              <Link href="#" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                View Jobs →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
