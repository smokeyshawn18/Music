"use client";
import Link from "next/link";
import React from "react";

const UpcomingWebinars = () => {
  const featuredWebinars = [
    {
      title: "Understanding Music Theory",
      description:
        "Dive deep into the fundamentals of music theory and enhance your musical skills.",
      slug: "understanding-music-theory",
      isFeatured: true,
    },
    {
      title: "The Art of Songwriting",
      description:
        "Learn the craft of songwriting from experienced musicians and songwriters.",
      slug: "the-art-of-songwriting",
      isFeatured: true,
    },
    {
      title: "Mastering Your Instrument",
      description:
        "Advanced techniques to master your musical instrument of choice.",
      slug: "mastering-your-instrument",
      isFeatured: true,
    },
    {
      title: "Music Production Essentials",
      description:
        "Get started with music production with this comprehensive overview.",
      slug: "music-production-essentials",
      isFeatured: true,
    },
    {
      title: "Live Performance Techniques",
      description:
        "Enhance your live performance skills with expert tips and strategies.",
      slug: "live-performance-techniques",
      isFeatured: true,
    },
    {
      title: "Digital Music Marketing",
      description:
        "Learn how to promote your music effectively in the digital age.",
      slug: "digital-music-marketing",
      isFeatured: true,
    },
  ];

  return (
    <>
      <div className="p-12 bg-gray-950 h-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="font-bold text-teal-400 text-3xl tracking-wider">
              FEATURED WEBINARS
            </h2>
            <p className="mt-2 leading-0 text-2xl font-extrabold tracking-tight text-gray-200 sm:text-4xl">
              Enhance Your Musical Journey
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWebinars.map((webinar) => (
              <div
                key={webinar.slug}
                className="relative bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 overflow-hidden flex flex-col justify-between h-full"
              >
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold text-gray-100 group-hover:text-teal-400">
                    {webinar.title}
                  </h3>
                  <p className="mt-2 text-gray-400">{webinar.description}</p>
                </div>
                <div className="p-6">
                  <Link
                    href={`/webinars/${webinar.slug}`}
                    className="bg-teal-600 text-gray-200 px-4 py-2 rounded-full shadow-lg hover:bg-teal-500 transition duration-300 w-full text-center block"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href={"/webinars"}
              className="px-6 py-3 mt-4 rounded-2xl font-semibold border border-teal-500 text-gray-200 hover:bg-teal-600 transition duration-200 bg-gray-800"
            >
              View all Webinars
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingWebinars;
