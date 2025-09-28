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
import Hero1 from "./Hero";
import Hero2 from "./Hero2";
import Hero3 from "./Hero3";
import Testimonial from "./Testimonial";
import Footer from "@/components/Footer";
import DevStudioLanding from "./IntroPage";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Docs", link: "https://nextjs.org/docs" },
    { name: "Learn", link: "https://nextjs.org/learn" },
    {
      name: "Examples",
      link: "https://vercel.com/templates?framework=next.js",
    },
  ];

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  if (showIntro) {
    return <DevStudioLanding onComplete={handleIntroComplete} />;
  }

  return (
    <div className="font-sans min-h-screen ">
      <Navbar>
        <NavBody visible={visible}>
          <NavbarLogo />
          <NavItems items={navItems} onItemClick={() => setVisible(false)} />
          <NavbarButton
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            variant="primary"
          >
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

          <MobileNavMenu isOpen={mobileMenuOpen}>
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="w-full px-4 py-2 text-left text-white/80 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <NavbarButton
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              variant="primary"
              className="w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </NavbarButton>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Testimonial />
      <Footer />
    </div>
  );
}
