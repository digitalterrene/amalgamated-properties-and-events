import React from "react";
import {
  Calendar,
  MapPin,
  Camera,
  Music,
  Users,
  ShieldCheck,
} from "lucide-react";

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover-scale flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl">
    <div className="bg-ape-teal/10 p-4 rounded-full mb-6">
      <Icon className="text-ape-teal w-8 h-8" />
    </div>
    <h3 className="text-xl font-medium mb-3">{title}</h3>
    <p className="text-ape-neutral">{description}</p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: MapPin,
      title: "Find Spaces Anywhere",
      description:
        "Discover perfect venues across South Africa's most vibrant cities and hidden gems.",
    },
    {
      icon: Camera,
      title: "Perfect for Photoshoots",
      description:
        "Stunning spaces with natural light and unique aesthetics for photographers and content creators.",
    },
    {
      icon: Calendar,
      title: "Real-Time Availability",
      description:
        "View booking calendars and secure your preferred dates instantly.",
    },
    {
      icon: Music,
      title: "For Any Occasion",
      description:
        "From weddings to workshops, music videos to corporate retreats - find spaces for any purpose.",
    },
    {
      icon: Users,
      title: "Direct Communication",
      description:
        "Connect directly with property owners to discuss your specific needs and requirements.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Payments & Contracts",
      description:
        "Hassle-free transactions with protected payments and customizable booking agreements for peace of mind.",
    },
  ];

  return (
    <section className="section-padding bg-ape-gray-light">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Why Choose APE?
          </h2>
          <p className="paragraph">
            We're revolutionizing how people find and book event spaces and
            venues across South Africa, making it simple to connect property
            owners with those who need the perfect space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
