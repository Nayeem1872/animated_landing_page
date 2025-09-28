// import { HoverSlider,
//   HoverSliderImage,
//   HoverSliderImageWrap,
//   TextStaggerHover } from "@/components/blocks/animated-slideshow"

import {
  HoverSlider,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover,
} from "@/components/animated-slideshow";

const SLIDES = [
  {
    id: "slide-1",
    title: "frontend dev",
    imageUrl:
      "https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?q=80&w=2486&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "slide-2",
    title: "backend dev",
    imageUrl:
      "https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "slide-6",
    title: "UI UX design",
    imageUrl:
      "https://images.unsplash.com/photo-1688733720228-4f7a18681c4f?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "slide-3",
    title: "video editing",
    imageUrl:
      "https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "slide-4",
    title: "SEO optimization",
    imageUrl:
      "https://images.unsplash.com/photo-1726066012698-bb7a3abce786?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Hero2 = () => {
  return (
    <div className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="mb-12 text-center">
          <h3 className="mb-4 text-cyan-400 text-sm font-light uppercase tracking-[0.2em]">
            Our Expertise
          </h3>
          <div className="w-16 h-px bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-6"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technologies We Master
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore our comprehensive range of development services and
            technologies
          </p>
        </div>

        <HoverSlider className="min-h-[70vh] place-content-center">
          <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Image on the left */}
            <HoverSliderImageWrap className="w-80 h-80 md:w-[450px] md:h-[350px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 order-1 md:order-1">
              {SLIDES.map((slide, index) => (
                <HoverSliderImage
                  key={slide.id}
                  index={index}
                  imageUrl={slide.imageUrl}
                  src={slide.imageUrl}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              ))}
            </HoverSliderImageWrap>

            {/* Text on the right */}
            <div className="flex flex-col space-y-4 md:space-y-5 flex-1 min-w-[300px] order-2 md:order-2">
              {SLIDES.map((slide, index) => (
                <TextStaggerHover
                  key={slide.title}
                  index={index}
                  className="cursor-pointer text-2xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tighter text-gray-200 hover:text-white transition-colors duration-300 hover:scale-105 transform"
                  text={slide.title}
                />
              ))}
            </div>
          </div>
        </HoverSlider>
      </div>
    </div>
  );
};

export default Hero2;
