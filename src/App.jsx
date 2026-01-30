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
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

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
      <Navbar />
      {/* Hero Section */}

      <Hero />

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
