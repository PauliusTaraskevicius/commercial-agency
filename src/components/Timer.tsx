"use client";

import { useEffect, useState } from "react";

export const Timer = () => {
  const [time, setTime] = useState(new Date());
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="text-background hidden py-1 text-[12.5px] font-bold uppercase lg:block">
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
