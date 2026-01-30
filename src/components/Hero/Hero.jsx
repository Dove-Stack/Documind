import { Icon } from "@iconify/react";
import React from "react";


const Hero = () => {
  return (
    <header className="pt-16 pb-12 px-4 text-center relative overflow-hidden">
      <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-page-gradient border border-sparkle-border text-brand-navy text-xs font-bold mb-6">
        <Icon icon="heroicons:sparkles-20-solid" className="w-5 h-5" />
        AI-Powered Research Assistant
      </div>

      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 p-3 bg-linear-to-b from-brand-navy to-brand-blue bg-clip-text text-transparent">
        Transform Your Documents <br />
        Into Actionable Insights
      </h1>

      <p className="max-w-2xl mx-auto text-lg text-dull-text mb-10 leading-relaxed">
        Upload any document or text and let DocuMind's advanced AI analyze,
        summarize, and answer your questions instantly. Research made simple.
      </p>

      <div className="flex flex-col items-center sm:flex-row gap-5 justify-center">
        <button className="bg-brand-navy inline-flex items-center py-4 px-8 text-white rounded-md">
          <Icon
            icon="heroicons-outline:cloud-download"
            className="w-5 h-5 mr-2"
          />
          Start Analyzing Now
        </button>

        <button className="bg-white inline-flex items-center py-4 px-8 rounded-md text-dull-text outline outline-dull-text">
          <Icon icon="octicon:play-16" className="w-5 h-5 mr-2" />
          Watch Demo
        </button>
      </div>
    </header>
  );
};

export default Hero;
