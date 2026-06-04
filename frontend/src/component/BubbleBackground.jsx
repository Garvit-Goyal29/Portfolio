import React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";

function BubbleBackground({
  className = "",
  children,
  interactive = false,
  transition = { stiffness: 100, damping: 20 },
  colors = {
    first: "18,113,255",
    second: "221,74,255",
    third: "0,220,255",
    fourth: "200,50,50",
    fifth: "180,180,50",
    sixth: "140,100,255",
  },
  ...props
}) {
  const containerRef = React.useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, transition);
  const springY = useSpring(mouseY, transition);

  const rectRef = React.useRef(null);
  const rafIdRef = React.useRef(null);

  React.useLayoutEffect(() => {
    const updateRect = () => {
      if (containerRef.current) {
        rectRef.current =
          containerRef.current.getBoundingClientRect();
      }
    };

    updateRect();

    const ro = new ResizeObserver(updateRect);

    if (containerRef.current) {
      ro.observe(containerRef.current);
    }

    window.addEventListener("resize", updateRect);
    window.addEventListener("scroll", updateRect);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateRect);
      window.removeEventListener("scroll", updateRect);
    };
  }, []);

  React.useEffect(() => {
    if (!interactive) return;

    const el = containerRef.current;

    if (!el) return;

    const handleMouseMove = (e) => {
      const rect = rectRef.current;

      if (!rect) return;

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }

      rafIdRef.current = requestAnimationFrame(() => {
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
      });
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [interactive]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden bg-gradient-to-br from-purple-400 to-black ${className}`}
      {...props}
    >
      <style>{`
        :root{
          --first-color:${colors.first};
          --second-color:${colors.second};
          --third-color:${colors.third};
          --fourth-color:${colors.fourth};
          --fifth-color:${colors.fifth};
          --sixth-color:${colors.sixth};
        }
      `}</style>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute w-0 h-0"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="16"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 18 -8"
              result="goo"
            />
            <feBlend
              in="SourceGraphic"
              in2="goo"
            />
          </filter>
        </defs>
      </svg>

      <div
        className="absolute inset-0"
        style={{
          filter: "url(#goo) blur(40px)",
        }}
      >
        <motion.div
          className="absolute rounded-full w-[80%] h-[80%] top-[10%] left-[10%] mix-blend-hard-light"
          style={{
            background:
              "radial-gradient(circle at center, rgba(var(--first-color),0.8) 0%, rgba(var(--first-color),0) 50%)",
          }}
          animate={{ y: [-50, 50, -50] }}
          transition={{
            duration: 30,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />

        <motion.div
          className="absolute inset-0 flex justify-center items-center"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <div
            className="rounded-full w-[80%] h-[80%] mix-blend-hard-light"
            style={{
              background:
                "radial-gradient(circle at center, rgba(var(--second-color),0.8) 0%, rgba(var(--second-color),0) 50%)",
            }}
          />
        </motion.div>

        <motion.div
          className="absolute rounded-full w-[80%] h-[80%] top-[10%] left-[10%] mix-blend-hard-light opacity-70"
          style={{
            background:
              "radial-gradient(circle at center, rgba(var(--fourth-color),0.8) 0%, rgba(var(--fourth-color),0) 50%)",
          }}
          animate={{ x: [-50, 50, -50] }}
          transition={{
            duration: 40,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />

        {interactive && (
          <motion.div
            className="absolute rounded-full w-full h-full mix-blend-hard-light opacity-70"
            style={{
              x: springX,
              y: springY,
              background:
                "radial-gradient(circle at center, rgba(var(--sixth-color),0.8) 0%, rgba(var(--sixth-color),0) 50%)",
            }}
          />
        )}
      </div>

      {children}
    </div>
  );
}

export default BubbleBackground;