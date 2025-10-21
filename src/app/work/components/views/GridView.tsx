"use client";

import { VideoCard } from "@/components/VideoCard";
import { DUMMY_DATA } from "@/dummy-data";
import Link from "next/link";

export const GridView = () => {
  return (
    <div className="relative col-span-12 mt-1 -mb-4 md:-mb-28">
      <div className="relative top-0 left-0 grid h-full w-full grid-cols-12 gap-x-2 gap-y-8 pb-24 md:pb-32 lg:gap-y-16">
        {DUMMY_DATA.map((item) => (
          <Link
            key={item.id}
            href={`/work/${item.slug}`}
            className="group relative col-span-12 cursor-pointer sm:col-span-6 lg:col-span-4 2xl:col-span-3"
          >
            <VideoCard key={item.id} {...item} />
          </Link>
        ))}
      </div>
    </div>
  );
};
