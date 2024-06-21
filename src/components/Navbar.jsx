import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaXmark } from "react-icons/fa6";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Set toggle menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  // Nav items
  const navItems = [
    {
      link: "Beranda",
      path: "home",
    },
    {
      link: "Tentang Kami",
      path: "about",
    },
    {
      link: "Program",
      path: "program",
    },
    {
      link: "Kontak Kami",
      path: "contact",
    },
    {
      link: "FAQ",
      path: "faq",
    },
  ];

  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
            : "sticky top-0 left-0 right-0 border-b bg-white duration-300"
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a
            href=""
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            {/* <img src={logo} alt="" className="w-10 inline-block items-center" /> */}
            {/* <span className="text-brand-secondary">NEXCENT</span> */}
            <span className="text-brand-secondary">LOGO</span>
          </a>
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                className="block text-base text-neutral-black hover:text-brand-primary first:font-medium cursor-pointer"
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* Button for large devices */}
          {/* <div className="space-x-12 hidden lg:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center text-brand-primary hover:text-neutral-black"
            >
              Login
            </a>
            <button className="bg-brand-primary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutral-grey">
              Sign Up
            </button>
          </div> */}

          {/* Menu button for only mobile devices */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutral-grey focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6 text-neutral-d-grey" />
              ) : (
                <FaBars className="h-6 w-6 text-neutral-d-grey" />
              )}
            </button>
          </div>
        </div>

        {/* Nav items for mobile devices */}
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-brand-primary ${
            isMenuOpen ? "block fixed top-0 left-0 right-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              className="block text-base text-white hover:text-brand-primary first:font-medium"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
