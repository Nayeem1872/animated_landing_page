"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Code,
  Palette,
  Smartphone,
  TrendingUp,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const services = [
    { name: "Web Development", icon: Code },
    { name: "UI/UX Design", icon: Palette },
    { name: "Mobile Apps", icon: Smartphone },
    { name: "Digital Marketing", icon: TrendingUp },
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-black" />
              </div>
              <span className="text-2xl font-bold text-white">DevStudio</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Creating digital experiences that inspire and engage. We transform
              ideas into powerful, scalable solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@devstudio.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold text-lg mb-6">
              Our Services
            </h3>
            <ul className="space-y-4">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <li key={index}>
                    <a
                      href="#"
                      className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                    >
                      <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="text-sm">{service.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold text-lg mb-6">
              Stay Updated
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="space-y-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-l-lg text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-black font-medium rounded-r-lg hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 text-sm">
                  Subscribe
                </button>
              </div>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-gray-800/50 border border-gray-700 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 hover:scale-110"
                    >
                      <IconComponent className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 DevStudio. All rights reserved. Built with passion and
              precision.
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 text-sm transition-colors"
              >
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-400 text-black rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
