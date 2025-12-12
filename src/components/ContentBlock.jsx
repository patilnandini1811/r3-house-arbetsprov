import React from "react";

const ContentBlock = () => {
  return (
    <section className="w-full bg-[#1C1C1C] text-white py-16 px-10">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="font-mono font-medium text-[34px] mb-8">
          Lorem ipsum dolor
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <p className="font-sans text-[15px] text-white leading-[25px] font-light text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
            erat tempor, fringilla nunc vitae, laoreet velit. Suspendisse eu
            odio.
            <br />
            <br />
            dapibus molestie nec quis ipsum. Pellentesque pretium finibus
            vulputate. Praesent et urna ultricies, varius ipsum eget, iaculis
            ante. Har quis mi tempus har mahadev lobortis cursus. Etiam vel
            sollicitudin elit, nec fringilla nibh. Aenean convallis enim justo,
            nec lobortis velit molestie vitae. Integer ac erat iaculis, blandit
            orci fermentum, ullamcorper augue. Suspendisse vel massa
            sollicitudin, varius lectus eu, rhoncus nisi. Fusce ullamcorper diam
            at lectus cursus efficitur.
          </p>

          <p className="font-sans text-[15px] text-white leading-[25px] font-light text-justify">
            Morbi ornare sagittis dui, at dictum nulla bibendum non. Nullam
            rhoncus quam metus, id bibendum justo ultricies et. Integer nec nisl
            turpis. Nunc har pulvinar urna. Duis mattis har mahadev semper. Nam
            sollicitudin odio et urna consectetur, dignissim tempor eros
            dapibus. Duis a tortor et mauris egestas interdum. Vivamus sed
            tortor ultricies, efficitur har har mahadev et, pulvinar ligula. Ut
            ac rhoncus erat, eget rhoncus neque. Fusce eu fermentum est. Nam
            fermentum tincidunt est, eget tempus ex convallis nec. Ut felis
            nulla, consequat ac lorem quis, dapibus cursus magna. Nunc sed lacus
            nullores.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentBlock;
