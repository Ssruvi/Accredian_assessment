"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      {/* Top Blue Strip */}
      <div className="bg-blue-600 text-white text-center text-sm py-2">
        Empower your workforce with industry-leading learning programs
      </div>

      {/* Main Navbar */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-bold text-blue-600"
        >
          Accredian
        </Link>

        {/* Menu */}
       <div className="hidden lg:flex gap-8 text-gray-700 font-medium">

          <a href="#home" className="hover:text-blue-600 transition">
            Home
          </a>

          <a href="#programs" className="hover:text-blue-600 transition">
            Programs
          </a>

          <a href="#enterprise" className="hover:text-blue-600 transition">
            Enterprise
          </a>

          <a href="#success-stories" className="hover:text-blue-600 transition">
            Success Stories
          </a>

          <a href="#contact" className="hover:text-blue-600 transition">
            About
          </a>

        </div>

        {/* Button */}
        <button
          onClick={() => window.location.href="#contact"}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 hover:scale-105 transition duration-300"
        >
          Contact Us
        </button>
      </nav>
    </header>
  );
}