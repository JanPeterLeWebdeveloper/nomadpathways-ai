"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  session?: {
    user: {
      name?: string | null;
      email?: string | null;
      role?: string;
    };
  } | null;
}

export default function Header({ session }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [signupDropdownOpen, setSignupDropdownOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Features", href: "/features" },
    { name: "How it works", href: "/how-it-works" },
    { name: "Roles", href: "/roles" },
    { name: "Pricing", href: "/pricing" },
  ];

  const signupLinks = [
    { name: "NomadApprentice", href: "/signup/nomadapprentice", description: "Learn & Grow" },
    { name: "Nomadpreneur", href: "/signup/nomadpreneur", description: "Teach & Earn" },
    { name: "Company", href: "/signup/company", description: "Hire Talent" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">NomadPathways</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Auth Buttons / User Menu */}
          <div className="flex items-center space-x-4">
            {session ? (
              <div className="hidden md:flex items-center space-x-4">
                <Link
                  href={
                    session.user.role === "nomadapprentice"
                      ? "/dashboard"
                      : session.user.role === "nomadpreneur"
                      ? "/dashboard/nomadpreneur"
                      : session.user.role === "company"
                      ? "/dashboard/company"
                      : "/admin"
                  }
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Dashboard
                </Link>
                <span className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium">
                  {session.user.role}
                </span>
                <form action="/api/auth/signout" method="POST">
                  <button
                    type="submit"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400"
                  >
                    Logout
                  </button>
                </form>
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-4">
                <Link
                  href="/login"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Log in
                </Link>
                <div className="relative">
                  <button
                    onClick={() => setSignupDropdownOpen(!signupDropdownOpen)}
                    className="inline-flex items-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
                  >
                    Sign up
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {signupDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-64 rounded-lg bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="p-2">
                        {signupLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="block rounded-md px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                            onClick={() => setSignupDropdownOpen(false)}
                          >
                            <div className="font-semibold text-gray-900 dark:text-white">
                              {link.name}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              {link.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden rounded-md p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {!mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-2 text-base font-medium rounded-md ${
                    isActive(item.href)
                      ? "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {session ? (
                <>
                  <Link
                    href={
                      session.user.role === "nomadapprentice"
                        ? "/dashboard"
                        : session.user.role === "nomadpreneur"
                        ? "/dashboard/nomadpreneur"
                        : session.user.role === "company"
                        ? "/dashboard/company"
                        : "/admin"
                    }
                    className="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <form action="/api/auth/signout" method="POST" className="px-4 py-2">
                    <button
                      type="submit"
                      className="w-full text-left text-base font-medium text-red-600 dark:text-red-400"
                    >
                      Logout
                    </button>
                  </form>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Log in
                  </Link>
                  <div className="px-4 py-2 space-y-2">
                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">Sign up as:</p>
                    {signupLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 rounded-md bg-blue-50 dark:bg-blue-900 hover:bg-blue-100 dark:hover:bg-blue-800"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="font-semibold text-blue-600 dark:text-blue-400">{link.name}</div>
                        <div className="text-sm text-blue-500 dark:text-blue-300">{link.description}</div>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
