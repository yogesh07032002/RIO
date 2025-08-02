import { NavLink } from "react-router-dom";
import { useState} from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const scrollToTop = () => window.scrollTo(0, 0);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Why Choose Us", path: "/choose" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-[#0288D1] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <NavLink to="/" onClick={scrollToTop} className="flex items-center gap-2">
          <img
            src="/images/Logo.png" // Logo in public/images
            alt="Rio Crop Science"
            className="h-14 w-auto object-contain"
          />
          <span className="text-2xl font-bold text-white hidden sm:inline">
            Rio Crop Science
          </span>
        </NavLink>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-7 h-7"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 text-lg font-semibold">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={scrollToTop}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#F57C00] border-b-2 border-[#1A237E] pb-1 transition"
                    : "text-white hover:text-[#81D4FA] transition duration-200"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        } bg-[#0288D1] w-full px-6 pb-6 pt-4`}
      >
        <ul className="flex flex-col space-y-5 text-lg font-semibold">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={() => {
                  scrollToTop();
                  closeMenu();
                }}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#F57C00] border-b-2 border-[#1A237E] pb-1 transition"
                    : "text-white hover:text-[#81D4FA] transition duration-200"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
