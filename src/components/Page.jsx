import { useEffect, useState, useCallback } from "react";
import Navbar from "./Navbar";
import "./page.css";

const Page = () => {
  const [showXXV, setShowXXV] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);

  const scrambleEffect = useCallback((onComplete) => {
    const plinthEl = document.querySelector("[data-text='PLINTH']");
    if (!plinthEl) return;

    const words = Array(26)
      .fill(0)
      .map((_, i) => String.fromCharCode(i + 65)); // A-Z

    const getRandomString = (len) => {
      const wordsCopy = words.slice();
      wordsCopy.sort(() => 0.5 - Math.random());
      return wordsCopy.slice(0, len).join("");
    };

    let settledIndex = 0;
    const originalText = "PLINTH";
    const totalDuration = 1000; // Total duration of the scramble effect in ms
    const intervalDuration = 80; // Duration between each update
    const iterations = totalDuration / intervalDuration;
    let currentIteration = 0;

    const interval = setInterval(() => {
      currentIteration++;
      let randomString = getRandomString(originalText.length);

      // Calculate settled index based on current iteration
      settledIndex = Math.floor((currentIteration / iterations) * originalText.length);

      const currentText = Array.from(originalText)
        .map((char, i) => {
          if (i < settledIndex) return char;
          if (char === " ") return " ";
          return randomString[i];
        })
        .join("");

      plinthEl.textContent = currentText;

      if (currentIteration >= iterations) {
        clearInterval(interval);
        plinthEl.textContent = originalText;
        if (onComplete) onComplete();
      }
    }, intervalDuration);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cleanup = scrambleEffect(() => {
        setShowXXV(true);
      setTimeout(() => {
        setShowComingSoon(true);
      }, 1050); // Delay for "coming soon"
    });
    return cleanup;
  }, [scrambleEffect]);

  return (
    <>
      <Navbar />
      
      <div className="bg-black h-screen flex flex-col justify-center items-center relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div
            data-text="PLINTH"
            className="bg-Green-gradient bg-clip-text text-transparent text-[14rem] font-extrabold font-akira leading-none tracking-[1.7rem]"
          >
            PLINTH
          </div>
          <div
            className={`bg-White-gradient bg-clip-text text-transparent text-[14rem] font-extrabold font-akira leading-none tracking-[-0.07em]  px-4 transition-opacity duration-100 ${
              showXXV ? 'opacity-100 animate-slideIn' : 'opacity-0'
            }`}
          >
            XXV
          </div>
          <div
            className={`text-[5rem]  transition-opacity duration-500 ${
              showComingSoon ? 'opacity-100 typewriter' : 'opacity-0'
            }`}
          >
            <h1>coming soon</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
