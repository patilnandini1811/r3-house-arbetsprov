import React from "react";

const Footer = () => {
  return (
    <section className="relative w-full bg-[#1C1C1C] text-white py-16 px-10 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0">
        <div className="font-sans space-y-4 text-[15px] leading-[15px] font-light text-white/60">
          <p>Våra hus</p>
          <p>Tillval</p>
          <p>Hållbarhet</p>
        </div>
        <div className="font-sans text-[15px] leading-[25px] font-light text-white/70 max-w-[360px] ml-auto">
          <p>
            Morbi ornare sagittis dui, at dictum
            <br />
            nulla bibendum non. Nullam
            <br />
            rhoncus quam metus, id bibendum
            <br />
            justo ultricies et. Integer nec nisl
            <br />
            turpis. Nunc eget pulvinar urna.
          </p>
        </div>
      </div>
      <div className="absolute inset-0 top-[40px] flex justify-center pointer-events-none z-0">
        <h1 className="text-[260px] tracking-[20px] text-white/3 select-none">
          House
        </h1>
      </div>
    </section>
  );
};

export default Footer;
