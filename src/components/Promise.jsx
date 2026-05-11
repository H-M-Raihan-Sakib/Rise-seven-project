import { useEffect, useRef, useState } from "react";
import "./Promise.css";

const items = [
  "CHASING CONSUMERS",
  "NOT ALGORITHMS",
];

export default function Promise() {
  const [cursor, setCursor] = useState({ x: -200, y: -200, visible: false });
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const move  = (e) => setCursor({ x: e.clientX, y: e.clientY, visible: true });
    const enter = ()  => setCursor((c) => ({ ...c, visible: true }));
    const leave = ()  => setCursor((c) => ({ ...c, visible: false }));

    section.addEventListener("mousemove", move);
    section.addEventListener("mouseenter", enter);
    section.addEventListener("mouseleave", leave);
    return () => {
      section.removeEventListener("mousemove", move);
      section.removeEventListener("mouseenter", enter);
      section.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <section className="promise" ref={sectionRef}>

      {/* Custom cursor */}
      <div
        className="promise__cursor"
        style={{
          transform: `translate(${cursor.x}px, ${cursor.y}px)`,
          opacity: cursor.visible ? 1 : 0,
        }}
      >
        Send us your Brief
      </div>

      <div className="promise__track">
        {[...items, ...items, ...items].map((text, i) => (
          <div key={i} className="promise__item">
            <span className="promise__text">{text}</span>
            <span className="promise__img">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=200"
                alt=""
              />
            </span>
          </div>
        ))}
      </div>

    </section>
  );
}