"use client"
import React from "react";
import { IconCode } from "@tabler/icons-react";

const Navbar = () => {
  const items = [
    { title: "About", id: "about" },
    { title: "Projects", id: "projects" },
    { title: "Contact", id: "contact" },
  ];

  const scrollToSection = (id:string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="absolute top-0 right-0 w-full bg-black bg-opacity-5 p-4 z-50 flex items-center justify-between pr-10 pt-7">
      <IconCode className="w-8 h-8 text-white ml-6" />
      <ul className="flex space-x-16">
        {items.map((item) => (
          <li key={item.id} className="text-white cursor-pointer text-lg">
            <button onClick={() => scrollToSection(item.id)}>
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
