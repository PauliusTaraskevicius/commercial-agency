"use client";
import { useState } from "react";
import { LandingVideo } from "@/components/LandingVideo";
import { WorkItem } from "@/components/WorkItem";
import { DUMMY_DATA } from "@/dummy-data";
import Link from "next/link";
import { MainTitleHeader } from "@/components/MainTitleHeader";

export default function Home() {
  const [videoSrc, setVideoSrc] = useState<number>(1);

  function handleVideoBackground(videoId: number) {
    switch (videoId) {
      case 1:
        return process.env.NEXT_PUBLIC_VIDEO_HILLS!;
      case 2:
        return process.env.NEXT_PUBLIC_VIDEO_DESERT!;
      case 3:
        return process.env.NEXT_PUBLIC_VIDEO_OCEAN!;
      case 4:
        return process.env.NEXT_PUBLIC_VIDEO_VESSEL!;
      case 5:
        return process.env.NEXT_PUBLIC_VIDEO_WIND!;
      case 6:
        return process.env.NEXT_PUBLIC_VIDEO_WAVES!;
      default:
        return process.env.NEXT_PUBLIC_VIDEO_WAVES!;
    }
  }

  const sourceVid = handleVideoBackground(videoSrc);

  return (
    <>
      <LandingVideo src={sourceVid} />
      <div className="z-10 grid h-full grid-cols-12 gap-x-2 px-2">
        <div className="col-span-4 flex flex-1 items-center md:col-span-2">
          <MainTitleHeader />
        </div>

        <div className="col-span-8 flex flex-col justify-evenly md:col-span-2">
          {DUMMY_DATA.map((item) => (
            <Link key={item.id} href={`/work/${item.slug}`}>
              <WorkItem
                about={item.about}
                time={item.time}
                title={item.title}
                onMouseOver={() => setVideoSrc(item.id)}
              />
            </Link>
          ))}
        </div>

        <div className="font-exposure relative -z-[10] col-span-4 col-start-9 flex max-w-[430px] items-center text-[32px] leading-[1.125] tracking-wide max-md:hidden">
          <span className="text-background flex items-center text-3xl font-bold tracking-tight md:text-5xl">
            Inspired narrative from the ground up.
          </span>
        </div>
      </div>
    </>
  );
}
