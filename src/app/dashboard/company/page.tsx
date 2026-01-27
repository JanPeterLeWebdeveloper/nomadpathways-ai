import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function CompanyDashboard() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  if (session.user.role !== "company") {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Company Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Welcome back, {session.user.name}! Manage your job postings and candidates.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
            <div className="text-3xl mb-2">💼</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">5</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Active Jobs</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
            <div className="text-3xl mb-2">👥</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">127</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Applicants</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
            <div className="text-3xl mb-2">✅</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">8</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Hired</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
            <div className="text-3xl mb-2">👀</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">1,234</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Job Views</div>
          </div>
        </div>

        {/* Job Postings */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Active Job Postings</h2>
            <Link
              href="#"
              className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
            >
              Post New Job
            </Link>
          </div>
          <div className="space-y-3">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Senior Frontend Developer
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">32 applicants • Posted 5 days ago</p>
                </div>
                <Link href="#" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                  View →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
