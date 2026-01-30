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
import TrustedBy from "./components/TrustedBy/TrustedBy";

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
      <Navbar />

      <Hero />

      <TrustedBy /> 
    </div>
  );
}

export default App;
