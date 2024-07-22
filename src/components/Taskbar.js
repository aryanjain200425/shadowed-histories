import React from "react";
import { Link } from "react-router-dom";

export const Taskbar = ({ atHome }) => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 sticky w-full z-10 top-0 shadow-lg ">
      <div className="container mx-auto flex justify-between items-center">
        <button
          onClick={() => {
            if (atHome) {
              scrollToSection("home");
            } else {
              window.location.href = "/shadowed-histories/#blog-section";
            }
          }}
          className="text-2xl font-bold"
        >
          Shadowed Histories
        </button>
        <div className="space-x-6 hidden lg:block md:block ">
          <button
            onClick={() => {
              if (atHome) {
                scrollToSection("home");
              } else {
                window.location.href = "/shadowed-histories/#blog-section";
              }
            }}
            className="hover:text-yellow-500"
          >
            Home
          </button>
          <button
            onClick={() => {
              if (atHome) {
                scrollToSection("blog-section");
              } else {
                window.location.href = "/shadowed-histories/#blog-section";
              }
            }}
            className="hover:text-yellow-500"
          >
            Posts
          </button>
          <Link
            to={`/shadowed-histories/About`}
            className="hover:text-yellow-500"
          >
            About
          </Link>
          <Link
            to={`/shadowed-histories/Contact`}
            className="hover:text-yellow-500"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};
