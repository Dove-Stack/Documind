import React from "react";
import {
  Chowdeck,
  CoveUni,
  DHL,
  MoniePoint,
  SP,
  TechRadar,
  UniLag,
  UniLorin,
} from "../../assets/assets";

const brands = [
  { src: DHL, alt: "DHL" },
  { src: MoniePoint, alt: "MoniePoint" },
  { src: TechRadar, alt: "TechRadar" },
  { src: Chowdeck, alt: "Chowdeck" },
  { src: SP, alt: "S&P" },
];

const TrustedBy = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 mb-10">
      <h1 className="text-xl text-center font-medium tracking-tight mb-6 p-3 text-brand-gradient">
        Trusted by students and professionals at
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-around gap-6 md:gap-10 w-full px-4 md:px-0">
        <div className="flex items-center gap-3">
          <img
            src={UniLag}
            alt="University of Lagos"
            className="w-8 h-8 object-contain"
          />
          <p className="text-slate-text font-semibold text-center md:text-left">
            University of Lagos
          </p>
        </div>

        <div className="flex items-center gap-3">
          <img
            src={CoveUni}
            alt="Covenant University"
            className="w-8 h-8 object-contain"
          />
          <p className="text-slate-text font-semibold text-center md:text-left">
            Covenant University
          </p>
        </div>

        <div className="flex items-center gap-3">
          <img
            src={UniLorin}
            alt="University of Ilorin"
            className="w-8 h-8 object-contain"
          />
          <p className="text-slate-text font-semibold text-center md:text-left">
            University of Ilorin
          </p>
        </div>
      </div>

      <div className="flex flex-row mt-16  justify-center md:justify-start gap-3">
        <div className="flex -space-x-4">
          {brands.map((brand, brndKy) => (
            <img
              key={brndKy}
              src={brand.src}
              alt={brand.alt}
              className="w-9 h-9 md:w-11 md:h-11 object-contain border-2 border-white rounded-full bg-white shadow-sm"
            />
          ))}
        </div>
        <p className="flex items-center justify-center text-slate-text font-semibold">
          Professionals
        </p>
      </div>
    </div>
  );
};

export default TrustedBy;
