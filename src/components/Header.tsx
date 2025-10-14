import Link from "next/link";
import { Timer } from "./Timer";

export const Header = () => {
  return (
    <nav className="fixed top-0 left-0 z-[99999] w-full px-2 py-1">
      <div className="grid grid-cols-12 gap-x-1 md:gap-x-2">
        <div className="col-span-4 pt-1 md:col-span-2" />
        <div className="col-span-3 md:col-span-2">
          <Link
            href="/work"
            className="hover:text-background/50 text-background font-bold tracking-[0.02em] whitespace-nowrap uppercase transition"
          >
            Work
          </Link>
        </div>
        <div className="col-span-3 md:col-span-2">
          <Link
            href="/about"
            className="hover:text-background/50 text-background font-bold tracking-[0.02em] whitespace-nowrap uppercase transition"
          >
            About
          </Link>
        </div>
        <div className="max-md:col-span-2 max-md:flex max-md:justify-end md:col-span-2">
          <Link
            href="/lets-talk"
            className="hover:text-background/50 text-background font-bold tracking-[0.02em] whitespace-nowrap uppercase transition"
          >
            Let&apos;s talk
          </Link>
        </div>
        <div className="text-right max-md:hidden md:col-span-2 md:col-start-11">
          <span className="inline-block w-[45px] text-left whitespace-nowrap">
            <Timer />
          </span>
        </div>
      </div>
    </nav>
  );
};
