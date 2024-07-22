import React, { useState, useEffect } from "react";
import { Taskbar } from "./Taskbar";
import { BlogPosts } from "./BlogPosts";
import backgroundLG from "../assets/background-lg.png";
import backgroundMD from "../assets/background-md.jpg";
import backgroundSM from "../assets/background-sm.jpg";

export const HomePage = () => {
  const [style, setStyle] = useState({});

  const styleLarge = {
    backgroundImage: `url("${backgroundLG}")`,
    paddingBottom: "15rem",
  };

  const styleMedium = {
    backgroundImage: `url("${backgroundMD}")`,
    paddingBottom: "15rem",
    paddingLeft: "7rem",
  };

  const styleSmall = {
    backgroundImage: `url("${backgroundSM}")`,
    paddingBottom: "15rem",
    paddingLeft: "7rem",
  };

  useEffect(() => {
    const updateStyle = () => {
      if (window.innerWidth >= 1024) {
        setStyle(styleLarge);
      } else if (window.innerWidth >= 768) {
        setStyle(styleMedium);
      } else {
        setStyle(styleSmall);
      }
    };

    updateStyle(); // Initial check
    window.addEventListener("resize", updateStyle);

    return () => window.removeEventListener("resize", updateStyle);
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="App">
      <header
        id="home"
        className="min-h-screen flex  justify-center bg-gray-900 text-white  bg-no-repeat bg-cover "
        style={style}
      >
        <div className="flex flex-col items-center justify-center pb-20rem">
          <h1 className="text-4xl lg:text-5xl md:text-5xlfont-bold mb-4">
            Shadowed Histories
          </h1>
          <button
            className="transition-colors duration-500 text-yellow-300 px-4 py-2 border-b-4 border-[#ffe47a]  hover:text-black hover:bg-yellow-400 "
            onClick={() =>
              document
                .getElementById("blog-section")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            View Blog Posts
          </button>
        </div>
      </header>
      <Taskbar atHome={true} />
      <BlogPosts />
    </div>
  );
};
