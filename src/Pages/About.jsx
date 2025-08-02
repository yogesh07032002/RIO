import React from "react";

export const About = () => {
  return (
    <section className="bg-white text-[#2B2B2B] py-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* Intro Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0288D1]">About Rio Crop Science</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            At Rio Crop Science, we are on a mission to transform Indian agriculture through innovation, sustainability, and farmer empowerment.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://images.unsplash.com/photo-1582515073490-39981397c445"
            alt="Agriculture innovation"
            className="rounded-2xl shadow-md w-full object-cover"
          />
          <div>
            <h2 className="text-3xl font-semibold text-[#0288D1] mb-4">Our Story</h2>
            <p className="text-gray-700 text-lg">
              Founded in 2021, Rio Crop Science Pvt. Ltd. began with a single idea—to make agriculture more efficient, eco-conscious, and rewarding for Indian farmers. 
              From humble beginnings, we’ve grown into a trusted name across the country, serving farmers with innovative and sustainable crop solutions.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-[#E3F2FD] p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold text-[#0288D1] mb-3">Our Mission</h3>
            <p className="text-gray-700 text-base">
              To provide innovative, research-backed, and sustainable agricultural products that support farmers in improving productivity, profitability, and ecological balance.
            </p>
          </div>
          <div className="bg-[#E3F2FD] p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold text-[#0288D1] mb-3">Our Vision</h3>
            <p className="text-gray-700 text-base">
              To be a leading force in sustainable agriculture—enabling every farmer to grow smarter, safer, and greener.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center space-y-10">
          <h2 className="text-3xl font-bold text-[#0288D1]">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
            {[
              { title: "Innovation", desc: "Driven by research and development to offer modern, effective solutions." },
              { title: "Sustainability", desc: "All our products are designed to protect and enrich the environment." },
              { title: "Integrity", desc: "We are transparent, honest, and committed to ethical practices." },
              { title: "Quality", desc: "Strict control standards ensure product safety and consistency." },
              { title: "Farmer-Centric", desc: "We listen, adapt, and act to serve the farmer's best interests." },
              { title: "Collaboration", desc: "We grow better together—with our farmers, partners, and team." },
            ].map((value, i) => (
              <div
                key={i}
                className="bg-[#F9FAFB] p-6 rounded-xl shadow hover:shadow-md transition"
              >
                <h4 className="text-lg font-semibold text-[#F57C00] mb-2">{value.title}</h4>
                <p className="text-gray-700 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Message from Leadership */}
        <div className="bg-[#F9FAFB] p-10 rounded-2xl shadow-md text-center space-y-4">
          <h2 className="text-3xl font-bold text-[#0288D1]">A Word from Our Founder</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg italic">
            "Every drop of effort we put into our fields is an investment in the future. At Rio Crop Science, we are committed to making every seed count—with smarter technology, sustainable practices, and a vision for greener India."
          </p>
          <p className="text-[#F57C00] font-semibold">— Founder, Rio Crop Science Pvt. Ltd.</p>
        </div>

        {/* Sustainability Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-[#0288D1] mb-4">Our Sustainability Promise</h2>
            <p className="text-gray-700 text-lg">
              Sustainability isn't just a word—it's the heart of our operations. Every formulation, every process, and every relationship is built on the principle of environmental stewardship. Our eco-friendly inputs reduce chemical usage, improve soil health, and protect biodiversity.
            </p>
          </div>
          <img
            src="src/assets/img3.jpg"
            alt="Sustainable farming"
            className="rounded-2xl shadow-md w-full object-cover"
          />
        </div>

        {/* Final CTA */}
        <div className="bg-[#1A237E] text-white rounded-2xl py-12 px-6 text-center space-y-6">
          <h2 className="text-3xl font-bold">We’re Growing a Greener India</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Join the journey of cultivating tomorrow—choose Rio Crop Science for better harvests and a healthier planet.
          </p>
          <a
            href="/products"
            className="inline-block bg-[#F57C00] hover:bg-[#e65100] px-6 py-3 rounded-full font-semibold transition"
          >
            View Our Products
          </a>
        </div>
      </div>
    </section>
  );
};
