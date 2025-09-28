import CircularTestimonials from "@/components/circular-testimonials";
import React from "react";

const testimonials = [
  {
    quote:
      "Working with this team transformed our digital presence completely. Their web development expertise and attention to detail resulted in a stunning, high-performing website that exceeded our expectations. Highly recommended!",
    name: "Sarah Johnson",
    designation: "CEO, TechStart Inc.",
    src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The mobile app they developed for us is absolutely phenomenal! The user experience is seamless, and our customer engagement has increased by 300%. Their technical skills and project management are top-notch.",
    name: "Michael Chen",
    designation: "Founder, InnovateLab",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Their UI/UX design work is exceptional! They completely reimagined our product interface, making it intuitive and beautiful. Our user satisfaction scores have never been higher. True design professionals!",
    name: "Emily Rodriguez",
    designation: "Product Manager, DesignCorp",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Our digital marketing results have been incredible since partnering with them. They increased our online visibility by 250% and our conversion rates doubled. Their strategic approach really works!",
    name: "David Thompson",
    designation: "Marketing Director, GrowthCo",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "From concept to deployment, their full-stack development service was flawless. They delivered a robust, scalable solution that handles our growing user base perfectly. Outstanding technical expertise!",
    name: "Lisa Park",
    designation: "CTO, ScaleTech Solutions",
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Testimonial = () => {
  return (
    <div className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="mb-16 text-center">
          <h3 className="mb-4 text-cyan-400 text-sm font-light uppercase tracking-[0.2em]">
            Client Testimonials
          </h3>
          <div className="w-16 h-px bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-6"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here&apos;s what industry leaders
            and successful businesses say about working with us.
          </p>
        </div>

        <section className="relative">
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 p-12 md:p-16 rounded-2xl min-h-[400px] flex flex-wrap gap-6 items-center justify-center relative shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl"></div>
            <div
              className="items-center justify-center relative flex z-10"
              style={{ maxWidth: "1200px" }}
            >
              <CircularTestimonials
                testimonials={testimonials}
                autoplay={true}
                colors={{
                  name: "#ffffff",
                  designation: "#06b6d4",
                  testimony: "#f1f5f9",
                  arrowBackground: "#06b6d4",
                  arrowForeground: "#000000",
                  arrowHoverBackground: "#ffffff",
                }}
                fontSizes={{
                  name: "32px",
                  designation: "18px",
                  quote: "22px",
                }}
              />
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
        </section>

        {/* Stats section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400">
              50+
            </div>
            <div className="text-gray-300 text-sm uppercase tracking-wide">
              Happy Clients
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400">
              100+
            </div>
            <div className="text-gray-300 text-sm uppercase tracking-wide">
              Projects Completed
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400">
              98%
            </div>
            <div className="text-gray-300 text-sm uppercase tracking-wide">
              Client Satisfaction
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400">
              24/7
            </div>
            <div className="text-gray-300 text-sm uppercase tracking-wide">
              Support Available
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
