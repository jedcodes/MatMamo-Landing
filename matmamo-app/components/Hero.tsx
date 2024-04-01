import React from "react";
import Button from "./Button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="max-container padding-container w-full flex flex-col flexCenter gap-10 lg:flex-row">
      <div className="relativ flex-col flex w-full lg:w-1/2">
        <h1 className="mt-10 bold-52 xl:bold-88">
          Waste Less, <br />{" "}
          <span className="text-green-50 inline-block mt-3">Nourish</span> More
          Efficiently.
        </h1>
        <p className="text-slate-gray regular-16 leading-8 mt-6 mb-14  xl:max-w-[520px]'">
          Fight food waste with our app’s smart, sustainable solutions. From
          recipe ideas to inventory tracking and community sharing, making an
          impact is easy. Start making a difference with every meal.
        </p>

        <div className="flex flex-col w-full gap-3 lg:flex-row">
          <Button type="button" title="Sign up" variant="btn_green" />
          <Button
            type="button"
            title="Watch demo"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>
      <div className="relativ flex-1 flex flexCenter">
        <Image
          className="object-contain relative z-10"
          src="/hero-noBg.png"
          alt="Family of three in kitchen"
          width={610}
          height={502}
        />
      </div>
    </section>
  );
};

export default Hero;
