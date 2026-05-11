import { useEffect, useRef } from "react";
import "./Ready.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Ready() {
  const innerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth <= 768) return;

    const el = innerRef.current;

    gsap.fromTo(
      el,
      {
        x: "60vw",
        y: "10vh",
        rotation: 12,
        scale: 1.8,
        transformOrigin: "left bottom",
      },
      {
        x: "-60vw",
        y: "-20vh",
        rotation: 0,
        scale: 1,
        transformOrigin: "left bottom",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <>
      {/* DESKTOP */}
      <section className="ready ready--desktop" ref={sectionRef}>
        <div className="ready__center">
          <div ref={innerRef} className="ready__inner">
            <h1 className="ready__title">
              Ready to Rise At Seven?
            </h1>
          </div>
        </div>
      </section>

      {/* MOBILE */}
      <section className="ready-mobile">
        <button className="ready-mobile__btn">
          Explore More Thoughts ↗
        </button>
      </section>
    </>
  );
}