import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  title: string;
  image: string;
  link: string;
  className?: string;
}

const CategoryCard = ({ title, image, link, className }: CategoryCardProps) => (
  <Link
    to={link}
    className={cn(
      "group relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg hover-scale",
      className
    )}
  >
    <div
      className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-500 group-hover:scale-110"
      style={{ backgroundImage: `url(${image})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />

    <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
      <h3 className="text-white text-xl md:text-2xl font-medium mb-2">
        {title}
      </h3>
      <div className="flex items-center text-ape-teal group-hover:translate-x-2 transition-transform">
        <span className="mr-2">Explore</span>
        <ArrowRight size={16} />
      </div>
    </div>
  </Link>
);

const CategoriesSection = () => {
  const categories = [
    {
      title: "Indoor Venues",
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1296&auto=format&fit=crop",
      link: "/categories/indoor-venues",
      className: "md:col-span-2",
    },
    {
      title: "Outdoor Spaces",
      image:
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=776&auto=format&fit=crop",
      link: "/categories/outdoor-spaces",
      className: "",
    },
    {
      title: "Garden Venues",
      image:
        "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?q=80&w=776&auto=format&fit=crop",
      link: "/categories/garden-venues",
      className: "",
    },
    {
      title: "Luxury Homes",
      image:
        "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=776&auto=format&fit=crop",
      link: "/categories/luxury-homes",
      className: "",
    },
    {
      title: "Studios",
      image:
        "https://img.freepik.com/free-photo/beautician-doing-special-procedure-hair-camera_7502-7277.jpg?t=st=1746873768~exp=1746877368~hmac=80757a8b3b9c751073e9df500ccdc5f3413678a26d428b4daf55a93159ee59be&w=996",
      link: "/categories/studios",
      className: "",
    },
    {
      title: "Rooftops",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1024&auto=format&fit=crop",
      link: "/categories/rooftops",
      className: "md:col-span-2",
    },
    {
      title: "Others",
      image:
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=776&auto=format&fit=crop",
      link: "/categories/others",
      className: "",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Explore Venue Categories
          </h2>
          <p className="paragraph">
            From intimate studios to expansive garden spaces, discover the
            perfect venue category for your next event or project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              image={category.image}
              link={category.link}
              className={category.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
