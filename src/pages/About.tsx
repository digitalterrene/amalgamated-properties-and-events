import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const About = () => {
  const teamMembers = [
    {
      name: "Kyla Lottering",
      position: "Founder & CEO",
      image:
        "https://img.freepik.com/free-photo/beautiful-young-girl-posing_273609-12927.jpg?t=st=1746877824~exp=1746881424~hmac=84f908c45f0314febf4d73320868a6ef3e1cd0e8dc6d9772e7e4eadf88362c88&w=996",
      bio: "With over 15 years in the property and events industry, Kyla founded APE to bridge the gap between venue owners and those seeking unique spaces.",
    },
    {
      name: "Lerato Ndlovu",
      position: "Operations Director",
      image:
        "https://img.freepik.com/free-photo/close-up-portrait-beautiful-woman-with-flowers_23-2149150988.jpg?t=st=1746877461~exp=1746881061~hmac=7a85dfed9ca4d87bd691d65261ac47eee3f9b38168b28abd9733651d569a14ff&w=996",
      bio: "Lerato ensures that every APE venue meets our quality standards and that both property owners and clients have a seamless experience.",
    },
    {
      name: "Gayle van der Merwe",
      position: "Marketing Lead",
      image:
        "https://img.freepik.com/free-photo/people-emotions-lifestyle-concept-dreamy-happy-middle-aged-redhead-woman-blouse-smiling-pleased-looking-left-with-hopeful-gaze-standing-white-background-daydreaming_1258-21478.jpg?t=st=1746877922~exp=1746881522~hmac=0a9293e51371d3428a9df5b39075b934b89e0d78bce42f673f3b5172d37de4e0&w=996",
      bio: "Gayle brings over a decade of digital marketing expertise to APE, helping venue owners maximize their property's visibility and appeal.",
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-ape-gray-light">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-medium mb-6">About APE</h1>
            <p className="text-xl text-ape-neutral">
              Amalgamated Property & Events is transforming how South Africans
              find and book venues, properties, and creative spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium mb-6">
                Our Story
              </h2>
              <p className="paragraph mb-6">
                APE was born out of a simple observation: South Africa has
                incredible spaces that remain underutilized, while many people
                struggle to find the perfect venue for their events,
                productions, or accommodation needs.
              </p>
              <p className="paragraph mb-6">
                Founded in 2023, we set out to create a platform that would make
                it easy for property owners to list their spaces and for users
                to discover venues that perfectly match their requirements.
              </p>
              <p className="paragraph">
                Today, APE connects thousands of South Africans to unique
                properties across the country, from luxury homes in Cape Town to
                rustic farmhouses in Mpumalanga, urban studios in Johannesburg
                to beachfront venues in Durban.
              </p>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1170&auto=format&fit=crop"
                  alt="APE team meeting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-ape-sand rounded-lg shadow-lg hidden md:block">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1853&auto=format&fit=crop"
                  alt="APE featured property"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 md:py-24 bg-ape-teal text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Our Mission
            </h2>
            <p className="text-xl mb-8">
              To connect property owners with space seekers across South Africa,
              creating value for both and unlocking the potential of every
              property.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 8V12"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 16H12.01"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3 text-center">
                  Accessibility
                </h3>
                <p className="text-white/80 text-center">
                  Making it easier for everyone to find and book spaces that
                  match their specific needs.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 16V18C16 19.1046 15.1046 20 14 20H6C4.89543 20 4 19.1046 4 18V12C4 10.8954 4.89543 10 6 10H8"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 8H10C8.89543 8 8 8.89543 8 10V16C8 17.1046 8.89543 18 10 18H18C19.1046 18 20 17.1046 20 16V10C20 8.89543 19.1046 8 18 8Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3 text-center">
                  Connection
                </h3>
                <p className="text-white/80 text-center">
                  Building a community where property owners and users can
                  connect directly and securely.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3 text-center">
                  Innovation
                </h3>
                <p className="text-white/80 text-center">
                  Continuously improving our platform to create the best
                  possible experience for all users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Meet Our Team
            </h2>
            <p className="paragraph">
              The passionate people behind APE who are dedicated to transforming
              the property and events industry in South Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover-scale"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                  <p className="text-ape-teal mb-4">{member.position}</p>
                  <Separator className="my-4" />
                  <p className="text-ape-neutral">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </>
  );
};

export default About;
