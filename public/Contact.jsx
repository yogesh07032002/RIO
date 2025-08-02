import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3y3m0rf",     // ✅ Replace with your EmailJS Service ID
        "template_ovcvmzg",    // ✅ Replace with your EmailJS Template ID
        form.current,
        "kKhmF8VSKXUAI-c6B"      // ✅ Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
          console.error(error.text);
        }
      );
  };

  const contactInfo = [
    {
      icon: <FaPhoneAlt className="text-[#F57C00] text-3xl mx-auto mb-2 animate-pulse" />,
      label: "Phone",
      value: "+91 75174 11590",
    },
    {
      icon: <FaEnvelope className="text-[#F57C00] text-3xl mx-auto mb-2" />,
      label: "Email",
      value: "riocropscience@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt className="text-[#F57C00] text-3xl mx-auto mb-2" />,
      label: "Address",
      value: `A-116 L, Chhatrapati Sambhajinagar\nAurangabad – 431001`,
    },
    {
      icon: <FaClock className="text-[#F57C00] text-3xl mx-auto mb-2" />,
      label: "Business Hours",
      value: `Mon–Sat: 9AM–6PM\nSunday: Closed`,
    },
  ];

  return (
    <section className="bg-gradient-to-br from-white to-[#E3F2FD] text-[#2B2B2B] py-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0288D1] tracking-tight">
            Get In Touch
          </h1>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
            We'd love to hear from you. Contact our expert team for product support or sustainable farming guidance.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {contactInfo.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow p-6 hover:shadow-xl transition duration-300"
            >
              {item.icon}
              <h3 className="text-lg font-semibold">{item.label}</h3>
              <p className="text-sm text-gray-600 mt-1 whitespace-pre-line">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg p-6 sm:p-10 rounded-2xl max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A237E] mb-6 text-center">
            Send Us a Message
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="bg-[#F9FAFB] border border-gray-300 rounded-md px-4 py-3 w-full focus:ring-2 focus:ring-[#0288D1]"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="bg-[#F9FAFB] border border-gray-300 rounded-md px-4 py-3 w-full focus:ring-2 focus:ring-[#0288D1]"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="bg-[#F9FAFB] border border-gray-300 rounded-md px-4 py-3 w-full focus:ring-2 focus:ring-[#0288D1]"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="bg-[#F9FAFB] border border-gray-300 rounded-md px-4 py-3 w-full focus:ring-2 focus:ring-[#0288D1]"
              required
            ></textarea>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#F57C00] hover:bg-[#e65100] text-white font-semibold px-8 py-3 rounded-full shadow transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* WhatsApp & Map Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* WhatsApp Box */}
          <div className="bg-gradient-to-tr from-[#E3F2FD] to-white border border-blue-100 shadow-xl rounded-2xl p-8 text-center space-y-5 hover:shadow-2xl transition duration-300">
            <FaWhatsapp className="text-[#25D366] text-5xl mx-auto drop-shadow-md" />
            <h3 className="text-xl font-semibold text-[#0288D1]">
              Chat with Us on WhatsApp
            </h3>
            <p className="text-gray-700 text-sm max-w-md mx-auto">
              Need quick help or product guidance? We’re just a message away.
            </p>
            <a
              href="https://wa.me/917517411590"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#25D366] text-white px-6 py-3 rounded-full hover:bg-green-600 transition-all duration-300"
            >
              Message Now
            </a>
          </div>

          {/* Google Map */}
          <div className="w-full h-[320px] md:h-[360px] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <iframe
              title="Rio Crop Science Location"
              src="https://www.google.com/maps?q=A-116+L,+Chhatrapati+Sambhajinagar,+Aurangabad,+Maharashtra&output=embed"
              className="w-full h-full"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
