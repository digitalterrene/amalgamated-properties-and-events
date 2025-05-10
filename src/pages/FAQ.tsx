import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FAQ = () => {
  const faqCategories = [
    {
      id: "general",
      label: "General",
      questions: [
        {
          question: "What is APE?",
          answer:
            "APE (Amalgamated Property & Events) is a platform that connects property owners with people looking for venues and spaces for various purposes including events, photoshoots, meetings, and accommodation across South Africa.",
        },
        {
          question: "Is APE available throughout South Africa?",
          answer:
            "Yes, APE currently operates across South Africa with a focus on major cities including Johannesburg, Cape Town, Durban, Pretoria, and surrounding areas. We're continuously expanding to include more regions.",
        },
        {
          question: "How do I contact APE support?",
          answer:
            "You can reach our support team by emailing support@apevenues.com, calling +27 12 345 6789 during business hours, or using the contact form on our website. We aim to respond to all inquiries within 24 hours.",
        },
        {
          question: "What types of properties can I find on APE?",
          answer:
            "APE features a wide variety of spaces including indoor and outdoor venues, garden spaces, rooftops, studios, conference rooms, luxury homes, and budget-friendly options to suit different needs and preferences.",
        },
      ],
    },
    {
      id: "for-guests",
      label: "For Venue Seekers",
      questions: [
        {
          question: "How do I search for a venue?",
          answer:
            "You can search for venues by location (province, city, suburb), filter by venue category (indoor, outdoor, garden, etc.), filter by use case (wedding, photoshoot, etc.), or browse our featured properties on the homepage.",
        },
        {
          question: "How do I contact a property owner?",
          answer:
            "Once you've found a venue you're interested in, you can send an inquiry directly through our platform using the contact form on the listing page. Your message will be sent to the property owner who will respond to discuss details.",
        },
        {
          question: "Are the prices listed on the website final?",
          answer:
            "Prices displayed on listings are typically starting rates. Final prices may vary based on your specific requirements, date, duration, number of guests, and additional services requested. Always confirm the final price with the property owner.",
        },
        {
          question: "Can I visit a property before booking?",
          answer:
            "Yes, most property owners allow site visits by appointment. You can request a viewing by contacting the owner through our platform. We recommend always visiting a venue before making a booking for significant events.",
        },
      ],
    },
    {
      id: "for-owners",
      label: "For Property Owners",
      questions: [
        {
          question: "How do I list my property on APE?",
          answer:
            "Click on the 'List Your Property' button on our website, create an account, complete your property profile with details and high-quality photos, set your availability calendar and pricing, and submit for approval. Our team will review your listing within 48 hours.",
        },
        {
          question: "What types of properties are eligible for listing?",
          answer:
            "APE welcomes a wide range of properties including homes, gardens, studios, conference rooms, event venues, and unique spaces. The main requirement is that your property offers value for one or more of our use cases such as events, photoshoots, or meetings.",
        },
        {
          question: "How much does it cost to list my property?",
          answer:
            "Basic listing on APE is free. We operate on a commission model, taking a small percentage only when your property is booked through our platform. Premium listing options with enhanced visibility are available for a monthly subscription fee.",
        },
        {
          question: "How do I receive payments for bookings?",
          answer:
            "When your property is booked, the client pays through our secure platform. We hold the payment until 24 hours after the booking is completed, then transfer the amount (minus our commission) directly to your bank account.",
        },
      ],
    },
    {
      id: "bookings",
      label: "Bookings & Payments",
      questions: [
        {
          question: "How does the booking process work?",
          answer:
            "After finding a venue, you submit an inquiry, discuss details with the owner, receive a formal quote, make payment through our secure platform, and receive booking confirmation. You'll get access to the venue as arranged with the property owner.",
        },
        {
          question: "What payment methods are accepted?",
          answer:
            "We accept credit/debit cards (Visa, Mastercard), EFT payments, and selected mobile payment options. All transactions are processed through our secure payment gateway to ensure your financial information remains protected.",
        },
        {
          question: "What is APE's cancellation policy?",
          answer:
            "Cancellation policies vary by property and are clearly stated on each listing. Generally, cancellations made 30+ days before the event receive a full refund, 14-29 days receive a partial refund, and less than 14 days may not be eligible for refunds. Check the specific policy before booking.",
        },
        {
          question: "Is there a security deposit required?",
          answer:
            "Many properties require a security deposit to cover potential damages. The amount varies by property and is clearly stated in the booking terms. Deposits are refunded within 7 days after the booking if no damages are reported.",
        },
      ],
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-ape-gray-light">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-medium mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-ape-neutral">
              Find answers to common questions about using the APE platform, for
              both venue seekers and property owners.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue={faqCategories[0].id} className="w-full">
              <TabsList className="w-full flex justify-center mb-10 bg-ape-gray-light h-auto p-2 flex-wrap">
                {faqCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="data-[state=active]:bg-ape-teal data-[state=active]:text-white px-6 py-3"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {faqCategories.map((category) => (
                <TabsContent
                  key={category.id}
                  value={category.id}
                  className="mt-4"
                >
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="border-b border-ape-gray-light"
                      >
                        <AccordionTrigger className="text-lg font-medium py-4">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-ape-neutral text-base px-2">
                          <p className="pb-2">{faq.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-16 md:py-20 bg-ape-sand/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Still Have Questions?
            </h2>
            <p className="paragraph mb-8">
              Our team is here to help. Contact us directly and we'll get back
              to you as soon as possible.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center hover-scale">
                <div className="w-16 h-16 rounded-full bg-ape-teal/10 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6BADA0"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3">Email Us</h3>
                <p className="text-ape-neutral mb-4">
                  Send us an email and we'll respond within 24 hours
                </p>
                <a
                  href="mailto:info@apevenues.com"
                  className="text-ape-teal hover:underline font-medium"
                >
                  info@apevenues.com
                </a>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center hover-scale">
                <div className="w-16 h-16 rounded-full bg-ape-teal/10 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6BADA0"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3">Call Us</h3>
                <p className="text-ape-neutral mb-4">
                  Available Monday to Friday, 9am to 5pm
                </p>
                <a
                  href="tel:+27123456789"
                  className="text-ape-teal hover:underline font-medium"
                >
                  +27 61 778 6923
                </a>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center hover-scale">
                <div className="w-16 h-16 rounded-full bg-ape-teal/10 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6BADA0"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                    <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3">Live Chat</h3>
                <p className="text-ape-neutral mb-4">
                  Chat with our support team in real-time
                </p>
                <button className="text-ape-teal hover:underline font-medium">
                  Start Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </>
  );
};

export default FAQ;
