import React from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Target,
  MessageCircle,
  ChevronDown,
  GraduationCap,
} from "lucide-react";
import backgroundImage from "../assets/about-bg.jpg";
import backgroundImage1 from "../assets/about.png";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      quote: "Bridging the gap between experience and aspiration",
      alumnus: "Class of 2010",
    },
    {
      name: "Michael Chen",
      role: "Head of Alumni Relations",
      quote: "Creating meaningful connections that last",
      alumnus: "Class of 2012",
    },
    {
      name: "Elena Rodriguez",
      role: "Student Success Lead",
      quote: "Empowering tomorrow's leaders",
      alumnus: "Class of 2015",
    },
  ];

  const features = [
    {
      title: "Mentorship Programs",
      description:
        "Connect with industry professionals who've walked your path",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Career Guidance",
      description: "Get personalized advice from experienced alumni",
      icon: <Target className="w-6 h-6" />,
    },
    {
      title: "Networking Events",
      description: "Virtual and in-person events to build lasting connections",
      icon: <MessageCircle className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}

<div
  className="relative h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
  style={{ backgroundImage: `url(${backgroundImage1})` }}
>
  <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
  <div className="relative z-10 text-center p-8 max-w-4xl mx-auto">
    <div className="flex justify-center mb-6">
      <GraduationCap className="w-16 h-16 text-black" />
    </div>
    <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent transition-transform duration-500 hover:scale-105">
      Welcome to ConnectU
    </h1>
    <p className="text-xl text-gray-600 mb-8">
      Bridging the gap between alumni experience and student aspirations. Join our community of mentors and learners.
    </p>
    <button
      onClick={() => {
        const element = document.getElementById("mission");
        element?.scrollIntoView({ behavior: "smooth" });
      }}
      className="flex items-center gap-2 mx-auto bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300"
    >
      Discover More
      <ChevronDown className="w-4 h-4 animate-bounce" />
    </button>
  </div>
</div>


      {/* Mission Section */}
      <div id="mission" className="py-20 bg-white scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
            Our Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-10">
              {/* Mission Statement */}
              <div className="space-y-6 group">
                <p className="text-gray-600 leading-relaxed text-lg transform transition-all duration-500 ease-out group-hover:scale-105">
                  At ConnectU, we believe in the power of shared experiences and
                  mentorship. Our platform fosters a community of growth,
                  learning, and mutual success.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  We create a bridge between alumni who've navigated the path
                  and students just starting their journey.
                </p>
              </div>

              {/* Key Principles Card */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-black">
                  Key Principles
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 group">
                    <div className="w-2 h-2 mt-2.5 bg-black rounded-full transform transition-all duration-300 group-hover:scale-150" />
                    <p className="text-gray-600">
                      <strong className="text-black">Knowledge Sharing:</strong>{" "}
                      Real-world experiences and industry insights
                    </p>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <div className="w-2 h-2 mt-2.5 bg-black rounded-full transform transition-all duration-300 group-hover:scale-150" />
                    <p className="text-gray-600">
                      <strong className="text-black">
                        Community Building:
                      </strong>{" "}
                      Connections beyond professional networking
                    </p>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <div className="w-2 h-2 mt-2.5 bg-black rounded-full transform transition-all duration-300 group-hover:scale-150" />
                    <p className="text-gray-600">
                      <strong className="text-black">
                        Career Development:
                      </strong>{" "}
                      Informed career decisions
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-10">
              {/* What We Offer Card */}
              <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transform hover:scale-102 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-8 text-black">
                  What We Offer
                </h3>
                <ul className="space-y-8">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className="group flex items-start gap-6 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300"
                    >
                      <div className="text-black transform transition-all duration-300 group-hover:scale-110">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-black mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Getting Started Card */}
          <div className="w-full bg-gradient-to-r from-gray-50 to-gray-100 p-8 mt-6 rounded-2xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300">
            <h3 className="text-2xl font-bold mb-8 text-black">
              Getting Started
            </h3>
            <ul className="space-y-8">
              {/* Step 1 */}
              <li className="flex items-start gap-4 group">
                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110">
                  1
                </div>
                <div>
                  <p className="font-medium text-lg text-black mb-1">
                    Create Your Profile
                  </p>
                  <p className="text-gray-600">
                    Highlight your goals, expertise, and interests. A complete
                    profile attracts the right connections and opportunities.
                    Make sure to update it regularly as you grow.
                  </p>
                </div>
              </li>

              {/* Step 2 */}
              <li className="flex items-start gap-4 group">
                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110">
                  2
                </div>
                <div>
                  <p className="font-medium text-lg text-black mb-1">
                    Connect with Others
                  </p>
                  <p className="text-gray-600">
                    Reach out to potential mentors or mentees, join communities,
                    and build meaningful relationships. Collaboration is key to
                    growth.
                  </p>
                </div>
              </li>
              {/* Step 3 */}
              <li className="flex items-start gap-4 group">
                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110">
                  3
                </div>
                <div>
                  <p className="font-medium text-lg text-black mb-1">
                    Grow Together
                  </p>
                  <p className="text-gray-600">
                    Share your progress, feedback, and challenges with your
                    connections. Learning is a continuous journey, and growing
                    with others makes it more fulfilling.
                  </p>
                </div>
              </li>

              {/* Step 4 */}
              <li className="flex items-start gap-4 group">
                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110">
                  4
                </div>
                <div>
                  <p className="font-medium text-lg text-black mb-1">
                    Reflect and Improve
                  </p>
                  <p className="text-gray-600">
                    Regularly review your goals, achievements, and areas of
                    improvement. Reflecting helps in understanding your journey
                    better and making necessary adjustments.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
            Ready to Connect?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our growing community of mentors and mentees
          </p>
          <div className="flex justify-center gap-4">
            <Link to = "/login"><button className="bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition-all duration-300">
              Join In
            </button></Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AboutUs;
