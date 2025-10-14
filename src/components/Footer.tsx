import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="relative z-[99999]">
      <div className="w-full px-2 py-1">
        <div className="grid grid-cols-12 gap-x-1 md:gap-x-2">
          <div className="col-span-4 md:col-span-2" />
          <div className="max-md:hidden md:col-span-2">
            <Link
              href="https://moxey.no/lets-talk/"
              className="default-text-hover hover:text-background/50 text-background font-bold tracking-[0.02em] whitespace-nowrap uppercase"
              target=""
            >
              {" "}
              Stavanger – No{" "}
            </Link>
          </div>
          <div className="col-span-4 md:col-span-2">
            {" "}
            <Link
              href="mailto:hello@moxey.no"
              className="default-text-hover hover:text-background/50 text-background font-bold tracking-[0.02em] whitespace-nowrap uppercase"
              target=""
            >
              {" "}
              hello@moxey.no{" "}
            </Link>
          </div>
          <div className="col-span-4 max-md:text-right md:col-span-2">
            {" "}
            <Link
              href="tel:+47%20916%2099%20927"
              className="default-text-hover hover:text-background/50 text-background font-bold tracking-[0.02em] whitespace-nowrap uppercase"
              target=""
            >
              {" "}
              +47 916 99 927{" "}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
