import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="w-full bg-gray-100 min-h-screen">
      <header className="flex h-20 w-full items-center px-4 md:px-6 bg-blue-500 text-white">
        <div className="w-[150px]">
          <a href="#">
            <CarIcon className="h-6 w-6 text-white" />
            <span className="sr-only">Car Shop</span>
          </a>
        </div>
        <div className="flex w-full justify-center">
          <nav className="hidden lg:flex">
            <ul className="flex space-x-4">
              <li>
                <Link to="/">Home</Link>
              </li>
              
            </ul>
          </nav>
        </div>
        <div className="ml-auto w-[150px]">
          {/* Add your admin-specific login button or component here */}
          <button className="text-blue-500 bg-white px-4 py-2 rounded border border-blue-500">
            Login
          </button>
        </div>
      </header>

      <main className="container mx-auto my-8 p-8 bg-white rounded shadow-lg max-w-md">
        <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </main>
    </div>
  );
};

function CarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

export default Login;
