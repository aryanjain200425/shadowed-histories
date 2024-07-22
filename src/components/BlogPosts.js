import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import posts from "../assets/allPosts.json";

export const BlogPosts = () => {
  return (
    <section id="blog-section" className="bg-gray-800 h-max  py-20">
      <h2 className="text-4xl font-bold mb-6 text-center text-slate-50">
        Blog Posts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-6">
        {posts.map((post, index) => (
          <div key={post.key} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-700 pb-4 ">{post.description}</p>
            <Link
              to={`/shadowed-histories/Post`}
              state={{
                title: post.title,
                date: post.date,
                imagePath: post.imagePath,
                introduction: post.introduction,
                subheading_1: post.subheading_1,
                content_1: post.content_1,
                subheading_2: post.subheading_2,
                content_2: post.content_2,
              }}
              className="transition-colors duration-500 text-yellow-500 px-4 py-2 mt-10 border-b-4 border-[#ffe47a]  hover:text-black hover:bg-yellow-400"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
