import React from "react";
import { FaSeedling, FaLeaf, FaFlask, FaPhoneAlt, FaGlobeAsia } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#91D8F7] to-[#BDE9F9] text-[#01579B] py-24 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight drop-shadow">
            Cultivating a <span className="text-[#F57C00]">Greener Tomorrow</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-[#0288D1]">
            Sustainable crop solutions that nourish the earth and your future. Rio Crop Science is your partner in eco-friendly agriculture.
          </p>
          <NavLink to="/products">
            <button className="mt-4 px-6 py-3 bg-[#F57C00] text-white font-semibold rounded-full hover:scale-105 hover:bg-[#e65100] transition duration-300 shadow-lg">
              Explore Our Products
            </button>
          </NavLink>
        </div>
        <div className="absolute inset-0 opacity-10 bg-[url('/src/assets/hero-bg.jpg')] bg-cover bg-center"></div>
      </section>

      {/* Main Content */}
      <section className="bg-white text-[#01579B] pt-20 pb-16 px-6">
        <div className="max-w-7xl mx-auto space-y-24">

          {/* About Snapshot */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img
              src="/public/AllProduct.jpg"
              alt="Farming"
              className="rounded-2xl shadow-lg hover:scale-[1.01] transition-transform duration-300"
            />
            <div>
              <h2 className="text-3xl font-bold text-[#0288D1] mb-4">Who We Are</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Founded in 2021, Rio Crop Science Pvt. Ltd. is committed to revolutionizing agriculture through sustainable innovation.
              </p>
              <NavLink to="/about">
                <button className="mt-6 px-5 py-2 bg-[#0288D1] text-white rounded-full hover:bg-[#01579B] transition duration-300">
                  Learn More
                </button>
              </NavLink>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="text-center space-y-10">
            <h2 className="text-3xl font-bold text-[#0288D1]">Why Choose Us</h2>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg">
              Our commitment to excellence, environment, and farmers sets us apart.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <FaSeedling className="text-[#F57C00] text-4xl mb-4" />, title: "Eco-Friendly Products", desc: "Support sustainable farming and reduce chemical use." },
                { icon: <FaFlask className="text-[#F57C00] text-4xl mb-4" />, title: "Scientific Innovation", desc: "Backed by R&D to boost crop performance." },
                { icon: <FaLeaf className="text-[#F57C00] text-4xl mb-4" />, title: "Farmer-Centric Approach", desc: "Empowering farmers with knowledge and tools." },
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-[#F0F9FF] rounded-2xl shadow hover:shadow-xl transition-all duration-300 hover:border-t-4 hover:border-[#F57C00]">
                  {item.icon}
                  <h3 className="text-xl font-semibold mb-2 text-[#01579B]">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-[#01579B] text-white rounded-2xl py-12 px-6 text-center shadow-lg">
            <h2 className="text-3xl font-bold mb-3">Ready to Grow with RCS?</h2>
            <p className="text-lg mb-6 max-w-xl mx-auto">
              Join the sustainable farming movement today.
            </p>
            <NavLink to="/contact">
              <button className="bg-[#F57C00] hover:bg-[#FFA000] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-md">
                Contact Us <FaPhoneAlt className="inline ml-2" />
              </button>
            </NavLink>
          </div>

          {/* Featured Products */}
          <div className="space-y-10">
            <h2 className="text-3xl font-bold text-[#0288D1] text-center">Featured Products</h2>
            <p className="text-center max-w-2xl mx-auto text-[#01579B] text-lg">
              Discover products designed to maximize yield and minimize impact.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
              {[
                "Humic Gold",
                "Rio Neem Kadu",
                "Riovita",
                "Grow Up",
                "Humigel",
                "R-Max",
                "Soil Pro",
                "Flower King",
                "Bio King",
                "Power Plus",
                "Bio Super",
                "Fulvic King",
                "Root King",
                "Stick On",
                "Amrutam",
                "Gold Boost",
                "Vermi Wash",
                "Bio Zyme"
              ].map((name, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition hover:scale-105 p-6 border border-gray-200"
                >
                  <h3 className="text-lg font-semibold text-[#0288D1] tracking-wide">{name}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Sustainability Commitment */}
          <div className="bg-[#E1F5FE] rounded-2xl py-12 px-6 space-y-6 text-center">
            <h2 className="text-3xl font-bold text-[#01579B]">Our Commitment to Sustainability</h2>
            <p className="max-w-3xl mx-auto text-[#01579B] text-lg">
              Designed to reduce chemical use, promote soil health, and protect biodiversity.
            </p>
            <div className="flex justify-center">
              
            </div>
            <NavLink to="/about">
              <button className="mt-6 px-6 py-3 bg-[#01579B] text-white rounded-full hover:bg-[#013A74] transition duration-300">
                Discover Our Mission
              </button>
            </NavLink>
          </div>

          {/* Global Reach Section */}
          <div className="text-center space-y-8 bg-white py-12 px-6">
            <h2 className="text-3xl font-bold text-[#0288D1]">Global Reach, Local Impact</h2>
            <p className="max-w-2xl mx-auto text-[#01579B] text-lg">
              With a growing network of distributors and farmers, we're making a difference worldwide.
            </p>
            <FaGlobeAsia className="text-[#0288D1] text-5xl mx-auto animate-bounce" />
          </div>
        </div>
      </section>
    </>
  );
};
