import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Added useLocation
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // Get current route

  // Check if we're on the homepage
  const isHomepage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic text color classes
  const textColorClass =
    isHomepage && !isScrolled ? "text-white" : "text-ape-gray-dark";
  const hoverColorClass =
    isHomepage && !isScrolled
      ? "hover:text-ape-teal/80"
      : "hover:text-ape-teal";

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className={`text-2xl font-serif font-bold ${textColorClass}`}>
            A<span className="text-ape-teal">P</span>E
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={`${textColorClass} ${hoverColorClass} transition-colors`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`${textColorClass} ${hoverColorClass} transition-colors`}
          >
            About
          </Link>
          <Link
            to="/venues"
            className={`${textColorClass} ${hoverColorClass} transition-colors`}
          >
            Venues
          </Link>
          <Link
            to="/faq"
            className={`${textColorClass} ${hoverColorClass} transition-colors`}
          >
            FAQ
          </Link>
          <Link
            to="/contact"
            className={`${textColorClass} ${hoverColorClass} transition-colors`}
          >
            Contact
          </Link>
          <Button className="bg-ape-teal hover:bg-ape-teal/90">
            List Your Venue
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 ${textColorClass}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 animate-fade-in">
          <div className="container-custom flex flex-col space-y-4">
            <Link
              to="/"
              className="text-ape-gray-dark hover:text-ape-teal px-4 py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-ape-gray-dark hover:text-ape-teal px-4 py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/venues"
              className="text-ape-gray-dark hover:text-ape-teal px-4 py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Venues
            </Link>
            <Link
              to="/faq"
              className="text-ape-gray-dark hover:text-ape-teal px-4 py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className="text-ape-gray-dark hover:text-ape-teal px-4 py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="bg-ape-teal hover:bg-ape-teal/90 w-full">
              List Your Venue
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
