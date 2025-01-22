import Link from "next/link";
import { Spotlight } from "./ui/Sportlight";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40em] w-full rounded-lg flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="text-4xl mt-20 md:mt-0 md:text-7xl font-bold text-transparent bg-gradient-to-r from-blue-200 to-blue-500 bg-clip-text">
          Master the art of Music
        </h1>
        <p className="mt-4 font-semibold text-base md:text-lg mx-auto max-w-lg">
          Dive into our Music courses and make your dreams come true in the
          field of Music.
        </p>
        <div className="mt-4">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-black text-white font-semibold text-base  shadow-md hover:bg-gray-800 hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
