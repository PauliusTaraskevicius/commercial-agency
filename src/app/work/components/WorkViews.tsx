"use client";

import { useState } from "react";
import { Titan_One } from "next/font/google";
import { cn } from "@/lib/utils";
import { GridView } from "./views/GridView";
import { ListView } from "./views/ListView";

const titanOne = Titan_One({
  subsets: ["latin"],
  weight: ["400"],
});

export const WorkViews = () => {
  const [gridView, setGridView] = useState(true);
  const [listView, setListView] = useState(false);

  const handleGridView = () => {
    setGridView(true);
    setListView(false);
  };

  const handleListView = () => {
    setListView(true);
    setGridView(false);
  };

  return (
    <div className="flex-1">
      <div className="mb-20 grid grid-cols-12 gap-x-2 px-2 md:mb-28">
        <div className="col-span-12 pt-20 md:col-span-11 md:pt-28">
          <span
            className={` ${titanOne.className} text-3xl leading-1 lg:text-8xl lg:leading-[60px]`}
          >
            EVERY STORY SHOULD CAPTIVATE THE RIGHT AUDIENCE JUST RIGHT.
          </span>
        </div>
        <div className="col-span-12 grid grid-cols-12 gap-x-2 pt-32 md:pt-64">
          <div className="col-span-3 text-sm">PROJECTS</div>
          <div className="col-span-1 col-start-12 flex flex-row justify-end gap-x-4 md:gap-x-7">
            <div
              onClick={handleGridView}
              className={cn(
                "is-active cursor-pointer text-sm whitespace-nowrap opacity-30 transition-opacity duration-500 [&.is-active]:opacity-100",
                gridView && "font-semibold",
              )}
            >
              [ GRID ]
            </div>
            <div
              onClick={handleListView}
              className={cn(
                "is-active cursor-pointer text-sm whitespace-nowrap opacity-30 transition-opacity duration-500 [&.is-active]:opacity-100",
                listView && "font-semibold",
              )}
            >
              [ LIST ]
            </div>
          </div>
        </div>
        {gridView && <GridView />}
        {listView && <ListView />}
      </div>
    </div>
  );
};
