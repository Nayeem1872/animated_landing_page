import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps {
  text?: string;
  href?: string;
  className?: string;
  onClick?: () => void;
  primary?: boolean;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", href, className, onClick, primary, ...props }, ref) => {
  const baseClasses = cn(
    "group relative min-w-56 cursor-pointer overflow-hidden rounded-full border px-8 py-3 text-center font-semibold inline-block",
    primary
      ? "bg-white/90 border-white/50 text-gray-800 hover:bg-white"
      : "bg-white/70 border-white/30 text-gray-700 hover:bg-white/90",
    className
  );

  const content = (
    <>
      <span className="inline-block transition-all duration-300 group-hover:opacity-0">
        {text}
      </span>
      <div className="absolute top-0 z-10 flex h-full w-full items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
        <span>{text}</span>
        <ArrowRight className="w-4 h-4" />
      </div>
      <div
        className={cn(
          "absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8]",
          primary ? "bg-gray-100" : "bg-gray-50"
        )}
      ></div>
    </>
  );

  if (href) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={baseClasses}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      onClick={onClick}
      className={baseClasses}
      {...props}
    >
      {content}
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
