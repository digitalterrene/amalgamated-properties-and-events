import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-20 bg-ape-teal text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-40 -top-40 w-80 h-80 rounded-full bg-white"></div>
        <div className="absolute -left-20 -bottom-20 w-60 h-60 rounded-full bg-white"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Ready to List Your Property?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join hundreds of property owners across South Africa who are earning
            additional income by sharing their spaces with people who need them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-ape-teal hover:bg-white/90 px-6 py-6 text-lg"
            >
              List Your Property
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white/10 px-6 py-6 text-lg gap-2"
            >
              <span>Learn More</span>
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
