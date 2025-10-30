import { Titan_One } from "next/font/google";

const titanOne = Titan_One({
  subsets: ["latin"],
  weight: ["400"],
});

const Page = () => {
  return (
    <div
      className={`${titanOne.className} mb-20 grid grid-cols-12 gap-x-2 px-2`}
    >
      <div className="col-span-12 pt-20 md:col-span-11 md:pt-28">
        <span className="text-3xl lg:text-[85px]">
          <h1>FOUNDED AND RUN BY COMPREHENSIVE STORYTELLERS.</h1>
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
            Nexum creates commercials, branded content, and other forms of
            moving pictures designed to inspire, engage, and endure. We believe
            every brand has a story worth telling — one that can move people
            when told with authenticity and craft. 
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
            Since our founding in 2025, Nexum has specialized in aligning
            creative vision with strategy — finding the perfect balance between
            concept, budget, ambition, and audience. We manage every stage of
            the production journey, ensuring a seamless process from first idea
            to final frame.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Page;
