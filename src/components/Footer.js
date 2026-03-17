// src/components/Footer.js
import { MailIcon, YoutubeIcon, InstagramIcon } from "@heroicons/react/outline";

export default function Footer() {
  return (
    <footer className="dark:bg-gray-900">
      <div className="w-full max-w-screen-xl p-4 mx-auto md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          {/* Logo */}
          <a href="/">
            <div className="text-lg tracking-wider flex items-center space-x-2">
              <img
                src="../logo.png"
                className="h-8 w-auto"
                alt="National Trucks Manufacturers Logo"
              />
              <span className="font-heading md:text-3xl text-white">
                National Trucks Manufacturers Limited
              </span>
            </div>
          </a>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://twitter.com/yourprofile"
              className="text-gray-500 hover:text-gray-700 dark:hover:text-white"
            ></a>
            <a
              href="https://youtube.com/yourprofile"
              className="text-gray-500 hover:text-gray-700 dark:hover:text-white"
            ></a>
            <a
              href="https://instagram.com/yourprofile"
              className="text-gray-500 hover:text-gray-700 dark:hover:text-white"
            ></a>
          </div>
        </div>

        {/* Links Section */}
        <div className="mt-6 sm:flex sm:items-center sm:justify-between">
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="/" className="hover:underline me-4 md:me-6">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline me-4 md:me-6">
                About Us
              </a>
            </li>
            <li>
              <a href="/products" className="hover:underline me-4 md:me-6">
                Products
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Horizontal Divider */}
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        {/* Footer Copyright Section */}
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <a href="https://yourwebsite.com" className="hover:underline">
            National Trucks Manufacturers™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
