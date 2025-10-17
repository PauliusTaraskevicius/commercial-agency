import { VideoCard } from "@/components/VideoCard";
import { DUMMY_DATA } from "@/dummy-data";

import { Titan_One } from "next/font/google";

const titanOne = Titan_One({
  subsets: ["latin"],
  weight: ["400"],
});

const Page = () => {
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
          <div className="col-span-3">PROJECTS</div>
          <div className="col-span-1 col-start-12 flex flex-row justify-end gap-x-4 md:gap-x-7">
            <div>[ GRID ]</div>
            <div>[ LIST ]</div>
          </div>
        </div>
        <div className="relative col-span-12 mt-1 -mb-4 md:-mb-28">
          <div className="relative top-0 left-0 grid h-full w-full grid-cols-12 gap-x-2 gap-y-8 pb-24 md:pb-32 lg:gap-y-16">
            {DUMMY_DATA.map((item) => (
              <VideoCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
