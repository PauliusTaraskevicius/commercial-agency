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
      <div className="col-span-12 pt-20 md:col-span-11 md:pt-28">
        <span className="text-3xl lg:text-[85px]">
          <h1>
            FOUNDED AND RUN BY 
            COMPREHENSIVE STORYTELLERS.
          </h1>
        </span>
      </div>
      <div className="col-span-12 pt-20 md:col-span-6 md:pt-28">
        <span>
          <p className="text-sm">WHAT WE DO</p>
        </span>
      </div>
      <div className="col-span-12 pt-10 md:col-span-6 md:mr-[7.5%] md:pt-28">
        <div>
          <h2 className="text-4xl">
            Moxey makes commercials, branded content and other forms of moving
            pictures. We merge creative insight with production expertise to
            make inspired narratives from the ground up.
          </h2>
        </div>
      </div>
      <div className="col-span-12 pt-20 md:col-span-6 md:pt-28">
        <span>
          <p className="text-sm">SERVICES</p>
        </span>
      </div>
      <div className="col-span-12 pt-10 md:col-span-6 md:mr-[7.5%] md:pt-28">
        <div>
          <h2 className="text-2xl">
            Since its inception in 2016, Moxey has always taken pride in finding
            the perfect match between creative concept, budget, level of
            ambition and target audience. From concept writing to casting calls,
            from location scouting to post-production, we handle every aspect of
            the filmmaking process with care and attention to detail.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Page;
