import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Starfield from "./Starfield";
import { FaRocket, FaStar, FaBolt, FaCode } from "react-icons/fa";

const PageLoader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);
  const rocketRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Fade-in title animation
      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 20, filter: "blur(4px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
        }
      )
        .to(
          textRef.current,
          { letterSpacing: 2, duration: 0.8, ease: "sine.inOut" },
          "<"
        )
        .to(
          textRef.current,
          { opacity: 0.9, yoyo: true, repeat: 1, duration: 0.4 },
          "<"
        );

      // Progress bar animation
      if (barRef.current) {
        gsap.set(barRef.current, { width: "0%" });
        gsap.to(barRef.current, {
          width: "100%",
          duration: 2.2,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
        });
      }

      // Floating icons animation
      const icons = gsap.utils.toArray<HTMLElement>(".loader-icon");
      icons.forEach((el, i) => {
        gsap.to(el, {
          y: "random(-6,6)",
          opacity: 0.9,
          duration: "random(1.2,2.2)",
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: i * 0.1,
        });
      });

      // Rotating rocket animation
      if (rocketRef.current) {
        gsap.to(rocketRef.current, {
          rotate: 360,
          duration: 4,
          ease: "linear",
          repeat: -1,
        });
      }
    }, overlayRef);

    // Hide loader after page load
    const onReady = () => {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => setIsVisible(false),
      });
    };

    if (document.readyState === "complete") {
      setTimeout(onReady, 700);
    } else {
      const handleLoad = () => setTimeout(onReady, 500);
      window.addEventListener("load", handleLoad, { once: true });
      return () => {
        window.removeEventListener("load", handleLoad);
        ctx.revert();
      };
    }

    return () => ctx.revert();
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black"
    >
      {/* Starfield Background */}
      <Starfield className="absolute inset-0" opacity={0.5} starCount={1500} depth={700} />

      <div className="relative z-10 select-none flex flex-col items-center gap-6">
        {/* Top icons */}
        <div className="flex items-center gap-6 text-gray-400">
          <FaStar className="loader-icon" size={20} />
          <FaCode className="loader-icon" size={22} />
          <FaBolt className="loader-icon" size={20} />
        </div>

        {/* Title */}
        <div ref={textRef} className="text-center">
          <div className="text-xs tracking-[0.35em] text-gray-300">WELCOME</div>
          <div className="mt-2 text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-red-500 via-gray-200 to-red-500 bg-clip-text text-transparent">
            Loading Portfolio
          </div>
        </div>

        {/* Progress bar */}
        <div className="relative w-64 md:w-80 h-[4px] rounded-full overflow-hidden bg-white/10 shadow-lg">
          <div
            ref={barRef}
            className="h-full rounded-full bg-gradient-to-r from-red-500 via-gray-200 to-red-500 shadow-[0_0_20px_rgba(185,28,28,0.7)]"
            style={{ width: "0%" }}
          />
        </div>

        {/* Rotating rocket */}
        <div className="flex items-center gap-6 text-gray-400">
          <FaCode className="loader-icon" size={20} />
          <div ref={rocketRef}>
            <FaRocket className="loader-icon text-red-500 drop-shadow-[0_0_10px_rgba(255,0,0,0.7)]" size={26} />
          </div>
          <FaStar className="loader-icon" size={20} />
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
