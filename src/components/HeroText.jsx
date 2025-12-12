import React from "react";
import Button from "./Button";

const HeroText = () => {
  return (
    <>
      <div className="absolute top-[80px] md:top-[120px]left-4 right-4 md:right-[60px] max-w-[340px] text-white space-y-4 ">
        <h1 className="font-mono font-medium text-[28px] md:text-[34px] md:leading-none">
          Unika hus i <br /> en unik miljö
        </h1>
        <p className="font-sans text-[16px] leading-relaxed text-white/80">
          Lorem ipsum dolor sit amet, har consectetur adipiscing elit. Nullam
          sit amet tempor, har fringilla nunc vitae, laoreet velit. Suspendisse
          eu tortor eu odio dapibus mahadev molestie nec quis ipsum.
        </p>

        <Button className="bg-black text-white">LÄS MER</Button>
      </div>
    </>
  );
};

export default HeroText;
