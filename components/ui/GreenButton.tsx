"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface GreenButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "dark";
  className?: string;
  type?: "button" | "submit";
}

const MotionComponent = motion.create("button");
const MotionLink = motion.create(Link);

export default function GreenButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}: GreenButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 cursor-pointer whitespace-nowrap";

  const variants = {
    primary:
      "bg-gradient-to-r from-[#3DD68C] to-[#27A37B] text-[#0D1B3E] hover:from-[#2bc478] hover:to-[#1a8a60] shadow-[0_10px_25px_rgba(61,214,140,0.2)] hover:shadow-[0_15px_35px_rgba(61,214,140,0.4)]",
    outline:
      "border-2 border-[#3DD68C] text-[#3DD68C] hover:bg-gradient-to-r hover:from-[#3DD68C] hover:to-[#27A37B] hover:text-[#0D1B3E] hover:border-transparent",
    dark: "bg-gradient-to-br from-[#1A3A4A] to-[#0D1B3E] text-white hover:from-[#1A2D5A] hover:to-[#0A1128] shadow-lg hover:shadow-xl",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <MotionLink
        href={href}
        className={classes}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <MotionComponent
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </MotionComponent>
  );
}
