/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  // const [count, setCount] = useState(0)
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/");
  })

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-black">
        <h1 className="text-4xl font-bold text-cyan-400">
          Tailwind v4 is finally working 
        </h1>
      </div>
    </>
  );
}

export default App
 */

import React, { useState, useRef } from "react";
import "./index.css";
import axios from "axios";
// import {
//   CloudArrowUpIcon,
//   DocumentTextIcon,
//   ChatBubbleBottomCenterTextIcon,
//   SparklesIcon,
//   ArrowRightIcon,
//   CheckCircleIcon,
//   CloudArrowDownIcon,
//   PlayCircleIcon,
//   UserCircleIcon,
// } from "@heroicons/react/24/outline";

import { Icon } from "@iconify/react";

function App() {
  const [file, setFile] = useState(null);
  const [typedText, setTypedText] = useState("");
  const [userQuestion, setUserQuestion] = useState("");
  const [uploadedFileName, setUploadedFileName] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [responses, setResponses] = useState([]);
  const [error, setError] = useState(null);
  const responseContainerRef = useRef(null);

  const API_BASE_URL = "/api"; // Using the Vite Proxy

  const handleFileUpload = async (e) => {
    const uploadedFile = e.target.files[0];
    if (!uploadedFile) return;
    setFile(uploadedFile);
    setError(null);
    setIsLoading(true);

    const formData = new FormData();
    formData.append("file", uploadedFile);

    try {
      const response = await axios.post(`${API_BASE_URL}/upload`, formData);
      setUploadedFileName(response.data.filename);
      setResponses([]);
    } catch (err) {
      setError(`Upload failed: ${err.response?.data?.message || err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerateResponse = async (e) => {
    e.preventDefault();
    if (!userQuestion.trim() || !uploadedFileName) return;

    setError(null);
    setIsLoading(true);
    const formData = new FormData();
    formData.append("user_prompt", userQuestion);

    try {
      const response = await axios.post(`${API_BASE_URL}/generate`, formData);
      setResponses([
        ...responses,
        { question: userQuestion, answer: response.data },
      ]);
      setUserQuestion("");
      setTimeout(
        () =>
          responseContainerRef.current?.scrollIntoView({ behavior: "smooth" }),
        100,
      );
    } catch (err) {
      setError(`Error: ${err.response?.data?.error || err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-page-gradient text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-brand-navy p-1.5 rounded-lg text-white">
              <Icon icon="mage:light-bulb" className="w-6 h-6" />
            </div>
            <span className="bg-linear-to-r from-brand-navy to-brand-blue bg-clip-text text-transparent text-xl font-bold tracking-tight">
              DocuMind
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-dull-text">
            <a href="#" className="hover:text-brand-navy transition-colors">
              Features
            </a>
            <a href="#" className="hover:text-brand-navy transition-colors">
              How It Works
            </a>
            <a href="#" className="hover:text-brand-navy transition-colors">
              Demo
            </a>
            <a href="#" className="hover:text-brand-navy transition-colors">
              Testimonials
            </a>

            <button className="text-brand-navy border border-brand-navy px-8 py-2.5 rounded-xl font-semibold hover:scale-105 transition-transform">
              Login
            </button>

            <button className="bg-brand-navy text-white px-5 py-2.5 rounded-xl font-semibold hover:scale-105 transition-transform">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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

      <div className="relative max-w-5xl mx-auto mt-16 py-7">
        <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-white border-b border-gray-50 px-4 py-3 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>

          {/* Chat Body */}
          <div className="bg-slate-50/50 px-6 py-6 sm:px-8 sm:py-6 flex flex-col gap-4">
            {/* User Message */}
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

            {/* AI Message */}
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
    </div>
  );
}

export default App;
