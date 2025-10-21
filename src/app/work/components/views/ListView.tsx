"use client";
import { DUMMY_DATA } from "@/dummy-data";
import Link from "next/link";
import { Titan_One } from "next/font/google";
import { VideoCard } from "@/components/VideoCard";

const titanOne = Titan_One({
  subsets: ["latin"],
  weight: ["400"],
});

export const ListView = () => {
  return (
    <div className="relative col-span-12 mt-1 -mb-4 md:-mb-28">
      <div className="is-active top-0 left-0 mt-2 flex flex-col [&.is-changing]:absolute">
        {DUMMY_DATA.map((item) => (
          <div key={item.id} className="relative mb-4">
            <div className="absolute top-0 left-0 z-10 h-full w-full md:hidden"></div>
            <Link
              href={`/work/${item.slug}`}
              className="group relative block cursor-pointer pb-4 [&>*]:pointer-events-none"
            >
              <div className="absolute top-1/2 left-0 z-20 grid h-0 w-full grid-cols-12 gap-x-2 opacity-0 transition-opacity duration-500 md:group-hover:opacity-100">
                <div className="z-10 col-span-8 col-start-5 aspect-[16/9] -translate-y-1/2 md:col-span-4 md:col-start-5">
                  <VideoCard {...item} autoPlay={true} />
                </div>
              </div>
              <span
                className={`${titanOne.className} text-[34px] leading-[0.9] font-semibold uppercase md:text-[58px]`}
              >
                {item.title}
              </span>
              <div className="grid grid-cols-12 gap-x-2 uppercase opacity-30">
                <span className="relative col-span-7 md:col-span-4 2xl:col-span-2">
                  <span className="absolute top-0 left-0 transition-opacity duration-500 group-hover:opacity-0">
                    [ {item.about} ]
                  </span>
                  <span className="absolute top-0 left-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {item.time}
                  </span>
                </span>
                <span className="relative col-span-5 md:col-span-4 2xl:col-span-2">
                  <span className="absolute top-0 left-0 transition-opacity duration-500 group-hover:opacity-0">
                    {item.date}
                  </span>
                  <span className="absolute top-0 left-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    [ view ]
                  </span>
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
