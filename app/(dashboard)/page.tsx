'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, BarChart3, Zap } from 'lucide-react';

export default function DashboardHome() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-50 mb-2">
            Welcome, {session.user?.name || session.user?.email}!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Your unified business dashboard is ready
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Get Started Card */}
          <div className="rounded-lg bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 border-2 border-teal-200 dark:border-teal-700 p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-teal-600 text-white">
                <Zap size={24} />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2">
                  Get Started
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Connect your Stripe account to view real revenue data, customer metrics, and more—all in one place.
                </p>
                <Link
                  href="/onboarding/connect-stripe"
                  className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-medium transition"
                >
                  Connect Stripe
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>

          {/* Pre-built Dashboards Card */}
          <div className="rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-2 border-blue-200 dark:border-blue-700 p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-blue-600 text-white">
                <BarChart3 size={24} />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2">
                  View Dashboards
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Explore pre-built dashboard templates designed for CEOs, CMOs, and Sales leaders.
                </p>
                <Link
                  href="/dashboard/dashboards"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition"
                >
                  View Dashboards
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-8 bg-gray-50 dark:bg-gray-900">
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-4">Quick Tips</h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-teal-600"></div>
              Connect your Stripe account to start tracking revenue metrics
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-teal-600"></div>
              Choose from pre-built templates or create custom dashboards
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-teal-600"></div>
              Get email alerts when key metrics change significantly
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-teal-600"></div>
              Data syncs automatically every 4 hours (more frequently coming soon)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
