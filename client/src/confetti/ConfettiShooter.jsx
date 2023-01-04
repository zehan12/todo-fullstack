import React, { useState, useRef } from "react";
import confetti  from "canvas-confetti";

const ConfettiShooter = ({ onClick }) => {
  const confettiRef = useRef(null);

  const defaults = {
    spread: 360,
    ticks: 50,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ["star"],
    colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
  };

  const shoot = () => {
    confetti({
      ...defaults,
      particleCount: 40,
      scalar: 1.2,
      shapes: ["star"],
      target: confettiRef.current,
    });

    confetti({
      ...defaults,
      particleCount: 10,
      scalar: 0.75,
      shapes: ["circle"],
      target: confettiRef.current,
    });
  };

  return (
    <div>
      <button onClick={onClick}>
        Show Confetti
      </button>
      <div ref={confettiRef}>
        {shoot()}
      </div>
    </div>
  );
};

export default ConfettiShooter;