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
      <div className="p-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="font-bold text-teal-400 text-3xl tracking-wider">
              FEATURED WEBINARS
            </h2>
            <p className="mt-2 leading-0 text-2xl font-extrabold tracking-tight sm:text-4xl">
              Enhance Your Musical Journey
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWebinars.map((webinar) => (
              <div
                key={webinar.slug}
                className="group relative bg-white rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-teal-400">
                    {webinar.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{webinar.description}</p>
                </div>
                <div className="absolute inset-0 bg-teal-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-xl"></div>
                <div className="absolute bottom-4 left-6 text-white font-semibold">
                  <Link
                    href={`/webinars/${webinar.slug}`}
                    className="bg-white text-teal-400 px-4 py-2 rounded-full shadow-lg hover:bg-teal-200 transition duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href={"/webinars"} // Updated the link to go to all webinars, adjust as needed
              className="px-6 py-3 mt-4 rounded-2xl font-semibold border border-neutral-600 text-black hover:bg-gray-200 transition duration-200 bg-white"
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
