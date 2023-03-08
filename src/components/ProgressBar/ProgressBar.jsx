import React, { useEffect, useState } from "react";

function ProgressBar({ height, position, background }) {
  const [start, setStart] = useState(0);
  const handleScroll = () => {
    let pixels = window.pageYOffset;
    let pageHeight = document.body.getBoundingClientRect().height;
    let windowHeight = window.innerHeight;
    let progress = (100 * pixels) / (pageHeight - windowHeight);
    setStart(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div
      style={{
        background: background,
        width:`${start > 100 ? 100 : start}%`,
        height: height,
        position: position,
      }}
    >

    </div>
  );
}

export default ProgressBar;