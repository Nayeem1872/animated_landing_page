import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import React from "react";

const content = [
  {
    title: "Web Development",
    description:
      "Create stunning, responsive websites and web applications using modern technologies. From frontend interfaces to backend systems, we build scalable solutions that deliver exceptional user experiences and drive business growth.",
    content: (
      <div className="flex h-full w-full items-center justify-center rounded-2xl overflow-hidden shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3"
          className="h-full w-full object-cover"
          alt="Web development workspace"
        />
      </div>
    ),
  },
  {
    title: "Mobile App Development",
    description:
      "Build native and cross-platform mobile applications that engage users and provide seamless experiences. Our mobile solutions are optimized for performance, security, and user satisfaction across iOS and Android platforms.",
    content: (
      <div className="flex h-full w-full items-center justify-center rounded-2xl overflow-hidden shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
          className="h-full w-full object-cover"
          alt="Mobile app development"
        />
      </div>
    ),
  },
  {
    title: "UI/UX Design",
    description:
      "Design intuitive and visually appealing user interfaces that enhance user experience. Our design process focuses on user research, wireframing, prototyping, and creating designs that are both beautiful and functional.",
    content: (
      <div className="flex h-full w-full items-center justify-center rounded-2xl overflow-hidden shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3"
          className="h-full w-full object-cover"
          alt="UI/UX design process"
        />
      </div>
    ),
  },
  {
    title: "Digital Marketing",
    description:
      "Boost your online presence with comprehensive digital marketing strategies. From SEO optimization to social media management, we help businesses reach their target audience and achieve measurable growth in the digital landscape.",
    content: (
      <div className="flex h-full w-full items-center justify-center rounded-2xl overflow-hidden shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3"
          className="h-full w-full object-cover"
          alt="Digital marketing analytics"
        />
      </div>
    ),
  },
];

const Hero3 = () => {
  return (
    <div className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="mb-16 text-center">
          <h3 className="mb-4 text-cyan-400 text-sm font-light uppercase tracking-[0.2em]">
            Our Services
          </h3>
          <div className="w-16 h-px bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-6"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What We Do Best
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <StickyScroll content={content} />
        </div>
      </div>
    </div>
  );
};

export default Hero3;
