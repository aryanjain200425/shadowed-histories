import React from "react";
import { useLocation } from "react-router-dom";
import { Taskbar } from "./Taskbar";
import posts from "../assets/allPosts.json";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

export const Post = () => {
  const location = useLocation();

  const {
    title,
    date,
    imagePath,
    introduction,
    subheading_1,
    content_1,
    subheading_2,
    content_2,
  } = location.state || {};

  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const image = await import(`${imagePath}`);
        setImageSrc(image.default);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };
    loadImage();
  }, [imagePath]);

  const keys = Object.keys(posts);

  var randPost = Math.floor(Math.random() * keys.length);
  const first = posts[randPost];
  randPost = Math.floor(Math.random() * keys.length);
  const second = posts[randPost];
  randPost = Math.floor(Math.random() * keys.length);
  const third = posts[randPost];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Taskbar />
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto py-12 px-6">
          <header className="mb-12">
            <h1 className="text-4xl font-bold mb-4"> {title} </h1>
            <p className="text-gray-400">Published on {date}</p>
          </header>

          <div className="mb-12">
            <img
              src={imageSrc}
              alt="Blog post illustration"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <article className="prose prose-lg prose-invert">
            <p>{introduction}</p>
            <h2 className="mt-6 text-gray-400">{subheading_1}</h2>
            <p>{content_1}</p>
            <h2 className="mt-6 text-gray-400">{subheading_2}</h2>
            <p>{content_2}</p>
          </article>

          <footer className="mt-12 border-t border-gray-700 pt-8">
            <h2 className="text-2xl font-semibold mb-4">Other Posts</h2>

            <ul className="space-y-4">
              {/* First Link */}
              <div>
                <Link
                  to={`/shadowed-histories/Post`}
                  state={{
                    title: first.title,
                    date: first.date,
                    imagePath: first.imagePath,
                    introduction: first.introduction,
                    subheading_1: first.subheading_1,
                    content_1: first.content_1,
                    subheading_2: first.subheading_2,
                    content_2: first.content_2,
                  }}
                  onClick={scrollToTop}
                >
                  <li className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700">
                    <a className="text-xl font-semibold text-blue-400 hover:underline">
                      {first.title}
                    </a>
                    <p className="text-gray-400 mt-2">{first.description}</p>
                  </li>
                </Link>
              </div>

              {/* Second Link */}
              <div>
                <Link
                  to={`/shadowed-histories/Post`}
                  state={{
                    title: second.title,
                    date: second.date,
                    imagePath: second.imagePath,
                    introduction: second.introduction,
                    subheading_1: second.subheading_1,
                    content_1: second.content_1,
                    subheading_2: second.subheading_2,
                    content_2: second.content_2,
                  }}
                  onClick={scrollToTop}
                >
                  <li className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700">
                    <a className="text-xl font-semibold text-blue-400 hover:underline">
                      {second.title}
                    </a>
                    <p className="text-gray-400 mt-2">{second.description}</p>
                  </li>
                </Link>
              </div>

              {/* Third Link */}
              <div>
                <Link
                  to={`/shadowed-histories/Post`}
                  state={{
                    title: third.title,
                    date: third.date,
                    imagePath: third.imagePath,
                    introduction: third.introduction,
                    subheading_1: third.subheading_1,
                    content_1: third.content_1,
                    subheading_2: third.subheading_2,
                    content_2: third.content_2,
                  }}
                  onClick={scrollToTop}
                >
                  <li className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700">
                    <a className="text-xl font-semibold text-blue-400 hover:underline">
                      {third.title}
                    </a>
                    <p className="text-gray-400 mt-2">{third.description}</p>
                  </li>
                </Link>
              </div>
            </ul>
          </footer>
        </div>
      </div>
    </>
  );
};
