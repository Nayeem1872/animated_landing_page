"use client";

import { motion, useAnimate, stagger, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const words = [
  "Hello",
  "Bonjour",
  "Ciao",
  "Olà",
  "やあ",
  "Hallå",
  "Guten tag",
  "হ্যালো",
];

interface PreloaderProps {
  onComplete?: () => void;
}

function Preloader({ onComplete }: PreloaderProps) {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index === words.length - 1) {
      setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => {
          onComplete?.();
        }, 1000);
      }, 1000);
      return;
    }

    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1000 : 150
    );
  }, [index, onComplete]);

  const opacity: Variants = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 0.75,
      transition: { duration: 1, delay: 0.2 },
    },
  };

  const slideUp: Variants = {
    initial: {
      top: 0,
    },
    exit: {
      top: "-100vh",
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1] as const,
        delay: 0.2,
      },
    },
  };

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  } L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

  const curve: Variants = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as const },
    },
    exit: {
      d: targetPath,
      transition: {
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1] as const,
        delay: 0.3,
      },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      animate={isExiting ? "exit" : "initial"}
      className="fixed inset-0 w-screen h-screen flex items-center justify-center bg-black z-[99999999999]"
    >
      {dimension.width > 0 && (
        <>
          <motion.p
            variants={opacity}
            initial="initial"
            animate="enter"
            className="flex items-center text-white text-4xl md:text-5xl lg:text-6xl absolute z-10 font-medium"
          >
            <span className="block w-2.5 h-2.5 bg-white rounded-full mr-2.5"></span>
            {words[index]}
          </motion.p>
          <svg className="absolute top-0 w-full h-[calc(100%+300px)]">
            <motion.path
              variants={curve}
              initial="initial"
              animate={isExiting ? "exit" : "initial"}
              fill="#070b13"
            />
          </svg>
        </>
      )}
    </motion.div>
  );
}

function TextGenerateEffect({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [animate, duration, filter]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
}

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

function DevStudioWelcome({ onComplete }: { onComplete?: () => void }) {
  const [showPreloader, setShowPreloader] = useState(true);

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
    // Directly complete after preloader finishes
    setTimeout(() => {
      onComplete?.();
    }, 300);
  };

  if (showPreloader) {
    return <Preloader onComplete={handlePreloaderComplete} />;
  }

  // Return null or empty div while transitioning
  return null;
}

export default function DevStudioLanding({
  onComplete,
}: {
  onComplete?: () => void;
}) {
  return <DevStudioWelcome onComplete={onComplete} />;
}
