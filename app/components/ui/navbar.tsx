"use client";
import React, { useState, useEffect } from "react";
import { IconCode, IconMenu2, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scrolling for background opacity change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      // Add styles to lock scroll
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";

      // Clean up function
      return () => {
        // Remove styles and restore scroll position
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [isDrawerOpen]);

  const items = [
    { title: "About", id: "about" },
    { title: "Projects", id: "projects" },
    { title: "Certifications", id: "certifications" },
    { title: "Contact", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Close drawer after clicking
      setIsDrawerOpen(false);
    }
  };

  // Handle clicking outside to close
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsDrawerOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 w-full z-[9999] transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-black/30"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <IconCode className="w-8 h-8 text-white" />
              <text className="text-white font-['IBM_Plex_Sans'] pl-4">
                Omar Elmasasoudi
              </text>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <ul className="flex space-x-8">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="px-3 py-2 text-sm font-medium font-['IBM_Plex_Sans']"
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-400 focus:outline-none"
                aria-label="Open navigation menu"
              >
                <IconMenu2 className="block h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            className="fixed inset-0 z-[10000] bg-black/50 backdrop-blur-sm flex touch-none md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleBackdropClick}
          >
            <motion.div
              className="w-64 bg-black/90 border-r border-gray-700 shadow-lg h-full overflow-y-auto touch-auto"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="p-5 relative">
                {/* Close button */}
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-gray-800/70 hover:bg-gray-700/70 transition-colors"
                  aria-label="Close navigation menu"
                >
                  <IconX size={20} className="text-gray-400" />
                </button>

                <div className="mt-10 mb-6 flex items-center">
                  <IconCode className="w-7 h-7 text-blue-400 mr-3" />
                  <span className="text-lg font-bold text-white font-['IBM_Plex_Sans']">
                    Omar Elmasaoudi
                  </span>
                </div>

                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="w-full text-left py-3 px-4 rounded-md text-white hover:bg-gray-800/70 hover:text-blue-400 transition-colors flex items-center font-['IBM_Plex_Sans']"
                      >
                        {item.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
