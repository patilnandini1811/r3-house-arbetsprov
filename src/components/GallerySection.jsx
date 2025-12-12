import React from "react";
import galleryImage1 from "../assets/preview-house-1.png";
import galleryImage2 from "../assets/preview-house-2.png";
import Button from "./Button";
const GallerySection = () => {
  return (
    <section className="w-full bg-transparent">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="relative">
          <img
            src={galleryImage1}
            alt="Våra hus"
            className="w-full h-auto object-cover"
          />

          <h3 className="absolute top-4 left-4 text-white font-mono text-[20px]">
            Våra hus
          </h3>
          <Button className="absolute bottom-4 right-4 w-[110px] md:w-[126px] bg-white text-black ">
            VÅRA HUS
          </Button>
        </div>

        <div className="relative">
          <img
            src={galleryImage2}
            alt="Tillval"
            className="w-full h-auto object-cover"
          />
          <h3 className="absolute top-4 left-4 text-white font-mono text-[20px]">
            Tillval
          </h3>
          <Button className="absolute bottom-4 right-4 bg-white text-black">
            LÄS MER
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
