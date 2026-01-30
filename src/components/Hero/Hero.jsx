import { Icon } from "@iconify/react";

const Hero = () => {
  return (
    <>
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

      <div className="relative max-w-5xl mx-auto py-15">
        <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-white border-b border-gray-50 px-4 py-3 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>

          <div className="bg-slate-50/50 px-6 py-6 sm:px-8 sm:py-6 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="p-2.5 rounded-full bg-blue-100 flex items-center justify-center">
                <Icon
                  icon="icon-park-outline:user"
                  className="w-5 h-5 text-brand-navy"
                />
              </div>

              <div className="bg-slate-200 text-dull-text px-4 py-3 rounded-lg w-full text-sm sm:text-base">
                Can you summarize the key findings from this research paper?
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-brand-navy text-white shadow-md px-4 py-3 rounded-lg w-full text-sm sm:text-base leading-relaxed">
                Based on the document, here are the 5 key findings: 1. AI
                adoption increased by 47% in 2024...
              </div>

              <div className="p-2.5 rounded-full bg-indigo-100 flex items-center justify-center  order-last">
                <Icon
                  icon="mingcute:head-ai-line"
                  className="w-5 h-5 text-brand-navy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
