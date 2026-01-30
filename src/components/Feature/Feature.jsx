import { Icon } from "@iconify/react";
import React from "react";
import { featuresData } from "../../assets/assets";

const Feature = () => {
  return (
    <div className="flex flex-col gap-1 mt-10 items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-2">
        <h3 className="text-xl font-medium tracking-tight mb-1 text-center  text-brand-gradient">
          FEATURES
        </h3>
        <h2 className="text-4xl font-semibold tracking-tight text-center text-brand-navy">
          Everything You Need for Smarter Research
        </h2>
        <p className="text-sm w-4/6 text-center text-slate-text">
          DocuMind combines powerful AI technology with an intuitive interface
          to transform how you work with documents.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="group p-8 rounded-2xl bg-white/50 shadow-sm transition-alll duration-300"
          >
            <div
              className={`inline-flex p-3 rounded-xl mb-6 ${feature.bgColor}`}
            >
              <Icon
                icon={feature.icon}
                // className="w-6 h-6 text-feature-upload"
                className={`w-6 h-6 ${feature.iconColor}`}
              ></Icon>
            </div>

            <p className=" font-semibold text-brand-navy mb-3">
              {feature.title}
            </p>

            <span className="text-sm text-slate-text leading-relaxed">
              {feature.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
