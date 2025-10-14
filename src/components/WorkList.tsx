"use client";

import { DUMMY_DATA } from "@/dummy-data";
import Link from "next/link";
import { WorkItem } from "./WorkItem";

interface WorkListProps {
  setVideoSrc?: (id: number) => void;
}

export const WorkList = ({ setVideoSrc }: WorkListProps) => {
  return (
    <>
      {DUMMY_DATA.map((item) => (
        <Link key={item.id} href={`/work/${item.slug}`}>
          <WorkItem
            about={item.about}
            time={item.time}
            title={item.title}
            onMouseOver={() => setVideoSrc && setVideoSrc(item.id)}
          />
        </Link>
      ))}
    </>
  );
};
