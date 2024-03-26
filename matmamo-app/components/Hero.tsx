import React from "react";

const Hero = () => {
  return (
    <section className="max-container padding-container w-full flex flex-col justify-center gap-20 md:gap-28 lg:py-20 xl:flex-row">
      <div className="flex flex-col flex-1 w-full  xl:w-1/2">
        <h1 className="bold-52 lg:bold-88">Waste Less, Nourish More</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Appen vår bekjemper matsvinn ved å tilby smarte løsninger for
          hverdagslig bærekraft. Med funksjoner som oppskriftsforslag, sporing
          av varebeholdning og fellesskapsutveksling, blir det enkelt og
          meningsfylt å spare mat. Bli med oss for å utgjøre en forskjell, ett
          måltid av gangen.
        </p>
      </div>
    </section>
  );
};

export default Hero;
