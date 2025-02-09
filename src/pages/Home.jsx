import React from "react";
import { ArrowRight, Users, Briefcase, BookOpen, Star } from "lucide-react";

import Navbar from "../components/Navbar"; // Importing Navbar component

// StatCard component for statistics display
const StatCard = ({ icon: Icon, count, label }) => (
  <div className="text-center">
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <Icon className="w-8 h-8 mx-auto mb-4 text-gray-700" />
      <h3 className="text-2xl font-bold">{count}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  </div>
);

const Home = () => {
  // Statistics configuration
  const stats = [
    { icon: Users, count: "5000+", label: "Active Alumni" },
    { icon: Briefcase, count: "1000+", label: "Job Opportunities" },
    { icon: BookOpen, count: "200+", label: "Mentorship Programs" },
    { icon: Star, count: "50+", label: "Success Stories" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="home-bg rounded-3xl mx-4 my-4">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="text-center">
            <span className="inline-block bg-white rounded-full px-6 py-2 mb-6 text-gray-700 shadow-sm">
              Experience Meets Potential
            </span>

            <h2 className="text-4xl md:text-6xl font-bold mb-3 bg-clip-text text-gray-800">
              Connecting Past and Present
            </h2>

            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
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

          {/* Stats Section */}
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
