import React from "react";
import {
  FaLeaf,
  FaFlask,
  FaSeedling,
  FaShieldAlt,
  FaUsers,
  FaHandsHelping,
  FaGlobeAsia,
  FaTruckLoading,
  FaMicroscope,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Choose = () => {
  const features = [
    {
      icon: <FaLeaf className="text-[#0288D1] text-4xl mb-4" />,
      title: "Eco-Friendly Solutions",
      desc: "All our products are developed to support sustainability and minimize harm to the environment.",
    },
    {
      icon: <FaFlask className="text-[#0288D1] text-4xl mb-4" />,
      title: "Research-Driven Formulas",
      desc: "We invest in R&D to ensure scientifically advanced, field-tested agro solutions that deliver results.",
    },
    {
      icon: <FaSeedling className="text-[#0288D1] text-4xl mb-4" />,
      title: "Soil Health Improvement",
      desc: "Our formulations improve microbial activity and organic content for long-term soil fertility.",
    },
    {
      icon: <FaShieldAlt className="text-[#0288D1] text-4xl mb-4" />,
      title: "Natural Crop Protection",
      desc: "We offer a range of bio-insecticides and tonics to protect crops without harming the ecosystem.",
    },
    {
      icon: <FaUsers className="text-[#0288D1] text-4xl mb-4" />,
      title: "Trusted by Farmers",
      desc: "Thousands of farmers across India rely on Rio Crop Science for performance, safety, and affordability.",
    },
    {
      icon: <FaHandsHelping className="text-[#0288D1] text-4xl mb-4" />,
      title: "Dedicated Farmer Support",
      desc: "Our support doesn’t end at purchase—we provide continuous guidance to ensure better outcomes.",
    },
  ];

  const stats = [
    {
      icon: <FaGlobeAsia className="text-[#1A237E] text-4xl mb-2" />,
      label: "States Reached",
      value: "20+",
    },
    {
      icon: <FaTruckLoading className="text-[#1A237E] text-4xl mb-2" />,
      label: "Distributors",
      value: "100+",
    },
    {
      icon: <FaMicroscope className="text-[#1A237E] text-4xl mb-2" />,
      label: "R&D Products",
      value: "50+",
    },
    {
      icon: <FaUsers className="text-[#1A237E] text-4xl mb-2" />,
      label: "Happy Farmers",
      value: "10,000+",
    },
  ];

  return (
    <section className="bg-white text-[#2B2B2B] py-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-[#0288D1] md:text-5xl">Why Choose Us</h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            At Rio Crop Science, we go beyond products—we cultivate trust, sustainability, and success with every drop.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#F9FAFB] p-6 rounded-2xl shadow hover:shadow-md transition text-center"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold text-[#1A237E] mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="bg-[#E3F2FD] rounded-2xl py-12 px-6 text-center space-y-10 shadow">
          <h2 className="text-3xl font-bold text-[#0288D1]">Our Growing Impact</h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            Trusted by a thriving community of farmers and distributors across India and expanding globally.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-2">
                {stat.icon}
                <h4 className="text-3xl font-bold text-[#0288D1]">{stat.value}</h4>
                <p className="text-sm text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#1A237E] text-white py-12 px-6 rounded-2xl text-center space-y-5">
          <h2 className="text-3xl font-bold">Partner with Purpose</h2>
          <p className="text-lg max-w-xl mx-auto">
            Whether you're a distributor, retailer, or farmer—Rio Crop Science is here to help you grow sustainably and profitably.
          </p>
          <NavLink to="/contact">
            <button className="bg-[#F57C00] hover:bg-[#e65100] px-6 py-3 rounded-full font-semibold transition">
              Get in Touch
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};
