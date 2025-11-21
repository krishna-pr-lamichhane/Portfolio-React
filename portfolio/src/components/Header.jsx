import {useEffect, useRef } from "react";
import './Header.css';

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!headerRef.current) return;

      if (window.scrollY > 30) {
        headerRef.current.classList.add("small");
      } else {
        headerRef.current.classList.remove("small");
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={headerRef} className="header bg-sky-200">
      <div className="blank"></div>
      <div className="navigation">
        <a href="#aboutme" className="font-mono hover:underline hover:opacity-60">About Me</a>
        <a href="#skills" className="font-mono hover:underline hover:opacity-60">Skills</a>
        <a href="#projects" className="font-mono hover:underline hover:opacity-60">My Projects</a>
        <a href="#contactme" className="font-mono hover:underline hover:opacity-60">Contact Me</a>
      </div>
    </div>
  );
};

export default Header;