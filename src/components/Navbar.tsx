"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu as MenuIcon, X } from "lucide-react";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
    setActive(null);
  };

  return (
    <div
      className={cn("fixed top-5 inset-x-0 z-50 text-lg font-bold", className)}
    >
      <div className="max-w-3xl mx-auto px-2 sm:px-6 lg:px-8 relative">
        {/* Mobile menu button */}
        <div className="absolute right-4 top-4 sm:hidden z-50">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg bg-black/[0.8] border border-white/[0.2] backdrop-blur-md"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <MenuIcon className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Main Menu */}
        <div
          className={cn(
            "transform transition-all duration-300 ease-in-out ",
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0 pointer-events-none",
            "sm:translate-y-0 sm:opacity-100 sm:pointer-events-auto"
          )}
        >
          <Menu setActive={setActive} className="mt-4 sm:mt-8">
            <div
              className={cn(
                "flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 justify-center",
                isMenuOpen ? "flex-col sm:flex-row" : "flex-col"
              )}
            >
              <Link href="/" onClick={closeMenu}>
                <MenuItem setActive={setActive} active={active} item="Home" />
              </Link>

              <MenuItem
                setActive={setActive}
                active={active}
                item="Our Courses"
              >
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/courses" onClick={closeMenu}>
                    Our All Courses
                  </HoveredLink>
                  <HoveredLink href="/courses/music-theory" onClick={closeMenu}>
                    Basic Music Theory
                  </HoveredLink>
                  <HoveredLink href="/courses/composition" onClick={closeMenu}>
                    Advanced Composition
                  </HoveredLink>
                  <HoveredLink href="/courses/songwriting" onClick={closeMenu}>
                    Songwriting
                  </HoveredLink>
                  <HoveredLink href="/courses/production" onClick={closeMenu}>
                    Music Production
                  </HoveredLink>
                </div>
              </MenuItem>

              <Link href="/contact" onClick={closeMenu}>
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item="Contact Us"
                />
              </Link>
            </div>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
