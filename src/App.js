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
          <Route path="/shadowed-histories" element={<HomePage />} />
          <Route path="/shadowed-histories/Post" element={<Post />} />
          <Route path="/shadowed-histories/About" element={<About />} />
          <Route path="/shadowed-histories/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
