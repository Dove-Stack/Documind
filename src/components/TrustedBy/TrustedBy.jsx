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

const TrustedBy = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h1 className="text-3xl font-extrabold tracking-tight mb-6 p-3 text-brand-gradient">
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

      <div>
        <img src={DHL} alt="" />
        <img src={MoniePoint} alt="" />
        <img src={TechRadar} alt="" />
        <img src={Chowdeck} alt="" />
        <img src={SP} alt="" />
      </div>
    </div>
  );
};

export default TrustedBy;
