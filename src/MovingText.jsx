import { useState, useEffect } from "react";
import './App.css';

export default function MovingText() {
  const [offset, setOffset] = useState(0);
  
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 3);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <h2
      className="font100 text-white fixed top-20 left-0 transition-transform duration-200 ease-out"
      style={{ transform: `translateX(-${offset}px)` }}
    >
      Let’s make something great together
    </h2>
  );
}
