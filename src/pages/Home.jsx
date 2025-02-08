import React, { useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Users,
  Briefcase,
  BookOpen,
  Star,
} from "lucide-react";
import logo from "../assets/ConnectULogo.png";

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="hover:text-gray-600 transition-colors duration-200 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-black after:left-0 after:bottom-[-4px] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
  >
    {children}
  </a>
);

const StatCard = ({ icon: Icon, count, label }) => (
  <div className="text-center">
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <Icon className="w-8 h-8 mx-auto mb-4 text-gray-700" />
      <h3 className="text-2xl font-bold">{count}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  </div>
);
const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 z-40" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="mt-12 flex flex-col space-y-6">
            {["Home", "About", "Job Board", "Alumni Stories", "Contact Us"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[16px] hover:text-gray-600 transition-colors duration-200 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-black after:left-0 after:bottom-[-4px] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                  onClick={onClose}
                >
                  {item}
                </a>
              )
            )}

            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200 mt-4">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const stats = [
    { icon: Users, count: "5000+", label: "Active Alumni" },
    { icon: Briefcase, count: "1000+", label: "Job Opportunities" },
    { icon: BookOpen, count: "200+", label: "Mentorship Programs" },
    { icon: Star, count: "50+", label: "Success Stories" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white sticky top-0 shadow-sm z-50">
        <nav className="max-w-8xl mx-auto flex items-center justify-between p-4">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">
              <img src={logo} className="w-48" alt="ConnectU Logo" />
            </h1>
          </div>

          <div className="hidden md:flex space-x-8">
            {["Home", "About", "Job Board", "Alumni Stories", "Contact Us"].map(
              (item) => (
                <NavLink key={item} href="#">
                  {item}
                </NavLink>
              )
            )}
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200">
              Login
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-full"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Hero Section */}
      <div className="home-bg rounded-3xl mx-4 my-4">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="text-center">
            <span className="inline-block bg-white rounded-full px-6 py-2 mb-6 text-gray-700 shadow-sm">
              Experience Meets Potential
            </span>

            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Connecting Past and Present
            </h2>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Together We Build The Path To Success
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-black text-white px-8 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors duration-200">
                Join Now <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-colors duration-200">
                Explore
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
