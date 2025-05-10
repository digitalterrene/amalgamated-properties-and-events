import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CategoriesSection from "@/components/CategoriesSection";
import UseCasesSection from "@/components/UseCasesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Home, MapPin } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const featuredLocations = [
    {
      city: "Johannesburg",
      province: "Gauteng",
      count: 127,
      image:
        "https://images.unsplash.com/photo-1577948000111-9c970dfe3743?q=80&w=1024&auto=format&fit=crop",
    },
    {
      city: "Cape Town",
      province: "Western Cape",
      count: 98,
      image:
        "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=1024&auto=format&fit=crop",
    },
    {
      city: "Durban",
      province: "KwaZulu-Natal",
      count: 64,
      image:
        "https://silversea-discover.imgix.net/2024/01/durbanheroistockphoto.jpg?auto=compress%2Cformat&ixlib=php-3.3.1&fit=crop&w=1500&h=1000&wpsize=bigger-1500",
    },
    {
      city: "Pretoria",
      province: "Gauteng",
      count: 52,
      image:
        "https://www.thehotelguru.com/_images/2c/b6/2cb6ad71a211a719794f50785f29ad67/s1180x560.jpg",
    },
  ];
  const steps = [
    {
      id: 1,
      icon: <MapPin className="h-10 w-10 text-venue-gold" />,
      title: "Find Your Perfect Venue",
      description:
        "Browse through our extensive collection of venues across South Africa, filtering by location, capacity, and amenities.",
    },
    {
      id: 2,
      icon: <Calendar className="h-10 w-10 text-venue-gold" />,
      title: "Check Availability & Book",
      description:
        "View venue availability in real-time, then submit a booking request directly to the venue owner.",
    },
    {
      id: 3,
      icon: <Home className="h-10 w-10 text-venue-gold" />,
      title: "Host Your Event",
      description:
        "Finalize details with the venue owner and enjoy your perfectly matched space for your special occasion.",
    },
  ];
  const howItWorks = [
    {
      title: "List Your Venue",
      description:
        "Property owners can easily list their spaces on our platform, showcasing features, amenities, and availability.",
      number: "01",
    },
    {
      title: "Get Discovered",
      description:
        "Venue seekers browse and filter through listings based on their specific requirements and location preferences.",
      number: "02",
    },
    {
      title: "Connect Directly",
      description:
        "Our platform facilitates direct communication between property owners and potential clients.",
      number: "03",
    },
    {
      title: "Secure Bookings",
      description:
        "Once details are agreed upon, payments and bookings are secured through our protected system.",
      number: "04",
    },
  ];

  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesSection />

      {/* Featured Locations */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Featured Locations
            </h2>
            <p className="paragraph">
              Discover amazing venues across South Africa's most vibrant cities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredLocations.map((location, index) => (
              <div
                key={index}
                className="group relative h-80 rounded-lg overflow-hidden shadow-lg hover-scale"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${location.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />

                <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                  <div className="flex items-center text-white mb-2">
                    <MapPin size={16} className="mr-2" />
                    <span className="text-sm">{location.province}</span>
                  </div>
                  <h3 className="text-white text-xl font-medium mb-1">
                    {location.city}
                  </h3>
                  <p className="text-white/80 text-sm mb-3">
                    {location.count} venues available
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white/10 backdrop-blur-sm border-white/50 text-white hover:bg-white/20"
                  >
                    Explore
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Button
              variant="outline"
              className="border-ape-teal text-ape-teal hover:bg-ape-teal/10 gap-2"
            >
              <span>View All Locations</span>
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      <CategoriesSection />

      {/* How It Works */}
      <section className="section-padding bg-ape-gray-light">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              How APE Works
            </h2>
            <p className="paragraph">
              Our platform makes connecting property owners with venue seekers
              seamless and efficient.
            </p>
          </div>
          <Tabs defaultValue="venue-seekers" className="w-full">
            <TabsList className="grid w-96 mx-auto grid-cols-2">
              <TabsTrigger value="venue-seekers">Venue Seekers</TabsTrigger>
              <TabsTrigger value="property-owners">Property Owners</TabsTrigger>
            </TabsList>
            <TabsContent value="venue-seekers">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {steps.map((step) => (
                  <div
                    key={step.id}
                    className="bg-white rounded-xl p-8 shadow-lg text-center"
                  >
                    <h3 className="text-xl font-medium mb-4">{step.title}</h3>
                    <p className="text-ape-neutral">{step.description}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="property-owners">
              <div className="grid grid-cols-1 md:grid-cols-2 mt-12 lg:grid-cols-4 gap-8">
                {howItWorks.map((step, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-8 shadow-lg text-center"
                  >
                    <h3 className="text-xl font-medium mb-4">{step.title}</h3>
                    <p className="text-ape-neutral">{step.description}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-16 text-center">
            <div className="inline-flex gap-6">
              <Button className="bg-ape-teal hover:bg-ape-teal/90">
                List Your Venue
              </Button>
              <Button
                variant="outline"
                className="border-ape-teal text-ape-teal hover:bg-ape-teal/10"
              >
                Find a Venue
              </Button>
            </div>
          </div>
        </div>
      </section>

      <UseCasesSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </>
  );
};

export default Index;
