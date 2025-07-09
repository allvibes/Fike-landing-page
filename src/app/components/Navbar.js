"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "#about" },
    { label: "Advantages", href: "#advantages" },
    { label: "Product", href: "#product" },
  ];

  const linkStyle =
    "transition duration-200 hover:text-red-500 hover:scale-105";

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 transition hover:opacity-80 hover:scale-105"
        >
          <Image src="/logo.svg" alt="Logo" width={40} height={40} />
          <span className="font-semibold text-lg text-gray-800 hidden sm:inline">
            Fike
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link href={href} className={linkStyle}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <div className="hidden md:flex">
          <Link
            href="#contact"
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition text-sm"
          >
            Contact us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col p-4 gap-4 text-sm font-medium text-gray-700">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className={linkStyle}>
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                className="block w-full text-center bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
