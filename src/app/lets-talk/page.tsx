import { Titan_One } from "next/font/google";

const titanOne = Titan_One({
  subsets: ["latin"],
  weight: ["400"],
});

const Page = () => {
  return (
    <div
      className={`${titanOne.className} mb-20 grid grid-cols-12 gap-x-2 px-2 md:mb-28`}
    >
      {" "}
      <div className="col-span-11 py-20 md:py-28">
        <span className="text-5xl sm:text-6xl lg:text-[85px]">
          <h1>
            WE PROVIDE OUR SEVICES WORLDIWDE. <br />
            OUR HOME IS STAVANGER, LITHUANIA.
          </h1>
        </span>
      </div>
      <div className="col-span-12 pt-20 md:col-span-6 md:pt-28">
        <span>
          <p className="mb-1 text-sm">WHAT WE DO</p>
          <p className="mb-1 cursor-pointer text-3xl transition hover:text-black/60 sm:text-4xl xl:text-6xl">
            WINCOMM@MOXEY.LT
          </p>
          <p className="mb-1 text-sm">LETS TALK</p>
          <p className="cursor-pointer text-3xl transition hover:text-black/60 lg:text-6xl">
            063025111
          </p>
        </span>
      </div>
      <div className="col-span-12 pt-10 md:col-span-6 md:mr-[7.5%] md:pt-28">
        <div>
          <span className="text-sm">DROP BY</span>
          <h2 className="cursor-pointer text-3xl transition hover:text-black/60 sm:text-4xl xl:text-6xl">
            SKIRPOR G 15 <br />
            4252 KAUNAS
          </h2>
        </div>
        <div className="grid grid-cols-3 pt-10">
          <div className="">
            <span className="text-sm">FOLLOW US</span>
          </div>
          <div>
            <p className="cursor-pointer text-sm transition hover:text-black/60">
              INSTAGRAM
            </p>
            <p className="cursor-pointer text-sm transition hover:text-black/60">
              LINKEDIN
            </p>
            <p className="cursor-pointer text-sm transition hover:text-black/60">
              TWITTER
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
