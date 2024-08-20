import React from "react";
import { Post } from "./components/Post";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { ScrollTop } from "./components/ScrollTop";
import { HomePage } from "./components/HomePage";
import { PrivacyPolicy } from "./components/PrivacyPolicy";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Post" element={<Post />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

// {
//   "key": 8,
//   "title": "",
//   "description": "",
//   "date": "August 14, 2024",
//   "imagePath": "./imgs/voynich.jpg",
//   "introduction": "",
//   "subheading_1": "",
//   "content_1": "",
//   "subheading_2": "",
//   "content_2": ""
// }
