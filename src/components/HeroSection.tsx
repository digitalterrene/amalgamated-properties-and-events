import React from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2048&auto=format&fit=crop')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
      </div>

      <div className="container relative z-10 text-white">
        <div className="max-w-7xl lg:pt-0 pt-40 pb-20 lg:pb-0 lg:px-10 mx-auto animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Find Your Perfect Venue in South Africa
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            APE connects property owners with those seeking the ideal space for
            events, photography, videos, or any other purpose.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-ape-teal hover:bg-ape-teal/90 text-white px-6 py-6 text-lg"
            >
              List Your Property
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 px-6 py-6 text-lg"
            >
              Browse Venues
            </Button>
          </div>

          {/* Search Box */}
          <div className="mt-12 bg-white/10 backdrop-blur-md p-6 rounded-lg max-w-2xl">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <select className="w-full h-12 px-4 rounded-md border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-ape-teal">
                  <option value="" className="bg-ape-gray-dark">
                    Select a Province
                  </option>
                  <option value="gauteng" className="bg-ape-gray-dark">
                    Gauteng
                  </option>
                  <option value="western-cape" className="bg-ape-gray-dark">
                    Western Cape
                  </option>
                  <option value="kwazulu-natal" className="bg-ape-gray-dark">
                    KwaZulu-Natal
                  </option>
                  <option value="eastern-cape" className="bg-ape-gray-dark">
                    Eastern Cape
                  </option>
                  <option value="mpumalanga" className="bg-ape-gray-dark">
                    Mpumalanga
                  </option>
                  <option value="north-west" className="bg-ape-gray-dark">
                    North West
                  </option>
                </select>
              </div>
              <div className="flex-1">
                <select className="w-full h-12 px-4 rounded-md border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-ape-teal">
                  <option value="" className="bg-ape-gray-dark">
                    Event Type
                  </option>
                  <option value="wedding" className="bg-ape-gray-dark">
                    Wedding
                  </option>
                  <option value="party" className="bg-ape-gray-dark">
                    Party
                  </option>
                  <option value="corporate" className="bg-ape-gray-dark">
                    Corporate Event
                  </option>
                  <option value="photoshoot" className="bg-ape-gray-dark">
                    Photoshoot
                  </option>
                  <option value="meeting" className="bg-ape-gray-dark">
                    Meeting
                  </option>
                </select>
              </div>
              <Button className="h-12 bg-ape-teal hover:bg-ape-teal/80 gap-2">
                <Search size={18} />
                <span>Search</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
