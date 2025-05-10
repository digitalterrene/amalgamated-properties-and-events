import React from "react";
import { Separator } from "./ui/separator";
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  image: string;
}

const Testimonial = ({ quote, author, position, image }: TestimonialProps) => (
  <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col">
    <div className="flex items-center mb-6">
      <img
        src={image}
        alt={author}
        className="w-14 h-14 object-cover rounded-full border-2 border-ape-teal"
      />
      <div className="ml-4">
        <h4 className="font-medium text-ape-gray-dark">{author}</h4>
        <p className="text-ape-neutral text-sm">{position}</p>
      </div>
    </div>
    <div className="mb-6">
      <Quote />
    </div>
    <p className="text-ape-gray-dark mb-6 flex-grow">{quote}</p>
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className="w-5 h-5 text-yellow-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  </div>
);

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "APE helped me find the perfect garden venue for my daughter's wedding. The platform made it so easy to compare spaces and communicate with owners directly.",
      author: "Sarah Sanders",
      position: "Event Planner, Johannesburg",
      image: "https://randomuser.me/api/portraits/women/43.jpg",
    },
    {
      quote:
        "As a photographer, I'm always looking for unique spaces. Through APE, I've discovered amazing venues that have become regular shooting locations for my clients.",
      author: "Tim Honkins",
      position: "Professional Photographer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      quote:
        "Listing our property on APE has increased our bookings by 60%. The platform connects us with clients we would never have reached otherwise.",
      author: "Emma van Wyk",
      position: "Property Owner, Cape Town",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  return (
    <section className="section-padding bg-ape-sand/30">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            What Our Users Say
          </h2>
          <p className="paragraph">
            Hear from property owners and venue seekers who have found success
            through the APE platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
