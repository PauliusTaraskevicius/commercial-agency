"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export const MainTitleHeader = () => {
  const path = usePathname();
  const isHome = path === "/";

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Link href="/">
      <motion.div
        layoutId="moxey-logo"
        initial={false}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 0.6,
        }}
        className="cursor-pointer"
      >
        <div className="relative pr-4">
          <h1
            className={cn(
              "text-background top-0 text-2xl font-bold lg:text-4xl",
              !isHome && "text-black",
            )}
          >
            MOXEY
          </h1>
          <span
            className={cn(
              "absolute -top-1 right-0 text-sm text-white lg:text-lg",
              !isHome && "text-black",
            )}
          >
            &reg;
          </span>
        </div>
      </motion.div>
    </Link>
  );
};
