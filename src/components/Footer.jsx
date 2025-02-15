import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation to get the current route
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const location = useLocation();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  const excludedRoutes = ["/signup", "/login", "/contact"];

  if (excludedRoutes.includes(location.pathname)) {
    return null;
  }
  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Company Info */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold mb-4 text-black">ConnectU</h3>
            <p className="text-gray-600 mb-2">
              We bridge alumni experience with student aspirations through
              mentorship and knowledge sharing. Our platform fosters meaningful
              connections, empowering students with insights and guidance to
              build a stronger future.
            </p>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-4 text-black">
              Contact Us
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-gray-600" />
                <a
                  href="mailto:contact@company.com"
                  className="text-gray-600 hover:text-black"
                >
                  contact@company.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-gray-600" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-600 hover:text-black"
                >
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-gray-600" />
                <span className="text-gray-600">
                  123 Business Street, Suite 100
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-black">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-600 hover:text-black">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-600 hover:text-black">
                  Services
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-600 hover:text-black">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-600 hover:text-black">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-4 text-black">
              Newsletter
            </h3>
            <p className="text-gray-600 mb-4">
              Stay updated with our latest news and updates.
            </p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-white text-black border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-200 text-center text-gray-600">
          <p>© {currentYear} Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
