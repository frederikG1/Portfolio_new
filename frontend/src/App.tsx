import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  const [backendMessage, setBackendMessage] = useState("");

  useEffect(() => {
    // 1. React requests '/api'
    // 2. Vite proxy secretly forwards this to 'http://localhost:8080/api'
    fetch("/api")
      .then((response) => response.text()) // Using .text() because our backend sends a plain string
      .then((data) => {
        setBackendMessage(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>My Full-Stack Portfolio</h1>
      <p>
        Message from server: <strong>{backendMessage}</strong>
      </p>
      <div>
        <Navbar />
        <Hero />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
