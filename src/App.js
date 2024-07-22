import React from "react";
import { Post } from "./components/Post";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { ScrollTop } from "./components/ScrollTop";

import { HomePage } from "./components/HomePage";

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
