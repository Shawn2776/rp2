"use client";

import { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { HiSun } from "react-icons/hi";
import { useAuth } from "@clerk/nextjs";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const [theme, setTheme] = useState("light");
  const { isSignedIn } = useAuth();

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav
      className={`navbar shadow-md transition-colors duration-300 ${
        theme === "light" ? "bg-[#f0f4f8]" : "bg-[#1a202c]"
      }`}
    >
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl text-primary">
            MySite
          </a>
        </div>

        {/* Theme Toggle */}
        <div className="flex items-center space-x-4">
          <label className="swap swap-rotate relative flex items-center justify-center">
            <input
              type="checkbox"
              onChange={toggleTheme}
              checked={theme === "dark"}
              className="absolute opacity-0 w-0 h-0"
            />
            <FaMoon
              className={`transition-all duration-300 ${
                theme === "dark" ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`}
            />
            <HiSun
              className={`transition-all duration-300 ${
                theme === "light"
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-0"
              }`}
            />
          </label>

          {/* Auth Section */}
          {isSignedIn ? (
            // Show User Avatar if signed in
            <UserButton />
          ) : (
            // Show Sign In and Sign Up buttons if not signed in
            <>
              <SignInButton>
                <button className="btn btn-outline btn-sm">Sign In</button>
              </SignInButton>
              <SignUpButton>
                <button className="btn btn-primary btn-sm">Sign Up</button>
              </SignUpButton>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
