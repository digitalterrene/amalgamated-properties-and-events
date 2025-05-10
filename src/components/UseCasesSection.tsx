import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

interface UseCase {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

const UseCasesSection = () => {
  const useCases: UseCase[] = [
    {
      id: "weddings",
      title: "Weddings",
      description:
        "Create magical memories in spectacular South African wedding venues, from vineyard estates to beachfront properties.",
      features: [
        "Venues with ceremony and reception spaces",
        "Indoor and outdoor options for any season",
        "Accommodations for guests",
        "Catering-friendly facilities",
      ],
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1170&auto=format&fit=crop",
    },
    {
      id: "parties",
      title: "Parties & Events",
      description:
        "Find the perfect backdrop for celebrations, from birthday bashes to milestone events in unique party spaces.",
      features: [
        "Spaces suitable for any gathering size",
        "Options with sound systems and entertainment areas",
        "Indoor/outdoor combination venues",
        "Flexible layouts for customization",
      ],
      image:
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1170&auto=format&fit=crop",
    },
    {
      id: "corporate",
      title: "Corporate Events",
      description:
        "Elevate your business functions with professional spaces designed for productivity and impression.",
      features: [
        "Conference rooms with AV equipment",
        "Workshop and breakout spaces",
        "Reliable WiFi and tech infrastructure",
        "Catering options for business lunches",
      ],
      image:
        "https://img.freepik.com/free-photo/front-view-friends-having-lunch_23-2150598403.jpg?t=st=1746876509~exp=1746880109~hmac=a01db4ae8276e6b74aeac2f8cbab823f59d49295cdd2eb667a73cdae9fb89023&w=900",
    },
    {
      id: "photoshoots",
      title: "Photoshoots & Videos",
      description:
        "Discover picture-perfect locations for stunning photography and professional video production.",
      features: [
        "Natural light studios and indoor spaces",
        "Diverse architectural backdrops",
        "Unique décor and styling options",
        "Locations with multiple shooting areas",
      ],
      image:
        "https://img.freepik.com/free-photo/people-working-together-new-movie_23-2149066321.jpg?t=st=1746876600~exp=1746880200~hmac=0dd18b2248b45de07fcc461d0b78ec40c6f5eb19858f0d3a6781c6b35bed5932&w=996",
    },
    {
      id: "accommodation",
      title: "Accommodation",
      description:
        "Stay in remarkable properties across South Africa, from urban apartments to secluded countryside retreats.",
      features: [
        "Short and long-term rental options",
        "Furnished spaces ready for occupancy",
        "Locations near major attractions",
        "Properties suitable for groups and families",
      ],
      image:
        "https://images.unsplash.com/photo-1568495248636-6432b97bd949?q=80&w=1074&auto=format&fit=crop",
    },
  ];

  const [activeTab, setActiveTab] = useState(useCases[0].id);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Venues For Every Occasion
          </h2>
          <p className="paragraph">
            Whatever your needs, APE has the perfect space. Explore how our
            diverse venues can be adapted for different uses.
          </p>
        </div>

        <Tabs
          defaultValue={useCases[0].id}
          className="w-full"
          onValueChange={setActiveTab}
        >
          <div className="flex justify-center mb-10">
            <TabsList className="bg-ape-gray-light h-auto p-2 flex flex-wrap justify-center">
              {useCases.map((useCase) => (
                <TabsTrigger
                  key={useCase.id}
                  value={useCase.id}
                  className="data-[state=active]:bg-ape-teal data-[state=active]:text-white px-6 py-3"
                >
                  {useCase.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {useCases.map((useCase) => (
            <TabsContent
              key={useCase.id}
              value={useCase.id}
              className="mt-0 animate-fade-in"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div
                  className="bg-cover bg-center h-96 rounded-lg shadow-lg order-2 lg:order-1"
                  style={{ backgroundImage: `url(${useCase.image})` }}
                ></div>
                <div className="space-y-6 order-1 lg:order-2">
                  <h3 className="text-2xl md:text-3xl font-medium">
                    {useCase.title}
                  </h3>
                  <p className="paragraph">{useCase.description}</p>

                  <div className="space-y-3 my-6">
                    {useCase.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-ape-teal/20 flex items-center justify-center mr-3">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 3L4.5 8.5L2 6"
                              stroke="#6BADA0"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span className="text-ape-neutral">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="bg-ape-teal hover:bg-ape-teal/90 gap-2">
                    <span>Explore {useCase.title}</span>
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default UseCasesSection;
