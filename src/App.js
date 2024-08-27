import React from "react";
import { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Lessons from "./components/Lessons";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const home = useRef(null);
  const contact = useRef(null);
  const offer = useRef(null);
  const about = useRef(null);

  return (
    <div>
      <Navbar
        refHome={home}
        refContact={contact}
        refOffer={offer}
        refAbout={about}
      />
      <Hero ref={home} />
      <About ref={about} />
      <Contact ref={contact} />
      <Lessons ref={offer} />
      <Footer />
    </div>
  );
}

export default App;
