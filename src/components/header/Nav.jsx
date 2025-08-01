import React, { useState } from "react";

const Navbar = ({ regOnClick, logOnClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b-1 border-[#94A3B8]"
      style={{ backgroundColor: "#0F172A" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[7vh]">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 font-bold text-lg"
            style={{ color: "#6366F1" }}
          >
            <div
              className="rounded px-2 py-1"
              style={{ backgroundColor: "#6366F1", color: "#F9FAFB" }}
            >
              RL
            </div>
            <span style={{ color: "#F9FAFB" }}>RegLog</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            <div className="flex">
              <button className="text-[#CBD5E1] hover:text-[#F9FAFB] cursor-pointer hover:underline" onClick={regOnClick}>Register</button>
              <span className="text-[#CBD5E1]">/</span>
              <button className="text-[#CBD5E1] hover:text-[#F9FAFB] cursor-pointer hover:underline" onClick={logOnClick}>Login</button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded focus:outline-none"
            style={{ color: "#F9FAFB" }}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden px-4 pb-4 space-y-2"
          style={{ backgroundColor: "#0F172A" }}
        >
          <div className="text-center flex justify-center">
            <button className="text-[#CBD5E1] hover:text-[#F9FAFB] cursor-pointer hover:underline" onClick={regOnClick}>Register</button>
            <span className="text-[#CBD5E1]">/</span>
            <button className="text-[#CBD5E1] hover:text-[#F9FAFB] cursor-pointer hover:underline" onClick={logOnClick}>Login</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
