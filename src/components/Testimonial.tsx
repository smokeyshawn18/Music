"use client";

import { BackgroundLines } from "./ui/background-lines";
import { InfiniteMovingCards } from "./ui/infinite-moving-card";

const musicSchoolTestimonials = [
  {
    quote:
      "Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!",
    name: "Alex Johnson",
    title: "Guitar Student",
  },
  {
    quote:
      "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
    name: "Samantha Lee",
    title: "Piano Student",
  },
  {
    quote:
      "This school offered me the tools and confidence to take my singing to the next level. I'm endlessly grateful for the personalized coaching.",
    name: "Michael Chen",
    title: "Vocal Student",
  },
  {
    quote:
      "As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.",
    name: "Emily Taylor",
    title: "Violin Student",
  },
  {
    quote:
      "The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!",
    name: "Chris Morales",
    title: "Music Production Student",
  },
];

const Testimonial = () => {
  return (
    <BackgroundLines className="relative w-full min-h-[40rem] md:min-h-[30rem] sm:min-h-[20rem] flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Subtle Glowing Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-gradient-to-br from-gray-800 to-black rounded-full blur-2xl opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tr from-gray-700 to-black rounded-full blur-3xl opacity-40"></div>
      </div>

      {/* Heading Section */}
      <div className="relative z-10 bg-black border border-gray-800 shadow-lg rounded-lg px-8 py-6">
        <h2 className="text-4xl md:text-3xl sm:text-2xl font-bold text-center tracking-wide text-white">
          Hear Our Harmony
          <br />
          <span className="text-gray-400">Voices of Excellence</span>
        </h2>
      </div>

      {/* Testimonial Cards */}
      <div className="relative mt-10 w-full flex items-center justify-center overflow-hidden z-10">
        <InfiniteMovingCards
          items={musicSchoolTestimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </BackgroundLines>
  );
};

export default Testimonial;
