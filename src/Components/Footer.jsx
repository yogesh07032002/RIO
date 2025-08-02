import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube, FaArrowUp } from "react-icons/fa";
import React from "react";

export const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#0288D1] text-white pt-16 pb-10 px-6 rounded-t-3xl border-t-4 border-[#81D4FA] shadow-inner relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        
        {/* About Section */}
        <div>
          <h3 className="text-2xl font-extrabold text-[#F57C00] mb-4">Rio Crop Science</h3>
          <p className="text-sm leading-relaxed text-white">
            Promoting sustainable agriculture through bio-products, tonics, and micronutrients that protect the environment and enhance yields.
          </p>
          <p className="mt-3 italic text-xs text-[#E0F7FA]">
            Cultivating a greener tomorrow, one harvest at a time.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-extrabold text-[#F57C00] mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { label: "About", href: "/about" },
              { label: "Why Choose Us", href: "/choose" },
              { label: "Products", href: "/products" },
              { label: "Contact", href: "/contact" },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-white hover:text-[#FDD835] transition duration-200 font-medium"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-extrabold text-[#F57C00] mb-4">Contact Info</h3>
          <p className="text-sm text-white mb-3">
            A-116 L, Chhatrapati Sambhajinagar (Aurangabad) - 431001<br />Maharashtra, India
          </p>
          <p className="text-sm text-white mb-1">
            Phone:{" "}
            <a href="tel:+917517411590" className="hover:text-[#FDD835] underline">
              +91 75174 11590
            </a>
          </p>
          <p className="text-sm text-white">
            Email:{" "}
            <a href="mailto:riocropscience@gmail.com" className="hover:text-[#FDD835] underline">
              riocropscience@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 pt-6 border-t border-[#B3E5FC] max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-white text-center md:text-left">
          © {new Date().getFullYear()} Rio Crop Science Pvt. Ltd. All rights reserved.
        </p>
        <div className="flex gap-4 text-white text-lg">
          {[FaFacebookF, FaInstagram, FaYoutube, FaLinkedin].map((Icon, i) => (
            <a
              key={i}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F57C00] transition transform hover:scale-110"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute right-6 bottom-6 bg-[#F57C00] text-white p-3 rounded-full shadow-xl hover:bg-[#E65100] transition duration-300"
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};
