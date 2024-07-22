import React from "react";
import { Taskbar } from "./Taskbar";
import personalImg from "../assets/designer.jpeg";

export const About = () => {
  return (
    <div className=" mt-[-4rem]">
      <Taskbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className=" p-8 rounded-lg shadow-2xl w-full max-w-4xl mt-11">
          <h1 className="text-3xl text-center font-semibold mb-6">About Me</h1>

          <div className="mb-6">
            <img
              src={personalImg}
              className="w-48 h-48 mx-auto rounded-full border-4 border-gray-700 object-cover"
            />

            <p className="text-center text-gray-400">
              Historian, Writer, Enthusiast
            </p>
          </div>

          <p className="mb-4 leading-relaxed">
            Welcome to 'Shadowed Histories.' I am a passionate historian
            dedicated to uncovering the forgotten stories of our past. Through
            this blog, I aim to bring to light the incredible tales of
            lesser-known inventors, obscure historical events, and fascinating
            scientific phenomena that have shaped our world in ways we often
            overlook.
          </p>

          <p className="mb-4 leading-relaxed">
            With a deep love for history and a keen interest in the bizarre and
            the extraordinary, I strive to provide well-researched, engaging,
            and informative content that sparks curiosity and broadens your
            understanding of the world. Each post is a journey into the shadows
            of history, uncovering the mysteries and marvels that have been
            hidden away.
          </p>

          <p className="mb-4 leading-relaxed">
            Join me as we explore the forgotten corners of the past and discover
            the stories of those who have made a lasting impact despite being
            overshadowed by more famous names. Whether you are a fellow history
            enthusiast, a curious learner, or someone who loves a good story,
            'Shadowed Histories' has something for you.
          </p>

          <p className="leading-relaxed">
            Thank you for visiting, and I hope you enjoy the journey through
            time as much as I do.
          </p>
        </div>
      </div>
    </div>
  );
};
