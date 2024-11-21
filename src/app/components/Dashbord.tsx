"use client";

import { signIn, useSession } from "next-auth/react";
import React, { useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Dashboard = () => {
  const { data: session } = useSession();
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null);

  const handleSignIn = async (provider: string) => {
    setLoadingProvider(provider);
    await signIn(provider);
    setLoadingProvider(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        {session ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-600">Welcome back!</h2>
            <p className="mt-4 text-gray-700">You are logged in.</p>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-xl font-semibold text-red-500">
              You are not logged in
            </h2>
            <p className="mt-2 text-gray-600">Please sign in to continue.</p>
            <div className="mt-6 space-y-4">
              <button
                onClick={() => handleSignIn("google")}
                className="flex items-center justify-center w-full px-4 py-2 text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600 disabled:opacity-50"
                disabled={loadingProvider === "google"}
              >
                {loadingProvider === "google" ? (
                  <svg
                    className="w-5 h-5 animate-spin text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C3.58 0 0 5.58 0 12h4zm2 5.291V20c2.348.387 4.57-1.206 4.95-3.55h-4.95z"
                    ></path>
                  </svg>
                ) : (
                  <FaGoogle className="mr-2" />
                )}
                Sign in with Google
              </button>

              <button
                onClick={() => handleSignIn("github")}
                className="flex items-center justify-center w-full px-4 py-2 text-white bg-gray-800 rounded-lg shadow hover:bg-gray-900 disabled:opacity-50"
                disabled={loadingProvider === "github"}
              >
                {loadingProvider === "github" ? (
                  <svg
                    className="w-5 h-5 animate-spin text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C3.58 0 0 5.58 0 12h4zm2 5.291V20c2.348.387 4.57-1.206 4.95-3.55h-4.95z"
                    ></path>
                  </svg>
                ) : (
                  <FaGithub className="mr-2" />
                )}
                Sign in with GitHub
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
