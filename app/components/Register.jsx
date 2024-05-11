'use client'
import Link from "next/link";
import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [rePasswordError, setRePasswordError] = useState("");
  const [generalError, setGeneralError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    if (!username) {
      setUsernameError("Username is required.");
      return;
    } else {
      setUsernameError("");
    }

    if (!email) {
      setEmailError("Email is required.");
      return;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required.");
      return;
    } else {
      setPasswordError("");
    }

    if (!rePassword) {
      setRePasswordError("Repeat Password is required.");
      return;
    } else {
      setRePasswordError("");
    }

    if (password !== rePassword) {
      setRePasswordError("Password does not Match.");
      return;
    } else {
      setRePasswordError("");
    }

    try {
      const respExistUser = await fetch("api/userExists", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const { user } = await respExistUser.json();

      if (user) {
        setEmailError("User already exists.");
        return;
      }

      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });
      if (res.ok) {
        const form = e.target;
        form.reset();
        // router.push("login")
        setSuccessMessage("Your account was registered successfully!");
      } else {
        console.log("User registration failed.");
        throw new error("Error", error);

      }
    } catch (error) {
      console.log("Error during registration", error);
      
      throw new error("Error", error);

      
    }
  };
  return (
    <form onSubmit={handleSubmit} className="border bg-white shadow-xl p-4 rounded-md mt-3">
      
      {successMessage && (
        <div className="flex w-full max-w-sm overflow-hidden bg-gray-50 rounded-lg shadow-md">
          <div className="flex items-center justify-center w-12 bg-emerald-500">
            <svg
              className="w-6 h-6 text-white fill-current"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
            </svg>
          </div>

          <div className="px-4 py-2 -mx-3">
            <div className="mx-3">
              <span className="font-semibold text-emerald-500">Success</span>
              <p className="text-sm text-gray-900">{successMessage}</p>
            </div>
          </div>
        </div>
      )}
      <div className="relative flex items-center mt-4 ">
        <span className="absolute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </span>

        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Username"
          required
        />
      </div>
      {usernameError && (
                <span className="text-xs text-red-500">{usernameError}</span>
              )}

      <div className="relative flex items-center mt-6">
        <span className="absolute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </span>
        

        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Email address"
          required
        />
      </div>
      {emailError && (
                <span className="text-xs text-red-500">{emailError}</span>
              )}

      <div className="relative flex items-center mt-4">
        <span className="absolute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </span>

        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="block w-full px-10 py-3 border rounded-lg focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Password"
          required
        />
      </div>
      {passwordError && (
                <span className="text-xs text-red-500">{passwordError}</span>
              )}

      <div className="relative flex items-center mt-4">
        <span className="absolute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </span>

        <input
          onChange={(e) => setRePassword(e.target.value)}
          type="password"
          className="block w-full px-10 py-3 border rounded-lg focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Confirm Password"
          required
        />
      </div>
      {rePasswordError && (
                <span className="text-xs text-red-500">{rePasswordError}</span>
              )}

      <div className="mt-6">
        <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
          Sign Up
        </button>

        <div className="mt-6 text-center ">
          <p className="text-sm">
            Already have an account?{" "}
            <Link
              href="login"
              className="cursor-pointer text-blue-500 hover:underline dark:text-blue-400"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default Register;
