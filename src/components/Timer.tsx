"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const Timer = () => {
  const [time, setTime] = useState(new Date());
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const path = usePathname();

  const isNotHome = path !== "/";

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={cn(
        "text-background hidden py-1 text-[11px] font-bold uppercase lg:block",
        isNotHome && "text-black",
      )}
    >
      {time
        .toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
        .replace(/AM|PM/, "")}
    </div>
  );
};
