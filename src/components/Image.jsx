import { useRef } from "react";
import myimage2 from "../assets/myimage2.jpg";
import hero from "../assets/hero.png";

const Image = () => {
  const containerRef = useRef(null);
  const hideTimerRef = useRef(null);

  const updatePosition = (clientX, clientY) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;

    containerRef.current.style.setProperty("--x", `${x}%`);
    containerRef.current.style.setProperty("--y", `${y}%`);
    containerRef.current.style.setProperty("--active", "1");
  };

  const startAutoHide = () => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);

    hideTimerRef.current = setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.style.setProperty("--active", "0");
      }
    }, 3000);
  };

  const handleMouseMove = (e) => {
    updatePosition(e.clientX, e.clientY);
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    if (!touch) return;

    updatePosition(touch.clientX, touch.clientY);
    startAutoHide();
  };

  const resetMask = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty("--active", "0");
    }
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetMask}
      onTouchStart={handleTouchMove}
      onTouchMove={handleTouchMove}
      onTouchEnd={startAutoHide}
      className="relative cursor-pointer w-full mx-auto touch-pan-y"
      style={{
        "--x": "50%",
        "--y": "50%",
        "--active": "0",
      }}
    >
      <img
        src={myimage2}
        className="w-full h-auto block"
        alt="Black & White Image"
      />

      <img
        src={hero}
        alt="Color image"
        className="
          absolute inset-0 w-full h-full object-cover
          transition: mask-image 2000ms ease-out;
          [mask-image:radial-gradient(circle_calc(min(180px,70vw)_*_var(--active))_at_var(--x)_var(--y),black_0%,transparent_70%)]
        "
      />
    </div>
  );
};

export default Image;
