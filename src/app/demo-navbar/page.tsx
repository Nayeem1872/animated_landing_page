"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "@/components/navbar/resizable-navbar";
import { useState } from "react";

export default function NavbarDemo() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar>
        <NavBody visible={visible}>
          <NavbarLogo />
          <NavItems items={navItems} onItemClick={() => setVisible(false)} />
          <NavbarButton href="#" variant="primary">
            Get Started
          </NavbarButton>
        </NavBody>

        <MobileNav visible={visible}>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
          >
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="w-full px-4 py-2 text-left text-neutral-600 dark:text-neutral-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <NavbarButton
              href="#"
              variant="primary"
              className="w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </NavbarButton>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      <div className="pt-32 p-8">
        <h1 className="text-4xl font-bold mb-4">Navbar Demo</h1>
        <p className="text-lg">
          This page demonstrates the Resizable Navbar from Aceternity UI.
        </p>
        <p className="mt-4">Scroll down to see the navbar behavior change.</p>

        <div className="mt-8 space-y-4">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="p-4 bg-gray-100 dark:bg-gray-900 rounded-lg"
            >
              <p>Content section {i + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
