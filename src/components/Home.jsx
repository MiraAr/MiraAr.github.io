import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Resume from "./Resume";
import Contact from "./Contact";
import About from "./About";
import Projects from "./Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </>
  );
}
