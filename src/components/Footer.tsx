import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ape-gray-dark text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & About */}
          <div>
            <Link to="/" className="flex items-center mb-6">
              <span className="text-3xl font-serif font-bold">
                A<span className="text-ape-teal">P</span>E
              </span>
            </Link>
            <p className="text-gray-300 mb-6">
              Amalgamated Property & Events connects property owners with those
              seeking perfect venues for any occasion across South Africa.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-ape-teal transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-ape-teal transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-ape-teal transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-ape-teal transition-colors flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" /> About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/venues"
                  className="text-gray-300 hover:text-ape-teal transition-colors flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" /> Browse Venues
                </Link>
              </li>
              <li>
                <Link
                  to="/list-venue"
                  className="text-gray-300 hover:text-ape-teal transition-colors flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" /> List Your Venue
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-300 hover:text-ape-teal transition-colors flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" /> FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-ape-teal transition-colors flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Venues */}
          <div>
            <h3 className="text-xl font-serif mb-6">Popular Cities</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/venues/johannesburg"
                  className="text-gray-300 hover:text-ape-teal transition-colors flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" /> Johannesburg
                </Link>
              </li>
              <li>
                <Link
                  to="/venues/cape-town"
                  className="text-gray-300 hover:text-ape-teal transition-colors flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" /> Cape Town
                </Link>
              </li>
              <li>
                <Link
                  to="/venues/durban"
                  className="text-gray-300 hover:text-ape-teal transition-colors flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" /> Durban
                </Link>
              </li>
              <li>
                <Link
                  to="/venues/pretoria"
                  className="text-gray-300 hover:text-ape-teal transition-colors flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" /> Pretoria
                </Link>
              </li>
              <li>
                <Link
                  to="/venues/port-elizabeth"
                  className="text-gray-300 hover:text-ape-teal transition-colors flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" /> Port Elizabeth
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 text-ape-teal" />
                <span className="text-gray-300">
                  123 Main Street, Sandton
                  <br />
                  Johannesburg, South Africa
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-ape-teal" />
                <a
                  href="tel:+27123456789"
                  className="text-gray-300 hover:text-ape-teal transition-colors"
                >
                  +27 12 345 6789
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-ape-teal" />
                <a
                  href="mailto:info@apevenues.com"
                  className="text-gray-300 hover:text-ape-teal transition-colors"
                >
                  info@apevenues.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} APE - Amalgamated Property & Events. All rights
            reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              to="/privacy-policy"
              className="text-gray-400 hover:text-ape-teal transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-400 hover:text-ape-teal transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
