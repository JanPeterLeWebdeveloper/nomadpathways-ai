import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function NomadpreneurDashboard() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  if (session.user.role !== "nomadpreneur") {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Nomadpreneur Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Welcome back, {session.user.name}! Manage your content and earnings.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
            <div className="text-3xl mb-2">👥</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">1,234</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Students</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
            <div className="text-3xl mb-2">📚</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">8</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Published Courses</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
            <div className="text-3xl mb-2">💰</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">$4,567</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">This Month</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">4.8</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Avg Rating</div>
          </div>
        </div>

        {/* Content Management */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Your Content</h2>
            <Link
              href="#"
              className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
            >
              Create New
            </Link>
          </div>
          <div className="space-y-3">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Freelancing Fundamentals
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">456 enrolled • 4.9★</p>
                </div>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                  Published
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
